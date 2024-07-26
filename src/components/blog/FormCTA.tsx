import EmailInput from "components/EmailInput"
import { fmobile, fresponsive } from "library/fullyResponsive"
import useMedia from "library/useMedia"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

export default function FormCTA({
	title = "Interested in trying out Thoughtly?",
}: {
	title: string | null | undefined
}) {
	return (
		<Wrapper>
			{title}
			<EmailInput customWidth={useMedia(600, 600, 520, 266)} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	background: ${colors.gray200};
	${textStyles.h6};

	${fresponsive(css`
		gap: 24px;
		padding: 40px;
		border-radius: 24px;
	`)}

	${fmobile(css`
		${textStyles.sh1};
		padding: 24px;

		> form {
			margin-bottom: 65px;
		}

		button {
			width: 100%;
			right: 0;
			top: calc(100% + 16px);

			> div {
				width: 100%;
			}
		}
	`)}
`
