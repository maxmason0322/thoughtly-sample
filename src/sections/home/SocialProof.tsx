import Kicker from "components/Kicker"
import BadenBowerSVG from "images/global/logos/BadenBower.svg"
import CardMerchantServicesSVG from "images/global/logos/CardMerchantServices.svg"
import EnhanceHealthSVG from "images/global/logos/EnhanceHealth.svg"
import HonkSVG from "images/global/logos/Honk.svg"
import SelectQuoteSVG from "images/global/logos/SelectQuote.svg"
import TastewiseSVG from "images/global/logos/Tastewise.svg"
import ZillowSVG from "images/global/logos/Zillow.svg"
import ConstantMarquee from "library/ConstantMarquee"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import {
	desktopBreakpoint,
	mobileBreakpoint,
	tabletBreakpoint,
} from "styles/media"
import links from "utils/links"

export default function SocialProof() {
	return (
		<Wrapper>
			<Inner>
				<Kicker gradient>Trusted By</Kicker>
				<MarqueeWrapper>
					<StyledConstantMarquee>
						<Logos>
							<Logo to={links.selectQuote}>
								<img src={SelectQuoteSVG} alt="Select Quote Logo" />
							</Logo>
							<Logo to={links.enhanceHealth}>
								<img src={EnhanceHealthSVG} alt="Enhance Health Logo" />
							</Logo>
							<Logo to={links.badenBower}>
								<img src={BadenBowerSVG} alt="Baden Bower Logo" />
							</Logo>
							<Logo to={links.tastewise}>
								<img src={TastewiseSVG} alt="Tastewise Logo" />
							</Logo>
							<Logo to={links.zillow}>
								<img src={ZillowSVG} alt="Zillow Logo" />
							</Logo>
							<Logo to={links.cardAssociation}>
								<img
									src={CardMerchantServicesSVG}
									alt="The Card Association Merchant Services Logo"
								/>
							</Logo>
							<Logo to={links.honk}>
								<img src={HonkSVG} alt="Honk Logo" />
							</Logo>
						</Logos>
					</StyledConstantMarquee>
				</MarqueeWrapper>
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
		padding: 72px 156px;
		gap: 70px;
	`)}

	${ftablet(css`
		padding: 100px 68px;
		max-width: ${tabletBreakpoint}px;
	`)}

	${fmobile(css`
		max-width: ${mobileBreakpoint}px;
		padding: 54px 30px;
		gap: 36px;
	`)}
`

const Logos = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	${fresponsive(css`
		gap: 60px;
		width: fit-content;
		padding-left: 60px;
	`)}

	${fmobile(css`
		gap: 35px;
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

  	img {
		width: 100%;
		height: 100%;
	}
`

const MarqueeWrapper = styled.div`
	position: relative;
	overflow: hidden;

	${fresponsive(css`
		width: 1128px;
	`)}

	${ftablet(css`
		width: 888px;
	`)}

	${fmobile(css`
		width: 314px;
	`)}

	&::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 150px;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, ${colors.beige200}, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, ${colors.beige200}, transparent);
  }
`

const StyledConstantMarquee = styled(ConstantMarquee)`
	position: relative;
	z-index: 1;
`
