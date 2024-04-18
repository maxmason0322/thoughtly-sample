import Seo from "components/Seo"
import Industry from "sections/home/02-Industry"
import Statement from "sections/home/03-Statement"
import Features from "sections/home/04-Features"
import SocialProof from "sections/home/SocialProof"

export default function IndexPage() {
	return (
		<>
			<SocialProof />
			<Industry />
			<Statement />
			<Features />
		</>
	)
}

export function Head() {
	return <Seo title="Home" description="This is the homepage!" pathname="/" />
}
