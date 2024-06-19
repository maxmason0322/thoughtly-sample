import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import { gradients } from "styles/colors"
import type { Testimonial } from "types/aliases"
import { generateGradientBorder } from "utils/generateGradientBorder"

const gradientChoices = {
	green: "linear-gradient(-200deg, #32CB08 -2.03%, #B2FD9D 110.71%)",
	purple: "linear-gradient(-210deg, #7031BC -1.03%, #B39CF4 120.71%)",
	blue: "linear-gradient(160deg, #1C6DF2 -2.03%, #98CCFB 110.71%)",
}

const borderPicker = (gradient: string) => {
	if (gradient === gradients.greenGreen) {
		return generateGradientBorder(gradientChoices.green, 1.5)
	}
	if (gradient === gradients.blueBlue) {
		return generateGradientBorder(gradientChoices.blue, 1.5)
	}
	if (gradient === gradients.purplePurple) {
		return generateGradientBorder(gradientChoices.purple, 1.5)
	}
}

export default function Headshot({
	cardData,
	gradient,
}: { cardData: Testimonial; gradient: string }) {
	return (
		<Wrapper gradient={gradient}>
			{cardData?.headshot?.gatsbyImageData && (
				<StyledImage
					image={cardData?.headshot.gatsbyImageData}
					alt={cardData?.name ?? ""}
				/>
			)}
		</Wrapper>
	)
}

const Wrapper = styled.div<{ gradient: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => borderPicker(props.gradient)};

  ${fresponsive(css`
    border-radius: 40px;
    width: 77px;
    height: 77px;
    order: 1;
  `)}

  ${fmobile(css`
    order: 0;
  `)}
`

const StyledImage = styled(UniversalImage)`
  ${fresponsive(css`
    border-radius: 40px;
    width: 74px;
    height: 74px;
  `)}
`
