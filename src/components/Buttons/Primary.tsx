import { ReactComponent as AnalyticsSVG } from "images/global/icons/Analytics.svg"
import { ReactComponent as ArrowOneSVG } from "images/global/icons/Arrow-one.svg"
import { ReactComponent as CalendarSVG } from "images/global/icons/Calendar.svg"
import { ReactComponent as ChevSVG } from "images/global/icons/Chev.svg"
import { ReactComponent as ChevDownSVG } from "images/global/icons/ChevDown.svg"
import { ReactComponent as CopyPasteSVG } from "images/global/icons/CopyPaste.svg"
import { ReactComponent as GeniusSVG } from "images/global/icons/Genius.svg"
import { ReactComponent as IntegrationSVG } from "images/global/icons/Integration.svg"
import { ReactComponent as LockSVG } from "images/global/icons/Lock.svg"
import { ReactComponent as NodesSVG } from "images/global/icons/Nodes.svg"
import { ReactComponent as PhoneSVG } from "images/global/icons/Phone.svg"
import { ReactComponent as RoutingSVG } from "images/global/icons/Routing.svg"
import { ReactComponent as TargetSVG } from "images/global/icons/Target.svg"
import { ReactComponent as TrashSVG } from "images/global/icons/Trash.svg"
import { ReactComponent as VerifiedSVG } from "images/global/icons/Verified.svg"
import UniversalLink, {
	type UniversalLinkProps,
} from "library/Loader/UniversalLink"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

const iconMap = {
	calendar: CalendarSVG,
	chev: ChevSVG,
	trash: TrashSVG,
	nodes: NodesSVG,
	lock: LockSVG,
	target: TargetSVG,
	analytics: AnalyticsSVG,
	arrowOne: ArrowOneSVG,
	chevDown: ChevDownSVG,
	copyPaste: CopyPasteSVG,
	genius: GeniusSVG,
	integration: IntegrationSVG,
	phone: PhoneSVG,
	routing: RoutingSVG,
	verified: VerifiedSVG,
}

type Props = UniversalLinkProps & {
	outline?: boolean
	variant?: "primary" | "secondary"
	icon?: keyof typeof iconMap
}

export default function Primary({
	variant = "primary",
	outline = false,
	icon,
	children,
	...props
}: Props) {
	const Icon = icon ? iconMap[icon] : null

	return (
		<Wrapper {...props}>
			{outline && <Border />}
			<Inner $secondary={variant === "secondary"}>
				{variant !== "secondary" && <Highlight />}
				<Span>
					{children}
					{Icon && <Icon />}
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
    width: 50%;
    height: 50%;
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
        height: 57px;
        padding: 4px;
    `)}

    &:hover {
        ${Highlight} {
            opacity: 0.5;
        }

        ${Border} {
            width: 100%;
            height: 100%;
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
