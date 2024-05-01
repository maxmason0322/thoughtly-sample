import { fresponsive } from "library/fullyResponsive"
import type { ReactNode } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"

interface Props {
	children: ReactNode
	className?: string
}

export default function Tag({ children, className = "" }: Props) {
	return (
		<Wrapper className={className}>
			<Inner>{children}</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  background: ${gradients.greenGreen};
  ${textStyles.t3};
  color: ${colors.green700};
  padding: 0.5px;
  ${fresponsive(css`
    border-radius: 4px;
  `)}
`

const Inner = styled.span`
  background-color: ${colors.green100};
  ${fresponsive(css`
    white-space: nowrap;
    border-radius: 3px;
    padding: 4px 5px;
  `)}
`
