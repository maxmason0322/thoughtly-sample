const internal = {
	// pages
	blog: "/blog",
	agentAccelerator: "/agent-accelerator",
	home: "/",
	privacy: "/privacy",
	terms: "/terms",
	platform: "/platform",

	// home sections
	industries: "/#industries",
	features: "/#features",
	integrations: "/#integrations",
	pricing: "/#pricing",
}

const external = {
	// socials
	linkedin: "https://www.linkedin.com/company/thoughtly-ai/",
	twitter: "https://twitter.com/thoughtlyai",
	instagram: "https://www.instagram.com/thoughtly.ai/",
	slack: "https://thought.ly/slack",

	// our other links
	careers: "https://jobs.ashbyhq.com/thoughtly",
	login: "https://app.thought.ly",
	helpCenter: "https://docs.thought.ly/",
	apiDocs: "https://api.thought.ly/docs/",
	bookDemo: "https://forms.default.com/448680",
	mediaInquiries: "mailto:press@thought.ly",
	contact: "mailto:support@thought.ly",
	phone: "tel:+18557170250",
	docs: "https://docs.thought.ly/",
	partners: "https://docs.thought.ly/resources/partners",
}

const companies = {
	enhanceHealth: "https://enhancehealth.com/",
	stackedAI: "https://www.stack-ai.com/",
	batchRoasting: "https://batchroasting.com/",
	honk: "https://www.honkforhelp.com/",
	dopplio: "https://www.dopplio.com/",
	cardAssociation: "https://thecardassociation.com/",
	zillow: "https://www.zillow.com/",
	tastewise: "https://www.tastewise.io/",
	badenBower: "https://badenbower.com/",
	primera: "https://getprimera.com/",
	compass: "https://www.compass.com/",
	coldwellBanker: "https://www.coldwellbanker.com/",
}

const links = {
	...internal,
	...external,
	...companies,
} as const

export default links
