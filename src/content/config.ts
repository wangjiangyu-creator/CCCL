import { defineCollection, z } from "astro:content";

const topicCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    legislationIds: z.array(z.string()),
    caseIds: z.array(z.string()),
    readingIds: z.array(z.string()),
    exerciseIds: z.array(z.string())
  })
});

const resourceCollection = defineCollection({
  type: "content",
  schema: z.object({
    kind: z.enum([
      "law",
      "regulation",
      "judicial-interpretation",
      "rule",
      "case",
      "comparative",
      "literature",
      "practice-note"
    ]),
    jurisdiction: z.string(),
    title: z.string(),
    originalTitle: z.string().optional(),
    citation: z.string().optional(),
    authority: z.string().optional(),
    date: z.string().optional(),
    status: z.string().optional(),
    sourceUrl: z.string().url(),
    translationUrl: z.union([z.string().url(), z.string().regex(/^\//)]).optional(),
    translationStatus: z.enum([
      "official",
      "third-party",
      "exchange-filed",
      "instructor-summary",
      "english-version",
      "unavailable",
      "not-needed"
    ]),
    summary: z.string(),
    topics: z.array(z.string()),
    tags: z.array(z.string())
  })
});

const exerciseCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    topicSlug: z.string(),
    difficulty: z.enum(["introductory", "intermediate", "advanced"]),
    linkedResources: z.array(z.string())
  })
});

export const collections = {
  topics: topicCollection,
  resources: resourceCollection,
  exercises: exerciseCollection
};
