/* ==========================================================================
   DDI COMPANY RATINGS
   --------------------------------------------------------------------------
   This is the only file you should need to edit to publish a new rating.

   To add a company: copy one whole { ... } block below (including the
   comma after it), paste it above the closing "];", and change the values.
   You do NOT need to calculate the DDI score or the state (Sub-Dropleton /
   Transitional / Dropleton State / Critical Dropleton) yourself — app.js
   works those out automatically from ads, ows, and rvs.

   Fields:
     name         - company name, e.g. "Acme Freight Ltd"
     sector       - short sector line shown under the name
     logo         - path to a logo image file, e.g. "images/logos/acme.png"
                    Leave as "" (empty quotes) if you don't have one yet —
                    a plain initials badge is shown instead automatically.
                    To add a logo: save the image file inside the
                    images/logos folder, then put its filename here.
     headline     - one short bold line, the verdict at a glance
     body         - the main paragraph(s) of analysis — what the data shows
     ads          - Asset Density Score,      a number from 1 to 10
     ows          - Opportunity Window Score, a number from 1 to 10
     rvs          - Response Velocity Score,  a number from 1 to 10
     conclusion   - the closing takeaway paragraph
     illustrative - optional. Set to true ONLY for made-up demo companies
                    (shows a "Composite Example" tag). Leave it out entirely
                    for real, researched companies.
   ========================================================================== */

const companies = [
  {
    name: "Karoo Freight Holdings",
    sector: "Composite · Logistics & freight",
    logo: "",
    illustrative: true,
    headline: "Asset-rich, but too slow to defend short-cycle wins.",
    body: "Karoo Freight carries a heavy fleet and terminal footprint, with long-term debt at 61% of total capital and a 94-day cash conversion cycle. It operates in a sector where tender windows open and close every 30–60 days, and competitor disruptions occurred four times in the past 18 months.",
    ads: 8,
    ows: 7,
    rvs: 3,
    conclusion: "An 11-week response lag to the last competitor disruption meant every short-cycle tender in that window went uncontested. The company has the balance sheet to compete — it does not yet have the decision speed."
  }

  ,{
    name: "Shoprite Holdings Ltd",
    sector: "Consumer Retailing · Grocery & Quick Commerce",
    logo: "images/logos/shoprite.png",
    headline: "Massive physical density paired with unexpected, startup-level execution speed.",
    body: "Shoprite sits on a massive footprint, holding roughly ZAR 137.0 billion in total assets. <br><br><strong>Asset Density Score (ADS - 6):</strong> You'd think all that physical weight—like adding 72 new Checkers stores in a single year—would slow them down. It doesn't. Their financial flexibility is surprisingly strong. The balance sheet carries ZAR 15.2 billion in cash against just ZAR 6.8 billion in debt, leaving them with a lean debt-to-equity ratio of 22.1%. Basically, they have the cash lying around to fund sudden strategic moves without getting bogged down looking for outside capital.<br><br><strong>Opportunity Window Score (OWS - 8):</strong> Quick-commerce grocery is a brutal space where windows close in minutes. On top of that, Shoprite operates in a tight market. Their internal selling price inflation (0.8%) is way below South Africa's official 3.9% food inflation. They can't rely on price hikes to drive growth. They have to rely on sheer volume and the ability to win over consumers in the exact moment they decide to buy.<br><br><strong>Response Velocity Score (RVS - 2):</strong> This is where they break the mold for a legacy retailer. Shoprite realized that relying on a third-party logistics crew would eventually bottleneck their delivery times. They didn't wait around. They outright bought their last-mile partner, Pingo, in 2024. Bringing that completely in-house gave them total control, pushing Checkers Sixty60's average delivery time under 35 minutes. Because they can execute this fast, Sixty60 sales surged 34.5% to hit R25.5 billion by mid-2026. They grab market share before conventional competitors even finish their procurement meetings.<br><br><small><strong>Data Sources & Referencing:</strong><br>• <em>Asset & Liquidity Data:</em> Shoprite Holdings Balance Sheet & Financial Health Metrics (Total Assets, Debt, Cash Equivalents).<br>• <em>Operational Velocity:</em> Shoprite Group / Pingo Logistics Acquisition Disclosures & Sixty60 Delivery Metrics (2024/2026).<br>• <em>Market Capture:</em> Shoprite Holdings Financial Results for the 52 weeks to June 2026 (Digital commerce growth, internal inflation metrics).</small>",
    ads: 6,
    ows: 8,
    rvs: 2,
    conclusion: "Shoprite acts more like a tech company than a traditional grocer. Because they own their entire logistics chain and sit on a pile of cash, they jump on fleeting market shifts while their rivals are still stuck in committee."
  }

  /* Add the next company below this line. Example:

  ,{
    name: "Example Company Pty Ltd",
    sector: "Sector description here",
    logo: "",
    headline: "One short verdict line.",
    body: "The main paragraph of analysis.",
    ads: 5,
    ows: 6,
    rvs: 4,
    conclusion: "The closing takeaway."
  }

  */
];
