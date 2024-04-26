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
import { ReactComponent as AudioSVG } from "images/global/icons/audio.svg"
import { ReactComponent as CheckSVG } from "images/global/icons/check.svg"
import { ReactComponent as CsvSVG } from "images/global/icons/csv.svg"
import { ReactComponent as PdfSVG } from "images/global/icons/pdf.svg"
import { ReactComponent as PlaySVG } from "images/global/icons/play.svg"
import { ReactComponent as ShuffleSVG } from "images/global/icons/shuffle.svg"
import { ReactComponent as SpeakSVG } from "images/global/icons/speak.svg"

const iconMap = {
	calendar: CalendarSVG,
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
