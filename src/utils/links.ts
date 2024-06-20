const routes = {
	home: "/",
	terms: "/terms",
	privacy: "/privacy",
	blog: "/blog",
	agentAccelerator:
		"/blog/unlock-the-power-of-ai-with-thoughtlys-agent-accelerator-program",
} as const

const sections = {
	industries: "/#industries",
	features: "/#features",
	integrations: "/#integrations",
	pricing: "/#pricing",
}

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
	stripe: "https://stripe.com/us/privacy",
	NAI: "https://optout.networkadvertising.org/",
	DAA: "https://optout.aboutads.info/",
	enhanceHealth: "https://enhancehealth.com/",
	selectQuote: "https://www.selectquote.com/",
	batchRoasting: "https://batchroasting.com/",
	honk: "https://www.honkforhelp.com/",
	dopplio: "https://www.dopplio.com/",
	bookDemo: "https://forms.default.com/448680",
	mediaInquiries: "mailto:press@thought.ly",
	contact: "mailto:support@thought.ly",
	phone: "tel:+18557170250",
	cardAssociation: "https://thecardassociation.com/",
	zillow: "https://www.zillow.com/",
	tastewise: "https://www.tastewise.io/",
	badenBower: "https://badenbower.com/",
	...routes,
	...sections,
	...socials,
} as const

export default links
