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
const Pricing = lazy(() => import("sections/home/Pricing"))
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
			{/* <CustomSuspense> */}
			<SocialProof />
			<Industry />
			<Statement />
			<Features />
			<CallCTA />
			<WidgetsAndVideo />
			<Workflows />
			<Integrations />
			<Pricing />
			<FinalCTA />
			{/* </CustomSuspense> */}
		</>
	)
}

export function Head() {
	return (
		<Seo
			title="Thoughtly | The easiest way to build AI voice agents"
			description="Thoughtly helps teams build and deploy AI voice agents in minutes, not months."
			pathname="/"
		/>
	)
}
