import { useClientOnly } from "library/ClientOnly"
import { ScreenProvider } from "library/ScreenContext"
import StyledManager from "library/StyledManager"
import { IntercomProvider } from "react-use-intercom"
import CalendlyModalProvider from "./CalendlyModalProvider"

interface ProvidersProps {
	children: React.ReactNode
}

const Intercom = ({ children }: { children: React.ReactNode }) => {
	const onIntercomUserEmailSupplied = () => {
		if (typeof window !== "undefined") {
			// window.gtag("event", "conversion", {
			//   send_to: "AW-11413179986/dtqBCLTw5v8YENKcncIq",
			// });
			analytics.track("Intercom User Email Supplied")
		}
	}

	const isReady = useClientOnly(true)

	return isReady ? (
		<IntercomProvider
			appId={"uii3kkuk"}
			autoBoot={true}
			onUserEmailSupplied={onIntercomUserEmailSupplied}
		>
			{children}
		</IntercomProvider>
	) : null
}

/**
 * providers here will be mounted once, and will never unmount
 */
export function RootProviders({ children }: ProvidersProps) {
	return (
		<ScreenProvider>
			<Intercom>
				<CalendlyModalProvider>{children}</CalendlyModalProvider>
			</Intercom>
		</ScreenProvider>
	)
}

/**
 * providers here will be unmounted and remounted on every route change
 */
export function RouteProviders({ children }: ProvidersProps) {
	return <StyledManager>{children}</StyledManager>
}
