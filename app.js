const companies = [
  {
    name: "Clientèle Limited",
    sector: "Financial Services · Legal & Short-Term Insurance",
    logo: "images/logos/clientele.png",
    headline: "A large, regulated insurer moving about as fast as regulation lets it.",
    body: "Clientèle Legal sits inside Clientèle Limited, a JSE-listed insurer that also runs Clientèle General, its short-term insurance arm. The group reported total assets of roughly R20.1 billion in its 2025 annual report, with about R10.7 billion held in financial assets at fair value and R875 million in cash.<br><br><strong>Asset Density Score (ADS - 5):</strong> Insurance balance sheets always look asset-heavy, since premiums get invested long before claims come due. That doesn't mean the company is stuck. What matters more is how much of that R20.1 billion is genuinely tied up versus sitting in liquid instruments, and with a large chunk in fair-value assets plus real cash on hand, Clientèle has more room to move than a typical asset-heavy company. That's why this sits in the middle rather than the high end.<br><br><strong>Opportunity Window Score (OWS - 7):</strong> Legal insurance isn't as chaotic as retail or tech, but it isn't sleepy either. Cost-of-living pressure keeps pushing people toward affordable legal cover, South Africa's legal system is expensive enough that access stays a real gap, and insurers are shifting hard toward app- and WhatsApp-based claims. None of that closes in days, but the market moves often enough to reward a company that keeps up.<br><br><strong>Response Velocity Score (RVS - 5):</strong> This is the hardest one to pin down from public information alone — internal approval times and launch speed just aren't disclosed anywhere. What's visible: Clientèle runs digital claims through WhatsApp and its app, and it picked up 1Life Insurance through acquisition. Both point to a company that does adapt. But it's still a regulated insurer, and regulation puts a real ceiling on how fast any insurer can move next to an unregulated digital competitor. Moderate is the fair read here — not fast, not stuck.<br><br><small><strong>Data Sources & Referencing:</strong><br>• <em>Balance sheet figures:</em> Clientèle Limited Integrated Annual Report 2025; JSE financial disclosures.<br>• <em>Digital & acquisition activity:</em> Clientèle claims process disclosures (WhatsApp/app claims); 1Life Insurance acquisition reporting.<br>• <em>Sector context:</em> Statistics South Africa household expenditure data; South African Reserve Bank economic reporting.</small>",
    ads: 5,
    ows: 7,
    rvs: 5,
    conclusion: "Clientèle isn't missing opportunities because something's wrong with it — it's a large, regulated insurer behaving the way large, regulated insurers do. The gap here is structural, not a performance failure: a smaller, unregulated digital competitor can simply move on a legal-access opportunity faster than a listed insurer ever will."
  }
];

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

    <p class="case-conclusion"><strong>Conclusion</strong><br>${company.conclusion}</p>
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

function buildPlaceholderCard() {
  const card = document.createElement("div");
  card.className = "case-card case-card--empty";
  card.innerHTML = `
    <div class="case-top"><h3>Next report</h3></div>
    <div class="case-sector">Slot reserved · TBD</div>
    <div class="empty-slot-body">
      <p>Add the next company to <code>data.js</code> and it appears here automatically.</p>
    </div>
  `;
  return card;
}

function renderCompanies() {
  const grid = document.getElementById("case-grid");
  if (!grid) return;
  grid.innerHTML = "";
  companies.forEach(company => grid.appendChild(buildCompanyCard(company)));
  grid.appendChild(buildPlaceholderCard());
}

document.addEventListener("DOMContentLoaded", renderCompanies);
