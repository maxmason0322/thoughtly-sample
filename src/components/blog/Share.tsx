import Circle from "components/Buttons/Circle"
import UniversalLink from "library/Loader/UniversalLink"
import { isBrowser } from "library/deviceDetection"

const getCurrentURL = () => {
	if (isBrowser) {
		return window.location.href
	}
	return ""
}

export default function Share({ title }: { title: string | undefined | null }) {
	return (
		title && (
			<>
				<UniversalLink
					to={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
						getCurrentURL(),
					)}&title=${title}`}
				>
					<Circle icon="linkedin" />
				</UniversalLink>
				<UniversalLink
					to={`https://www.twitter.com/share?url=${getCurrentURL()}&text=${title}`}
				>
					<Circle icon="twitter" />
				</UniversalLink>
				<UniversalLink
					to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
						getCurrentURL(),
					)}&t=${title}`}
				>
					<Circle icon="facebook" />
				</UniversalLink>
			</>
		)
	)
}
