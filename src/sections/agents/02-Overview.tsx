import { graphql, useStaticQuery } from "gatsby"
import UniversalImage from "library/UniversalImage"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import { gradients } from "styles/colors"
import textStyles from "styles/text"

export default function AgentsOverview() {
	const imageQuery: Queries.AgentsOverviewQuery = useStaticQuery(graphql`
		query AgentsOverview {
			desktop: file(relativePath: { eq: "agents/DesktopDotBackground.png" }) {
				childImageSharp {
					gatsbyImageData(layout: FULL_WIDTH)
				}
			}
		}
	`)

	return (
		<Wrapper>
			<BackgroundImage image={imageQuery.desktop} alt="" />
			<Title>Why enroll in our Agent Accelerator Program?</Title>
			<Copy>
				Our Agent Accelerator program offers seamless integration, expert
				customization, and comprehensive support to bring your AI agent to life.
				Experience top-tier service and results, all without the hassle of
				building yourself.
				<br />
				<br />
				But that's not all. Not only do you get the perfect agent through our
				program, but you also receive the knowledge and materials to create new
				AI agents yourself or easily make small changes to the ones we build.
			</Copy>
		</Wrapper>
	)
}

const Wrapper = styled.section`
		${textStyles.sh1};
	${fresponsive(css`
		margin: 50px 60px 0;
		max-width: 1318px;
		padding: 154px 95px 0;
		min-height: 598px;
		position: relative;
		z-index: 1;
		display:grid;
		grid-template-columns: 260px 1fr;gap:124px;

		& > * {
			position: relative;
			z-index: 1;
		}
	`)}
`

const BackgroundImage = styled(UniversalImage)`
	${fresponsive(css`
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
	`)}
`

const Title = styled.h2`
background: ${gradients.greenBlue};
background-clip: text;
-webkit-text-fill-color: transparent;
`

const Copy = styled.p``
