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
    name: "Shoprite Holdings Ltd",
    sector: "Consumer Retailing · Grocery & Quick Commerce",
    logo: "images/logos/shoprite.png",
    headline: "Massive physical density paired with unexpected, startup-level execution speed.",
    body: "Shoprite sits on a massive footprint, holding roughly ZAR 137.0 billion in total assets. <br><br><strong>Asset Density Score (ADS - 6):</strong> You'd think all that physical weight—like adding 72 new Checkers stores in a single year—would slow them down. It doesn't. Their financial flexibility is surprisingly strong. The balance sheet carries ZAR 15.2 billion in cash against just ZAR 6.8 billion in debt, leaving them with a lean debt-to-equity ratio of 22.1%. Basically, they have the cash lying around to fund sudden strategic moves without getting bogged down looking for outside capital.<br><br><strong>Opportunity Window Score (OWS - 8):</strong> Quick-commerce grocery is a brutal space where windows close in minutes. On top of that, Shoprite operates in a tight market. Their internal selling price inflation (0.8%) is way below South Africa's official 3.9% food inflation. They can't rely on price hikes to drive growth. They have to rely on sheer volume and the ability to win over consumers in the exact moment they decide to buy.<br><br><strong>Response Velocity Score (RVS - 9):</strong> This is where they break the mold for a legacy retailer. Shoprite realized that relying on a third-party logistics crew would eventually bottleneck their delivery times. They didn't wait around. They outright bought their last-mile partner, Pingo, in 2024. Bringing that completely in-house gave them total control, pushing Checkers Sixty60's average delivery time under 35 minutes. Because they can execute this fast, Sixty60 sales surged 34.5% to hit R25.5 billion by mid-2026. They grab market share before conventional competitors even finish their procurement meetings.<br><br><small><strong>Data Sources & Referencing:</strong><br>• <em>Asset & Liquidity Data:</em> Shoprite Holdings Balance Sheet & Financial Health Metrics (Total Assets, Debt, Cash Equivalents).<br>• <em>Operational Velocity:</em> Shoprite Group / Pingo Logistics Acquisition Disclosures & Sixty60 Delivery Metrics (2024/2026).<br>• <em>Market Capture:</em> Shoprite Holdings Financial Results for the 52 weeks to June 2026 (Digital commerce growth, internal inflation metrics).</small>",
    ads: 6,
    ows: 8,
    rvs: 9,
    conclusion: "Shoprite acts more like a tech company than a traditional grocer. Because they own their entire logistics chain and sit on a pile of cash, they jump on fleeting market shifts while their rivals are still stuck in committee."
  }

  ,{
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

  ,{
    name: "Amazon.com, Inc.",
    sector: "E-Commerce, Cloud Computing & Logistics",
    logo: "images/logos/amazon.png",
    headline: "Massive infrastructure that acts like rocket fuel instead of dead weight.",
    body: "Amazon reported roughly $717 billion in revenue for 2025, with AWS alone growing 20% year-over-year to about $129 billion.<br><br><strong>Asset Density Score (ADS - 4):</strong> On paper, Amazon looks like the heaviest company imaginable — fulfillment centers, data centers, warehouses, property and equipment north of $357 billion. But none of that behaves like dead weight. AWS is the clearest example: Amazon pours billions into server infrastructure once, then rents that same capacity out to millions of customers around the world. The size is real, but it's built to move, not sit still.<br><br><strong>Opportunity Window Score (OWS - 10):</strong> Amazon doesn't operate in one fast-moving sector. It operates in several at once — cloud computing, AI infrastructure, digital retail, logistics, advertising, streaming. Each of those is being reshaped constantly, and Amazon sits inside all of them at the same time. It's hard to find a company more exposed to short-window opportunity than this one.<br><br><strong>Response Velocity Score (RVS - 9):</strong> AWS is the case study here. Amazon didn't wait for a competitor to solve enterprise cloud computing — it took its own internal server problem and turned it into a business almost nobody saw coming until it was already dominant. The company runs on small, independent teams that can ship without waiting on layers of approval, and it's kept using that same playbook: Whole Foods, Twitch, Ring, MGM, and now AI infrastructure like Bedrock and Trainium.<br><br><small><strong>Data Sources & Referencing:</strong><br>• <em>Financials:</em> Amazon.com, Inc. Form 10-K Annual Report (2025); Amazon 2025 Letter to Shareholders.<br>• <em>Segment performance:</em> AWS revenue and growth figures, Amazon Investor Relations.<br>• <em>Strategic pattern:</em> Amazon acquisition and product-expansion history (AWS, Whole Foods, Twitch, Ring, MGM, Bedrock/Trainium).</small>",
    ads: 4,
    ows: 10,
    rvs: 9,
    conclusion: "Amazon's edge was never really its size — plenty of companies have money, people, and infrastructure and still move slowly. What sets it apart is turning a customer problem into an experiment, then infrastructure, then a market position, faster than almost anyone else operating at this scale. Given how disruptive its markets are, this is close to the best result the index can produce."
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
