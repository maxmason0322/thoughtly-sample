import UniversalImage, { type UniversalImageData } from "library/UniversalImage"
import { fmobile, fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"

export default function Card({ image }: { image: UniversalImageData }) {
	return (
		<Wrapper>
			<Image image={image} alt="widget" />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1.25px solid #e4e4e4;
	background: linear-gradient(210deg, #fff 2.03%, #f7f7f7 255.34%);
	overflow: clip;
	z-index: 2;
	position: relative;

	${fresponsive(css`
		width: 216px;
		height: 264px;
		padding: 15px;
		border-radius: 16px;
		box-shadow: 0 13.5px 31.5px 0 rgba(89 89 89 / 8%);
	`)}

	${fmobile(css`
		scale: 0.5;
	`)}
`

const Image = styled(UniversalImage)`
	width: 100%;
	height: 100%;

	${fresponsive(css`
		border-radius: 8px;
	`)}
`
