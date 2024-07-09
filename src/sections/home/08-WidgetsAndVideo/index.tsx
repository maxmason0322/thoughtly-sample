import { useClientOnly } from "library/ClientOnly"
import { fmobile, fresponsive } from "library/fullyResponsive"
import useMedia from "library/useMedia"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import { useMediaQueryAlt } from "utils/useMediaQueryAlt"
import DesktopTablet from "./DesktopTablet"
import Mobile from "./Mobile"

export default function WidgetsAndVideo() {
	const responsive = useMedia(false, false, true, true)
	const mobilePortrait = useMedia(false, false, false, true)
	const isLandscape = useMediaQueryAlt("(orientation: landscape)")
	const mobile = useClientOnly(
		(isLandscape && responsive) || mobilePortrait,
		true,
	)

	// Avoid hydration error by rendering null on the initial render
	if (typeof window === "undefined") {
		return null
	}

	return <Wrapper>{mobile ? <Mobile /> : <DesktopTablet />}</Wrapper>
}

const Wrapper = styled.section`
	position: relative;
	background: ${colors.beige200};
	${fresponsive(css`
		height: 1525px;
		width: 100%;
	`)}

	${fmobile(css`
		height: 1350px;
	`)}
`
