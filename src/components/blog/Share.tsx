import Circle from "components/Buttons/Circle"
import UniversalLink from "library/Loader/UniversalLink"
import { isBrowser } from "library/deviceDetection"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"

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
					<StyledCircle icon="linkedin" />
				</UniversalLink>
				<UniversalLink
					to={`https://www.twitter.com/share?url=${getCurrentURL()}&text=${title}`}
				>
					<StyledCircle icon="twitter" />
				</UniversalLink>
				<UniversalLink
					to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
						getCurrentURL(),
					)}&t=${title}`}
				>
					<StyledCircle icon="facebook" />
				</UniversalLink>
			</>
		)
	)
}

const StyledCircle = styled(Circle)`
  ${fresponsive(css`
    width: 50px;
    height: 50px;
  `)}
`
