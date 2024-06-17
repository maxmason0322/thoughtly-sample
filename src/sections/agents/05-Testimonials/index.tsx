// import { ReactComponent as ArrowSVG } from "images/global/icons/Chev.svg"
// import colors from "styles/colors"
// import { useRef } from "react"
// import useMedia from "library/useMedia"
// import { useResponsivePixels } from "library/viewportUtils"
// import gsap from "gsap"

// export default function Testimonials() {
// 	const buttonIncrement = useRef<HTMLButtonElement | null>(null)
// 	const buttonDecrement = useRef<HTMLButtonElement | null>(null)
// 	const activeIndex = useRef(0)
// 	const carouselRef = useRef<HTMLDivElement | null>(null)
// 	const nextIndex = useRef(1)

// 	const width = useResponsivePixels(useMedia(744, 744, 744, 314))

// 	//  DUMMY CARDS
const indices = [0, 1, 2, 3, 4]
// const cards = indices.map((index) => {
// 	return <Card key={index} number={index} />
// })

// 	const len = cards.length
// 	const prevIndex = useRef(len - 1)

// 	const moveCarousel = (index: number, prev?: number, next?: number) => {
// 		gsap.to(carouselRef.current, {
// 			x: -(width * index),
// 			ease: "power3.out",
// 			overwrite: true,
// 		})
// 	}

// 	const increment = () => {
// 		if (!buttonDecrement.current || !buttonIncrement.current) return
// 		prevIndex.current = activeIndex.current
// 		const newIndex = (activeIndex.current + 1) % len
// 		moveCarousel(newIndex, prevIndex.current, undefined)
// 		activeIndex.current = newIndex
// 	}

// 	const decrement = () => {
// 		if (!buttonDecrement.current || !buttonIncrement.current) return
// 		nextIndex.current = activeIndex.current
// 		const newIndex = (activeIndex.current - 1 + len) % len
// 		moveCarousel(newIndex, undefined, nextIndex.current)
// 		activeIndex.current = newIndex
// 	}

// 	return (
// 		<Wrapper>
// 			<CarouselWrapper>
// 				<Carousel ref={carouselRef}>{cards}</Carousel>
// 			</CarouselWrapper>
// 			<Buttons>
// 				<Button aria-label="previous" ref={buttonDecrement} onClick={decrement}>
// 					<ArrowSVG />
// 				</Button>
// 				<Button aria-label="next" ref={buttonIncrement} onClick={increment}>
// 					<ArrowSVG />
// 				</Button>
// 			</Buttons>
// 		</Wrapper>
// 	)
// }

// const Wrapper = styled.section`
//   display: flex;
//   flex-direction: column;
//   position: relative;

//   ${fresponsive(css`
//     width: 100%;
//     height: 835px;
//     padding: 103px 0 154px;
//     gap: 36px;
//   `)}
// `

// const CarouselWrapper = styled.div`
//   height: 100;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// const Carousel = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;

//   ${fresponsive(css`
//     gap: 24px;
//   `)}
// `

// const Buttons = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;

//   ${fresponsive(css`
//     gap: 24px;
//   `)}
// `

// const Button = styled.button`
//   cursor: pointer;
//   border: 1.5px solid ${colors.gray200};
//   justify-content: center;
//   align-items: center;
//   background: ${colors.white};

//   ${fresponsive(css`
//     width: 68px;
//     height: 68px;
//     padding: 18.25px;
//     border-radius: 76px;
//     box-shadow: 0 5px 12px 0 rgba(49 75 45 / 4%);

//     /* svg {
//       width: 31.5px;
//       height: auto;
//     } */
//   `)}

//   &:first-of-type {
//     svg {
//       transform: rotate(180deg);
//     }
//   }
// `

// import {
// 	Children,
// 	type ReactNode,
// 	useCallback,
// 	useEffect,
// 	useMemo,
// 	useState,
// } from "react"
// import styled from "styled-components"

// export default function Testimonials({ children }: { children: ReactNode }) {
// 	const visibleItemsCount = 3
// 	const originalItemsLength = useMemo(
// 		() => Children.count(children),
// 		[children],
// 	)
// 	const [currentIndex, setCurrentIndex] = useState(visibleItemsCount)
// 	const [isTransitionEnabled, setTransitionEnabled] = useState(true)
// 	const [touchPosition, setTouchPosition] = useState(null)

// 	useEffect(() => {
// 		if (
// 			currentIndex === visibleItemsCount ||
// 			currentIndex === originalItemsLength
// 		) {
// 			setTransitionEnabled(true)
// 		}
// 	}, [currentIndex, originalItemsLength])

// 	const navigateItem = useCallback((direction: "next" | "prev") => {
// 		setCurrentIndex((prevState) =>
// 			direction === "next" ? prevState + 1 : prevState - 1,
// 		)
// 	}, [])

// 	const handleTouchStart = useCallback((e) => {
// 		const touchDown = e.touches[0].clientX
// 		setTouchPosition(touchDown)
// 	}, [])

// 	const handleTouchMove = useCallback(
// 		(e) => {
// 			const touchDown = touchPosition

// 			if (touchDown === null) {
// 				return
// 			}

// 			const currentTouch = e.touches[0].clientX
// 			const diff = touchDown - currentTouch

// 			if (diff > 5) {
// 				navigateItem("next")
// 			}

// 			if (diff < -5) {
// 				navigateItem("prev")
// 			}

// 			setTouchPosition(null)
// 		},
// 		[touchPosition, navigateItem],
// 	)

// 	const handleTransitionEnd = useCallback(() => {
// 		if (currentIndex === 0) {
// 			setTransitionEnabled(false)
// 			setCurrentIndex(originalItemsLength)
// 		} else if (currentIndex === originalItemsLength + visibleItemsCount) {
// 			setTransitionEnabled(false)
// 			setCurrentIndex(visibleItemsCount)
// 		}
// 	}, [currentIndex, originalItemsLength])

// 	const generateExtraItems = useCallback(
// 		(direction: "prev" | "next") => {
// 			const output = []
// 			for (let index = 0; index < visibleItemsCount; index++) {
// 				const itemIndex =
// 					direction === "prev" ? originalItemsLength - 1 - index : index
// 				output.push(Children.toArray(children)[itemIndex])
// 			}
// 			return direction === "prev" ? output.reverse() : output
// 		},
// 		[children, originalItemsLength],
// 	)

// 	const extraPreviousItems = useMemo(
// 		() => generateExtraItems("prev"),
// 		[generateExtraItems],
// 	)

// 	const extraNextItems = useMemo(
// 		() => generateExtraItems("next"),
// 		[generateExtraItems],
// 	)

// 	return (
// 		<StyledCarousel>
// 			<Inner>
// 				<PrevButton type="button" onClick={() => navigateItem("prev")}>
// 					<LeftArrow />
// 				</PrevButton>
// 				<ContentWrapper
// 					onTouchStart={handleTouchStart}
// 					onTouchMove={handleTouchMove}
// 				>
// 					<Content
// 						style={{
// 							transform: `translateX(-${
// 								currentIndex * (100 / visibleItemsCount)
// 							}%)`,
// 							transition: !isTransitionEnabled ? "none" : undefined,
// 						}}
// 						onTransitionEnd={handleTransitionEnd}
// 					>
// 						{extraPreviousItems}
// 						{children}
// 						{extraNextItems}
// 					</Content>
// 				</ContentWrapper>
// 				<NextButton type="button" onClick={() => navigateItem("next")}>
// 					<RightArrow />
// 				</NextButton>
// 			</Inner>
// 		</StyledCarousel>
// 	)
// }

// const Content = styled.div`
//   display: flex;
//   transition: all 250ms linear;
//   -ms-overflow-style: none;
//   scrollbar-width: none;

//   ::-webkit-scrollbar {
//     display: none;
//   }

//   > * {
//     flex-shrink: 0;
//     flex-grow: 1;
//     width: calc(100% / 3);
//   }
// `

// const StyledCarousel = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   height: 300px;
//   justify-content: center;
//   align-items: center;
// `

// const Inner = styled.div`
//   display: flex;
//   width: 100%;
//   position: relative;
//   align-items: center;
// `

// const Button = styled.button`
//   position: absolute;
//   z-index: 1;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 48px;
//   height: 48px;
//   border-radius: 24px;
//   background-color: white;
//   border: 1px solid #ddd;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 150ms linear;

//   &:hover {
//     background-color: #ddd;
//   }

//   &:focus {
//     outline: none;
//   }
// `

// const PrevButton = styled(Button)`
//   left: 50px;
// `

// const NextButton = styled(Button)`
//   right: 150px;
// `

// const ContentWrapper = styled.div`
//   overflow: hidden;
//   width: 100%;
//   height: 100%;
// `

// const LeftArrow = styled.span`
//   display: block;
//   width: 0;
//   height: 0;
//   border-top: 7.5px solid transparent;
//   border-bottom: 7.5px solid transparent;
//   border-right: 10px solid #484848;
//   border-left: 5px solid transparent;
//   transform: translateX(-25%);
// `

// const RightArrow = styled.span`
//   display: block;
//   width: 0;
//   height: 0;
//   border-top: 7.5px solid transparent;
//   border-bottom: 7.5px solid transparent;
//   border-left: 10px solid #484848;
//   border-right: 5px solid transparent;
//   transform: translateX(25%);
// `

import Carousel from "./Carousel"

export default function Testimonials() {
	return (
		<div className="App">
			<Carousel>
				{/* {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i, k) => (
					<div style={{ fontSize: 24 }} key={k}>
						{i}
					</div> */}
				{/* {indices.map((index) => {
					return <Card key={index} number={index} />
				})} */}
				{/* ))} */}
			</Carousel>
		</div>
	)
}
