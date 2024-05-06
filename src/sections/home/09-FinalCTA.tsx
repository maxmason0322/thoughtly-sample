import Primary from "components/Buttons/Primary"
import Kicker from "components/Kicker"
import { CalendlyModalContext } from "components/Providers/CalendlyModalProvider"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import { ReactComponent as GraphSVG } from "images/home/graph.svg"
import { ReactComponent as GraphMSVG } from "images/home/graphM.svg"
import { ReactComponent as GraphTSVG } from "images/home/graphT.svg"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import getMedia from "library/getMedia"
import useAnimation from "library/useAnimation"
import { getResponsivePixels } from "library/viewportUtils"
import { useContext, useRef } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import {
	desktopBreakpoint,
	mobileBreakpoint,
	tabletBreakpoint,
} from "styles/media"
import textStyles from "styles/text"
import { generateGradientBorder } from "utils/generateGradientBorder"
import links from "utils/links"

export default function FinalCTA() {
	const wrapperRef = useRef<HTMLElement | null>(null)
	const bottom = useRef<HTMLDivElement | null>(null)
	const graphCover = useRef<HTMLDivElement | null>(null)
	const { setModalOpen } = useContext(CalendlyModalContext)
	const ctaImages: Queries.CTAImagesQuery = useStaticQuery(graphql`
    query CTAImages {
      allCtaImages: allFile(
        filter: { relativeDirectory: { eq: "home/cta" } }
        sort: { relativePath: ASC }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

	const allCardData = [
		{
			image: ctaImages.allCtaImages.nodes[0]?.childImageSharp?.gatsbyImageData,
			alt: "man in shorts on phone in hammock",
			yOffset: "100px",
		},
		{
			image: ctaImages.allCtaImages.nodes[1]?.childImageSharp?.gatsbyImageData,
			alt: "man reading with baby",
			yOffset: "0",
		},
		{
			image: ctaImages.allCtaImages.nodes[2]?.childImageSharp?.gatsbyImageData,
			alt: "woman playing the piano or keyboard",
			yOffset: getMedia("122px", "122px", "122px", "61px"),
		},
		{
			image: ctaImages.allCtaImages.nodes[3]?.childImageSharp?.gatsbyImageData,
			alt: "man using photography equipment",
			yOffset: getMedia("6px", "6px", "6px", "3.5px"),
		},
		{
			image: ctaImages.allCtaImages.nodes[4]?.childImageSharp?.gatsbyImageData,
			alt: "woman on laptop with a plate of food at her side.",
			yOffset: "75px",
		},
	]

	const ImageCards = allCardData.map((node) => {
		const { image, yOffset, alt } = node
		return (
			<ImageCard key={alt} className="cta-image-card" $yOffset={yOffset}>
				<Frame>
					<UniversalImage image={image} alt="cta image" />
				</Frame>
			</ImageCard>
		)
	})

	useAnimation(
		() => {
			if (!bottom.current || !graphCover.current) return

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: bottom.current,
					start: "top bottom",
					end: "top 30%",
					scrub: true,
				},
			})

			tl.to(
				".cta-image-card",
				{
					yPercent: -90,
					stagger: {
						from: "random",
						each: 0.05,
					},
					ease: "power3.out",
				},
				0,
			).to(
				graphCover.current,
				{
					scaleX: 0,
					transformOrigin: "right center",
				},
				0.3,
			)
		},
		[],
		{ scope: bottom },
	)

	useAnimation(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapperRef.current,
				start: "top top",
				end: "clamp(bottom top)",
				scrub: true,
			},
		})
		tl.set(wrapperRef.current, {
			transformOrigin: "center bottom",
			willChange: "transform",
		})
		tl.to("#main", { backgroundColor: "#00000000", duration: 0 }, 0)
		tl.to([wrapperRef.current], {
			borderBottomLeftRadius: () =>
				getResponsivePixels(getMedia(80, 80, 80, 48)),
			borderBottomRightRadius: () =>
				getResponsivePixels(getMedia(80, 80, 80, 48)),
			scale: () => getMedia(0.8, 0.8, 0.8, 0.9),
		})
	}, [])

	return (
		<Wrapper ref={wrapperRef}>
			<Inner>
				<Top>
					<Left>
						<Kicker>Scale with Ease</Kicker>
						<Header>Join the communication revolution.</Header>
					</Left>
					<Right>
						<Row>
							<Primary to={links.login} outline>
								Build your own Thoughtly
							</Primary>
							<Primary
								type="button"
								onClick={() => setModalOpen(true)}
								variant="secondary"
								icon="chev"
							>
								Book a Demo
							</Primary>
						</Row>
						<Content>
							Slash your costs and transform your customer experience. The
							generative AI revolution is here. Don't get left behind.
						</Content>
					</Right>
				</Top>
			</Inner>

			<Bottom ref={bottom}>
				<Graph />
				<GraphT />
				<GraphM />
				<GraphCover ref={graphCover} />
				<PhotoPanel>{ImageCards}</PhotoPanel>
			</Bottom>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
  overflow: clip;

  ${fresponsive(css`
    padding-bottom: 182px;
  `)}

  ${ftablet(css`
    padding-bottom: 98px;
  `)}

  ${fmobile(css`
    padding-bottom: 56px;
  `)}
`

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 1;
  position: relative;
  ${fresponsive(css`
    width: 1440px;
    max-width: ${desktopBreakpoint}px;
    padding: 79px 162px 77px 156px;
  `)}

  ${ftablet(css`
    max-width: ${tabletBreakpoint}px;
    padding: 86px 69px 129px 68px;
  `)}

  ${fmobile(css`
    width: 100%;
    max-width: ${mobileBreakpoint}px;
    padding: 57px 25px 73px;
  `)}
`

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${fresponsive(css`
    gap: 98px;
    width: 100%;
  `)}

  ${ftablet(css`
    gap: 36px;
    flex-direction: column;
  `)}


  ${fmobile(css`
    gap: 36px;
    flex-direction: column;
  `)}
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${fresponsive(css`
    gap: 18px;
    width: 647px;
  `)}

  ${fmobile(css`
    gap: 24px;
    width: 325px;
    align-items: center;
  `)}
`

const Header = styled.h1`
  ${textStyles.h3}

  ${ftablet(css`
    ${textStyles.h2};
  `)}

  ${fmobile(css`
    ${textStyles.h6};
    text-align: center;
  `)}
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-shrink: 0;

  ${fresponsive(css`
    gap: 32px;
  `)}
  ${fmobile(css`
    flex-direction: column-reverse;
    align-items: center;
  `)}
`

const Row = styled.div`
  display: flex;
  flex-direction: row;

  ${fresponsive(css`
    gap: 20px;
  `)}

  ${fmobile(css`
    flex-direction: column;
    gap: 12px;
    align-items: center;
  `)}
`

const Content = styled.p`
  ${textStyles.bodyR}

  ${fresponsive(css`
    width: 374px;
  `)}

  ${ftablet(css`
    width: 423px;
    ${textStyles.bodyL};
  `)}


  ${fmobile(css`
    width: 273px;
    ${textStyles.bodyR};
    text-align: center;
  `)}
`

const Graph = styled(GraphSVG)`
  position: absolute;
  bottom: 0;
  ${fresponsive(css`
    width: 1680px;
    height: 645px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 60px;
  `)}
  ${ftablet(css`
    display: none;
  `)}
  ${fmobile(css`
    display: none;
  `)}
`

const GraphT = styled(GraphTSVG)`
  position: absolute;
  bottom: 0;
  ${fresponsive(css`
    display: none;
  `)}

  ${ftablet(css`
    display: inline-block;
    width: 1024px;
    height: 449px;
    bottom: 90px;
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const GraphM = styled(GraphMSVG)`
  position: absolute;
  bottom: 0;

  ${fresponsive(css`
    display: none;
  `)}

  ${fmobile(css`
    display: inline-block;
    position: relative;
    width: 375px;
    height: 237px;
  `)}
`

const GraphCover = styled.div`
  position: absolute;
  bottom: 0;
  background: ${colors.white};
  ${fresponsive(css`
    width: 1680px;
    height: 645px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 60px;
  `)}
`

const Bottom = styled.div`
  position: relative;
  width: 100%;
  z-index: 0;

  ${fresponsive(css`
    height: 473px;
  `)}

  ${fmobile(css`
    height: 237px;
  `)}
`

const PhotoPanel = styled.div`
  position: absolute;
  display: flex;
  ${fresponsive(css`
    padding-left: 56px;
    gap: 46px;
    width: 1680px;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
  `)}

  ${ftablet(css`
    left: -178px;
    transform: translateX(0);
  `)}

  ${fmobile(css`
    width: 851px;
    height: 237px;
    padding-left: 39px;
    transform: translateX(0);
    left: -238px;
    top: 24px;
    gap: 23px;
  `)}
`

const ImageCard = styled.div<{ $yOffset?: string }>`
  position: relative;
  background: ${gradients.surface1};
  overflow: clip;
  ${generateGradientBorder(gradients.surfaceOutline, 1.5)};
  ${({ $yOffset }) =>
		fresponsive(css`
      width: 288px;
      height: 352px;
      top: ${$yOffset};
      transform: translateY(75%);
      border-radius: 18px;
      box-shadow: 0 18px 42px 0 rgba(89 89 89 / 8%);
    `)}

  ${({ $yOffset }) =>
		fmobile(css`
      width: 144px;
      height: 176px;
      padding: 10px;
      border-radius: 9px;
      top: ${$yOffset};

      img {
        width: 100%;
        height: 100%;
      }
    `)}
`

const Frame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${gradients.surface1};

  ${fresponsive(css`
    padding: 20px;
    border-radius: 18px;
  `)}

  ${fmobile(css`
    padding: 10px;
    border-radius: 8px;
  `)}
`
