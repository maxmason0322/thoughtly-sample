import Button from "components/Buttons/Primary"
import backgroundMobileIMG from "images/global/footer-background-mobile.png"
import backgroundTabletIMG from "images/global/footer-background-tablet.png"
import backgroundIMG from "images/global/footer-background.png"
import { ReactComponent as LogoSVG } from "images/global/logo.svg"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useMedia from "library/useMedia"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles from "styles/text"
import links from "utils/links"
import Link from "./Buttons/Link"

export default function Footer() {
	const mobile = useMedia(false, false, false, true)

	return (
		<Wrapper>
			<Inner>
				<Top>
					<LogoAddress>
						<UniversalLink to={links.todo}>
							<Logo />
						</UniversalLink>
						<Address>41 E 11th St, 11th Floor, New York, NY 10003</Address>
					</LogoAddress>
					<Columns>
						<LinkColumn>
							<Label>Product</Label>
							<Link to={links.todo}>Pricing</Link>
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
							<Link to={links.todo}>Media Inquiries</Link>
							<Link to={links.todo}>Careers</Link>
							<Link to={links.todo} tag="Coming Soon">
								About
							</Link>
							<Link to={links.todo} tag="Coming Soon">
								Blog
							</Link>
						</LinkColumn>
						<LinkColumn>
							<Label>Support</Label>
							<Link to={links.todo}>Help Center</Link>
							<Link to={links.todo}>API Docs</Link>
							<Link to={links.todo}>Contact Us</Link>
						</LinkColumn>
						{mobile && (
							<LinkColumn>
								<Label>Socials</Label>
								<Link to={links.todo}>Instagram</Link>
								<Link to={links.todo}>Linkedin</Link>
								<Link to={links.todo}>X(Twitter)</Link>
							</LinkColumn>
						)}
					</Columns>
				</Top>
				<Bottom>
					<BottomTop>
						{!mobile && (
							<Socials>
								<Link to={links.todo}>Instagram</Link>
								<Link to={links.todo}>LinkedIn</Link>
								<Link to={links.todo}>X(Twitter)</Link>
							</Socials>
						)}
						<Buttons>
							<Button to={links.todo} outline>
								Build your own Thoughtly
							</Button>
							<Button to={links.todo} variant="secondary" icon="phone">
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
							<UniversalLink to={links.todo}>
								<Text>Terms</Text>
							</UniversalLink>
							<UniversalLink to={links.todo}>
								<Text>Privacy Policy</Text>
							</UniversalLink>
						</Column>
					</BottomBottom>
				</Bottom>
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.footer`
  width: 100%;
  display: grid;
  place-items: center;
  background-color: ${colors.gray100};

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

const Inner = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${desktopBreakpoint}px;
  background-image: url(${backgroundIMG});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${fresponsive(css`
    padding: 100px 156px 50px;
  `)}

  ${ftablet(css`
    padding: 96px 68px 39px;
    background-image: url(${backgroundTabletIMG});
  `)}

  ${fmobile(css`
    padding: 60px 24px 26px;
    background-image: url(${backgroundMobileIMG});
  `)}
`

const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

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
    gap: 8px;
  `)}

  ${fmobile(css`
    width: 100%;
    border-bottom: 2px solid ${colors.gray400};
    padding-bottom: 34px;
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
