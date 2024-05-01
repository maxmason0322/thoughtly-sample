import Footer from "components/Footer"
import Header from "components/Header"
import { useBackButton } from "library/Loader/TransitionUtils"
import Scroll from "library/Scroll"
import { isBrowser } from "library/deviceDetection"
import { useTrackPageReady } from "library/pageReady"
import useTrackFrameTime from "library/useTrackFrameTime"
import { useContext, useEffect, useState } from "react"
import { PopupModal } from "react-calendly"
import styled, { createGlobalStyle, css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"
import { CalendlyModalContext } from "./Providers/CalendlyModalProvider"

interface LayoutProps {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	useTrackPageReady()
	useBackButton()
	useTrackFrameTime()

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
		<>
			{/* <Transition />
			<Preloader /> */}

			{rootElement && (
				<PopupModal
					url="https://calendly.com/d/cpxn-sxr-85f"
					onModalClose={() => setModalOpen(false)}
					open={modalOpen}
					rootElement={rootElement}
				/>
			)}

			<GlobalStyle />
			<ScrollIndex>
				<Header />
				<Main>{children}</Main>
				<Footer position="static" />
			</ScrollIndex>
			<Footer position="fixed" />
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

const Div = styled.div``
