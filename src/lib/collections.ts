import type { CollectionEntry } from "astro:content";

export type Topic = CollectionEntry<"topics">;
export type Resource = CollectionEntry<"resources">;
export type Exercise = CollectionEntry<"exercises">;

export const contentSlug = (entry: { id: string }) => entry.id.replace(/\.(md|mdx)$/, "");

export const byTopicOrder = (a: Topic, b: Topic) => a.data.order - b.data.order;

export const isSpecialTopic = (topic: Topic) => topic.data.unitType === "special";

export const bySpecialTopicOrder = (a: Topic, b: Topic) =>
  (a.data.specialOrder ?? a.data.order) - (b.data.specialOrder ?? b.data.order);

export const byResourceTitle = (a: Resource, b: Resource) =>
  a.data.title.localeCompare(b.data.title);

export const resourcesByIds = (resources: Resource[], ids: string[]) => {
  const lookup = new Map(resources.map((resource) => [contentSlug(resource), resource]));
  return ids.map((id) => lookup.get(id)).filter((resource): resource is Resource => Boolean(resource));
};

export const resourcesByKind = (resources: Resource[], kinds: Resource["data"]["kind"][]) =>
  resources.filter((resource) => kinds.includes(resource.data.kind)).sort(byResourceTitle);

export const resourcesForTopic = (resources: Resource[], topicSlug: string) =>
  resources
    .filter((resource) => resource.data.topics.includes(topicSlug))
    .sort(byResourceTitle);

export const translationLabel = (status: Resource["data"]["translationStatus"]) => {
  const labels: Record<Resource["data"]["translationStatus"], string> = {
    official: "Official translation",
    "third-party": "Third-party translation",
    "exchange-filed": "Exchange-filed translation",
    "instructor-summary": "English summary",
    "english-version": "English version",
    unavailable: "Translation unavailable",
    "not-needed": "English original"
  };
  return labels[status];
};

export const translationLinkLabel = (status: Resource["data"]["translationStatus"]) =>
  status === "english-version" ? "English version" : "Translation";
