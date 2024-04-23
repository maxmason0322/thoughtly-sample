import gsap from "gsap"
import useAnimation from "library/useAnimation"
import type { ReactNode } from "react"
import { useRef } from "react"
import styled, { css } from "styled-components"

export default function Unmask({ children }: { children: ReactNode }) {
	const wrapperRef = useRef<HTMLDivElement | null>(null)

	useAnimation(() => {
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
	}, [])

	return <Wrapper ref={wrapperRef}>{children}</Wrapper>
}

const Wrapper = styled.div`
  overflow: clip;
  height: min-content;
  width: fit-content;
  position: relative;
  display: flex;

  & > * {
    position: relative;
    transform: translateY(100%);
  }
`
