import gsap from "gsap"
import {
	registerTransition,
	unregisterTransition,
} from "library/Loader/TransitionUtils"
import { useEffect, useRef } from "react"
import styled from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

export default function Transition() {
	const wrapperRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const fadeIn = () => {
			gsap.fromTo(
				wrapperRef.current,
				{
					opacity: 0,
				},
				{
					duration: 1,
					opacity: 1,
					ease: "power1.in",
				},
			)
		}

		const fadeOut = () => {
			gsap.fromTo(
				wrapperRef.current,
				{
					opacity: 1,
				},
				{
					duration: 1,
					opacity: 0,
					ease: "power1.out",
				},
			)
		}

		// register two page transitions
		registerTransition("fade", {
			in: fadeIn,
			out: fadeOut,
			inDuration: 1,
			outDuration: 1,
		})

		return () => {
			unregisterTransition("fade", [fadeIn, fadeOut])
		}
	}, [])

	return <Wrapper ref={wrapperRef}></Wrapper>
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${colors.white};
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  display: grid;
  place-items: center;
  ${textStyles.h1}
`
