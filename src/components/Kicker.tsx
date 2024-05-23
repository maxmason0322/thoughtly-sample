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
	iconColor = colors.gray500,
	className = "",
}: {
	children: ReactNode
	icon?: IconType
	gradient?: boolean
	iconLeft?: boolean
	iconColor?: string
	className?: string
}) {
	return (
		<Wrapper
			className={className}
			$gradient={!!gradient}
			$iconColor={iconColor}
		>
			{icon && iconLeft && <StyledIcon name={icon} />}
			{children}
			{icon && !iconLeft && <StyledIcon name={icon} />}
		</Wrapper>
	)
}

const Wrapper = styled.div<{ $gradient: boolean; $iconColor: string }>`
  width: fit-content;
  display: flex;
  align-items: center;
  color: ${colors.gray700};
  ${textStyles.sh4}
  white-space: nowrap;

  svg {
    path {
      fill: ${({ $iconColor }) => $iconColor};
    }
  }

  ${({ $gradient }) =>
		$gradient &&
		css`
      ${transparentText}
      background-image: ${gradients.greenBlue};
      background-size: 90% 90%;
      background-repeat: no-repeat;
      background-position: center center;
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
