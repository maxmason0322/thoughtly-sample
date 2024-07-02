import Primary from "components/Buttons/Primary"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePinType } from "library/Scroll"
import UniversalImage from "library/UniversalImage"
import { fresponsive } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import styled, { css } from "styled-components"
import { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"
import links from "utils/links"
import Card from "./Card"

gsap.registerPlugin(ScrollTrigger)

export default function PlatformHero() {
	const pinType = usePinType()

	const imageQuery = useStaticQuery(graphql`
		query HeroCardsQuery {
			widget1: file(relativePath:  {
				 eq: "platform/hero/Widget1.png"
			}) {
				childImageSharp {
					gatsbyImageData
				}
			}
			widget2: file(relativePath:  {
				 eq: "platform/hero/Widget2.png"
			}) {
				childImageSharp {
					gatsbyImageData
				}
			}
			widget3: file(relativePath:  {
				eq: "platform/hero/Widget3.png"
			}) {
				childImageSharp {
					gatsbyImageData
				}
			}
			product: file(relativePath:  {
				 eq: "platform/hero/Product.png"
			}) {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	`)

	useAnimation(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ImagesWrapper.toString(),
				start: "top top",
				pin: true,
				pinType,
				anticipatePin: 1,
				scrub: 1,
			},
		})

		tl.to(
			`${Product.toString()}`,
			{
				xPercent: -64,
				yPercent: -30,
				scale: 0.8,
			},
			0,
		)

		tl.to(
			`${Widget1.toString()}, ${Widget2.toString()}`,
			{
				xPercent: -800,
				yPercent: -45,
			},
			0,
		)

		tl.to(
			`${Widget3.toString()}`,
			{
				xPercent: -875,
				yPercent: -75,
			},
			0,
		)

		tl.to(
			`${Copy.toString()}`,
			{
				yPercent: -500,
			},
			0,
		)
	}, [pinType])

	return (
		<Wrapper>
			<Inner>
				<Copy>
					<Title>
						The AI Agent <Green>Platform</Green> that does it all.
					</Title>
					<Buttons>
						<Primary to={links.todo} icon="chev" outline>
							Talk to Sales
						</Primary>
						<Primary
							to={links.todo}
							icon="calendar"
							variant="secondary"
							outline
						>
							Book a Demo
						</Primary>
					</Buttons>
				</Copy>
				<ImagesWrapper>
					<Product image={imageQuery.product} alt="product" />
					<Widget1>
						<Card image={imageQuery.widget1} />
					</Widget1>
					<Widget2>
						<Card image={imageQuery.widget2} />
					</Widget2>
					<Widget3>
						<Card image={imageQuery.widget3} />
					</Widget3>
				</ImagesWrapper>
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	width: 100%;
	position: relative;
	display: grid;
	place-items: center;
`

const Inner = styled.div`
	width: 100%;
	max-width: ${desktopBreakpoint}px;
	position: relative;
`

const Copy = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: 3;

	${fresponsive(css`
		gap: 60px;
		top: 230px;
		left: 156px;
	`)}
`

const ImagesWrapper = styled.div`
	height: 100vh;
`

const Title = styled.p`
	${textStyles.h2}

	${fresponsive(css`
		width: 678px;
		height: 330px;
	`)}
`

export const Green = styled.span`
	${transparentText};
	background-image: ${gradients.greenGreen};
	display: inline-block;
`

const Buttons = styled.div`
	display: flex;
	flex-direction: row;

	${fresponsive(css`
		gap: 12px;
	`)}
`

const Product = styled(UniversalImage)`
	position: relative;
  z-index: 1;
	width: 100%;
	height: auto;

  ${fresponsive(css`
    left: 924px;
    top: 252px;
  `)}
`

const Widget = styled.div`
	position: absolute;
	z-index: 2;
`

const Widget1 = styled(Widget)`
	z-index: 0;

	${fresponsive(css`
		left: 876px;
		top: 122px;
	`)}
`

const Widget2 = styled(Widget)`
	${fresponsive(css`
		left: 732px;
		top: 549px;
	`)}
`

const Widget3 = styled(Widget)`
	${fresponsive(css`
		right: -96px;
		top: 853px;
	`)}
`
