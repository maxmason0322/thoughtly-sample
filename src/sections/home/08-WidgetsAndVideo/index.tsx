import { fresponsive } from "library/fullyResponsive"
import useMedia from "library/useMedia"
import { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import DesktopTablet from "./DesktopTablet"
import Mobile from "./Mobile"

export default function WidgetsAndVideo() {
	const responsive = useMedia(false, false, true, true)
	const mobilePortrait = useMedia(false, false, false, true)
	const [mobile, setMobile] = useState(false)

	useEffect(() => {
		if (
			(window.matchMedia("(orientation: landscape)").matches && responsive) ||
			mobilePortrait
		) {
			setMobile(true)
		} else {
			setMobile(false)
		}
	}, [responsive, mobilePortrait])

	return <Wrapper>{!mobile ? <DesktopTablet /> : <Mobile />}</Wrapper>
}

const Wrapper = styled.section`
  position: relative;
  ${fresponsive(css`
    height: 1525px;
    width: 100%;
  `)}
`
