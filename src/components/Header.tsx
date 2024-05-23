import PrimaryButton from "components/Buttons/Primary"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { ReactComponent as LogoSVG } from "images/global/logo.svg"
import { loader } from "library/Loader"
import UniversalLink from "library/Loader/UniversalLink"
import { ScreenContext } from "library/ScreenContext"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { getResponsivePixels } from "library/viewportUtils"
import { useContext, useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import links from "utils/links"
import Link from "./Buttons/Link"

gsap.registerPlugin(ScrollToPlugin)

export default function Header() {
	const { mobile } = useContext(ScreenContext)
	const innerRef = useRef<HTMLDivElement | null>(null)
	const [menuOpen, setMenuOpen] = useState(false)
	const lineRef1 = useRef<SVGLineElement | null>(null)
	const lineRef2 = useRef<SVGLineElement | null>(null)
	const lineRef3 = useRef<SVGLineElement | null>(null)
	const blurRef = useRef<HTMLDivElement | null>(null)
	const menuRef = useRef<HTMLDivElement | null>(null)

	const openTimeline = useAnimation(() => {
		const tl = gsap.timeline({ paused: true })

		tl.to(
			[lineRef1.current, lineRef2.current],
			{
				attr: {
					x1: 0,
					x2: 36,
					y1: -2,
					y2: 14,
				},
			},
			0,
		)

		tl.to(
			lineRef3.current,
			{
				attr: {
					x1: 0,
					x2: 36,
					y1: 14,
					y2: -2,
				},
			},
			0,
		)

		tl.set(
			blurRef.current,
			{
				display: "flex",
			},
			0,
		)

		tl.to(
			blurRef.current,
			{
				opacity: 1,
			},
			0,
		)

		tl.fromTo(
			menuRef.current,
			{
				xPercent: 110,
			},
			{
				xPercent: 0,
			},
			0,
		)

		return tl
	}, [])

	useEffect(() => {
		if (openTimeline) {
			if (menuOpen) {
				openTimeline.play()
			} else {
				openTimeline.reverse()
			}
		}
	}, [openTimeline, menuOpen])

	const initTimeline = useAnimation(() => {
		const tl = gsap.timeline({
			paused: true,
		})

		tl.fromTo(
			innerRef.current,
			{
				y: () => getResponsivePixels(-200),
			},
			{
				y: 0,
				duration: 2,
				ease: "power3.out",
				delay: 0.25,
			},
		)

		return tl
	}, [])

	loader.useEventListener("end", () => {
		initTimeline?.play()
	})

	return (
		<Wrapper>
			{mobile && (
				<>
					<Blur ref={blurRef} />
					<Menu ref={menuRef}>poo</Menu>
				</>
			)}

			<Inner ref={innerRef}>
				<Left>
					<UniversalLink to={links.home}>
						<StyledLogoSVG />
					</UniversalLink>
					<Links>
						<Link to={links.industries}>Industries</Link>
						<Link to={links.integrations}>Integrations</Link>
						<Link to={links.pricing}>Pricing</Link>
						<Link to={links.helpCenter}>Support</Link>
						<Link to={links.blog}>Blog</Link>
					</Links>
				</Left>
				<Right>
					{mobile && (
						<>
							<Hamburger
								type="button"
								onClick={() => setMenuOpen((val) => !val)}
							>
								<Lines viewBox="0 0 36 12" overflow="visible">
									<Line ref={lineRef1} x1={0} x2={36} y1={0.5} y2={0.5} />
									<Line ref={lineRef2} x1={0} x2={36} y1={6} y2={6} />
									<Line ref={lineRef3} x1={0} x2={36} y1={11.5} y2={11.5} />
								</Lines>
							</Hamburger>
						</>
					)}
					{!mobile && (
						<>
							<PrimaryButton variant="secondary" to={links.login}>
								Sign In
							</PrimaryButton>
							<PrimaryButton icon="chev" to={links.login}>
								Get Started
							</PrimaryButton>
						</>
					)}
				</Right>
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.header`
  width: 100vw;
  display: grid;
  place-items: center;
  position: absolute;
  z-index: 9;
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${fresponsive(css`
    padding: 32px 156px 0;
  `)}

  ${ftablet(css`
    padding: 48px 68px 0;
  `)}

  ${fmobile(css`
    padding: 24px 28.5px 0;
  `)}
`

const StyledLogoSVG = styled(LogoSVG)`
  height: auto;

  ${fresponsive(css`
    width: 138px;
  `)}

  ${fmobile(css`
    width: 103.5px;
  `)}
`

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${fresponsive(css`
    gap: 36px;
  `)}
`

const Right = styled.div`
  display: flex;
  flex-direction: row;

  ${fresponsive(css`
    gap: 16px;
  `)}

  ${fmobile(css`
    gap: 11px;
  `)}
`

const Links = styled.div`
  display: flex;
  flex-direction: row;

  ${fresponsive(css`
    gap: 24px;
  `)}

  ${ftablet(css`
    display: none;
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const Hamburger = styled(UniversalLink)`
  display: grid;
  place-items: center;
  
  ${fmobile(css`
    border: 1.5px solid ${colors.gray300};
    box-shadow: 0 18px 32px 0 rgba(89 89 89 / 4%);
    border-radius: 14px;
    width: 84px;
    height: 50px;
  `)}
`

const Line = styled.line`
  stroke: ${colors.black};
  stroke-width: 1px;
`

const Lines = styled.svg`
  ${fresponsive(css`
    width: 36px;
    height: 12px;
  `)}
`

const Blur = styled.div`
	position: absolute;
	z-index: 0;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(219 219 219 / 15%);
	backdrop-filter: blur(4.5px);
	display: none;
	opacity: 0;
`

const Menu = styled.div`
	position: absolute;
	background: ${gradients.surface1};

	${fresponsive(css`
		width: 319px;
		top: 86px;
		left: 28px;
		padding: 24px;
		border: 1.5px solid ${colors.gray300};
		border-radius: 14px;
	`)}
`
