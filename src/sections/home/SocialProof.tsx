import Kicker from "components/Kicker"
import BadenBowerSVG from "images/global/logos/BadenBower.svg"
import CardMerchantServicesSVG from "images/global/logos/CardMerchantServices.svg"
import EnhanceHealthSVG from "images/global/logos/EnhanceHealth.svg"
import HonkSVG from "images/global/logos/Honk.svg"
import SelectQuoteSVG from "images/global/logos/SelectQuote.svg"
import TastewiseSVG from "images/global/logos/Tastewise.svg"
import ZillowSVG from "images/global/logos/Zillow.svg"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive } from "library/fullyResponsive"
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

	${fmobile(css`
		padding: 72px 12px 0;
		gap: 55px;
	`)}
`

const Logos = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;

	${fresponsive(css`
		gap: 36px 60px;
		width: 745px;
	`)}

	${fmobile(css`
		gap: 18px;
		width: 314px;
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
		width: 91px;
		height: 31px;
	`)}

  	img {
		width: 100%;
		height: 100%;
	}
`
