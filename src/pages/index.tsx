import Seo from "components/Seo"
import { useTrackedLoad } from "library/pageReady"
import { Suspense, lazy } from "react"
import Hero from "sections/home/01-Hero"

const Industry = lazy(() => import("sections/home/02-Industry"))
const Statement = lazy(() => import("sections/home/03-Statement"))
const Features = lazy(() => import("sections/home/04-Features"))
const CallCTA = lazy(() => import("sections/home/05-CallCTA"))
const Workflows = lazy(() => import("sections/home/07-Workflows"))
const Integrations = lazy(() => import("sections/home/075-Integrations"))
const WidgetsAndVideo = lazy(() => import("sections/home/08-WidgetsAndVideo"))
const FinalCTA = lazy(() => import("sections/home/09-FinalCTA"))
// const Pricing = lazy(() => import("sections/home/Pricing"))
const SocialProof = lazy(() => import("sections/home/SocialProof"))

function CustomSuspense({
	children,
	delay = 25,
}: {
	children: React.ReactNode
	delay?: number
}) {
	const { shouldDisplay } = useTrackedLoad(delay)
	return shouldDisplay ? <Suspense>{children}</Suspense> : null
}

export default function IndexPage() {
	return (
		<>
			<Hero />
			<CustomSuspense>
				<SocialProof />
				<Features />
				<CallCTA />
				<Industry />
				<Statement />
				<WidgetsAndVideo />
				<Workflows />
				<Integrations />
				<FinalCTA />
			</CustomSuspense>
		</>
	)
}

export function Head() {
	return (
		<Seo
			title="Thoughtly | The easiest way to build AI voice agents"
			description="Thoughtly empowers businesses to quickly build and deploy AI 
				voice agents with a user-friendly no-code platform. Enhance your contact 
				center operations and reduce call wait times with advanced conversational 
				AI. Our solution transforms customer interactions through intelligent 
				voice technology, handling phone calls efficiently in minutes, not months. 
				Discover how Thoughtly can streamline customer support, improve lead 
				follow-up, and optimize contact center performance with cutting-edge AI 
				voice solutions."
			pathname="/"
		/>
	)
}
