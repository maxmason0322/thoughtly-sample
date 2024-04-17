import Seo from "components/Seo"
import CallCTA from "sections/home/05-CallCTA"

export default function IndexPage() {
	return (
		<>
			<CallCTA />
		</>
	)
}

export function Head() {
	return <Seo title="Home" description="This is the homepage!" pathname="/" />
}
