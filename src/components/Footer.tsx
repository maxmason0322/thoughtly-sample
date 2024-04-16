import Button from "components/Buttons/Primary"
import backgroundIMG from "images/global/footer-background.png"
import { ReactComponent as LogoSVG } from "images/global/logo.svg"
import UniversalLink from "library/Loader/UniversalLink"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles from "styles/text"
import links from "utils/links"

export default function Footer() {
	return (
		<Wrapper>
			<Inner>
				<Top>
					<LogoAddress>
						<UniversalLink to="/">
							<Logo />
						</UniversalLink>
						<Address>41 E 11th St, 11th Floor, New York, NY 10003</Address>
					</LogoAddress>
					<Columns>
						<LinkColumn>
							<Label>Product</Label>
							<Link>link 1</Link>
							<Link>link 2</Link>
							<Link>link 3</Link>
							<Link>link 4</Link>
						</LinkColumn>
						<LinkColumn>
							<Label>Company</Label>
							<Link>link 1</Link>
							<Link>link 2</Link>
							<Link>link 3</Link>
							<Link>link 4</Link>
						</LinkColumn>
						<LinkColumn>
							<Label>Support</Label>
							<Link>link 1</Link>
							<Link>link 2</Link>
							<Link>link 3</Link>
						</LinkColumn>
					</Columns>
				</Top>
				<Bottom>
					<BottomTop>
						<Socials>
							<Link>Instagram</Link>
							<Link>LinkedIn</Link>
							<Link>X(Twitter)</Link>
							<Link>Email</Link>
						</Socials>
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
`

const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const LogoAddress = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    gap: 8px;
  `)}
`

const Logo = styled(LogoSVG)`
  height: auto;

  ${fresponsive(css`
    width: 138px;
  `)}
`

const Address = styled.span`
  ${textStyles.bodyXS}
  color: ${colors.gray600};

  ${fresponsive(css`
    width: 127px;
    margin-left: 8px;
  `)}
`

const Columns = styled.div`
  display: flex;

  ${fresponsive(css`
    gap: 24px;
  `)}
`

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    width: 168px;
    gap: 12px;
  `)}
`

const Label = styled.span`
  ${textStyles.sh2}
  color: ${colors.gray700};
`

const Link = styled.span`
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
`

const Buttons = styled.div`
  display: flex;
  align-items: center;

  ${fresponsive(css`
    gap: 12px;
  `)}
`

const Text = styled.span`
  ${textStyles.bodyS}
  color: ${colors.gray600};
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
