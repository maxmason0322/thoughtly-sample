import AgentsHero from "sections/agents/01-Hero"
import AgentsOverview from "sections/agents/02-Overview"
import AgentsHowItWorks from "sections/agents/03-HowItWorks"
import AgentsAdvantages from "sections/agents/04-Advantages"
import CallToAction from "sections/agents/06-CallToAction"
import styled from "styled-components"

export default function AgentAccelerator() {
	return (
		<>
			<AgentsHero />
			<AgentsOverview />
			<AgentsHowItWorks />
			<AgentsAdvantages />
			<CallToAction />
			<TempSpacer />
		</>
	)
}

const TempSpacer = styled.div`
	height: 100lvh;
`
