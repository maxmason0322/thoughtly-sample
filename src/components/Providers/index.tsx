import { ScreenProvider } from "library/ScreenContext"
import StyledManager from "library/StyledManager"
import { IntercomProvider, useIntercom } from "react-use-intercom"
import CalendlyModalProvider from "./CalendlyModalProvider"

interface ProvidersProps {
	children: React.ReactNode
}

/**
 * providers here will be mounted once, and will never unmount
 */
export function RootProviders({ children }: ProvidersProps) {
	const onIntercomUserEmailSupplied = () => {
		if (typeof window !== "undefined") {
			// window.gtag("event", "conversion", {
			//   send_to: "AW-11413179986/dtqBCLTw5v8YENKcncIq",
			// });
			analytics.track("Intercom User Email Supplied")
		}
	}

	return (
		<ScreenProvider>
			<IntercomProvider
				appId={"uii3kkuk"}
				autoBoot={true}
				onUserEmailSupplied={onIntercomUserEmailSupplied}
			>
				<CalendlyModalProvider>{children}</CalendlyModalProvider>
			</IntercomProvider>
		</ScreenProvider>
	)
}

/**
 * providers here will be unmounted and remounted on every route change
 */
export function RouteProviders({ children }: ProvidersProps) {
	return <StyledManager>{children}</StyledManager>
}
