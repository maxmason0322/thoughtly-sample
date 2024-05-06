import Icon, { type IconType } from "components/Icon"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import UniversalLink from "library/Loader/UniversalLink"
import UniversalImage, { type UniversalImageData } from "library/UniversalImage"
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
	textWidths,
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
	background?: UniversalImageData
	backgroundTablet?: UniversalImageData
	backgroundMobile?: UniversalImageData
	textWidths: number
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
		<Wrapper $columns={columns} $rows={rows}>
			<Image image={backgroundResp} alt="" objectFit="contain" />
			<StyledIcon $stroke={!!strokeIcon} name={icon} />
			<Title>{title}</Title>
			<Text $textWidth={textWidths}>{text}</Text>
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
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  grid-column: ${({ $columns }) => $columns};
  grid-row: ${({ $rows }) => $rows};
  position: relative;
  overflow: clip;

  > * {
    position: relative;
    z-index: 2;
  }

  ${fresponsive(css`
    border: 1.5px solid ${colors.gray200};
    border-radius: 18px;
    padding: 24px;
    gap: 12px;
    box-shadow: 0 18px 32px 0 rgba(89 89 89 / 4%);
  `)}

  ${ftablet(css`
    padding-bottom: 15px;
  `)}

  ${fmobile(css`
    border: unset;
  `)}
`

const Image = styled(UniversalImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  top: 0;
  left: 0;
  z-index: 1;

  ${ftablet(css`
    img {
      object-fit: contain;
      object-position: top left;
    }
  `)}

  ${fmobile(css`
    img {
      object-fit: contain;
      object-position: top left;
    }
  `)}
`

const Title = styled.h1`
  ${textStyles.sh2}
  color: ${colors.black};

  ${fresponsive(css`
    width: 140px;
    white-space: pre;
  `)}

  ${fmobile(css`
    white-space: normal;
    width: 100%;
  `)}
`

const Text = styled.p<{ $textWidth: number }>`
  ${textStyles.bodyS}
  color: ${colors.gray700};

  ${({ $textWidth }) =>
		fresponsive(css`
      width: ${$textWidth}px;
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
