import {} from "gatsby"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
import { InertiaPlugin } from "gsap/InertiaPlugin"
import { ReactComponent as ArrowSVG } from "images/global/icons/Chev.svg"
import { fresponsive } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import useMedia from "library/useMedia"
import { useResponsivePixels } from "library/viewportUtils"
import { useRef, useState } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"

import Card from "./Card"

gsap.registerPlugin(Draggable, InertiaPlugin)

export default function Testimonials() {
	const trackRef = useRef<HTMLDivElement>(null)
	const activeIndex = useRef(0)
	const buttonIncrement = useRef<HTMLButtonElement | null>(null)
	const buttonDecrement = useRef<HTMLButtonElement | null>(null)
	const mobile = useMedia(false, false, false, true)
	const [singleTestimonial, setSingleTestimonial] = useState(false)
	const [numCards, setNumCards] = useState(0)

	// const data: Queries.TestimonialsQuery = useStaticQuery(graphql`
	//   query Testimonials {
	//     testimonials: allTestimonialsJson {
	//       nodes {
	//         name
	//         quote
	//         title
	//         headshot {
	//           childImageSharp {
	//             gatsbyImageData
	//           }
	//         }
	//       }
	//     }
	//   }
	// `)

	// const cards = data.testimonials.nodes.map((item) => {
	//   return <Cards key={item.name} cardData={item} />
	// })

	const indices = [0, 1, 2]
	const cards = indices.map((index) => {
		return <Card key={index} number={index} />
	})

	const width = useResponsivePixels(useMedia(768, 768, 768, 338))

	const [displayCards, setDisplayCards] = useState([...cards])

	useAnimation(() => {
		if (!trackRef.current) return

		setNumCards(cards.length)
		const VISIBLE_CARDS = 3

		const drag = Draggable.create(trackRef.current, {
			type: "x",
			inertia: true,
			snap: displayCards.map((_, index) => -width * index),
			zIndexBoost: false,
			onThrowComplete: () => {
				if (!drag[0]) return
				const index = Math.round(Math.abs(drag[0]?.x / width))
				activeIndex.current = index
			},
		})

		if (numCards === 1 && drag[0]) {
			drag[0].disable()
			setSingleTestimonial(true)
		} else if (numCards) {
		}
	}, [width, cards, numCards, displayCards])

	const moveTrack = (index: number) => {
		gsap.to(trackRef.current, {
			ease: "power3.inOut",
			x: -(width * index),
			overwrite: true,
		})
	}

	// const increment = () => {
	// 	if (!buttonDecrement.current || !buttonIncrement.current) return

	// 	if (activeIndex.current < cards.length - 1) {
	// 		const newIndex = activeIndex.current + 1
	// 		moveTrack(newIndex)
	// 		activeIndex.current = newIndex
	// 	}
	// }

	// const decrement = () => {
	// 	if (!buttonDecrement.current || !buttonIncrement.current) return

	// 	if (activeIndex.current > 0) {
	// 		const newIndex = activeIndex.current - 1
	// 		moveTrack(newIndex)
	// 		activeIndex.current = newIndex
	// 	}
	// }

	// const increment = () => {
	// 	if (activeIndex.current < clonedCards.length - 2) {
	// 		const newIndex = activeIndex.current + 1
	// 		moveTrack(newIndex)
	// 		activeIndex.current = newIndex
	// 	} else {
	// 		// Jump to the first real card without animation
	// 		gsap.to(trackRef.current, { duration: 0, x: -width })
	// 		activeIndex.current = 0
	// 	}
	// }

	// const decrement = () => {
	// 	if (activeIndex.current > 0) {
	// 		const newIndex = activeIndex.current - 1
	// 		moveTrack(newIndex)
	// 		activeIndex.current = newIndex
	// 	} else {
	// 		// Jump to the last real card without animation
	// 		gsap.to(trackRef.current, {
	// 			duration: 0,
	// 			x: -width * (clonedCards.length - 2),
	// 		})
	// 		activeIndex.current = clonedCards.length - 2
	// 	}
	// }

	const increment = () => {
		if (activeIndex.current < cards.length - 2) {
			const newIndex = activeIndex.current + 1
			moveTrack(newIndex)
			activeIndex.current = newIndex
		} else {
			// Add a new set of cards at the end
			cards.push(...cards)
			const newIndex = activeIndex.current + 1
			moveTrack(newIndex)
			activeIndex.current = newIndex
		}
	}

	const decrement = () => {
		if (activeIndex.current > 0) {
			const newIndex = activeIndex.current - 1
			moveTrack(newIndex)
			activeIndex.current = newIndex
		} else {
			// Add a new set of cards at the start
			cards.unshift(...cards)
			const newIndex = activeIndex.current - 1
			moveTrack(newIndex)
			activeIndex.current = newIndex
		}
	}

	return (
		<Wrapper>
			<Carousel>
				<TrackWrapper>
					<Track ref={trackRef}>{cards}</Track>
				</TrackWrapper>
			</Carousel>
			{!singleTestimonial && (
				<Buttons>
					<Button
						aria-label="previous"
						ref={buttonDecrement}
						onClick={decrement}
					>
						<ArrowSVG />
					</Button>
					<Button aria-label="next" ref={buttonIncrement} onClick={increment}>
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
    padding: 103px 0 154px;
    gap: 36px;
  `)}
`

const Carousel = styled.div`
  overflow: hidden;
  position: relative;

  ${fresponsive(css`
    height: 474px;
  `)}
`

const TrackWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;

  ${fresponsive(css`
    width: 1440px;
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
    right: 430px;
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
