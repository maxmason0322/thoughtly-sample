import Primary from "components/Buttons/Primary"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles from "styles/text"
import links from "utils/links"
import ImageGrid from "./ImageGrid"

export default function Benefits() {
	return (
		<Wrapper>
			<Inner>
				<Title>This is the new generation of phone calls.</Title>
				<Primary to={links.todo}>Placeholder</Primary>
				<ImageGrid />
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  place-items: center;

  ${fresponsive(css`
    padding: 0 60px 47px;
  `)}
`

const Inner = styled.div`
  max-width: ${desktopBreakpoint}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${gradients.greenGreen};
  overflow: hidden;
  position: relative;

  ${fresponsive(css`
    gap: 32px;
    border-radius: 60px;
    padding: 57px 0;
    height: 940px;
    width: 1320px;
  `)}
`

const Title = styled.h1`
  ${textStyles.h3};
  color: ${colors.white};
  text-align: center;

  ${fresponsive(css`
    width: 744px;
  `)}
`
