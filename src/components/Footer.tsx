import { useLocation } from "@reach/router"
import Button from "components/Buttons/Primary"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { ReactComponent as LogoSVG } from "images/global/logo.svg"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import { pathnameMatches } from "library/functions"
import useMedia from "library/useMedia"
import { useContext } from "react"
import styled, { css } from "styled-components"
import { Dots } from "styles/background"
import colors from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles from "styles/text"
import links from "utils/links"
import Link from "./Buttons/Link"
import { CalendlyModalContext } from "./Providers/CalendlyModalProvider"

gsap.registerPlugin(ScrollToPlugin)

export default function Footer({ position }: { position: "fixed" | "static" }) {
	const mobile = useMedia(false, false, false, true)
	const pathname = useLocation().pathname
	const { setModalOpen } = useContext(CalendlyModalContext)

	if (!pathname) return null

	const fixedRoutes = [links.home, links.terms, links.privacy]

	const isFixed = fixedRoutes.some((route) => pathnameMatches(pathname, route))

	const primary = isFixed && !mobile ? "fixed" : "static"

	if (primary === "fixed" && position === "static") return <Spacer />
	if (primary === "static" && position === "fixed") return null

	return (
		<Wrapper $position={position}>
			<Inner>
				<StyledDots />
				<Top>
					<LogoAddress>
						<UniversalLink to={links.home} ariaLabel="Thoughtly">
							<Logo />
						</UniversalLink>
						<Address>41 E 11th St, 11th Floor, New York, NY 10003</Address>
					</LogoAddress>
					<Columns>
						<LinkColumn>
							<Label>Product</Label>
							<Link to={links.pricing}>Pricing</Link>
							<Link to={links.todo} tag="Coming Soon">
								Platform
							</Link>
							<Link to={links.todo} tag="Coming Soon">
								Solutions
							</Link>
							<Link to={links.todo} tag="Coming Soon">
								Customers
							</Link>
						</LinkColumn>
						<LinkColumn>
							<Label>Company</Label>
							<Link to={links.mediaInquiries}>Media Inquiries</Link>
							<Link to={links.careers}>Careers</Link>
							<Link to={links.todo} tag="Coming Soon">
								About
							</Link>
							<Link to={links.todo} tag="Coming Soon">
								Blog
							</Link>
						</LinkColumn>
						<LinkColumn>
							<Label>Support</Label>
							<Link to={links.helpCenter}>Help Center</Link>
							<Link to={links.apiDocs}>API Docs</Link>
							<Link type="button" onClick={() => setModalOpen(true)}>
								Contact Us
							</Link>
						</LinkColumn>
						{mobile && (
							<LinkColumn>
								<Label>Socials</Label>
								<Link to={links.instagram}>Instagram</Link>
								<Link to={links.linkedin}>Linkedin</Link>
								<Link to={links.twitter}>X (Twitter)</Link>
							</LinkColumn>
						)}
					</Columns>
				</Top>
				<Bottom>
					<BottomTop>
						{!mobile && (
							<Socials>
								<Link to={links.instagram}>Instagram</Link>
								<Link to={links.linkedin}>LinkedIn</Link>
								<Link to={links.twitter}>X (Twitter)</Link>
							</Socials>
						)}
						<Buttons>
							<Button to={links.login} outline>
								Build your own Thoughtly
							</Button>
							<Button to={links.phone} variant="secondary" icon="phone">
								Call Demo
							</Button>
						</Buttons>
					</BottomTop>
					<BottomBottom>
						<Column>
							<Text>Copyright © 2024 Thoughtly,</Text>
							<Text>Inc. All rights reserved.</Text>
						</Column>
						<Column>
							<UniversalLink to={links.terms}>
								<Text>Terms</Text>
							</UniversalLink>
							<UniversalLink to={links.privacy}>
								<Text>Privacy Policy</Text>
							</UniversalLink>
						</Column>
					</BottomBottom>
				</Bottom>
			</Inner>
		</Wrapper>
	)
}

const Spacer = styled.div`
  pointer-events: none !important;

  ${fresponsive(css`
    height: 646px;
    max-height: 100lvh;
  `)}

  ${ftablet(css`
    height: 720px;
  `)}

  ${fmobile(css`
    height: 868px;
  `)}
`

const Wrapper = styled.footer<{
	$position: "fixed" | "static"
}>`
  width: 100%;
  display: grid;
  place-items: center;
  background-color: ${colors.gray100};
  overflow: clip;
  position: ${({ $position }) => $position};
  bottom: 0;
  left: 0;
  z-index: 1;

  ${fresponsive(css`
    height: 646px;
  `)}

  ${ftablet(css`
    height: 720px;
  `)}

  ${fmobile(css`
    height: 868px;
  `)}
`

const StyledDots = styled(Dots)`
  transform: translateX(-50%);
  left: 50%;
  z-index: 0;

  ${fresponsive(css`
    width: 1320px;
    height: 100%;
    padding: 100px 156px;
    background-position: 0 22px;
  `)}
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${desktopBreakpoint}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  ${fresponsive(css`
    padding: 100px 156px 36px;
  `)}

  ${ftablet(css`
    padding: 96px 68px 39px;
  `)}

  ${fmobile(css`
    padding: 60px 24px 26px;
  `)}
`

const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  z-index: 2;

  ${ftablet(css`
    justify-content: flex-start;
    gap: 81px;
  `)}

  ${fmobile(css`
    flex-direction: column;
  `)}
`

const LogoAddress = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ${fresponsive(css`
    top: -15px;
    gap: 4px;
  `)}

  ${fmobile(css`
    width: 100%;
    border-bottom: 2px solid ${colors.gray400};
    padding-bottom: 33.83px;
  `)}
`

const Logo = styled(LogoSVG)`
  height: auto;

  ${fresponsive(css`
    width: 138px;
  `)}

  ${fmobile(css`
    width: 160px;
  `)}
`

const Address = styled.span`
  ${textStyles.bodyXS}
  color: ${colors.gray600};

  ${fresponsive(css`
    width: 120px;
    margin-left: 8px;
  `)}
`

const Columns = styled.div`
  display: flex;

  ${fresponsive(css`
    gap: 24px;
    padding-right: 10px;
  `)}

  ${fmobile(css`
    gap: 24px 6px;
    flex-wrap: wrap;
  `)}
`

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    width: 168px;
    gap: 12px;
  `)}

  ${ftablet(css`
    width: 204px;
  `)}

  ${fmobile(css`
    width: 154px;
  `)}
`

const Label = styled.span`
  ${textStyles.sh2}
  color: ${colors.gray700};

  ${fresponsive(css`
    padding-left: 10px;
  `)}
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

  ${fresponsive(css`
    gap: 36px;
  `)}
`

const BottomTop = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1.5px solid ${colors.gray400};

  ${fresponsive(css`
    padding-bottom: 24px;
  `)}

  ${fmobile(css`
    border-top: 1.5px solid ${colors.gray400};
    padding-top: 21px;
  `)}
`

const Socials = styled.div`
  display: flex;
  align-items: center;

  ${fresponsive(css`
    gap: 24px;
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const Buttons = styled.div`
  display: flex;
  align-items: center;

  ${fresponsive(css`
    gap: 12px;
  `)}

  ${ftablet(css`
    flex-direction: column-reverse;
    gap: 14px;
    align-items: flex-end;
  `)}

  ${fmobile(css`
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 22px;
  `)}
`

const Text = styled.span`
  ${textStyles.bodyS}
  color: ${colors.gray600};

  ${ftablet(css`
    ${textStyles.bodyR}
  `)}
`

const BottomBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;

  &:last-of-type {
    align-items: flex-end;
  }
`
