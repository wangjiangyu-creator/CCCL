import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { test } from "node:test";

const root = new URL("..", import.meta.url);
const contentRoot = new URL("src/content/", root);

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

test("libraries include a deeper legislation set and literature set", async () => {
  const resources = await readCollection("resources");
  const primaryKinds = new Set(["law", "regulation", "judicial-interpretation", "rule", "comparative"]);
  const readingKinds = new Set(["literature", "practice-note"]);

  const primaryMaterials = resources.filter((resource) => primaryKinds.has(resource.data.kind));
  const readingMaterials = resources.filter((resource) => readingKinds.has(resource.data.kind));

  assert.ok(primaryMaterials.length >= 24, "expected an expanded legislation/comparative law library");
  assert.ok(readingMaterials.length >= 18, "expected an expanded literature and practice-note library");
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

test("site navigation exposes the planned six top-level sections", async () => {
  const navFile = await readFile(new URL("src/data/navigation.ts", root), "utf8");
  for (const label of [
    "Topics",
    "Laws and Regulations",
    "Cases",
    "Comparative Law",
    "Literature",
    "Exercise"
  ]) {
    assert.ok(navFile.includes(`label: "${label}"`), `navigation missing ${label}`);
  }
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
