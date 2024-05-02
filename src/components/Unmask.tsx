import gsap from "gsap"
import loader from "library/Loader"
import { fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import type { ReactNode } from "react"
import { useRef, useState } from "react"
import styled, { css, keyframes } from "styled-components"

export default function Unmask({
	children,
	parameters,
}: {
	children: ReactNode
	parameters?: GSAPTweenVars
}) {
	const wrapperRef = useRef<HTMLDivElement | null>(null)
	const [pageLoad, setPageLoad] = useState(false)

	loader.useEventListener("anyEnd", () => setPageLoad(true))

	useAnimation(() => {
		const initScrollTrigger = () => {
			if (!wrapperRef.current) return

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: wrapperRef.current,
					start: "top 75%",
				},
			})

			tl.to(wrapperRef.current?.children, {
				y: 0,
				...parameters,
			})
		}

		if (pageLoad) {
			initScrollTrigger()
		}
	}, [pageLoad, parameters])

	return <Wrapper ref={wrapperRef}>{children}</Wrapper>
}

export const cssUnmask = keyframes`
	0% {
		translate: 0 100%;
		clip-path: inset(0 0 100% 0);
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
    padding: 6px;
    margin: -6px;
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
