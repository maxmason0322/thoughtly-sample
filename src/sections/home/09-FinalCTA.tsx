import Primary from "components/Buttons/Primary"
import Kicker from "components/Kicker"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import { ReactComponent as GraphSVG } from "images/home/graph.svg"
import { ReactComponent as GraphTSVG } from "images/home/graphT.svg"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useRef } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import {
	desktopBreakpoint,
	mobileBreakpoint,
	tabletBreakpoint,
} from "styles/media"
import textStyles from "styles/text"
import links from "utils/links"

export default function FinalCTA() {
	const bottom = useRef<HTMLDivElement | null>(null)
	const graphCover = useRef<HTMLDivElement | null>(null)
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
			yOffset: "122px",
		},
		{
			image: ctaImages.allCtaImages.nodes[3]?.childImageSharp?.gatsbyImageData,
			alt: "man using photography equipment",
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
			<ImageCard className="cta-image-card" key={alt} $yOffset={yOffset}>
				<UniversalImage image={image} alt="cta image" />
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
					end: "top 25%",
					scrub: true,
				},
				onComplete: () => {
					gsap
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

	return (
		<Wrapper>
			<Inner>
				<Top>
					<Left>
						<Kicker>Scale with Ease</Kicker>
						<Header>Join the communication revolution.</Header>
					</Left>
					<Right>
						<Row>
							<Primary to={links.todo} outline>
								Build your own Thoughtly
							</Primary>
							<Primary to={links.todo} variant="secondary" icon="chev">
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

  ${fresponsive(css`
    padding-bottom: 182px;
  `)}

  ${ftablet(css`
    padding-bottom: 98px;
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
    max-width: ${mobileBreakpoint}px;
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
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${fresponsive(css`
    gap: 18px;
    width: 647px;
  `)}
`

const Header = styled.h1`
  ${textStyles.h3}

  ${ftablet(css`
    ${textStyles.h2};
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
`

const Row = styled.div`
  display: flex;
  flex-direction: row;

  ${fresponsive(css`
    gap: 20px;
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
`

const ImageCard = styled.div<{ $yOffset?: string }>`
  position: relative;
  background: ${gradients.surface1};
  ${({ $yOffset }) =>
		fresponsive(css`
      width: 288px;
      height: 352px;
      top: ${$yOffset};
      transform: translateY(75%);
      border-radius: 18px;
      box-shadow: 0 18px 42px 0 rgba(89 89 89 / 8%);
      padding: 20px;
    `)}
`
