import gsap from "gsap"
import { ReactComponent as ConnectorSVG } from "images/global/connector.svg"
import { ReactComponent as LogoSVG } from "images/global/logo.svg"
import { usePreloader } from "library/Loader/PreloaderUtils"
import { fmobile, fresponsive } from "library/fullyResponsive"
import getMedia from "library/getMedia"
import { getResponsivePixels } from "library/viewportUtils"
import { useRef } from "react"
import styled, { css, keyframes } from "styled-components"
import colors from "styles/colors"

export const BEAT_ONE_DURATION = 0.7
export const BEAT_TWO_DURATION = 0.7

export default function Preloader() {
	const wrapperRef = useRef<HTMLDivElement>(null)
	const clipperRef = useRef<HTMLDivElement>(null)

	usePreloader({
		duration: 0,
		callback: () => {
			const finalConnector =
				wrapperRef.current?.querySelector(".final-connector") ?? null
			const scaleFactor = getMedia(1, 1, 1, 2)
			const [logoLeft, logoRight] = [...(wrapperRef.current?.children ?? [])]

			const slideProps = {
				duration: (BEAT_ONE_DURATION * 2) / 3,
				ease: "power3.inOut",
			}

			gsap.to(clipperRef.current, {
				x: getResponsivePixels(19 * 7.7) / scaleFactor - getMedia(0, 0, 0, 1.5),
				width: getResponsivePixels(17) / scaleFactor,
				paddingLeft: getResponsivePixels(1),
				...slideProps,
			})

			// switch to a static connector
			gsap.set(finalConnector, { opacity: 1 })
			gsap.to(finalConnector, {
				x: getResponsivePixels(131) / scaleFactor,
				...slideProps,
			})
			gsap.from(finalConnector, {
				clipPath: "inset(0 0 0 100%)",
				duration: slideProps.duration - 0.1,
			})
			gsap.to(clipperRef.current, {
				clipPath: "inset(0 100% 0 0)",
				...slideProps,
			})

			// animate in the logo
			const params = {
				duration: (BEAT_ONE_DURATION * 2) / 3,
				ease: "power3.inOut",
				delay: BEAT_ONE_DURATION / 4,
			}
			gsap.set([logoLeft, logoRight], { display: "block" })
			gsap.fromTo(
				logoLeft ?? null,
				{
					clipPath: "inset(0 100% 0 0%)",
				},
				{
					clipPath: "inset(0 17% 0 0)",
					...params,
				},
			)
			gsap.fromTo(
				logoRight ?? null,
				{
					clipPath: "inset(0 0 0 100%)",
				},
				{
					clipPath: "inset(0 0 0 83%)",
					...params,
				},
			)
		},
	})

	usePreloader({
		only: "whenAtTop",
		critical: true,
		duration: BEAT_ONE_DURATION + BEAT_TWO_DURATION,
		callback: () => {
			gsap.to(wrapperRef.current, {
				yPercent: -100,
				duration: BEAT_TWO_DURATION,
				delay: BEAT_ONE_DURATION,
				ease: "power3.inOut",
				onComplete: () => {
					gsap.set(wrapperRef.current, { display: "none" })
				},
			})
		},
	})

	usePreloader({
		critical: true,
		only: "whenScrolled",
		duration: BEAT_TWO_DURATION + BEAT_ONE_DURATION,
		callback: () => {
			gsap.to(wrapperRef.current, {
				opacity: 0,
				duration: BEAT_TWO_DURATION,
				delay: BEAT_ONE_DURATION,
				ease: "power3.inOut",
				onComplete: () => {
					gsap.set(wrapperRef.current, { display: "none" })
				},
			})
		},
	})

	// biome-ignore lint/suspicious/noArrayIndexKey: repeating
	const connectors = new Array(31).fill(0).map((_, i) => <Connector key={i} />)

	return (
		<Wrapper ref={wrapperRef}>
			<Logo />
			<Logo />
			<FinalConnector className="final-connector" />
			<Clipper ref={clipperRef}>{connectors}</Clipper>
		</Wrapper>
	)
}

const Logo = styled(LogoSVG)`
	${fresponsive(css`
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		height: 123px;
		display: none;
	`)}
`

const Clipper = styled.div`
	overflow: clip;
	display: flex;
`

const marquee = keyframes`
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(calc(-200% + 2px));
	}
`

const Connector = styled(ConnectorSVG)`
	${fresponsive(css`
		width: 17px;
		min-width: 17px;
		max-width: unset;
		display: block;

		&:nth-child(odd) {
			scale: 1 -1;
		}

		&:last-child {
			margin-right: -34px;
		}
	`)}

	margin-left: -1px;
	animation:
		${marquee} 0.5s 0.75s linear infinite,
		${marquee} 0.75s 0s ease-in;
`

const FinalConnector = styled(Connector)`
	position: absolute;
	animation: unset;
	opacity: 0;
	${fresponsive(css`
		translate: -238px;
	`)}

	${fmobile(css`
		translate: -97px;
		transform: scale(0.5);
	`)}
`

const Wrapper = styled.div`
	position: fixed;
	width: 100lvw;
	height: 100lvh;
	top: 0;
	left: 0;
	z-index: 8;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${colors.beige200};

	${fmobile(css`
		& > * {
			scale: 0.5;
		}
	`)}
`
