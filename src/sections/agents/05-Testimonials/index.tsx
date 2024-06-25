import gsap from "gsap"
import { ScrollToPlugin } from "gsap/all"
import { ReactComponent as ArrowSVG } from "images/global/icons/Chev.svg"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useMedia from "library/useMedia"
import { useResponsivePixels } from "library/viewportUtils"
import { useCallback, useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import type { Testimonial } from "types/aliases"
import Card from "./Card"

gsap.registerPlugin(ScrollToPlugin)

/**
 * If names and head shots are added back to the testimonial cards, uncomment line 72 and remove line 73!
 */

export default function Testimonials({
	testimonials,
}: {
	testimonials: readonly Testimonial[]
}) {
	const activeIndex = useRef(0)

	const prevGradient = useRef<string>("")

	const gradientChoices = {
		green: gradients.greenGreen,
		blue: gradients.blueBlue,
		purple: gradients.purplePurple,
	}

	/**
	 * Use for more randomized card colors
	 */
	const gradientSwitcher = (gradient1: string, gradient2: string) => {
		const value = Math.floor(Math.random() * 2)
		switch (value) {
			case 0:
				prevGradient.current = gradient1
				return gradientChoices[gradient1 as keyof typeof gradientChoices]
			case 1:
				prevGradient.current = gradient2
				return gradientChoices[gradient2 as keyof typeof gradientChoices]
		}
	}

	const gradientPicker = () => {
		if (prevGradient.current === "") {
			prevGradient.current = "green"
			return gradients.greenGreen
		}
		if (prevGradient.current === "green") {
			// return gradientSwitcher("blue", "purple")
			prevGradient.current = "blue"
			return gradients.blueBlue
		}
		if (prevGradient.current === "blue") {
			// return gradientSwitcher("green", "purple")
			prevGradient.current = "purple"
			return gradients.purplePurple
		}
		if (prevGradient.current === "purple") {
			// return gradientSwitcher("green", "blue")
			prevGradient.current = "green"
			return gradients.greenGreen
		}
	}

	const cards = testimonials.map((item) => {
		return (
			<Card
				// key={item?.name}
				key={item?.positionAndCompany}
				cardData={item}
				gradient={gradientPicker() ?? ""}
			/>
		)
	})

	const [singleTestimonial, setSingleTestimonial] = useState(cards.length === 1)
	const trackWrapperRef = useRef<HTMLDivElement | null>(null)
	const trackRef = useRef<HTMLDivElement | null>(null)
	const cardWidth = useResponsivePixels(useMedia(744, 744, 744, 314))
	const cardGap = useResponsivePixels(useMedia(24, 24, 24, 12))
	const [scrollOffset, setScrollOffset] = useState(0)
	const cardsLength = cards.length

	const restart = useCallback(() => {
		gsap.set(trackWrapperRef.current, {
			scrollTo: {
				x: scrollOffset,
			},
		})
	}, [scrollOffset])

	useEffect(() => {
		const offset =
			(trackRef.current?.clientWidth ?? 0) / 2 -
			(trackWrapperRef.current?.clientWidth ?? 0) / 2
		setScrollOffset(offset)
		restart()
	}, [restart])

	const animate = () => {
		gsap.to(trackWrapperRef.current, {
			scrollTo: {
				x: activeIndex.current * (cardWidth + cardGap) + scrollOffset,
			},
			duration: 0.25,
		})
	}

	const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
		if (!e.target) return
		const { scrollLeft } = e.target as HTMLDivElement

		const index = (scrollLeft - scrollOffset) / (cardWidth + cardGap)
		const actualIndex = Math.round(index)

		activeIndex.current = actualIndex
		if (activeIndex.current >= cardsLength) {
			activeIndex.current = 0
			restart()
		} else if (activeIndex.current <= -cardsLength) {
			activeIndex.current = 0
			restart()
		}
	}

	const increaseIndex = () => {
		if (activeIndex.current >= cardsLength + 1) {
			activeIndex.current = 0
		} else {
			activeIndex.current += 1
		}
		animate()
	}

	const decreaseIndex = () => {
		if (activeIndex.current <= -cardsLength - 1) {
			activeIndex.current = 0
		} else {
			activeIndex.current -= 1
		}
		animate()
	}

	return (
		<Wrapper>
			<Carousel>
				<TrackWrapper
					onScroll={handleScroll}
					ref={trackWrapperRef}
					style={{ justifyContent: singleTestimonial ? "center" : "unset" }}
				>
					<Track ref={trackRef} className="track">
						{cards}
						{!singleTestimonial && (
							<>
								{cards}
								{cards}
								{cards.length % 2 === 0 ? (
									<Card
										key={"emptyCard"}
										gradient={gradientPicker() ?? ""}
										cardData={null}
									/>
								) : null}
							</>
						)}
					</Track>
				</TrackWrapper>
			</Carousel>
			{!singleTestimonial && (
				<Buttons>
					<Button aria-label="previous" onClick={decreaseIndex}>
						<ArrowSVG />
					</Button>
					<Button aria-label="next" onClick={increaseIndex}>
						<ArrowSVG />
					</Button>
				</Buttons>
			)}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;

	${fresponsive(css`
		padding: 215px 0 0;
		gap: 36px;
	`)}

	${ftablet(css`
		padding: 136px 0;
		gap: 48px;
	`)}
`

const Carousel = styled.div`
	overflow: hidden;
	position: relative;

	/* Hide scrollbar for IE, Edge, and Firefox */
	-ms-overflow-style: none;
	scrollbar-width: none;

	/* Hide scrollbar for Chrome, Safari, and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  ${fresponsive(css`
    height: 474px;
  `)}

	${fmobile(css`
		height: 660px;
	`)}
`

const TrackWrapper = styled.div`
	position: absolute;
	display: flex;
	width: 100%;
	top: 0;
	left: 0;
	overflow-x: scroll;
`

const Track = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: fit-content;
	height: 100%;

	${fresponsive(css`
		gap: 24px;
	`)}

	${fmobile(css`
		gap: 12px;
	`)}
`

const Buttons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	${fresponsive(css`
		gap: 24px;
	`)}
`

const Button = styled.button`
	cursor: pointer;
	border: 1.5px solid ${colors.gray200};
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${colors.white};

	${fresponsive(css`
		width: 68px;
		height: 68px;
		padding: 18px;
		border-radius: 76px;
		box-shadow: 0 5px 12px 0 rgba(49 75 45 / 4%);
		transition: all 150ms linear;

		svg {
			width: 31.5px;
			height: 31.5px;
		}

		&:first-of-type {
			svg {
				transform: rotate(180deg);
			}
		}
	`)}

	&:hover {
		background: ${colors.gray100};
	}
`
