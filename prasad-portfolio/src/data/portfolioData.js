export const profile = {
  name: 'Prasad Gawade',
  role: 'Data Analyst',
  tagline: 'Transforming raw data into actionable business insights.',
  email: 'prasadgawade2004@gmail.com',
  phone: '+91 9921793792',
  location: 'Pune, Maharashtra',
  linkedin: ' https://www.linkedin.com/in/prasad-gawade-989b70258 ',
  github: ' https://github.com/Prasad2664?tab=repositories ',
  summary:
    'Results-driven aspiring Data Analyst with hands-on internship experience in SQL, Excel, Power BI, Tableau, and Python. Skilled in data cleaning, exploratory data analysis (EDA), dashboard development, and data visualization. Experienced in transforming raw datasets into actionable business insights through analytical problem-solving and reporting.',
  heroSkills: ['SQL', 'Python', 'Power BI', 'Excel', 'Tableau'],
};

export const stats = [
  { label: 'Data Analysis Projects', value: 4, suffix: '+' },
  { label: 'Dashboards Built', value: 5, suffix: '+' },
  { label: 'Records Processed', value: 5000, suffix: '+' },
  { label: 'Reporting Automation Improvement', value: 40, suffix: '%' },
];

export const tools = [
  'SQL', 'Python', 'Power BI', 'Excel', 'Tableau', 'Pandas', 'NumPy', 'Matplotlib','Seaborn',
];

export const whatIDo = [
  { title: 'Data Cleaning', desc: 'Detecting and correcting messy, missing, or inconsistent records so every dataset is analysis-ready.' },
  { title: 'Exploratory Data Analysis', desc: 'Digging into distributions, trends, and outliers to understand what a dataset is really saying.' },
  { title: 'Dashboard Development', desc: 'Building interactive Power BI and Tableau dashboards that stakeholders actually use.' },
  { title: 'KPI Reporting', desc: 'Defining and tracking the metrics that matter, and automating how they get reported.' },
  { title: 'Data Visualization', desc: 'Turning tables of numbers into charts that make the story obvious at a glance.' },
  { title: 'Business Insights', desc: 'Connecting the analysis back to a decision — what should change, and why.' },
];

export const workflow = [
  { step: 1, title: 'Collect Data', desc: 'Gather raw data from databases, spreadsheets, and APIs.' },
  { step: 2, title: 'Clean Data', desc: 'Handle missing values, duplicates, and formatting issues.' },
  { step: 3, title: 'Analyze Data', desc: 'Apply statistical methods and EDA to surface patterns.' },
  { step: 4, title: 'Visualize Data', desc: 'Design dashboards and charts that communicate clearly.' },
  { step: 5, title: 'Generate Insights', desc: 'Translate findings into recommendations stakeholders can act on.' },
];

export const skills = [
   { name: 'SQL', level: 90, category: 'Technical', icon: 'SQL' },
  { name: 'Python', level: 85, category: 'Technical', icon: 'Python' },
  { name: 'Power BI', level: 90, category: 'Technical', icon: 'Power BI' },
  { name: 'Excel', level: 90, category: 'Technical', icon: 'Excel' },
  { name: 'Tableau', level: 80, category: 'Technical', icon: 'Tableau' },
  { name: 'Pandas', level: 85, category: 'Technical', icon: 'Pandas' },
  { name: 'NumPy', level: 80, category: 'Technical', icon: 'NumPy' },
  { name: 'Matplotlib', level: 80, category: 'Technical', icon: 'Matplotlib' },
  { name: 'Seaborn', level: 80, category: 'Technical', icon: 'Seaborn' },
  { name: 'Data Cleaning', level: 90, category: 'Analytical', icon: 'Data Cleaning' },
{ name: 'EDA', level: 90, category: 'Analytical', icon: 'EDA' },
{ name: 'Data Visualization', level: 90, category: 'Analytical', icon: 'Data Visualization' },
];

export const projects = [
  {
    id: 'ipl-2023-data-analysis',
    title: 'IPL 2023 Data Analysis',
    tech: ['Python', 'Pandas', 'Seaborn'],
    summary: 'Analyzed IPL dataset with ETL, EDA and performance insights.',
    description:
      'A full analysis of the IPL 2023 season covering 500+ matches, exploring team form, player performance, and venue effects using Python\'s data science stack.',
    objectives: [
      'Clean and structure raw match-by-match data for analysis',
      'Identify team and player performance trends across the season',
      'Surface venue-based patterns that influence match outcomes',
    ],
    businessProblem:
      'Fans, analysts, and franchises need a clear read on what actually drove results across a long, noisy season instead of relying on match-day narratives alone.',
    tools: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'Jupyter Notebook'],
    insights: [
      'Certain venues consistently favored chasing teams',
      'A small group of players accounted for a disproportionate share of match-winning performances',
      'Powerplay scoring rate was the single strongest predictor of final total',
    ],
    github: 'https://github.com/Prasad2664/python-ipl-2023-data-analysis',
    live: null,
    image: 'ipl',
    screenshots: ['/dashboard_images/ipl1.png', '/dashboard_images/ipl2.png', '/dashboard_images/ipl3.png'],

  },
  {
    id: 'road-accident-analysis-dashboard',
    title: 'Road Accident Analysis Dashboard',
    tech: ['Power BI', 'DAX'],
    summary: 'Built interactive dashboard to analyze accident trends and regional patterns.',
    description:
      'An interactive Power BI dashboard analyzing road accident records from 2014–2016 to reveal regional, seasonal, and causal patterns.',
    objectives: [
      'Consolidate multi-year accident records into a single reporting model',
      'Highlight regional hotspots and time-based trends',
      'Give stakeholders a self-serve way to filter by cause, location, and year',
    ],
    businessProblem:
      'Road safety planners needed a way to see where and why accidents were concentrated, rather than working from static annual reports.',
    tools: ['Power BI', 'Power Query', 'DAX'],
    insights: [
      'Accident frequency spiked sharply during monsoon months',
      'A handful of districts accounted for the majority of severe accidents',
      'Weekend evenings showed the highest accident density',
    ],
    github: 'https://github.com/Prasad2664/powerbi-road-accident-analysis-dashboard',
    live: 'https://app.powerbi.com/groups/me/reports/488c15ed-b8ef-4c32-b4c3-b43b7ac9cf52/007ba4113e8261dd6a30?experience=power-bi',
    image: 'accident',
    screenshots: ['/dashboard_images/accident2.png', '/dashboard_images/accident1.png'],

  },
  {
    id: 'blinkit-data-analysis',
    title: 'Blinkit Data Analysis',
    tech: ['Excel'],
    summary: 'Created KPI dashboard, Pivot Tables and sales analysis reports.',
    description:
      'An Excel-based sales and operations analysis for a quick-commerce dataset, using Pivot Tables and KPI cards to track performance.',
    objectives: [
      'Build a reusable KPI dashboard for sales performance',
      'Identify customer behavior trends across categories',
      'Flag delivery bottlenecks affecting turnaround time',
    ],
    businessProblem:
      'The business needed a lightweight, shareable way to track sales and delivery KPIs without a dedicated BI tool.',
    tools: ['Microsoft Excel', 'Pivot Tables', 'Power Query'],
    insights: [
      'Certain categories drove most repeat purchases',
      'Delivery delays clustered around peak evening hours',
      'A small set of SKUs generated a large share of total revenue',
    ],
    github: 'https://github.com/Prasad2664/blinkit_dashboard-excel-data-analysis',
    live: null,
    image: 'blinkit',
    screenshots: ['/dashboard_images/blinkit1.png', '/dashboard_images/blinkit2.png'],
  },
  {
    id: 'phonepe-dashboard-analysis',
    title: 'PhonePe Dashboard Analysis',
    tech: ['Tableau'],
    summary: 'Built dashboard for transaction analysis and regional performance.',
    description:
      'A Tableau dashboard exploring digital payment transaction volume, user growth, and regional performance for a fintech-style dataset.',
    objectives: [
      'Visualize transaction volume growth over time',
      'Compare regional performance across states',
      'Track user growth alongside transaction value',
    ],
    businessProblem:
      'Stakeholders needed a clear regional view of adoption and transaction growth to guide expansion decisions.',
    tools: ['Tableau', 'Tableau Prep'],
    insights: [
      'Tier-2 cities showed the fastest year-over-year growth',
      'Peer-to-peer transfers made up the largest transaction category',
      'Transaction value grew faster than transaction count, pointing to higher-value usage',
    ],
    github: 'https://github.com/Prasad2664/tableau-financial-dashboard-analysis',
    // live: 'https://public.tableau.com',
    image: 'phonepe',
    screenshots: ['/dashboard_images/phonepe1.png', '/dashboard_images/phonepe2.png'],
  },
];

export const experience = [
  {
    role: 'Data Analyst Intern',
    company: 'Cyber Success',
    period: 'Sep 2025 – Mar 2026',
    points: [
      'Cleaned and processed 5,000+ records using SQL and Excel, improving data accuracy and consistency.',
      'Developed 5+ interactive dashboards in Power BI and Tableau for KPI tracking and business reporting.',
      'Wrote optimized SQL queries for efficient extraction, filtering, and analysis of large datasets.',
      'Performed exploratory data analysis (EDA) to identify trends, patterns, and actionable insights.',
      'Automated reporting workflows, reducing manual effort by 40%.',
      'Collaborated with cross-functional teams to deliver accurate visualizations and reports.',
    ],
  },
];

export const internshipDocuments = [
  { title: 'Offer Letter', file: '/certificates/InternshipJoiningLetter.pdf' },
  { title: 'Completion Letter', file: '/certificates/InternshipCompletionletter.pdf' },
  { title: 'Internship Certificate', file: '/certificates/internshipCertificates.pdf' },
];

export const learningJourney = [
  {
    phase: 1,
    title: 'Python & Data Science Libraries',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    points: [
      'Learned Python fundamentals alongside core data analysis libraries: Pandas, NumPy, Matplotlib, and Seaborn',
      'Practiced data manipulation, cleaning, and statistical exploration using Pandas and NumPy',
      'Built static and visual plots with Matplotlib and Seaborn to support exploratory data analysis',
    ],
  },
  {
    phase: 2,
    title: 'Excel & Advanced Excel',
    tools: ['Excel'],
    points: [
      'Covered all core Excel tabs, formulas, and functions',
      'Applied conditional formatting for dynamic, rule-based data highlighting',
      'Learned the full lookup family — VLOOKUP, HLOOKUP, INDEX-MATCH, and XLOOKUP',
      'Built Pivot Tables and Pivot Charts to summarize and analyze large datasets',
      'Used Power Query for data transformation and cleaning workflows',
    ],
  },
  {
    phase: 3,
    title: 'Power BI',
    tools: ['Power BI'],
    points: [
      "Learned Power BI's function library and DAX (Data Analysis Expressions) for calculated measures and columns",
      'Designed graphical visualizations aligned to business KPIs',
      'Built end-to-end interactive dashboards from raw data to final report',
      'Learned how to publish and deploy dashboards to the Power BI service for stakeholder access',
    ],
  },
  {
    phase: 4,
    title: 'Tableau',
    tools: ['Tableau'],
    points: [
      'Applied the same dashboarding and visualization principles from Power BI within Tableau',
      'Built interactive Tableau dashboards for data exploration and reporting',
    ],
  },
  {
    phase: 5,
    title: 'SQL',
    tools: ['SQL'],
    points: [
      'Learned all SQL command categories — DDL, DML, DQL, DCL, and TCL — along with their sub-commands',
      'Practiced all major SQL function types for data transformation and analysis',
      'Learned all types of joins for combining data across multiple tables',
      'Studied data modeling principles for relational database design',
      'Practiced importing and exporting data between SQL and external sources',
      'Learned ACID properties for reliable database transactions',
      'Applied window functions for advanced analytical queries',
    ],
  },
];


export const education = [
  {
    degree: 'B.E. Electronics and Telecommunication Engineering',
    school: 'JSPM\u2019s Bhivarabai Sawant Institute of Technology and Research, Pune',
    period: '2022 – 2026',
    score: 'CGPA: 8.20',
  },
  {
    degree: 'HSC (Science)',
    school: 'Parents Association English School and Junior College, Satara',
    period: '2021 – 2022',
    score: '60.17%',
  },
  {
    degree: 'SSC',
    school: 'Bharat High School, Jeur',
    period: '2019 – 2020',
    score: '80.60%',
  },
];

export const certifications = [
  { title: 'Python for Data Science', issuer: 'NPTEL', date: 'Jan 2025', file: '/certificates/PythonforDataScience.pdf' },
  { title: 'Cloud Computing', issuer: 'NPTEL', date: 'Nov 2025', file: '/certificates/CloudComputing.pdf' },
  { title: 'Data Science for Engineers', issuer: 'NPTEL', date: 'Apr 2026', file: '/certificates/DataScienceforEngg.pdf' },
  { title: 'GenAI Powered Data Analytics Job Simulation', issuer: 'Tata (via Forage)', date: 'Sep 2025', file: '/certificates/Tata_DA_Certificate.png' },
];

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/learning-journey', label: 'Learning Journey' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/education', label: 'Education' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact', label: 'Contact' },
];
