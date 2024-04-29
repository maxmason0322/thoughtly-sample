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
	careers:
		"https://thoughtly.notion.site/Careers-at-Thoughtly-6ce6a0cc4cfb4e8fad4a41c911ae33f0",
	login: "https://app.thought.ly",
	helpCenter: "https://help.thought.ly/en/",
	apiDocs: "https://api.thought.ly/docs/",
	...routes,
	...socials,
} as const

export default links
