import { Script, graphql, useStaticQuery } from "gatsby"
import { isBrowser } from "library/deviceDetection"
import { useEffect } from "react"

interface SEOProps {
	/**
	 * provide the title of this page
	 */
	title: string | null | undefined
	/**
	 * provide the description that will be used in search engines
	 */
	description: string | null | undefined
	/**
	 * provide the pathname of this page (e.g. /page/example or /blog)
	 * this will be used to generate this page's url
	 */
	pathname: `/${string}`
	/**
	 * if applicable, provide the full URL of an OG image to be used in social media
	 * this must be a complete URL
	 * (e.g. https://example.com/image.jpg)
	 */
	image?: string
	/**
	 * if applicable, provide the twitter creator's handle
	 */
	creator?: string
}

export default function Seo({
	title,
	description,
	pathname,
	image,
	creator,
}: SEOProps) {
	const data: Queries.SeoQuery = useStaticQuery(graphql`
    query Seo {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `)

	const {
		title: defaultTitle,
		description: defaultDescription,
		image: defaultImage,
		siteUrl,
	} = data.site?.siteMetadata ?? {}

	const seo = {
		title: title ?? defaultTitle,
		description: description ?? defaultDescription,
		image: image ?? defaultImage,
		url: `${siteUrl}${pathname}`,
		creator,
	}

	useEffect(() => {
		if (!isBrowser || !window.analytics || !seo.title) return

		analytics.page(seo.title, {
			path: window.location.pathname,
			referrer: document.referrer,
			search: window.location.search,
			title: document.title,
			url: seo.url,
		})
	}, [seo.title, seo.url])

	return (
		<>
			{/* basic head elements */}
			<title>{seo.title}</title>
			<meta name="description" content={seo.description ?? ""} />
			<meta
				name="viewport"
				content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
			/>
			<link rel="preconnect" href="https://s3-us-west-2.amazonaws.com" />

			{/* twitter seo */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={seo.creator} />
			<meta name="twitter:title" content={seo.title ?? ""} />
			<meta name="twitter:description" content={seo.description ?? ""} />
			<meta name="twitter:image" content={seo.image ?? ""} />

			{/* og seo */}
			<meta property="og:title" content={seo.title ?? ""} />
			<meta property="og:description" content={seo.description ?? ""} />
			<meta property="og:image" content={seo.image ?? ""} />
			<meta property="og:url" content={seo.url} />
			<meta property="og:type" content="website" />

			<Script>{`!function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("ZQOQRJHP5Y62");}();`}</Script>

			<Script
				src="https://cdn.tolt.io/tolt.js"
				data-tolt="fa4de1bb-0c6b-4c2c-b4a6-2070c944c39b"
			/>
		</>
	)
}
