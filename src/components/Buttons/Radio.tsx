import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"

interface Props {
	as?: "span" | "button"
	active?: boolean
	onClick?: () => void
}

export default function Radio({
	as = "button",
	active = false,
	onClick,
}: Props) {
	const handleClick = () => {
		if (!onClick) return
		onClick()
	}

	return (
		<Input $active={!!active} as={as} onClick={handleClick}>
			<RadioButton />
		</Input>
	)
}

const RadioButton = styled.div`
	position: absolute;
	background-color: ${colors.green400};
	transition: opacity 0.25s;

	${fresponsive(css`
		box-shadow: 0 1px 1.8px 0 rgba(0 0 0 / 19%) inset;
		transform: translateX(-50%);
		left: 50%;
		bottom: 4px;
		height: 8px;
		width: 8px;
		border-radius: 50%;
	`)}
`

const Input = styled.button<{ $active: boolean }>`
	position: relative;
	cursor: pointer;
	transition: background-color 0.25s;
	background-color: ${({ $active }) =>
		$active ? colors.green100 : colors.gray200};

	${RadioButton} {
		opacity: ${({ $active }) => ($active ? 1 : 0)};
	}

	${fresponsive(css`
		box-shadow: 0 1px 1.8px 0 rgba(0 0 0 / 19%) inset;
		height: 16px;
		width: 16px;
		border-radius: 50%;
	`)}
`
