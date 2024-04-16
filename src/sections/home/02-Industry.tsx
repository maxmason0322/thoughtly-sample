import Selector from "components/Buttons/Selector"
import { fresponsive } from "library/fullyResponsive"
import { useState } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"

export default function Industry() {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<Wrapper>
			<Inner>
				<Top>
					<Title>
						The future of customer <span>interaction.</span>
					</Title>
					<Selector
						type="button"
						active={activeIndex === 0}
						onClick={() => setActiveIndex(0)}
					>
						Healthcare
					</Selector>
					<Selector
						type="button"
						active={activeIndex === 1}
						onClick={() => setActiveIndex(1)}
					>
						Services
					</Selector>
				</Top>
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
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    height: 1015px;
    padding: 36px 156px 171px;
    gap: 47px;
  `)}
`

const Top = styled.div`
  display: flex;

  ${fresponsive(css`
    gap: 63px;
  `)}
`

const Title = styled.h2`
  ${textStyles.h4}
  color: ${colors.black};

  span {
    ${transparentText}
    background-image: ${gradients.greenBlue};
  }

  ${fresponsive(css`
    width: 395px;
  `)}
`
