import PrimaryButton from "components/Buttons/Primary"
import Icon from "components/Icon"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { ReactComponent as LogoSVG } from "images/global/logo.svg"
import { loader } from "library/Loader"
import { usePreloader } from "library/Loader/PreloaderUtils"
import UniversalLink from "library/Loader/UniversalLink"
import { ScreenContext } from "library/ScreenContext"
import { useScrollLock } from "library/Scroll"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useContext, useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles from "styles/text"
import links from "utils/links"
import Link from "./Buttons/Link"
import { BEAT_ONE_DURATION, BEAT_TWO_DURATION } from "./Preloader"

gsap.registerPlugin(ScrollToPlugin)

export default function Header() {
	const { mobile, tablet } = useContext(ScreenContext)
	const innerRef = useRef<HTMLDivElement | null>(null)
	const [menuOpen, setMenuOpen] = useState(false)
	const lineRef1 = useRef<SVGLineElement | null>(null)
	const lineRef2 = useRef<SVGLineElement | null>(null)
	const lineRef3 = useRef<SVGLineElement | null>(null)
	const blurRef = useRef<HTMLDivElement | null>(null)
	const menuRef = useRef<HTMLDivElement | null>(null)

	useScrollLock("lock", menuOpen)

	const data: Queries.NavQuery = useStaticQuery(graphql`
		query Nav {
			contentfulPageBlogHub {
				featuredBlogPost {
					title
					slug
					mainImage {
						gatsbyImageData
					}
				}
			}
		}
	`)

	const openTimeline = useAnimation(() => {
		if (!mobile && !tablet) return null
		const tl = gsap.timeline({
			paused: true,
			onReverseComplete: () => {
				gsap.set(menuRef.current, {
					display: "none",
				})
			},
		})

		tl.set(
			menuRef.current,
			{
				display: "flex",
			},
			0,
		)

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
				xPercent: 150,
			},
			{
				xPercent: 0,
			},
			0,
		)

		return tl
	}, [mobile, tablet])

	useEffect(() => {
		if (openTimeline) {
			if (menuOpen) {
				openTimeline.play()
			} else {
				openTimeline.reverse()
			}
		}
	}, [openTimeline, menuOpen])

	usePreloader({
		duration: 0,
		critical: true,
		callback: () => {
			gsap.to(innerRef.current, {
				y: 0,
				duration: 2,
				ease: "power3.out",
				delay: BEAT_ONE_DURATION + BEAT_TWO_DURATION,
			})
		},
	})

	loader.useEventListener("routeChange", () => {
		setMenuOpen(false)
	})
	loader.useEventListener("scroll", () => {
		setMenuOpen(false)
	})

	return (
		<Wrapper>
			{(mobile || tablet) && (
				<>
					<Blur ref={blurRef} />
					<Menu ref={menuRef}>
						<Buttons>
							<PrimaryButton variant="secondary" to={links.login}>
								Sign In
							</PrimaryButton>
							{!tablet && (
								<PrimaryButton icon="chev" to={links.login}>
									Get Started
								</PrimaryButton>
							)}
						</Buttons>
						<HR />
						<MobileLinks>
							<button
								type="button"
								onClick={() => {
									setMenuOpen(false)
								}}
							>
								<MobileLink to={links.industries}>
									<Icon name="lock" />
									<span>Industries</span>
								</MobileLink>
							</button>
							<button
								type="button"
								onClick={() => {
									setMenuOpen(false)
								}}
							>
								<MobileLink to={links.integrations}>
									<Icon name="integration" />
									<span>Integrations</span>
								</MobileLink>
							</button>
							<button
								type="button"
								onClick={() => {
									setMenuOpen(false)
								}}
							>
								<MobileLink to={links.pricing}>
									<Icon name="card" />
									<span>Pricing</span>
								</MobileLink>
							</button>
							<MobileLink to={links.agentAccelerator}>
								<Icon name="lightning" />
								<span>Agent Accelerator</span>
							</MobileLink>
							<MobileLink to={links.helpCenter}>
								<Icon name="heart" />
								<span>Support</span>
							</MobileLink>
							<MobileLink to={links.blog}>
								<Icon name="feather" />
								<span>Blog</span>
							</MobileLink>
						</MobileLinks>
						<HR />
						<FeaturedWrapper>
							<span>Featured</span>
							<ImageWrapper>
								{data.contentfulPageBlogHub?.featuredBlogPost?.mainImage && (
									<FeaturedImage
										image={
											data.contentfulPageBlogHub?.featuredBlogPost?.mainImage
												.gatsbyImageData
										}
										alt={
											data.contentfulPageBlogHub?.featuredBlogPost?.title ??
											"featured article"
										}
									/>
								)}
								<Title
									to={`/blog/${
										data.contentfulPageBlogHub?.featuredBlogPost?.slug ?? ""
									}`}
								>
									{data.contentfulPageBlogHub?.featuredBlogPost?.title}
									<Icon name="chev" />
								</Title>
							</ImageWrapper>
						</FeaturedWrapper>
					</Menu>
				</>
			)}

			<Inner ref={innerRef}>
				<Left>
					<UniversalLink to={links.home} ariaLabel="Thoughtly">
						<StyledLogoSVG />
					</UniversalLink>
					<Links>
						<Link to={links.industries}>Industries</Link>
						<Link to={links.pricing}>Pricing</Link>
						<Link to={links.agentAccelerator}>Agent Accelerator</Link>
						<Link to={links.helpCenter}>Support</Link>
						<Link to={links.blog}>Blog</Link>
					</Links>
				</Left>
				<Right>
					{tablet && (
						<PrimaryButton to={links.login}>Get Started</PrimaryButton>
					)}
					{(mobile || tablet) && (
						<Hamburger
							type="button"
							onClick={() => setMenuOpen((val) => !val)}
							ariaLabel="menu"
						>
							<Lines viewBox="0 0 36 12" overflow="visible">
								<Line ref={lineRef1} x1={0} x2={36} y1={0.5} y2={0.5} />
								<Line ref={lineRef2} x1={0} x2={36} y1={6} y2={6} />
								<Line ref={lineRef3} x1={0} x2={36} y1={11.5} y2={11.5} />
							</Lines>
						</Hamburger>
					)}
					{!mobile && !tablet && (
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

const FeaturedWrapper = styled.div`
	display: flex;
	flex-direction: column;

	${fresponsive(css`
		gap: 12px;

		span {
			color: ${colors.gray500};
			${textStyles.t2}
		}
	`)}
`

const ImageWrapper = styled.div`
	aspect-ratio: 271 / 128;
	width: 100%;
	position: relative;
	overflow: clip;

	${fresponsive(css`
		border-radius: 12px;
	`)}

	${ftablet(css`
		aspect-ratio: 339 / 159;
	`)}
`

const Title = styled(UniversalLink)`
	position: absolute;
	left: 0;
	bottom: 0;
	${textStyles.bodyXS}
	color: ${colors.white};
	width: 100%;

	${fresponsive(css`
		padding: 8px 9px;
		background: rgba(63 63 63 / 50%);
		backdrop-filter: blur(3px);
		height: 44px;

		svg {
			display: inline-block;
			position: relative;
			top: 4px;
			left: 3px;
			width: 14px;
			height: 14px;
		}
	`)}

	${ftablet(css`
		padding: 16px 9px 8px 14px;
		${textStyles.bodyS}
		height: 60px;
	`)}
`

const FeaturedImage = styled(UniversalImage)`
	height: 100%;
	width: 100%;
`

const Wrapper = styled.header`
	width: 100vw;
	display: grid;
	place-items: center;
	position: absolute;
	z-index: 9;
	overflow-x: clip;
`

const Inner = styled.div`
	width: 100%;
	max-width: ${desktopBreakpoint}px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	${fresponsive(css`
		translate: 0 -200%;
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

	${ftablet(css`
		a {
			width: 286px;
		}

		div {
			width: 286px;
		}
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
	background-color: ${colors.white};

	${fresponsive(css`
		border: 1.5px solid ${colors.gray300};
		width: 84px;
	`)}

	${ftablet(css`
		height: 58px;
		border-radius: 12px;
	`)}
  
  ${fmobile(css`
		box-shadow: 0 18px 32px 0 rgba(89 89 89 / 4%);
		border-radius: 14px;
		height: 50px;
	`)}
`

const Line = styled.line`
	stroke: ${colors.black};
	stroke-width: 1.5px;
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
	display: none;
	flex-direction: column;

	${fresponsive(css`
		padding: 24px;
		border: 1.5px solid ${colors.gray300};
		gap: 24px;
		border-radius: 14px;
	`)}

	${ftablet(css`
		width: 387px;
		top: 134px;
		right: 67px;
	`)}

	${fmobile(css`
		width: 319px;
		top: 86px;
		left: 28px;
	`)}
`

const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${ftablet(css`
		a {
			width: 100%;
		}

		div {
			width: 100%;
		}
	`)}

	${fmobile(css`
		gap: 12px;

		a {
			flex-grow: 1;
		}

		div {
			width: 100%;
		}
	`)}
`

const HR = styled.hr`
	width: 100%;
	background-color: ${colors.gray300};
	height: 1px;
`

const MobileLinks = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: flex-start;

	${fresponsive(css`
		gap: 12px 6px;
	`)}

	${ftablet(css`
		gap: 24px;
		justify-content: flex-start;
	`)}
`

const MobileLink = styled(UniversalLink)`
	display: flex;
	align-items: center;
	white-space: nowrap;

	${fresponsive(css`
		gap: 4px;
		width: 128px;

		span {
			${textStyles.sh3}
			color: ${colors.gray900};
			padding: 8px 10px;
		}

		svg {
			width: 16px;
			height: 16px;
			flex-shrink: 0;

			path {
				fill: ${colors.gray600};
			}
		}
	`)}

	${ftablet(css`
		span {
			${textStyles.sh2}
		}
	`)}
`
