import Icon from "components/Icon"
import { graphql, useStaticQuery } from "gatsby"
import Connector12Tablet from "images/agents/widgets/1-2-Connector-Tablet.svg"
import Connector12 from "images/agents/widgets/1-2-Connector.svg"
import Connector23Tablet from "images/agents/widgets/2-3-Connector-Tablet.svg"
import Connector23 from "images/agents/widgets/2-3-Connector.svg"
import Connector34Tablet from "images/agents/widgets/3-4-Connector-Tablet.svg"
import Connector34 from "images/agents/widgets/3-4-Connector.svg"
import Connector45Tablet from "images/agents/widgets/4-5-Connector-Tablet.svg"
import Connector45 from "images/agents/widgets/4-5-Connector.svg"
import ConstantMarquee from "library/ConstantMarquee"
import { ScreenContext } from "library/ScreenContext"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive } from "library/fullyResponsive"
import { useContext } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles, { transparentText } from "styles/text"

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

	return (
		<Wrapper>
			<ConstantMarquee>
				<MarqueeContent>
					<BigIcon name="chevDown" />
					How it Works
				</MarqueeContent>
			</ConstantMarquee>
			<StepOne>
				<UpperOne image={widgetsQuery.callBooked} alt="alt_goes_here" />
				<LowerOne image={widgetsQuery.consult} alt="alt_goes_here" />
				<Title>
					Consultation<Count>01</Count>
				</Title>
				<CopyOne>Discuss your business needs with our experts.</CopyOne>
				<ConnectorOne src={tablet ? Connector12Tablet : Connector12} />
			</StepOne>
			<StepTwo>
				<UpperTwo image={widgetsQuery.michael} alt="alt_goes_here" />
				<LowerTwo image={widgetsQuery.list} alt="alt_goes_here" />
				<Title>
					Customization<Count>02</Count>
				</Title>
				<CopyTwo>We tailor the AI agent to your specifications.</CopyTwo>
				<ConnectorTwo src={tablet ? Connector23Tablet : Connector23} />
			</StepTwo>
			<StepThree>
				<UpperThree image={widgetsQuery.action} alt="alt_goes_here" />
				<LowerThree image={widgetsQuery.integrations} alt="alt_goes_here" />
				<Title>
					Integration<Count>03</Count>
				</Title>
				<CopyThree>
					Seamless setup and integration into your existing systems.
				</CopyThree>
				<ConnectorThree src={tablet ? Connector34Tablet : Connector34} />
			</StepThree>
			<StepFour>
				<UpperFour image={widgetsQuery.graph} alt="alt_goes_here" />
				<LowerFour image={widgetsQuery.voice} alt="alt_goes_here" />
				<Title>
					Optimization<Count>04</Count>
				</Title>
				<CopyFour>
					Continuous monitoring and adjustment to ensure peak performance.
				</CopyFour>
				<ConnectorFour src={tablet ? Connector45Tablet : Connector45} />
			</StepFour>
			<StepFive>
				<UpperFive image={widgetsQuery.people} alt="alt_goes_here" />
				<LowerFive
					image={widgetsQuery.levels}
					alt="alt_goes_here<Count>05</Count>"
				/>
				<Title>
					Empowerment<Count>05</Count>
				</Title>
				<CopyFive>
					Receive the training and materials needed to independently create and
					manage your AI agents, allowing for quick adaptations and improvements
					as your business evolves.
				</CopyFive>
			</StepFive>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	${fresponsive(css`
		width: 1440px;
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
`

const StepTwo = styled(Step)`
	${fresponsive(css`
		margin-top: 88px;
		margin-left: 683px;
	`)}
`
const StepThree = styled(Step)`
	${fresponsive(css`
		margin-top: 125px;
		margin-left: 322px;
	`)}
`
const StepFour = styled(Step)`
	${fresponsive(css`
		margin-top: 154px;
		margin-left: 865px;
	`)}
`
const StepFive = styled(Step)`
	${fresponsive(css`
		margin-top: 91px;
		margin-left: 428px;
	`)}
`
const Title = styled.h2`
	${textStyles.h5};
	${fresponsive(css`
		margin-top: 14px;
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

const Connector = styled.img.attrs({ alt: "" })`
	max-width: unset;
	max-height: unset;
	position:absolute;
	z-index: 1;
	height: auto;
	
	${fmobile(css`
		display: none;
	`)}
`
const ConnectorOne = styled(Connector)`${fresponsive(css`
	top: 234.27px;
	left: 330px;
	width: 279px;
`)}`

const ConnectorTwo = styled(Connector)`
${fresponsive(css`
	width: 765px;
	top: 214.9px;
	left: -303px;
`)}
`

const ConnectorThree = styled(Connector)`
${fresponsive(css`
	top: 285px;
	left: 388px;
	width: 237px;
`)}
`
const ConnectorFour = styled(Connector)`${fresponsive(css`
	top: 184.36px;
	left: -364px;
	width: 738.5px;
`)}`

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
