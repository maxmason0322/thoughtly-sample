import { ReactComponent as AnalyticsSVG } from "images/global/icons/Analytics.svg"
import { ReactComponent as ArrowOneSVG } from "images/global/icons/Arrow-one.svg"
import { ReactComponent as BadgeSVG } from "images/global/icons/Badge.svg"
import { ReactComponent as CalendarSVG } from "images/global/icons/Calendar.svg"
import { ReactComponent as Calendar2SVG } from "images/global/icons/Calendar2.svg"
import { ReactComponent as ChevSVG } from "images/global/icons/Chev.svg"
import { ReactComponent as ChevDownSVG } from "images/global/icons/ChevDown.svg"
import { ReactComponent as CopyPasteSVG } from "images/global/icons/CopyPaste.svg"
import { ReactComponent as CustomersSVG } from "images/global/icons/Customers.svg"
import { ReactComponent as EyeSVG } from "images/global/icons/Eye.svg"
import { ReactComponent as GeniusSVG } from "images/global/icons/Genius.svg"
import { ReactComponent as InstaSVG } from "images/global/icons/Insta.svg"
import { ReactComponent as IntegrationSVG } from "images/global/icons/Integration.svg"
import { ReactComponent as LibrarySVG } from "images/global/icons/Library.svg"
import { ReactComponent as LockSVG } from "images/global/icons/Lock.svg"
import { ReactComponent as MouseOneSVG } from "images/global/icons/Mouse-one.svg"
import { ReactComponent as MouseTwoSVG } from "images/global/icons/Mouse-two.svg"
import { ReactComponent as NodesSVG } from "images/global/icons/Nodes.svg"
import { ReactComponent as OpenSVG } from "images/global/icons/Open.svg"
import { ReactComponent as PhoneSVG } from "images/global/icons/Phone.svg"
import { ReactComponent as PodcastSVG } from "images/global/icons/Podcast.svg"
import { ReactComponent as RoutingSVG } from "images/global/icons/Routing.svg"
import { ReactComponent as SettingsSVG } from "images/global/icons/Settings.svg"
import { ReactComponent as TargetSVG } from "images/global/icons/Target.svg"
import { ReactComponent as TrashSVG } from "images/global/icons/Trash.svg"
import { ReactComponent as VerifiedSVG } from "images/global/icons/Verified.svg"
import { ReactComponent as WebinarsSVG } from "images/global/icons/Webinars.svg"
import { ReactComponent as WhistleSVG } from "images/global/icons/Whistle.svg"
import { ReactComponent as AboutSVG } from "images/global/icons/about.svg"
import { ReactComponent as AgencySVG } from "images/global/icons/agency.svg"
import { ReactComponent as AudioSVG } from "images/global/icons/audio.svg"
import { ReactComponent as BusinessSVG } from "images/global/icons/business.svg"
import { ReactComponent as CardSVG } from "images/global/icons/card.svg"
import { ReactComponent as CareersSVG } from "images/global/icons/careers.svg"
import { ReactComponent as CategorySVG } from "images/global/icons/category.svg"
import { ReactComponent as CheckSVG } from "images/global/icons/check.svg"
import { ReactComponent as CheckTwoSVG } from "images/global/icons/checkTwo.svg"
import { ReactComponent as CsvSVG } from "images/global/icons/csv.svg"
import { ReactComponent as DocumentSVG } from "images/global/icons/document.svg"
import { ReactComponent as FacebookSVG } from "images/global/icons/facebook.svg"
import { ReactComponent as FeatherSVG } from "images/global/icons/feather.svg"
import { ReactComponent as HeartSVG } from "images/global/icons/heart.svg"
import { ReactComponent as LightningSVG } from "images/global/icons/lightning.svg"
import { ReactComponent as LinkedinSVG } from "images/global/icons/linkedin.svg"
import { ReactComponent as NewsSVG } from "images/global/icons/news.svg"
import { ReactComponent as PdfSVG } from "images/global/icons/pdf.svg"
import { ReactComponent as Phone2SVG } from "images/global/icons/phone2.svg"
import { ReactComponent as PlatformSVG } from "images/global/icons/platform.svg"
import { ReactComponent as PlaySVG } from "images/global/icons/play.svg"
import { ReactComponent as ProSVG } from "images/global/icons/pro.svg"
import { ReactComponent as RocketSVG } from "images/global/icons/rocket.svg"
import { ReactComponent as SearchSVG } from "images/global/icons/search.svg"
import { ReactComponent as ShuffleSVG } from "images/global/icons/shuffle.svg"
import { ReactComponent as SoundSVG } from "images/global/icons/sound.svg"
import { ReactComponent as SpeakSVG } from "images/global/icons/speak.svg"
import { ReactComponent as StarterSVG } from "images/global/icons/starter.svg"
import { ReactComponent as TwitterSVG } from "images/global/icons/twitter.svg"
import { ReactComponent as XSVG } from "images/global/icons/x.svg"
import styled from "styled-components"

const iconMap = {
	about: { component: AboutSVG, modifyStroke: false, modifyFill: true },
	agency: { component: AgencySVG, modifyStroke: true, modifyFill: true },
	analytics: { component: AnalyticsSVG, modifyStroke: false, modifyFill: true },
	arrowOne: { component: ArrowOneSVG, modifyStroke: true, modifyFill: false },
	audio: { component: AudioSVG, modifyStroke: false, modifyFill: true },
	badge: { component: BadgeSVG, modifyStroke: true, modifyFill: true },
	business: { component: BusinessSVG, modifyStroke: false, modifyFill: true },
	calendar: { component: CalendarSVG, modifyStroke: true, modifyFill: false },
	calendarTwo: {
		component: Calendar2SVG,
		modifyStroke: true,
		modifyFill: true,
	},
	card: { component: CardSVG, modifyStroke: false, modifyFill: true },
	careers: { component: CareersSVG, modifyStroke: false, modifyFill: true },
	category: { component: CategorySVG, modifyStroke: true, modifyFill: true },
	check: { component: CheckSVG, modifyStroke: true, modifyFill: false },
	checkTwo: { component: CheckTwoSVG, modifyStroke: true, modifyFill: false },
	chev: { component: ChevSVG, modifyStroke: true, modifyFill: true },
	chevDown: { component: ChevDownSVG, modifyStroke: true, modifyFill: true },
	copyPaste: { component: CopyPasteSVG, modifyStroke: false, modifyFill: true },
	csv: { component: CsvSVG, modifyStroke: false, modifyFill: true },
	customers: { component: CustomersSVG, modifyStroke: false, modifyFill: true },
	document: { component: DocumentSVG, modifyStroke: false, modifyFill: true },
	eye: { component: EyeSVG, modifyStroke: true, modifyFill: true },
	facebook: { component: FacebookSVG, modifyStroke: false, modifyFill: true },
	feather: { component: FeatherSVG, modifyStroke: false, modifyFill: true },
	genius: { component: GeniusSVG, modifyStroke: false, modifyFill: true },
	heart: { component: HeartSVG, modifyStroke: false, modifyFill: true },
	insta: { component: InstaSVG, modifyStroke: false, modifyFill: true },
	integration: {
		component: IntegrationSVG,
		modifyStroke: false,
		modifyFill: true,
	},
	library: { component: LibrarySVG, modifyStroke: false, modifyFill: true },
	lightning: { component: LightningSVG, modifyStroke: false, modifyFill: true },
	linkedin: { component: LinkedinSVG, modifyStroke: false, modifyFill: true },
	lock: { component: LockSVG, modifyStroke: false, modifyFill: true },
	mouseOne: { component: MouseOneSVG, modifyStroke: false, modifyFill: true },
	mouseTwo: { component: MouseTwoSVG, modifyStroke: true, modifyFill: true },
	news: { component: NewsSVG, modifyStroke: false, modifyFill: true },
	nodes: { component: NodesSVG, modifyStroke: true, modifyFill: false },
	open: { component: OpenSVG, modifyStroke: true, modifyFill: false },
	pdf: { component: PdfSVG, modifyStroke: false, modifyFill: true },
	phone: { component: PhoneSVG, modifyStroke: false, modifyFill: true },
	phoneTwo: { component: Phone2SVG, modifyStroke: false, modifyFill: true },
	platform: { component: PlatformSVG, modifyStroke: false, modifyFill: true },
	play: { component: PlaySVG, modifyStroke: false, modifyFill: true },
	podcast: { component: PodcastSVG, modifyStroke: true, modifyFill: true },
	pro: { component: ProSVG, modifyStroke: false, modifyFill: true },
	rocket: { component: RocketSVG, modifyStroke: false, modifyFill: true },
	routing: { component: RoutingSVG, modifyStroke: false, modifyFill: true },
	search: { component: SearchSVG, modifyStroke: true, modifyFill: false },
	settings: { component: SettingsSVG, modifyStroke: false, modifyFill: true },
	shuffle: { component: ShuffleSVG, modifyStroke: false, modifyFill: true },
	sound: { component: SoundSVG, modifyStroke: false, modifyFill: true },
	speak: { component: SpeakSVG, modifyStroke: false, modifyFill: true },
	starter: { component: StarterSVG, modifyStroke: true, modifyFill: false },
	target: { component: TargetSVG, modifyStroke: false, modifyFill: true },
	trash: { component: TrashSVG, modifyStroke: false, modifyFill: true },
	twitter: { component: TwitterSVG, modifyStroke: false, modifyFill: true },
	verified: { component: VerifiedSVG, modifyStroke: false, modifyFill: true },
	webinars: { component: WebinarsSVG, modifyStroke: false, modifyFill: true },
	whistle: { component: WhistleSVG, modifyStroke: false, modifyFill: true },
	x: { component: XSVG, modifyStroke: true, modifyFill: false },
}

export type IconType = keyof typeof iconMap

export default function Icon({
	name,
	className = "",
	style = {},
	color,
	noWrapper,
}: {
	name: IconType
	className?: string
	style?: React.CSSProperties
	color?: string
	noWrapper?: boolean
}) {
	const Svg = iconMap[name].component
	const modifyStroke = iconMap[name].modifyStroke
	const modifyFill = iconMap[name].modifyFill

	return (
		<>
			{noWrapper && <Svg className={className} style={style} />}
			{!noWrapper && (
				<Wrapper
					$modifyStroke={modifyStroke}
					$modifyFill={modifyFill}
					$color={color}
				>
					<Svg className={className} style={style} />
				</Wrapper>
			)}
		</>
	)
}

const Wrapper = styled.div<{
	$modifyStroke: boolean
	$modifyFill: boolean
	$color?: string
}>`
	display: grid;
	place-items: center;

	svg {
		${(props) => props.$modifyStroke && `path { stroke: ${props.$color}; }`}
		${(props) => props.$modifyFill && `path { fill: ${props.$color}; }`}
	}
`
