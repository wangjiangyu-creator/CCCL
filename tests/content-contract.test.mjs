import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { test } from "node:test";

const root = new URL("..", import.meta.url);
const contentRoot = new URL("src/content/", root);
const pagesRoot = new URL("src/pages/", root);
const creationStatement =
  "This website was created by Professor Wang Jiangyu of City University of Hong Kong School of Law with Codex for his teaching and research only.";

const requiredTopicSections = [
  "## Introduction",
  "## Key Legal Issues",
  "## Hypotheticals",
  "## Legislation",
  "## Cases",
  "## Readings"
];

const requiredExerciseSections = [
  "## Facts",
  "## Questions",
  "## Hints",
  "## Discussion Guide"
];

const parseFrontmatter = (text, file) => {
  assert.ok(text.startsWith("---\n"), `${file} must start with frontmatter`);
  const end = text.indexOf("\n---", 4);
  assert.notEqual(end, -1, `${file} must close frontmatter`);
  const raw = text.slice(4, end).trim();
  const body = text.slice(end + 4);
  const data = {};

  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const match = trimmed.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    assert.ok(match, `${file} has unsupported frontmatter line: ${line}`);
    const [, key, value] = match;
    data[key] = parseValue(value);
  }

  return { data, body };
};

const parseValue = (value) => {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^\d+$/.test(trimmed)) return Number(trimmed);
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    try {
      return JSON.parse(trimmed);
    } catch {
      return JSON.parse(trimmed.replaceAll("'", '"'));
    }
  }
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
};

const readCollection = async (name) => {
  const dir = new URL(`${name}/`, contentRoot);
  const files = (await readdir(dir)).filter((file) => file.endsWith(".md")).sort();
  return Promise.all(
    files.map(async (file) => {
      const text = await readFile(new URL(file, dir), "utf8");
      const parsed = parseFrontmatter(text, `${name}/${file}`);
      return {
        ...parsed,
        file,
        id: path.basename(file, ".md")
      };
    })
  );
};

const readAstroPages = async (dir = pagesRoot) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const pages = await Promise.all(
    entries.map(async (entry) => {
      const child = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, dir);
      if (entry.isDirectory()) return readAstroPages(child);
      if (entry.name.endsWith(".astro")) return [child];
      return [];
    })
  );

  return pages.flat();
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const whitespaceRegExp = (value) => value.trim().split(/\s+/).map(escapeRegExp).join("\\s+");

test("course topic pages cover the ten LW6134 teaching units", async () => {
  const topics = await readCollection("topics");
  assert.equal(topics.length, 10, "expected exactly ten topic pages");

  const orders = new Set();
  for (const topic of topics) {
    assert.equal(typeof topic.data.title, "string", `${topic.file} needs a title`);
    assert.equal(typeof topic.data.summary, "string", `${topic.file} needs a summary`);
    assert.equal(typeof topic.data.order, "number", `${topic.file} needs a numeric order`);
    orders.add(topic.data.order);

    for (const key of ["legislationIds", "caseIds", "readingIds", "exerciseIds"]) {
      assert.ok(Array.isArray(topic.data[key]), `${topic.file} needs ${key}`);
      assert.ok(topic.data[key].length > 0, `${topic.file} needs at least one ${key} entry`);
    }

    for (const section of requiredTopicSections) {
      assert.ok(topic.body.includes(section), `${topic.file} missing ${section}`);
    }
  }

  assert.deepEqual([...orders].sort((a, b) => a - b), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("resource records are source-backed and translation-aware", async () => {
  const resources = await readCollection("resources");
  assert.ok(resources.length >= 24, "expected a substantive starter resource library");

  const ids = new Set(resources.map((resource) => resource.id));
  assert.equal(ids.size, resources.length, "resource ids must be unique");

  const allowedTranslationStatuses = new Set([
    "official",
    "third-party",
    "exchange-filed",
    "instructor-summary",
    "english-version",
    "unavailable",
    "not-needed"
  ]);

  for (const resource of resources) {
    for (const key of ["kind", "jurisdiction", "title", "sourceUrl", "translationStatus", "summary"]) {
      assert.equal(typeof resource.data[key], "string", `${resource.file} needs ${key}`);
      assert.ok(resource.data[key].length > 0, `${resource.file} needs non-empty ${key}`);
    }
    assert.ok(
      allowedTranslationStatuses.has(resource.data.translationStatus),
      `${resource.file} has invalid translationStatus`
    );
    assert.ok(/^https?:\/\//.test(resource.data.sourceUrl), `${resource.file} needs an absolute sourceUrl`);
    assert.ok(Array.isArray(resource.data.topics), `${resource.file} needs topics`);
    assert.ok(Array.isArray(resource.data.tags), `${resource.file} needs tags`);
  }
});

test("case library covers authoritative company, partnership, and securities case sources", async () => {
  const resources = await readCollection("resources");
  const caseResources = resources.filter((resource) => resource.data.kind === "case");
  const caseIds = new Set(caseResources.map((resource) => resource.id));

  for (const id of [
    "guiding-case-148-gao-guang-third-party-revocation",
    "guiding-case-163-jiangsu-textile-substantive-consolidation",
    "xu-minghong-nanming-board-resolution",
    "nantong-shuangying-lianda-partnership-liability",
    "cicc-jie-xia-shareholder-information-rights",
    "kangmei-special-representative-securities-litigation",
    "zeda-yisheng-star-market-special-representative-litigation",
    "jintongling-reorganization-special-representative-litigation"
  ]) {
    assert.ok(caseIds.has(id), `case library expected authoritative source case ${id}`);
  }

  assert.ok(
    caseResources.some((resource) => resource.data.status === "Guiding case"),
    "case library needs guiding cases"
  );
  assert.ok(
    caseResources.some((resource) => resource.data.status === "SPC Gazette case"),
    "case library needs SPC Gazette cases"
  );
  assert.ok(
    caseResources.some((resource) => resource.data.tags.includes("People's Court Case Database")),
    "case library needs People's Court Case Database references"
  );
  assert.ok(
    caseResources.some((resource) => resource.data.tags.includes("investor protection typical case")),
    "case library needs securities investor-protection typical cases"
  );
  assert.ok(
    caseResources.some((resource) => resource.data.tags.includes("partnership enterprise")),
    "case library needs partnership-enterprise cases"
  );
});

test("case records expose original judgment or decision links when available", async () => {
  const resources = await readCollection("resources");
  const resourceLookup = new Map(resources.map((resource) => [resource.id, resource]));

  for (const id of [
    "guiding-case-148-gao-guang-third-party-revocation",
    "guiding-case-163-jiangsu-textile-substantive-consolidation",
    "xu-minghong-nanming-board-resolution",
    "liu-meifang-kairui-resolution-validity",
    "dazong-shenghuo-equity-mining-right-transfer",
    "nantong-shuangying-lianda-partnership-liability",
    "shixin-ronghe-changan-trust-limited-partnership-derivative",
    "cicc-jie-xia-shareholder-information-rights",
    "cicc-financial-product-hk-share-pledge-guarantee",
    "feile-audio-ordinary-representative-litigation"
  ]) {
    const resource = resourceLookup.get(id);
    assert.ok(resource, `expected case resource ${id}`);
    assert.equal(
      typeof resource.data.originalDecisionUrl,
      "string",
      `${resource.file} should expose an originalDecisionUrl`
    );
    assert.ok(
      /^https?:\/\//.test(resource.data.originalDecisionUrl),
      `${resource.file} originalDecisionUrl should be absolute`
    );
  }
});

test("cases page separates Chinese and foreign cases by issue", async () => {
  const casesPage = await readFile(new URL("src/pages/cases/index.astro", root), "utf8");

  for (const phrase of [
    "Chinese Cases",
    "Foreign Cases",
    "caseIssueGroups",
    "isChineseCase",
    "assignedTopic",
    "Issue category",
    "topics.map",
    "topic.data.title",
    "issue.title"
  ]) {
    assert.ok(casesPage.includes(phrase), `cases page missing ${phrase}`);
  }

  assert.ok(
    !casesPage.includes("{resources.map((resource) => <ResourceCard resource={resource} />)}"),
    "cases page should not render one flat case list"
  );
});

test("topic pages have enriched legislation and reading coverage", async () => {
  const topics = await readCollection("topics");

  for (const topic of topics) {
    assert.ok(
      topic.data.legislationIds.length >= 4,
      `${topic.file} needs at least four legislation or rule references`
    );
    assert.ok(
      topic.data.readingIds.length >= 3,
      `${topic.file} needs at least three literature or practice-note readings`
    );
  }
});

test("Unit 3 has deep capital contribution and shareholder finance coverage", async () => {
  const topics = await readCollection("topics");
  const resources = await readCollection("resources");
  const resourceLookup = new Map(resources.map((resource) => [resource.id, resource]));
  const unit3 = topics.find((topic) => topic.id === "capital-contributions-and-shareholder-finance");
  assert.ok(unit3, "Unit 3 topic must exist");

  assert.ok(unit3.data.legislationIds.length >= 14, "Unit 3 needs deeper law, rule, and judicial guidance coverage");
  assert.ok(unit3.data.caseIds.length >= 8, "Unit 3 needs a richer set of capital contribution cases");
  assert.ok(unit3.data.readingIds.length >= 24, "Unit 3 needs expanded practice, scholarship, and comparative readings");

  for (const id of [
    "spc-company-law-draft-interpretation-2025",
    "spc-company-law-article-88-non-retroactivity-reply-2024",
    "wang-qinjie-licheng-capital-deadline-extension",
    "yao-jincheng-hongda-contribution-period-resolution",
    "beijing-building-materials-debt-setoff-contribution",
    "today-seed-malicious-equity-transfer",
    "fujian-environmental-foreign-investor-capital-contribution",
    "china-briefing-shareholder-capital-contribution-obligations-2025",
    "jiang-acceleration-capital-contribution-2019",
    "zhang-contribution-performance-debt-law-2023",
    "enriques-macey-european-legal-capital-2001",
    "armour-legal-capital-outdated-2006",
    "eu-company-law-directive-2017"
  ]) {
    assert.ok(resourceLookup.has(id), `Unit 3 expected new resource ${id}`);
  }

  const linkedIds = [
    ...unit3.data.legislationIds,
    ...unit3.data.caseIds,
    ...unit3.data.readingIds
  ];
  const linkedResources = linkedIds.map((id) => resourceLookup.get(id)).filter(Boolean);
  const kinds = new Set(linkedResources.map((resource) => resource.data.kind));
  for (const kind of ["law", "regulation", "judicial-interpretation", "rule", "case", "practice-note", "literature", "comparative"]) {
    assert.ok(kinds.has(kind), `Unit 3 needs ${kind} material`);
  }
});

test("Unit 5 has deep director, supervisor, officer, and controller duty coverage", async () => {
  const topics = await readCollection("topics");
  const resources = await readCollection("resources");
  const resourceLookup = new Map(resources.map((resource) => [resource.id, resource]));
  const unit5 = topics.find((topic) => topic.id === "directors-officers-and-controller-duties");
  assert.ok(unit5, "Unit 5 topic must exist");

  assert.ok(unit5.data.legislationIds.length >= 18, "Unit 5 needs deeper law, rule, and judicial guidance coverage");
  assert.ok(unit5.data.caseIds.length >= 16, "Unit 5 needs a richer set of duty, supervisor, and controller cases");
  assert.ok(unit5.data.readingIds.length >= 32, "Unit 5 needs expanded scholarship and practice readings");

  for (const id of [
    "csrc-management-shareholding-rules-2024",
    "csrc-share-reduction-measures-2024",
    "sse-listed-company-standardized-operations-guideline-2026",
    "szse-mainboard-standardized-operations-guideline-2026",
    "zhengzhou-siwei-related-party-supervisor-action",
    "shenzhen-competing-business-supervisor-officer",
    "modern-avenue-shareholder-derivative-fund-occupation",
    "short-swing-profit-disgorgement-derivative-action",
    "shi-fiduciary-duties-new-company-law-2024",
    "zhao-fiduciary-duty-system-new-company-law-2024",
    "wang-xiangchun-conflict-interest-transactions-2024",
    "cai-internal-supervision-responsibility-supervisors-2018",
    "deng-conflict-interest-rules-company-interest-2009"
  ]) {
    assert.ok(resourceLookup.has(id), `Unit 5 expected new or newly linked resource ${id}`);
  }

  const linkedIds = [
    ...unit5.data.legislationIds,
    ...unit5.data.caseIds,
    ...unit5.data.readingIds
  ];
  const linkedResources = linkedIds.map((id) => resourceLookup.get(id)).filter(Boolean);
  const tags = new Set(linkedResources.flatMap((resource) => resource.data.tags));
  for (const tag of ["supervisors", "controllers", "company-interest harm", "related-party transactions"]) {
    assert.ok(tags.has(tag), `Unit 5 needs ${tag} material`);
  }
});

test("libraries include a deeper legislation set and literature set", async () => {
  const resources = await readCollection("resources");
  const primaryKinds = new Set(["law", "regulation", "judicial-interpretation", "rule", "comparative"]);
  const readingKinds = new Set(["literature", "practice-note"]);

  const primaryMaterials = resources.filter((resource) => primaryKinds.has(resource.data.kind));
  const readingMaterials = resources.filter((resource) => readingKinds.has(resource.data.kind));

  assert.ok(primaryMaterials.length >= 24, "expected an expanded legislation/comparative law library");
  assert.ok(readingMaterials.length >= 18, "expected an expanded literature and practice-note library");
});

test("comparative law page groups the requested jurisdictions by source category", async () => {
  const comparativePage = await readFile(new URL("src/pages/comparative-law/index.astro", root), "utf8");
  const resources = await readCollection("resources");
  const resourceIds = new Set(resources.map((resource) => resource.id));

  for (const phrase of [
    "Statutes and Regulations, including codes of conduct",
    "Cases",
    "Reports by governments, exchanges, think tanks, NGOs",
    "Books, Law journal/review articles, others",
    "United States",
    "United Kingdom",
    "Hong Kong",
    "Singapore"
  ]) {
    assert.ok(comparativePage.includes(phrase), `comparative law page missing ${phrase}`);
  }

  for (const id of [
    "sec-game-stop-market-structure-report-2021",
    "uk-restoring-trust-audit-corporate-governance-2021",
    "hkex-corporate-governance-code-review-conclusions-2024",
    "sgx-corporate-governance-code-disclosure-survey-2022",
    "aronson-demand-futility",
    "unocal-takeover-defensive-measures",
    "weinberger-entire-fairness",
    "blasius-shareholder-franchise",
    "macaura-corporate-property",
    "regal-hastings-corporate-opportunity",
    "ebrahimi-just-equitable-winding-up",
    "re-duomatic-unanimous-consent",
    "yung-kee-just-equitable-winding-up",
    "moulin-global-director-creditor-duty",
    "re-pccw-scheme-vote-manipulation",
    "re-chime-unfair-prejudice-corporate-relief",
    "ecrc-land-director-duties",
    "sakae-holdings-oppression-corporate-wrongs",
    "sim-evenstar-just-equitable-winding-up",
    "petroships-derivative-action-liquidation",
    "revlon-takeover-duties",
    "prest-v-petrodel-veil-piercing",
    "waddington-multiple-derivative-actions",
    "over-and-over-minority-oppression",
    "bebchuk-increasing-shareholder-power-2005",
    "gower-principles-modern-company-law-2021",
    "goo-multiple-derivative-actions-2010",
    "koh-tan-directors-duties-singapore-2019"
  ]) {
    assert.ok(resourceIds.has(id), `comparative law library expected ${id}`);
  }

  for (const jurisdiction of ["United States", "United Kingdom", "Hong Kong", "Singapore"]) {
    const caseCount = resources.filter(
      (resource) => resource.data.kind === "case" && resource.data.jurisdiction === jurisdiction
    ).length;
    assert.ok(caseCount >= 7, `comparative law library expected at least seven ${jurisdiction} cases`);
  }
});

test("Company Law 2023 exposes the provided English version PDF", async () => {
  const resources = await readCollection("resources");
  const companyLaw = resources.find((resource) => resource.id === "prc-company-law-2023");
  assert.ok(companyLaw, "Company Law 2023 resource must exist");
  assert.equal(companyLaw.data.translationStatus, "english-version");
  assert.equal(companyLaw.data.translationUrl, "/materials/company-law-2024-translation.pdf");

  const pdf = await stat(new URL("public/materials/company-law-2024-translation.pdf", root));
  assert.ok(pdf.size > 0, "English version PDF should be present in public materials");
});

test("topic references resolve to resources and exercises", async () => {
  const topics = await readCollection("topics");
  const resources = await readCollection("resources");
  const exercises = await readCollection("exercises");
  const resourceIds = new Set(resources.map((resource) => resource.id));
  const exerciseIds = new Set(exercises.map((exercise) => exercise.id));

  for (const topic of topics) {
    for (const key of ["legislationIds", "caseIds", "readingIds"]) {
      for (const id of topic.data[key]) {
        assert.ok(resourceIds.has(id), `${topic.file} references missing resource ${id}`);
      }
    }
    for (const id of topic.data.exerciseIds) {
      assert.ok(exerciseIds.has(id), `${topic.file} references missing exercise ${id}`);
    }
  }
});

test("public exercises avoid model answers while giving guided practice", async () => {
  const exercises = await readCollection("exercises");
  assert.equal(exercises.length, 10, "expected one public exercise per course topic");

  for (const exercise of exercises) {
    for (const key of ["topicSlug", "difficulty", "title"]) {
      assert.equal(typeof exercise.data[key], "string", `${exercise.file} needs ${key}`);
    }
    assert.ok(Array.isArray(exercise.data.linkedResources), `${exercise.file} needs linkedResources`);
    assert.ok(exercise.data.linkedResources.length > 0, `${exercise.file} needs at least one linked resource`);
    for (const section of requiredExerciseSections) {
      assert.ok(exercise.body.includes(section), `${exercise.file} missing ${section}`);
    }
    assert.ok(!exercise.body.includes("## Model Answer"), `${exercise.file} must not expose a model answer`);
  }
});

test("exercise linked resources resolve to resource records", async () => {
  const exercises = await readCollection("exercises");
  const resources = await readCollection("resources");
  const resourceIds = new Set(resources.map((resource) => resource.id));

  for (const exercise of exercises) {
    for (const id of exercise.data.linkedResources) {
      assert.ok(resourceIds.has(id), `${exercise.file} references missing linked resource ${id}`);
    }
  }
});

test("site navigation exposes the planned seven top-level sections", async () => {
  const navFile = await readFile(new URL("src/data/navigation.ts", root), "utf8");
  for (const label of [
    "Topics",
    "Laws and Regulations",
    "Cases",
    "Comparative Law",
    "Literature",
    "Materials",
    "Exercise"
  ]) {
    assert.ok(navFile.includes(`label: "${label}"`), `navigation missing ${label}`);
  }
});

test("materials page exposes five curated source-linked document groups", async () => {
  const materialsData = await readFile(new URL("src/data/materials.ts", root), "utf8");
  const materialsPage = await readFile(new URL("src/pages/materials/index.astro", root), "utf8");

  for (const phrase of [
    "articlesOfAssociation",
    "ipoProspectuses",
    "csrReports",
    "esgReports",
    "annualFinancialReports"
  ]) {
    assert.ok(materialsData.includes(phrase), `materials data missing ${phrase}`);
  }

  for (const phrase of ["materialGroups", "group.records", "record.links", "record.market"]) {
    assert.ok(materialsPage.includes(phrase), `materials page missing renderer phrase ${phrase}`);
  }

  const entryCount = (key, nextKey) => {
    const start = materialsData.indexOf(`${key}: [`);
    assert.notEqual(start, -1, `materials data missing ${key} array`);
    const end = nextKey ? materialsData.indexOf(`\n  ${nextKey}: [`, start) : materialsData.indexOf("\n};", start);
    assert.notEqual(end, -1, `materials data missing end for ${key} array`);
    return [...materialsData.slice(start, end).matchAll(/\n\s+\{\n\s+company:/g)].length;
  };

  assert.equal(entryCount("articlesOfAssociation", "ipoProspectuses"), 10, "expected ten articles of association records");
  assert.equal(entryCount("ipoProspectuses", "csrReports"), 10, "expected ten IPO prospectus records");
  assert.equal(entryCount("csrReports", "esgReports"), 10, "expected ten CSR report records");
  assert.equal(entryCount("esgReports", "annualFinancialReports"), 10, "expected ten ESG report records");
  assert.equal(entryCount("annualFinancialReports"), 10, "expected ten annual financial report records");

  assert.ok(materialsPage.includes("Source-linked company materials"), "materials page needs a clear hero");
  assert.ok(materialsPage.includes("data-filter-card"), "materials page should support client-side filtering");
  assert.ok(materialsPage.includes("10 records"), "materials page should show ten-record group counts");
});

test("home page exposes syllabus overview and learning outcomes", async () => {
  const home = await readFile(new URL("src/pages/index.astro", root), "utf8");

  for (const phrase of [
    "Syllabus-derived overview",
    "Learning outcomes",
    "revised PRC Company Law",
    "Compare Chinese company law"
  ]) {
    assert.ok(home.includes(phrase), `home page missing ${phrase}`);
  }
});

test("study workflow has a reusable static topic prep component", async () => {
  const component = await readFile(new URL("src/components/TopicPrepChecklist.astro", root), "utf8");

  for (const phrase of [
    "Before seminar",
    "Core law",
    "Cases",
    "Readings",
    "Exercise",
    "Reflection prompts",
    "No linked records yet"
  ]) {
    assert.ok(component.includes(phrase), `topic prep component missing ${phrase}`);
  }

  for (const forbidden of ["localStorage", "sessionStorage", "document.", "window.", "fetch("]) {
    assert.ok(!component.includes(forbidden), `topic prep component must stay static: ${forbidden}`);
  }
});

test("topic pages render the seminar prep checklist", async () => {
  const topicPage = await readFile(new URL("src/pages/topics/[slug].astro", root), "utf8");

  assert.ok(
    topicPage.includes('import TopicPrepChecklist from "@components/TopicPrepChecklist.astro";'),
    "topic detail page must import TopicPrepChecklist"
  );
  assert.ok(topicPage.includes("<TopicPrepChecklist"), "topic detail page must render TopicPrepChecklist");
  for (const prop of [
    "topic={topic}",
    "legislation={legislationRecords}",
    "cases={caseRecords}",
    "readings={readingRecords}",
    "exercises={topicExercises}"
  ]) {
    assert.ok(topicPage.includes(prop), `TopicPrepChecklist missing ${prop}`);
  }
});

test("home page exposes a seminar-prep entry point", async () => {
  const home = await readFile(new URL("src/pages/index.astro", root), "utf8");

  for (const phrase of [
    "How to prepare",
    "Read core law",
    "Review cases",
    "Compare readings",
    "Attempt the public exercise",
    "/topics/",
    "/exercise/"
  ]) {
    assert.ok(home.includes(phrase), `home page missing study-prep phrase ${phrase}`);
  }
});

test("site credits Professor Wang Jiangyu and Codex on the home page and shared footer", async () => {
  const home = await readFile(new URL("src/pages/index.astro", root), "utf8");
  const baseLayout = await readFile(new URL("src/layouts/BaseLayout.astro", root), "utf8");
  const statementPattern = whitespaceRegExp(creationStatement);

  assert.match(
    home,
    new RegExp(
      `<h1 class="page-title">Chinese and Comparative Company Law</h1>\\s*<p class="creation-note">\\s*${statementPattern}\\s*</p>`
    ),
    "home page should show the creation statement directly under the main title"
  );
  assert.match(
    baseLayout,
    new RegExp(`<footer class="site-footer">[\\s\\S]*${statementPattern}[\\s\\S]*</footer>`),
    "shared footer should include the creation statement"
  );

  for (const pageUrl of await readAstroPages()) {
    const page = await readFile(pageUrl, "utf8");
    assert.ok(page.includes("<BaseLayout"), `${pageUrl.pathname} should render through the shared footer layout`);
  }
});

test("topics and exercises expose static client-side search metadata", async () => {
  const baseLayout = await readFile(new URL("src/layouts/BaseLayout.astro", root), "utf8");
  const topicsPage = await readFile(new URL("src/pages/topics/index.astro", root), "utf8");
  const exercisesPage = await readFile(new URL("src/pages/exercise/index.astro", root), "utf8");

  assert.ok(baseLayout.includes("[data-filter-card]"), "filter script must support non-resource cards");
  for (const [name, page] of [
    ["topics page", topicsPage],
    ["exercise page", exercisesPage]
  ]) {
    assert.ok(page.includes("ResourceFilter"), `${name} needs the shared filter UI`);
    assert.ok(page.includes("data-filter-scope"), `${name} needs a scoped filter region`);
    assert.ok(page.includes("data-filter-card"), `${name} needs filterable cards`);
    assert.ok(page.includes("data-search"), `${name} needs search metadata`);
  }
});
