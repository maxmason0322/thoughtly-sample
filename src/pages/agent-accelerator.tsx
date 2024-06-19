import Seo from "components/Seo"
import { type HeadProps, type PageProps, graphql } from "gatsby"
import AgentsHero from "sections/agents/01-Hero"
import AgentsOverview from "sections/agents/02-Overview"
import AgentsHowItWorks from "sections/agents/03-HowItWorks"
import AgentsAdvantages from "sections/agents/04-Advantages"
import Testimonials from "sections/agents/05-Testimonials"
import CallToAction from "sections/agents/06-CallToAction"

export default function AgentAccelerator({
	data: { contentfulPageAgentsAccelerator },
}: PageProps<Queries.AgentsQuery>) {
	const { testimonials } = contentfulPageAgentsAccelerator ?? {}
	return (
		<>
			<AgentsHero />
			<AgentsOverview />
			<AgentsHowItWorks />
			<AgentsAdvantages />
			{testimonials && testimonials.length > 0 && (
				<Testimonials testimonials={testimonials} />
			)}
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
			metaTitle,
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
