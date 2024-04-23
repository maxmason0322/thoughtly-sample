import { isBrowser } from "../library/deviceDetection"

/**
 * place all your colors here! the format is:
 * [hex color, optional p3 color]
 *
 * if you provide a p3 color, it will be used where supported
 */
const rawColors = {
	black: ["#1B1F1C"],
	white: ["#FFFFFF"],
	green700: ["#1A7A0C"],
	green600: ["#2CA90A"],
	green500: ["#32CB08"],
	green400: ["#37EB05"],
	green300: ["#72FA4C"],
	green200: ["#A8FC92"],
	green100: ["#D0FDC4"],
	gray900: ["#424242"],
	gray800: ["#5C5C5C"],
	gray700: ["#959393"],
	gray600: ["#AEADAD"],
	gray500: ["#C7C7C7"],
	gray400: ["#E0E0E0"],
	gray300: ["#EBEBEB"],
	gray200: ["#F2F2F2"],
	gray100: ["#FAFAFA"],
} as const satisfies Record<string, [string, string] | [string]>

export type ColorType = keyof typeof rawColors

export const gradients = {
	greenGreen: `linear-gradient(10deg, ${rawColors.green500} -4.03%, ${rawColors.green300} 101.71%)`,
	greenBlue: `linear-gradient(39deg, ${rawColors.green400} 4.74%, #55D2FF 94.17%)`,
	blueBlue: "linear-gradient(5deg, #1D9BC3 -20.25%, #55D2FF 93.91%)",
	bluePurple: "linear-gradient(39deg, #45C2ED 4.74%, #A063DF 94.17%)",
	purplePurple: "linear-gradient(355deg, #591D9D -11.13%, #B39CF4 91.84%)",
	grayGray: `linear-gradient(10deg, ${rawColors.gray900} -4.03%, ${rawColors.gray900} 101.71%)`,
	surface1: "linear-gradient(202deg, #FFF 1.96%, #F9F9F9 188.52%)",
	surface1Reverse: "linear-gradient(358deg, #FFF -25.82%, #F9F9F9 160.26%)",
	surface2: "linear-gradient(194deg, #FFF 5.12%, #E5E5E5 248.15%)",
	surface2Reverse: "linear-gradient(18deg, #FFF 3.72%, #E5E5E5 208.64%)",
	surfaceOutline: "linear-gradient(198deg, #D8D8D8 -45.86%, #F9F9F9 153.9%)",
} as const

const browserSupportsP3 =
	isBrowser && window.matchMedia("(color-gamut: p3)").matches

/**
 * convert the raw colors to an object with the correct color for the current browser
 */
const CSSColors = Object.fromEntries(
	Object.entries(rawColors as Record<string, [string, string] | [string]>).map(
		([key, [color, p3color]]) => {
			return [key, browserSupportsP3 && p3color ? p3color : color]
		},
	),
) as {
	[key in keyof typeof rawColors]: (typeof rawColors)[key][number]
}

/**
 * gsap can't animate p3 colors, so we need to use the hex always
 */
const jsColors = Object.fromEntries(
	Object.entries(rawColors as Record<string, [string, string] | [string]>).map(
		([key, [color]]) => {
			return [key, color]
		},
	),
) as {
	[key in keyof typeof rawColors]: (typeof rawColors)[key][0]
}

export default {
	...CSSColors,
	js: jsColors,
}
