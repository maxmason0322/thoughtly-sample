import Primary from "components/Buttons/Primary"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePinType } from "library/Scroll"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import useMedia from "library/useMedia"
import styled, { css } from "styled-components"
import { gradients } from "styles/colors"
import {
	desktopBreakpoint,
	mobileBreakpoint,
	tabletBreakpoint,
} from "styles/media"
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

	const productXPercent = useMedia(-64, -64, -50.5, -20.5)
	const productYPercent = useMedia(-30, -30, -90, -20)
	const productScale = useMedia(0.8, 0.8, 0.9, 1)
	const widgetsXPercent = useMedia(-800, -800, -500, -225)
	const widgetsYPercent = useMedia(-45, -45, -200, -20)
	const widget3YPercent = useMedia(-75, -75, -230, -30)
	const copyYPercent = useMedia(-400, -400, -200, 0)

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
				xPercent: productXPercent,
				yPercent: productYPercent,
				scale: productScale,
			},
			0,
		)

		tl.to(
			`${Widget1.toString()}, ${Widget2.toString()}`,
			{
				xPercent: widgetsXPercent,
				yPercent: widgetsYPercent,
			},
			0,
		)

		tl.to(
			`${Widget3.toString()}`,
			{
				xPercent: widgetsXPercent - 75,
				yPercent: widget3YPercent,
			},
			0,
		)

		tl.to(
			`${Copy.toString()}`,
			{
				yPercent: copyYPercent,
			},
			0,
		)
	}, [
		pinType,
		productXPercent,
		productYPercent,
		productScale,
		widgetsXPercent,
		widgetsYPercent,
		widget3YPercent,
		copyYPercent,
	])

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

	${ftablet(css`
		max-width: ${tabletBreakpoint}px;
	`)}

	${fmobile(css`
		max-width: ${mobileBreakpoint}px;
	`)}
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

	${ftablet(css`
		gap: 36px;
		top: 175px;
		left: 68px;
	`)}

	${fmobile(css`
		gap: 44px;
		transform: translateX(-50%);
		left: 50%;
		top: 110px;
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

	${ftablet(css`
		width: 888px;
	`)}

	${fmobile(css`
		${textStyles.h6};
		height: 135px;
		width: 314px;
		text-align: center;
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

	${ftablet(css`
		left: 517px;
		top: 671px;
	`)}

	${fmobile(css`
		position: absolute;
		top: 445px;
		left: 112px;
		height: 260px;
		width: 445px;
	`)}
`

const Widget = styled.div`
	position: absolute;
	z-index: 2;

	${fmobile(css`
		scale: 0.5;
	`)}
`

const Widget1 = styled(Widget)`
	z-index: 0;

	${fresponsive(css`
		left: 876px;
		top: 122px;
	`)}

	${ftablet(css`
		top: 550px;
		left: 484px;
	`)}

	${fmobile(css`
		top: 347px;
		left: 140px;
	`)}
`

const Widget2 = styled(Widget)`
	${fresponsive(css`
		left: 732px;
		top: 549px;
	`)}

	${ftablet(css`
		left: 330px;
		top: 860px;
	`)}

	${fmobile(css`
		top: 475px;
		left: 24px;
	`)}
`

const Widget3 = styled(Widget)`
	${fresponsive(css`
		right: -96px;
		top: 853px;
	`)}

	${ftablet(css`
		right: 56px;
		top: 1060px;
	`)}

	${fmobile(css`
		top: 545px;
		left: 267px;
		right: unset;
	`)}
`
