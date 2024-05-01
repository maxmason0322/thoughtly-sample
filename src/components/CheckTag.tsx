import Icon from "components/Icon"
import { fresponsive } from "library/fullyResponsive"
import type { ReactNode } from "react"
import styled, { css } from "styled-components"
import textStyles from "styles/text"

export default function CheckTag({
	children,
}: {
	children: ReactNode
}) {
	return (
		<Wrapper>
			<StyledIcon name="check" /> {children}
		</Wrapper>
	)
}

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
  background: #F7F7F7;
  color: #727272;
  display: flex;
  ${textStyles.bodyXS};

  ${fresponsive(css`
    gap: 10px;
    padding: 10px;
    border-radius: 9px;
  `)}
`

const StyledIcon = styled(Icon)`
  ${fresponsive(css`
      width: 14px;
      height: 14px;
  `)}
`
