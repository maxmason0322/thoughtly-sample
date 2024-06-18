import Seo from "components/Seo"
import { graphql } from "gatsby"
import Testimonials from "sections/agents/05-Testimonials"

export default function Agents() {
	return <Testimonials />
}

export function Head() {
	return (
		<Seo
			title="Thoughtly | Agents Accelerator"
			description="Thoughtly helps teams build and deploy AI voice agents in minutes, not months."
			pathname="/agents"
		/>
	)
}

export const pageQuery = graphql`
	query AgentsQuery {
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
		}
	}
`
