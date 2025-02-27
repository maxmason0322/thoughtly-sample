import Seo from "components/Seo"
import CallCTA from "sections/home/05-CallCTA"
import Hero from "sections/platform/01-Hero"
import Features from "sections/platform/03-Features"
import PlatformAdvantage from "sections/platform/04-Advantage"
import Benefits from "sections/platform/06-Benefits"

export default function Platform() {
	return (
		<>
			<Hero />
			<Features />
			<PlatformAdvantage />
			<CallCTA customTabletWidth={888} />
			<Benefits />
		</>
	)
}

export function Head() {
	return (
		<Seo
			title="Thoughtly | Platform"
			description="The AI Agent Platform that does it all."
			pathname="/platform"
		/>
	)
}
