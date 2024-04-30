import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import {
	desktopBreakpoint,
	mobileBreakpoint,
	tabletBreakpoint,
} from "styles/media"
import textStyles from "styles/text"

const Base = styled.div`
  ${textStyles.bodyS};
  ${colors.black};
`

const legalStyles = {
	Wrapper: styled.section`
    width: 100%;
    display: grid;
    place-items: center;
    background-color: ${colors.white};
  `,
	Inner: styled.div`
    ${fresponsive(css`
      max-width: ${desktopBreakpoint}px;
      padding: 192px 348px 112px;
    `)}

    ${ftablet(css`
      max-width: ${tabletBreakpoint}px;
      padding: 192px 120px 112px;
    `)}

    ${fmobile(css`
      max-width: ${mobileBreakpoint}px;
      padding: 192px 32px 112px;
    `)}
  `,
	Top: styled.div`
    border-bottom: 1px solid ${colors.gray400};
  `,
	Title: styled.h1`
    ${textStyles.h4};
    color: ${colors.black};
  `,
	Subtitle: styled.p`
    ${textStyles.t2};
    color: ${colors.gray700};

    ${fresponsive(css`
      padding: 24px 0;
    `)}
  `,
	Section: styled.section`
    ${fresponsive(css`
      padding-top: 60px;
    `)}
  `,
	SectionHeader: styled.h1`
    ${textStyles.sh2};
    color: ${colors.black};
    
    ${fresponsive(css`
      padding-bottom: 24px;
    `)}
  `,
	SectionSubheader: styled.p`
    ${textStyles.sh3};
    color: ${colors.black};

    ${fresponsive(css`
      padding-bottom: 12px;
    `)}
  `,
	Paragraph: styled(Base).attrs({ as: "p" })<{ noPadding: boolean }>`
    padding-bottom: ${({ noPadding }) => (noPadding ? 0 : "24px")};
  `,
	OList: styled(Base).attrs({ as: "ol" })<{ noPadding: boolean }>`
    padding-bottom: ${({ noPadding }) => (noPadding ? 0 : "24px")};
    list-style: decimal;
    padding-left: 24px;
  `,
	UList: styled(Base).attrs({ as: "ul" })<{ noPadding: boolean }>`
    padding-bottom: ${({ noPadding }) => (noPadding ? 0 : "24px")};
    list-style: disc;
    padding-left: 24px;
  `,
	ListItem: styled(Base).attrs({ as: "li" })``,
}

export default legalStyles
