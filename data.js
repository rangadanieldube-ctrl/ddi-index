/* ==========================================================================
   DDI COMPANY RATINGS
   --------------------------------------------------------------------------
  Heres a guide Hers like A A  A  A Guide .

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
    "name": "Shoprite Holdings Ltd",
    "sector": "Consumer Retailing · Grocery & Quick Commerce",
    "logo": "images/logos/shoprite.png",
    "headline": "Shoprite's store network supports a fast delivery business.",
    "body": "Shoprite holds roughly ZAR 137.0 billion in assets. Its store network gives it reach, while its cash position gives it room to invest.<br><br><strong>Asset Density Score (ADS - 6):</strong> Shoprite added 72 Checkers stores in a year. Its balance sheet carries ZAR 15.2 billion in cash and ZAR 6.8 billion in debt, with a debt-to-equity ratio of 22.1%. The score balances that physical footprint against the cash available to fund new work.<br><br><strong>Opportunity Window Score (OWS - 8):</strong> Grocery delivery rewards quick responses. Shoprite's internal selling price inflation of 0.8%, compared with South Africa's 3.9% food inflation, also puts pressure on the business to grow sales volumes.<br><br><strong>Response Velocity Score (RVS - 9):</strong> Shoprite bought its last-mile partner Pingo in 2024. Bringing delivery in-house gave it more control over fulfilment. Checkers Sixty60's average delivery time was under 35 minutes, and sales grew 34.5% to R25.5 billion by mid-2026.<br><br><small><strong>Sources:</strong><br>• <em>Asset & Liquidity Data:</em> Shoprite Holdings Balance Sheet & Financial Health Metrics (Total Assets, Debt, Cash Equivalents).<br>• <em>Operational Velocity:</em> Shoprite Group / Pingo Logistics Acquisition Disclosures & Sixty60 Delivery Metrics (2024/2026).<br>• <em>Market Capture:</em> Shoprite Holdings Financial Results for the 52 weeks to June 2026 (Digital commerce growth, internal inflation metrics).</small>",
    "ads": 6,
    "ows": 8,
    "rvs": 9,
    "conclusion": "Shoprite's cash and delivery network help it respond quickly. The rating recognises its ability to put a large store base to work in grocery delivery."
  },
  {
    "name": "Clientèle Limited",
    "sector": "Financial Services · Legal & Short-Term Insurance",
    "logo": "images/logos/clientele.png",
    "headline": "Clientèle is adapting, with the constraints of a regulated insurer.",
    "body": "Clientèle Legal is part of Clientèle Limited, a JSE-listed insurer that also runs Clientèle General. Its 2025 annual report records roughly R20.1 billion in assets, including R10.7 billion in financial assets at fair value and R875 million in cash.<br><br><strong>Asset Density Score (ADS - 5):</strong> Insurers invest premiums before paying claims, so a large asset base needs context. Clientèle's financial assets and cash give it some flexibility. The score places it in the middle of the range.<br><br><strong>Opportunity Window Score (OWS - 7):</strong> The cost of legal services creates demand for affordable cover. Insurers are also shifting claims to apps and WhatsApp. These changes give companies reasons to improve access and service speed.<br><br><strong>Response Velocity Score (RVS - 5):</strong> Internal approval and launch times aren't available in the cited public information. Clientèle's digital claims channels and acquisition of 1Life show that it does adapt. The score also accounts for the regulatory requirements that shape its decisions.<br><br><small><strong>Sources:</strong><br>• <em>Balance sheet figures:</em> Clientèle Limited Integrated Annual Report 2025; JSE financial disclosures.<br>• <em>Digital & acquisition activity:</em> Clientèle claims process disclosures (WhatsApp/app claims); 1Life Insurance acquisition reporting.<br>• <em>Sector context:</em> Statistics South Africa household expenditure data; South African Reserve Bank economic reporting.</small>",
    "ads": 5,
    "ows": 7,
    "rvs": 5,
    "conclusion": "Clientèle has made changes to its products and claims process. Its rating reflects a moderate response speed within a regulated business."
  },
  {
    "name": "Amazon.com, Inc.",
    "sector": "E-Commerce, Cloud Computing & Logistics",
    "logo": "images/logos/amazon.png",
    "headline": "Amazon uses its infrastructure to launch and expand services.",
    "body": "Amazon reported roughly $717 billion in revenue for 2025. AWS revenue grew 20% to about $129 billion.<br><br><strong>Asset Density Score (ADS - 4):</strong> Amazon has more than $357 billion in property and equipment across warehouses, fulfilment centres and data centres. AWS shows how that investment can support new services: the same infrastructure serves many customers. The score accounts for how the assets are used as well as their size.<br><br><strong>Opportunity Window Score (OWS - 10):</strong> Amazon operates in cloud computing, AI infrastructure, retail, logistics, advertising and streaming. Changes in these markets create frequent opportunities that reward quick decisions.<br><br><strong>Response Velocity Score (RVS - 9):</strong> AWS grew out of Amazon's own computing needs. Small teams and continued product development support its response speed, alongside acquisitions including Whole Foods, Twitch, Ring and MGM. Bedrock and Trainium extend that approach to AI infrastructure.<br><br><small><strong>Sources:</strong><br>• <em>Financials:</em> Amazon.com, Inc. Form 10-K Annual Report (2025); Amazon 2025 Letter to Shareholders.<br>• <em>Segment performance:</em> AWS revenue and growth figures, Amazon Investor Relations.<br>• <em>Strategic pattern:</em> Amazon acquisition and product-expansion history (AWS, Whole Foods, Twitch, Ring, MGM, Bedrock/Trainium).</small>",
    "ads": 4,
    "ows": 10,
    "rvs": 9,
    "conclusion": "Amazon's rating reflects its ability to turn infrastructure into services customers can use. Its size creates demands, but the company has repeatedly used that capacity to enter new markets."
  },
  {
    "name": "Pick n Pay Stores Limited",
    "sector": "Consumer Retailing · Grocery & Quick Commerce",
    "logo": "images/logos/pick-n-pay.png",
    "headline": "Pick n Pay's capital raise has outpaced its supermarket recovery.",
    "body": "Pick n Pay holds roughly R45.5 billion in assets. In late 2024, a R4 billion rights offer and the Boxer IPO raised R12.5 billion and cleared the group's historical debt burden.<br><br><strong>Asset Density Score (ADS - 7):</strong> The group reported R120.3 billion in FY26 turnover. Its large retail footprint needs investment and management while the core supermarket business struggles. That limits how freely the group can use its assets.<br><br><strong>Opportunity Window Score (OWS - 9):</strong> South African grocery delivery and discount retail are competitive markets with tight margins. Boxer has supported group growth, while the asap! platform has benefited from its Mr D partnership. The core supermarket business faces pressure to respond.<br><br><strong>Response Velocity Score (RVS - 4):</strong> The capital raise gave the group time to work on its recovery. The core supermarket trading loss still widened to R1.0 billion in FY26. The score reflects the slower pace of that operating recovery.<br><br><small><strong>Sources:</strong><br>• <em>Recapitalisation & balance sheet:</em> Pick n Pay Stores Limited rights offer and Boxer IPO disclosures (2024).<br>• <em>Segment performance:</em> Pick n Pay Group FY26 results (group turnover, core supermarket trading loss).<br>• <em>Digital & Boxer performance:</em> asap!/Mr D partnership reporting; Boxer segment growth disclosures.</small>",
    "ads": 7,
    "ows": 9,
    "rvs": 4,
    "conclusion": "Pick n Pay has improved its financial position. The next test is whether it can use that room to improve the core supermarket business, where losses have continued to grow."
  },
  {
    "name": "MTN Group Limited",
    "sector": "Telecommunications, Fintech & Digital Infrastructure",
    "logo": "images/logos/mtn.jpg",
    "headline": "MTN is growing its digital business while reducing debt pressure.",
    "body": "MTN spent R38.5 billion on network infrastructure across Africa in 2025.<br><br><strong>Asset Density Score (ADS - 6):</strong> Net debt-to-EBITDA fell to 0.3x over the same period. The score recognises both the cost of running a large network and its role in supporting the company's digital services.<br><br><strong>Opportunity Window Score (OWS - 9):</strong> Data revenue rose more than 36% to R101.5 billion, with over 172 million active users. MoMo reached almost 70 million active users and processed over $22 billion in merchant payments. These figures show demand for the services MTN is building.<br><br><strong>Response Velocity Score (RVS - 8):</strong> Group service revenue grew almost 23% to R218.5 billion, alongside R3.6 billion in cost reductions. South Africa grew 2%, while Nigeria and Ghana grew nearly 55% and 36% respectively. The score reflects this uneven but substantial progress.<br><br><small><strong>Sources:</strong><br>• <em>Financial results:</em> MTN Group, Financial results for the year ended 31 December 2025 ,  MTN Investor Relations Reporting.<br>• <em>Regulatory filing:</em> MTN Group Limited, Financial results for the year ended 31 December 2025 ,  JSE SENS Announcement (16 March 2026).</small>",
    "ads": 6,
    "ows": 9,
    "rvs": 8,
    "conclusion": "MTN's network investment supports growth in data and mobile money. Nigeria and Ghana account for much of the progress, while South Africa is growing more slowly."
  },
  {
    "name": "OpenAI",
    "sector": "Artificial Intelligence · Frontier Models & Platform",
    "logo": "images/logos/openai.png",
    "headline": "OpenAI releases products quickly, with compute and governance constraints.",
    "body": "OpenAI's business centres on models, software and contracted computing capacity. Its compute partners include Microsoft, Oracle and CoreWeave. In January 2025, it announced Stargate with SoftBank, Oracle and MGX, a project valued at roughly $500 billion.<br><br><strong>Asset Density Score (ADS - 3):</strong> OpenAI's physical asset base is relatively small, but its long-term compute commitments still create financial constraints. The score accounts for commitments that sit in contracts as well as physical assets.<br><br><strong>Opportunity Window Score (OWS - 10):</strong> AI products change quickly. Model generations can lose their advantage within twelve to eighteen months, while customer habits and enterprise buying decisions are still developing. Coding agents, research tools and video generation create frequent opportunities for new releases.<br><br><strong>Response Velocity Score (RVS - 8):</strong> ChatGPT, reasoning models, Sora and the API platform show a fast release pace. Compute availability limits what the company can train and serve. Safety reviews, policy decisions and governance also affect timing; the 2023 board crisis is one example of disruption within the company.<br><br><small><strong>Sources:</strong><br>• <em>Structure & capital:</em> OpenAI corporate restructuring and public benefit corporation transition disclosures (2025); Microsoft partnership and cumulative investment reporting; SoftBank-led funding round (2025).<br>• <em>Compute commitments:</em> Stargate joint venture announcement, January 2025 (OpenAI, SoftBank, Oracle, MGX); Microsoft Azure and Oracle Cloud infrastructure agreements.<br>• <em>Product velocity:</em> OpenAI release history (GPT-4o, o-series reasoning models, Sora, API platform, enterprise and agent products); ChatGPT usage disclosures.</small>",
    "ads": 3,
    "ows": 10,
    "rvs": 8,
    "conclusion": "OpenAI's rating reflects frequent releases in a fast-moving market. Contracted compute and internal decision-making remain constraints on that pace."
  },
  {
    "name": "BlackRock, Inc.",
    "sector": "Asset Management · ETFs, Private Markets & Financial Technology",
    "logo": "images/logos/blackrock.png",
    "headline": "BlackRock is expanding into private markets through acquisitions.",
    "body": "BlackRock ended 2025 with $14.04 trillion in assets under management, up 22% from $11.5 trillion. Revenue rose 19% to $24.22 billion, and fourth-quarter net inflows were $342 billion.<br><br><strong>Asset Density Score (ADS - 3):</strong> Assets under management belong to clients. BlackRock's own business needs less physical capital than a retailer or manufacturer. Buying GIP for $12.5 billion in 2024 and Preqin for $3.2 billion in 2025 added integration work and operating costs.<br><br><strong>Opportunity Window Score (OWS - 10):</strong> Private markets, ETFs and tokenisation are changing asset management. iShares held $5.5 trillion in assets after $181 billion in 2025 inflows. The iShares Bitcoin Trust took in more than $25 billion that year, while BUIDL passed $2.5 billion and began being accepted as collateral on Binance.<br><br><strong>Response Velocity Score (RVS - 8):</strong> GIP closed in October 2024 and Preqin in early 2025. Aladdin's annual contract value grew 16% in 2025; technology revenue reached around $2 billion, up 24%. The Bitcoin ETF launched in January 2024. Integrating GIP, Preqin and HPS, alongside regulatory requirements across countries, adds work that can slow further expansion.<br><br><small><strong>Sources:</strong><br>• <em>Financial results:</em> BlackRock, Inc. Q4 2025 Earnings Release (AUM, revenue, net inflows); BlackRock 2025 Annual Report.<br>• <em>Private markets acquisitions:</em> BlackRock press release, Global Infrastructure Partners acquisition (January 2024, closed October 2024); Reuters, Preqin acquisition reporting (June 2024, closed 2025); BlackRock Chairman's Letter 2026 (HPS integration).<br>• <em>Aladdin and technology:</em> BlackRock 2026 Chairman's Letter (16% ACV growth, $2 billion technology revenue); BlackRock Investor Day 2025 disclosures.<br>• <em>ETF and tokenisation:</em> CoinDesk, IBIT 2025 inflows reporting (December 2025); CoinDesk, BUIDL fund BNB Chain expansion (November 2025).</small>",
    "ads": 2,
    "ows": 10,
    "rvs": 8,
    "conclusion": "BlackRock has established positions in private markets, ETFs and tokenisation. Its rating recognises the pace of that expansion while accounting for the demands of integrating acquisitions."
  }
];
