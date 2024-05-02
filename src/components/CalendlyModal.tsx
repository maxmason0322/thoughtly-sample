import { isBrowser } from "library/deviceDetection"
import { useContext, useEffect, useState } from "react"
import { PopupModal } from "react-calendly"
import { CalendlyModalContext } from "./Providers/CalendlyModalProvider"

export default function Calendly() {
	const { setModalOpen, modalOpen } = useContext(CalendlyModalContext)
	const [rootElement, setRootElement] = useState<HTMLElement | undefined>()

	useEffect(() => {
		if (!isBrowser) return

		const rootElementClient = isBrowser
			? document.getElementById("___gatsby")
			: document.createElement("div")

		setRootElement(rootElementClient ?? undefined)
	}, [])

	return (
		rootElement && (
			<PopupModal
				url="https://calendly.com/d/cpxn-sxr-85f"
				onModalClose={() => setModalOpen(false)}
				open={modalOpen}
				rootElement={rootElement}
			/>
		)
	)
}
