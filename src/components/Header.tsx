import PrimaryButton from "components/Buttons/Primary"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { ReactComponent as LogoSVG } from "images/global/logo.svg"
import loader from "library/Loader"
import UniversalLink from "library/Loader/UniversalLink"
import { ScreenContext } from "library/ScreenContext"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useContext, useRef } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles from "styles/text"
import links from "utils/links"
import Link from "./Buttons/Link"
import Icon from "./Icon"
import { CalendlyModalContext } from "./Providers/CalendlyModalProvider"

gsap.registerPlugin(ScrollToPlugin)

export default function Header() {
	const { mobile } = useContext(ScreenContext)
	const innerRef = useRef<HTMLDivElement | null>(null)
	const { setModalOpen } = useContext(CalendlyModalContext)

	const initTimeline = useAnimation(() => {
		const tl = gsap.timeline({
			paused: true,
		})

		tl.to(innerRef.current, {
			y: 0,
			duration: 2,
			ease: "power3.out",
			delay: 0.25,
		})

		return tl
	}, [])

	loader.useEventListener("anyEnd", () => {
		initTimeline?.play()
	})

	return (
		<Wrapper>
			<Inner ref={innerRef}>
				<Left>
					<UniversalLink to={links.home}>
						<StyledLogoSVG />
					</UniversalLink>
					<Links>
						<Link to={links.industries}>Industries</Link>
						<Link to={links.features}>Features</Link>
						<Link to={links.integrations}>Integrations</Link>
						<Link to={links.pricing}>Pricing</Link>
						<Link to={links.helpCenter}>Support</Link>
					</Links>
				</Left>
				<Right>
					{mobile && (
						<>
							<MobileButton to={links.login}>Sign In</MobileButton>
							<MobileButton to={links.login}>
								Get Started <StyledIcon name="chev" />
							</MobileButton>
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
  overflow: clip;
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
    transform: translateY(-200px);
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

const MobileButton = styled(UniversalLink)`
  ${textStyles.sh4}
  color: ${colors.black};
  display: flex;
  align-items: center;

  ${fresponsive(css`
    padding: 8px 10px;
    gap: 2px;
  `)}
`

const StyledIcon = styled(Icon)`
  ${fmobile(css`
    width: 12px;
    height: 12px;
  `)}
`
