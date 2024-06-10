import Icon from "components/Icon"
import { graphql, useStaticQuery } from "gatsby"
import ConstantMarquee from "library/ConstantMarquee"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

export default function AgentsHowItWorks() {
	const widgetsQuery: Queries.AgentsWidgetsQuery = useStaticQuery(graphql`
		query AgentsWidgets {
			# 1
			callBooked: file(
				relativePath: { eq: "agents/widgets/1-CallBooked.png" }
			) {
				childImageSharp {
					gatsbyImageData
				}
			}
			consult: file(relativePath: { eq: "agents/widgets/1-Consult.png" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			# 2
			list: file(relativePath: { eq: "agents/widgets/2-List.png" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			michael: file(relativePath: { eq: "agents/widgets/2-Michael.png" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			# 3
			action: file(relativePath: { eq: "agents/widgets/3-Action.png" }) {
				childImageSharp {
					gatsbyImageData
						}
			}
			integrations: file(
				relativePath: { eq: "agents/widgets/3-Integrations.png" }
				) {
				childImageSharp {
					gatsbyImageData
				}
			}
			# 4
			graph: file(relativePath: { eq: "agents/widgets/4-Graph.png" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			voice: file(relativePath: { eq: "agents/widgets/4-Voice.png" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			# 5
			levels: file(relativePath: { eq: "agents/widgets/5-Levels.png" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			people: file(relativePath: { eq: "agents/widgets/5-People.png" }) {
				childImageSharp {
					gatsbyImageData
				}	
			}
		}
	`)

	return (
		<Wrapper>
			<ConstantMarquee>
				<MarqueeContent>
					<BigIcon name="chevDown" />
					How it Works
				</MarqueeContent>
			</ConstantMarquee>
		</Wrapper>
	)
}

const Wrapper = styled.section``

const BigIcon = styled(Icon)`
	${fresponsive(css`
		width: 60px;
		height: 60px;
	`)}
`

const MarqueeContent = styled.div`
	color: ${colors.beige500};
	${textStyles.h1};
	display: flex;
	align-items: center;

	${fresponsive(css`
		gap: 37px;
		padding-left: 37px;
	`)}
`
