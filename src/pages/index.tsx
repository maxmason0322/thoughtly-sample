import Seo from "components/Seo"
import Integrations from "sections/075-Integrations.tsx"
import Industry from "sections/home/02-Industry"
import Statement from "sections/home/03-Statement"
import Features from "sections/home/04-Features"
import WidgetsAndVideo from "sections/home/08-WidgetsAndVideo"
import SocialProof from "sections/home/SocialProof"

export default function IndexPage() {
	return (
		<>
			<SocialProof />
			<Industry />
			<Statement />
			<Features />
			<WidgetsAndVideo />
			<Integrations />
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
