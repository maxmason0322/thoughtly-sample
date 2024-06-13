import Icon from "components/Icon"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import DrawSVGPlugin from "gsap/DrawSVGPlugin"
import { ReactComponent as Connector12Tablet } from "images/agents/widgets/1-2-Connector-Tablet.svg"
import { ReactComponent as Connector12 } from "images/agents/widgets/1-2-Connector.svg"
import { ReactComponent as Connector23Tablet } from "images/agents/widgets/2-3-Connector-Tablet.svg"
import { ReactComponent as Connector23 } from "images/agents/widgets/2-3-Connector.svg"
import { ReactComponent as Connector34Tablet } from "images/agents/widgets/3-4-Connector-Tablet.svg"
import { ReactComponent as Connector34 } from "images/agents/widgets/3-4-Connector.svg"
import { ReactComponent as Connector45Tablet } from "images/agents/widgets/4-5-Connector-Tablet.svg"
import { ReactComponent as Connector45 } from "images/agents/widgets/4-5-Connector.svg"
import ConstantMarquee from "library/ConstantMarquee"
import { ScreenContext } from "library/ScreenContext"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { getResponsivePixels } from "library/viewportUtils"
import { useContext, useRef } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles, { transparentText } from "styles/text"

gsap.registerPlugin(DrawSVGPlugin)

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

	const { tablet } = useContext(ScreenContext)
	const wrapper = useRef<HTMLDivElement>(null)

	useAnimation(
		() => {
			const connectors = [
				ConnectorOne,
				ConnectorTwo,
				ConnectorThree,
				ConnectorFour,
			]

			for (const connector of connectors) {
				const fadeDuration = 0.1
				const moveDuration = 1

				gsap
					.timeline({
						scrollTrigger: {
							trigger: connector.toString(),
							start: "top 60%",
							end: "bottom 40%",
							scrub: true,
						},
					})
					.from(`${connector} .circle.start`, {
						opacity: 0,
						duration: fadeDuration,
					})
					.from(
						`${connector} path:not(.backwards)`,
						{
							drawSVG: "0 0",
							ease: "linear",
							duration: moveDuration,
						},
						fadeDuration,
					)
					.from(
						`${connector} path.backwards`,
						{
							drawSVG: "100% 100%",
							ease: "linear",
							duration: moveDuration,
						},
						fadeDuration,
					)
					.from(
						`${connector} .circle.end`,
						{ opacity: 0, duration: fadeDuration },
						moveDuration,
					)
			}

			const widgets = [StepOne, StepTwo, StepThree, StepFour, StepFive]

			for (const widget of widgets) {
				gsap.from(`${widget} > *:not(svg)`, {
					y: getResponsivePixels(200),
					opacity: 0,
					ease: "power2.out",
					stagger: 0.1,
					scrollTrigger: {
						trigger: widget.toString(),
						start: "top bottom",
						end: "top 60%",
						toggleActions: "none play none reset",
					},
				})
			}
		},
		[],
		{ scope: wrapper, recreateOnResize: true },
	)

	return (
		<>
			<ConstantMarquee>
				<MarqueeContent>
					<BigIcon name="chevDown" />
					How it Works
				</MarqueeContent>
			</ConstantMarquee>
			<Wrapper ref={wrapper}>
				<StepOne>
					<UpperOne image={widgetsQuery.callBooked} alt="alt_goes_here" />
					<Title>
						Consultation<Count>01</Count>
					</Title>
					<CopyOne>Discuss your business needs with our experts.</CopyOne>
					{tablet ? <ConnectorOneTablet /> : <ConnectorOne />}
					<LowerOne image={widgetsQuery.consult} alt="alt_goes_here" />
				</StepOne>
				<StepTwo>
					<UpperTwo image={widgetsQuery.michael} alt="alt_goes_here" />
					<Title>
						Customization<Count>02</Count>
					</Title>
					<CopyTwo>We tailor the AI agent to your specifications.</CopyTwo>
					{tablet ? <ConnectorTwoTablet /> : <ConnectorTwo />}
					<LowerTwo image={widgetsQuery.list} alt="alt_goes_here" />
				</StepTwo>
				<StepThree>
					<UpperThree image={widgetsQuery.action} alt="alt_goes_here" />
					<Title>
						Integration<Count>03</Count>
					</Title>
					<CopyThree>
						Seamless setup and integration into your existing systems.
					</CopyThree>
					{tablet ? <ConnectorThreeTablet /> : <ConnectorThree />}
					<LowerThree image={widgetsQuery.integrations} alt="alt_goes_here" />
				</StepThree>
				<StepFour>
					<UpperFour image={widgetsQuery.graph} alt="alt_goes_here" />
					<Title>
						Optimization<Count>04</Count>
					</Title>
					<CopyFour>
						Continuous monitoring and adjustment to ensure peak performance.
					</CopyFour>
					{tablet ? <ConnectorFourTablet /> : <ConnectorFour />}
					<LowerFour image={widgetsQuery.voice} alt="alt_goes_here" />
				</StepFour>
				<StepFive>
					<UpperFive image={widgetsQuery.people} alt="alt_goes_here" />
					<Title>
						Empowerment<Count>05</Count>
					</Title>
					<CopyFive>
						Receive the training and materials needed to independently create
						and manage your AI agents, allowing for quick adaptations and
						improvements as your business evolves.
					</CopyFive>
					<LowerFive image={widgetsQuery.levels} alt="alt_goes_here" />
				</StepFive>
			</Wrapper>
		</>
	)
}

const Wrapper = styled.section`
	${fresponsive(css`
		width: 1440px;
		margin: 0 auto;
	`)}

	${ftablet(css`
		width: 1024px;
	`)}
`

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
		margin-top: 178px;
	`)}

	${ftablet(css`
		margin-top: 121px;
	`)}
`

const Step = styled.div`
	position: relative;
	width: min-content;
`

const StepOne = styled(Step)`
	${fresponsive(css`
		margin-top: 234px;
		margin-left: 156px;
	`)}

	${ftablet(css`
		margin-top: 145px;
		margin-left: 68px;
	`)}
`

const StepTwo = styled(Step)`
	${fresponsive(css`
		margin-top: 88px;
		margin-left: 683px;
	`)}

	${ftablet(css`
		margin-top: 133px;
		margin-left: 524px;
	`)}
`

const StepThree = styled(Step)`
	${fresponsive(css`
		margin-top: 125px;
		margin-left: 322px;
	`)}

	${ftablet(css`
		margin-top: 75px;
		margin-left: 62px;
	`)}
`
const StepFour = styled(Step)`
	${fresponsive(css`
		margin-top: 154px;
		margin-left: 865px;
	`)}

	${ftablet(css`
		margin-top: 193px;
		margin-left: 524px;
	`)}
`
const StepFive = styled(Step)`
	${fresponsive(css`
		margin-top: 91px;
		margin-left: 428px;
	`)}

	${ftablet(css`
		margin-top: 97px;
		margin-left: 295px;
	`)}
`
const Title = styled.h2`
	${textStyles.h5};
	${fresponsive(css`
		margin-top: 14px;
		margin-bottom: 6px;
	`)}

	${ftablet(css`
		margin-top: 8px;
		margin-bottom: 6px;
	`)}
`

const Copy = styled.p`
	${textStyles.sh2};
	color: ${colors.gray700};
`

const CopyOne = styled(Copy)`
	${fresponsive(css`
		width: 258px;
	`)}
`
const CopyTwo = styled(Copy)`
	${fresponsive(css`
		width: 346px;
	`)}
`
const CopyThree = styled(Copy)`
	${fresponsive(css`
		width: 271px;
	`)}
`
const CopyFour = styled(Copy)`
	${fresponsive(css`
		width: 316px;
	`)}
`
const CopyFive = styled(Copy)`
	${fresponsive(css`
		width: 382px;
	`)}
`

const connectorStyles = css`
	max-width: unset;
	max-height: unset;
	position: absolute;
	z-index: 1;
	height: auto;

	${fmobile(css`
		display: none;
	`)}
`
const ConnectorOne = styled(Connector12)`
	${connectorStyles};
	${fresponsive(css`
		top: 234.27px;
		left: 330px;
		width: 279px;
	`)}
`
const ConnectorOneTablet = styled(Connector12Tablet)`
	${connectorStyles};
	${ftablet(css`
		top: 255px;
		left: 330px;
		width: 207px;
	`)}
`

const ConnectorTwo = styled(Connector23)`
	${connectorStyles};

	${fresponsive(css`
		width: 765px;
		top: 214.9px;
		left: -303px;
	`)}
`

const ConnectorTwoTablet = styled(Connector23Tablet)`
	${connectorStyles};

	${ftablet(css`
		width: 744px;
		top: 170.6px;
		left: -397px;
	`)}
`

const ConnectorThree = styled(Connector34)`
	${connectorStyles};

	${fresponsive(css`
		top: 285px;
		left: 388px;
		width: 237px;
	`)}
`

const ConnectorThreeTablet = styled(Connector34Tablet)`
	${connectorStyles};

	${ftablet(css`
		top: 286px;
		left: 391px;
		width: 149px;
	`)}
`

const ConnectorFour = styled(Connector45)`
	${connectorStyles};

	${fresponsive(css`
		top: 184.36px;
		left: -364px;
		width: 738.5px;
	`)}
`

const ConnectorFourTablet = styled(Connector45Tablet)`
	${connectorStyles};

	${ftablet(css`
		top: 217px;
		left: -155px;
		width: 522px;
	`)}
`

const Count = styled.div`
	${textStyles.sh1};
	background: ${gradients.greenBlue};
	${transparentText};
	${fresponsive(css`
		display: inline-block;
		position: absolute;
		translate: 4px -2px;
	`)}
`

const UpperOne = styled(UniversalImage)`
	${fresponsive(css`
		width: 215px;
		height: 60px;
	`)}
`
const LowerOne = styled(UniversalImage)`
	${fresponsive(css`
		position: absolute;
		top: 136px;
		left: 245px;
		width: 195px;
		height: 125px;
	`)}
`
const UpperTwo = styled(UniversalImage)`
	${fresponsive(css`
		width: 170.6px;
		height: 57px;
	`)}
`
const LowerTwo = styled(UniversalImage)`
	${fresponsive(css`
		position: absolute;
		z-index: 2;
		width: 213px;
		height: auto;
		top: 134.5px;
		left: 337.25px;
	`)}

	${ftablet(css`
		top: 169px;
		left: 219.25px;
	`)}
`
const UpperThree = styled(UniversalImage)`
	${fresponsive(css`
		width: 130px;
		height: 59px;
		margin-left: 4px;
	`)}
`
const LowerThree = styled(UniversalImage)`
	${fresponsive(css`
		position: absolute;
		width: 203px;
		height: 186px;
		top: 105px;
		left: 292px;
	`)}
`
const UpperFour = styled(UniversalImage)`
	${fresponsive(css`
		width: 156px;
		height: 57px;
		margin-left: -1px;
	`)}
`
const LowerFour = styled(UniversalImage)`
	${fresponsive(css`
		position: absolute;
		width: 225px;
		height: 143px;
		top: 161px;
		left: 255px;
	`)}
`
const UpperFive = styled(UniversalImage)`
	${fresponsive(css`
		width: 166.6px;
		height: 96px;
	`)}
`
const LowerFive = styled(UniversalImage)`
	${fresponsive(css`
		position: absolute;
		top: 173px;
		left: 378px;
		height: 130.75px;
		width: 193.5px;
	`)}
`
