import gsap from "gsap"
import loader from "library/Loader"
import { fresponsive } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import type { ReactNode } from "react"
import { useRef, useState } from "react"
import styled, { css } from "styled-components"

export default function Unmask({ children }: { children: ReactNode }) {
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
			})
		}

		if (pageLoad) {
			initScrollTrigger()
		}
	}, [pageLoad])

	return <Wrapper ref={wrapperRef}>{children}</Wrapper>
}

const Wrapper = styled.div`
  overflow: clip;
  height: min-content;
  width: fit-content;
  position: relative;
  display: flex;

	${fresponsive(css`
		padding-bottom: 5px;
	`)}

  & > * {
    position: relative;
    transform: translateY(100%);
  }
`
