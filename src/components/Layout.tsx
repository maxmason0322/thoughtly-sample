import Header from "components/Header"
import Transition from "components/Transition"
import { useBackButton } from "library/Loader/TransitionUtils"
import Scroll from "library/Scroll"
import { useTrackPageReady } from "library/pageReady"
import useMedia from "library/useMedia"
import useTrackFrameTime from "library/useTrackFrameTime"
import { useContext } from "react"
import { Suspense, lazy } from "react"
import type { MouseEvent } from "react"
import styled, { createGlobalStyle, css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"
import Preloader from "./Preloader"
import { CalendlyModalContext } from "./Providers/CalendlyModalProvider"
const Footer = lazy(() => import("components/Footer"))

interface LayoutProps {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	useTrackPageReady()
	useBackButton()
	useTrackFrameTime()
	const contentHeight = useMedia("650px", "45.139vw", "77.938vw", "133.333vw")
	const contentWidth = useMedia("600px", "41.667vw", "71.942vw", "92vw")

	const { setModalOpen, modalOpen } = useContext(CalendlyModalContext)

	const handleClick = (
		e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
	) => {
		if (e.target === e.currentTarget) {
			setModalOpen(false)
		}
	}

	return (
		<>
			<Transition />
			<Preloader />

			{/* <CalendlyModal
				role="presentation"
				$modalOpen={modalOpen}
				onClick={(e) => handleClick(e)}
			>
				<InlineWidget
					styles={{
						height: `${contentHeight}`,
						width: `${contentWidth}`,
					}}
					url="https://calendly.com/d/cpxn-sxr-85f"
				/>
			</CalendlyModal> */}

			<GlobalStyle />
			<ScrollIndex>
				{/* for some reason, this cannot be suspended (it breaks scrolling) */}
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

const CalendlyModal = styled.div<{ $modalOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0;
  z-index: 100;
  pointer-events: none;
  display: grid;
  place-items: center;
  background: ${colors.gray100}50;
  backdrop-filter: blur(10px);
  transition: all 0.4s;

  ${({ $modalOpen }) =>
		$modalOpen &&
		css`
      opacity: 1;
      pointer-events: auto;
    `}
`
