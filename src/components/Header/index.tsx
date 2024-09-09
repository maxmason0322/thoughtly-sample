import * as Popover from "@radix-ui/react-popover"
import PrimaryButton from "components/Buttons/Primary"
import Icon, { type IconType } from "components/Icon"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { ReactComponent as LogoSVG } from "images/global/logo.svg"
import { loader } from "library/Loader"
import { usePreloader } from "library/Loader/PreloaderUtils"
import { loadPage } from "library/Loader/TransitionUtils"
import UniversalLink from "library/Loader/UniversalLink"
import { ScreenContext } from "library/ScreenContext"
import { useScrollLock } from "library/Scroll"
import UniversalImage from "library/UniversalImage"
import { eases } from "library/eases"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useBetterThrottle } from "library/useBetterThrottle"
import { useParamState } from "library/useParamState"
import { useResponsivePixels } from "library/viewportUtils"
import { useContext, useEffect, useRef, useState } from "react"
import styled, { css, keyframes } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles from "styles/text"
import links from "utils/links"
import Link from "../Buttons/Link"
import { BEAT_ONE_DURATION, BEAT_TWO_DURATION } from "../Preloader"
import Dropdown from "./Dropdown"

gsap.registerPlugin(ScrollToPlugin)

const duration = 500

export default function Header() {
	const { mobile, tablet } = useContext(ScreenContext)
	const [menuOpenRaw, setMenuOpen] = useState(false)
	const menuOpen = useBetterThrottle(menuOpenRaw, duration)
	const innerRef = useRef<HTMLDivElement | null>(null)
	const lineRef1 = useRef<SVGLineElement | null>(null)
	const lineRef2 = useRef<SVGLineElement | null>(null)
	const lineRef3 = useRef<SVGLineElement | null>(null)
	const menuRef = useRef<HTMLDivElement | null>(null)
	const [, setContentType] = useParamState("contentType")

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
			allContentfulPageBlogPost {
				items: nodes {
					contentType {
						contentTypeName
						iconName
					}
				}
      }
		}
	`)

	const mappedContentTypes = data.allContentfulPageBlogPost.items
		.filter((item) => item.contentType !== null)
		.map((item) => ({
			contentTypeName: item.contentType?.contentTypeName ?? null,
			iconName: item.contentType?.iconName ?? null,
		}))

	const companySublinks = [
		{
			icon: "careers",
			to: links.careers,
			title: "Careers",
		},
		{
			icon: "phone2",
			to: links.contact,
			title: "Contact",
		},
	]

	const post = data.contentfulPageBlogHub?.featuredBlogPost
	// prevent orphaned arrow on last line
	const allButLast = post?.title?.split(" ").slice(0, -2).join(" ")
	const last = post?.title?.split(" ").slice(-2).join(" ")
	const feature = post ? (
		<Card to={`/blog/${post.slug ?? ""}/`}>
			<FeatureImage
				image={post.mainImage?.gatsbyImageData}
				alt={post.title ?? ""}
			/>
			<CardTitle>
				{allButLast}{" "}
				<span style={{ whiteSpace: "nowrap" }}>
					{last} <Icon name="chev" noWrapper />
				</span>
			</CardTitle>
		</Card>
	) : null

	const buttonTimeline = useAnimation(() => {
		if (!mobile && !tablet) return null
		const tl = gsap.timeline({
			paused: true,
			defaults: {
				duration: duration / 1000,
				ease: "power3.inOut",
			},
		})

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

		return tl
	}, [mobile, tablet])

	useEffect(() => {
		if (menuOpen) {
			buttonTimeline?.play()
		} else {
			buttonTimeline?.reverse()
		}
	}, [buttonTimeline, menuOpen])

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
		buttonTimeline?.time(0)
		gsap.set(menuRef.current, { display: "none" })
	})
	loader.useEventListener("scroll", () => {
		setMenuOpen(false)
	})

	const offset = useResponsivePixels(16)

	const getDemoLink = () => {
		if (typeof window !== "undefined") {
			return links.bookDemo + window.location.search
		}
		return links.bookDemo
	}

	return (
		<Popover.Root open={menuOpen} onOpenChange={setMenuOpen}>
			<Wrapper>
				{(mobile || tablet) && (
					<>
						<Blur
							style={{
								opacity: menuOpen ? 1 : 0,
							}}
						/>
						<Menu sideOffset={offset} ref={menuRef} align="end">
							<Buttons>
								<PrimaryButton variant="secondary" to={links.login}>
									Sign In
								</PrimaryButton>
								{!tablet && (
									<PrimaryButton icon="chev" to={getDemoLink()}>
										Book a Demo
									</PrimaryButton>
								)}
							</Buttons>
							<HR />
							<MobileLinks>
								<MobileLink to={links.platform}>
									<Icon name="platform" color={colors.gray500} />
									<span>Platform</span>
								</MobileLink>
								<MobileLink to={links.agentAccelerator}>
									<Icon name="customers" color={colors.gray500} />
									<span>Agent Accelerator</span>
								</MobileLink>
							</MobileLinks>
							<div>
								<HR />
								<SectionTitle>Resources</SectionTitle>
								<MobileLinks>
									<MobileLink to={links.blog}>
										<Icon name="document" color={colors.gray500} />
										<span>Resources</span>
									</MobileLink>
									{mappedContentTypes
										.filter((contentType) => contentType !== null)
										.map((contentType) => {
											return (
												<div key={contentType?.contentTypeName}>
													<MobileLink
														type="button"
														onClick={() => {
															loadPage(links.blog, "fade")
																.finally(() => {
																	setContentType(
																		contentType?.contentTypeName ?? "",
																	)
																})
																.catch((error: string) => {
																	throw new Error(error)
																})
														}}
													>
														<Icon
															name={contentType?.iconName as IconType}
															color={colors.gray500}
														/>
														<span>{contentType?.contentTypeName}</span>
													</MobileLink>
												</div>
											)
										})}
								</MobileLinks>
							</div>
							<div>
								<HR />
								<SectionTitle>Company</SectionTitle>
								<MobileLinks>
									{companySublinks?.map((sublink) => {
										return (
											<MobileLink key={sublink.title} to={sublink.to}>
												<Icon
													name={sublink.icon as IconType}
													color={colors.gray500}
												/>
												<span>{sublink.title}</span>
											</MobileLink>
										)
									})}
								</MobileLinks>
							</div>
							<div>
								<HR />
								<SectionTitle>Featured</SectionTitle>
								{feature}
							</div>
						</Menu>
					</>
				)}

				<Inner ref={innerRef}>
					<Left>
						<UniversalLink to={links.home} ariaLabel="Thoughtly">
							<StyledLogoSVG />
						</UniversalLink>
						<Links>
							<Link to={links.platform}>Platform</Link>
							<Link to={links.agentAccelerator}>Agent Accelerator</Link>
							<Dropdown
								feature={feature}
								contentTypes={mappedContentTypes ?? []}
							>
								Resources
							</Dropdown>
							<Dropdown sublinks={companySublinks}>Company</Dropdown>
						</Links>
					</Left>
					<Popover.Anchor>
						<Right>
							{tablet && (
								<PrimaryButton to={getDemoLink()}>Book a Demo</PrimaryButton>
							)}
							{(mobile || tablet) && (
								<Hamburger type="button" aria-label="navigation menu">
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
									<PrimaryButton icon="chev" to={getDemoLink()}>
										Book a Demo
									</PrimaryButton>
								</>
							)}
						</Right>
					</Popover.Anchor>
				</Inner>
			</Wrapper>
		</Popover.Root>
	)
}

const SectionTitle = styled.div`
	color: ${colors.gray500};
	${textStyles.t2}
	${fresponsive(css`
		margin: 12px 0;
	`)}
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

const Hamburger = styled(Popover.Trigger)`
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
	pointer-events: none;
	transition: opacity ${duration}ms;
`

const slideFromRight = keyframes`
	from {
		transform: translateX(150%);
	}
	to {
		transform: translateX(0);
	}
`

const slideToRight = keyframes`
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(150%);
	}
`

const Menu = styled(Popover.Content)`
	background: ${gradients.surface1};
	display: flex;
	flex-direction: column;

	${fresponsive(css`
		padding: 24px;
		border: 1.5px solid ${colors.gray300};
		gap: 24px;
		border-radius: 14px;
	`)}

	${ftablet(css`
		width: 387px;
		max-height: calc(100vh - 140px);
		overflow: auto;
	`)}

	${fmobile(css`
		width: 319px;
		max-height: calc(100vh - 100px);
		overflow: auto;
	`)}

	&[data-state="open"] {
		animation: ${slideFromRight} ${duration}ms ${eases.cubic.out};
	}

	&[data-state="closed"] {
		animation: ${slideToRight} ${duration}ms ${eases.cubic.in};
	}
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
	display: grid;

	${fresponsive(css`
		gap: 12px 6px;
		grid-template-columns: 116px 1fr;
	`)}

	${ftablet(css`
		gap: 12px 24px;
		grid-template-columns: 128px 1fr;
	`)}
`

const MobileLink = styled(UniversalLink)`
	display: flex;
	align-items: center;
	white-space: nowrap;

	${fresponsive(css`
		gap: 3px;

		span {
			${textStyles.sh3}
			color: ${colors.gray900};
			padding: 8px 10px;
		}

		svg {
			width: 16px;
			height: 16px;
			flex-shrink: 0;
		}
	`)}

	${ftablet(css`
		span {
			${textStyles.sh2}
		}
	`)}
`

const Card = styled(UniversalLink)`
	${fresponsive(css`
		width: 160px;
		height: 100%;
		border-radius: 10px;
		isolation: isolate;
		overflow: clip;
	`)}

	${ftablet(css`
		width: 339px;
		height: 159px;
	`)}

	${fmobile(css`
		width: 271px;
		height: 128px;
	`)}

	display: grid;
	place-items: end start;

	& > * {
		grid-area: 1 / 1 / 2 / 2;
	}
`

const CardTitle = styled.h2`
	${textStyles.bodyXS};
	color: ${colors.white};

	${fresponsive(css`
		padding: 9px;
		background: rgb(98 98 98 / 50%);
		backdrop-filter: blur(3px);
		width: 100%;

		svg {
			display: inline-block;
			height: 12px;
			margin-left: 2px;
			margin-top: -10px;
			translate: 0 20%;
		}
	`)}

	${ftablet(css`
		padding-right: 130px;
		${textStyles.bodyS};
	`)}
`

const FeatureImage = styled(UniversalImage)`
	width: 100%;
	height: 100%;
`
