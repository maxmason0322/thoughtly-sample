import Seo from "components/Seo"
import Hero from "sections/platform/01-Hero"
import PlatformAdvantage from "sections/platform/04-Advantage"

export default function Platform() {
	return (
		<>
			<Hero />
			<PlatformAdvantage />
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
