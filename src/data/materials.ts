export type MaterialLink = {
  label: string;
  href: string;
};

export type MaterialRecord = {
  company: string;
  chineseName?: string;
  market: string;
  ownership: string;
  year: string;
  document: string;
  language: string;
  note: string;
  links: MaterialLink[];
};

export type MaterialGroupKey =
  | "articlesOfAssociation"
  | "ipoProspectuses"
  | "csrReports"
  | "esgReports"
  | "annualFinancialReports";

export const materials: Record<MaterialGroupKey, MaterialRecord[]> = {
  articlesOfAssociation: [
    {
      company: "Alibaba Group Holding Limited",
      chineseName: "阿里巴巴集团控股有限公司",
      market: "NYSE: BABA; HKEX: 9988 / 89988",
      ownership: "Privately owned",
      year: "Current issuer governance page",
      document: "Memorandum and Articles of Association",
      language: "English",
      note: "Cayman holding-company constitution; useful for VIE and weighted-voting governance discussion.",
      links: [{ label: "Governance source", href: "https://www.alibabagroup.com/en-US/ir-corporate-governance" }]
    },
    {
      company: "Tencent Holdings Limited",
      chineseName: "腾讯控股有限公司",
      market: "HKEX: 0700",
      ownership: "Privately owned",
      year: "2024",
      document: "Fourth Amended and Restated Memorandum and Articles of Association",
      language: "English, with Chinese company name",
      note: "Shows Cayman company form, class rights, and shareholder-meeting mechanics for a major Hong Kong issuer.",
      links: [
        { label: "Governance source", href: "https://www.tencent.com/en-us/investors/corporate-governance.html" },
        { label: "PDF", href: "https://www.tencent.net.cn/wp-content/uploads/2024/05/e_THL_fourth-amended-MA_14-May-2024.pdf" }
      ]
    },
    {
      company: "JD.com, Inc.",
      chineseName: "京东集团股份有限公司",
      market: "Nasdaq: JD; HKEX: 9618",
      ownership: "Privately owned",
      year: "Current issuer governance page",
      document: "Memorandum and Articles of Association",
      language: "English",
      note: "Governance page links the current constitutional document and committee charters.",
      links: [{ label: "Governance source", href: "https://ir.jd.com/corporate-governance/highlights" }]
    },
    {
      company: "Meituan",
      chineseName: "美团",
      market: "HKEX: 3690",
      ownership: "Privately owned",
      year: "2025",
      document: "Memorandum and Articles of Association",
      language: "English, with Chinese company name",
      note: "Useful for class-share and weighted-voting-rights comparison among Hong Kong tech issuers.",
      links: [{ label: "Governance files", href: "https://www.meituan.com/en-US/investor/gov-files" }]
    },
    {
      company: "Xiaomi Corporation",
      chineseName: "小米集团",
      market: "HKEX: 1810",
      ownership: "Privately owned",
      year: "Current issuer governance page",
      document: "Memorandum and Articles of Association",
      language: "English",
      note: "Hong Kong WVR issuer constitution with governance files collected on the issuer page.",
      links: [
        { label: "Governance source", href: "https://ir.mi.com/corporate-information/corporate-governance/" },
        { label: "PDF", href: "https://i01.appmifile.com/webfile/globalweb/company/ir/governance_us/Memorandum.pdf" }
      ]
    },
    {
      company: "China Mobile Limited",
      chineseName: "中国移动有限公司",
      market: "HKEX: 0941; SSE: 600941",
      ownership: "State-owned",
      year: "Current issuer PDF",
      document: "Articles of Association",
      language: "English",
      note: "A leading red-chip telecommunications issuer controlled by China Mobile Communications Group.",
      links: [{ label: "PDF", href: "https://www.chinamobileltd.com/en/about/cg/aa.pdf" }]
    },
    {
      company: "PetroChina Company Limited",
      chineseName: "中国石油天然气股份有限公司",
      market: "HKEX: 0857; SSE: 601857",
      ownership: "State-owned",
      year: "Current issuer PDF",
      document: "Articles of Association",
      language: "English",
      note: "PRC joint stock company constitution for a major central-SOE overseas issuer.",
      links: [{ label: "PDF", href: "https://www.petrochina.com.cn/ptr/xhtml/ptr/tzzgx/tzz.pdf" }]
    },
    {
      company: "China Petroleum & Chemical Corporation",
      chineseName: "中国石油化工股份有限公司",
      market: "HKEX: 0386; SSE: 600028",
      ownership: "State-owned",
      year: "Current issuer governance page",
      document: "Articles of Association",
      language: "English and Chinese source links",
      note: "Corporate-governance source page for Sinopec Corp. constitutional and board-procedure documents.",
      links: [{ label: "Governance source", href: "https://www.sinopec.com/listco/en/corporategovernance/index.shtml" }]
    },
    {
      company: "China Life Insurance Company Limited",
      chineseName: "中国人寿保险股份有限公司",
      market: "HKEX: 2628; SSE: 601628",
      ownership: "State-owned",
      year: "2021 approval version",
      document: "Articles of Association",
      language: "English translation; Chinese version prevails",
      note: "Insurance-sector Articles with express language-priority statement.",
      links: [{ label: "PDF", href: "https://www.e-chinalife.com/upload/resources/file/2020/07/27/43434.pdf" }]
    },
    {
      company: "Huatai Securities Co., Ltd.",
      chineseName: "华泰证券股份有限公司",
      market: "LSE GDR: HTSC; HKEX: 6886; SSE: 601688",
      ownership: "State-linked mixed ownership",
      year: "2025",
      document: "Articles of Association",
      language: "English translation of Chinese original",
      note: "London GDR example under the Shanghai-London Stock Connect architecture.",
      links: [{ label: "LSE RNS PDF", href: "https://www.rns-pdf.londonstockexchange.com/rns/1106F_1-2025-10-28.pdf" }]
    }
  ],
  ipoProspectuses: [
    {
      company: "Alibaba Group Holding Limited",
      chineseName: "阿里巴巴集团控股有限公司",
      market: "NYSE IPO: BABA",
      ownership: "Privately owned",
      year: "2014",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "Large U.S. IPO source for VIE, Alibaba Partnership, and offshore holding-company risk factors.",
      links: [{ label: "SEC prospectus", href: "https://www.sec.gov/Archives/edgar/data/1577552/000119312514347620/d709111d424b4.htm" }]
    },
    {
      company: "JD.com, Inc.",
      chineseName: "京东集团股份有限公司",
      market: "Nasdaq IPO: JD",
      ownership: "Privately owned",
      year: "2014",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "E-commerce IPO prospectus with VIE and PRC regulation disclosures.",
      links: [{ label: "SEC prospectus", href: "https://www.sec.gov/Archives/edgar/data/1549802/000104746914005115/a2220275z424b4.htm" }]
    },
    {
      company: "Baidu, Inc.",
      chineseName: "百度公司",
      market: "Nasdaq IPO: BIDU",
      ownership: "Privately owned",
      year: "2005",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "Early Chinese internet IPO document for search, VIE, and regulatory-risk comparison.",
      links: [{ label: "SEC prospectus", href: "https://www.sec.gov/Archives/edgar/data/1329099/000119312505159073/d424b4.htm" }]
    },
    {
      company: "PDD Holdings / Pinduoduo Inc.",
      chineseName: "拼多多",
      market: "Nasdaq IPO: PDD",
      ownership: "Privately owned",
      year: "2018",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "Consumer-platform IPO with controlled-company and VIE disclosures.",
      links: [{ label: "SEC prospectus", href: "https://www.sec.gov/Archives/edgar/data/1737806/000104746918005204/a2236308z424b4.htm" }]
    },
    {
      company: "NIO Inc.",
      chineseName: "蔚来",
      market: "NYSE IPO: NIO",
      ownership: "Privately owned",
      year: "2018",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "EV issuer prospectus for pre-profit manufacturing, subsidies, and PRC regulatory-risk study.",
      links: [{ label: "SEC prospectus", href: "https://www.sec.gov/Archives/edgar/data/1736541/000119312518271849/d560276d424b4.htm" }]
    },
    {
      company: "Bilibili Inc.",
      chineseName: "哔哩哔哩",
      market: "Nasdaq IPO: BILI",
      ownership: "Privately owned",
      year: "2018",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "Youth entertainment platform IPO with content regulation and VIE disclosures.",
      links: [{ label: "SEC prospectus", href: "https://www.sec.gov/Archives/edgar/data/1723690/000104746918002254/a2235099z424b4.htm" }]
    },
    {
      company: "XPeng Inc.",
      chineseName: "小鹏汽车",
      market: "NYSE IPO: XPEV",
      ownership: "Privately owned",
      year: "2020",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "EV IPO prospectus with manufacturing, data, software, and subsidy risk factors.",
      links: [{ label: "SEC prospectus", href: "https://www.sec.gov/Archives/edgar/data/1810997/000119312520233600/d890887d424b4.htm" }]
    },
    {
      company: "Li Auto Inc.",
      chineseName: "理想汽车",
      market: "Nasdaq IPO: LI",
      ownership: "Privately owned",
      year: "2020",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "EV issuer prospectus for dual-class voting and pre-profit growth-company analysis.",
      links: [{ label: "SEC prospectus", href: "https://www.sec.gov/Archives/edgar/data/1791706/000104746920004324/a2242162z424b4.htm" }]
    },
    {
      company: "Trip.com Group Limited / Ctrip.com International, Ltd.",
      chineseName: "携程集团",
      market: "Nasdaq IPO: CTRP / TCOM",
      ownership: "Privately owned",
      year: "2003",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "Early travel-platform IPO for comparing offshore issuers before the recent platform-economy cycle.",
      links: [{ label: "SEC prospectus", href: "https://www.sec.gov/Archives/edgar/data/1269238/000114554903001584/u98691p1e424b4.htm" }]
    },
    {
      company: "DiDi Global Inc.",
      chineseName: "滴滴全球",
      market: "NYSE IPO: DIDI",
      ownership: "Privately owned",
      year: "2021",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "Ride-hailing IPO source for data security, cybersecurity review, and overseas-listing risk discussion.",
      links: [{ label: "SEC prospectus", href: "https://www.sec.gov/Archives/edgar/data/1764757/000104746921001227/a2243300z424b4.htm" }]
    }
  ],
  csrReports: [
    {
      company: "Alibaba Group Holding Limited",
      chineseName: "阿里巴巴集团控股有限公司",
      market: "NYSE: BABA; HKEX: 9988 / 89988",
      ownership: "Privately owned",
      year: "CSR archive and successor ESG reports",
      document: "Corporate social responsibility materials",
      language: "English and Chinese site options",
      note: "Issuer ESG page keeps CSR-tagged materials together with later ESG reporting.",
      links: [{ label: "CSR / ESG source", href: "https://www.alibabagroup.com/en-US/esg" }]
    },
    {
      company: "Tencent Holdings Limited",
      chineseName: "腾讯控股有限公司",
      market: "HKEX: 0700",
      ownership: "Privately owned",
      year: "2016-2020 CSR archive",
      document: "Corporate Social Responsibility Reports",
      language: "English and Chinese source pages",
      note: "Archive separates CSR reports from later ESG reports for longitudinal comparison.",
      links: [{ label: "CSR / ESG reports", href: "https://www.tencent.net.cn/our-actions/esg-reports/" }]
    },
    {
      company: "JD.com, Inc.",
      chineseName: "京东集团股份有限公司",
      market: "Nasdaq: JD; HKEX: 9618",
      ownership: "Privately owned",
      year: "2018-2020",
      document: "Sustainability / CSR report",
      language: "English",
      note: "Useful for logistics, packaging, labor, and platform responsibility discussions.",
      links: [{ label: "ESG / sustainability source", href: "https://ir.jd.com/esgcsr" }]
    },
    {
      company: "BYD Company Limited",
      chineseName: "比亚迪股份有限公司",
      market: "HKEX: 1211; SZSE: 002594",
      ownership: "Privately owned",
      year: "2017",
      document: "Corporate Social Responsibility Report",
      language: "English",
      note: "Automotive and battery-manufacturing CSR source before the ESG-reporting label became dominant.",
      links: [{ label: "PDF", href: "https://en.byd.com/wp-content/uploads/2021/06/BYD_CSR_2017.pdf" }]
    },
    {
      company: "PetroChina Company Limited",
      chineseName: "中国石油天然气股份有限公司",
      market: "HKEX: 0857; SSE: 601857",
      ownership: "State-owned",
      year: "2008",
      document: "Corporate Social Responsibility Report",
      language: "English and Chinese metadata",
      note: "Energy SOE CSR material useful for comparing early voluntary reporting with current ESG requirements.",
      links: [{ label: "UN Global Compact source", href: "https://unglobalcompact.org/participation/report/cop/detail/142" }]
    },
    {
      company: "China Petrochemical Corporation / Sinopec",
      chineseName: "中国石油化工集团有限公司",
      market: "Group parent of HKEX/SSE listed Sinopec Corp.",
      ownership: "State-owned",
      year: "2021",
      document: "Corporate Social Responsibility / Sustainability Report",
      language: "English",
      note: "Central-SOE sustainability report with CSR terminology and ESG management discussion.",
      links: [{ label: "PDF", href: "https://www.sinopecgroup.com/u/cms/jtyw/202411/27100051nn4q.pdf" }]
    },
    {
      company: "China Mobile Limited",
      chineseName: "中国移动有限公司",
      market: "HKEX: 0941; SSE: 600941",
      ownership: "State-owned",
      year: "Annual archive",
      document: "Corporate responsibility / sustainability reports",
      language: "English and Chinese source pages",
      note: "Telecommunications SOE responsibility-report archive for digital inclusion and network resilience issues.",
      links: [
        { label: "English source", href: "https://www.chinamobileltd.com/en/esg/sd.php" },
        { label: "Chinese archive", href: "https://www.10086.cn/aboutus/csr/report/" }
      ]
    },
    {
      company: "Ping An Insurance (Group) Company of China, Ltd.",
      chineseName: "中国平安保险（集团）股份有限公司",
      market: "HKEX: 2318; SSE: 601318",
      ownership: "Privately owned",
      year: "2016",
      document: "Corporate Social Responsibility Report",
      language: "English",
      note: "Financial-services CSR source for stakeholder, governance, and social-impact analysis.",
      links: [{ label: "PDF", href: "https://resources.pingan.com/app_upload/file/about/pingan_baogao_2016en.pdf" }]
    },
    {
      company: "New China Life Insurance Company Ltd.",
      chineseName: "新华人寿保险股份有限公司",
      market: "HKEX: 1336; SSE: 601336",
      ownership: "State-linked",
      year: "2020",
      document: "Corporate Social Responsibility Report",
      language: "English",
      note: "Insurance-sector CSR report with CASS-CSR framework references.",
      links: [{ label: "PDF", href: "https://static-cdn.newchinalife.com/ncl/pdf/20210325/3c6682a9-df96-40ae-9108-b447621af96f.pdf" }]
    },
    {
      company: "CNOOC Limited",
      chineseName: "中国海洋石油有限公司",
      market: "HKEX: 0883 / 80883; SSE: 600938",
      ownership: "State-owned",
      year: "2021-2025 report archive",
      document: "Social responsibility and sustainability reports",
      language: "English",
      note: "Energy-sector reports expressly discuss the company's CSR vision and commitments.",
      links: [{ label: "Sustainability source", href: "https://www.cnoocltd.com/english/sustainability/environmentalsocialandgovernancereports/" }]
    }
  ],
  esgReports: [
    {
      company: "Alibaba Group Holding Limited",
      chineseName: "阿里巴巴集团控股有限公司",
      market: "NYSE: BABA; HKEX: 9988 / 89988",
      ownership: "Privately owned",
      year: "2025",
      document: "Environmental, Social and Governance Report",
      language: "English and Chinese site options",
      note: "Current ESG reporting source with report archive and policies.",
      links: [{ label: "ESG source", href: "https://www.alibabagroup.com/en-US/esg" }]
    },
    {
      company: "Tencent Holdings Limited",
      chineseName: "腾讯控股有限公司",
      market: "HKEX: 0700",
      ownership: "Privately owned",
      year: "2025",
      document: "Environmental, Social and Governance Report",
      language: "English and Chinese source pages",
      note: "Archive contains annual ESG reports and earlier CSR reports.",
      links: [{ label: "ESG reports", href: "https://www.tencent.net.cn/our-actions/esg-reports/" }]
    },
    {
      company: "JD.com, Inc.",
      chineseName: "京东集团股份有限公司",
      market: "Nasdaq: JD; HKEX: 9618",
      ownership: "Privately owned",
      year: "2024",
      document: "Environmental, Social and Governance Report",
      language: "English",
      note: "Issuer archive for annual ESG reports and green finance materials.",
      links: [{ label: "ESG source", href: "https://ir.jd.com/esgcsr" }]
    },
    {
      company: "Baidu, Inc.",
      chineseName: "百度公司",
      market: "Nasdaq: BIDU; HKEX: 9888",
      ownership: "Privately owned",
      year: "2024",
      document: "Environmental, Social and Governance Report",
      language: "English and Chinese source pages",
      note: "AI and internet-platform ESG source with data-security and technology-ethics sections.",
      links: [{ label: "ESG source", href: "https://esg.baidu.com/" }]
    },
    {
      company: "NetEase, Inc.",
      chineseName: "网易公司",
      market: "Nasdaq: NTES; HKEX: 9999",
      ownership: "Privately owned",
      year: "2024",
      document: "Environmental, Social and Governance Report",
      language: "English",
      note: "Game and internet-services ESG source for user protection and digital-content governance.",
      links: [{ label: "ESG source", href: "https://ir.netease.com/esg-00" }]
    },
    {
      company: "NIO Inc.",
      chineseName: "蔚来",
      market: "NYSE: NIO; HKEX: 9866",
      ownership: "Privately owned",
      year: "2025",
      document: "Environmental, Social and Governance Report",
      language: "English and Chinese site options",
      note: "EV-sector ESG reporting source focused on low-carbon products, supply chain, and user community.",
      links: [{ label: "ESG source", href: "https://www.nio.com/esg" }]
    },
    {
      company: "China Mobile Limited",
      chineseName: "中国移动有限公司",
      market: "HKEX: 0941; SSE: 600941",
      ownership: "State-owned",
      year: "2024",
      document: "Sustainability / ESG Report",
      language: "English and Chinese source pages",
      note: "Telecommunications SOE sustainability report for governance, network, and digital-economy issues.",
      links: [{ label: "Sustainability source", href: "https://www.chinamobileltd.com/en/esg/sd.php" }]
    },
    {
      company: "Sinopec Corp.",
      chineseName: "中国石油化工股份有限公司",
      market: "HKEX: 0386; SSE: 600028",
      ownership: "State-owned",
      year: "2024 / latest archive",
      document: "Sustainability / ESG Report",
      language: "English",
      note: "Energy SOE reporting source for climate, safety, and environmental compliance topics.",
      links: [{ label: "Reports source", href: "https://www.sinopec.com/listco/en/reports/index.shtml" }]
    },
    {
      company: "Ping An Insurance (Group) Company of China, Ltd.",
      chineseName: "中国平安保险（集团）股份有限公司",
      market: "HKEX: 2318; SSE: 601318",
      ownership: "Privately owned",
      year: "2024",
      document: "Sustainability / ESG Report",
      language: "English and Chinese source pages",
      note: "Financial-services ESG source for sustainable finance and governance discussion.",
      links: [{ label: "Sustainability source", href: "https://group.pingan.com/ESG.html" }]
    },
    {
      company: "CNOOC Limited",
      chineseName: "中国海洋石油有限公司",
      market: "HKEX: 0883 / 80883; SSE: 600938",
      ownership: "State-owned",
      year: "2025",
      document: "Environmental, Social and Governance Report",
      language: "English",
      note: "Offshore-oil SOE report source for safety, climate, and stakeholder commitments.",
      links: [{ label: "ESG report archive", href: "https://www.cnoocltd.com/english/sustainability/environmentalsocialandgovernancereports/" }]
    }
  ],
  annualFinancialReports: [
    {
      company: "Alibaba Group Holding Limited",
      chineseName: "阿里巴巴集团控股有限公司",
      market: "NYSE: BABA; HKEX: 9988 / 89988",
      ownership: "Privately owned",
      year: "FY2025 / archive",
      document: "Annual financial report / Form 20-F archive",
      language: "English",
      note: "Annual reports and financial statements for a major U.S. and Hong Kong listed Chinese issuer.",
      links: [{ label: "Financial reports", href: "https://www.alibabagroup.com/en-US/ir-financial-reports-quarterly-results" }]
    },
    {
      company: "Tencent Holdings Limited",
      chineseName: "腾讯控股有限公司",
      market: "HKEX: 0700",
      ownership: "Privately owned",
      year: "2025 / archive",
      document: "Annual Report",
      language: "English and Chinese source pages",
      note: "Hong Kong annual-report archive for board report, financial statements, and corporate governance report.",
      links: [{ label: "Financial reports", href: "https://www.tencent.com/en-us/investors/financial-reports.html" }]
    },
    {
      company: "JD.com, Inc.",
      chineseName: "京东集团股份有限公司",
      market: "Nasdaq: JD; HKEX: 9618",
      ownership: "Privately owned",
      year: "2025 / archive",
      document: "Annual Report / Form 20-F",
      language: "English",
      note: "Annual-report archive for a dual-listed platform company.",
      links: [{ label: "Annual reports", href: "https://ir.jd.com/annual-reports" }]
    },
    {
      company: "Baidu, Inc.",
      chineseName: "百度公司",
      market: "Nasdaq: BIDU; HKEX: 9888",
      ownership: "Privately owned",
      year: "2025 / archive",
      document: "Annual Report / Form 20-F",
      language: "English",
      note: "Annual financial report source for search, AI, and online-marketing business analysis.",
      links: [{ label: "Financial reports", href: "https://ir.baidu.com/financial-reports/" }]
    },
    {
      company: "NetEase, Inc.",
      chineseName: "网易公司",
      market: "Nasdaq: NTES; HKEX: 9999",
      ownership: "Privately owned",
      year: "2025 / archive",
      document: "Annual Report / Form 20-F",
      language: "English",
      note: "Annual-report archive for gaming, music, and online services.",
      links: [{ label: "Annual reports", href: "https://ir.netease.com/financials/annual-reports/" }]
    },
    {
      company: "NIO Inc.",
      chineseName: "蔚来",
      market: "NYSE: NIO; HKEX: 9866",
      ownership: "Privately owned",
      year: "2025 / archive",
      document: "Annual Report / Form 20-F",
      language: "English",
      note: "Annual financial report source for EV manufacturing, losses, liquidity, and ADS/HK listing structure.",
      links: [{ label: "Annual reports", href: "https://ir.nio.com/financials/annual-reports/" }]
    },
    {
      company: "Li Auto Inc.",
      chineseName: "理想汽车",
      market: "Nasdaq: LI; HKEX: 2015",
      ownership: "Privately owned",
      year: "2025 / archive",
      document: "Annual Report / Form 20-F",
      language: "English",
      note: "Annual-report archive for EV revenue, margins, and dual-primary-listing materials.",
      links: [{ label: "Financial reports", href: "https://liauto.gcs-web.com/financial-information/financial-reports/" }]
    },
    {
      company: "XPeng Inc.",
      chineseName: "小鹏汽车",
      market: "NYSE: XPEV; HKEX: 9868",
      ownership: "Privately owned",
      year: "2025 / archive",
      document: "Annual Report / Form 20-F",
      language: "English",
      note: "Annual financial report source for EV, software, autonomous-driving, and overseas expansion issues.",
      links: [{ label: "Annual reports", href: "https://ir.xiaopeng.com/financials/annual-reports/" }]
    },
    {
      company: "Trip.com Group Limited",
      chineseName: "携程集团",
      market: "Nasdaq: TCOM; HKEX: 9961",
      ownership: "Privately owned",
      year: "2025 / archive",
      document: "Annual Report / Form 20-F",
      language: "English",
      note: "Annual-report archive for travel-platform financials and dual-listing disclosure.",
      links: [{ label: "Annual reports", href: "https://investors.trip.com/financial-information/annual-reports/" }]
    },
    {
      company: "China Mobile Limited",
      chineseName: "中国移动有限公司",
      market: "HKEX: 0941; SSE: 600941",
      ownership: "State-owned",
      year: "2025 / archive",
      document: "Annual Report",
      language: "English and Chinese source pages",
      note: "Annual-report archive for a major overseas-listed Chinese telecommunications SOE.",
      links: [{ label: "Reports source", href: "https://www.chinamobileltd.com/en/ir/reports.php" }]
    }
  ]
};

export const materialGroups: {
  key: MaterialGroupKey;
  title: string;
  description: string;
  records: MaterialRecord[];
}[] = [
  {
    key: "articlesOfAssociation",
    title: "Articles of Association",
    description: "Constitutional documents for major Chinese issuers, mixing privately controlled platform companies with state-owned or state-linked issuers.",
    records: materials.articlesOfAssociation
  },
  {
    key: "ipoProspectuses",
    title: "IPO Prospectuses",
    description: "Initial public offering prospectuses and final SEC filings for large Chinese companies listed in New York, Nasdaq, and related overseas markets.",
    records: materials.ipoProspectuses
  },
  {
    key: "csrReports",
    title: "CSR Reports",
    description: "Annual CSR, corporate responsibility, and successor sustainability reports for comparing voluntary social-responsibility disclosure over time.",
    records: materials.csrReports
  },
  {
    key: "esgReports",
    title: "ESG Reports",
    description: "Annual ESG or sustainability reports from private technology groups, EV issuers, financial institutions, and central-SOE energy companies.",
    records: materials.esgReports
  },
  {
    key: "annualFinancialReports",
    title: "Annual Financial Reports",
    description: "Annual report and Form 20-F archives for overseas-listed Chinese issuers with consolidated financial statements.",
    records: materials.annualFinancialReports
  }
];

export const materialStats = {
  groups: materialGroups.length,
  records: materialGroups.reduce((total, group) => total + group.records.length, 0),
  companies: new Set(materialGroups.flatMap((group) => group.records.map((record) => record.company))).size
};
