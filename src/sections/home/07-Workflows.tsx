import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles from "styles/text"

export default function Workflows() {
	return (
		<Wrapper>
			<Inner>
				<Content />
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;

  ${fresponsive(css`
    padding: 106px 170px 25px;
  `)}
`

const Content = styled.div`
  position: relative;
  width: 100%;

  ${fresponsive(css`
    height: 671px;
  `)}
`
