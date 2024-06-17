import Primary from "components/Buttons/Primary"
import Kicker from "components/Kicker"
import { graphql, useStaticQuery } from "gatsby"
import UniversalImage from "library/UniversalImage"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"
import links from "utils/links"

export default function CallToAction() {
	const imageQuery: Queries.AgentsActionQuery = useStaticQuery(graphql`
		query AgentsAction {
			agent: file(relativePath: { eq: "agents/call/Agent.png" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			callImage: file(relativePath: { eq: "agents/call/CallImage.png" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			interface: file(relativePath: { eq: "agents/call/Interface.png" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	`)

	return (
		<Wrapper>
			<Graphic>
				<Agent image={imageQuery.agent} alt="Sanjay" />
				<MainImage
					image={imageQuery.callImage}
					alt="Man on a phone, retro style"
				/>
				<Details
					image={imageQuery.interface}
					alt="Product Screenshot, shows today's overview: 76 calls completed, 71 demos booked, 18 extra calls made"
				/>
			</Graphic>
			<Copy>
				<KickerWithRandomPadding>Focus on what Matters</KickerWithRandomPadding>
				<Title>Ready to Accelerate Your AI Agent?</Title>
				<Description>
					Join the many businesses already benefitting from our Agent
					Accelerator Program
				</Description>
				<Buttons>
					<Primary to={links.todo} outline icon="chev">
						Talk to Sales
					</Primary>
					<Primary to={links.todo} variant="secondary" icon="calendar">
						Book a Demo
					</Primary>
				</Buttons>
			</Copy>
		</Wrapper>
	)
}

const KickerWithRandomPadding = styled(Kicker)`
	${fresponsive(css`
		margin-left: 6px;
	`)}
`

const Wrapper = styled.div`
	${fresponsive(css`
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 84px;
		padding: 240px 153px 143px 132px;
		max-width: 1440px;
		margin: 0 auto;
		place-items: center;
	`)}
`
const Graphic = styled.div`
	${fresponsive(css`
		width: 408px;
		height: 602px;
		padding: 24px;
		background: ${gradients.surface1};
		box-shadow: 0 18px 32px 0 rgb(89 89 89 / 4%);
		border-radius: 24px;
		border: 1px solid #d8d8d8;
		position: relative;
	`)}
`
const Agent = styled(UniversalImage)`
	${fresponsive(css`
		position: absolute;
		z-index: 1;
		top: -19px;
		left: -40px;
		width: 228px;
		box-shadow:
			0 -1px 6px 0 rgb(38 38 38 / 6%) inset,
			0 18px 32px 0 rgb(89 89 89 / 4%);
	`)}
`

const MainImage = styled(UniversalImage)`
	${fresponsive(css`
		border-radius: 12px;
		isolation: isolate;
		overflow: clip;
	`)}
`
const Details = styled(UniversalImage)`
	${fresponsive(css`
		position: absolute;
		z-index: 1;
		bottom: -30px;
		right: -30px;
		width: 205px;
	`)}
`

const Copy = styled.div`
	${fresponsive(css`
		display: flex;
		flex-direction: column;
		gap: 18px;
	`)}
`

const Title = styled.div`
	${textStyles.h3};
`
const Description = styled.div`
	${textStyles.bodyL};
	color: ${colors.gray800};

	${fresponsive(css`
		max-width: 399px;
		margin-left: 10px;
	`)}
`

const Buttons = styled.div`
	${fresponsive(css`
		display: flex;
		gap: 12px;
		margin-top: 24px;
		margin-left: 12px;
	`)}
`
