import DotSVG from "images/global/icons/Dot.svg"
import { fmobile, fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"

export const Dots = styled.div`
  position: absolute;
  background-image: url(${DotSVG});
  background-repeat: repeat;
  background-size: 100% 100%;
  background-position: center center;

  ${fresponsive(css`
    inset: 15px;
    background-size: 23px 23px;
  `)}

  ${fmobile(css`
    inset: 9px;
  `)}
`
