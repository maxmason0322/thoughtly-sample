import Kicker from "components/Kicker"
import { ReactComponent as BoltshiftSVG } from "images/global/boltshift.svg"
import { ReactComponent as FeatherdevSVG } from "images/global/featherdev.svg"
import { ReactComponent as GlobalbankSVG } from "images/global/globalbank.svg"
import { ReactComponent as LightboxSVG } from "images/global/lightbox.svg"
import { ReactComponent as SpheruleSVG } from "images/global/spherule.svg"
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
				<Kicker gradient>Featured In</Kicker>
				<Logos>
					<UniversalLink to={links.todo}>
						<BoltshiftSVG />
					</UniversalLink>
					<UniversalLink to={links.todo}>
						<FeatherdevSVG />
					</UniversalLink>
					<UniversalLink to={links.todo}>
						<GlobalbankSVG />
					</UniversalLink>
					<UniversalLink to={links.todo}>
						<SpheruleSVG />
					</UniversalLink>
					<UniversalLink to={links.todo}>
						<LightboxSVG />
					</UniversalLink>
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
  background-color: ${colors.white};
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

  svg {
    ${fresponsive(css`
      height: 48px;
      width: auto;
    `)}

    ${fmobile(css`
      height: 36px;
    `)}
  }
`

const Line = styled.hr`
  width: 100%;
  height: 1.5px;
  background-color: ${colors.gray200};

  ${fmobile(css`
    width: 314px;
  `)}
`
