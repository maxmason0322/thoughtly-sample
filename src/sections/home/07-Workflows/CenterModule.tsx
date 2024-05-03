import { ReactComponent as CheckMarkSVG } from "images/home/complete.svg"
import { ReactComponent as ProcessingIcon } from "images/home/processing.svg"
import spinnerImg from "images/home/spinner.png"
import AutoAnimate from "library/AutoAnimate"
import { fresponsive, ftablet } from "library/fullyResponsive"
import type { MutableRefObject } from "react"
import styled, { css, keyframes } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"

export default function CenterModule({
	afterContent,
	processStep,
	processText,
}: {
	afterContent: boolean
	processStep: number
	processText: MutableRefObject<HTMLDivElement | null>
}) {
	const processIcons = [
		<SpinningCircle key="spinner">
			<img src={spinnerImg} alt="spinner" />
		</SpinningCircle>,
		<StyledCheckMark key="success-check" />,
	]

	return (
		<CenterModuleWrapper>
			<LeftNode />
			<RightNode />
			<StyledProcessingIcon />

			<Processing>
				<ProcessIconContainer>
					<StyledAutoAnimate
						fromParameters={{ opacity: 0 }}
						toParameters={{ opacity: 1 }}
					>
						{processIcons[processStep]}
					</StyledAutoAnimate>
				</ProcessIconContainer>
				<ProcessText>
					<Dots $afterContent={afterContent} />
					<ProcessTextWord ref={processText} />
				</ProcessText>
			</Processing>
		</CenterModuleWrapper>
	)
}

const animationCardStyle = css`
  background: ${gradients.surface1};

  ${fresponsive(css`
    box-shadow: 0 18px 32px 0 rgba(89 89 89 / 4%);
    border-radius: 18px;
    border: 1.5px solid ${`${colors.gray200}90`};
  `)}
`

const Processing = styled.div`
  ${textStyles.sh4}
  color: ${colors.gray800};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`

const StyledProcessingIcon = styled(ProcessingIcon)`
  position: relative;
  ${fresponsive(css`
    width: 91px;
    height: 91px;
  `)}
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const SpinningCircle = styled.div`
  position: relative;
  animation: ${spin} 1s linear infinite;
  transform-origin: center center;
  ${fresponsive(css`
    width: 14px;
    height: 14px;
    padding: 1px;
    margin: -1px;

    img {
      overflow: visible;
    }
  `)}
`

const NodeStyle = css`
  border-radius: 99vw;
  background: ${colors.white};
  ${fresponsive(css`
    border: 1.5px solid ${colors.gray200};
    width: 9px;
    height: 9px;
    top: 118.68px;
  `)}
`

const LeftNode = styled.div`
  position: absolute;
  z-index: 2;
  ${NodeStyle}
  ${fresponsive(css`
    left: -4.7px;
  `)}
`

const RightNode = styled.div`
  position: absolute;

  ${NodeStyle}
  ${fresponsive(css`
    left: unset;
    right: -4.7px;
  `)}
`

const CenterModuleWrapper = styled.div`
  position: relative;
  ${animationCardStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  ${fresponsive(css`
    width: 357px;
    height: 239px;
    gap: 44px;
    padding: 40px 133px 28px;

    ${LeftNode}, ${RightNode} {
      z-index: 10;
      top: 117.68px;
    }
  `)}

  ${ftablet(css`
    width: 264px;
  `)}
`

const dotAnimation = keyframes`
  0% {
    content: "";
  }
  20% {
    content: ".";
  }
  40% {
    content: "..";
  }
  60% {
    content: "...";
  }
  80% {
    content: "";
  }
  100% {
    content: "";
  }
`

const Dots = styled.div<{ $afterContent: boolean }>`
  width: 30px;
  height: 100%;
  position: absolute;
  left: 94%;
  opacity: ${({ $afterContent }) => ($afterContent ? 1 : 0)};
  transition: opacity 0s;

  &::after {
    position: absolute;
    content: "";
    left: 0;
    width: 100%;
    height: 100%;
    color: ${colors.black};
    animation: ${dotAnimation} 2s steps(5)
      ${({ $afterContent }) => ($afterContent ? "infinite" : "1")};
  }
`

const ProcessText = styled.div`
  padding-right: 4px;
  display: flex;
  position: relative;
  ${fresponsive(css`
    min-width: 50px;
  `)}

  .process-text {
    opacity: 0;
  }
`

const StyledCheckMark = styled(CheckMarkSVG)`
  position: relative;

  ${fresponsive(css`
    width: 14px;
    height: 14px;
  `)}
`

const ProcessIconContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  transform-origin: center center;
  ${fresponsive(css`
    width: 14px;
    height: 14px;
  `)}
`

const ProcessTextWord = styled.p``

const StyledAutoAnimate = styled(AutoAnimate)`
  ${fresponsive(css`
    padding: 2px;
    margin: -2px;
  `)}
`
