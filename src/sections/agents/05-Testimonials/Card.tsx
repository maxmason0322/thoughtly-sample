import { fmobile, fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"
import type { Testimonial } from "types/aliases"
import Headshot from "./Headshot"

export default function Card({
	gradient,
	cardData,
}: {
	gradient: string
	cardData: Testimonial
}) {
	return (
		<Wrapper gradient={gradient}>
			<Quote>{cardData?.quote?.quote}</Quote>
			<Person>
				<Headshot cardData={cardData} gradient={gradient} />
				<Left>
					<Name>{cardData?.name}</Name>
					<Position>{cardData?.positionAndCompany}</Position>
				</Left>
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

  ${fmobile(css`
    width: 314px;
    height: 660px;
    padding: 42px 28.5px 36px 36px;
    gap: 59px;
  `)}
`

const Quote = styled.p`
  overflow: hidden;
  ${textStyles.sh1};
  text-overflow: ellipsis;
  color: ${colors.white};
  align-self: stretch;
  height: 100%;

  ${fresponsive(css`
    width: 640px;
    padding-right: 32px;
  `)}

  ${fmobile(css`
    width: 249px;
    ${textStyles.sh2};
  `)}
`

const Person = styled.div`
  display: flex;
  justify-content: space-between;
  
  p {
    color: ${colors.white};
  }

  ${fmobile(css`
    flex-direction: column;
    gap: 12px;
    width: 195px;
  `)}
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

  ${fmobile(css`
    ${textStyles.sh1};
  `)}
`

const Position = styled.p`
  ${textStyles.t2};
`
