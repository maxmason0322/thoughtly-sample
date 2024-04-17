import Selector from "components/Buttons/Selector"
import Background from "images/home/industry-background.png"
import AutoAnimate from "library/AutoAnimate"
import { fresponsive } from "library/fullyResponsive"
import { useState } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"

const DATA = [
	{
		title: "Healthcare",
		text: `Our agents automate complex processes, from benefits explanation
			to medication adherence support, ensuring clarity and compliance
			across all interactions. Enhance operational workflows, reduce
			administrative burdens, and deliver superior member service with
			AI that understands the nuances of pharmacy benefits and
			healthcare planning.`,
	},
	{
		title: "Services",
		text: `Revolutionize your scheduling, appointment setting, and everything else with AI that understands your client's needs. Perfect for hospitality & travel, consumer services, financial services, and more.`,
	},
	{
		title: "Real Estate",
		text: "Imagine a full-time employee that answers every new lead, calls cold leads, and schedules a property showing for all of them. Your own AI ISA at your service.",
	},
	{
		title: "Insurance",
		text: "From policy inquiries to claims processing, your Thoughtly agents provide accurate, compassionate service, making every step seamless for your customers. Enhance trust and efficiency in your insurance services with AI that cares.",
	},
	{
		title: "Government",
		text: "Drive political engagement and make every voice heard with technology that bridges gaps and fosters democracy. Designed for PACs, campaigns, and advocacy groups, our agents not only streamline outreach and personalize interactions with voters but also seamlessly facilitate connections between constituents and their representatives.",
	},
	{
		title: "Agencies",
		text: "Empower your agency with Thoughtly, becoming the bridge that connects your clients to the future of customer interaction. As a solution provider, leverage our platform to offer cutting-edge AI agents that enhance client services, from automated customer support to personalized sales interactions",
	},
	{
		title: "Market Research",
		text: "Whether you're exploring market dynamics, gauging sentiments of your membership, or conducting political polling, Thoughtly delivers actionable intelligence, reports, and exportable data to inform your strategies, simplifying complex research tasks into clear, strategic advantages.",
	},
]

export default function Industry() {
	const [activeIndex, setActiveIndex] = useState(0)

	const tabs = DATA.map((item, index) => {
		return (
			<Selector
				key={item.title}
				type="button"
				active={activeIndex === index}
				onClick={() => setActiveIndex(index)}
			>
				{item.title}
			</Selector>
		)
	})

	const text = DATA.map((item) => {
		return <p key={item.title}>{item.text}</p>
	})

	return (
		<Wrapper>
			<Inner>
				<Top>
					<Title>
						The future of customer <span>interaction.</span>
					</Title>
					<Buttons>{tabs}</Buttons>
				</Top>
				<Bottom>
					<Left>
						<Assertiveness />
						<Agent />
						<AutoAnimate
							duration={1.25}
							toParameters={{
								scale: 0.9,
								opacity: 0,
								yPercent: 0,
								duration: 0.5,
							}}
							fromParameters={{
								scale: 0.9,
								opacity: 0,
								yPercent: 0,
								duration: 0.5,
								delay: 0.75,
							}}
						>
							<Image key={DATA[activeIndex]?.title} />
						</AutoAnimate>
						<Logos />
					</Left>
					<Right>
						<TextContent>
							<AutoAnimate>
								<SubTitle key={DATA[activeIndex]?.title}>
									{DATA[activeIndex]?.title}
								</SubTitle>
							</AutoAnimate>
							<AutoAnimate>
								<Text key={DATA[activeIndex]?.title}>
									{DATA[activeIndex]?.text}
								</Text>
							</AutoAnimate>
						</TextContent>
						<WidgetWrapper />
					</Right>
				</Bottom>
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
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    height: 1015px;
    padding: 36px 156px 171px;
    gap: 47px;
  `)}
`

const Top = styled.div`
  display: flex;

  ${fresponsive(css`
    gap: 63px;
  `)}
`

const Title = styled.h2`
  ${textStyles.h4}
  color: ${colors.black};

  span {
    ${transparentText}
    background-image: ${gradients.greenBlue};
  }

  ${fresponsive(css`
    width: 395px;
  `)}
`

const Buttons = styled.div`
	display: flex;
	flex-wrap: wrap;

	${fresponsive(css`
		gap: 18px;
		width: 552px;
	`)}
`

const Bottom = styled.div`
	display: flex;
	align-items: flex-start;
	
	${fresponsive(css`
		gap: 48px;
	`)}
`

const Left = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	position: relative;

	${fresponsive(css`
		gap: 24px;
	`)}
`

const Image = styled.div`
	background-color: ${colors.gray800};

	${fresponsive(css`
		width: 528px;
		height: 375px;
		border-radius: 24px;
	`)}
`

const Card = styled.div`
	background: ${gradients.surface1};

	${fresponsive(css`
		border: 1.5px solid ${colors.gray200};
		padding: 24px;
		border-radius: 12px;
		box-shadow: 0 18px 42px 0 rgba(89 89 89 / 4%);
	`)}
`

const Assertiveness = styled(Card)`
	position: absolute;
	z-index: 2;

	${fresponsive(css`
		width: 240px;
		height: 190px;
		top: 139px;
		left: -72px;
	`)}
`

const Agent = styled(Card)`
	position: absolute;
	z-index: 2;

	${fresponsive(css`
		width: 240px;
		height: 58px;
		top: 342px;
		left: -72px;
	`)}
`

const Logos = styled(Card)`
	${fresponsive(css`
		height: 90px;
		width: 291px;
		border-radius: 24px;
	`)}
`

const Right = styled.div`
	display: flex;
	flex-direction: column;

	${fresponsive(css`
		gap: 48px;
	`)}
`

const TextContent = styled.div`
	display: flex;
	flex-direction: column;
	
	${fresponsive(css`
		gap: 16px;
	`)}
`

const SubTitle = styled.h6`
	${textStyles.sh1}
	color: ${colors.black};
	width: fit-content;
	white-space: nowrap;
`

const Text = styled.p`
	${textStyles.bodyS}
	color: ${colors.gray800};
	overflow: clip;

	${fresponsive(css`
		width: 462px;
		height: 95px;
	`)}
`

const WidgetWrapper = styled.div`
	background-color: ${colors.gray100};
	position: relative;
	background-image: url(${Background});
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: center center;

	${fresponsive(css`
		border-radius: 24px;
		width: 576px;
		height: 375px;
	`)}
`
