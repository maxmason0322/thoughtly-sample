import { config as dotEnvConfig } from "dotenv"
import type { GatsbyConfig } from "gatsby"

dotEnvConfig()

const config: GatsbyConfig = {
	jsxRuntime: "automatic",
	siteMetadata: {
		/**
		 * this is the default page title when none is provided
		 */
		title: "Thoughtly",
		/**
		 * this is the search engine description when none is provided
		 */
		description: "Thoughtly Marketing Site",
		/**
		 * this is the base URL of the site. do not include a trailing slash
		 */
		siteUrl: "https://thought.ly",
		/**
		 * this is the default og image when none other is provided
		 * it must be a complete URL (e.g. https://example.com/image.jpg)
		 */
		image: "https://thought.ly/og-image.png",
	},
	graphqlTypegen: {
		generateOnBuild: true,
		typesOutputPath: "./src/types/gatsby-types.d.ts",
	},
	plugins: [
		"gatsby-plugin-pnpm-gatsby-5",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-netlify",
		"gatsby-plugin-image",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-plugin-sharp",
			options: {
				defaults: {
					formats: ["webp"],
					placeholder: "blurred",
					quality: 90,
				},
			},
		},
		// TODO setup a contentful space
		// {
		//   resolve: "gatsby-source-contentful",
		//   options: {
		//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
		//     spaceId: process.env.CONTENTFUL_SPACE_ID,
		//   },
		// },
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Thoughtly Marketing",
				short_name: "Thoughtly",
				start_url: "/",
				background_color: "#ffffff",
				theme_color: "#ffffff",
				display: "minimal-ui",
				icon: "./src/images/global/favicon.png",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "data",
				path: "./src/data",
			},
		},
		{
			resolve: "gatsby-plugin-svgr",
			options: {
				prettier: true,
				svgo: true,
			},
		},
		{
			resolve: "gatsby-plugin-tsconfig-paths",
			options: {
				configFile: "./tsconfig.json",
				silent: true,
			},
		},
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://thought.ly/",
				sitemap: "https://thought.ly/sitemap-0.xml",
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
		"gatsby-plugin-styled-components",
		"gatsby-transformer-json",
	],
}

export default config
