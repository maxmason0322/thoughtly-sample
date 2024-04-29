const routes = {} as const

const socials = {
	linkedin: "https://www.linkedin.com/company/thoughtly-ai/",
	twitter: "https://twitter.com/thoughtlyai",
	instagram: "https://www.instagram.com/thoughtly.ai/",
} as const

const links = {
	todo: "https://www.google.com",
	...routes,
	...socials,
} as const

export default links
