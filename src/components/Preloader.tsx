import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { useRegisterLoaderCallback } from "library/Loader/LoaderUtils"
import { useRef, useState } from "react"
import styled from "styled-components"
import textStyles from "styles/text"

export default function Preloader() {
	const wrapperRef = useRef<HTMLDivElement>(null)
	const [progress, setProgress] = useState(0)

	useRegisterLoaderCallback({
		duration: 1,
		callback: () => {
			ScrollSmoother.get()?.scrollTop(0)

			gsap.to(wrapperRef.current, {
				y: "-100vh",
				duration: 1,
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
  ${textStyles.h1}
`
