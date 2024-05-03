import Button from "components/Buttons/Primary"
import CheckTag from "components/CheckTag"
import Icon, { type IconType } from "components/Icon"
import { CalendlyModalContext } from "components/Providers/CalendlyModalProvider"
import AutoAnimate from "library/AutoAnimate"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import { useContext, useEffect, useState } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"

export default function Card({
	icons,
	iconStroke,
	titles,
	text,
	prices,
	hideMonth,
	tags,
	showProgress,
}: {
	icons: IconType[]
	iconStroke: boolean[]
	titles: string[]
	text: string[]
	prices: string[]
	hideMonth?: boolean
	tags: string[][]
	showProgress?: boolean
}) {
	const [activeIndex, setActiveIndex] = useState(0)
	const { setModalOpen } = useContext(CalendlyModalContext)
	const [minutes, setMinutes] = useState(300)
	const tagEls = tags[activeIndex]?.map((item) => (
		<CheckTag key={item}>{item}</CheckTag>
	))

	useEffect(() => {
		if (minutes < 400) {
			setActiveIndex(0)
		} else if (minutes < 1500) {
			setActiveIndex(1)
		} else if (minutes < 3100) {
			setActiveIndex(2)
		} else if (minutes < 10000) {
			setActiveIndex(3)
		} else {
			setActiveIndex(4)
		}
	}, [minutes])

	const duration = 0.3

	return (
		<Wrapper>
			<Top>
				<Row>
					<Info>
						<IconWrapper>
							<AutoAnimate duration={duration}>
								<StyledIcon
									$stroke={!!iconStroke[activeIndex]}
									key={activeIndex}
									name={icons[activeIndex] as IconType}
								/>
							</AutoAnimate>
						</IconWrapper>
						<TitleWrapper>
							<AutoAnimate duration={duration}>
								<Title key={activeIndex}>{titles[activeIndex]}</Title>
							</AutoAnimate>
						</TitleWrapper>
						<div>
							<AutoAnimate duration={duration}>
								<Text key={activeIndex}>{text[activeIndex]}</Text>
							</AutoAnimate>
						</div>
					</Info>
					<StyledButton
						type="button"
						onClick={() => setModalOpen(true)}
						variant="secondary"
					>
						Get Started
					</StyledButton>
				</Row>
				<Price>
					<AutoAnimate duration={duration}>
						<PriceText key={activeIndex}>{prices[activeIndex]}</PriceText>
					</AutoAnimate>
					{!hideMonth && <span>/mo.</span>}
				</Price>
				{showProgress && (
					<>
						<Minutes>
							Minutes Per Month
							{/* <AutoAnimate duration={duration}> */}
							<span>
								{minutes}
								{minutes === 10000 && "+"}
							</span>
							{/* </AutoAnimate> */}
						</Minutes>
						<Slider
							defaultValue={300}
							aria-label="call volume, adjust to view different plans"
							type="range"
							min="300"
							max="10000"
							onChange={(e) => setMinutes(Number.parseInt(e.target.value))}
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
    &:nth-child(2) {
      height: 490px;
    }

    min-height: 440px;
    width: 360px;
    border-radius: 18px;
    border: 1.5px solid ${colors.gray300};
    box-shadow: 0 18px 42px 0 rgba(89 89 89 / 4%);
  `)}

  ${ftablet(css`
    width: 570px;
    min-height: unset;

    &:nth-child(2) {
      height: auto;
    }
  `)}

  ${fmobile(css`
    &:nth-child(2) {
      height: auto;
    }

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

const IconWrapper = styled.div`
  ${fresponsive(css`
    height: 16px;
  `)}
`

const StyledIcon = styled(Icon)<{ $stroke: boolean }>`
  path {
    ${({ $stroke }) =>
			$stroke ? `stroke: ${colors.gray500}` : `fill: ${colors.gray500}`};
  }

  ${fresponsive(css`
    width: 16px;
    height: 16px;
  `)}
`

const TitleWrapper = styled.div`
  ${fresponsive(css`
    height: 22px;
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

  ${fresponsive(css`
    height: 56px;
  `)}

  ${ftablet(css`
    ${textStyles.bodyR}
    width: 250px;
  `)}
`

const StyledButton = styled(Button)`
  flex-shrink: 0;
`

const Price = styled.h1`
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
    height: 50px;
  `)}
`

const Thumb = css`
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
`

const Slider = styled.input`
  appearance: none;
  width: 100%;
  background: #ececec;
  outline: none;
  border-radius: 99vw;

  ${fresponsive(css`
    height: 9px;
  `)}

  &::-moz-range-thumb {
    ${Thumb}
  }

  &::-webkit-slider-thumb {
    ${Thumb}
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

const PriceText = styled.div`
  ${fresponsive(css`
    padding: 0 10px 0 0;
    margin: 0 -10px 0 0;
  `)}
`
