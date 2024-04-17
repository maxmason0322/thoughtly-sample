import Seo from "components/Seo"
import Hero from "sections/home/01-Hero"
import Industry from "sections/home/02-Industry"
import Statement from "sections/home/03-Statement"
import Features from "sections/home/04-Features"

export default function IndexPage() {
	return (
		<>
			<Hero />
			<Industry />
			<Statement />
			<Features />
		</>
	)
}

export function Head() {
	return <Seo title="Home" description="This is the homepage!" pathname="/" />
}
