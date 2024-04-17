import Seo from "components/Seo"
import Industry from "sections/home/02-Industry"
import Statement from "sections/home/03-Statement"

export default function IndexPage() {
	return (
		<>
			<Industry />
			<Statement />
		</>
	)
}

export function Head() {
	return <Seo title="Home" description="This is the homepage!" pathname="/" />
}
