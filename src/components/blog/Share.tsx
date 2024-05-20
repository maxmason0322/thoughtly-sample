import Social from "components/Buttons/Circle"
import { isBrowser } from "library/functions"

const getCurrentURL = () => {
	if (isBrowser()) {
		return window.location.href
	}
	return ""
}

export default function Share({ title }: { title: string | undefined | null }) {
	return (
		title && (
			<>
				<Social
					icon="linkedin"
					to={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
						getCurrentURL(),
					)}&title=${title}`}
				/>
				<Social
					icon="x"
					to={`https://www.twitter.com/share?url=${getCurrentURL()}&text=${title}`}
				/>
			</>
		)
	)
}
