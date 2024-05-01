import DotSVG from "images/global/icons/Dot.svg"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "./colors"

export const Dots = styled.div`
  position: absolute;
  background-image: url(${DotSVG});
  background-repeat: repeat;
  background-color: ${colors.gray100};
  width: 100%;
  height: 100%;
  
  ${fresponsive(css`
    left: 0;
    top: 0;
    background-position: 22px 22px; 
    background-size: 24px 24px;
  `)}
`
