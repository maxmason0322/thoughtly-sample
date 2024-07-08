import Primary from "components/Buttons/Primary"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"
import links from "utils/links"
import AdvantageCards from "./AdvantageCards"

export default function PlatformAdvantage() {
	return (
		<Wrapper>
			<TitleRow>
				<Title>The Thoughtly Advantage.</Title>
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
	border-top: 1.5px solid ${colors.gray300};

	${fresponsive(css`
		width: 1128px;
		margin: 0 auto;
		padding-top: 175px;
		padding-bottom: 120px;
	`)}

	${ftablet(css`
		width: 888px;
		padding: 115px 0;
	`)}

	${fmobile(css`
		width: 360px;
		padding: 0;
		border-top: none;
	`)}
`

const TitleRow = styled.div`
	${fresponsive(css`
		display: flex;
		gap: 24px;
		align-items: end;
		margin-bottom: 80px;
	`)}

	${ftablet(css`
		flex-direction: column;
		align-items: start;
		gap: 24px;
	`)}

	${fmobile(css`
		flex-direction: column;
		align-items: center;
		margin-bottom: 60px;
	`)}
`

const Title = styled.div`
	${textStyles.h3}

	${fresponsive(css`
		width: 745px;
		flex-shrink: 0;
	`)}

	${fmobile(css`
		${textStyles.h5};
		width: 323px;
		text-align: center;
	`)}
`

const Copy = styled.div`
	${textStyles.bodyR};
	color: ${colors.gray700};

	${fresponsive(css`
		width: 355px;
	`)}

	${ftablet(css`
		width: 478px;
		${textStyles.bodyL};
	`)}

	${fmobile(css`
		width: 320px;
		text-align: center;
	`)}
`

const Buttons = styled.div`
	${fresponsive(css`
		display: flex;
		gap: 12px;
		margin-top: 24px;
	`)}
`
