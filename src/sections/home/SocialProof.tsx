import Kicker from "components/Kicker"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import { desktopBreakpoint } from "styles/media"

export default function SocialProof() {
	return (
		<Wrapper>
			<Inner>
				<Kicker gradient icon="calendar" iconLeft>
					Featured In
				</Kicker>
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  width: 100%;
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${fresponsive(css`
    padding: 72px 156px 100px;
    gap: 70px;
  `)}
`
