import Seo from "components/Seo"
import Hero from "sections/platform/01-Hero"

export default function Platform() {
	return <Hero />
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
