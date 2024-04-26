import gsap from "gsap"
import { ReactComponent as LeftConnectorSVG } from "images/home/leftConnector.svg"
import { ReactComponent as LeftConnectorTSVG } from "images/home/leftConnectorT.svg"
import { ReactComponent as ProcessingIcon } from "images/home/processing.svg"
import { ReactComponent as RightConnectorSVG } from "images/home/rightConnector.svg"
import { ReactComponent as RightConnectorTSVG } from "images/home/rightConnectorT.svg"
import spinnerImg from "images/home/spinner.png"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useContext, useMemo, useRef, useState } from "react"
import styled, { css, keyframes } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"

import { graphql, useStaticQuery } from "gatsby"
import { MorphSVGPlugin, TextPlugin } from "gsap/all"
import { ReactComponent as CheckMarkSVG } from "images/home/complete.svg"
import AutoAnimate from "library/AutoAnimate"
import { ScreenContext } from "library/ScreenContext"
import UniversalImage from "library/UniversalImage"
import getMedia from "library/getMedia"
import { getResponsivePixels } from "library/viewportUtils"
import {
	createColorsFromGradient,
	reorderArrayFromArray,
} from "utils/colorFormatter"

const RIGHT_CONNECTOR_1 = "M0 123C26.0339 123 31.8192 207 64 207"
const RIGHT_CONNECTOR_2 = "M0 123C26.8474 123 32.8135 36 66 36"
const RIGHT_CONNECTOR_3 = "M0 123C45.5593 123 55.6835 107 112 107"

const LEFT_CONNECTOR_1 = "M5 74C49.7457 74 59.6892 123 115 123"
const LEFT_CONNECTOR_2 = "M4 212C49.1525 212 59.1864 123 115 123"
const LEFT_CONNECTOR_3 = "M6 147C50.339 147 60.192 123 115 123"

const LEFT_CONNECTOR_1T = "M2 79C26.4068 79 31.8305 124 62 124"
const LEFT_CONNECTOR_2T = "M2 188C26.4068 188 31.8305 124 62 124"
const LEFT_CONNECTOR_3T = "M2 106C26.4068 106 31.8305 124 62 124"

const RIGHT_CONNECTOR_1T = "M0 124C44.339 124 54.192 185 109 185"
const RIGHT_CONNECTOR_2T = "M0 124C36.6102 124 44.7457 53 90 53"
const RIGHT_CONNECTOR_3T = "M0 124C44.339 124 54.192 100 109 100"

gsap.registerPlugin(MorphSVGPlugin, TextPlugin)

const STEP_INTERVAL = 8

const EASE_1 = "power2.inOut"
const EASE_2 = "power4.inOut"
const EASE_BACK = "back.inOut"

const gradientStops = createColorsFromGradient(
	"39deg, #37EB05 4.74%, #A5CFF9 94.17%",
	32,
)

const newArrayOrder = [
	28, 22, 29, 23, 16, 30, 24, 17, 10, 31, 25, 18, 11, 4, 26, 19, 12, 5, 27, 20,
	13, 6, 0, 21, 14, 7, 1, 15, 8, 2, 9, 3,
]

const processCircleAnimation = () => {
	const circles = gsap.utils.toArray(".processing-circle")

	const circleEls = reorderArrayFromArray(circles, newArrayOrder)

	gsap.to(circleEls, {
		stagger: {
			from: "end",
			amount: 0.75,
		},
		fill: (index) => gradientStops[index] ?? colors.green400,
		ease: EASE_2,
		repeat: -1,
		repeatDelay: 0.25,
		yoyo: true,
	})
}

// Todo: add real tags when they are ready.

const tags1 = [
	"Asked Questions",
	"Added Sequence",
	"Opened Email",
	" Created Task",
	"Set Milestones",
]

const tags2 = [
	"Collected Data",
	"Logged Call",
	"Opportunity Won",
	"Contract Sent",
	"Request Signature",
]

const tags3 = [
	"Request Signature",
	"Created Cards",
	"Appended Data",
	"Published to Site",
	"Updated Analytics",
]

export default function WorkflowAnimation({
	setActiveIndex,
}: {
	setActiveIndex: (index: number) => void
}) {
	const animationRef = useRef<HTMLDivElement | null>(null)
	const processText = useRef<HTMLDivElement | null>(null)
	const leftCardRef = useRef<HTMLDivElement | null>(null)
	const rightCardRef = useRef<HTMLDivElement | null>(null)
	const rowText = useRef<HTMLParagraphElement | null>(null)
	const leftCardRow = useRef<HTMLDivElement | null>(null)
	const [afterContent, setAfterContent] = useState(true)
	const [processStep, setProcessStep] = useState(0)
	const { tablet } = useContext(ScreenContext)

	const processIcons = [
		<SpinningCircle key="spinner">
			<img src={spinnerImg} alt="spinner" />
		</SpinningCircle>,
		<StyledCheckMark key="success-check" />,
	]

	const images: Queries.WorkflowImageQuery = useStaticQuery(graphql`
    query WorkflowImage {
      hubspot: file(relativePath: { eq: "home/hubspot.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      salesforce: file(relativePath: { eq: "home/salesforce.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      airtable: file(relativePath: { eq: "home/airtable.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

	const CompanyIcons = useMemo(
		() => [
			{
				icon: images.hubspot,
				text: "HubSpot",
			},
			{
				icon: images.salesforce,
				text: "Salesforce",
			},
			{
				icon: images.airtable,
				text: "AirTable",
			},
		],
		[images.airtable, images.hubspot, images.salesforce],
	)

	const allIcons = useMemo(
		() =>
			CompanyIcons.map((icon) => {
				return <Icon image={icon.icon} alt={icon.text} key={icon.text} />
			}),
		[CompanyIcons],
	)

	const [activeIcon, setActiveIcon] = useState(allIcons[0])

	const createTags = (tags: string[], i: number) => {
		return tags.map((tag) => {
			return (
				<Tag className={`tags-${i}`} key={tag}>
					<CheckMarkSVG /> <div>{tag}</div>
				</Tag>
			)
		})
	}

	const taskGroup1 = createTags(tags1, 1)
	const taskGroup2 = createTags(tags2, 2)
	const taskGroup3 = createTags(tags3, 3)

	useAnimation(() => {
		if (!animationRef.current) return

		const processingToComplete = {
			text: { value: "Complete" },
			duration: 0.5,
			onComplete: () => {
				setProcessStep(1)
				setAfterContent(false)
			},
		}

		const tagStaggerIn = {
			opacity: 1,
			stagger: {
				amount: 3,
			},
			duration: 0.5,
			ease: EASE_2,
		}

		const tagStaggerOut = {
			opacity: 0,
			stagger: {
				amount: 0.6,
				from: "end" as const,
			},
			duration: 0.2,
			ease: EASE_2,
		}

		const iconStaggerIn = {
			scale: 1,
			stagger: {
				amount: 3,
			},
			duration: 0.5,
			ease: EASE_BACK,
		}

		let activeIndex = 0

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: animationRef.current,
				start: "bottom bottom",
				end: "bottom top",
			},
			repeat: -1,
			onStart: () => {
				processCircleAnimation()
				setActiveIndex(activeIndex)
			},
			onRepeat: () => {
				activeIndex = activeIndex === 2 ? 0 : activeIndex + 1
				setActiveIndex(activeIndex)
			},
		})
		// Step 1
		tl.fromTo(
			rowText.current,
			{
				text: { value: "New Lead" },
			},
			{
				duration: 0.3,
				text: { value: "New Lead" },
			},
			0.3,
		)
			.to(
				processText.current,
				{
					text: { value: "Processing" },
					duration: 0.5,
					onComplete: () => {
						setAfterContent(true)
						setProcessStep(0)
					},
				},
				0,
			)
			.to(".tags-1", tagStaggerIn, 1)
			.to(".tags-1 > svg", iconStaggerIn, 1.2)
			.to(processText.current, processingToComplete, STEP_INTERVAL - 2)
			.to(
				".left-connect1",
				{
					morphSVG: getMedia(
						LEFT_CONNECTOR_2,
						LEFT_CONNECTOR_2,
						LEFT_CONNECTOR_2T,
						LEFT_CONNECTOR_2T,
					),
					duration: 2,
					ease: EASE_1,
				},
				STEP_INTERVAL,
			)
			.to(
				leftCardRow.current,
				{
					x: () => `-=${getResponsivePixels(24)}`,
					duration: 2,
					ease: EASE_1,
				},
				STEP_INTERVAL,
			)
			.to(
				".right-connect1",
				{
					morphSVG: getMedia(
						RIGHT_CONNECTOR_2,
						RIGHT_CONNECTOR_2,
						RIGHT_CONNECTOR_2T,
						RIGHT_CONNECTOR_2T,
					),
					duration: 2,
					ease: EASE_1,
				},
				STEP_INTERVAL,
			)
			.to(
				processText.current,
				{
					text: { value: "Incoming" },
					duration: 0.5,
					onStart: () => {
						setProcessStep(0)
						setAfterContent(true)
					},
				},
				STEP_INTERVAL + 1,
			)

			.to(".tags-1", tagStaggerOut, STEP_INTERVAL)
			.to(".tags-1 > svg", { scale: 0 }, STEP_INTERVAL + 2)
			.to(
				rowText.current,
				{
					duration: 0.3,
					text: { value: "" },
					onStart: () => {
						setActiveIcon(allIcons[1])
					},
				},
				STEP_INTERVAL + 1,
			)
			.to(
				rowText.current,
				{
					duration: 0.3,
					text: { value: "New Ticket" },
				},
				STEP_INTERVAL + 1.3,
			)
			.to(".tags-2", tagStaggerIn, STEP_INTERVAL + 2)
			.to(".tags-2 > svg", iconStaggerIn, STEP_INTERVAL + 2.2)
			.to(
				leftCardRef.current,
				{
					y: () => `+=${getResponsivePixels(getMedia(138, 138, 109, 100))}`,
					duration: 2,
					ease: EASE_1,
				},
				STEP_INTERVAL,
			)
			.to(
				rightCardRef.current,
				{
					y: () => `-=${getResponsivePixels(getMedia(171, 171, 132, 171))}`,
					x: () => `-=${getResponsivePixels(getMedia(0, 0, 18, 0))}`,
					duration: 2,
					ease: EASE_1,
				},
				STEP_INTERVAL,
			)
			.to(processText.current, processingToComplete, STEP_INTERVAL * 2 - 2)
			.to(
				processText.current,
				{
					text: { value: "Ordering" },
					duration: 0.5,
					onStart: () => {
						setProcessStep(0)
						setAfterContent(true)
					},
				},
				STEP_INTERVAL * 2 + 1,
			)
			.to(
				".left-connect1",
				{
					morphSVG: getMedia(
						LEFT_CONNECTOR_3,
						LEFT_CONNECTOR_3,
						LEFT_CONNECTOR_3T,
						LEFT_CONNECTOR_3T,
					),
					duration: 2,
					ease: EASE_1,
				},
				STEP_INTERVAL * 2,
			)
			.to(".tags-2", tagStaggerOut, STEP_INTERVAL * 2)
			.to(".tags-2 > svg", { scale: 0 }, STEP_INTERVAL * 2 + 2)
			.to(
				leftCardRow.current,
				{
					x: () => `+=${getResponsivePixels(10)}`,
					duration: 2,
					ease: EASE_1,
				},
				STEP_INTERVAL * 2,
			)
			.to(
				rowText.current,
				{
					duration: 0.3,
					text: { value: "" },
					onStart: () => {
						setActiveIcon(allIcons[2])
					},
				},
				STEP_INTERVAL * 2 + 1,
			)
			.to(".tags-3", tagStaggerIn, STEP_INTERVAL * 2 + 2)
			.to(".tags-3 > svg", iconStaggerIn, STEP_INTERVAL * 2 + 2.2)
			.to(
				rowText.current,
				{
					duration: 0.3,
					text: { value: "Row Updated" },
				},
				STEP_INTERVAL * 2 + 1.3,
			)
			.to(
				".right-connect1",
				{
					morphSVG: getMedia(
						RIGHT_CONNECTOR_3,
						RIGHT_CONNECTOR_3,
						RIGHT_CONNECTOR_3T,
						RIGHT_CONNECTOR_3T,
					),
					duration: 2,
					ease: EASE_1,
				},
				STEP_INTERVAL * 2,
			)
			.to(
				leftCardRef.current,
				{
					y: () => `-=${getResponsivePixels(getMedia(65, 65, 81, 81))}`,
					duration: 2,
					ease: EASE_1,
				},
				STEP_INTERVAL * 2,
			)
			.to(
				rightCardRef.current,
				{
					y: () => `+=${getResponsivePixels(getMedia(72, 72, 48, 0))}`,
					x: () => `+=${getResponsivePixels(getMedia(43, 43, 18, 0))}`,
					duration: 2,
					ease: EASE_1,
				},
				STEP_INTERVAL * 2,
			)
			.to(processText.current, processingToComplete, STEP_INTERVAL * 3 - 2)
			.to(
				".left-connect1",
				{
					morphSVG: getMedia(
						LEFT_CONNECTOR_1,
						LEFT_CONNECTOR_1,
						LEFT_CONNECTOR_1T,
						LEFT_CONNECTOR_1T,
					),
					duration: 2,
					ease: EASE_1,
				},
				STEP_INTERVAL * 3,
			)
			.to(
				leftCardRef.current,
				{
					y: 0,
					duration: 2,
					ease: EASE_1,
				},
				STEP_INTERVAL * 3,
			)
			.to(".tags-3", tagStaggerOut, STEP_INTERVAL * 3)
			.to(".tags-3 > svg", { scale: 0 }, STEP_INTERVAL * 3 + 2)
			.to(
				rightCardRef.current,
				{
					y: 0,
					x: 0,
					duration: 2,
					ease: EASE_1,
				},
				STEP_INTERVAL * 3,
			)
			.to(
				".right-connect1",
				{
					morphSVG: getMedia(
						RIGHT_CONNECTOR_1,
						RIGHT_CONNECTOR_1,
						RIGHT_CONNECTOR_1T,
						RIGHT_CONNECTOR_1T,
					),
					duration: 2,
					ease: EASE_1,
				},
				STEP_INTERVAL * 3,
			)
			.to(
				leftCardRow.current,
				{
					x: 0,
					duration: 2,
					ease: EASE_1,
				},
				STEP_INTERVAL * 3,
			)
			.to(
				rowText.current,
				{
					duration: 0.3,
					text: { value: "" },
					onStart: () => {
						setActiveIcon(allIcons[0])
					},
				},
				STEP_INTERVAL * 3 + 1,
			)
			.to(
				rowText.current,
				{
					duration: 0.3,
					text: { value: "New Lead" },
				},
				STEP_INTERVAL * 3 + 1.3,
			)
	}, [allIcons, setActiveIndex])

	return (
		<Animation ref={animationRef}>
			<LeftCard ref={leftCardRef}>
				<RightNode />
				<Row ref={leftCardRow}>
					<Icons>
						<AutoAnimate>{activeIcon}</AutoAnimate>
					</Icons>
					<CenterLine />
					<RowText>
						<TextInner ref={rowText} />
					</RowText>
				</Row>
			</LeftCard>

			{tablet ? (
				<LeftConnectorT>
					<LeftConnectorTSVG />
				</LeftConnectorT>
			) : (
				<LeftConnector>
					<LeftConnectorSVG />
				</LeftConnector>
			)}
			<CenterModule>
				<LeftNode />
				<RightNode />
				<StyledProcessingIcon />

				<Processing>
					<ProcessIconContainer>
						<AutoAnimate
							fromParameters={{ opacity: 0 }}
							toParameters={{ opacity: 1 }}
						>
							{processIcons[processStep]}
						</AutoAnimate>
					</ProcessIconContainer>
					<ProcessText>
						<Dots $afterContent={afterContent} />
						<ProcessTextWord ref={processText} />
					</ProcessText>
				</Processing>
			</CenterModule>

			{tablet ? (
				<RightConnectorT>
					<RightConnectorTSVG />
				</RightConnectorT>
			) : (
				<RightConnector>
					<RightConnectorSVG />
				</RightConnector>
			)}

			<RightCard ref={rightCardRef}>
				<LeftNode />
				<TaskGroup>{taskGroup1}</TaskGroup>
				<TaskGroup>{taskGroup2}</TaskGroup>
				<TaskGroup>{taskGroup3}</TaskGroup>
			</RightCard>
		</Animation>
	)
}

const animationCardStyle = css`
  background: ${gradients.surface1};

  ${fresponsive(css`
    box-shadow: 0 18px 32px 0 rgba(89 89 89 / 4%);
    border-radius: 18px;
    border: 1.5px solid ${`${colors.gray200}90`};
  `)}
`

const Animation = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  ${fresponsive(css`
    margin-top: 68px;
  `)}

  ${ftablet(css`
    justify-content: flex-start;
  `)}
`

const Processing = styled.div`
  ${textStyles.sh4}
  color: ${colors.gray800};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`

const StyledProcessingIcon = styled(ProcessingIcon)`
  position: relative;
  ${fresponsive(css`
    width: 91px;
    height: 91px;
  `)}
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const SpinningCircle = styled.div`
  position: relative;
  animation: ${spin} 1s linear infinite;
  transform-origin: center;
  ${fresponsive(css`
    width: 14px;
    height: 14px;
  `)}
`

const NodeStyle = css`
  border-radius: 99vw;
  background: ${colors.white};
  ${fresponsive(css`
    border: 1.5px solid ${colors.gray200};
    width: 9px;
    height: 9px;
    top: 118.68px;
  `)}
`

const LeftNode = styled.div`
  position: absolute;
  z-index: 2;
  ${NodeStyle}
  ${fresponsive(css`
    left: -4.7px;
  `)}
`

const RightNode = styled.div`
  position: absolute;

  ${NodeStyle}
  ${fresponsive(css`
    left: unset;
    right: -4.7px;
  `)}
`

const CenterModule = styled.div`
  position: relative;
  ${animationCardStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  ${fresponsive(css`
    width: 357px;
    height: 239px;
    gap: 44px;
    padding: 40px 133px 28px;

    ${LeftNode}, ${RightNode} {
      top: 117.68px;
    }
  `)}

  ${ftablet(css`
    width: 264px;

    ${LeftNode}, ${RightNode} {
      top: 94.68px;
    }
  `)}
`

const dotAnimation = keyframes`
  0% {
    content: "";
  }
  20% {
    content: ".";
  }
  40% {
    content: "..";
  }
  60% {
    content: "...";
  }
  80% {
    content: "";
  }
  100% {
    content: "";
  }
`

const Dots = styled.div<{ $afterContent: boolean }>`
  width: 30px;
  height: 100%;
  position: absolute;
  left: 94%;
  opacity: ${({ $afterContent }) => ($afterContent ? 1 : 0)};
  transition: opacity 0s;

  &::after {
    position: absolute;
    content: "";
    left: 0;
    width: 100%;
    height: 100%;
    color: ${colors.black};
    animation: ${dotAnimation} 2s steps(5)
      ${({ $afterContent }) => ($afterContent ? "infinite" : "1")};
  }
`

const ProcessText = styled.div`
  padding-right: 4px;
  display: flex;
  position: relative;
  ${fresponsive(css`
    min-width: 50px;
  `)}

  .process-text {
    opacity: 0;
  }
`

const LeftConnector = styled.div`
  position: relative;
  ${fresponsive(css`
    width: 115px;
    height: 239px;
  `)}

  svg {
    width: 100%;
    height: 100%;
  }

  ${ftablet(css`
    display: none;
  `)}
`

const LeftConnectorT = styled.div`
  position: relative;
  display: none;

  svg {
    width: 100%;
    height: 100%;
  }

  ${ftablet(css`
    display: block;
    width: 64px;
    height: 238px;
  `)}
`

const RightConnector = styled.div`
  position: relative;
  ${fresponsive(css`
    width: 115px;
    height: 239px;
  `)}

  svg {
    width: 100%;
    height: 100%;
  }

  ${ftablet(css`
    width: 111px;
    height: 238px;
  `)}
`

const RightConnectorT = styled.div`
  position: relative;
  display: none;

  svg {
    width: 100%;
    height: 100%;
  }

  ${ftablet(css`
    display: inline-block;
    width: 111px;
    height: 238px;
  `)}
`

const LeftCard = styled.div`
  ${animationCardStyle};
  position: absolute;
  display: grid;
  place-items: center;

  ${RightNode} {
    top: 50%;
    transform: translateY(-50%);
  }

  ${fresponsive(css`
    right: calc(100% - 2px);
    top: -1px;
    width: 280px;
    height: 150px;
  `)}

  ${ftablet(css`
    right: calc(100% - 2px);
    top: 3px;
    width: 265px;
    height: 150px;
  `)}
`

const RightCard = styled.div`
  ${animationCardStyle};
  position: absolute;

  ${LeftNode} {
    top: 50%;
    transform: translateY(-50%);
  }

  ${fresponsive(css`
    left: 539px;
    top: 123px;
    width: 330px;
    height: 168px;
    min-height: 126px;
  `)}

  ${ftablet(css`
    width: 194px;
    height: 252px;
    left: 444px;
    top: 58px;
  `)}
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 0;

  ${fresponsive(css`
    gap: 16px;
    width: fit-content;
  `)}
`

const Icons = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  ${fresponsive(css`
    width: 112px;
    height: 48px;
  `)}
`

const RowText = styled.p`
  ${textStyles.sh4};
  color: ${colors.black};
  position: relative;

  ${fresponsive(css`
    width: 50px;
    white-space: nowrap;
  `)}
`

const Icon = styled(UniversalImage).attrs({ objectFit: "contain" })`
  ${fresponsive(css`
    height: 48px;
    width: 112px;

    img {
      object-position: right center;
    }
  `)}
`

const TextInner = styled.span``

const CenterLine = styled.div`
  background: ${colors.gray400};
  ${fresponsive(css`
    width: 1.5px;
    height: 24px;
  `)}
`

const StyledCheckMark = styled(CheckMarkSVG)`
  position: relative;

  ${fresponsive(css`
    width: 14px;
    height: 14px;
  `)}
`

const ProcessIconContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  ${fresponsive(css`
    width: 14px;
    height: 14px;
  `)}
`

const ProcessTextWord = styled.p``

const Tag = styled.div`
  width: fit-content;
  position: relative;
  background: ${colors.gray100};
  color: ${colors.gray800};
  display: flex;
  ${textStyles.sh4};
  opacity: 0;
  ${fresponsive(css`
    gap: 10.42px;
    padding: 11.46px 10.42px 10.42px;
    border-radius: 9.37px;

    svg {
      display: block;
      width: 14px;
      height: 14px;
      transform: scale(0);
    }
  `)}

  ${ftablet(css`
    white-space: nowrap;
  `)}
`

const TaskGroup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  inset: 0;
  ${fresponsive(css`
    padding: 24px;
    gap: 6px;
  `)}
`
