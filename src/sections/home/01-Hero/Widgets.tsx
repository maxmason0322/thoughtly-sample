import Widget from "components/Widget"
import { graphql, useStaticQuery } from "gatsby"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import AvatarWidget from "./AvatarWidget"
import CallWidget from "./CallWidget"
import IconsWidget from "./IconsWidget"

export default function Widgets() {
	const images: Queries.HomeHeroQuery = useStaticQuery(graphql`
    query HomeHero {
      abTest: file(relativePath: { eq: "home/hero/anal-graph.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      webhook: file(relativePath: { eq: "home/hero/webhook.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

	return (
		<>
			<StyledCallWidget className="call-widget" />
			<StyledIconsWidget className="icons-widget" />
			<StyledAvatarWidget className="avatar-widget" />
			<StartWidget
				className="start-widget"
				title="Start"
				iconColor={colors.green400}
				icon="play"
				bottomConnectors={[""]}
			>
				"Thank you for calling Thoughtly, this is Tessa. Who am I speaking
				with?"
			</StartWidget>
			<SpeakWidget
				className="speak-1-widget"
				title="Speak"
				iconColor="#0085E5"
				icon="speak"
				bottomConnectors={["Yes", "No, new email"]}
				topConnectors={[""]}
			>
				<p>
					"hello <Blue>{"{api.name}"}</Blue>, is your email address still{" "}
					<Blue>{"{api.email}"}</Blue>?
				</p>
			</SpeakWidget>
			<Speak2Widget
				className="speak-2-widget"
				title="Speak"
				iconColor="#0085E5"
				icon="speak"
				bottomConnectors={[
					"Make\nPayment",
					"Place\nOrder",
					"Book\nAppointment",
					"Something\nElse",
				]}
				topConnectors={[""]}
			>
				<p>
					Got it, thanks for being a customer for{" "}
					<Blue>{"{api.num_years}"}</Blue> incredible years,{" "}
					<Blue>{"{name}"}</Blue>! So, what can I do for you?
				</p>
			</Speak2Widget>
			<ActionWidget
				className="action-widget"
				title="Action"
				icon="integration"
				iconColor="#F48A46"
				topConnectors={[""]}
				bottomConnectors={[""]}
			>
				<ActionImage image={images.webhook} alt="webhook ui" />
			</ActionWidget>
			<ABTestWidget
				className="test-widget"
				title="A/B Test"
				icon="shuffle"
				iconColor="#EED70B"
				topConnectors={[""]}
				bottomConnectors={["1", "2"]}
			>
				<ABTestContent>
					<p>
						Great <Blue>{"{name}"}</Blue>, let's get you in the system and I'll
						route you to the right place!
					</p>
					<ABImage image={images.abTest} alt="analytics graph" />
				</ABTestContent>
			</ABTestWidget>
		</>
	)
}

const StartWidget = styled(Widget)`
  position: absolute;
  opacity: 0;

  ${fresponsive(css`
    top: 372px;
    right: 226px;
    height: 178px;
  `)}

  ${ftablet(css`
    top: 857px;
    right: 199px;
  `)}

	${fmobile(css`
    right: 31.5px;
    top: 768px;
    transform-origin: top right;
    transform: scale(0.73);
  `)}
`

const SpeakWidget = styled(Widget)`
  position: absolute;
  opacity: 0;

  ${fresponsive(css`
    top: 762px;
    right: 346px;
    height: 196px;
  `)}

  ${ftablet(css`
    top: 1131px;
    right: 118px;
  `)}

	${fmobile(css`
    transform-origin: top right;
    transform: scale(0.73);
    top: 1116px;
    right: -204.5px;
  `)}
`

const Blue = styled.strong`
  color: #0085e5d9;
  font-weight: 500;
`

const Speak2Widget = styled(Widget)`
  position: absolute;

  ${fresponsive(css`
    top: 1603px;
    right: 732px;
    height: 195px;
  `)}

  ${ftablet(css`
    top: 1941px;
    right: 476px;
  `)}

	${fmobile(css`
    transform-origin: top right;
    transform: scale(0.73);
    top: 1952px;
    right: 103.5px;
  `)}
`

const ActionWidget = styled(Widget)`
  position: absolute;

  ${fresponsive(css`
    top: 1004px;
    right: 156px;
  `)}

  ${ftablet(css`
    top: 1396px;
    right: 44px;
  `)}

	${fmobile(css`
    transform-origin: top right;
    transform: scale(0.73);
    top: 1210px;
    right: 103.5px;
  `)}
`

const ABTestWidget = styled(Widget)`
  position: absolute;

  ${fresponsive(css`
    top: 1268px;
    right: 948px;
    height: 290px;
  `)}

  ${ftablet(css`
    top: 1558px;
    right: 597px;
  `)}

	${fmobile(css`
    transform-origin: top right;
    transform: scale(0.73);
    right: -36.5px;
    top: 1714px;
  `)}
`

const ABTestContent = styled.div`
  display: flex;
  flex-direction: column;
`

const ABImage = styled(UniversalImage)`
  ${fresponsive(css`
    width: 326px;
    height: 113px;
  `)}
`

const ActionImage = styled(UniversalImage)`
  ${fresponsive(css`
    width: 338px;
    height: 162px;
  `)}
`

const StyledCallWidget = styled(CallWidget)`
  position: absolute;
  z-index: 1;

  ${fresponsive(css`
    top: 150px;
    right: 229px;
  `)}

  ${ftablet(css`
    top: 633px;
    right: 126px;
  `)}

	${fmobile(css`
    transform-origin: top right;
    top: 609.25px;
    right: 127.75px;
    transform: scale(0.75);
  `)}
`

const StyledIconsWidget = styled(IconsWidget)`
  position: absolute;
  z-index: 1;

  ${fresponsive(css`
    top: 150px;
    right: 157px;
  `)}

  ${ftablet(css`
    top: 550px;
    right: 53px;
  `)}

	${fmobile(css`
    display: none;
  `)}
`

const StyledAvatarWidget = styled(AvatarWidget)`
  position: absolute;
  z-index: 1;

  ${fresponsive(css`
    top: 452px;
    right: 83px;
  `)}

  ${ftablet(css`
    top: 857px;
    right: 53px;
  `)}
	
	${fmobile(css`
    right: 26px;
    top: 667px;
    transform: scale(0.73);
    transform-origin: top right;
  `)}
`
