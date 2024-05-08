import Icon from "components/Icon"
import { fmobile, fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"

export default function IconsWidget({ className = "" }: { className: string }) {
	return (
		<Wrapper className={className}>
			<IconWrapper>
				<StyledIcon name="lock" $fill />
			</IconWrapper>
			<IconWrapper>
				<StyledIcon name="target" $fill />
			</IconWrapper>
			<IconWrapper>
				<StyledIcon name="nodes" $stroke />
			</IconWrapper>
			<IconWrapper>
				<StyledIcon name="copyPaste" $fill />
			</IconWrapper>
			<IconWrapper>
				<StyledIcon name="trash" $fill />
			</IconWrapper>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  background: ${gradients.surface1};
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    border: 1.5px solid ${colors.gray300};
    width: 48px;
    height: 280px;
    border-radius: 18px;
    box-shadow: 0 -1px 6px 0 rgba(38 38 38 / 6%) inset,
      0 18px 32px 0 rgba(89 89 89 / 4%);
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const IconWrapper = styled.div`
  display: grid;
  place-items: center;
  flex-grow: 1;

  &:last-of-type {
    border-bottom: none;
  }

  ${fresponsive(css`
    border-bottom: 1.5px solid ${colors.gray300};
  `)}
`

const StyledIcon = styled(Icon)<{ $stroke?: boolean; $fill?: boolean }>`
  path {
    ${({ $fill }) => $fill && "fill: #A5A3A3;"}
    ${({ $stroke }) => $stroke && "stroke: #A5A3A3;"}
  }

  ${fresponsive(css`
    width: 24px;
    height: 24px;
  `)}
`
