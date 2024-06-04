import Widget from "components/Widget"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import { ReactComponent as GraphSVG } from "images/home/hero/anal-graph.svg"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import useMedia from "library/useMedia"
import { useRef } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import AvatarWidget from "./AvatarWidget"
import CallWidget from "./CallWidget"
import IconsWidget from "./IconsWidget"

export default function Widgets() {
	const bar1Ref = useRef<HTMLDivElement>(null)
	const bar2Ref = useRef<HTMLDivElement>(null)
	const mobile = useMedia(false, false, false, true)
	const images: Queries.HomeHeroQuery = useStaticQuery(graphql`
    query HomeHero {
      webhook: file(relativePath: { eq: "home/hero/webhook.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

	useAnimation(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".test-widget",
				start: "start center",
				end: "bottom top",
				toggleActions: "play reset play none",
			},
		})
		tl.from(
			[bar1Ref.current, bar2Ref.current],
			{
				width: 0,
				duration: 2,
				stagger: 0.5,
				ease: "power2.out",
				innerText: "0%",
				modifiers: {
					innerText: gsap.utils.unitize((text: number) => Math.round(text)),
				},
			},
			0.2,
		)
		tl.from(
			[bar1Ref.current, bar2Ref.current],
			{
				stagger: 0.5,
				padding: 0,
				duration: 0.3,
				ease: "power2.in",
			},
			0,
		)
	}, [])

	return (
		<>
			<StyledCallWidget className="call-widget" />
			{!mobile && <StyledIconsWidget className="icons-widget" />}
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
					<GraphWrapper>
						<Flow1Bar ref={bar1Ref}>82%</Flow1Bar>
						<Flow2Bar ref={bar2Ref}>34%</Flow2Bar>
						<GraphSVG />
					</GraphWrapper>
				</ABTestContent>
			</ABTestWidget>
		</>
	)
}

const StartWidget = styled(Widget)`
  position: absolute;

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
    right: 33px;
    top: 767px;
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
    opacity: 1;
    top: 1131px;
    right: 118px;
  `)}

	${fmobile(css`
    transform-origin: top right;
    transform: scale(0.73);
    top: 1116px;
    right: -204.5px;
    opacity: 1;
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
  gap: 10px;

  p {
    ${fmobile(css`
      width: 291px;
    `)}
  }
`

const GraphWrapper = styled.div`
  position: relative;
  color: #fff;
  font-family: Whyte, sans-serif;
  font-size: 10.5px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 10.8px */
  letter-spacing: -0.27px;
`

const Flow1Bar = styled.div`
  position: absolute;
  overflow: clip;
  display: flex;
  justify-content: end;
  align-items: center;
  background: linear-gradient(5deg, #1c6df2 -20.25%, #98ccfb 93.91%);

  ${fresponsive(css`
    border-radius: 3px;
    height: 16px;
    width: 191px;
    left: 77px;
    top: 50px;
    padding-right: 10px;
  `)}
`

const Flow2Bar = styled(Flow1Bar)`
  background: linear-gradient(10deg, #32cb08 -4.03%, #72fa4c 101.71%);

  ${fresponsive(css`
    width: 80px;
    top: 80px;
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
  display: flex;

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
  display: flex;

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
  display: flex;

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
