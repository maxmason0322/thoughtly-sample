import blueTestimonialImage from "images/agents/testimonials/person-blue.png"
import greenTestimonialImage from "images/agents/testimonials/person-green.png"
import purpleTestimonialImage from "images/agents/testimonials/person-purple.png"
import UniversalImage from "library/UniversalImage"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"
import type { Testimonial } from "types/aliases"

export default function Card({
	gradient,
	cardData,
}: {
	gradient: string
	cardData: Testimonial
}) {
	const getImage = (gradient: string) => {
		switch (gradient) {
			case gradients.greenGreen:
				return greenTestimonialImage
			case gradients.blueBlue:
				return blueTestimonialImage
			case gradients.purplePurple:
				return purpleTestimonialImage
		}
	}
	return (
		<Wrapper gradient={gradient}>
			<Content>{cardData?.quote?.quote}</Content>
			<Person>
				<Left>
					<Name>{cardData?.name}</Name>
					<Position>{cardData?.positionAndCompany}</Position>
				</Left>
				{cardData?.headshot?.gatsbyImageData && (
					<StyledImage
						image={cardData?.headshot.gatsbyImageData}
						alt={cardData?.name ?? ""}
					/>
				)}
			</Person>
		</Wrapper>
	)
}

const Wrapper = styled.div<{ gradient: string }>`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.gradient};

  ${fresponsive(css`
    gap: 80px;
    border-radius: 24px;
    padding: 42px 36px;
    width: 744px;
    height: 474px;
  `)}
`

const Content = styled.p`
  overflow: hidden;
  ${textStyles.sh1};
  text-overflow: ellipsis;
  color: ${colors.white};
  align-self: stretch;
  height: 100%;

  ${fresponsive(css`
    width: 640px;
  `)}
`

const Person = styled.div`
  display: flex;
  justify-content: space-between;
  
  p {
    color: ${colors.white};
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    gap: 12px;
  `)}
`

const Name = styled.p`
  display: flex;
  align-items: flex-start;
  ${textStyles.h5};
`

const Position = styled.p`
  ${textStyles.t2};
`

const StyledImage = styled(UniversalImage)`
  ${fresponsive(css`
    width: 77px;
    height: 77px;
  `)}
`
