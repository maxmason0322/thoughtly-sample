import Primary from "components/Buttons/Primary"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import textStyles from "styles/text"
import links from "utils/links"

export default function PlatformHero() {
	return (
		<Wrapper>
			<Copy>
				<Title>The AI Agent Platform that does it all.</Title>
				<Buttons>
					<Primary to={links.todo} icon="chev" outline>
						Talk to Sales
					</Primary>
					<Primary to={links.todo} icon="calendar" variant="secondary" outline>
						Book a Demo
					</Primary>
				</Buttons>
			</Copy>
		</Wrapper>
	)
}

const Wrapper = styled.div``

const Copy = styled.div`
	display: flex;
	flex-direction: column;

	${fresponsive(css`
		gap: 60px;
	`)}
`

const Title = styled.p`
	${textStyles.h2}

	${fresponsive(css`
		width: 678px;
		height: 330px;
	`)}
`

const Buttons = styled.div`
	display: flex;
	flex-direction: row;

	${fresponsive(css`
		gap: 12px;
	`)}
`
