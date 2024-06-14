import Primary from "components/Buttons/Primary"
import { graphql, useStaticQuery } from "gatsby"
import UniversalImage from "library/UniversalImage"
import { fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"
import links from "utils/links"

import { ReactComponent as ChatSVG } from "images/agents/Chat.svg"
import { ReactComponent as CostSVG } from "images/agents/Cost.svg"
import { ReactComponent as HeartSVG } from "images/agents/Heart.svg"
import { ReactComponent as PeopleSVG } from "images/agents/People.svg"
import { ReactComponent as RocketSVG } from "images/agents/Rocket.svg"

const data = [
	{
		icon: <PeopleSVG />,
		title: "Expert Setup & Customization",
		description:
			"Our team handles the entire setup process for you, including tailoring your AI to meet your unique business needs and ensuring your AI agent is ready to perform from day one.",
	},
	{
		icon: <CostSVG />,
		title: "Cost-Efficient",
		description:
			"Enjoy premium service without the premium price tag. Setup and customization are included at no extra cost—just meet the call volume minimum.",
	},
	{
		icon: <HeartSVG />,
		title: "Ongoing Support",
		description:
			"Receive continued support from Thoughtly to ensure your AI agent remains optimized and effective.",
	},
	{
		icon: <ChatSVG />,
		title: "Continuous Coaching",
		description:
			"Stay in the driver seat by providing feedback to your AI agents just like you would to human agents. Listen to calls, identify areas for improvement, and offer guidance.",
	},
	{
		icon: <RocketSVG />,
		title: "Self Sufficiency",
		description:
			"Empower your team with the tools and knowledge to create new AI agents or make adjustments to existing ones. Our comprehensive training materials and resources ensure you can manage your AI solutions with ease, giving you greater control and flexibility.",
	},
] as const

export default function AgentsAdvantages() {
	const imageQuery: Queries.AgentsAdvantagesQuery = useStaticQuery(graphql`
		query AgentsAdvantages {
			file(relativePath: { eq: "agents/BenefitsBackground.png" }) {
				childImageSharp {
					gatsbyImageData(layout: FULL_WIDTH)
				}
			}
		}
	`)

	return (
		<Wrapper>
			<TopRow>
				<Title>Agent Accelerator Advantages</Title>
				<Details>
					Join the ranks of forward-thinking companies who are revolutionizing
					their customer service with AI. Our Program is your ticket to a highly
					effective customer support operation.
					<Buttons>
						<Primary to={links.todo} outline icon="chev">
							Talk to Sales
						</Primary>
						<Primary to={links.todo} variant="secondary" icon="calendar">
							Book a Demo
						</Primary>
					</Buttons>
				</Details>
			</TopRow>
			<Cards>
				<Background image={imageQuery.file} alt="alt_goes_here" />
				{data.map((item, index) => (
					<Card key={item.title}>
						<IconWrapper>{item.icon}</IconWrapper>
						<CardTitle>{item.title}</CardTitle>
						<CardText>{item.description}</CardText>
					</Card>
				))}
			</Cards>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	${fresponsive(css`
		max-width: 1320px;
		margin: 130px auto 0;
	`)}

	${ftablet(css`
		max-width: 983px;
		margin-top: 181px;
	`)}
`
const TopRow = styled.div`
	${fresponsive(css`
		display: grid;
		grid-template-columns: 744px 1fr;
		gap: 24px;
		padding: 110px 96px;
		border-top: 1.5px solid ${colors.gray300};
	`)}

	${ftablet(css`
		grid-template-columns: 1fr;
		gap: 48px;
		padding: 110px 48px 48px;
	`)}
`

const Title = styled.div`
	${textStyles.h3}
`

const Details = styled.div`
	${textStyles.bodyR};
	color: ${colors.gray700};
	display: flex;
	flex-direction: column;

	${fresponsive(css`
		gap: 24px;
	`)}
`

const Buttons = styled.div`
	color: ${colors.black};
	${fresponsive(css`
		display: flex;
		gap: 12px;
	`)}
`

const Cards = styled.div`
	${fresponsive(css`
		display: flex;
		padding: 104px 97px;
		position: relative;
		isolation: isolate;
		overflow: clip;
		border-radius: 60px;
		gap: 24px;
		flex-wrap: wrap;
		justify-content: center;
	`)}

	${ftablet(css`
		padding: 48px;
	`)}
`

const Background = styled(UniversalImage)`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
`

const Card = styled.div`
	${fresponsive(css`
		width: 359px;
		border-radius: 18px;
		border: 1px solid #d8d8d8;
		background: ${gradients.surface1};
		padding: 48px 44px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;

		&:last-child {
			padding: 48px 27px;
		}
	`)}

	${ftablet(css`
		width: 279px;
		padding: 48px 25px 55px;
	`)}
`
const IconWrapper = styled.div`
	${fresponsive(css`
		width: 108px;
		height: 108px;
	`)}
`

const CardTitle = styled.div`
	${textStyles.sh2};

	${fresponsive(css`
		margin-top: 48px;
		margin-bottom: 12px;
	`)}
`

const CardText = styled.div`
	${textStyles.bodyS};
	color: ${colors.gray700};
`
