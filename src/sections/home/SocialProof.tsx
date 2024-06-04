import Kicker from "components/Kicker"
import { ReactComponent as BatchRoastingSVG } from "images/global/logos/BatchRoasting.svg"
import { ReactComponent as DopplioSVG } from "images/global/logos/Dopplio.svg"
import { ReactComponent as EnhanceHealthSVG } from "images/global/logos/EnhanceHealth.svg"
import { ReactComponent as HonkSVG } from "images/global/logos/Honk.svg"
import { ReactComponent as SelectQuoteSVG } from "images/global/logos/SelectQuote.svg"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import links from "utils/links"

export default function SocialProof() {
	return (
		<Wrapper>
			<Inner>
				<Kicker gradient>Trusted By</Kicker>
				<Logos>
					<Logo to={links.enhanceHealth} ariaLabel="Enhance Health Logo">
						<EnhanceHealthSVG />
					</Logo>
					<Logo to={links.selectQuote} ariaLabel="Select Quote Logo">
						<SelectQuoteSVG />
					</Logo>
					<Logo to={links.batchRoasting} ariaLabel="Batch Roasting Logo">
						<BatchRoastingSVG />
					</Logo>
					<Logo to={links.honk} ariaLabel="Honk Logo">
						<HonkSVG />
					</Logo>
					<Logo to={links.dopplio} ariaLabel="Dopplio Logo">
						<DopplioSVG />
					</Logo>
				</Logos>
				<Line />
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  width: 100%;
  background-color: ${colors.beige200};
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${fresponsive(css`
    padding: 72px 156px 100px;
    gap: 70px;
  `)}

  ${ftablet(css`
    padding: 72px 66px 100px;
  `)}

  ${fmobile(css`
    padding: 72px 12px 0;
    gap: 55px;
  `)}
`

const Logos = styled.div`
  display: flex;
  align-items: center;

  ${fresponsive(css`
    gap: 60px;
  `)}

  ${ftablet(css`
    gap: 48px;
  `)}

  ${fmobile(css`
    flex-wrap: wrap;
    justify-content: center;
    gap: 18px;
  `)}
`

const Line = styled.hr`
  width: 100%;
  height: 1.5px;
  background-color: ${colors.gray300};

  ${fmobile(css`
    width: 314px;
  `)}
`

const Logo = styled(UniversalLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  filter: grayscale(100%) opacity(45%);
  transition: filter 0.75s ease;
  isolation: isolate;

  &:hover {
    filter: none;
  }

  ${fresponsive(css`
    width: 140px;
    height: 48px;
  `)}

  ${fmobile(css`
    width: 105px;
    height: 36px;
  `)}

  svg {
    width: 100%;
    height: 100%;
  }
`
