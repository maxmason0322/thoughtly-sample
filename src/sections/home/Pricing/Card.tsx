import Button from "components/Buttons/Primary"
import Icon from "components/Icon"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"
import links from "utils/links"

export default function Card({
	title,
	text,
	price,
	hideMonth,
	tags,
}: {
	title: string
	text: string
	price: string
	hideMonth?: boolean
	tags: string[]
}) {
	const tagEls = tags.map((item) => <TempTag key={item}>{item}</TempTag>)

	return (
		<Wrapper>
			<Top>
				<Row>
					<Info>
						<StyledIcon name="analytics" />
						<Title>{title}</Title>
						<Text>{text}</Text>
					</Info>
					<StyledButton to={links.todo} variant="secondary">
						Get Started
					</StyledButton>
				</Row>
				<Price>
					{price}
					{!hideMonth && <span>/mo.</span>}
				</Price>
			</Top>
			<Bottom>{tagEls}</Bottom>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  background: ${gradients.surface1};
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    min-height: 440px;
    width: 360px;
    border-radius: 18px;
    border: 1.5px solid ${colors.gray300};
    box-shadow: 0 18px 42px 0 rgba(89 89 89 / 4%);
  `)}
`

const Top = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    padding: 24px;
  `)}
`

const TempTag = styled.div`
  ${textStyles.bodyXS}
  background-color: ${colors.gray300};
  color: ${colors.gray500};

  ${fresponsive(css`
    padding: 10px;
  `)}
`

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${fresponsive(css`
    border-top: 1.5px solid ${colors.gray300};
    padding: 24px;
    gap: 10px;
  `)}
`

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  ${fresponsive(css`
    gap: 23px;
  `)}
`

const Info = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    gap: 6px;
  `)}
`

const StyledIcon = styled(Icon)`
  path {
    fill: ${colors.gray500};
  }

  ${fresponsive(css`
    width: 16px;
    height: 16px;
  `)}
`

const Title = styled.span`
  color: ${colors.black};
  ${textStyles.sh2}
`

const Text = styled.p`
  ${textStyles.bodyS}
  color: ${colors.gray600};
`

const StyledButton = styled(Button)`
  flex-shrink: 0;
`

const Price = styled.h6`
  ${textStyles.h6}
  color: ${colors.black};
  display: flex;
  align-items: flex-end;
  
  span {
    ${textStyles.bodyS}
  }

  ${fresponsive(css`
    gap: 5px;
    margin-top: 28px;
  `)}
`
