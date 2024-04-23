import { ReactComponent as PhoneSVG } from "images/global/icons/Phone.svg"
import { fmobile, fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"

export default function Circle() {
	return (
		<Wrapper>
			<Inner>
				<Highlight />
				<PhoneIcon />
			</Inner>
		</Wrapper>
	)
}

const Highlight = styled.div`
  position: absolute;
  opacity: 0.25;

  ${fresponsive(css`
    width: 111px;
    height: 64px;
    border-radius: 111px;
    background: linear-gradient(
      338deg,
      rgb(236 251 232) 24.31%,
      rgb(255 255 255) 94.24%
    );
    filter: blur(5.5px);
    transform: translateX(-50%);
    left: 50%;
    z-index: 1;
    bottom: 26px;
  `)}

  ${fmobile(css`
    width: 44.4px;
    height: 25.6px;
    border-radius: 44.4px;
    bottom: 11.2px;
    filter: blur(2.2px);
  `)}
`

const Wrapper = styled.button`
  cursor: pointer;
  position: relative;
  background: ${gradients.surface2Reverse};
  display: flex;
  align-items: center;

  ${fresponsive(css`
    width: 68px;
    height: 68px;
    padding: 16px;
    border-radius: 97.35px;
  `)}

  ${fmobile(css`
    width: 27px;
    height: 27px;
    padding: 6.4px;
    border-radius: 38.94px;
  `)}
    
    svg {
    path {
      fill: ${colors.white};
    }
  }
`

const Inner = styled.div`
  background-color: ${colors.green400};
  position: absolute;
  transform: translateX(-50%);
  left: 50%;

  ${fresponsive(css`
    box-shadow:
      0 2px 1.5px 0 rgba(216 250 206 / 75%) inset,
      0 -2px 1px 0 rgba(23 122 12 / 16%) inset;
    width: 68px;
    height: 68px;
    padding: 16px;
    border-radius: 97.35px;
  `)}

  ${fmobile(css`
    box-shadow:
      0 1px 1.5px 0 rgba(216 250 206 / 75%) inset,
      0 -2px 1px 0 rgba(23 122 12 / 16%) inset;
    width: 27px;
    height: 27px;
    padding: 6.4px;
    border-radius: 38.94px;
  `)}
`

const PhoneIcon = styled(PhoneSVG)`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  ${fresponsive(css`
    height: 36px;
    width: 36px;
  `)}

  ${fmobile(css`
    height: 14.4px;
    width: 14.4px;
  `)}
`
