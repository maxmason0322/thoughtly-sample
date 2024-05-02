import { useEffect, useState } from "react"

const queue: VoidFunction[] = []
let queueIsRunning = false

/**
 * delay rendering of any children until we're idle
 */
export default function DelayRender({
	children,
}: {
	children: React.ReactNode | React.ReactNode[]
}) {
	const [isIdle, setIsIdle] = useState(false)

	useEffect(() => {
		queue.push(
			() => {
				// pass
			},
			() => setIsIdle(true),
			() => {
				// pass
			},
		)
		if (!queueIsRunning) runQueue()
	}, [])

	// recurse into children
	if (Array.isArray(children)) {
		return (
			<>
				{children.map((child, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: only unique
					<DelayRender key={i}>{child}</DelayRender>
				))}
			</>
		)
	}

	return isIdle ? <>{children}</> : null
}

const runQueue = () => {
	queueIsRunning = true
	const next = queue.shift()
	if (next) {
		const runNext = () => {
			next()
			runQueue()
		}
		if ("requestIdleCallback" in window) requestIdleCallback(runNext)
		else requestAnimationFrame(runNext)
	} else {
		queueIsRunning = false
	}
}
