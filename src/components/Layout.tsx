import Header from "components/Header"
import Transition from "components/Transition"
import { useBackButton } from "library/Loader/TransitionUtils"
import Scroll from "library/Scroll"
import { useTrackPageReady } from "library/pageReady"
import useTrackFrameTime from "library/useTrackFrameTime"
import { Suspense, lazy } from "react"
import styled, { createGlobalStyle, css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"
import Preloader from "./Preloader"
const Calendly = lazy(() => import("components/CalendlyModal"))
const Footer = lazy(() => import("components/Footer"))

interface LayoutProps {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	useTrackPageReady()
	useBackButton()
	useTrackFrameTime()

	return (
		<>
			<Transition />
			<Preloader />

			<Suspense>
				<Calendly />
			</Suspense>
			<GlobalStyle />
			<ScrollIndex>
				<Header />
				<Main id="main">{children}</Main>
				<Footer position="static" />
			</ScrollIndex>
			<Suspense>
				<Footer position="fixed" />
			</Suspense>
		</>
	)
}

const Main = styled.main`
  overflow-x: clip;
  background-color: ${colors.gray100};
`

const globalCss = css`
  /* default text styles */
  html {
    /* if your project uses a dark color for most text, set that here */
    color: ${colors.black};
    background: ${colors.gray100};
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
