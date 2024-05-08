import { isBrowser } from "library/deviceDetection"
import type React from "react"
import { createContext, useEffect, useMemo, useState } from "react"
import { useCalendlyEventListener } from "react-calendly"

export const CalendlyModalContext = createContext<{
	modalOpen: boolean
	setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
	modalOpen: false,
	setModalOpen: () => false,
})

export default function CalendlyModalProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const [modalOpen, setModalOpen] = useState<boolean>(false)

	useCalendlyEventListener({
		onEventScheduled: () => {
			if (isBrowser) {
				window.gtag("event", "conversion", {
					send_to: "AW-11413179986/ZG_JCN7UiPcYENKcncIq",
				})
				window.analytics.track("Calendly Event Scheduled")
			}
		},
		onDateAndTimeSelected: () => {
			analytics.track("Calendly Date and Time Selected")
		},
		onProfilePageViewed: () => {
			analytics.track("Calendly Profile Page Viewed")
		},
		onEventTypeViewed: () => {
			analytics.track("Calendly Event Type Viewed")
		},
	})

	useEffect(() => {
		if (modalOpen) {
			analytics.track("Calendly Opened")
		}
	}, [modalOpen])

	const values = useMemo(
		() => ({
			modalOpen,
			setModalOpen,
		}),
		[modalOpen],
	)

	return (
		<CalendlyModalContext.Provider value={values}>
			{children}
		</CalendlyModalContext.Provider>
	)
}
