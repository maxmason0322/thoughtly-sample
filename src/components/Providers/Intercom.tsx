import { IntercomProvider } from "react-use-intercom"
import { createGlobalStyle, keyframes } from "styled-components"

const Intercom = () => {
	const onIntercomUserEmailSupplied = () => {
		if (typeof window !== "undefined") {
			// window.gtag("event", "conversion", {
			//   send_to: "AW-11413179986/dtqBCLTw5v8YENKcncIq",
			// });
			analytics.track("Intercom User Email Supplied")
		}
	}

	return (
		<>
			<IntercomStyle />
			<IntercomProvider
				appId={"uii3kkuk"}
				autoBoot={true}
				onUserEmailSupplied={onIntercomUserEmailSupplied}
			/>
		</>
	)
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const IntercomStyle = createGlobalStyle`
	.intercom-lightweight-app {
		animation: ${fadeIn} 1s;
	}
`

export default Intercom
