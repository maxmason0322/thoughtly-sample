import Button from "components/Buttons/Primary"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"
import links from "utils/links"

export default function Pricing() {
	return (
		<Wrapper>
			<Inner>
				<Content>
					<TextContent>
						<Title>
							Sounds like a <span>human,</span> scales like a{" "}
							<span>machine.</span>
						</Title>
						<Row>
							<Text>
								Pay by minute or try one of our scaleable plans to fit your
								ambitions
							</Text>
							<Button to={links.todo} icon="chev">
								Contact Us
							</Button>
						</Row>
					</TextContent>
					<Prices>
						<Tier />
						<Tier />
						<Tier />
					</Prices>
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
    padding: 123px 114px 168px;
  `)}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #EAEAEA;

  ${fresponsive(css`
    padding-top: 81px;
    gap: 81px;
  `)}
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${fresponsive(css`
    gap: 28px;
  `)}
`

const Title = styled.h5`
  ${textStyles.h4}
  color: ${colors.black};

  span {
    ${transparentText}
    background-image: ${gradients.greenBlue};
  }

  ${fresponsive(css`
    width: 630px;
  `)}
`

const Row = styled.div`
  display: flex;
  align-items: center;

  ${fresponsive(css`
    gap: 36px;
  `)}
`

const Text = styled.p`
  ${textStyles.bodyR}
  color: #636363;

  ${fresponsive(css`
    width: 271px;
  `)}
`

const Prices = styled.div`
  display: flex;
  align-items: center;

  ${fresponsive(css`
    gap: 24px;
  `)}
`

const Tier = styled.div`
  background: ${gradients.surface1};

  ${fresponsive(css`
    min-height: 440px;
    width: 360px;
    border-radius: 18px;
    border: 1.5px solid ${colors.gray300};
    box-shadow: 0 18px 42px 0 rgba(89 89 89 / 4%);
  `)}
`
