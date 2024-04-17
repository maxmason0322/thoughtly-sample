import UniversalLink, {
	type UniversalLinkProps,
} from "library/Loader/UniversalLink"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

type Props = UniversalLinkProps & {
	children: React.ReactNode
	xPosition?: number
	yPosition?: number
}

export default function Demo({
	children,
	xPosition,
	yPosition,
	...props
}: Props) {
	return <Wrapper {...props}>{children}</Wrapper>
}

const Wrapper = styled(UniversalLink)<{
	xPosition?: number
	yPosition?: number
}>`
    position: absolute;
    left: ${({ xPosition }) => xPosition}px;
    top: ${({ yPosition }) => yPosition}px;

    ${fresponsive(css`
        padding: 12px 18px;
        ${textStyles.sh3}
        color: #000;
        background: linear-gradient(210deg, #FFF 2.03%, #F7F7F7 255.34%);
        border-radius: 10px;
        border: 1.5px solid #E4E4E4;
        box-shadow: 0 18px 42px 0 rgba(89 89 89 / 4%);
    `)}
`
