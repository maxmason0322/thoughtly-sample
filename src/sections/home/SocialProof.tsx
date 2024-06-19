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
import colors, { gradients } from "styles/colors"
import media, { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"
import links from "utils/links"

export default function SocialProof() {
	return (
		<Wrapper>
			<Inner>
				<Title>Trusted By</Title>
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
			</Inner>
		</Wrapper>
	)
}

const Title = styled.div`
	${transparentText};
	background-image: ${gradients.greenBlue};
	${textStyles.sh4};
`

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
		padding: 104px 0 164px;
		gap: 72px;
	`)}

	${fmobile(css`
		padding: 70px 0 116px;
		gap: 70px;
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
		width: 313px;
	`)}
`

const Logo = styled(UniversalLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	transition: opacity 0.75s ease;
	isolation: isolate;

	${media.hover} {
		opacity: 0.5;

		&:hover {
			opacity: 1;
		}
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
