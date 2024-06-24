import UniversalImage, { type UniversalImageData } from "library/UniversalImage"
import { fresponsive } from "library/fullyResponsive"
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
  border: 1.25px solid #E4E4E4;
  background: linear-gradient(210deg, #FFF 2.03%, #F7F7F7 255.34%);
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
`

const Image = styled(UniversalImage)`
  ${fresponsive(css`
    border-radius: 8px;
    max-height: 234px;
  `)}
`
