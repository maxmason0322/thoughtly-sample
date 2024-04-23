import Icon, { type IconType } from "components/Icon"
import UniversalLink, {
	type UniversalLinkProps,
} from "library/Loader/UniversalLink"
import { fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

type Props = UniversalLinkProps & {
	outline?: boolean
	variant?: "primary" | "secondary" | "demo"
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
			<Inner $secondary={variant === "secondary"} $demo={variant === "demo"}>
				{variant !== "secondary" && <Highlight />}
				{variant !== "demo" && <Highlight />}
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
    background: linear-gradient(338deg, rgb(236 251 232) 24.31%, rgb(255 255 255) 94.24%);
    opacity: 0.25;
    z-index: 2;
    transform: translateX(-50%);
    left: 50%;

    ${fresponsive(css`
        width: 411px;
        height: 65px;
        border-radius: 411px;
        filter: blur(5.5px);
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

    &:hover {
        ${Highlight} {
            opacity: 0.5;
        }

        ${Border} {
            width: calc(100% + 8px);
            height: calc(100% + 8px);
        }
    }

    ${fresponsive(css`
        height: 50px;
    `)}

    ${ftablet(css`
        height: 58px;
    `)}
`

const Inner = styled.div<{ $secondary: boolean; $demo: boolean }>`
    display: flex;
    width: fit-content;
    position: relative;
    overflow: clip;
    align-items: center;
    justify-content: center;
    ${textStyles.sh3}
    height: 100%;

    ${({ $secondary, $demo }) =>
			fresponsive(css`
            border-radius: ${$demo ? "10px" : "12px"};
            padding: ${$demo ? "12px 18px" : "16px 24px"};
            border: ${
							$secondary
								? `2px solid ${colors.gray200}`
								: $demo
									? "1.5px solid #E4E4E4"
									: `0.5px solid ${colors.white}`
						};
            box-shadow: ${
							$secondary
								? "unset"
								: $demo
									? "0px 18px 42px 0px rgba(89, 89, 89, 0.04)"
									: "0 2px 1.5px 0 rgba(216 250 206 / 75%) inset, 0 -2px 1px 0 rgba(23 122 12 / 16%) inset"
						};                                    
            background: ${
							$secondary
								? colors.white
								: $demo
									? "linear-gradient(210deg, #FFF 2.03%, #F7F7F7 255.34%)"
									: colors.green300
						};
    `)}

    ${ftablet(css`
        ${textStyles.sh2}
        padding: 18px 24px;
    `)}
    

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
