/* ==========================================================================
   DDI RENDER LOGIC
   --------------------------------------------------------------------------
   Renders (1) the hover-to-expand rating cards into #case-grid and
   (2) the scroll-driven showcase deck into #showcase-stack.

   Expects:
     - a global `companies` array (load your data file BEFORE this file)
     - nothing else. The card stack is pure CSS (position: sticky).
       Lenis smooth scroll is optional: add
       <script src="https://unpkg.com/lenis@1.3.26/dist/lenis.min.js"></script>
       before this file and it is picked up automatically.

   On mobile, or with "reduce motion" on, the cards are a normal list.

   NOTE: keep this file saved as UTF-8. All special characters below are
   written as escapes/entities so a wrong-encoding save can't garble them.
   ========================================================================== */


/* ---------- Helpers (also used by other pages, keep the names) ---------- */

function calculateDDI(ads, ows, rvs) {
  // A missing / zero Response Velocity Score would give Infinity or NaN.
  if (!rvs) return 0;
  return (ads * ows) / rvs;
}


function getState(ddi) {
  if (ddi < 2.0) return { label: "Sub-Dropleton",     tag: "state-sub"   };
  if (ddi < 5.0) return { label: "Transitional",      tag: "state-trans" };
  if (ddi < 8.0) return { label: "Dropleton State",   tag: "state-drop"  };
  return               { label: "Critical Dropleton", tag: "state-crit"  };
}


function scoreBarWidth(score) {
  return Math.max(0, Math.min(100, (Number(score) || 0) * 10)) + "%";
}


function getInitials(name) {
  return String(name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join("");
}


function slugify(name) {
  return String(name || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}


/* Escape text that goes into an HTML attribute or plain-text slot. */
function escapeHTML(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}


/* Strip tags, collapse whitespace, cut on a word boundary. */
function plainExcerpt(html, max) {
  const text = String(html || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s.,;:!?-]+$/, "") + "\u2026";
}


function getCompanies() {
  return (typeof companies !== "undefined" && Array.isArray(companies)) ? companies : [];
}


function reportURL(company) {
  return "company.html?c=" + encodeURIComponent(slugify(company.name));
}


/* ==========================================================================
   RATING CARDS  (#case-grid)
   ========================================================================== */

function scoreRowHTML(cls, label, value) {
  return `
          <div class="score-row ${cls}">
            <span class="label">${label}</span>
            <span class="bar-track">
              <span class="bar-fill" style="width:${scoreBarWidth(value)}"></span>
            </span>
            <span class="value">${value}</span>
          </div>`;
}


function buildCompanyCard(company) {
  const ddi     = calculateDDI(company.ads, company.ows, company.rvs);
  const state   = getState(ddi);
  const name    = escapeHTML(company.name);
  const hasLogo = company.logo && company.logo.trim() !== "";

  const card = document.createElement("a");
  card.className = "case-card";
  card.href = reportURL(company);

  const logoHTML = hasLogo
    ? `<img class="case-logo" src="${escapeHTML(company.logo)}" alt="${name} logo" loading="lazy">`
    : `<div class="case-logo-fallback">${escapeHTML(getInitials(company.name))}</div>`;

  const badgeHTML = company.illustrative
    ? `<span class="illustrative-badge">Composite Example</span>`
    : "";

  card.innerHTML = `
    <span class="card-glow" aria-hidden="true"></span>

    <div class="case-content">

      <div class="case-dots" aria-hidden="true">
        <span class="dot-ads" title="Asset Density Score: ${company.ads}"></span>
        <span class="dot-ows" title="Opportunity Window Score: ${company.ows}"></span>
        <span class="dot-rvs" title="Response Velocity Score: ${company.rvs}"></span>
      </div>

      <div class="case-top">
        ${logoHTML}
        <div>
          <h3>${name}</h3>
          <span class="state-tag ${state.tag}">${state.label}</span>
        </div>
      </div>

      <span class="teaser-hint" aria-hidden="true">Hover for full rating &darr;</span>

      <div class="case-reveal">
        <div class="case-reveal__inner">

          <div class="case-sector">
            ${escapeHTML(company.sector)}
            ${badgeHTML}
          </div>

          <p class="case-headline">${company.headline}</p>

          <p class="case-body">${company.body}</p>

          <div class="case-scores">
            ${scoreRowHTML("ads", "ADS", company.ads)}
            ${scoreRowHTML("ows", "OWS", company.ows)}
            ${scoreRowHTML("rvs", "RVS", company.rvs)}
          </div>

          <div class="ddi-readout">
            <span class="ddi-number">${ddi.toFixed(1)}</span>
            <span class="ddi-caption">
              <span class="state-tag ${state.tag}">${state.label}</span>
            </span>
          </div>

          <p class="case-conclusion">
            <strong>Conclusion</strong>
            <br>
            ${company.conclusion}
          </p>

        </div>
      </div>

    </div>
  `;

  const logoImg = card.querySelector(".case-logo");
  if (logoImg) {
    logoImg.addEventListener("error", () => {
      const fallback = document.createElement("div");
      fallback.className = "case-logo-fallback";
      fallback.textContent = getInitials(company.name);
      logoImg.replaceWith(fallback);
    });
  }

  return card;
}


function renderCompanies() {
  const grid = document.getElementById("case-grid");
  if (!grid) return;

  const list = getCompanies();
  grid.innerHTML = "";
  list.forEach(company => grid.appendChild(buildCompanyCard(company)));

  const cue     = document.getElementById("scroll-cue");
  const cueText = document.getElementById("scroll-cue-text");
  const count   = list.length;

  if (cueText) {
    cueText.textContent = count === 1
      ? "1 company rated \u2014 scroll to see it"
      : count + " companies rated \u2014 scroll to see all";
  }

  if (cue) {
    window.addEventListener("scroll", () => { cue.style.opacity = "0"; }, { passive: true, once: true });
  }
}


/* ==========================================================================
   SHOWCASE STACK  (#showcase)
   --------------------------------------------------------------------------
   The stacking itself is pure CSS (position: sticky, see style.css), so it
   needs no GSAP and can't be "switched off" by a script that fails to load.
   This code only: builds the cards, tracks which card is on top, drives the
   01/02/03 jump buttons and (optionally) Lenis smooth scrolling.
   There is intentionally NO background colour change between cards.
   ========================================================================== */

function buildShowcaseCard(company, index, total) {
  total = total || getCompanies().length;

  const ddi     = calculateDDI(company.ads, company.ows, company.rvs);
  const state   = getState(ddi);
  const hasLogo = company.logo && company.logo.trim() !== "";
  const name    = escapeHTML(company.name);
  const href    = reportURL(company);
  const pad     = n => String(n).padStart(2, "0");

  const card = document.createElement("article");
  card.className = "showcase-card";
  card.dataset.state = state.tag;
  card.dataset.index = index;
  card.setAttribute("aria-label", company.name);
  card.style.setProperty("--i", index);

  const logoHTML = hasLogo
    ? `<img src="${escapeHTML(company.logo)}" alt="${name} logo">`
    : `<div class="showcase-card__logo-fallback">${escapeHTML(getInitials(company.name))}</div>`;

  const barHTML = (key, label, value) => `
        <div class="showcase-card__bar showcase-card__bar--${key}">
          <span class="showcase-card__bar-label">${label}</span>
          <span class="showcase-card__bar-track"><span class="showcase-card__bar-fill" style="width:${scoreBarWidth(value)}"></span></span>
          <span class="showcase-card__bar-value">${value}</span>
        </div>`;

  card.innerHTML = `
    <div class="showcase-card__grid">

      <div class="showcase-card__col showcase-card__col--text">
        <h2 class="showcase-card__heading">${company.headline}</h2>
        <div class="showcase-card__brand">
          <span class="showcase-card__brand-dot"></span>
          <span>${name}</span>
        </div>
      </div>

      <div class="showcase-card__col showcase-card__col--score">
        <span class="showcase-card__index">${pad(index + 1)} / ${pad(total)}</span>
        <div class="showcase-card__logo-stage">${logoHTML}</div>
        <div class="showcase-card__score">${ddi.toFixed(1)}</div>
        <div class="showcase-card__score-label">DDI Score</div>
        <span class="state-tag ${state.tag}">${state.label}</span>
      </div>

      <div class="showcase-card__col showcase-card__col--details">
        <h3 class="showcase-card__title">${name}</h3>
        <p class="showcase-card__desc">${escapeHTML(plainExcerpt(company.body, 200))}</p>
        <div class="showcase-card__bars">
          ${barHTML("ads", "ADS", company.ads)}
          ${barHTML("ows", "OWS", company.ows)}
          ${barHTML("rvs", "RVS", company.rvs)}
        </div>
        <div class="showcase-card__actions">
          <a class="showcase-card__btn showcase-card__btn--primary" href="${href}">View Full Report</a>
          <a class="showcase-card__btn showcase-card__btn--ghost" href="${href}" aria-label="Open ${name} report">&#8599;</a>
        </div>
      </div>

    </div>
  `;

  const img = card.querySelector(".showcase-card__logo-stage img");
  if (img) {
    img.addEventListener("error", () => {
      img.replaceWith(Object.assign(document.createElement("div"), {
        className: "showcase-card__logo-fallback",
        textContent: getInitials(company.name)
      }));
    });
  }

  return card;
}


/* Optional smooth scrolling. Only starts if the Lenis script is on the page:
   <script src="https://unpkg.com/lenis@1.3.26/dist/lenis.min.js"></script>
   Lenis scrolls the real page, so position: sticky keeps working. */
let smoothScroller = null;

function initSmoothScroll() {
  if (typeof Lenis === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  smoothScroller = new Lenis();
  const raf = time => {
    smoothScroller.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}


function initShowcase() {
  const section   = document.getElementById("showcase");
  const stack     = document.getElementById("showcase-stack");
  const navWidget = document.getElementById("showcase-nav");
  const list      = getCompanies();
  if (!section || !stack || !list.length) return;

  /* ---- 1. Build cards + jump buttons ---- */

  stack.innerHTML = "";
  list.forEach((c, i) => stack.appendChild(buildShowcaseCard(c, i, list.length)));

  const cards = Array.from(stack.querySelectorAll(".showcase-card"));
  const TOTAL = cards.length;

  let navThumbs = [];
  if (navWidget) {
    navWidget.innerHTML = "";
    cards.forEach((_, i) => {
      const btn = document.createElement("button");
      btn.className = "showcase-nav__thumb";
      btn.type = "button";
      btn.textContent = String(i + 1).padStart(2, "0");
      btn.setAttribute("aria-label", "Go to " + list[i].name);
      navWidget.appendChild(btn);
    });
    navThumbs = Array.from(navWidget.querySelectorAll(".showcase-nav__thumb"));
  }

  /* ---- 2. Keep the stack clear of the sticky site nav ---- */

  const siteNav = document.querySelector("header.site-nav");
  const stickyOn = window.matchMedia("(min-width: 861px) and (prefers-reduced-motion: no-preference)");

  function setDeckTop() {
    const navH = siteNav ? siteNav.offsetHeight : 0;
    section.style.setProperty("--deck-top", (navH + 16) + "px");
  }
  setDeckTop();

  /* ---- 3. Sticky can silently fail if a parent has overflow: hidden/auto. Say so. ---- */

  for (let el = stack.parentElement; el && el !== document.body && el !== document.documentElement; el = el.parentElement) {
    const cs = getComputedStyle(el);
    if (/hidden|auto|scroll/.test(cs.overflowX + " " + cs.overflowY)) {
      console.warn("Showcase cards can't stick: this parent has overflow hidden/auto/scroll. Remove it or use overflow: clip.", el);
      break;
    }
  }

  /* ---- 4. Track the top card + show the jump buttons while the stack is active ---- */

  function metrics() {
    const first    = cards[0];
    const cardH    = first.offsetHeight;
    const gap      = parseFloat(getComputedStyle(first).marginBottom) || 0;
    const stackTop = stack.getBoundingClientRect().top + window.scrollY;   // card 1's un-stuck position
    const top0     = parseFloat(getComputedStyle(first).top) || 0;         // where card 1 sticks
    return { cardH, step: cardH + gap, stackTop, top0 };
  }

  let ticking = false;

  function update() {
    ticking = false;

    if (!stickyOn.matches) {                                   // plain list layout: nothing to track
      if (navWidget) navWidget.classList.remove("is-visible");
      cards.forEach(c => c.removeAttribute("inert"));
      return;
    }

    const m = metrics();
    const y = window.scrollY;
    const startY   = m.stackTop - m.top0;                              // first card sticks
    const lastTop  = parseFloat(getComputedStyle(cards[TOTAL - 1]).top) || m.top0;
    const releaseY = m.stackTop + stack.offsetHeight - lastTop - m.step;     // whole pile scrolls away
    const active   = Math.min(TOTAL - 1, Math.max(0, Math.round((y - startY) / m.step)));

    if (navWidget) navWidget.classList.toggle("is-visible", y >= startY - 40 && y < releaseY);

    navThumbs.forEach((btn, n) => {
      btn.classList.toggle("is-active", n === active);
      if (n === active) btn.setAttribute("aria-current", "true"); else btn.removeAttribute("aria-current");
    });
    cards.forEach((c, n) => c.toggleAttribute("inert", n < active));   // buried cards can't take focus
  }

  function requestUpdate() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", () => { setDeckTop(); requestUpdate(); });
  if (stickyOn.addEventListener) stickyOn.addEventListener("change", requestUpdate);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(requestUpdate);
  update();

  /* ---- 5. Jump buttons ---- */

  navThumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", e => {
      e.preventDefault();
      if (!stickyOn.matches) return;
      const m = metrics();
      const stuckTop = parseFloat(getComputedStyle(cards[index]).top) || m.top0;
      const y = m.stackTop + index * m.step - stuckTop;              // scroll where card `index` is parked on top
      if (smoothScroller) smoothScroller.scrollTo(y, { duration: 1.1 });
      else window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
}


document.addEventListener("DOMContentLoaded", () => {
  renderCompanies();
  initShowcase();
  initSmoothScroll();
});
