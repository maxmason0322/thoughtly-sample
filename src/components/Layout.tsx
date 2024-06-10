import Header from "components/Header"
import Transition from "components/Transition"
import { useBackButton } from "library/Loader/TransitionUtils"
import { loaderAwaitPromise } from "library/Loader/promises"
import Scroll from "library/Scroll"
import { useTrackPageReady } from "library/pageReady"
import useTrackFrameTime from "library/useTrackFrameTime"
import { Suspense, lazy, useEffect, useState, useTransition } from "react"
import styled, { createGlobalStyle, css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"
import Preloader from "./Preloader"
const Footer = lazy(() => import("components/Footer"))

interface LayoutProps {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	useTrackPageReady()
	useBackButton()
	useTrackFrameTime()

	const [showPage, setShowPage] = useState(false)
	const [loading, startTransition] = useTransition()

	useEffect(() => {
		if (loading) {
			let resolve: VoidFunction | undefined
			const promise = new Promise<void>((r) => {
				resolve = r
			})

			loaderAwaitPromise(promise)

			return () => resolve?.()
		}
	}, [loading])

	useEffect(() => {
		startTransition(() => {
			setShowPage(true)
		})

		setTimeout(() => {
			setShowPage(true)
		}, 5000)
	}, [])

	return (
		<>
			<Preloader />
			<GlobalStyle />
			{showPage && (
				<>
					<Transition />
					<ScrollIndex>
						<Header />
						<Main id="main">{children}</Main>
						<Footer position="static" />
					</ScrollIndex>
					<Suspense>
						<Footer position="fixed" />
					</Suspense>
				</>
			)}
		</>
	)
}

const Main = styled.main`
	overflow-x: clip;
	background-color: ${colors.beige200};
`

const globalCss = css`
	/* default text styles */
	html {
		/* if your project uses a dark color for most text, set that here */
		color: ${colors.black};
		background: ${colors.beige300};
		font-family: sans-serif;
		${textStyles.bodyR}
	}

	* {
		/* need this so that fonts match figma */
		text-rendering: geometricprecision;
		-webkit-font-smoothing: antialiased;
	}

	/** restore default focus states for elements that need them */
	*:focus-visible {
		outline: 2px solid #00f8;
	}
`

const GlobalStyle = createGlobalStyle`${globalCss}`

const ScrollIndex = styled(Scroll)`
	z-index: 2;
	pointer-events: none;

	& #smooth-content > * {
		pointer-events: auto;
	}
`
