import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import { ReactComponent as CloseIcon } from "images/global/icons/closeVideo.svg"
import UniversalLink from "library/Loader/UniversalLink"
import UniversalImage from "library/UniversalImage"
import { isBrowser } from "library/deviceDetection"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"
import { distributeByPosition } from "utils/gsapDistribute"

export default function Mobile() {
	const gridsRef = useRef<HTMLDivElement | null>(null)
	const videoRef = useRef<HTMLDivElement | null>(null)
	const innerGrid1 = useRef<HTMLDivElement>(null)
	const innerGrid2 = useRef<HTMLDivElement>(null)
	const videoWrapper = useRef<HTMLDivElement>(null)
	const innerFrame = useRef<HTMLDivElement>(null)
	const rowRef = useRef<HTMLDivElement>(null)
	const [open, setOpen] = useState(false)

	const images: Queries.ImagesMobileQuery = useStaticQuery(graphql`
		query ImagesMobile {
			widget1: allFile(
				filter: {
					relativeDirectory: { eq: "home/widgets" }
					name: { regex: "/widget1/" }
				}
				sort: { relativePath: ASC }
			) {
				edges {
					node {
						id
						name
						childImageSharp {
							gatsbyImageData
						}
					}
				}
			}
		}
	`)

	const grid1Widgets = [
		"widget1",
		"widget2",
		"widget3",
		"widget4",
		"widget5",
		"widget6",
		"widget7",
		"widget8",
		"widget9",
		"widget10",
		"widget11",
		"widget12",
	]

	const allGrid1Widgets = grid1Widgets.map((widget, i) => {
		return (
			<GridElement
				$gridArea={widget}
				$noBoxShadow={i === 5}
				className="parallax-elements"
				key={widget}
			>
				<GridImage image={images?.widget1?.edges?.[i]?.node} alt={widget} />
			</GridElement>
		)
	})

	useEffect(() => {
		if (!isBrowser || !innerFrame.current) return
		// if open is true we want to mov the iframe to fullscreen view
		if (open) {
			// if we have the video iframe element

			// set the iframe to fullscreen
			innerFrame.current.requestFullscreen()
		} else {
			if (!document || !document.fullscreenElement) return
			// if open is false we want to exit fullscreen view
			// exit fullscreen
			document.exitFullscreen()
		}
	}, [open])

	useAnimation(
		() => {
			if (!gridsRef.current || !innerGrid1.current || !innerGrid2.current)
				return

			gsap.set("close-video-button", { autoAlpha: 0 })

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: gridsRef.current,
					start: "top 80%",
					end: "top -10%",
					scrub: true,
					once: true,
				},
			})

			tl.from(
				".parallax-elements",
				{
					x: 300,
					y: 300,
					opacity: 0,
					stagger: distributeByPosition(
						{
							amount: 1,
							from: "start",
						},
						gsap,
					),
					ease: "power1.inOut",
					duration: 1,
				},
				0,
			)
		},
		[],
		{ scope: gridsRef },
	)

	return (
		<>
			<VideoBGFrame ref={videoRef}>
				<CloseButton
					className="close-video-button"
					type="button"
					ariaLabel="Close Video"
					onClick={() => setOpen(false)}
				>
					<CloseIcon />
				</CloseButton>
				<VideoWrapper ref={videoWrapper}>
					<ScreenFrame ref={innerFrame}>
						<VideoIframe
							loading="lazy"
							className="video-iframe"
							width="100%"
							height="100%"
							src={
								"https://www.youtube.com/embed/KzHVSHHe8ss?controls=1&autoplay=1&loop=1&playlist=KzHVSHHe8ss&autopause=0&mute=1"
							}
							title="Thoughtly D5"
							allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
						/>
					</ScreenFrame>
					<Row ref={rowRef}>
						<Text>
							See how Thoughtly can free up your schedule by seamlessly
							answering all of your calls.
						</Text>
					</Row>
				</VideoWrapper>
			</VideoBGFrame>

			<Grids ref={gridsRef}>
				<TopText>
					<Kicker className="parallax-elements">
						Unlimited phone agents at your fingertips
					</Kicker>
					<Title className="parallax-elements">
						AI that works full-time for your business.
					</Title>
				</TopText>
				<Grid1 ref={innerGrid1}>
					{allGrid1Widgets}
					<BottomText className="parallax-elements">
						Scale your operations up or down—and pay only for the talk time you
						need. Tailored efficiency, because your business isn't
						one-size-fits-all.
					</BottomText>
				</Grid1>
			</Grids>
		</>
	)
}

const Title = styled.h2`
	${textStyles.h3}
	${fresponsive(css`
		color: ${colors.black};
		margin-top: 18px;
	`)}

  ${fmobile(css`
		${textStyles.h6};
		text-align: center;
	`)}
`

const TopText = styled.div`
	position: absolute;
	${fresponsive(css`
		width: 697px;
		top: 269px;
		right: 321px;
	`)}

	${ftablet(css`
		right: 480px;
	`)}

  ${fmobile(css`
		top: -216px;
		width: 290px;
		right: 790px;
	`)}
`

const Grids = styled.div`
	display: grid;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	${fresponsive(css`
		width: 1865px;
		height: 1390px;
		top: 126px;
	`)}

	${fmobile(css`
		top: 680px;
	`)}
`

const Kicker = styled.div`
	width: fit-content;
	${textStyles.sh4};
	color: ${colors.gray600};
	${fresponsive(css`
		padding: 12px 24px;
		border-radius: 10px;
		border: 1.5px solid ${colors.gray200};
	`)}
`

const BottomText = styled.p`
	position: absolute;
	color: ${colors.gray800};
	${textStyles.bodyL}
	${fresponsive(css`
		width: 331px;
		left: 327px;
		bottom: 221px;
	`)}

  ${ftablet(css`
		${textStyles.bodyXL}
		width: 575px;
		text-align: left;
		bottom: -120px;
		left: 780px;
	`)}

  ${fmobile(css`
		${textStyles.bodyR};
		width: 164.53px;
		bottom: 0;
		left: 160px;
		text-align: center;
	`)}
`

const Grid1 = styled.div`
	display: grid;
	position: absolute;
	top: 0;
	left: 0;

	${fmobile(css`
		grid-gap: 12px;
		width: 511px;
		height: 595px;
		grid-template:
			"widget1 . . . . . . ." 28px
			"widget1 . . widget2 widget2 widget2 widget2 ." 6.5px
			"widget1 widget3 widget3 widget2 widget2 widget2 widget2 ." 82.25px
			"widget4 widget4 widget5 widget2 widget2 widget2 widget2 ." 87.5px
			"widget6 widget6 widget7 widget7 widget8 widget8 widget8 ." 65.5px
			"widget6 widget6 widget9 widget9 widget8 widget8 widget8 widget10" 88px
			"widget6 widget6 .  .  . widget11 widget11 widget11" 88px
			". . . . . . widget12 widget12" 65.5px
			/ 104.5px 35px 92px 21.5px 38.5px 22.5px 25.5px 88px;
		left: 700px;
	`)}
`

const GridElement = styled.div<{ $gridArea: string; $noBoxShadow?: boolean }>`
	grid-area: ${({ $gridArea }) => $gridArea};

	${({ $noBoxShadow }) =>
		fresponsive(css`
			border-radius: 18px;
			box-shadow: ${$noBoxShadow ? "none" : "0 18px 42px 0 rgba(89 89 89 /4%)"};
		`)}
`

const VideoIframe = styled.iframe`
	position: relative;
	object-fit: cover;
	border: none;
	border-radius: 8px;
	width: 100%;
	height: 100%;
	object-position: center;

	${fmobile(css`
		width: 330px;
		height: 214px;
		object-fit: contain;
	`)}
`

const VideoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	background: ${colors.white};

	${fmobile(css`
		padding: 14px 14px 20px;
		border-radius: 18px;
	`)}
`

const GridImage = styled(UniversalImage)`
	width: 100%;
	height: 100%;
`

const Row = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	${fmobile(css`
		width: 100%;
		gap: 17px;
	`)}
`

const Text = styled.p`
	color: ${colors.gray800};

	${fmobile(css`
		width: 100%;
		${textStyles.bodyS};
	`)}
`

const VideoBGFrame = styled.div`
	grid-area: video;
	border: 1.5px solid ${colors.gray300};
	display: flex;
	flex-direction: column;
	background: rgba(147 147 147 / 25%);
	overflow: clip;
	transform-origin: bottom right;
	object-fit: cover;

	${fmobile(css`
		border-radius: 18px;
		backdrop-filter: blur(9px);
		object-fit: contain;
		grid-area: none;
		width: 358px;
		height: 318px;
		margin-left: 9px;
	`)}
`

const CloseButton = styled(UniversalLink)`
	position: absolute;
	opacity: 0;

	${fresponsive(css`
		top: 14px;
		right: 16px;
		box-shadow: 0 6px 12px 0 rgba(66 66 66 / 12%);
		border-radius: 100%;
		width: 60px;
		height: 60px;

		svg {
			width: 100%;
			height: 100%;
		}
	`)}
`

const ScreenFrame = styled.div`
	position: relative;
	width: 100%;

	${fmobile(css`
		height: 214px;
		overflow: clip;
		border-radius: 14px;
	`)}
`
