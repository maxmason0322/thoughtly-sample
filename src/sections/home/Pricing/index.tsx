import EmailInput from "components/EmailInput"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"
import Card from "./Card"

export default function Pricing() {
	return (
		<Wrapper id="pricing">
			<Inner>
				<Content>
					<TextContent>
						<Title>
							Sounds like a <span>human,</span> scales like a{" "}
							<span>machine.</span>
						</Title>
						<Column>
							<Text>
								Pay by minute or try one of our scaleable plans to fit your
								ambitions
							</Text>
							<EmailInput />
						</Column>
					</TextContent>
					<Prices>
						<Card
							icons={["starter"]}
							iconStroke={[true]}
							titles={["Free"]}
							text={["Get started building Thoughtly agents for free."]}
							prices={["Free"]}
							tags={[["10 minutes per month", "Unlimited Seats"]]}
						/>
						<Card
							icons={["starter", "pro", "business", "agency", "rocket"]}
							iconStroke={[true, false, false, true, false]}
							titles={[
								"Starter Plan",
								"Pro",
								"Business",
								"Agency",
								"Enterprise",
							]}
							text={[
								"Find a plan that fits your needs and budget.",
								"Use Thoughtly to grow your small business.",
								"Reliably handle both your inbound and outbound call traffic.",
								"Our advanced whitelabel solution for industry partners and early adopters.",
								"Automate your enterprise using conversational AI.",
							]}
							prices={["$30", "$150", "$300", "$1,000", "$10,000"]}
							showProgress
							tags={[
								[
									"Unlimited Seats",
									"Industry-leading agent editor",
									"Inbound and outbound calling",
									"Genius knowledge database",
								],
								[
									"Unlimited Seats",
									"Industry-leading agent editor",
									"Inbound and outbound calling",
									"Genius knowledge database",
								],
								[
									"Unlimited Seats",
									"Industry-leading agent editor",
									"Inbound and outbound calling",
									"Genius knowledge database",
								],
								[
									"Unlimited Seats",
									"Industry-leading agent editor",
									"Inbound and outbound calling",
									"Genius knowledge database",
									"Whitelabel support",
								],
								[
									"Unlimited Seats",
									"Industry-leading agent editor",
									"Inbound and outbound calling",
									"Genius knowledge database",
									"Whitelabel support",
									"Executive coaching",
								],
							]}
						/>
						<Card
							icons={["rocket"]}
							iconStroke={[false]}
							titles={["Enterprise"]}
							text={["Automate your enterprise with expert setup"]}
							prices={["Contact Us"]}
							hideMonth
							tags={[
								[
									"Unlimited Seats",
									"Industry-leading agent editor",
									"Inbound and outbound calling",
									"Genius knowledge database",
									"Whitelabel support",
									"Executive coaching",
									"Agent Accelerator",
								],
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
	background-color: ${colors.beige200};
`

const Inner = styled.div`
	width: 100%;
	max-width: ${desktopBreakpoint}px;

	${fresponsive(css`
		padding: 123px 114px 168px;
	`)}

	${ftablet(css`
		padding: 123px 94.5px;
	`)}

  ${fmobile(css`
		padding: 25px 7.5px;
	`)}
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-top: 1px solid #eaeaea;

	${fresponsive(css`
		padding-top: 81px;
		gap: 81px;
	`)}

	${ftablet(css`
		padding-top: 112px;
		gap: 60px;
	`)}

  ${fmobile(css`
		padding-top: 50px;
		gap: 50px;
	`)}
`

const TextContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	${fresponsive(css`
		gap: 28px;
	`)}

	${ftablet(css`
		gap: 24px;
	`)}
`

const Title = styled.h1`
	${textStyles.h4}
	color: ${colors.black};

	span {
		${transparentText}
		background-image: ${gradients.greenBlue};
	}

	${fresponsive(css`
		width: 630px;
	`)}

	${ftablet(css`
		${textStyles.h3}
		width: 835px;
	`)}

  ${fmobile(css`
		${textStyles.h6}
		width: 245px;
		text-align: center;
	`)}
`

const Column = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	${fresponsive(css`
		gap: 24px;
	`)}

	${fmobile(css`
		gap: 24px;
	`)}
`

const Text = styled.p`
	${textStyles.bodyL}
	color: ${colors.gray700};
	text-align: center;

	${fresponsive(css`
		width: 393px;
	`)}

	${ftablet(css`
		${textStyles.bodyXL}
		width: 466px;
	`)}

  ${fmobile(css`
		${textStyles.bodyL}
		width: 248px;
	`)}
`

const Prices = styled.div`
	display: flex;
	align-items: center;

	${fresponsive(css`
		gap: 24px;
	`)}

	${ftablet(css`
		flex-direction: column;
	`)}

  ${fmobile(css`
		flex-direction: column;
	`)}
`
