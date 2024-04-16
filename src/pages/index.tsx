import Seo from "components/Seo"
import Industry from "sections/home/02-Industry"

export default function IndexPage() {
	return (
		<>
			<Industry />
		</>
	)
}

export function Head() {
	return <Seo title="Home" description="This is the homepage!" pathname="/" />
}
