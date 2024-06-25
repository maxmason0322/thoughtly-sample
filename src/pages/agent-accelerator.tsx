import { BEAT_ONE_DURATION, BEAT_TWO_DURATION } from "components/Preloader"
import Seo from "components/Seo"
import { type HeadProps, type PageProps, graphql } from "gatsby"
import gsap from "gsap"
import { useClientOnly } from "library/ClientOnly"
import { usePreloader } from "library/Loader/PreloaderUtils"
import { isBrowser } from "library/deviceDetection"
import { useRef } from "react"
import styled from "styled-components"
import colors from "styles/colors"

/**
 * If names and head shots are added back to the testimonial cards, uncomment lines 63-66!
 */

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

	const first = testimonials?.at(0) ?? null
	const temp =
		isBrowser && window.location.search.includes("debug")
			? testimonials
			: [first]
	const withFallback = useClientOnly(temp, [first]) ?? [first]

	return (
		<>
			{/* <Background>
				<div ref={wrapperRef}>
					<AgentsHero />
					<AgentsOverview />
				</div>
				<AgentsHowItWorks />
				<AgentsAdvantages />
				{testimonials && testimonials.length > 0 && (
					<Testimonials testimonials={withFallback} />
				)}
			</Background>
			<CallToAction /> */}
		</>
	)
}

export const pageQuery = graphql`
	query Agents {
		contentfulPageAgentsAccelerator {
			testimonials {
				id
				# headshot {
				# 	gatsbyImageData
				# }
				# name
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
