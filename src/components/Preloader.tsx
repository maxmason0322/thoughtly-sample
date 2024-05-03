import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { useRegisterLoaderCallback } from "library/Loader/LoaderUtils"
import { useRef } from "react"
import styled from "styled-components"
import colors from "styles/colors"

export default function Preloader() {
	const wrapperRef = useRef<HTMLDivElement>(null)

	useRegisterLoaderCallback({
		duration: 0.25,
		callback: () => {
			ScrollSmoother.get()?.scrollTop(0)

			gsap.to(wrapperRef.current, {
				autoAlpha: 0,
				duration: 0.25,
			})
		},
	})

	return <Wrapper ref={wrapperRef} />
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  pointer-events: none;
  display: grid;
  place-items: center;
  background-color: ${colors.white};
`
