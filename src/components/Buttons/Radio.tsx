import { fresponsive } from "library/fullyResponsive"
import { useState } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"

interface Props {
	as?: "span" | "button"
	active?: boolean
	onClick?: () => void
}

export default function Radio({ as = "span", active = false, onClick }: Props) {
	const handleClick = () => {
		if (!onClick) return
		onClick()
	}

	const Input = as === "span" ? Span : Button

	return (
		<Input $active={!!active} onClick={handleClick}>
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

const Span = styled(Input).attrs({ as: "span" })``
const Button = styled(Input).attrs({ as: "button" })``
