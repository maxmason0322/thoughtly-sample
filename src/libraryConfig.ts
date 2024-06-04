import { type Config, defaultConfig } from "library/defaultConfig"

/**
 * The transition names that can be used in the page transition
 */
export type TransitionNames = "fade"

const config: Config = {
	...defaultConfig,
	defaultTransition: "fade",
	getTimeNeeded: (time: number) => time * 4 + 2000,
}

export default config
