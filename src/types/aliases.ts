/**
 * usage aliases for graphql types from contentful
 */

export type BlogCard =
	Queries.BlogPageQuery["allContentfulPageBlogPost"]["nodes"][number]
export type BlogPost = NonNullable<
	Queries.BlogPostQuery["contentfulPageBlogPost"]
>
export type Author = NonNullable<
	NonNullable<Queries.BlogPostQuery["contentfulPageBlogPost"]>["author"]
>
export type Testimonial = NonNullable<
	NonNullable<
		Queries.AgentsQuery["contentfulPageAgentsAccelerator"]
	>["testimonials"]
>[number]
export type CallToAction = NonNullable<
	NonNullable<Queries.BlogPostQuery["contentfulPageBlogPost"]>["cta"]
>
