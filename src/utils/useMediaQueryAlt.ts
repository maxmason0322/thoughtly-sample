import { useEffect, useState } from "react"

export function useMediaQueryAlt(query: string) {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		// window is not defined on the server
		if (typeof window !== "undefined") {
			const mediaQueryList = window.matchMedia(query)
			setMatches(mediaQueryList.matches)

			const listener = (event: MediaQueryListEvent) => setMatches(event.matches)

			mediaQueryList.addEventListener("change", listener)
			return () => mediaQueryList.removeEventListener("change", listener)
		}
	}, [query])

	return matches
}
