import DotSVG from "images/global/icons/Dot.svg"
import { fmobile, fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"

export const Dots = styled.div`
  position: absolute;
  background-image: url(${DotSVG});
  background-repeat: repeat;
  background-position: center center;

  ${fresponsive(css`
    inset: 15px;
    background-size: 24px 24px;
  `)}

  ${fmobile(css`
    inset: 9px;
  `)}
`
