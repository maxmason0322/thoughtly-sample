import type { IconType } from "components/Icon"
import Icon from "components/Icon"
import Tag from "components/Tag"
import type { UniversalLinkProps } from "library/Loader/UniversalLink"
import UniversalLink from "library/Loader/UniversalLink"
import { fresponsive, ftablet } from "library/fullyResponsive"
import type React from "react"
import { forwardRef } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

type Props = UniversalLinkProps & {
	icon?: IconType
	tag?: string
	children: React.ReactNode
}

function LinkNoRef({ icon, tag, children, ...props }: Props) {
	return (
		<Wrapper $hasTag={!!tag} {...props}>
			<Span>
				{children}
				{icon && !tag && <StyledIcon name={icon} color={colors.gray600} />}
				{tag && !icon && <StyledTag>{tag}</StyledTag>}
			</Span>
		</Wrapper>
	)
}

// biome-ignore lint/suspicious/noExplicitAny: the types of UniversalLink are not 100% right and it's not worth fixing before react 19 is released
const Link = forwardRef((props: Props, ref: any) => (
	<LinkNoRef {...props} forwardRef={ref} />
))
export default Link

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
`
