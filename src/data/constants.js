/* ============================================================
   DATA CONSTANTS
   ============================================================ */
export const NAV = ["About", "Experience", "Skills", "Projects", "Education", "Contact"];

export const STATS = [
  { value: "7+", label: "Years in Data & BI" },
  { value: "19", label: "Countries Modelled" },
  { value: "5", label: "Certifications" },
  { value: "110%", label: "Best Budget Delivery" },
];

export const SKILL_GROUPS = [
  {
    icon: "IconBars",
    title: "Visualization & BI",
    items: ["Power BI", "Tableau", "QlikView 11 Developer", "Microsoft Excel", "Advanced Excel"],
  },
  {
    icon: "IconCode",
    title: "Programming & Data",
    items: ["SQL", "Python", "R Programming", "Java", "C", "C++", "C#", "JavaScript", "HTML5", "CSS3", "OOP"],
  },
  {
    icon: "IconDatabase",
    title: "Platforms & Warehousing",
    items: ["Oracle Database", "Teradata", "SAS", "Microsoft Access"],
  },
  {
    icon: "IconFlow",
    title: "Automation & Low-Code",
    items: ["Power Platform", "Power Apps", "Power Automate", "Salesforce Admin", "Salesforce BA"],
  },
  {
    icon: "IconTool",
    title: "Dev Environments",
    items: ["Visual Studio", "Visual Basic", "VBA", "Eclipse RCP", "Control System Studio", "Code::Blocks"],
  },
  {
    icon: "IconDoc",
    title: "Productivity Suite",
    items: ["Microsoft Word", "PowerPoint", "Microsoft Visio"],
  },
];

export const EXPERIENCE = [
  {
    role: "Analytics Manager",
    org: "Standard Bank · Group",
    period: "Oct 2023 — Present",
    place: "Johannesburg, South Africa",
    blurb: "Subject matter expert on product analytics, macroeconomics and BI workstreams as technical lead behind the MIS models servicing the Group PPB team.",
    points: [
      "Oversee collection and analysis of data from internal and external sources using fit-for-purpose tooling.",
      "Translate analysis into trends, patterns and insights for group-level dashboards and presentations.",
      "Advise senior management with data-driven recommendations for strategic growth decisions.",
      "Refine analytics processes and methodologies to lift efficiency, accuracy and relevance.",
    ],
  },
  {
    role: "Manager, Data Steward",
    org: "Standard Bank · Standard Trust Limited",
    period: "Mar 2022 — Oct 2023",
    place: "Johannesburg, South Africa",
    blurb: "Led as subject matter expert on data quality initiatives, ownership, and information management maturity.",
    points: [
      "Presented BI and recommendations to CEO and Exco on performance, risk and opportunity.",
      "Developed data models and data products across a range of use cases.",
      "Supported risk management initiatives to mitigate revenue and reputational impact.",
      "Re-engineered operations and sales processes for large-scale improvement.",
      "Ran quarterly PI planning for IT enhancements and led cross-functional root-cause squads.",
    ],
  },
  {
    role: "Senior Dashboard Analyst — Intelligent Automation",
    org: "Standard Bank",
    period: "Jan 2021 — Mar 2022",
    place: "Johannesburg, South Africa",
    blurb: "Built scalable infrastructure delivering business insight from raw data, optimizing flow and collection.",
    points: [
      "Built infrastructure that achieved 110% budgetary performance through analytics-led insight.",
      "Led data & metrics workstream across Credit, Card, Cash, Wealth, Regulatory & Payments — 80% faster turnaround.",
    ],
  },
  {
    role: "Senior Analyst — Data Sourcing & Reporting",
    org: "Standard Bank",
    period: "Feb 2020 — Jan 2021",
    place: "Johannesburg, South Africa",
    blurb: "Supported the Group Vehicle and Asset Finance team with analytics and macroeconomic research.",
    points: [
      "Conducted macroeconomic research to lift product uptake 35% across 19 countries.",
      "Identified cross-sell opportunities cutting churn ~13% over 7 months, lifting CLV.",
      "Benchmarked portfolio performance against external market and competitor data.",
    ],
  },
  {
    role: "Graduate Trainee — Data Science & Analytics",
    org: "Standard Bank",
    period: "Oct 2018 — Feb 2020",
    place: "Johannesburg, South Africa",
    blurb: "Supported profitability, market share and efficiency goals through data tooling adoption.",
    points: [
      "Co-developed a 360° customer retention tool using ML across 5 countries — 54% retention lift.",
      "Drove Power BI & QlikView adoption via training reaching 500+ employees.",
      "Completed Analytics Vidhya Data Science Certification (2019).",
    ],
  },
  {
    role: "Management Consultant — Advisory",
    org: "PricewaterhouseCoopers (PwC)",
    period: "Dec 2017 — Oct 2018",
    place: "Johannesburg, South Africa",
    blurb: "Consulted across finance and technology, advising on reporting and system audit standards.",
    points: [
      "Advised across industries on reporting and system audit standards.",
      "Co-customized, tested and deployed Workday as an HR tool within PwC South Africa.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Customer 360 Retention App",
    tools: "Power Apps · Power BI · R Studio",
    desc: "A 360° view of product subscriptions built to retain primary customers and grow share of wallet.",
  },
  {
    title: "Instant Money Automated Reporting",
    tools: "Power BI · SAS",
    desc: "Self-service reporting for trend analysis, health checks, budgeting and forecasting.",
  },
  {
    title: "Competitor Analysis",
    tools: "SWOT · Market Share Modelling",
    desc: "Identified market opportunities through SWOT and competitive portfolio benchmarking.",
  },
  {
    title: "Adcorp Holdings Restructure",
    tools: "Visio · Excel · Power BI",
    desc: "Restructured management account reporting for clarity and faster decision cycles.",
  },
];

export const EDUCATION = [
  { title: "Salesforce Business Analyst Certified", org: "Salesforce", period: "Dec 2022" },
  { title: "Salesforce Administrator Certified", org: "Salesforce", period: "Nov 2022" },
  { title: "PGP: Data Science & Business Analytics", org: "UT Austin — Red McCombs School of Business", period: "Dec 2019 — Sep 2020" },
  { title: "BSc Computer Science & Informatics", org: "University of Johannesburg", period: "Dec 2012 — Dec 2017" },
];
