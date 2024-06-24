import Primary from "components/Buttons/Primary"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ReactComponent as ProductSVG } from "images/platform/Product.svg"
import { ReactComponent as Widget1SVG } from "images/platform/Widget1.svg"
import { ReactComponent as Widget2SVG } from "images/platform/Widget2.svg"
import { ReactComponent as Widget3SVG } from "images/platform/Widget3.svg"
import { fresponsive } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useRef } from "react"
import styled, { css } from "styled-components"
import { gradients } from "styles/colors"
import textStyles, { transparentText } from "styles/text"
import links from "utils/links"

gsap.registerPlugin(ScrollTrigger)

export default function PlatformHero() {
	const productRef = useRef(null)

	useAnimation(() => {
		gsap.to(`${Product.toString()}`, {
			scrollTrigger: {
				trigger: Product.toString(),
				start: "top top+=200",
				pin: true,
				scrub: 0.5,
				anticipatePin: 1,
			},
			x: -1100,
			scale: 0.8,
		})

		gsap.to(`${Copy.toString()}`, {
			scrollTrigger: {
				trigger: Copy.toString(),
				start: "top top+=200",
				scrub: true,
			},
			y: -250,
		})

		gsap.to(
			`${Widget1.toString()}, ${Widget2.toString()}, ${Widget3.toString()}`,
			{
				scrollTrigger: {
					trigger: Widget1.toString(),
					start: "top top+=70",
					pin: true,
					scrub: 1,
					anticipatePin: 1,
				},
				x: -1840,
			},
		)
	}, [])

	return (
		<Wrapper>
			<Copy>
				<Title>
					The AI Agent <Green>Platform</Green> that does it all.
				</Title>
				<Buttons>
					<Primary to={links.todo} icon="chev" outline>
						Talk to Sales
					</Primary>
					<Primary to={links.todo} icon="calendar" variant="secondary" outline>
						Book a Demo
					</Primary>
				</Buttons>
			</Copy>
			<Product>
				<ProductSVG />
			</Product>
			<Widget1>
				<Widget1SVG />
			</Widget1>
			<Widget2>
				<Widget2SVG />
			</Widget2>
			<Widget3>
				<Widget3SVG />
			</Widget3>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 100%;

	${fresponsive(css`
		height: 2222px;
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
`

const Title = styled.p`
	${textStyles.h2}

	${fresponsive(css`
		width: 678px;
		height: 330px;
	`)}
`

const Green = styled.span`
	${transparentText};
	background-image: ${gradients.greenGreen};
`

const Buttons = styled.div`
	display: flex;
	flex-direction: row;

	${fresponsive(css`
		gap: 12px;
	`)}
`

const Product = styled.div`
	position: relative;
  z-index: 1;

  ${fresponsive(css`
    left: 924px;
    top: 252px;
  `)}
`

const Widget = styled.div`
	position: absolute;
	z-index: 2;

	${fresponsive(css`
		width: 216px;
    height: 264px;
	`)}
`

const Widget1 = styled(Widget)`
	z-index: 0;

	${fresponsive(css`
		left: 864px;
		top: 142px;
	`)}
`

const Widget2 = styled(Widget)`
	${fresponsive(css`
		left: 756px;
		top: 541px;
	`)}
`

const Widget3 = styled(Widget)`
	${fresponsive(css`
		left: 1316px;
		top: 913px;
	`)}
`
