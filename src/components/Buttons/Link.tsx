import type { IconType } from "components/Icon"
import Icon from "components/Icon"
import Tag from "components/Tag"
import type { UniversalLinkProps } from "library/Loader/UniversalLink"
import UniversalLink from "library/Loader/UniversalLink"
import { fresponsive, ftablet } from "library/fullyResponsive"
import type React from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

type Props = UniversalLinkProps & {
	icon?: IconType
	tag?: string
	children: React.ReactNode
}

export default function Link({ icon, tag, children, ...props }: Props) {
	return (
		<Wrapper $hasTag={!!tag} {...props}>
			<Span>
				{children}
				{icon && !tag && <StyledIcon name={icon} />}
				{tag && !icon && <StyledTag>{tag}</StyledTag>}
			</Span>
		</Wrapper>
	)
}

const Wrapper = styled(UniversalLink)<{ $hasTag: boolean }>`
	pointer-events: ${({ $hasTag }) => ($hasTag ? "none" : "auto")};
	width: fit-content;
	display: flex;
	${textStyles.sh4};
	transition: background-color 0.25s;
	color: ${({ $hasTag }) => ($hasTag ? colors.gray800 : colors.black)};

	&:hover {
		background-color: ${({ $hasTag }) =>
			$hasTag ? "transparent" : colors.beige300};
	}

	${fresponsive(css`
		padding: 8px 10px;
		border-radius: 8px;
		height: 30px;
	`)}

	${ftablet(css`
		${textStyles.sh3}
	`)}
`

const Span = styled.span`
	width: fit-content;
	display: flex;
	align-items: center;
`

const StyledTag = styled(Tag)`
	${fresponsive(css`
		margin-left: 7px;
	`)}
`

const StyledIcon = styled(Icon)`
	${fresponsive(css`
		margin-left: 2px;
		height: auto;
		width: 12px;
	`)}

	path {
		fill: ${colors.gray600};
		stroke: ${colors.gray600};
	}
`
