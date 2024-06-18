import Primary from "components/Buttons/Primary"
import { sectionScale } from "components/Footer"
import Kicker from "components/Kicker"
import { graphql, useStaticQuery } from "gatsby"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useRef } from "react"
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

	const wrapperRef = useRef<HTMLDivElement | null>(null)
	useAnimation(() => {
		sectionScale(wrapperRef.current)
	}, [])

	return (
		<Background ref={wrapperRef}>
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
					<KickerWithRandomPadding>
						Focus on what Matters
					</KickerWithRandomPadding>
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
		</Background>
	)
}

const Background = styled.section`
	background: ${colors.beige200};
	min-height: 100vh;
`

const KickerWithRandomPadding = styled(Kicker)`
	${fresponsive(css`
		margin-left: 6px;
	`)}
`

const Wrapper = styled.div`
	${fresponsive(css`
		display: flex;
		gap: 84px;
		padding: 240px 153px 143px 132px;
		max-width: 1440px;
		margin: 0 auto;
		place-items: center;
	`)}

	${ftablet(css`
		flex-direction: column-reverse;
		text-align: center;
		padding: 110px 68px;
		gap: 60px;
	`)}

	${fmobile(css`
		flex-direction: column-reverse;
		text-align: center;
		padding: 41px 24px 54px;
		gap: 60px;
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
		flex-shrink: 0;
	`)}

	${ftablet(css`
		width: 888px;
		height: 602px;
	`)}

	${fmobile(css`
		width: 306px;
		height: 452px;
		border-radius: 18px;
		padding: 18px;
	`)}
`
const Agent = styled(UniversalImage)`
	${fresponsive(css`
		position: absolute;
		z-index: 1;
		top: -19px;
		left: -40px;
		width: 228px;
		filter: drop-shadow(0 18px 32px rgb(89 89 89 / 4%));
	`)}

	${ftablet(css`
		left: -48px;
	`)}

	${fmobile(css`
		top: -14.2px;
		left: -30px;
		width: 171px;
	`)}
`

const MainImage = styled(UniversalImage)`
	${fresponsive(css`
		border-radius: 12px;
		isolation: isolate;
		overflow: clip;
		width: 100%;
		height: 100%;
	`)}

	${fmobile(css`
		border-radius: 9px;
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

	${ftablet(css`
		right: -48px;
	`)}

	${fmobile(css`
		right: -22.5px;
		bottom: -22.5px;
		width: 153px;
	`)}
`

const Title = styled.div`
	${textStyles.h3};
	${ftablet(css`
		width: 663px;
	`)}
	${fmobile(css`
		${textStyles.h6};
	`)}
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

	${fmobile(css`
		margin-top: 6px;
	`)}
`

const Copy = styled.div`
	${fresponsive(css`
		display: flex;
		flex-direction: column;
		gap: 18px;
	`)}

	${ftablet(css`
		align-items: center;

		> * {
			margin-left: unset;
		}
	`)}

	${fmobile(css`
		align-items: center;

		> * {
			margin-left: unset;
		}
	`)}
`
