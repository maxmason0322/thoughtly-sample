import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"

export default function CallWidget({
	className = "",
}: {
	className: string
}) {
	return <Wrapper className={className} />
}

const Wrapper = styled.div`
  background: ${gradients.surface1};

  ${fresponsive(css`
    border: 1.5px solid ${colors.gray300};
    width: 311px;
    height: 197px;
    border-radius: 18px;
    box-shadow: 0 -1px 6px 0 rgba(38 38 38 / 6%) inset, 0 18px 32px 0 rgba(89 89 89 / 4%);
  `)}
`
