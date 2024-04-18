import { fresponsive } from "library/fullyResponsive"
import type { ReactNode } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles, { transparentText } from "styles/text"
import Icon, { type IconType } from "./Icon"

export default function Kicker({
	children,
	icon,
	gradient = false,
	iconLeft = false,
}: {
	children: ReactNode
	icon?: IconType
	gradient?: boolean
	iconLeft?: boolean
}) {
	return (
		<Wrapper $gradient={!!gradient}>
			{icon && iconLeft && <StyledIcon name={icon} />}
			{children}
			{icon && !iconLeft && <StyledIcon name={icon} />}
		</Wrapper>
	)
}

const Wrapper = styled.div<{ $gradient: boolean }>`
  width: fit-content;
  display: flex;
  align-items: center;
  color: ${colors.gray700};
  ${textStyles.sh4}
  white-space: nowrap;

  ${({ $gradient }) =>
		$gradient &&
		css`
    ${transparentText}
    background-image: ${gradients.greenBlue};
  `}

  ${fresponsive(css`
    height: 38px;
    padding: 12px 24px;
    border-radius: 10px;
    border: 1.5px solid ${colors.gray200};
    gap: 8px;
  `)}
`

const StyledIcon = styled(Icon)`
  flex-shrink: 0;

  ${fresponsive(css`
    width: 12px;
    height: 12px;
  `)}
`
