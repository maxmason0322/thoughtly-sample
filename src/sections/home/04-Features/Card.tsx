import Icon, { type IconType } from "components/Icon"
import { fresponsive, ftablet } from "library/fullyResponsive"
import useMedia from "library/useMedia"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

const COLUMNS = {
	desktop: [
		"1 / span 2",
		"3 / span 2",
		"1 / span 1",
		"2 / span 2",
		"4 / span 1",
		"1 / span 3",
	],
	tablet: [
		"1 / span 1",
		"2 / span 2",
		"1 / span 2",
		"3 / span 1",
		"1 / span 2",
		"1 / span 3",
	],
	mobile: [
		"1 / span 1",
		"2 / span 2",
		"1 / span 2",
		"3 / span 1",
		"1 / span 2",
		"1 / span 3",
	],
}

const ROWS = {
	desktop: ["span 1", "span 1", "span 1", "span 1", "span 2", "span 1"],
	tablet: ["span 1", "span 1", "span 1", "span 2", "span 1", "span 1"],
	mobile: [],
}

export default function Card({
	icon,
	title,
	text,
	link,
	index,
	background,
}: {
	icon: IconType
	title: string
	text: string
	link?: string
	index: number
	background?: string | null
}) {
	const breakpoint = useMedia("desktop", "desktop", "tablet", "mobile")
	const columns = COLUMNS[breakpoint][index % 6]
	const rows = ROWS[breakpoint][index % 6]

	return (
		<Wrapper $columns={columns} $rows={rows} $background={background}>
			<StyledIcon name={icon} />
			<Title>{title}</Title>
			<Text>{text}</Text>
		</Wrapper>
	)
}

const Wrapper = styled.div<{
	$columns?: string
	$rows?: string
	$background?: string | null
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  grid-column: ${({ $columns }) => $columns};
  grid-row: ${({ $rows }) => $rows};
  background-image: ${({ $background }) => `url(${$background})`};
  background-size: 100% 100%;

  ${fresponsive(css`
    border: 2px solid ${colors.gray300};
    border-radius: 18px;
    padding: 24px;
    gap: 12px;
    box-shadow: 0 18px 32px 0 rgba(89 89 89 / 4%);
  `)}
`

const Title = styled.h6`
  ${textStyles.sh2}
  color: ${colors.black};

  ${fresponsive(css`
    width: 140px;
  `)}
`

const Text = styled.p`
  ${textStyles.bodyS}
  color: ${colors.gray700};

  ${fresponsive(css`
    width: 310px;
  `)} 
`

const StyledIcon = styled(Icon)`
  path, circle {
    fill: ${colors.gray600};
  }

  ${fresponsive(css`
    width: 15px;
    height: 15px;
  `)}

  ${ftablet(css`
    width: 20px;
    height: 20px;
  `)}
`
