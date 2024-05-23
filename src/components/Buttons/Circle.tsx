import Icon, { type IconType } from "components/Icon"
import { fmobile, fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"

export default function Circle({
	icon = "phone",
	iconColor = colors.white,
	className = "",
}: { icon?: IconType; iconColor?: string; className?: string }) {
	return (
		<Wrapper className={className}>
			<Inner>
				<Highlight />
				<StyledIcon name={icon} />
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

const Wrapper = styled.div`
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
  width: 100%;
  height: 100%;

  ${fresponsive(css`
    box-shadow:
      0 2px 1.5px 0 rgba(216 250 206 / 75%) inset,
      0 -2px 1px 0 rgba(23 122 12 / 16%) inset;
    border-radius: 97.35px;
  `)}

  ${fmobile(css`
    box-shadow:
      0 1px 1.5px 0 rgba(216 250 206 / 75%) inset,
      0 -2px 1px 0 rgba(23 122 12 / 16%) inset;
    border-radius: 38.94px;
  `)}
`

const StyledIcon = styled(Icon)`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  height: 53%;
  width: 53%;

  ${fmobile(css`
    height: 14.4px;
    width: 14.4px;
  `)}
`
