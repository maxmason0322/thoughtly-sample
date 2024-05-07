import Icon, { type IconType } from "components/Icon"
import { fresponsive } from "library/fullyResponsive"
import type { ReactNode } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"

export default function Widget({
	title,
	icon,
	iconColor,
	children,
	className = "",
	topConnectors,
	bottomConnectors,
	id,
}: {
	title: string
	icon: IconType
	iconColor: string
	children: ReactNode
	className?: string
	topConnectors?: string[]
	bottomConnectors?: readonly (string | null | undefined)[] | null
	id?: string
}) {
	const topDots = topConnectors?.map((item, index, arr) => {
		const increment = 100 / (arr.length + 1)
		const position = increment * (index + 1)

		return (
			<Connector key={item} $pos={position} $top>
				{item && <ConnectorLabel>{item}</ConnectorLabel>}
				<Node />
			</Connector>
		)
	})

	const bottomDots = bottomConnectors?.map((item, index, arr) => {
		const increment = 100 / (arr.length + 1)
		const position = increment * (index + 1)

		return (
			<Connector key={item} $pos={position}>
				{item && <ConnectorLabel>{item}</ConnectorLabel>}
				<Node />
			</Connector>
		)
	})

	return (
		<Wrapper id={id} className={className}>
			<Top>
				<IconWrapper $color={iconColor}>
					<StyledIcon name={icon} />
				</IconWrapper>
				<Title>{title}</Title>
			</Top>
			<Bottom>{children}</Bottom>
			{topDots}
			{bottomDots}
		</Wrapper>
	)
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${gradients.surface1};
  position: relative;
  z-index: 3;
  will-change: transform;

  ${fresponsive(css`
    width: 388px;
    border-radius: 18px;
    border: 1.5px solid ${colors.gray300};
    box-shadow: 0 -1px 6px 0 rgba(38 38 38 / 6%) inset,
      0 18px 32px 0 rgba(89 89 89 / 4%);
  `)}
`

const Top = styled.div`
  display: flex;
  align-items: center;

  ${fresponsive(css`
    border-bottom: 1.5px solid ${colors.gray200};
    height: 72px;
    gap: 18px;
    padding: 0 18px;
  `)}
`

const Title = styled.span`
  ${textStyles.sh1}
  color: ${colors.black};
`

const StyledIcon = styled(Icon)`
  ${fresponsive(css`
    width: 18.5px;
    height: 18.5px;
  `)}
`

const IconWrapper = styled.div<{ $color: string }>`
  border-style: solid;
  display: grid;
  place-items: center;
  border-color: ${({ $color }) => $color}70;
  background-color: ${({ $color }) => $color}30;

  ${StyledIcon} {
    path,
    circle {
      fill: ${({ $color }) => $color};
    }
  }

  ${fresponsive(css`
    width: 36px;
    height: 36px;
    border-radius: 9.25px;
    border-width: 1.5px;
  `)}
`

const Bottom = styled.div`
  ${textStyles.bodyS}
  color: ${colors.gray600};

  ${fresponsive(css`
    padding: 18px 24px 36px;

    p {
      margin-bottom: 24px;
    }
  `)}
`

const Connector = styled.div<{ $pos: number; $top?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 2;
  bottom: ${({ $top }) => ($top ? "unset" : 0)};
  top: ${({ $top }) => ($top ? 0 : "unset")};
  left: ${({ $pos }) => $pos}%;

  ${({ $top }) =>
		fresponsive(css`
      transform: translate(-50%, ${$top ? "-4.5px" : "4.5px"});
      gap: 8px;
    `)}
`

const ConnectorLabel = styled.span`
  ${textStyles.t2}
  color: #c3c3c3;
  white-space: pre;
  text-align: center;
`

const Node = styled.div`
  border-radius: 99vw;
  background: ${colors.white};

  ${fresponsive(css`
    border: 1.5px solid ${colors.gray300};
    width: 9px;
    height: 9px;
  `)}
`
