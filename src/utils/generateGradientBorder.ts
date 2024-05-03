import { fresponsive } from "library/fullyResponsive"
import { css } from "styled-components"

/**
 * generates CSS for a gradient border with a transparent background
 * @param gradient - the gradient to use for the border
 * @param borderSize - the size of the border in pixels
 */
export const generateGradientBorder = (
	gradient: string,
	borderSize: number,
) => css`



  ${fresponsive(css`
  border: ${borderSize}px solid transparent;
  background: ${gradient};
  background-size: calc(100% + ${borderSize * 2}px)
    calc(100% + ${borderSize * 2}px);
  background-position: center;
  `)}
  /* mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  mask-composite: xor;
  mask-composite: exclude; */
`
