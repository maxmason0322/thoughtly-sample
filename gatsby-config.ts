import { config as dotEnvConfig } from "dotenv"
import type { GatsbyConfig } from "gatsby"
import adapter from "gatsby-adapter-netlify"

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
		image: `${process.env.URL ?? process.env.VERCEL_URL}/og-image.png`,
	},
	adapter: adapter(),
	graphqlTypegen: {
		generateOnBuild: true,
		typesOutputPath: "./src/types/gatsby-types.d.ts",
	},
	flags: {
		DEV_SSR: true,
	},
	plugins: [
		"gatsby-plugin-pnpm-gatsby-5",
		"gatsby-plugin-sitemap",
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
		{
			resolve: "gatsby-plugin-clarity",
			options: {
				clarity_project_id: "iwlym1iqcj",
				enable_on_dev_env: false,
			},
		},
		{
			resolve: "gatsby-plugin-segment-js",
			options: {
				prodKey: "qi1VKe4zhGsGpMQPEtkdv4GTGI47hLqG",
				devKey: "jIDe0ZNs3rFmi0GdacZYkBIS3AspDFfb",
				trackPage: false,
			},
		},
		{
			resolve: "gatsby-source-contentful",
			options: {
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				spaceId: process.env.CONTENTFUL_SPACE_ID,
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Thoughtly Marketing",
				short_name: "Thoughtly",
				start_url: "/",
				background_color: "#ffffff",
				theme_color: "#ffffff",
				display: "browser",
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
			resolve: "gatsby-plugin-segment-js",
			options: {
				prodKey: "qi1VKe4zhGsGpMQPEtkdv4GTGI47hLqG",
				devKey: "jIDe0ZNs3rFmi0GdacZYkBIS3AspDFfb",
				trackPage: false,
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
		{
			resolve: "gatsby-plugin-google-gtag",
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					"G-41ECDSBNCV", // Google Analytics / GA
					"AW-11413179986", // Google Ads / Adwords / AW
				],
				// This object is used for configuration specific to this plugin
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: false,
					// Setting this parameter is also optional
					respectDNT: false,
					delayOnRouteUpdate: 0,
				},
			},
		},
		"gatsby-plugin-styled-components",
		"gatsby-transformer-json",
	],
}

export default config
