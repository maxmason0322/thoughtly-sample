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

const gradientPicker = () => {
	const value = Math.floor(Math.random() * 3)
	switch (value) {
		case 0:
			return gradients.greenGreen
		case 1:
			return gradients.blueBlue
		case 2:
			return gradients.purplePurple
	}
}

export default function Testimonials({
	testimonials,
}: { testimonials: readonly Testimonial[] }) {
	const activeIndex = useRef(0)

	const cards = testimonials.map((item) => {
		return (
			<Card key={item?.name} cardData={item} gradient={gradients.greenGreen} />
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
		console.log("actual index", actualIndex)
		console.log("index", index)

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
		console.log(activeIndex.current)
		animate()
	}

	const decreaseIndex = () => {
		if (activeIndex.current <= -cardsLength - 1) {
			activeIndex.current = 0
		} else {
			activeIndex.current -= 1
		}
		console.log(activeIndex.current)
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
										gradient={gradients.greenGreen}
										cardData={null}
									/>
								) : null}
							</>
						)}
					</Track>
					{/* {!singleTestimonial && (
						<>
							<Track className="track">{cards}</Track>
							<Track className="track">{cards}</Track>
						</>
					)} */}
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
		height: 835px;
    padding: 103px 0 154px;
    gap: 36px;
  `)}

	${ftablet(css`
		height: 862px;
		padding: 136px 0;
		gap: 48px;
	`)}

	${fmobile(css`
		height: 970px;
	`)}
`

const Carousel = styled.div`
  overflow: hidden;
  position: relative;

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
	scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  ${fresponsive(css`
		gap: 24px;
  `)}
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
