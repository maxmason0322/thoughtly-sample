import Primary from "components/Buttons/Primary"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"
import links from "utils/links"
import AdvantageCards from "./AdvantageCards"

export default function PlatformAdvantage() {
	return (
		<Wrapper>
			<TitleRow>
				<Title>The Thoughtly Advantage</Title>
				<div>
					<Copy>
						Join the ranks of forward-thinking companies who are revolutionizing
						customer engagements and benefiting from The Thoughtly Advantage.
					</Copy>

					<Buttons>
						<Primary to={links.todo} outline icon="chev">
							Talk to Sales
						</Primary>
						<Primary to={links.todo} variant="secondary" icon="calendar">
							Book a Demo
						</Primary>
					</Buttons>
				</div>
			</TitleRow>
			<AdvantageCards />
		</Wrapper>
	)
}

const Wrapper = styled.section`
	${fresponsive(css`
		width: 1128px;
		margin: 0 auto;
		padding-top: 175px;
		padding-bottom: 120px;
	`)}
`

const TitleRow = styled.div`
	${fresponsive(css`
		display: flex;
		gap: 24px;
		align-items: end;
		margin-bottom: 80px;
	`)}
`

const Title = styled.div`
	${textStyles.h3}

	${fresponsive(css`
		width: 745px;
		flex-shrink: 0;
	`)}
`

const Copy = styled.div`
	${textStyles.bodyR};
	color: ${colors.gray700};
`

const Buttons = styled.div`
	${fresponsive(css`
		display: flex;
		gap: 12px;
		margin-top: 24px;
	`)}
`
