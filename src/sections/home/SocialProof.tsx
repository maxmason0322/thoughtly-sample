import AceSVG from "images/global/logos/Ace.svg"
import Boardsi from "images/global/logos/Boardsi.svg"
import BoatSetterSVG from "images/global/logos/Boatsetter.svg"
import CardMerchantServicesSVG from "images/global/logos/CardMerchantServices.svg"
import CavsSVG from "images/global/logos/Cavs.svg"
import CentrecomSVG from "images/global/logos/Centrecom.svg"
// import ChapterSVG from "images/global/logos/Chapter.svg"
import ColdwellBankerSVG from "images/global/logos/ColdwellBanker.svg"
import CompassSVG from "images/global/logos/Compass.svg"
// import EdxSVG from "images/global/logos/Edx.svg"
import FarmersSVG from "images/global/logos/Farmers.svg"
// import GetSmarterSVG from "images/global/logos/GetSmarter.svg"
import GoHealthSVG from "images/global/logos/GoHealth.svg"
import GuildSVG from "images/global/logos/Guild.svg"
import IonSVG from "images/global/logos/Ion.svg"
import KwSVG from "images/global/logos/KW.svg"
import KiwiSVG from "images/global/logos/Kiwi.svg"
import LootSVG from "images/global/logos/Loot.svg"
// import MarsSVG from "images/global/logos/Mars.svg"
import NineSVG from "images/global/logos/Nine.svg"
import NomadSVG from "images/global/logos/Nomad.svg"
import PearsonSVG from "images/global/logos/Pearson.svg"
import PrimeraSVG from "images/global/logos/Primera.svg"
import RokSVG from "images/global/logos/Rok.svg"
import RothschildSVG from "images/global/logos/Rothschild.svg"
import SleepDoctorSVG from "images/global/logos/SleepDoctor.svg"
// import StudsSVG from "images/global/logos/Studs.svg"
import TheJointSVG from "images/global/logos/TheJoint.svg"
// import ZillowSVG from "images/global/logos/Zillow.svg"
import ConstantMarquee from "library/ConstantMarquee"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import * as _ from "lodash"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import {
	desktopBreakpoint,
	mobileBreakpoint,
	tabletBreakpoint,
} from "styles/media"
import textStyles, { transparentText } from "../../styles/text"
import links from "../../utils/links"

type Logo = {
	src: string
	alt: string
	to: string
}

export default function SocialProof() {
	const logos = [
		{ src: Boardsi, alt: "Boardsi Logo", to: "https://boardsi.com" },
		{
			src: CardMerchantServicesSVG,
			alt: "Card Merchant Services Logo",
			to: "https://cardmerchantservices.com",
		},
		{
			src: ColdwellBankerSVG,
			alt: "Coldwell Banker Logo",
			to: "https://coldwellbanker.com",
		},
		{ src: CompassSVG, alt: "Compass Logo", to: "https://compass.com" },
		{ src: CentrecomSVG, alt: "Centrecom Logo", to: "https://centracom.com" },
		// { src: ChapterSVG, alt: "Chapter Logo", to: "https://askchapter.org" },
		{ src: PrimeraSVG, alt: "Primera Logo", to: "https://getprimera.com" },
		// { src: TwoUSvg, alt: "2U Logo", to: "https://2u.com" },
		{
			src: AceSVG,
			alt: "Ace Logo",
			to: "https://www.acehandymanservices.com/",
		},
		// { src: ZillowSVG, alt: "Zillow Logo", to: "https://zillow.com" },
		{ src: GoHealthSVG, alt: "GoHealth Logo", to: "https://gohealth.com" },
		{ src: GuildSVG, alt: "Guild Logo", to: "https://guild.com" },
		{ src: KwSVG, alt: "Kelley Williams Logo", to: "https://kw.com" },
		{ src: LootSVG, alt: "Loot Logo", to: "https://www.getloot.com/" },
		// { src: MarsSVG, alt: "Mars Logo", to: "https://mars.com" },
		{ src: TheJointSVG, alt: "The Joint Logo", to: "https://thejoint.com" },
		{
			src: RothschildSVG,
			alt: "Rothschild Logo",
			to: "https://www.rothschildandco.com",
		},
		// { src: MandMSVG, alt: "M&M Logo", to: "https://mars.com" },
		// { src: BanfieldSVG, alt: "Banfield Logo", to: "https://mars.com" },
		// { src: StudsSVG, alt: "Studs Logo", to: "https://studs.com" },
		// { src: KindSVG, alt: "Kind Logo", to: "https://mars.com" },
		// { src: VcaSVG, alt: "VCA Logo", to: "https://mars.com" },
		// { src: SnickersSVG, alt: "Snickers Logo", to: "https://mars.com" },
		// { src: EdxSVG, alt: "Edx Logo", to: "https://edx.com" },
		// {
		// 	src: GetSmarterSVG,
		// 	alt: "Get Smarter Logo",
		// 	to: "https://getsmarter.com",
		// },
		{ src: IonSVG, alt: "Ion Logo", to: "https://www.ionsolar.com" },
		{ src: NomadSVG, alt: "Nomad Logo", to: "https://nomadlease.com/" },
		{
			src: SleepDoctorSVG,
			alt: "Sleep Doctor Logo",
			to: "https://sleepdoctor.com",
		},
		{
			src: BoatSetterSVG,
			alt: "BoatSetter Logo",
			to: "https://boatsetter.com",
		},
		{ src: RokSVG, alt: "Rok Logo", to: "https://rok.biz" },
		{ src: FarmersSVG, alt: "Farmers Logo", to: "https://farmers.com" },
		{ src: PearsonSVG, alt: "Pearson Logo", to: "https://pearson.com" },
		{ src: NineSVG, alt: "Nine.com.au Logo", to: "https://nine.com.au" },
		{ src: KiwiSVG, alt: "Kiwi Logo", to: "https://kiwi.com" },
		{ src: CavsSVG, alt: "Cleveland Cavaliers Logo", to: "https://cavs.com" },
	]

	const [first, second, third]: Logo[][] = _.chunk(
		_.shuffle(logos),
		Math.ceil(logos.length / 3),
	)

	const getDemoLink = () => {
		if (typeof window !== "undefined") {
			return links.bookDemo + window.location.search
		}
		return links.bookDemo
	}

	return (
		<Wrapper>
			<Inner>
				<Top>
					<Heading>
						<TextSpan>Voice AI</TextSpan> for enterprise.
					</Heading>
					<Text>
						Thoughtly is trusted by top brands from around the globe to deliver
						the{" "}
						<HighlightedText>
							world's first generative AI contact centers.
						</HighlightedText>
					</Text>
				</Top>
				<MarqueeWrapper>
					<StyledConstantMarquee>
						<LogosOuter>
							{first?.map(({ src, alt, to }) => (
								<Logo key={alt} to={to}>
									<img src={src} alt={alt} />
								</Logo>
							))}
						</LogosOuter>
					</StyledConstantMarquee>
				</MarqueeWrapper>
				<MarqueeWrapper>
					<StyledConstantMarquee>
						<LogosInner>
							{second?.map(({ src, alt, to }) => (
								<Logo key={alt} to={to}>
									<img src={src} alt={alt} />
								</Logo>
							))}
						</LogosInner>
					</StyledConstantMarquee>
				</MarqueeWrapper>
				<MarqueeWrapper>
					<StyledConstantMarquee>
						<LogosOuter>
							{third?.map(({ src, alt, to }) => (
								<Logo key={alt} to={to}>
									<img src={src} alt={alt} />
								</Logo>
							))}
						</LogosOuter>
					</StyledConstantMarquee>
				</MarqueeWrapper>
				<a
					href={getDemoLink()}
					aria-label="Book a demo"
					target="_blank"
					rel="noreferrer"
				>
					<BottomText>Join their ranks →</BottomText>
				</a>
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
		gap: 70px;
	`)}
	${ftablet(css`
		padding: 100px 68px;
		max-width: ${tabletBreakpoint}px;
	`)}
	${fmobile(css`
		max-width: ${mobileBreakpoint}px;
		padding: 0 0 98px;
		gap: 36px;
	`)}
	padding-top: 120px;
	padding-bottom: 120px;
`

const LogosOuter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	${fresponsive(css`
		gap: 80px;
		width: fit-content;
		padding-left: 100px;
	`)}

	${fmobile(css`
		gap: 35px;
	`)}
`

const LogosInner = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	${fresponsive(css`
		gap: 80px;
		width: fit-content;
		padding-left: 50px;
	`)}

	${fmobile(css`
		gap: 35px;
	`)}
`

const Logo = styled(UniversalLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	filter: grayscale(0%) opacity(60%);
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

	${fmobile(css`
		width: 314px;
	`)}
`

const StyledConstantMarquee = styled(ConstantMarquee)`
	position: relative;
	z-index: 1;
`

const Top = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	${fresponsive(css`
		gap: 36px;
		padding: 48px 0 72px;
		width: 1128px;
	`)}

	${ftablet(css`
		width: 1088px;
	`)}

	${fmobile(css`
		width: 320px;
		padding: 0 27px 48px;
	`)}
`

const Heading = styled.h1`
	${textStyles.h5};
	color: ${colors.black};
	font-weight: 500;

	${fmobile(css`
		font-size: 54px;
		width: 350px;
		text-align: center;
	`)}
`

const TextSpan = styled.span`
	${transparentText};
	background-image: ${gradients.greenBlue};
`

const Text = styled.p`
	${textStyles.bodyL};
	color: ${colors.gray700};
	text-align: center;

	${fresponsive(css`
		width: 525px;
	`)}

	${fmobile(css`
		width: 120%;
		font-size: 16px;
	`)}
`

const BottomText = styled.p`
	${textStyles.bodyR};
	color: ${colors.gray500};
	text-align: center;

	&:hover {
		text-decoration: underline;
		color: ${colors.green500};
	}

	${fmobile(css`
		width: 120%;
		font-size: 16px;
	`)}
`

const HighlightedText = styled.b`
	font-weight: 500;
`
