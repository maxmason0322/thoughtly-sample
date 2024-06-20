import { BEAT_ONE_DURATION, BEAT_TWO_DURATION } from "components/Preloader"
import Seo from "components/Seo"
import { type HeadProps, type PageProps, graphql } from "gatsby"
import gsap from "gsap"
import { usePreloader } from "library/Loader/PreloaderUtils"
import { useRef } from "react"
import AgentsHero from "sections/agents/01-Hero"
import AgentsOverview from "sections/agents/02-Overview"
import AgentsHowItWorks from "sections/agents/03-HowItWorks"
import AgentsAdvantages from "sections/agents/04-Advantages"
import Testimonials from "sections/agents/05-Testimonials"
import CallToAction from "sections/agents/06-CallToAction"
import styled from "styled-components"
import colors from "styles/colors"

export default function AgentAccelerator({
	data: { contentfulPageAgentsAccelerator },
}: PageProps<Queries.AgentsQuery>) {
	const wrapperRef = useRef<HTMLDivElement | null>(null)
	const { testimonials } = contentfulPageAgentsAccelerator ?? {}

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
				{testimonials && testimonials.length > 0 && (
					<Testimonials testimonials={testimonials} />
				)}
			</Background>
			<CallToAction />
		</>
	)
}

export const pageQuery = graphql`
	query Agents {
		contentfulPageAgentsAccelerator {
			testimonials {
				headshot {
					gatsbyImageData
				}
				name
				quote {
					quote
				}
				positionAndCompany
			}
			metaTitle
			metaDescription {
				metaDescription
			}
		}
	}
`

export const Head = ({
	data: { contentfulPageAgentsAccelerator },
}: HeadProps<Queries.AgentsQuery>) => {
	const { metaTitle, metaDescription } = contentfulPageAgentsAccelerator ?? {}
	return (
		<Seo
			title={metaTitle}
			description={metaDescription?.metaDescription}
			pathname="/agent-accelerator"
		/>
	)
}
const Background = styled.div`
	background: ${colors.beige200};
`
