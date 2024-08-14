import Primary from "components/Buttons/Primary"
import { fmobile, fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"

export default function CTA({
	cta,
}: {
	cta: {
		header: string | null
		buttonLabel: string | null
		buttonLink: string | null
	}
}) {
	return (
		<Wrapper>
			<Text>{cta.header}</Text>
			{cta.buttonLink !== null && (
				<Primary to={cta.buttonLink} icon="chev" variant="secondary">
					{cta.buttonLabel}
				</Primary>
			)}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	background: ${gradients.greenGreen};

	${fresponsive(css`
		border-radius: 24px;
		padding: 40px;
		width: 100%;
		gap: 28px;
	`)}
`

const Text = styled.div`
	color: ${colors.white};
	${textStyles.h6}

	${fmobile(css`
		${textStyles.sh1}
	`)}
`
