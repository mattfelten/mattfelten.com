declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"posts": {
"2012-02-06-2012.md": {
	id: "2012-02-06-2012.md";
  slug: "2012-02-06-2012";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2012-11-06-lois-lane.md": {
	id: "2012-11-06-lois-lane.md";
  slug: "2012-11-06-lois-lane";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2013-03-25-look-to-the-futura.md": {
	id: "2013-03-25-look-to-the-futura.md";
  slug: "2013-03-25-look-to-the-futura";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2013-06-13-dreamcon-speaker-series.md": {
	id: "2013-06-13-dreamcon-speaker-series.md";
  slug: "2013-06-13-dreamcon-speaker-series";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2013-12-23-bltd-gift-ideas-2013.md": {
	id: "2013-12-23-bltd-gift-ideas-2013.md";
  slug: "2013-12-23-bltd-gift-ideas-2013";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2014-03-04-css-only-spinner.md": {
	id: "2014-03-04-css-only-spinner.md";
  slug: "2014-03-04-css-only-spinner";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2014-04-15-creativity.md": {
	id: "2014-04-15-creativity.md";
  slug: "2014-04-15-creativity";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2014-06-16-things-i-learned-in-europe.md": {
	id: "2014-06-16-things-i-learned-in-europe.md";
  slug: "2014-06-16-things-i-learned-in-europe";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2014-09-19-dealing-with-disappointment.md": {
	id: "2014-09-19-dealing-with-disappointment.md";
  slug: "2014-09-19-dealing-with-disappointment";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2014-09-20-getting-older.md": {
	id: "2014-09-20-getting-older.md";
  slug: "2014-09-20-getting-older";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2015-09-10-overwhelm-them-with-choice.md": {
	id: "2015-09-10-overwhelm-them-with-choice.md";
  slug: "2015-09-10-overwhelm-them-with-choice";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2015-09-15-control-panel-design-update.md": {
	id: "2015-09-15-control-panel-design-update.md";
  slug: "2015-09-15-control-panel-design-update";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2015-11-14-imposter.md": {
	id: "2015-11-14-imposter.md";
  slug: "2015-11-14-imposter";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2018-01-18-bring-me-problems-not-solutions.md": {
	id: "2018-01-18-bring-me-problems-not-solutions.md";
  slug: "2018-01-18-bring-me-problems-not-solutions";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2018-03-05-angry-rant-about-front-end-frameworks.md": {
	id: "2018-03-05-angry-rant-about-front-end-frameworks.md";
  slug: "2018-03-05-angry-rant-about-front-end-frameworks";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2018-03-26-horizontal-vertical-thinking/index.mdx": {
	id: "2018-03-26-horizontal-vertical-thinking/index.mdx";
  slug: "2018-03-26-horizontal-vertical-thinking";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".mdx"] };
"2018-12-05-building-an-enterprise-design-system.md": {
	id: "2018-12-05-building-an-enterprise-design-system.md";
  slug: "2018-12-05-building-an-enterprise-design-system";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2019-09-04-design-system-infrastructure.md": {
	id: "2019-09-04-design-system-infrastructure.md";
  slug: "2019-09-04-design-system-infrastructure";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2020-10-03-incremental-correctness/index.mdx": {
	id: "2020-10-03-incremental-correctness/index.mdx";
  slug: "2020-10-03-incremental-correctness";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".mdx"] };
"2024-03-04-momentum-collaboration-vision.mdx": {
	id: "2024-03-04-momentum-collaboration-vision.mdx";
  slug: "2024-03-04-momentum-collaboration-vision";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".mdx"] };
};
"speaking": {
"2013-07-14-dreamcon.md": {
	id: "2013-07-14-dreamcon.md";
  slug: "2013-07-14-dreamcon";
  body: string;
  collection: "speaking";
  data: InferEntrySchema<"speaking">
} & { render(): Render[".md"] };
"2018-12-06-meetup.md": {
	id: "2018-12-06-meetup.md";
  slug: "2018-12-06-meetup";
  body: string;
  collection: "speaking";
  data: InferEntrySchema<"speaking">
} & { render(): Render[".md"] };
"2020-06-30-contentful-creators.md": {
	id: "2020-06-30-contentful-creators.md";
  slug: "2020-06-30-contentful-creators";
  body: string;
  collection: "speaking";
  data: InferEntrySchema<"speaking">
} & { render(): Render[".md"] };
};
"work": {
"2007-spoonfactory.mdx": {
	id: "2007-spoonfactory.mdx";
  slug: "2007-spoonfactory";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"2009-evolve.mdx": {
	id: "2009-evolve.mdx";
  slug: "2009-evolve";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"2009-silverlion.mdx": {
	id: "2009-silverlion.mdx";
  slug: "2009-silverlion";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"2012-dreamhost.mdx": {
	id: "2012-dreamhost.mdx";
  slug: "2012-dreamhost";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"2017-youcaring.mdx": {
	id: "2017-youcaring.mdx";
  slug: "2017-youcaring";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"2018-servicetitan.mdx": {
	id: "2018-servicetitan.mdx";
  slug: "2018-servicetitan";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"2022-mission.mdx": {
	id: "2022-mission.mdx";
  slug: "2022-mission";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
