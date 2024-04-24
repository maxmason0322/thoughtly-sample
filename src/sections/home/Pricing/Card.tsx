import Button from "components/Buttons/Primary"
import CheckTag from "components/CheckTag"
import Icon from "components/Icon"
import AutoAnimate from "library/AutoAnimate"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import { useState } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"
import links from "utils/links"

export default function Card({
	titles,
	text,
	prices,
	minutes,
	hideMonth,
	tags,
	showProgress,
}: {
	titles: string[]
	text: string[]
	prices: string[]
	minutes?: string[]
	hideMonth?: boolean
	tags: string[][]
	showProgress?: boolean
}) {
	const [activeIndex, setActiveIndex] = useState(0)

	const tagEls = tags[activeIndex]?.map((item) => (
		<CheckTag key={item}>{item}</CheckTag>
	))

	return (
		<Wrapper>
			<Top>
				<Row>
					<Info>
						<StyledIcon name="analytics" />
						<AutoAnimate>
							<Title key={activeIndex}>{titles[activeIndex]}</Title>
						</AutoAnimate>
						<AutoAnimate>
							<Text key={activeIndex}>{text[activeIndex]}</Text>
						</AutoAnimate>
					</Info>
					<StyledButton to={links.todo} variant="secondary">
						Get Started
					</StyledButton>
				</Row>
				<Price>
					<AutoAnimate>
						<div key={activeIndex}>{prices[activeIndex]}</div>
					</AutoAnimate>
					{!hideMonth && <span>/mo.</span>}
				</Price>
				{showProgress && (
					<>
						<Minutes>
							Minutes Per Month
							<AutoAnimate>
								<span key={activeIndex}>{minutes?.[activeIndex]}</span>
							</AutoAnimate>
						</Minutes>
						<Slider
							value={activeIndex}
							type="range"
							min="0"
							max="4"
							onChange={(e) => setActiveIndex(Number.parseInt(e.target.value))}
						/>
					</>
				)}
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

  ${ftablet(css`
    width: 570px;
    min-height: unset;
  `)}

  ${fmobile(css`
    min-height: unset;
  `)}
`

const Top = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    padding: 24px;
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

  ${ftablet(css`
    ${textStyles.sh1}
  `)}
`

const Text = styled.p`
  ${textStyles.bodyS}
  color: ${colors.gray600};

  ${ftablet(css`
    ${textStyles.bodyR}
    width: 250px;
  `)}
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

const Slider = styled.input`
  appearance: none;
  width: 100%; 
  background: #ECECEC;
  outline: none;
  border-radius: 99vw;

  ${fresponsive(css`
    height: 9px;
  `)}

  &::-webkit-slider-thumb {
    appearance: none;
    cursor: pointer;
    background: ${colors.green400};
    border-radius: 99vw;
    filter: drop-shadow(0 4.266px 9.67px rgba(119 119 119 / 21%));

    ${fresponsive(css`
      border: 1px solid ${colors.white};
      width: 15px; 
      height: 15px; 
    `)}
  }
`

const Minutes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${textStyles.t2}
  color: ${colors.gray600};

  span {
    color: ${colors.gray800};
  }

  ${fresponsive(css`
    margin-bottom: 12px;
    margin-top: 12px;
  `)}
`
