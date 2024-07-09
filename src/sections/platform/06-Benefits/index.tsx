import EmailInput from "components/EmailInput"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles from "styles/text"
import ImageGrid from "./ImageGrid"

export default function Benefits() {
	return (
		<Wrapper>
			<Inner>
				<Copy>
					<Title>This is the new generation of phone calls.</Title>
					<EmailInput />
				</Copy>
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

  ${ftablet(css`
    padding: 0 68px 47px;
  `)}

  ${fmobile(css`
    padding: 0 7px 28px;
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
    border-radius: 60px;
    padding: 57px 0;
    height: 940px;
    width: 1320px;
  `)}

  ${ftablet(css`
    border-radius: 30px;
    width: 888px;
  `)}

  ${fmobile(css`
    border-radius: 30px;
    height: 577px;
    width: 360px;
  `)}
`

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${fresponsive(css`
    gap: 32px;
  `)}

  ${ftablet(css`
    gap: 42px;
  `)}

  ${fmobile(css`
    gap: 48px;
  `)}
`

const Title = styled.h1`
  ${textStyles.h3};
  color: ${colors.white};
  text-align: center;

  ${fresponsive(css`
    width: 744px;
  `)}

  ${fmobile(css`
    ${textStyles.h6};
    width: 314px;
  `)}
`
