import gsap from "gsap"
import { ReactComponent as ConnectorSVG } from "images/global/connector.svg"
import { ReactComponent as LogoSVG } from "images/global/logo.svg"
import { usePreloader } from "library/Loader/PreloaderUtils"
import { fmobile, fresponsive } from "library/fullyResponsive"
import getMedia from "library/getMedia"
import useAnimation from "library/useAnimation"
import { getResponsivePixels } from "library/viewportUtils"
import { useRef } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"

export default function Preloader() {
	const wrapperRef = useRef<HTMLDivElement>(null)
	const clipperRef = useRef<HTMLDivElement>(null)

	const tl = useAnimation(() => {
		const tl = gsap
			.timeline({ repeat: -1 })
			.to(clipperRef.current?.children ?? null, {
				duration: 0.5,
				xPercent: -200,
				x: () => getResponsivePixels(2),
				ease: "linear",
			})
			.timeScale(0)

		gsap.to(tl, { timeScale: 1, duration: 1, ease: "power1.inOut" })

		return tl
	}, [])

	usePreloader({
		duration: 0,
		callback: () => {
			if (!tl) return

			const scaleFactor = getMedia(1, 1, 1, 2)

			gsap.killTweensOf(tl)
			gsap.to(tl, { timeScale: 0, duration: 1 })
			tl.tweenTo(1, { ease: "power1.inOut", duration: 1 })

			gsap.to(clipperRef.current, {
				x: getResponsivePixels(17 * 7.7) / scaleFactor - getMedia(0, 0, 0, 1.5),
				width: getResponsivePixels(17) / scaleFactor,
				paddingLeft: getResponsivePixels(1),
				duration: 0.4,
			})

			const [logoLeft, logoRight] = [...(wrapperRef.current?.children ?? [])]

			gsap.set([logoLeft, logoRight], { display: "block" })
			const params = { duration: 0.8, ease: "power3.inOut", delay: 0.3 }
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
		duration: 2,
		callback: () => {
			gsap.to(wrapperRef.current, {
				yPercent: -100,
				duration: 1,
				delay: 1,
				ease: "power3.inOut",
				onComplete: () => {
					gsap.set(wrapperRef.current, { display: "none" })
				},
			})
		},
	})

	usePreloader({
		only: "whenScrolled",
		duration: 3,
		callback: () => {
			gsap.to(wrapperRef.current, {
				opacity: 0,
				duration: 1,
				delay: 2,
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

const Connector = styled(ConnectorSVG)`
  ${fresponsive(css`
    width: 17px;
    min-width: 17px;
    max-width: unset;
    display: block;
    margin-left: -1px;

    &:nth-child(odd) {
      scale: 1 -1;
    }

    &:last-child {
      margin-right: -34px;
    }
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
