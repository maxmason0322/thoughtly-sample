import loader from "library/Loader"
import { isBrowser } from "library/deviceDetection"
import { useEffect, useState } from "react"
import { createGlobalStyle } from "styled-components"

const queue: VoidFunction[] = []
let queueIsRunning = false

/**
 * delay rendering of any children until we're idle
 */
export default function DelayRender({
	children,
	delay = 0,
	fallback = null,
}: {
	children: React.ReactNode | React.ReactNode[]
	delay?: number
	fallback?: React.ReactNode
}): JSX.Element | null {
	const [isIdle, setIsIdle] = useState(false)
	/* if the page has existed for more than 10 seconds, always start rendered */
	const override = isBrowser && performance.now() > 10_000
	const [pageHasLoaded, setPageHasLoaded] = useState(override)

	useEffect(() => {
		if (!pageHasLoaded) return

		queue.push(() => setIsIdle(true))

		if (!queueIsRunning) runQueue()
	}, [pageHasLoaded])

	loader.useEventListener("anyEnd", () => {
		setTimeout(() => {
			setPageHasLoaded(true)
		}, delay)
	})

	if (Array.isArray(children)) {
		return (
			<>
				{children.map((child, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: no other easy option here
					<DelayRender key={i}>{child}</DelayRender>
				))}
			</>
		)
	}

	return isIdle ? (
		<>{children}</>
	) : (
		<>
			{fallback}
			{delay === 0 && <GlobalStyle />}
		</>
	)
}

const GlobalStyle = createGlobalStyle`
	body {
		min-height: 9999vh;
	}
`

const runQueue = () => {
	queueIsRunning = true
	const next = queue.shift()
	if (next) {
		const runNext = () => {
			next()
			if ("requestIdleCallback" in window) requestIdleCallback(runQueue)
			else requestAnimationFrame(runQueue)
		}

		if ("requestIdleCallback" in window) requestIdleCallback(runNext)
		else requestAnimationFrame(runNext)
	} else {
		queueIsRunning = false
	}
}
