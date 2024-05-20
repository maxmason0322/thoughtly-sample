import { ReactComponent as AnalyticsSVG } from "images/global/icons/Analytics.svg"
import { ReactComponent as ArrowOneSVG } from "images/global/icons/Arrow-one.svg"
import { ReactComponent as CalendarSVG } from "images/global/icons/Calendar.svg"
import { ReactComponent as ChevSVG } from "images/global/icons/Chev.svg"
import { ReactComponent as ChevDownSVG } from "images/global/icons/ChevDown.svg"
import { ReactComponent as CopyPasteSVG } from "images/global/icons/CopyPaste.svg"
import { ReactComponent as GeniusSVG } from "images/global/icons/Genius.svg"
import { ReactComponent as IntegrationSVG } from "images/global/icons/Integration.svg"
import { ReactComponent as LockSVG } from "images/global/icons/Lock.svg"
import { ReactComponent as NodesSVG } from "images/global/icons/Nodes.svg"
import { ReactComponent as PhoneSVG } from "images/global/icons/Phone.svg"
import { ReactComponent as RoutingSVG } from "images/global/icons/Routing.svg"
import { ReactComponent as TargetSVG } from "images/global/icons/Target.svg"
import { ReactComponent as TrashSVG } from "images/global/icons/Trash.svg"
import { ReactComponent as VerifiedSVG } from "images/global/icons/Verified.svg"
import { ReactComponent as AgencySVG } from "images/global/icons/agency.svg"
import { ReactComponent as AtomSVG } from "images/global/icons/atom.svg"
import { ReactComponent as AudioSVG } from "images/global/icons/audio.svg"
import { ReactComponent as BusinessSVG } from "images/global/icons/business.svg"
import { ReactComponent as CategorySVG } from "images/global/icons/category.svg"
import { ReactComponent as CheckSVG } from "images/global/icons/check.svg"
import { ReactComponent as CheckTwoSVG } from "images/global/icons/checkTwo.svg"
import { ReactComponent as CsvSVG } from "images/global/icons/csv.svg"
import { ReactComponent as FacebookSVG } from "images/global/icons/facebook.svg"
import { ReactComponent as LinkedinSVG } from "images/global/icons/linkedin.svg"
import { ReactComponent as PdfSVG } from "images/global/icons/pdf.svg"
import { ReactComponent as PlaySVG } from "images/global/icons/play.svg"
import { ReactComponent as ProSVG } from "images/global/icons/pro.svg"
import { ReactComponent as RocketSVG } from "images/global/icons/rocket.svg"
import { ReactComponent as SearchSVG } from "images/global/icons/search.svg"
import { ReactComponent as ShuffleSVG } from "images/global/icons/shuffle.svg"
import { ReactComponent as SpeakSVG } from "images/global/icons/speak.svg"
import { ReactComponent as StarterSVG } from "images/global/icons/starter.svg"
import { ReactComponent as TwitterSVG } from "images/global/icons/twitter.svg"
import { ReactComponent as XSVG } from "images/global/icons/x.svg"

const iconMap = {
	rocket: RocketSVG,
	pro: ProSVG,
	agency: AgencySVG,
	business: BusinessSVG,
	starter: StarterSVG,
	calendar: CalendarSVG,
	category: CategorySVG,
	chev: ChevSVG,
	trash: TrashSVG,
	nodes: NodesSVG,
	lock: LockSVG,
	target: TargetSVG,
	analytics: AnalyticsSVG,
	arrowOne: ArrowOneSVG,
	chevDown: ChevDownSVG,
	copyPaste: CopyPasteSVG,
	genius: GeniusSVG,
	integration: IntegrationSVG,
	phone: PhoneSVG,
	routing: RoutingSVG,
	verified: VerifiedSVG,
	speak: SpeakSVG,
	play: PlaySVG,
	shuffle: ShuffleSVG,
	check: CheckSVG,
	csv: CsvSVG,
	pdf: PdfSVG,
	audio: AudioSVG,
	atom: AtomSVG,
	search: SearchSVG,
	x: XSVG,
	checkTwo: CheckTwoSVG,
	linkedin: LinkedinSVG,
	twitter: TwitterSVG,
	facebook: FacebookSVG,
}

export type IconType = keyof typeof iconMap

export default function Icon({
	name,
	className = "",
}: {
	name: IconType
	className?: string
}) {
	const Svg = iconMap[name]
	return <Svg className={className} />
}
