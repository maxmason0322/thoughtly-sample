import testimonialImage from "images/agents/testimonials/person.png"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"

export default function Card({ number }: { number: number }) {
	return (
		<Wrapper>
			<Content>
				{number} Lorem ipsum dolor sit amet consectetur. Congue urna mauris
				mattis quam sapien. Arcu feugiat convallis ipsum tortor placerat. Vitae
				dictumst neque orci nam cursus congue mi. Sit urna fusce porttitor cras
				arcu dui hendrerit. Lectus morbi lacus vulputate ultrices nec risus eget
				donec nibh. Fames amet elementum facilisis arcu convallis. Est morbi sit
				eu nisi sit mattis sem libero quam. Cras habitasse mauris urna.
				ufhvjtfbvjbtjvbtjbvjtbvjtbjvbtjbvtjbvjtbvbbbbbbbbbbbbbbbbbbbbbbbbb
			</Content>
			<Person>
				<Left>
					<Name>Jose Smith</Name>
					<Position>President at leading home renovation company</Position>
				</Left>
				<StyledImage src={testimonialImage} alt="Person" />
			</Person>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${gradients.greenGreen};

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

  ${fresponsive(css`
    width: 640px;
    height: 100%;
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

const StyledImage = styled.img`
  ${fresponsive(css`
    width: 77px;
    height: 77px;
  `)}
`
