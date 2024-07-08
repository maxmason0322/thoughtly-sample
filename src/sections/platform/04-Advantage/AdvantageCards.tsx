import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"

import Primary from "components/Buttons/Primary"
import Unmask from "components/Unmask"
import { graphql, useStaticQuery } from "gatsby"
import AcceleratorSVG from "images/platform/advantage/Accelerator.svg"
import SafetySVG from "images/platform/advantage/Safety.svg"
import ScalabilitySVG from "images/platform/advantage/Scalability.svg"
import SecuritySVG from "images/platform/advantage/Security.svg"
import { ScreenContext } from "library/ScreenContext"
import UniversalImage from "library/UniversalImage"
import { useContext } from "react"
import textStyles from "styles/text"
import links from "utils/links"

export default function AdvantageCards() {
	const { mobile, tablet, desktop } = useContext(ScreenContext)

	const imageQuery = useStaticQuery(graphql`
		query AdvantageCardsQuery {
			accelerator: file(
				relativePath: { eq: "platform/advantage/Accelerator.png" }
			) {
				childImageSharp {
					gatsbyImageData(placeholder: NONE)
				}
			}
			acceleratorTablet: file(
				 relativePath: { eq: "platform/advantage/AcceleratorTablet.png" }
			) {
				childImageSharp {
					gatsbyImageData(placeholder: NONE)
				}
			}	 
			security: file(relativePath: { eq: "platform/advantage/Security.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: NONE)
				}
			}
			securityTablet: file(relativePath: { eq: "platform/advantage/SecurityTablet.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: NONE)
				}
			}
			scalability: file(
				relativePath: { eq: "platform/advantage/Scalability.png" }
			) {
				childImageSharp {
					gatsbyImageData(placeholder: NONE)
				}
			}
			scalabilityTablet: file(
				relativePath: { eq: "platform/advantage/ScalabilityTablet.png" }
			) {
				childImageSharp {
					gatsbyImageData(placeholder: NONE)
				}
			}
			safety: file(relativePath: { eq: "platform/advantage/Safety.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: NONE)
				}
			}
			safetyTablet: file(relativePath: { eq: "platform/advantage/SafetyTablet.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: NONE)
				}
			}
		}
	`)

	const data = [
		{
			title: "Agent Accelerator",
			description:
				"Get expert, full-service setup and customization of your AI agent. Just provide us with the same materials you give your existing call center agents, and we'll handle the rest. We'll come back to you with the perfect AI agent, ensuring premium quality without the premium price.",
			link: links.agentAccelerator,
			svg: AcceleratorSVG,
			image: !desktop ? imageQuery.acceleratorTablet : imageQuery.accelerator,
			desktopWidth: 384,
		},
		{
			title: "Enterprise-grade Security",
			description:
				"From advanced encryption to rigorous compliance checks, Thoughtly ensures your data is protected with the highest standards of security and privacy.",
			svg: SecuritySVG,
			image: !desktop ? imageQuery.securityTablet : imageQuery.security,
			desktopWidth: 491,
		},
		{
			title: "Infinite Scalability",
			description:
				"Your AI agent effortlessly adjusts to meet demand, handling call volume spikes and seasonality with ease.",
			svg: ScalabilitySVG,
			image: !desktop ? imageQuery.scalabilityTablet : imageQuery.scalability,
			desktopWidth: 333,
		},
		{
			title: "Trust and Safety Agent",
			description:
				"Every customer receives a Trust and Safety Agent to ensure all conversations remain appropriate and compliant. As a no-guardrails AI, Thoughtly's Trust and Safety Agent actively monitors interactions, maintaining high standards of conduct and protecting your brand integrity.",
			svg: SafetySVG,
			image: !desktop ? imageQuery.safetyTablet : imageQuery.safety,
			desktopWidth: 471,
			mobileWidth: 283,
		},
	]

	return (
		<Wrapper>
			{data.map((item, index) => (
				<Unmask key={item.title}>
					<Card>
						{desktop && <Icon src={item.svg} alt={item.title} />}
						<Widget image={item.image} alt={item.title} />
						<Text>
							{!desktop && <Icon src={item.svg} alt={item.title} />}
							{!tablet && (
								<>
									<Title>{item.title}</Title>
									<Description
										$mobileWidth={item.mobileWidth}
										$desktopWidth={item.desktopWidth}
										$index={index}
									>
										{item.description}
									</Description>
									{!mobile && item.link && (
										<Button to={item.link} variant="secondary" icon="chev">
											See More
										</Button>
									)}
								</>
							)}
							{tablet && (
								<TabletOnly>
									<Title>{item.title}</Title>
									<Description
										$mobileWidth={item.mobileWidth}
										$desktopWidth={item.desktopWidth}
										$index={index}
									>
										{item.description}
									</Description>
									{item.link && (
										<Button to={item.link} variant="secondary" icon="chev">
											See More
										</Button>
									)}
								</TabletOnly>
							)}
						</Text>
					</Card>
				</Unmask>
			))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	${fresponsive(css`
		display: grid;
		gap: 24px;
	`)}
`

const Icon = styled.img`
	${fresponsive(css`
		width: 108px;
		height: 108px;
		margin-bottom: auto;
	`)}

	${ftablet(css`
		width: 54px;
		height: 54px;
	`)}

	${fmobile(css`
		width: 54px;
		height: 54px;
	`)}
`

const Widget = styled(UniversalImage).attrs({ objectFit: "contain" })`
	${fresponsive(css`
		position: absolute;
		inset: 32px;
		pointer-events: none;

		img {
			object-position: right center;
		}
	`)}

	${ftablet(css`
		img {
			object-position: bottom right;
		}
	`)}

	${fmobile(css`
		inset: 23.5px;
		bottom: 48px;
		
		img {
			object-position: bottom center;
		}
	`)}
`

const Text = styled.div`
	${fresponsive(css`
		display: grid;
		gap: 12px;

		& > *:nth-child(3) {
			margin-top: 12px;
		}
	`)}

	${ftablet(css`
		height: 100%;

		& > *:nth-child(3) {
			margin-top: unset;
		}
		
		& > *:nth-child(4) {
			margin-top: 12px;
		}
	`)}

	${fmobile(css`
		& > *:nth-child(3) {
			margin-top: unset;
		}

		& > *:nth-child(2) {
			margin-top: 12px;
		}
	`)}
`

const TabletOnly = styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-end;

	${fresponsive(css`
		gap: 12px;
	`)}
`

const Title = styled.div`
	${textStyles.sh2};

	${ftablet(css`
		${textStyles.sh1};
	`)}

	${fmobile(css`
		${textStyles.sh1};
	`)}
`

const Description = styled.div<{
	$mobileWidth: number | undefined
	$desktopWidth: number
	$index: number
}>`
	${textStyles.bodyS};
	color: ${colors.gray700};
	${({ $desktopWidth }) =>
		fresponsive(css`
			width: ${$desktopWidth}px;
		`)}

	${ftablet(css`
		${textStyles.bodyR};
		width: 364px;
	`)}

	${({ $index, $mobileWidth }) =>
		fmobile(css`
		${$index === 0 || $index === 3 ? textStyles.bodyS : textStyles.bodyR};
		width: ${$mobileWidth ? `${$mobileWidth}px` : "303px"};
	`)}
`

const Button = styled(Primary)`
	${ftablet(css`
		margin-top: 12px;
	`)}
`

const Card = styled.div`
	${fresponsive(css`
		width: 1128px;
		height: 384px;
		border-radius: 24px;
		padding: 32px;
		border: 1.5px solid #d8d8d8;
		background: ${gradients.surface1};
		position: relative;
		display: flex;
		flex-direction: column;
	`)}

	${ftablet(css`
		width: 888px;
		height: 440px;
	`)}

	${fmobile(css`
		width: 360px;
		height: 635px;
		padding: 48px 23.5px;
		border-radius: 18px;
	`)}

	div:nth-child(2n+1) > & {
		${Icon} {
			align-self: end;

			${fmobile(css`
				align-self: unset;
			`)}
		}

		${Text} {
			${fresponsive(css`
				margin-left: 576px;
			`)}

			${ftablet(css`
				margin-left: 456px;
			`)}

			${fmobile(css`
				margin-left: unset;
			`)}
		}

		${Widget} img {
			object-position: left center;

			${ftablet(css`
				object-position: bottom left;
			`)}

			${fmobile(css`
				object-position: bottom center;
			`)}
		}
	}
`
