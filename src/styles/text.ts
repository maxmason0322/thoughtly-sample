import { fresponsive } from "library/fullyResponsive"
import { css } from "styled-components"

const textStyles = {
	h1: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 168px;
		font-style: normal;
		font-weight: 400;
		line-height: 92%; /* 154.56px */
		letter-spacing: -11.76px;
	`),
	h2: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 120px;
		font-style: normal;
		font-weight: 400;
		line-height: 92%; /* 110.4px */
		letter-spacing: -7.2px;
	`),
	h3: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 96px;
		font-style: normal;
		font-weight: 400;
		line-height: 92%; /* 88.32px */
		letter-spacing: -5.76px;
	`),
	h4: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 72px;
		font-style: normal;
		font-weight: 400;
		line-height: 92%; /* 66.24px */
		letter-spacing: -4.32px;
	`),
	h5: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 60px;
		font-style: normal;
		font-weight: 400;
		line-height: 94%; /* 56.4px */
		letter-spacing: -3px;
	`),
	h6: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 48px;
		font-style: normal;
		font-weight: 400;
		line-height: 94%; /* 45.12px */
		letter-spacing: -2.88px;
	`),
	sh1: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 24px;
		font-style: normal;
		font-weight: 500;
		line-height: 120%; /* 28.8px */
		letter-spacing: -0.96px;
	`),
	sh2: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 120%; /* 21.6px */
		letter-spacing: -0.72px;
	`),
	sh3: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 120%; /* 16.8px */
		letter-spacing: -0.42px;
	`),
	sh4: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: 120%; /* 14.4px */
		letter-spacing: -0.36px;
	`),
	tBig: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 60px;
		font-style: normal;
		font-weight: 400;
		line-height: 120%; /* 72px */
		letter-spacing: 4.2px;
		text-transform: uppercase;
	`),
	t1: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 152%; /* 24.32px */
		letter-spacing: 1.12px;
		text-transform: uppercase;
	`),
	t2: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 10px;
		font-style: normal;
		font-weight: 400;
		line-height: 152%; /* 15.2px */
		letter-spacing: 0.7px;
		text-transform: uppercase;
	`),
	t3: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 6px;
		font-style: normal;
		font-weight: 400;
		line-height: 120%; /* 7.2px */
		letter-spacing: 0.48px;
		text-transform: uppercase;
	`),
	bodyXL: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 24px;
		font-style: normal;
		font-weight: 350;
		line-height: 132%; /* 31.68px */
		letter-spacing: -0.48px;
	`),
	bodyL: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 20px;
		font-style: normal;
		font-weight: 350;
		line-height: 132%; /* 26.4px */
		letter-spacing: -0.4px;
	`),
	bodyR: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 16px;
		font-style: normal;
		font-weight: 350;
		line-height: 144%; /* 23.04px */
		letter-spacing: -0.32px;
	`),
	bodyS: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 13px;
		font-style: normal;
		font-weight: 350;
		line-height: 144%; /* 23.04px */
		letter-spacing: -0.32px;
	`),
	bodyXS: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 10px;
		font-style: normal;
		font-weight: 350;
		line-height: 144%; /* 14.4px */
		letter-spacing: -0.2px;
	`),
	quoteXL: fresponsive(css`
		font-family: Whyte, sans-serif;
		font-size: 60px;
		font-style: normal;
		font-weight: 400;
		line-height: 132%; /* 79.2px */
		letter-spacing: -3px;
	`),
}

export const strokeText = css`
  /* styled doesn't prefix this property yet */
  /* stylelint-disable property-no-vendor-prefix */
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
  -webkit-text-stroke-width: 0.07vw;
`

export const strokeTextTransparent = css`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
  -webkit-text-stroke-width: 0.07vw;
`

export const transparentText = css`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
`

export const clampText = (lines: number) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${lines};
`

export default textStyles
