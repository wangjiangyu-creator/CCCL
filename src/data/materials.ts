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
    },
    {
      company: "Baidu, Inc.",
      chineseName: "百度公司",
      market: "Nasdaq: BIDU; HKEX: 9888",
      ownership: "Privately owned",
      year: "2024 SEC exhibit",
      document: "Fifth Amended and Restated Memorandum and Articles of Association",
      language: "English",
      note: "Cayman issuer constitution for an AI/search platform with Nasdaq and Hong Kong trading lines.",
      links: [{ label: "SEC exhibit", href: "https://baidu.gcs-web.com/static-files/9bbe1fed-0422-40bc-a224-9014a779600b" }]
    },
    {
      company: "NetEase, Inc.",
      chineseName: "网易公司",
      market: "Nasdaq: NTES; HKEX: 9999",
      ownership: "Privately owned",
      year: "2026 Form 6-K exhibit",
      document: "Third Amended and Restated Memorandum and Articles of Association",
      language: "English",
      note: "Useful for comparing shareholder-meeting, special-resolution, and Cayman-governance provisions in a dual-listed internet issuer.",
      links: [{ label: "Issuer SEC filing", href: "https://ir.netease.com/static-files/a42dffae-1311-4f80-9907-ec917a56cde0" }]
    },
    {
      company: "NIO Inc.",
      chineseName: "蔚来",
      market: "NYSE: NIO; HKEX: 9866; SGX: NIO",
      ownership: "Privately owned",
      year: "Current issuer exhibit",
      document: "Thirteenth Amended and Restated Memorandum and Articles of Association",
      language: "English",
      note: "EV issuer constitution with WVR-style Cayman drafting and multi-market disclosure relevance.",
      links: [{ label: "Issuer filing", href: "https://ir.nio.com/static-files/fb211254-ce2a-4732-84df-7059475e3a61" }]
    },
    {
      company: "Li Auto Inc.",
      chineseName: "理想汽车",
      market: "Nasdaq: LI; HKEX: 2015",
      ownership: "Privately owned",
      year: "Current governance page",
      document: "Sixth Amended and Restated Memorandum and Articles of Association",
      language: "English",
      note: "Governance source for EV-sector voting, notice, and shareholder-protection mechanics.",
      links: [{ label: "Governance source", href: "https://ir.lixiang.com/corporate-governance/governance-overview" }]
    },
    {
      company: "XPeng Inc.",
      chineseName: "小鹏汽车",
      market: "NYSE: XPEV; HKEX: 9868",
      ownership: "Privately owned",
      year: "Current governance page",
      document: "Memorandum and Articles of Association",
      language: "English",
      note: "Documents-and-charters page for an EV issuer with ADS and Hong Kong ordinary-share governance layers.",
      links: [{ label: "Governance documents", href: "https://ir.xiaopeng.com/governance/documents-charters" }]
    },
    {
      company: "Trip.com Group Limited",
      chineseName: "携程集团",
      market: "Nasdaq: TCOM; HKEX: 9961",
      ownership: "Privately owned",
      year: "2023 AGM source",
      document: "Fourth Amended and Restated Memorandum and Articles of Association",
      language: "English",
      note: "Travel-platform source for annual-meeting amendments and dual-listing shareholder procedures.",
      links: [{ label: "AGM source", href: "https://investors.trip.com/news-releases/news-release-details/tripcom-group-hold-annual-general-meeting-june-30-2023/" }]
    },
    {
      company: "Kuaishou Technology",
      chineseName: "快手科技",
      market: "HKEX: 1024 / 81024",
      ownership: "Privately owned",
      year: "Current governance page",
      document: "Amended and Restated Memorandum and Articles of Association",
      language: "English",
      note: "Hong Kong WVR issuer governance page pairing constitutional documents with contractual-arrangement files.",
      links: [{ label: "Governance source", href: "https://kuaishou.gcs-web.com/about-us/corporate-governance" }]
    },
    {
      company: "Lenovo Group Limited",
      chineseName: "联想集团有限公司",
      market: "HKEX: 0992; ADR: LNVGY",
      ownership: "Privately owned",
      year: "Current issuer page",
      document: "Memorandum and Articles of Association",
      language: "English and Chinese source pages",
      note: "Hong Kong technology issuer constitution useful for ordinary-share governance without WVR framing.",
      links: [{ label: "Articles source", href: "https://investor.lenovo.com/en/cg/association.php" }]
    },
    {
      company: "BYD Company Limited",
      chineseName: "比亚迪股份有限公司",
      market: "HKEX: 1211; SZSE: 002594",
      ownership: "Privately owned",
      year: "Current governance page",
      document: "Articles of Association",
      language: "English and Chinese source pages",
      note: "PRC joint stock company governance source for comparing A-share and H-share constitutional requirements.",
      links: [{ label: "Corporate governance", href: "https://www.bydglobal.com/en/investorgovern.html?scroll=true" }]
    },
    {
      company: "Bank of China Limited",
      chineseName: "中国银行股份有限公司",
      market: "HKEX: 3988; SSE: 601988",
      ownership: "State-owned",
      year: "2023 revision",
      document: "Articles of Association",
      language: "English",
      note: "Large commercial-bank Articles for state-shareholder, financial-regulatory, and H-share governance comparison.",
      links: [{ label: "Articles source", href: "https://www.boc.cn/en/investor/ir2/202311/t20231124_24119001.html" }]
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
    },
    {
      company: "Tencent Music Entertainment Group",
      chineseName: "腾讯音乐娱乐集团",
      market: "NYSE IPO: TME",
      ownership: "Privately owned; Tencent controlled",
      year: "2018",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "Music-streaming IPO source for Tencent control, assured entitlement distribution, and platform licensing risks.",
      links: [{ label: "SEC prospectus", href: "https://www.sec.gov/Archives/edgar/data/1744676/000119312518347477/d624633d424b4.htm" }]
    },
    {
      company: "iQIYI, Inc.",
      chineseName: "爱奇艺",
      market: "Nasdaq IPO: IQ",
      ownership: "Privately owned; Baidu controlled at IPO",
      year: "2018",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "Online-video IPO for VIE, content regulation, parent-company control, and platform-finance discussion.",
      links: [{ label: "Issuer SEC filing", href: "https://ir.iqiyi.com/financial-information/sec-filings?field_nir_sec_date_filed_value=&items_per_page=10&items_per_page_toggle=0&mobile=1&order=field_nir_sec_date_filed&page=17&sort=desc" }]
    },
    {
      company: "ZTO Express (Cayman) Inc.",
      chineseName: "中通快递",
      market: "NYSE IPO: ZTO",
      ownership: "Privately owned",
      year: "2016",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "Logistics IPO source for delivery-network structure, founder control, and related-party issues.",
      links: [{ label: "SEC filing detail", href: "https://www.sec.gov/Archives/edgar/data/1677250/000104746916016357/0001047469-16-016357-index.htm" }]
    },
    {
      company: "Luckin Coffee Inc.",
      chineseName: "瑞幸咖啡",
      market: "Nasdaq IPO: LK",
      ownership: "Privately owned",
      year: "2019",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "High-growth consumer IPO source that later became central to disclosure-failure and gatekeeper discussions.",
      links: [{ label: "SEC filing detail", href: "https://www.sec.gov/Archives/edgar/data/1767582/000104746919003174/0001047469-19-003174-index.htm" }]
    },
    {
      company: "KE Holdings Inc.",
      chineseName: "贝壳",
      market: "NYSE IPO: BEKE",
      ownership: "Privately owned",
      year: "2020",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "Housing-platform IPO with agency-network, VIE, data, and post-IPO governance material.",
      links: [{ label: "SEC filing detail", href: "https://www.sec.gov/Archives/edgar/data/1809587/000104746920004582/0001047469-20-004582-index.htm" }]
    },
    {
      company: "Full Truck Alliance Co. Ltd.",
      chineseName: "满帮集团",
      market: "NYSE IPO: YMM",
      ownership: "Privately owned",
      year: "2021",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "Digital freight platform IPO source for logistics data, platform matching, and cybersecurity-review context.",
      links: [{ label: "SEC filing detail", href: "https://www.sec.gov/Archives/edgar/data/1838413/000119312521196842/0001193125-21-196842-index.htm" }]
    },
    {
      company: "Kanzhun Limited",
      chineseName: "看准科技 / BOSS直聘",
      market: "Nasdaq IPO: BZ",
      ownership: "Privately owned",
      year: "2021",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "Online recruitment IPO for data-security, human-capital platform, and post-listing regulatory-risk analysis.",
      links: [{ label: "Issuer SEC filing", href: "https://ir.zhipin.com/sec-filings/sec-filing/424b4/0001193125-21-189628" }]
    },
    {
      company: "Dada Nexus Limited",
      chineseName: "达达集团",
      market: "Nasdaq IPO: DADA",
      ownership: "Privately owned; JD-linked",
      year: "2020",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "On-demand delivery IPO with JD and Walmart cornerstone-style commercial relationships.",
      links: [{ label: "SEC prospectus", href: "https://www.sec.gov/Archives/edgar/data/1793862/000119312520163470/d838738d424b4.htm" }]
    },
    {
      company: "RLX Technology Inc.",
      chineseName: "雾芯科技 / 悦刻",
      market: "NYSE IPO: RLX",
      ownership: "Privately owned",
      year: "2021",
      document: "IPO prospectus, Form 424B4",
      language: "English",
      note: "Consumer-products IPO for sector regulation, restructuring, and VIE disclosure comparison.",
      links: [{ label: "SEC prospectus", href: "https://www.sec.gov/Archives/edgar/data/1828365/000104746921000170/a2242822z424b4.htm" }]
    },
    {
      company: "Xiaomi Corporation",
      chineseName: "小米集团",
      market: "HKEX IPO: 1810",
      ownership: "Privately owned",
      year: "2018",
      document: "Hong Kong IPO prospectus",
      language: "English",
      note: "Hong Kong WVR listing source for weighted voting rights, ecosystem strategy, and Cayman constitutional terms.",
      links: [{ label: "HKEX prospectus", href: "https://www1.hkexnews.hk/listedco/listconews/sehk/2018/0625/ltn20180625029.htm" }]
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
    },
    {
      company: "Baidu, Inc.",
      chineseName: "百度公司",
      market: "Nasdaq: BIDU; HKEX: 9888",
      ownership: "Privately owned",
      year: "Report archive",
      document: "ESG / social responsibility reports",
      language: "English and Chinese source pages",
      note: "AI and search-platform responsibility source for data governance, technology ethics, and public-interest initiatives.",
      links: [{ label: "ESG report source", href: "https://esg.baidu.com/en/report.html" }]
    },
    {
      company: "Meituan",
      chineseName: "美团",
      market: "HKEX: 3690",
      ownership: "Privately owned",
      year: "2018-2025 archive",
      document: "Corporate Social Responsibility Reports",
      language: "English and Chinese source pages",
      note: "Platform-economy CSR archive for food delivery, merchant services, rider welfare, and local-commerce responsibility.",
      links: [{ label: "CSR reports", href: "https://www.meituan.com/en-US/investor/csr-reports" }]
    },
    {
      company: "Lenovo Group Limited",
      chineseName: "联想集团有限公司",
      market: "HKEX: 0992; ADR: LNVGY",
      ownership: "Privately owned",
      year: "2009-2025 archive",
      document: "Sustainability / CSR reports",
      language: "English and Chinese source pages",
      note: "Longitudinal archive that bridges older sustainability reports and current ESG reports.",
      links: [{ label: "Sustainability reports", href: "https://investor.lenovo.com/en/sustainability/sustainability_reports.php" }]
    },
    {
      company: "Geely Automobile Holdings Limited",
      chineseName: "吉利汽车控股有限公司",
      market: "HKEX: 0175",
      ownership: "Privately owned",
      year: "Current sustainability page",
      document: "Sustainability / ESG reports",
      language: "English",
      note: "Automotive CSR and sustainability source for low-carbon transition and supply-chain responsibility.",
      links: [{ label: "Sustainability source", href: "https://www.geely.com/en/esg" }]
    },
    {
      company: "China Telecom Corporation Limited",
      chineseName: "中国电信股份有限公司",
      market: "HKEX: 0728; SSE: 601728",
      ownership: "State-owned",
      year: "2023",
      document: "Sustainability Report",
      language: "English",
      note: "Telecommunications SOE report for network infrastructure, digital inclusion, and public-service obligations.",
      links: [{ label: "PDF", href: "https://www.chinatelecom-h.com/en/ir/report/esg2023.pdf" }]
    },
    {
      company: "Bank of China Limited",
      chineseName: "中国银行股份有限公司",
      market: "HKEX: 3988; SSE: 601988",
      ownership: "State-owned",
      year: "CSR archive",
      document: "Corporate Social Responsibility Reports",
      language: "English",
      note: "Bank CSR archive for financial inclusion, green finance, poverty alleviation, and state-owned bank governance.",
      links: [{ label: "CSR source", href: "https://www.boc.cn/en/aboutboc/ab8/" }]
    },
    {
      company: "China Merchants Bank Co., Ltd.",
      chineseName: "招商银行股份有限公司",
      market: "HKEX: 3968; SSE: 600036",
      ownership: "State-linked mixed ownership",
      year: "CSR archive",
      document: "Corporate Social Responsibility Reports",
      language: "English",
      note: "Commercial-bank CSR reports useful for retail finance, inclusive finance, and stakeholder-governance comparison.",
      links: [{ label: "CSR reports", href: "https://www.cmbchina.com/cmbir-en/ESG/CSRReports/" }]
    },
    {
      company: "BYD Company Limited",
      chineseName: "比亚迪股份有限公司",
      market: "HKEX: 1211; SZSE: 002594",
      ownership: "Privately owned",
      year: "2017-2020 CSR archive",
      document: "Corporate Social Responsibility Reports",
      language: "English",
      note: "EV and battery-manufacturing CSR source focused on supply chain, labor, environmental safety, and first-responder support.",
      links: [{ label: "CSR source", href: "https://en.byd.com/social-responsibility/" }]
    },
    {
      company: "Haier Smart Home Co., Ltd.",
      chineseName: "海尔智家股份有限公司",
      market: "SSE: 600690; HKEX: 6690; CEINEX D-share",
      ownership: "Privately owned",
      year: "CSR / ESG archive",
      document: "Corporate Social Responsibility and ESG Reports",
      language: "English",
      note: "Appliance-manufacturing archive spanning CSR reports, ESG reports, and carbon-neutrality reporting.",
      links: [{ label: "CSR source", href: "https://www.haier.com/global/csr/" }]
    },
    {
      company: "China Construction Bank Corporation",
      chineseName: "中国建设银行股份有限公司",
      market: "HKEX: 0939; SSE: 601939",
      ownership: "State-owned",
      year: "2010 CSR report source",
      document: "Corporate Social Responsibility Report",
      language: "English",
      note: "Early large-bank CSR source for comparing older social-responsibility framing with current ESG disclosure.",
      links: [{ label: "CSR source", href: "https://www.ccb.com/eng/2021-01/22/article_2021012217421425744.shtml" }]
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
    },
    {
      company: "Bilibili Inc.",
      chineseName: "哔哩哔哩",
      market: "Nasdaq: BILI; HKEX: 9626",
      ownership: "Privately owned",
      year: "Current ESG page",
      document: "Environmental, Social and Governance Reports",
      language: "English and Chinese source pages",
      note: "Digital-content ESG source for user safety, community governance, and platform responsibility.",
      links: [{ label: "ESG source", href: "https://ir.bilibili.com/esg/" }]
    },
    {
      company: "Meituan",
      chineseName: "美团",
      market: "HKEX: 3690",
      ownership: "Privately owned",
      year: "2025 / archive",
      document: "Corporate Social Responsibility / ESG-linked reports",
      language: "English and Chinese source pages",
      note: "Local-services platform reports for rider welfare, merchant support, food safety, and community impact.",
      links: [{ label: "CSR / ESG reports", href: "https://www.meituan.com/en-US/investor/csr-reports" }]
    },
    {
      company: "Xiaomi Corporation",
      chineseName: "小米集团",
      market: "HKEX: 1810",
      ownership: "Privately owned",
      year: "Current ESG portal",
      document: "Environmental, Social and Governance materials",
      language: "English and Chinese site options",
      note: "Consumer electronics and smart-manufacturing ESG source for supply-chain, product, and climate governance.",
      links: [{ label: "ESG source", href: "https://esg.mi.com/" }]
    },
    {
      company: "Kuaishou Technology",
      chineseName: "快手科技",
      market: "HKEX: 1024 / 81024",
      ownership: "Privately owned",
      year: "2022-2025 archive",
      document: "Environmental, Social and Governance Reports",
      language: "English and Chinese source pages",
      note: "Short-video and live-commerce ESG source with youth protection, employment, and platform-governance materials.",
      links: [{ label: "ESG reports", href: "https://ir.kuaishou.com/esg/esg-reports-and-other-publishes/" }]
    },
    {
      company: "Lenovo Group Limited",
      chineseName: "联想集团有限公司",
      market: "HKEX: 0992; ADR: LNVGY",
      ownership: "Privately owned",
      year: "2024/25",
      document: "Environmental, Social and Governance Report",
      language: "English and Chinese source pages",
      note: "Global technology ESG archive for supply-chain due diligence, product lifecycle, and responsible AI issues.",
      links: [{ label: "ESG reports", href: "https://investor.lenovo.com/en/sustainability/sustainability_reports.php" }]
    },
    {
      company: "Geely Automobile Holdings Limited",
      chineseName: "吉利汽车控股有限公司",
      market: "HKEX: 0175",
      ownership: "Privately owned",
      year: "2024 / latest source page",
      document: "Environmental, Social and Governance Report",
      language: "English",
      note: "Automotive ESG source for lifecycle emissions, NEV transition, product safety, and supply-chain governance.",
      links: [{ label: "ESG source", href: "https://www.geely.com/en/esg" }]
    },
    {
      company: "Contemporary Amperex Technology Co., Limited",
      chineseName: "宁德时代新能源科技股份有限公司",
      market: "SZSE: 300750",
      ownership: "Privately owned",
      year: "2025 / archive",
      document: "Environmental, Social and Governance Reports",
      language: "English and Chinese source pages",
      note: "Battery-sector ESG source for responsible minerals, supply-chain grievance systems, and carbon accounting.",
      links: [{ label: "Sustainability source", href: "https://www.catl.com/en/about/sustainability/" }]
    },
    {
      company: "ZTO Express (Cayman) Inc.",
      chineseName: "中通快递",
      market: "NYSE: ZTO; HKEX: 2057",
      ownership: "Privately owned",
      year: "Current ESG page",
      document: "Environmental, Social and Governance materials",
      language: "English",
      note: "Logistics ESG source for delivery-network emissions, workplace safety, and service responsibility.",
      links: [{ label: "ESG source", href: "https://www.zto.com/en/esg" }]
    },
    {
      company: "Haier Smart Home Co., Ltd.",
      chineseName: "海尔智家股份有限公司",
      market: "SSE: 600690; HKEX: 6690; CEINEX D-share",
      ownership: "Privately owned",
      year: "2025 / archive",
      document: "Environmental, Social and Governance Reports",
      language: "English",
      note: "Appliance and smart-home ESG source for product lifecycle, carbon-neutrality, and user-centered governance.",
      links: [{ label: "ESG reports", href: "https://smart-home.haier.com/en/gpxx/esg/" }]
    },
    {
      company: "China Mengniu Dairy Company Limited",
      chineseName: "中国蒙牛乳业有限公司",
      market: "HKEX: 2319",
      ownership: "State-linked mixed ownership",
      year: "2024 / current source page",
      document: "Sustainability / ESG Reports and Policies",
      language: "English and Chinese source pages",
      note: "Consumer-food ESG source for food safety, green packaging, dairy sourcing, and biodiversity reporting.",
      links: [{ label: "ESG reports", href: "https://mengniuir.com/en/esg.aspx" }]
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
    },
    {
      company: "Bilibili Inc.",
      chineseName: "哔哩哔哩",
      market: "Nasdaq: BILI; HKEX: 9626",
      ownership: "Privately owned",
      year: "2024 / archive",
      document: "Annual Report / Form 20-F",
      language: "English",
      note: "Annual-report source for video-community revenue, content costs, user metrics, and dual-listing disclosure.",
      links: [{ label: "IR source", href: "https://ir.bilibili.com/" }]
    },
    {
      company: "PDD Holdings Inc.",
      chineseName: "拼多多控股",
      market: "Nasdaq: PDD",
      ownership: "Privately owned",
      year: "2025 / archive",
      document: "Annual Report / Form 20-F",
      language: "English",
      note: "Annual reports for Pinduoduo and Temu-related platform disclosure, growth investment, and VIE analysis.",
      links: [{ label: "Annual reports", href: "https://investor.pddholdings.com/financial-information/annual-reports/" }]
    },
    {
      company: "Meituan",
      chineseName: "美团",
      market: "HKEX: 3690",
      ownership: "Privately owned",
      year: "2025 / archive",
      document: "Annual Report",
      language: "English and Chinese source pages",
      note: "Hong Kong annual-report archive for local commerce, food delivery, new initiatives, and WVR governance.",
      links: [{ label: "Financial reports", href: "https://www.meituan.com/en-US/investor/reports" }]
    },
    {
      company: "Xiaomi Corporation",
      chineseName: "小米集团",
      market: "HKEX: 1810",
      ownership: "Privately owned",
      year: "2025 / archive",
      document: "Annual and Interim Reports",
      language: "English and Chinese source pages",
      note: "Annual-report archive for smartphone, IoT, EV, and WVR governance discussion.",
      links: [{ label: "Annual reports", href: "https://ir.mi.com/financial-information/annual-interim-reports" }]
    },
    {
      company: "Kuaishou Technology",
      chineseName: "快手科技",
      market: "HKEX: 1024 / 81024",
      ownership: "Privately owned",
      year: "2025 / archive",
      document: "Annual and Interim Reports",
      language: "English and Chinese source pages",
      note: "Annual-report archive for live streaming, online marketing, e-commerce, AI tools, and WVR governance.",
      links: [{ label: "Annual reports", href: "https://ir.kuaishou.com/corporate-filings/annual-interim-reports" }]
    },
    {
      company: "BYD Company Limited",
      chineseName: "比亚迪股份有限公司",
      market: "HKEX: 1211; SZSE: 002594",
      ownership: "Privately owned",
      year: "Annual archive",
      document: "Annual Report",
      language: "English and Chinese source pages",
      note: "Financial-report archive for EV, battery, electronics, and A/H-share disclosure comparison.",
      links: [{ label: "Periodic reports", href: "https://www.bydglobal.com/en/investorannals.html?scroll=true" }]
    },
    {
      company: "PetroChina Company Limited",
      chineseName: "中国石油天然气股份有限公司",
      market: "HKEX: 0857; SSE: 601857",
      ownership: "State-owned",
      year: "2024",
      document: "Annual Report",
      language: "English",
      note: "Energy SOE annual report for reserves, capital expenditure, state ownership, and H-share disclosure.",
      links: [{ label: "PDF", href: "https://www.petrochina.com.cn/ptr/rdxx/202504/09bf572f6d2d45edbf2da8a055711480/files/388c17360377474ea5ebca247d8aeee1.pdf" }]
    },
    {
      company: "Sinopec Corp.",
      chineseName: "中国石油化工股份有限公司",
      market: "HKEX: 0386; SSE: 600028",
      ownership: "State-owned",
      year: "2024 / archive",
      document: "Annual Report",
      language: "English",
      note: "Annual-report source for a central-SOE oil, refining, and chemicals issuer.",
      links: [{ label: "Annual reports", href: "https://www.sinopec.com/listco/en/annualreport/index.shtml" }]
    },
    {
      company: "CNOOC Limited",
      chineseName: "中国海洋石油有限公司",
      market: "HKEX: 0883 / 80883; SSE: 600938",
      ownership: "State-owned",
      year: "2025 / archive",
      document: "Annual Report",
      language: "English",
      note: "Annual reports for offshore oil and gas reserves, production, dividends, and state ownership.",
      links: [{ label: "Annual reports", href: "https://ltd.cnooc.com.cn/english/investorrelations/reports/annualreport/" }]
    },
    {
      company: "Ping An Insurance (Group) Company of China, Ltd.",
      chineseName: "中国平安保险（集团）股份有限公司",
      market: "HKEX: 2318; SSE: 601318",
      ownership: "Privately owned",
      year: "2024 / archive",
      document: "Annual Results Report",
      language: "English and Chinese source pages",
      note: "Financial-services reports for insurance, banking, technology, solvency, and governance analysis.",
      links: [{ label: "Results and presentations", href: "https://group.pingan.com/investor_relations/results_and_presentations.html" }]
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
