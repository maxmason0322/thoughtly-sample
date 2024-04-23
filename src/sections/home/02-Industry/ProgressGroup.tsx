import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

export default function ProgressGroup({
	title,
	text,
	progress = 0,
}: {
	title: string
	text: string
	progress?: number | null
}) {
	return (
		<Wrapper>
			<Title>{title}</Title>
			<Track>
				<Ball $progress={progress ? progress : 0} />
			</Track>
			<Text>{text}</Text>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${fresponsive(css`
    gap: 10px;
  `)}
`

const Title = styled.span`
  ${textStyles.sh3}
  color: ${colors.black};
`

const Text = styled.span`
  ${textStyles.bodyXS}
  color: ${colors.gray600};
`

const Track = styled.div`
  position: relative;
  width: 100%;
  border-radius: 99vw;
  background-color: ${colors.gray300};

  ${fresponsive(css`
    height: 6px;
  `)}
`

const Ball = styled.div<{ $progress: number }>`
  border-radius: 99vw;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: ${({ $progress }) => $progress}%;
  background-color: ${colors.green400};
  transition: left 0.5s;

  ${fresponsive(css`
    border: 1px solid ${colors.white};
    height: 12px;
    width: 12px;
    box-shadow: 0 1px 1.8px 0 rgba(0 0 0 / 19%);
  `)}
`
