import { BEAT_ONE_DURATION, BEAT_TWO_DURATION } from "components/Preloader"
import gsap from "gsap"
import { usePreloader } from "library/Loader/PreloaderUtils"
import { useRef } from "react"
import AgentsHero from "sections/agents/01-Hero"
import AgentsOverview from "sections/agents/02-Overview"
import AgentsHowItWorks from "sections/agents/03-HowItWorks"
import AgentsAdvantages from "sections/agents/04-Advantages"
import CallToAction from "sections/agents/06-CallToAction"
import styled from "styled-components"
import colors from "styles/colors"

export default function AgentAccelerator() {
	const wrapperRef = useRef<HTMLDivElement | null>(null)

	usePreloader({
		only: "whenAtTop",
		duration: 2,
		callback: () => {
			const duration = BEAT_TWO_DURATION
			const delay = BEAT_ONE_DURATION
			gsap.from(wrapperRef.current, {
				y: "100lvh",
				duration,
				delay,
				ease: "power3.inOut",
			})
		},
	})

	return (
		<>
			<Background>
				<div ref={wrapperRef}>
					<AgentsHero />
					<AgentsOverview />
				</div>
				<AgentsHowItWorks />
				<AgentsAdvantages />
			</Background>
			<CallToAction />
		</>
	)
}

const Background = styled.div`
	background: ${colors.beige200};
`
