import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
import { InertiaPlugin } from "gsap/InertiaPlugin"
import { Observer } from "gsap/Observer"
import { ReactComponent as ArrowSVG } from "images/global/icons/Chev.svg"
import { fresponsive } from "library/fullyResponsive"
import useMedia from "library/useMedia"
import { getResponsivePixels, useResponsivePixels } from "library/viewportUtils"
import { useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import Card from "./Card"

gsap.registerPlugin(Draggable, InertiaPlugin)
gsap.registerPlugin(Observer)

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

export default function Testimonials() {
	const offset = useRef(0)
	const activeIndex = useRef(0)
	const mobile = useMedia(false, false, false, true)
	const buttonIncrement = useRef<HTMLButtonElement | null>(null)
	const buttonDecrement = useRef<HTMLButtonElement | null>(null)
	const [singleTestimonial, setSingleTestimonial] = useState(false)

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

	const indices = [0, 1, 2, 3, 4, 5]
	const cards = indices.map((index) => {
		return <Card key={index} gradient={gradientPicker() ?? ""} />
	})

	const width = useResponsivePixels(useMedia(768, 768, 768, 338))

	const update = (totalTransform: number) => {
		const numBumps = Math.ceil(totalTransform / (width * cards.length))
		gsap.set(".track", {
			x:
				offset.current -
				width * cards.length * numBumps +
				width / 2 -
				getResponsivePixels(48),
			xPercent: -100,
		})
	}

	// set initial track state
	useEffect(() => {
		if (cards.length === 1) {
			setSingleTestimonial(true)
			gsap.set(".track", {
				x: width / 2 - getResponsivePixels(36),
			})
		} else {
			const initialOffset =
				-(width * cards.length) + width / 2 - getResponsivePixels(36)
			gsap.set(".track", {
				x: initialOffset,
			})
			offset.current = initialOffset
			activeIndex.current = cards.length
		}
	}, [cards, width])

	Observer.create({
		target: ".track",
		type: "scroll, touch",
		onLeft: (self) => {
			console.log("left")
		},
		onRight: (self) => {
			console.log("right")
		},
		onChange: (self) => {
			console.log("change")
		},
	})

	const moveTrack = (index: number) => {
		const totalTransform = -(width * index)
		gsap.to(offset, {
			ease: "power3.out",
			current: totalTransform,
			overwrite: true,
			onUpdate: () => {
				update(totalTransform)
			},
		})
	}

	const increment = () => {
		if (!buttonDecrement.current || !buttonIncrement.current) return

		const newIndex = activeIndex.current + 1
		moveTrack(newIndex)
		activeIndex.current = newIndex
	}

	const decrement = () => {
		if (!buttonDecrement.current || !buttonIncrement.current) return

		const newIndex = activeIndex.current - 1
		moveTrack(newIndex)
		activeIndex.current = newIndex
	}

	return (
		<Wrapper>
			<Carousel>
				<TrackWrapper>
					<Track className="track">{cards}</Track>
					{!singleTestimonial && (
						<>
							<Track className="track">{cards}</Track>
							<Track className="track">{cards}</Track>
						</>
					)}
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
	display: flex;
  width: 100%;
  top: 0;
  left: 0;

  ${fresponsive(css`
    width: 1440px;
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
