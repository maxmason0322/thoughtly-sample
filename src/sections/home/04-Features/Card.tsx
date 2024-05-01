import Icon, { type IconType } from "components/Icon"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useMedia from "library/useMedia"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

gsap.registerPlugin(ScrollToPlugin)

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
		"1 / span 2",
		"3 / span 1",
		"1 / span 3",
	],
	mobile: ["1", "1", "1", "1", "1", "1"],
}

const ROWS = {
	desktop: ["span 1", "span 1", "span 1", "span 1", "span 2", "span 1"],
	tablet: ["span 1", "span 1", "span 1", "span 1", "2 / span 2", "span 1"],
	mobile: ["span 1", "span 1", "span 1", "span 1", "span 1", "span 1"],
}

export default function Card({
	icon,
	title,
	text,
	link,
	index,
	background,
	backgroundTablet,
	backgroundMobile,
	strokeIcon,
}: {
	icon: IconType
	title: string
	text: string
	link?: {
		href: string | null
		text: string | null
	} | null
	index: number
	background?: string | null
	backgroundTablet?: string | null
	backgroundMobile?: string | null
	strokeIcon?: boolean | null
}) {
	const breakpoint = useMedia("desktop", "desktop", "tablet", "mobile")
	const backgroundResp = useMedia(
		background,
		background,
		backgroundTablet,
		backgroundMobile,
	)
	const columns = COLUMNS[breakpoint][index % 6]
	const rows = ROWS[breakpoint][index % 6]

	const scrollTo = (section: string | null) => {
		if (!section) return
		gsap.to(window, {
			scrollTo: section,
		})
	}

	return (
		<Wrapper $columns={columns} $rows={rows} $background={backgroundResp}>
			<StyledIcon $stroke={!!strokeIcon} name={icon} />
			<Title>{title}</Title>
			<Text>{text}</Text>
			{link && (
				<Link type="button" onClick={() => scrollTo(link?.href)}>
					{link.text}
				</Link>
			)}
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

	${fmobile(css`
		border: unset;
	`)}
`

const Title = styled.h1`
  ${textStyles.sh2}
  color: ${colors.black};

  ${fresponsive(css`
    width: 140px;
  `)}

	${fmobile(css`
		width: 100%;
	`)}
`

const Text = styled.p`
  ${textStyles.bodyS}
  color: ${colors.gray700};

  ${fresponsive(css`
    width: 310px;
  `)} 

	${fmobile(css`
		width: 100%;
	`)}
`

const StyledIcon = styled(Icon)<{ $stroke: boolean }>`
  path,
  circle {
    fill: ${({ $stroke }) => !$stroke && colors.gray600};
    stroke: ${({ $stroke }) => $stroke && colors.gray600};
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

const Link = styled(UniversalLink)`
	color: ${colors.green600};
	text-decoration: underline;
	${textStyles.bodyS}
`
