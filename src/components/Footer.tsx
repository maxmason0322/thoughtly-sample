import { useLocation } from "@reach/router"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { ReactComponent as LogoSVG } from "images/global/logo.svg"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import { pathnameMatches } from "library/functions"
import getMedia from "library/getMedia"
import useMedia from "library/useMedia"
import { getResponsivePixels } from "library/viewportUtils"
import styled, { css } from "styled-components"
import { Dots } from "styles/background"
import colors from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles from "styles/text"
import links from "utils/links"
import Link from "./Buttons/Link"
import EmailInput from "./EmailInput"

gsap.registerPlugin(ScrollToPlugin)

export const sectionScale = (section: HTMLElement | null) => {
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: section,
			start: "bottom bottom",
			end: "clamp(bottom top)",
			scrub: true,
		},
	})
	tl.set(section, {
		transformOrigin: "center bottom",
		willChange: "transform",
	})
	tl.to("#main", { backgroundColor: "#00000000", duration: 0 }, 0)
	tl.to([section], {
		borderBottomLeftRadius: () => getResponsivePixels(getMedia(80, 80, 80, 48)),
		borderBottomRightRadius: () =>
			getResponsivePixels(getMedia(80, 80, 80, 48)),
		scale: () => getMedia(0.8, 0.8, 0.8, 0.9),
		y: () => -getResponsivePixels(20),
	})
}

export default function Footer({ position }: { position: "fixed" | "static" }) {
	const mobile = useMedia(false, false, false, true)
	const pathname = useLocation().pathname

	if (!pathname) return null

	const fixedRoutes = [links.home, links.terms, links.privacy, links.blog]

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
							<StyledLink to={links.platform}>Platform</StyledLink>
							<StyledLink to={links.agentAccelerator}>
								Agent Accelerator
							</StyledLink>
							<StyledLink to={links.industries}>Industries</StyledLink>
							{/* <StyledLink to={links.pricing}>Pricing</StyledLink> */}
						</LinkColumn>
						<LinkColumn>
							<Label>Company</Label>
							<StyledLink to={links.mediaInquiries}>Media Inquiries</StyledLink>
							<StyledLink to={links.careers}>Careers</StyledLink>
							<StyledLink to={links.blog}>Blog</StyledLink>
						</LinkColumn>
						<LinkColumn>
							<Label>Support</Label>
							<StyledLink to={links.helpCenter}>Help Center</StyledLink>
							<StyledLink to={links.apiDocs}>API Docs</StyledLink>
							<StyledLink to={links.bookDemo} openInNewTab>
								Contact Us
							</StyledLink>
						</LinkColumn>
						{mobile && (
							<LinkColumn>
								<Label>Socials</Label>
								<StyledLink to={links.instagram}>Instagram</StyledLink>
								<StyledLink to={links.linkedin}>Linkedin</StyledLink>
								<StyledLink to={links.twitter}>X (Twitter)</StyledLink>
							</LinkColumn>
						)}
					</Columns>
				</Top>
				<Bottom>
					<BottomTop>
						{!mobile && (
							<Socials>
								<StyledLink to={links.instagram}>Instagram</StyledLink>
								<StyledLink to={links.linkedin}>LinkedIn</StyledLink>
								<StyledLink to={links.twitter}>X (Twitter)</StyledLink>
							</Socials>
						)}
						<EmailInput />
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
	background-color: ${colors.beige300};
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

	${ftablet(css`
		gap: 35px;
	`)}

	${fmobile(css`
		padding-bottom: 32px;
	`)}
`

const BottomTop = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	border-bottom: 2px solid ${colors.gray400};

	${fresponsive(css`
		padding-bottom: 22px;
	`)}

	${fmobile(css`
		padding-top: 21px;
		translate: 0 2px;
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

	${fmobile(css`
		gap: 10px;
	`)}

	&:last-of-type {
		align-items: flex-end;
	}
`

const StyledLink = styled(Link)`
	&:hover {
		background-color: ${colors.beige400};
	}
`
