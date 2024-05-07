import gsap from "gsap"
import loader from "library/Loader"
import { fresponsive, ftablet } from "library/fullyResponsive"
import type { ReactNode } from "react"
import { useRef } from "react"
import styled, { css, keyframes } from "styled-components"

export default function Unmask({
	children,
	parameters,
}: {
	children: ReactNode
	parameters?: GSAPTweenVars
}) {
	const wrapperRef = useRef<HTMLDivElement | null>(null)

	const initScrollTrigger = () => {
		if (!wrapperRef.current) return

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapperRef.current,
				start: "top 90%",
			},
		})

		tl.to(wrapperRef.current?.children, {
			y: 0,
			...parameters,
		})
	}

	loader.useEventListener("anyEnd", initScrollTrigger)

	return <Wrapper ref={wrapperRef}>{children}</Wrapper>
}

export const cssUnmask = keyframes`
	0% {
		translate: 0 100%;
		clip-path: inset(0 0 90% 0);
	}
	100% {
		translate: 0 0;
		clip-path: inset(0 0 -20% 0);
	}
`

const Wrapper = styled.div`
  overflow: clip;
  height: min-content;
  width: fit-content;
  position: relative;
  display: flex;
  ${fresponsive(css`
    padding: 8px;
    margin: -8px;
  `)}

  ${ftablet(css`
    padding: 8px;
    margin: -8px;
  `)}

  & > * {
    position: relative;
    transform: translateY(130%);
  }
`
