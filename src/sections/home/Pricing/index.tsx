import Button from "components/Buttons/Primary"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"
import links from "utils/links"
import Card from "./Card"

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
						<Card
							title="Free"
							text="Get started building Thoughtly agents for free."
							price="$30"
							tags={["Unlimited Seats", "10 minutes per month"]}
						/>
						<Card
							title="Pro"
							text="Use Thoughtly to grow your small business."
							price="$150"
							tags={[
								"Unlimited Seats",
								"Industry-leading agent editor",
								"Inbound and outbound calling",
								"Genius knowledge database",
							]}
						/>
						<Card
							title="Enterprise"
							text="Automate your enterprise using conversational AI."
							price="Contact Us"
							hideMonth
							tags={[
								"Unlimited Seats",
								"Industry-leading agent editor",
								"Inbound and outbound calling",
								"Genius knowledge database",
								"Whitelabel support",
								"Executive coaching",
							]}
						/>
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
  align-items: center;
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
