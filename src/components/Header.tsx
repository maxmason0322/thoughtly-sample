import PrimaryButton from "components/Buttons/Primary"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { ReactComponent as LogoSVG } from "images/global/logo.svg"
import { fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import { desktopBreakpoint } from "styles/media"
import links from "utils/links"
import Link from "./Buttons/Link"

gsap.registerPlugin(ScrollToPlugin)

export default function Header() {
	const scrollTo = (section: string, offset: number) => {
		gsap.to(window, {
			scrollTo: {
				y: section,
				offsetY: offset,
			},
		})
	}

	return (
		<Wrapper>
			<Inner>
				<Left>
					<StyledLogoSVG />
					<Links>
						<Link type="button" onClick={() => scrollTo("#industries", 0)}>
							Industries
						</Link>
						<Link type="button" onClick={() => scrollTo("#features", 0)}>
							Features
						</Link>
						<Link type="button" onClick={() => scrollTo("#integrations", 500)}>
							Integrations
						</Link>
						<Link type="button" onClick={() => scrollTo("#pricing", 250)}>
							Pricing
						</Link>
						<Link to={links.todo}>Support</Link>
					</Links>
				</Left>
				<Right>
					<PrimaryButton variant="secondary" to={links.todo}>
						Sign In
					</PrimaryButton>
					<PrimaryButton icon="chev" to={links.todo}>
						Get Started
					</PrimaryButton>
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
  `)}

  ${ftablet(css`
    padding: 48px 68px 0;
  `)}
`

const StyledLogoSVG = styled(LogoSVG)`
  height: auto;

  ${fresponsive(css`
    width: 138px;
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
`
