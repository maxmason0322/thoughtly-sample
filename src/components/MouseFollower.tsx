import DemoButton from "components/Buttons/DemoButton"
import gsap from "gsap"
import { isBrowser } from "library/deviceDetection"
import { fresponsive } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"

interface MouseFollowerProps {
	/**
	 * element to track mouse in and out events on
	 * defaults to the parent element
	 */
	trackElement?: Element | null
}

export default function MouseFollower({ trackElement }: MouseFollowerProps) {
	const wrapperRef = useRef<HTMLDivElement>(null)

	const [isClient, setIsClient] = useState(false)
	useEffect(() => {
		if (isBrowser) setIsClient(true)
	}, [])

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const { clientX, clientY } = e
			const { innerWidth, innerHeight } = window
			const centerX = innerWidth / 2
			const centerY = innerHeight / 2

			const deltaX = clientX - centerX
			const deltaY = clientY - centerY

			const distance = deltaX * deltaX + deltaY * deltaY
			const maxDistance = centerX * centerX + centerY * centerY

			let rotationAngle: number | undefined

			if (deltaX > 0) {
				rotationAngle = (distance / maxDistance) * 10
			} else {
				rotationAngle = -(distance / maxDistance) * 10
			}

			gsap.set(wrapperRef.current?.children ?? null, {
				transform: `rotate(${rotationAngle}deg)`,
			})
		}

		window.addEventListener("mousemove", handleMouseMove)

		return () => {
			window.removeEventListener("mousemove", handleMouseMove)
		}
	}, [])

	useAnimation(() => {
		if (!isClient) return
		const mouse = {
			x: 0,
			y: 0,
		}
		let mouseIsInside = false
		const xTo = gsap.quickTo(wrapperRef.current, "x", {
			duration: 0.2,
			ease: "power2.out",
		})
		const yTo = gsap.quickTo(wrapperRef.current, "y", {
			duration: 0.2,
			ease: "power2.out",
		})
		const parentEl = wrapperRef.current?.parentElement
		if (!parentEl) return
		let previousBounds: DOMRect | undefined
		const onMouseMove = (e: MouseEvent) => {
			const parentBounds = parentEl.getBoundingClientRect()
			previousBounds = parentBounds

			mouse.x = e.clientX - parentBounds.left
			mouse.y = e.clientY - parentBounds.top
			if (!mouseIsInside) return
			xTo(e.clientX - parentBounds.left)
			yTo(e.clientY - parentBounds.top)
		}
		const onLeave = () => {
			gsap.to(wrapperRef.current, {
				scale: 0,
				ease: "back.in",
			})
			mouseIsInside = false
		}
		const onEnter = () => {
			gsap.delayedCall(0.25, () => {
				if (mouseIsInside) {
					gsap.to(wrapperRef.current, {
						scale: 1,
						ease: "elastic.out(1, 0.75)",
					})
				}
			})
			mouseIsInside = true
		}

		const onScroll = () => {
			if (!mouseIsInside) return
			const parentBounds = parentEl.getBoundingClientRect()
			if (!previousBounds) return
			mouse.x += previousBounds.left - parentBounds.left
			mouse.y += previousBounds.top - parentBounds.top
			xTo(mouse.x)
			yTo(mouse.y)
			previousBounds = parentBounds

			// do a quick check to see if the mouse is still inside the parent
			// in some browsers, onLeave is not called when scrolling
			const trackingBounds =
				trackElement?.getBoundingClientRect() ?? parentBounds
			if (
				mouse.x + parentBounds.left < trackingBounds.left ||
				mouse.x + parentBounds.left > trackingBounds.right ||
				mouse.y + parentBounds.top < trackingBounds.top ||
				mouse.y + parentBounds.top > trackingBounds.bottom
			) {
				onLeave()
			}
		}

		const trackingEl = trackElement ?? parentEl

		window.addEventListener("scroll", onScroll, {
			passive: true,
		})
		window.addEventListener("mousemove", onMouseMove)
		trackingEl.addEventListener("mouseleave", onLeave)
		trackingEl.addEventListener("mouseenter", onEnter)
		return () => {
			window.removeEventListener("scroll", onScroll)
			window.removeEventListener("mousemove", onMouseMove)
			trackingEl.removeEventListener("mouseleave", onLeave)
			trackingEl.removeEventListener("mouseenter", onEnter)
		}
	}, [isClient, trackElement])

	if (!isClient) return null
	return (
		<Wrapper ref={wrapperRef}>
			<DemoButton to="tel:+18557170250">Call for a Live Demo</DemoButton>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  position: absolute;
  pointer-events: none;
  z-index: 10;
  color: #000;
  transform-origin: center;

  ${fresponsive(css`
    left: -85px;
    top: -35px;
    transform: scale(0);
  `)}
`
