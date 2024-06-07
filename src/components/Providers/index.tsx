import { ScreenProvider } from "library/ScreenContext"
import StyledManager from "library/StyledManager"
import { Suspense, lazy } from "react"
import DelayRender from "utils/DelayRender"

const IntercomProvider = lazy(() => import("./Intercom"))

interface ProvidersProps {
	children: React.ReactNode
}

/**
 * providers here will be mounted once, and will never unmount
 */
export function RootProviders({ children }: ProvidersProps) {
	children = <ScreenProvider>{children}</ScreenProvider>

	children = (
		<>
			<DelayRender delay={5000}>
				<Suspense>
					<IntercomProvider />
				</Suspense>
			</DelayRender>
			{children}
		</>
	)

	return children
}

/**
 * providers here will be unmounted and remounted on every route change
 */
export function RouteProviders({ children }: ProvidersProps) {
	return <StyledManager>{children}</StyledManager>
}
