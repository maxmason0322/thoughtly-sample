import Seo from "components/Seo"
import FinalCTA from "sections/09-FinalCTA"
import Hero from "sections/home/01-Hero"
import Industry from "sections/home/02-Industry"
import Statement from "sections/home/03-Statement"
import Features from "sections/home/04-Features"
import CallCTA from "sections/home/05-CallCTA"
import Integrations from "sections/home/075-Integrations.tsx"
import WidgetsAndVideo from "sections/home/08-WidgetsAndVideo"
import Pricing from "sections/home/Pricing"
import SocialProof from "sections/home/SocialProof"

export default function IndexPage() {
	return (
		<>
			<Hero />
			<SocialProof />
			<Industry />
			<Statement />
			<Features />
			<CallCTA />
			<WidgetsAndVideo />
			<Integrations />
			<Pricing />
			<FinalCTA />
		</>
	)
}

export function Head() {
	return (
		<Seo
			title="Home"
			description="This is the thoughtly homepage"
			pathname="/"
		/>
	)
}
