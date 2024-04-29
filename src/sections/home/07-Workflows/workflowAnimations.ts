import gsap from "gsap"
import colors from "styles/colors"
import {
	createColorsFromGradient,
	reorderArrayFromArray,
} from "utils/colorFormatter"

const EASE_2 = "power4.inOut"
const EASE_BACK = "back.inOut"

const gradientStops = createColorsFromGradient(
	"39deg, #37EB05 4.74%, #A5CFF9 94.17%",
	32,
)

const newArrayOrder = [
	28, 22, 29, 23, 16, 30, 24, 17, 10, 31, 25, 18, 11, 4, 26, 19, 12, 5, 27, 20,
	13, 6, 0, 21, 14, 7, 1, 15, 8, 2, 9, 3,
]

export const tagStaggerIn = {
	opacity: 1,
	stagger: {
		amount: 3,
	},
	duration: 0.5,
	ease: EASE_2,
}

export const tagStaggerOut = {
	opacity: 0,
	stagger: {
		amount: 0.6,
		from: "end" as const,
	},
	duration: 0.2,
	ease: EASE_2,
}

export const iconStaggerIn = {
	scale: 1,
	stagger: {
		amount: 3,
	},
	duration: 0.5,
	ease: EASE_BACK,
}

export const processCircleAnimation = () => {
	const circles = gsap.utils.toArray(".processing-circle")

	const circleEls = reorderArrayFromArray(circles, newArrayOrder)

	gsap.to(circleEls, {
		stagger: {
			from: "end",
			amount: 0.75,
		},
		fill: (index) => gradientStops[index] ?? colors.green400,
		ease: EASE_2,
		repeat: -1,
		repeatDelay: 0.25,
		yoyo: true,
	})
}
