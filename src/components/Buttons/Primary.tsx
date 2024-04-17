import Icon, { type IconType } from "components/Icon"
import UniversalLink, {
	type UniversalLinkProps,
} from "library/Loader/UniversalLink"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

type Props = UniversalLinkProps & {
	outline?: boolean
	variant?: "primary" | "secondary"
	icon?: IconType
}

export default function Primary({
	variant = "primary",
	outline = false,
	icon,
	children,
	...props
}: Props) {
	return (
		<Wrapper {...props}>
			{outline && <Border />}
			<Inner $secondary={variant === "secondary"}>
				{variant !== "secondary" && <Highlight />}
				<Span>
					{children}
					{icon && <Icon name={icon} />}
				</Span>
			</Inner>
		</Wrapper>
	)
}

const Highlight = styled.div`
    position: absolute;
    transition: opacity 0.25s;

    ${fresponsive(css`
        width: 411px;
        height: 65px;
        border-radius: 411px;
        background: linear-gradient(338deg, rgb(236 251 232) 24.31%, rgb(255 255 255) 94.24%);
        opacity: 0.25;
        filter: blur(5.5px);
        z-index: 2;
        transform: translateX(-50%);
        left: 50%;
        bottom: 23px;
    `)}
`

const Border = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 90%;
    height: 90%;
    transform: translate(-50%, -50%);
    transition: width 0.25s, height 0.25s;

    ${fresponsive(css`
        border-radius: 14px;
        border: 2px solid ${colors.green400};
    `)}
`

const Wrapper = styled(UniversalLink)`
    width: fit-content;
    display: flex;
    position: relative;

    ${fresponsive(css`
        height: 50px;
    `)}

    &:hover {
        ${Highlight} {
            opacity: 0.5;
        }

        ${Border} {
            width: calc(100% + 8px);
            height: calc(100% + 8px);
        }
    }
`

const Inner = styled.div<{ $secondary: boolean }>`
    display: flex;
    ${({ $secondary }) =>
			fresponsive(css`
        border-radius: 12px;
        height: 50px;
        padding: 16px 24px;
        border: ${
					$secondary
						? `2px solid ${colors.gray200}`
						: `0.5px solid ${colors.white}`
				};
        box-shadow: ${
					$secondary
						? "unset"
						: "0 2px 1.5px 0 rgba(216 250 206 / 75%) inset, 0 -2px 1px 0 rgba(23 122 12 / 16%) inset"
				};                                    
        background-color: ${$secondary ? colors.white : colors.green300};
    `)}
    width: fit-content;
    position: relative;
    overflow: clip;
    ${textStyles.sh3}

    svg {
        ${fresponsive(css`
            height: auto;
            width: 12px;
        `)}
    }
`

const Span = styled.span`
    width: fit-content;
    display: flex;
    z-index: 3;
    position: relative;

    ${fresponsive(css`
        gap: 6px;
    `)}
`
