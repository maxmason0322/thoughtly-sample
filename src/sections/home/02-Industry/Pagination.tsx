import Radio from "components/Buttons/Radio"
import Icon from "components/Icon"
import UniversalLink from "library/Loader/UniversalLink"
import { fresponsive } from "library/fullyResponsive"
import type { MutableRefObject } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"

export default function Pagination({
	keys,
	activeIndex,
	setActiveIndex,
	scrollUpdate,
}: {
	keys: string[]
	activeIndex: number
	setActiveIndex: (i: number) => void
	scrollUpdate: MutableRefObject<boolean>
}) {
	const numPages = keys.length

	const handleClick = (i: number) => {
		setActiveIndex(i)
		scrollUpdate.current = false
	}

	const prev = () => {
		setActiveIndex(Math.max(0, activeIndex - 1))
		scrollUpdate.current = false
	}

	const next = () => {
		setActiveIndex(Math.min(numPages - 1, activeIndex + 1))
		scrollUpdate.current = false
	}

	return (
		<Wrapper>
			<ArrowButton type="button" onClick={() => prev()}>
				<Icon name="chev" />
			</ArrowButton>
			{Array.from({ length: numPages }, (_, i) => (
				<Radio
					as="span"
					onClick={() => handleClick(i)}
					key={keys[i]}
					active={i === activeIndex}
				/>
			))}
			<ArrowButton type="button" onClick={() => next()}>
				<Icon name="chev" />
			</ArrowButton>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1.75px solid ${colors.gray200};
  background: ${colors.white};

  ${fresponsive(css`
    gap: 12px;
    padding: 12.5px 0;
    width: 321px;
    border-radius: 12px;
    margin-top: 24px;
  `)}
`

const ArrowButton = styled(UniversalLink)`
  display: flex;
  justify-content: center;

  ${fresponsive(css`
    width: 16px;
    height: 16px;
  `)}

  &:first-of-type {
    svg {
      transform: rotate(180deg);
    }
  }
`
