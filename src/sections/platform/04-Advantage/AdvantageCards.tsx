import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"

import Primary from "components/Buttons/Primary"
import { graphql, useStaticQuery } from "gatsby"
import AcceleratorSVG from "images/platform/advantage/Accelerator.svg"
import SafetySVG from "images/platform/advantage/Safety.svg"
import ScalabilitySVG from "images/platform/advantage/Scalability.svg"
import SecuritySVG from "images/platform/advantage/Security.svg"
import UniversalImage from "library/UniversalImage"
import textStyles from "styles/text"
import links from "utils/links"

export default function AdvantageCards() {
	const imageQuery = useStaticQuery(graphql`
		query AdvantageCardsQuery {
			accelerator: file(
				relativePath: { eq: "platform/advantage/Accelerator.png" }
			) {
				childImageSharp {
					gatsbyImageData
				}
			}
			security: file(relativePath: { eq: "platform/advantage/Security.png" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			scalability: file(
				relativePath: { eq: "platform/advantage/Scalability.png" }
			) {
				childImageSharp {
					gatsbyImageData
				}
			}
			safety: file(relativePath: { eq: "platform/advantage/Safety.png" }) {
				childImageSharp {
					gatsbyImageData
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
			image: imageQuery.accelerator,
			desktopWidth: 384,
		},
		{
			title: "Enterprise-grade Security",
			description:
				"From advanced encryption to rigorous compliance checks, Thoughtly ensures your data is protected with the highest standards of security and privacy.",
			svg: SecuritySVG,
			image: imageQuery.security,
			desktopWidth: 491,
		},
		{
			title: "Infinite Scalability",
			description:
				"Your AI agent effortlessly adjusts to meet demand, handling call volume spikes and seasonality with ease.",
			svg: ScalabilitySVG,
			image: imageQuery.scalability,
			desktopWidth: 333,
		},
		{
			title: "Trust and Safety Agent",
			description:
				"Every customer receives a Trust and Safety Agent to ensure all conversations remain appropriate and compliant. As a no-guardrails AI, Thoughtly's Trust and Safety Agent actively monitors interactions, maintaining high standards of conduct and protecting your brand integrity.",
			svg: SafetySVG,
			image: imageQuery.safety,
			desktopWidth: 491,
		},
	]

	return (
		<Wrapper>
			{data.map((item, index) => (
				<Card key={item.title}>
					<Icon src={item.svg} alt={item.title} />
					<Widget image={item.image} alt={item.title} />
					<Text>
						<Title>{item.title}</Title>
						<Description $desktopWidth={item.desktopWidth}>
							{item.description}
						</Description>
						{item.link && (
							<Primary to={item.link} variant="secondary" icon="chev">
								See More
							</Primary>
						)}
					</Text>
				</Card>
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
`

const Text = styled.div`
	${fresponsive(css`
		display: grid;
		gap: 12px;

		& > *:nth-child(3) {
			margin-top: 12px;
		}
	`)}
`

const Title = styled.div`
	${textStyles.sh2};
`

const Description = styled.div<{
	$desktopWidth: number
}>`
	${textStyles.bodyS};
	color: ${colors.gray700};
	${({ $desktopWidth }) =>
		fresponsive(css`
			width: ${$desktopWidth}px;
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

	&:nth-child(2n+1) {
		${Icon} {
			align-self: end;
		}

		${Text} {
			${fresponsive(css`
				margin-left: 576px;
			`)}
		}

		${Widget} img {
			object-position: left center;
		}
	}
`
