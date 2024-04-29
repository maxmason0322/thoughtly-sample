import gsap from "gsap"
import { ReactComponent as LeftConnectorSVG } from "images/home/leftConnector.svg"
import { ReactComponent as LeftConnectorTSVG } from "images/home/leftConnectorT.svg"
import { ReactComponent as RightConnectorSVG } from "images/home/rightConnector.svg"
import { ReactComponent as RightConnectorTSVG } from "images/home/rightConnectorT.svg"
import { fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useContext, useRef, useState } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"

import { MorphSVGPlugin, TextPlugin } from "gsap/all"
import { ScreenContext } from "library/ScreenContext"
import getMedia from "library/getMedia"
import { getResponsivePixels } from "library/viewportUtils"
import CenterModule from "./CenterModule"
import LeftCard from "./LeftCard"
import RightCard from "./RightCard"
import {
	iconStaggerIn,
	processCircleAnimation,
	tagStaggerIn,
	tagStaggerOut,
} from "./workflowAnimations"

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

	const [activeIcon, setActiveIcon] = useState(0)

	useAnimation(
		() => {
			if (!animationRef.current) return

			const processingToComplete = {
				text: { value: "Complete" },
				duration: 0.5,
				onComplete: () => {
					setProcessStep(1)
					setAfterContent(false)
				},
			}

			let activeIndex = 0

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: animationRef.current,
					start: "bottom bottom",
					end: "bottom top",
					toggleActions: "play pause resume pause",
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
							setActiveIcon(1)
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
							setActiveIcon(2)
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
							setActiveIcon(0)
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
		},
		[setActiveIndex],
		{ scope: animationRef },
	)

	return (
		<Animation ref={animationRef}>
			<LeftCard
				leftCardRef={leftCardRef}
				rowText={rowText}
				leftCardRow={leftCardRow}
				activeIconIndex={activeIcon}
			/>

			{tablet ? (
				<LeftConnectorT>
					<LeftConnectorTSVG />
				</LeftConnectorT>
			) : (
				<LeftConnector>
					<LeftConnectorSVG />
				</LeftConnector>
			)}
			<CenterModule
				afterContent={afterContent}
				processStep={processStep}
				processText={processText}
			/>

			{tablet ? (
				<RightConnectorT>
					<RightConnectorTSVG />
				</RightConnectorT>
			) : (
				<RightConnector>
					<RightConnectorSVG />
				</RightConnector>
			)}

			<RightCard rightCardRef={rightCardRef} />
		</Animation>
	)
}

export const animationCardStyle = css`
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
