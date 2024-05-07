import gsap from "gsap"
import loader from "library/Loader"
import { fresponsive, ftablet } from "library/fullyResponsive"
import type { ReactNode } from "react"
import { useRef } from "react"
import styled, { css } from "styled-components"

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
