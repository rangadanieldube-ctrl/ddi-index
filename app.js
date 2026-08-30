/* ==========================================================================
   DDI RENDER LOGIC
   --------------------------------------------------------------------------
   You shouldn't normally need to edit this file. It reads the "companies"
   array from data.js, works out each DDI score and state, and builds the
   rating cards on the home page.
   ========================================================================== */

function calculateDDI(ads, ows, rvs) {
  return (ads * ows) / rvs;
}

function getState(ddi) {
  if (ddi < 2.0)  return { label: "Sub-Dropleton",     tag: "state-sub"   };
  if (ddi < 5.0)  return { label: "Transitional",      tag: "state-trans" };
  if (ddi < 8.0)  return { label: "Dropleton State",   tag: "state-drop"  };
  return              { label: "Critical Dropleton", tag: "state-crit" };
}

function scoreBarWidth(score) {
  // scores run 1-10, this turns them into a 0-100% bar width
  return Math.max(0, Math.min(100, score * 10)) + "%";
}

function getInitials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join("");
}

function slugify(name) {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function buildCompanyCard(company) {
  const ddi = calculateDDI(company.ads, company.ows, company.rvs);
  const state = getState(ddi);
  const hasLogo = company.logo && company.logo.trim() !== "";

  const card = document.createElement("a");
  card.className = "case-card";
  card.href = `company.html?c=${encodeURIComponent(slugify(company.name))}`;
  card.innerHTML = `
    <div class="case-top">
      ${hasLogo
        ? `<img class="case-logo" src="${company.logo}" alt="${company.name} logo">`
        : `<div class="case-logo-fallback">${getInitials(company.name)}</div>`
      }
      <div>
        <h3>${company.name}</h3>
        <div class="case-sector">${company.sector}${company.illustrative ? ' <span class="illustrative-badge">Composite Example</span>' : ''}</div>
      </div>
    </div>

    <p class="case-headline">${company.headline}</p>
    <p class="case-body">${company.body}</p>

    <div class="case-scores">
      <div class="score-row ads">
        <span class="label">ADS</span>
        <span class="bar-track"><span class="bar-fill" style="width:${scoreBarWidth(company.ads)}"></span></span>
        <span class="value">${company.ads}</span>
      </div>
      <div class="score-row ows">
        <span class="label">OWS</span>
        <span class="bar-track"><span class="bar-fill" style="width:${scoreBarWidth(company.ows)}"></span></span>
        <span class="value">${company.ows}</span>
      </div>
      <div class="score-row rvs">
        <span class="label">RVS</span>
        <span class="bar-track"><span class="bar-fill" style="width:${scoreBarWidth(company.rvs)}"></span></span>
        <span class="value">${company.rvs}</span>
      </div>
    </div>
    <div class="ddi-readout">
      <span class="ddi-number">${ddi.toFixed(1)}</span>
      <span class="ddi-caption"><span class="state-tag ${state.tag}">${state.label}</span></span>
    </div>

    <p class="case-conclusion"><strong>Conclusion</strong>${company.conclusion}</p>
  `;

  // If a logo path was given but the file can't be found, fall back
  // to the initials badge instead of showing a broken image icon.
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
  grid.innerHTML = "";
  companies.forEach(company => grid.appendChild(buildCompanyCard(company)));

  // Update the "scroll to see all ratings" cue with the real count,
  // and hide it once the visitor actually starts scrolling.
  const cueText = document.getElementById("scroll-cue-text");
  const cue = document.getElementById("scroll-cue");
  if (cueText) {
    const count = companies.length;
    cueText.textContent = count === 1
      ? "1 company rated — scroll to see it"
      : `${count} companies rated — scroll to see all`;
  }
  if (cue) {
    const hideCue = () => { cue.style.opacity = "0"; window.removeEventListener("scroll", hideCue); };
    window.addEventListener("scroll", hideCue, { passive: true });
  }
}

document.addEventListener("DOMContentLoaded", renderCompanies);
