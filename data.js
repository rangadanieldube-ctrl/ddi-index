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
   ========================================================================== */

const companies = [
  {
    name: "Karoo Freight Holdings",
    sector: "Composite · Logistics & freight",
    logo: "",
    headline: "Asset-rich, but too slow to defend short-cycle wins.",
    body: "Karoo Freight carries a heavy fleet and terminal footprint, with long-term debt at 61% of total capital and a 94-day cash conversion cycle. It operates in a sector where tender windows open and close every 30–60 days, and competitor disruptions occurred four times in the past 18 months.",
    ads: 8,
    ows: 7,
    rvs: 3,
    conclusion: "An 11-week response lag to the last competitor disruption meant every short-cycle tender in that window went uncontested. The company has the balance sheet to compete — it does not yet have the decision speed."
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
