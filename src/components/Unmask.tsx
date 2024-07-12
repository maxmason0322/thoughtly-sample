import gsap from "gsap"
import { fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import type { ReactNode } from "react"
import { useRef } from "react"
import styled, { css } from "styled-components"
import { useDeepCompareMemo } from "use-deep-compare"

export default function Unmask({
	children,
	parameters,
	disabled,
}: {
	children: ReactNode
	parameters?: GSAPTweenVars
	disabled?: boolean
}) {
	const wrapperRef = useRef<HTMLDivElement | null>(null)
	const stableParameters = useDeepCompareMemo(() => parameters, [parameters])

	useAnimation(() => {
		if (!wrapperRef.current) return
		if (disabled) return
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapperRef.current,
				start: "top 90%",
			},
		})

		tl.to(wrapperRef.current.children, {
			y: 0,
			opacity: 1,
			...stableParameters,
		})
	}, [stableParameters, disabled])

	return (
		<Wrapper $disabled={disabled} ref={wrapperRef}>
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.div<{ $disabled?: boolean }>`
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
		transform: ${({ $disabled }) => ($disabled ? "none" : "translateY(130%)")};
		will-change: transform;

		${ftablet(css`
			opacity: 0;
			transform: translateY(0);
		`)}
	}
`
