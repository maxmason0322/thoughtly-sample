const routes = {
	home: "/",
	terms: "/terms",
	privacy: "/privacy",
} as const

const socials = {
	linkedin: "https://www.linkedin.com/company/thoughtly-ai/",
	twitter: "https://twitter.com/thoughtlyai",
	instagram: "https://www.instagram.com/thoughtly.ai/",
} as const

const links = {
	todo: "https://www.google.com",
	careers: "https://jobs.ashbyhq.com/thoughtly",
	login: "https://app.thought.ly",
	helpCenter: "https://help.thought.ly/en/",
	apiDocs: "https://api.thought.ly/docs/",
	mediaInquiries: "mailto:press@thought.ly",
	contact: "mailto:support@thought.ly",
	...routes,
	...socials,
} as const

export default links
