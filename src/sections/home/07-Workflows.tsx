import BackgroundImg from "images/home/workflows-background.png"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles from "styles/text"

export default function Workflows() {
	return (
		<Wrapper>
			<Inner>
				<Content>
					<Title>Human-like agents, fully integrated into your business.</Title>
					<Text>
						Build powerful workflows that fully automate your entire sales
						funnel, customer service routines, and more.
					</Text>
				</Content>
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;

  ${fresponsive(css`
    padding: 106px 170px 25px;
  `)}
`

const Content = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${BackgroundImg});
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${fresponsive(css`
    height: 671px;
    padding: 60px 165px;
  `)}
`

const Title = styled.h5`
  ${textStyles.h5}
  color: ${colors.black};
  text-align: center;

  ${fresponsive(css`
    margin-bottom: 36px;
  `)}
`

const Text = styled.p`
  ${textStyles.bodyR}
  text-align: center;

  ${fresponsive(css`
    width: 346px;
  `)}
`
