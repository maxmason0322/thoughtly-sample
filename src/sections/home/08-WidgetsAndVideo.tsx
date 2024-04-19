import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ReactComponent as CloseIcon } from "images/global/icons/closeVideo.svg"
import { ReactComponent as Arrow } from "images/global/icons/greenArrow.svg"
import UniversalLink from "library/Loader/UniversalLink"
import UniversalImage from "library/UniversalImage"
import { fresponsive } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { getResponsivePixels } from "library/viewportUtils"
import { useMemo, useRef, useState } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"
import { distributeByPosition } from "utils/gsapDistribute"

export default function WidgetsAndVideo() {
	const gridsRef = useRef<HTMLDivElement | null>(null)
	const videoRef = useRef<HTMLDivElement>(null)
	const innerGrid1 = useRef<HTMLDivElement>(null)
	const innerGrid2 = useRef<HTMLDivElement>(null)
	const videoWrapper = useRef<HTMLDivElement>(null)
	const innerFrame = useRef<HTMLDivElement>(null)
	const rowRef = useRef<HTMLDivElement>(null)
	const [canAnimateVideo, setCanAnimateVideo] = useState(false)
	const [open, setOpen] = useState(false)

	const images = useStaticQuery(graphql`
    query images {
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
      widget2: allFile(
        filter: {
          relativeDirectory: { eq: "home/widgets" }
          name: { regex: "/widget2/" }
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

	const grid1Widgets = useMemo(
		() => [
			{
				image: images.widget1.edges[0].node.childImageSharp.gatsbyImageData,
				name: "widget1",
			},
			{
				image: images.widget1.edges[1].node.childImageSharp.gatsbyImageData,
				name: "widget2",
			},

			{
				image: images.widget1.edges[2].node.childImageSharp.gatsbyImageData,
				name: "widget3",
			},
			{
				image: images.widget1.edges[3].node.childImageSharp.gatsbyImageData,
				name: "widget4",
			},
			{
				image: images.widget1.edges[4].node.childImageSharp.gatsbyImageData,
				name: "widget5",
			},
			{
				image: images.widget1.edges[5].node.childImageSharp.gatsbyImageData,
				name: "widget6",
			},
			{
				image: images.widget1.edges[6].node.childImageSharp.gatsbyImageData,
				name: "widget7",
			},
			{
				image: images.widget1.edges[7].node.childImageSharp.gatsbyImageData,
				name: "widget8",
			},
			{
				image: images.widget1.edges[8].node.childImageSharp.gatsbyImageData,
				name: "widget9",
			},
			{
				image: images.widget1.edges[9].node.childImageSharp.gatsbyImageData,
				name: "widget10",
			},
			{
				image: images.widget1.edges[10].node.childImageSharp.gatsbyImageData,
				name: "widget11",
			},
		],
		[images.widget1.edges],
	)

	const grid2Widgets = useMemo(
		() => [
			{
				image: images.widget2.edges[0].node.childImageSharp.gatsbyImageData,
				name: "widget2-1",
			},
			{
				image: images.widget2.edges[1].node.childImageSharp.gatsbyImageData,
				name: "widget2-2",
			},
			{
				image: images.widget2.edges[2].node.childImageSharp.gatsbyImageData,
				name: "widget2-3",
			},
			{
				image: images.widget2.edges[3].node.childImageSharp.gatsbyImageData,
				name: "widget2-4",
			},
		],
		[images.widget2.edges],
	)

	const allGrid1Widgets = grid1Widgets.map((widget) => {
		return (
			<GridElement
				$gridArea={widget.name}
				className="parralax-elements"
				key={widget.name}
			>
				<GridImage image={widget.image} alt={widget.name} />
			</GridElement>
		)
	})

	const allGrid2Widgets = grid2Widgets.map((widget) => {
		return (
			<GridElement
				$gridArea={widget.name}
				className="parralax-elements"
				key={widget.name}
			>
				<GridImage image={widget.image} alt={widget.name} />
			</GridElement>
		)
	})

	useAnimation(
		() => {
			if (
				!videoRef.current ||
				!rowRef.current ||
				!videoWrapper.current ||
				!canAnimateVideo
			)
				return

			const tl = gsap.timeline()
			if (open) {
				const distance = videoRef.current.getBoundingClientRect()
				const smoother = ScrollSmoother.get()
				smoother?.paused(true)

				tl.to(
					videoRef.current,
					{
						width: "calc(100vw + 4px)",
						height: "calc(100vh + 4px)",
						transformOrigin: "bottom right",
						x: -distance.left - 2,
						y: -distance.top - 2,
						borderRadius: 0,
						zIndex: 100,
						ease: "power2.inOut",
						padding: "61px 90px",
					},
					0,
				)
					.to(
						rowRef.current,
						{
							x: "-100%",
							height: 0,
							padding: 0,
							opacity: 0,
						},
						0,
					)
					.to(
						".close-video-button",
						{
							autoAlpha: 1,
						},
						0,
					)
					.to(
						videoWrapper.current,
						{
							gap: 0,
						},
						0,
					)
					.to(
						innerFrame.current,
						{
							height: "100%",
						},
						0,
					)
			} else {
				const smoother = ScrollSmoother.get()
				tl.to(
					videoRef.current,
					{
						width: () => getResponsivePixels(514),
						height: () => getResponsivePixels(391),
						x: 0,
						y: 0,
						gap: () => getResponsivePixels(24),
						borderRadius: 18,
						zIndex: 1,
						duration: 0.5,
						padding: 0,
						ease: "power2.inOut",
					},
					0,
				)
					.to(
						rowRef.current,
						{
							x: 0,
							padding: () => `${getResponsivePixels(24)}px 0`,
							height: () => getResponsivePixels(50),
							opacity: 1,
							duration: 0.5,
						},
						0,
					)
					.to(
						".close-video-button",
						{
							autoAlpha: 0,
							duration: 0.5,
						},
						0,
					)
					.to(
						videoWrapper.current,
						{
							gap: () => getResponsivePixels(24),
							duration: 0.5,
						},
						0,
					)
					.to(
						innerFrame.current,
						{
							height: () => getResponsivePixels(267),
							duration: 0.5,
						},
						0,
					)

				smoother?.paused(false)
			}
		},
		[open, canAnimateVideo],
		{ recreateOnResize: true },
	)

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
				onComplete: () => {
					setCanAnimateVideo(true)
				},
			})

			tl.from(
				".parralax-elements",
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
		<Wrapper>
			<Grids ref={gridsRef}>
				<TopText>
					<Kicker className="parralax-elements">
						Unlimited phone agents at your fingertips
					</Kicker>
					<Title className="parralax-elements">
						Finally, AI that works full-time for your business.
					</Title>
				</TopText>
				<Grid1 ref={innerGrid1}>
					{allGrid1Widgets}
					<BottomText className="parralax-elements">
						Scale your operations up or down—and pay only for the talk time you
						need. Tailored efficiency, because your business isn't
						one-size-fits-all.
					</BottomText>
				</Grid1>

				<Grid2 ref={innerGrid2}>
					{allGrid2Widgets}
					<VideoBGFrame ref={videoRef} className="parralax-elements">
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
									className="video-iframe"
									width="100%"
									height="100%"
									src="https://www.youtube.com/embed/CoV79mSUc9k?controls=0?autoplay=1"
									title="Thoughtly D5"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen={true}
								/>
							</ScreenFrame>
							<Row ref={rowRef}>
								<PlayButton type="button" onClick={() => setOpen(true)}>
									<div>Full Screen</div>
									<Arrow />
								</PlayButton>
								<Text>
									See how Thoughtly can free up your schedule by seamlessly
									answering all of your calls.
								</Text>
							</Row>
						</VideoWrapper>
					</VideoBGFrame>
				</Grid2>
			</Grids>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  position: relative;
  ${fresponsive(css`
    height: 1525px;
    width: 100%;
  `)}
`

const Title = styled.h2`
  ${textStyles.h3}
  ${fresponsive(css`
    color: ${colors.black};
    margin-top: 18px;
  `)}
`

const TopText = styled.div`
  position: absolute;
  ${fresponsive(css`
    width: 697px;
    top: 269px;
    right: 321px;
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
`

const Grid1 = styled.div`
  display: grid;
  ${fresponsive(css`
    display: grid;
    grid-gap: 24px;
    width: 1023px;
    height: 1190px;
    position: absolute;
    top: 0;
    left: 0;
    grid-template:
      "widget1 . . . . . . ." 56px
      "widget1 widget3 widget3 widget2 widget2 widget2 widget2 ." 193px
      "widget4 widget4 widget5 widget2 widget2 widget2 widget2 ." 175px
      "widget6 widget6 widget7 widget7 widget8 widget8 widget8 ." 131px
      "widget6 widget6 widget9 widget9 widget8 widget8 widget8 widget10" 176px
      "widget6 widget6 .  .  . widget11 widget11 widget11" 176px
      ". nowidget2 . . . . widget12 widget12" 131px
      / 209px 70px 184px 43px 77px 45px 51px 176px;
  `)}
`

const GridElement = styled.div<{ $gridArea: string }>`
  grid-area: ${({ $gridArea }) => $gridArea};

  ${fresponsive(css`
    border-radius: 18px;
    box-shadow: 0 18px 42px 0 rgba(89 89 89 /4%);
  `)}
`

const Grid2 = styled.div`
  display: grid;
  position: absolute;
  bottom: 0;
  right: 0;

  ${fresponsive(css`
    width: 818px;
    height: 772px;
    grid-gap: 24px;
    grid-template:
      "widget2-1 widget2-2 widget2-2" 160px
      "video video widget2-3" 161px
      "video video widget2-4" 203px
      ". . widget2-4" 176px
      / 278px 202px 290px;
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
`

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: ${colors.white};

  ${fresponsive(css`
    padding: 24px;
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

  ${fresponsive(css`
    width: 100%;
    gap: 36px;
  `)}
`

const Text = styled.p`
  color: ${colors.gray800};
  ${textStyles.bodyS};

  ${fresponsive(css`
    width: 264px;

    /* No Style for this */
    font-size: 13px;
  `)}
`

const PlayButton = styled(UniversalLink)`
  ${fresponsive(css`
    gap: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 24px;
    border: 1.5px solid ${colors.gray200};
    border-radius: 12px;
    height: 49px;

    svg {
      width: 17px;
      height: 16px;
      transform: translateY(1px);
    }
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
  ${fresponsive(css`
    border-radius: 18px;
    backdrop-filter: blur(9px);
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

  ${fresponsive(css`
    height: 267px;
  `)}
`
