import Selector from "components/Buttons/Selector"
import Icon, { type IconType } from "components/Icon"
import Widget from "components/Widget"
import Gabriel from "data/home-industry/agents/gabriel.jpg"
import James from "data/home-industry/agents/james.jpg"
import Phillip from "data/home-industry/agents/phillip.jpg"
import Tessa from "data/home-industry/agents/tessa.jpg"
import GovernmentImg from "data/home-industry/industries/government.png"
import HealthcareImg from "data/home-industry/industries/healthcare.jpg"
import InsuranceImg from "data/home-industry/industries/insurance.png"
import LegalImg from "data/home-industry/industries/legal.png"
import RealEstateImg from "data/home-industry/industries/real-estate.png"
import ServicesImg from "data/home-industry/industries/services.png"
import gsap from "gsap"
import DrawSVGPlugin from "gsap/DrawSVGPlugin"
import { ReactComponent as LineSVG } from "images/home/industries-line.svg"
import AutoAnimate from "library/AutoAnimate"
import { ScreenContext } from "library/ScreenContext"
import {
	DesktopOnly,
	DesktopTabletOnly,
	MobileOnly,
	TabletOnly,
} from "library/breakpointUtils"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useContext, useState } from "react"
import styled, { css } from "styled-components"
import { Dots } from "styles/background"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"
import ProgressGroup from "./ProgressGroup"

gsap.registerPlugin(DrawSVGPlugin)

const Blue = styled.strong`
  color: #0085e5d9;
`

const data = [
	{
		title: "Healthcare",
		text: "Our agents automate complex processes, from benefits explanation to medication adherence support, ensuring clarity and compliance across all interactions. Enhance operational workflows, reduce administrative burdens, and deliver superior member service with AI that understands the nuances of pharmacy benefits and healthcare planning.",
		assertiveness: 20,
		humorLevel: 25,
		files: [
			{
				name: "Patient Information.xls",
				icon: "csv",
			},
			{
				name: "Voice & Tone Guide.pdf",
				icon: "pdf",
			},
			{
				name: "Plan Directory.mp3",
				icon: "audio",
			},
		],
		image: HealthcareImg,
		icon: "verified",
		agent: {
			name: "Phillip",
			country: "🇬🇧",
			avatar: Phillip,
		},
		widgetOne: {
			text: (
				<p>"Thank you for calling ABC Medicare, who am I speaking with?"</p>
			),
		},
		widgetTwo: {
			text: (
				<p>
					"Got it, great to meet you <Blue>{"{name}"}</Blue>! Are you calling
					about a new plan, an existing plan, or something else?"
				</p>
			),
			bottomConnectors: ["new\\nplan", "existing\\nplan", "something\\nelse"],
		},
	},
	{
		title: "Real Estate",
		text: "Scale your sales operations like never before Whether you're a broker, a firm, or a wholesaler, never miss a lead again! Your own AI ISA at your service.",
		assertiveness: 70,
		humorLevel: 60,
		files: [
			{
				name: "Pricing Sheet.xls",
				icon: "csv",
			},
			{
				name: "Customer Calls.mp3",
				icon: "audio",
			},
			{
				name: "Current Services.pdf",
				icon: "pdf",
			},
		],
		image: RealEstateImg,
		icon: "verified",
		agent: {
			name: "Gabriel",
			country: "🇲🇽",
			avatar: Gabriel,
		},
		widgetOne: {
			text: (
				<p>
					"Hello! This is Monica from Chandler Bing Brokerages. I saw you
					requested information about our listing in Beverly Hills. Are you
					looking to schedule an appointment?"
				</p>
			),
		},
		widgetTwo: {
			text: (
				<p>
					"Got it, yes this is the <Blue>{"{api.numSqft}"}</Blue> Square Foot
					property, right on Monte Cielo, in the heart of Beverly Hills."
				</p>
			),
			bottomConnectors: ["book a showing", "price\\ninquiry", "financing"],
		},
	},
	{
		title: "Government",
		text: "Drive political engagement and make every voice heard with technology that bridges gaps and fosters democracy. Designed for PACs, campaigns, and advocacy groups, our agents not only streamline outreach and personalize interactions with voters but also seamlessly facilitate connections between constituents and their representatives.",
		assertiveness: 20,
		humorLevel: 30,
		files: [
			{
				name: "Voter Registration.xls",
				icon: "csv",
			},
			{
				name: "Party Voice and Tone.mp3",
				icon: "audio",
			},
			{
				name: "Calls to Action.pdf",
				icon: "pdf",
			},
		],
		image: GovernmentImg,
		icon: "verified",
		agent: {
			name: "James",
			country: "🇺🇸",
			avatar: James,
		},
		widgetOne: {
			text: (
				<p>
					"Hi <Blue>{"{name}"}</Blue>, hope you're doing well! How is{" "}
					<Blue>{"{api.interest}"}</Blue> going? Just calling in to see if you
					registered to vote for the upcoming Primary elections!"
				</p>
			),
		},
		widgetTwo: {
			text: (
				<p>
					"It's crucial help elect <Blue>{"{api.nominee}"}</Blue> so they can
					help voters like you! Are you interested in committing?"
				</p>
			),
			bottomConnectors: ["not right now", "yes", "in the future"],
		},
	},
	{
		title: "Insurance",
		text: "Scale your sales operations like never before Whether you're a broker, a firm, or a wholesaler, never miss a lead again! Your own AI ISA at your service.",
		assertiveness: 30,
		humorLevel: 10,
		files: [
			{
				name: "Coverages.xls",
				icon: "csv",
			},
			{
				name: "Customer Calls.mp3",
				icon: "audio",
			},
			{
				name: "Premiums.pdf",
				icon: "pdf",
			},
		],
		image: InsuranceImg,
		icon: "verified",
		agent: {
			name: "James",
			country: "🇺🇸",
			avatar: James,
		},
		widgetOne: {
			text: (
				<p>
					"Thank you for calling XYZ Car Insurance. Are you calling about your
					policy for <Blue>{"{api.carType}"}</Blue>?"
				</p>
			),
		},
		widgetTwo: {
			text: (
				<p>
					"Got it. You've been in an accident. I'm going to ask you a few
					questions before transferring, first, are you ok?"
				</p>
			),
			bottomConnectors: ["yes", "no"],
		},
	},
	{
		title: "Legal",
		text: "Our AI Agents screen leads, welcome new clients, pencil in appointments, handle payments, pass along your messages with outbound calls, and do so much more!",
		assertiveness: 20,
		humorLevel: 30,
		files: [
			{
				name: "Legal Services.pdf",
				icon: "pdf",
			},
			{
				name: "Patents.xls",
				icon: "csv",
			},
			{
				name: "Pricing and Billing.pdf",
				icon: "pdf",
			},
		],
		image: LegalImg,
		icon: "verified",
		agent: {
			name: "James",
			country: "🇺🇸",
			avatar: James,
		},
		widgetOne: {
			text: (
				<p>
					"Hello <Blue>{"{name}"}</Blue>, thank you for calling T&C Legal. Let
					me check your account real quick!"
				</p>
			),
		},
		widgetTwo: {
			text: (
				<p>
					"Thanks for waiting. Looks like you <Blue>{"{api.numDocs}"}</Blue>{" "}
					with us. Where you looking to discuss those or start a new service
					with us?"
				</p>
			),
			bottomConnectors: ["current\\ncontracts", "new\\ncontracts", "transfer"],
		},
	},
	{
		title: "Services/Utilities",
		text: "Revolutionize your scheduling, appointment setting, and everything else with AI that understands your client's needs. Perfect for hospitality & travel, consumer services, financial services, and more.",
		assertiveness: 20,
		humorLevel: 70,
		files: [
			{
				name: "Pricing Sheet.xls",
				icon: "csv",
			},
			{
				name: "Customer Calls.mp3",
				icon: "audio",
			},
			{
				name: "Current Services.pdf",
				icon: "pdf",
			},
		],
		image: ServicesImg,
		icon: "verified",
		agent: {
			name: "Tessa",
			country: "🇺🇸",
			avatar: Tessa,
		},
		widgetOne: {
			text: (
				<p>"Thank you for calling Acme Home Remodeling, how can I help?"</p>
			),
		},
		widgetTwo: {
			text: (
				<p>
					"Sure, we can definitely help out with your dream home renovation
					project. Is this a full home or partial renovation?""
				</p>
			),
			bottomConnectors: [
				"full\\nhome",
				"partial\\nrenovation",
				"transfer\\nto billing",
			],
		},
	},
]

export default function Industry() {
	const [activeIndex, setActiveIndex] = useState(0)
	const { fullWidth, desktop, tablet, mobile } = useContext(ScreenContext)

	const tabs = data.map((item, index) => {
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

	const widgets = data.map((item, index) => {
		return (
			<Widget1
				key={item.title}
				className="widget"
				id={`widget-${index}`}
				title="Start"
				icon="play"
				iconColor={colors.green400}
				bottomConnectors={[""]}
			>
				{item.widgetOne.text}
			</Widget1>
		)
	})

	const widgets2 = data.map((item, index) => {
		const bottomConnectors = item.widgetTwo?.bottomConnectors?.map((item) =>
			item?.replace("\\n", "\n"),
		)

		return (
			<Widget2
				key={item.title}
				className="widget-2"
				id={`widget-2-${index}`}
				title="Speak"
				icon="speak"
				iconColor="#0085E5"
				topConnectors={[""]}
				bottomConnectors={bottomConnectors}
			>
				{item.widgetTwo?.text}
			</Widget2>
		)
	})

	const files = data[activeIndex]?.files?.map((item) => {
		if (!item) return null
		return (
			<File key={item.name}>
				{item.icon && <FileIcon name={item.icon as IconType} />}
				<FileName>{item.name}</FileName>
				<Trash name="trash" />
			</File>
		)
	})

	useAnimation(
		() => {
			if (!fullWidth && !desktop) return
			const tl = gsap.timeline()

			tl.to(
				".widget",
				{
					xPercent: -120,
				},
				0,
			)
			tl.to(
				".widget-2",
				{
					xPercent: 120,
				},
				0,
			)
			tl.fromTo(
				"#industries-line",
				{
					drawSVG: "0%",
				},
				{
					drawSVG: "100%",
				},
				1.5,
			)
			tl.to(
				[`#widget-${activeIndex}`, `#widget-2-${activeIndex}`],
				{
					xPercent: 0,
				},
				1,
			)
		},
		[activeIndex, fullWidth, desktop],
		{
			kill: true,
		},
	)

	return (
		<Wrapper id="industries">
			<Inner>
				<Top>
					<Title>
						The future of customer <span>interaction.</span>
					</Title>
					<DesktopTabletOnly>
						<Buttons>{tabs}</Buttons>
					</DesktopTabletOnly>
				</Top>
				<Bottom>
					<Left>
						<Assertiveness>
							<ProgressGroup
								progress={data[activeIndex]?.assertiveness}
								title="Assertiveness"
								text="Use softer suggestions"
							/>
							<ProgressGroup
								progress={data[activeIndex]?.humorLevel}
								title="Humor Level"
								text="Balanced humor and professionalism"
							/>
						</Assertiveness>

						<Agent>
							<AutoAnimate>
								<Avatar
									key={activeIndex}
									src={data[activeIndex]?.agent?.avatar}
									alt={data[activeIndex]?.agent?.name ?? ""}
								/>
							</AutoAnimate>
							<AutoAnimate>
								<Name key={data[activeIndex]?.agent?.country}>
									{data[activeIndex]?.agent?.country}
								</Name>
							</AutoAnimate>
							<Line />
							<AutoAnimate>
								<Name key={data[activeIndex]?.agent?.name}>
									{data[activeIndex]?.agent?.name}
								</Name>
							</AutoAnimate>
						</Agent>
						<div>
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
								<Image
									key={activeIndex}
									src={data[activeIndex]?.image}
									alt={data[activeIndex]?.title ?? ""}
								/>
							</AutoAnimate>
						</div>
						<TabletOnly>
							<TabletWidgetWrapper>
								<AutoAnimate>
									<Widget1
										key={activeIndex}
										title="Start"
										icon="play"
										iconColor={colors.green400}
									>
										<p>{data[activeIndex]?.widgetOne?.text}</p>
									</Widget1>
								</AutoAnimate>
							</TabletWidgetWrapper>
						</TabletOnly>
						{(fullWidth || desktop || mobile) && (
							<LogosWrapper>
								<FilesInner>
									<PositionWrapper>
										<AutoAnimate
											alignment="center"
											fromParameters={{ yPercent: 110 }}
											toParameters={{ yPercent: -110 }}
										>
											<Logos key={activeIndex}>{files}</Logos>
										</AutoAnimate>
									</PositionWrapper>
								</FilesInner>
							</LogosWrapper>
						)}
					</Left>
					<Right>
						<TextContent>
							<IconTitle>
								{/* <div>
									<AutoAnimate>
										<StyledIcon
											key={activeIndex}
											name={
												data[activeIndex]
													?.icon as IconType
											}
										/>
									</AutoAnimate>
								</div> */}
								<div>
									<AutoAnimate>
										<SubTitle key={data[activeIndex]?.title}>
											{data[activeIndex]?.title}
										</SubTitle>
									</AutoAnimate>
								</div>
							</IconTitle>
							<div>
								<AutoAnimate>
									<Text key={data[activeIndex]?.text}>
										{data[activeIndex]?.text}
									</Text>
								</AutoAnimate>
							</div>
						</TextContent>
						<TabletOnly>
							<LogosWrapper>
								<FilesInner>
									<PositionWrapper>
										<AutoAnimate
											alignment="center"
											fromParameters={{ yPercent: 110 }}
											toParameters={{ yPercent: -110 }}
										>
											<Logos key={activeIndex}>{files}</Logos>
										</AutoAnimate>
									</PositionWrapper>
								</FilesInner>
							</LogosWrapper>
						</TabletOnly>
						<DesktopOnly>
							<DotsWrapper>
								<StyledDots />
								<Connector />
								{widgets}
								{widgets2}
							</DotsWrapper>
						</DesktopOnly>
					</Right>
				</Bottom>
				<MobileOnly>
					<Buttons>{tabs}</Buttons>
				</MobileOnly>
			</Inner>
		</Wrapper>
	)
}

const IconTitle = styled.div`
  display: flex;
  align-items: center;

  ${fresponsive(css`
    gap: 15px;
  `)}

  ${ftablet(css`
    flex-direction: column;
    align-items: flex-start;
  `)}

  ${fmobile(css`
    flex-direction: column;
    align-items: flex-start;
  `)}
`

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  overflow: clip;
  position: relative;
  margin-top: -1px;
  background-color: ${colors.white};
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    height: 1015px;
    padding: 36px 156px 170px;
    gap: 47px;
  `)}

  ${ftablet(css`
    height: 1172px;
    padding: 85px 68px 0;
    gap: 106px;
  `)}

  ${fmobile(css`
    height: auto;
    padding: 85px 29px 100px;
    gap: 30px;
  `)}
`

const Top = styled.div`
  display: flex;

  ${fresponsive(css`
    gap: 63px;
  `)}

  ${ftablet(css`
    flex-direction: column;
    gap: 48px;
  `)}

  ${fmobile(css`
    margin-bottom: 30px;
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

  ${ftablet(css`
    ${textStyles.h3}
    width: 95%;
  `)}

  ${fmobile(css`
    ${textStyles.h6}
    width: 100%;
  `)}
`

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;

  button {
    flex-shrink: 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }

	${fresponsive(css`
		gap: 18px;
		width: 511px;
	`)}

  ${ftablet(css`
    width: 650px;
  `)}

  ${fmobile(css`
    width: 375px;
    height: 60px;
    padding: 0 29px;
    align-items: center;
    overflow-x: scroll;
    flex-wrap: nowrap;
    position: absolute;
    bottom: 40px;
    left: 0;
  `)}
`

const Bottom = styled.div`
  display: flex;
  align-items: flex-start;

  ${fresponsive(css`
    gap: 24px;
  `)}

  ${ftablet(css`
    flex-direction: row-reverse;
    gap: 52px;
  `)}

  ${fmobile(css`
    flex-direction: column;
    gap: 56px;
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

const Image = styled.img`
  background-color: ${colors.gray800};

  ${fresponsive(css`
    width: 528px;
    height: 375px;
    border-radius: 24px;
  `)}

  ${ftablet(css`
    width: 460px;
    height: 494px;
  `)}

  ${fmobile(css`
    width: 314px;
    height: 278px;
  `)}
`

const Card = styled.div`
  background: ${gradients.surface1};

  ${fresponsive(css`
    border: 2px solid ${colors.gray200};
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 18px 42px 0 rgba(89 89 89 / 4%);
  `)}
`

const Assertiveness = styled(Card)`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    width: 240px;
    height: 190px;
    top: 139px;
    left: -72px;
    gap: 24px;
  `)}

  ${ftablet(css`
    top: 262px;
    left: unset;
    right: -24px;
  `)}

  ${fmobile(css`
    right: -23px;
    bottom: -80px;
    left: unset;
    top: unset;
  `)}
`

const Agent = styled(Card)`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;

  ${fresponsive(css`
    width: 240px;
    height: 58px;
    top: 342px;
    left: -72px;
    padding: 12px 24px;
    gap: 10px;
  `)}

  ${ftablet(css`
    top: 464px;
    right: -24px;
    left: unset;
  `)}

  ${fmobile(css`
    position: absolute;
    top: -29px;
    left: -13px;
    z-index: 2;
  `)}
`

const LogosWrapper = styled(Card)`
	${fresponsive(css`
		border-radius: 24px;
    width: 243px;
    height: 134px;
    padding: 20px;
	`)}

  ${fmobile(css`
    display: none;
  `)}
`

const FilesInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  ${fresponsive(css`
    border-radius: 14px;
    border: 1.5px dashed ${colors.gray600};
  `)}
`

const PositionWrapper = styled.div`
  position: absolute;

  ${fresponsive(css`
    top: 20px;
    left: -61px;
  `)}
`

const Logos = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    gap: 3px;
  `)}
`

const File = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.white};

  ${fresponsive(css`
    padding: 7.5px;
    border-radius: 8px;
    border: 1.5px solid #e4e4e4;
    width: 210px;
  `)}
`

const FileName = styled.span`
  ${textStyles.bodyS}
  color: ${colors.black};
`

const FileIcon = styled(Icon)`
  ${fresponsive(css`
    width: 18px;
    height: 18px;
    margin-right: 6px;
  `)}
`

const Trash = styled(Icon)`
  margin-left: auto;

  path {
    fill: #D9D9D9;
  }

  ${fresponsive(css`
    width: 12px;
    height: 12px;
  `)}
`

const Right = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    gap: 48px;
  `)}

  ${ftablet(css`
    padding-top: 47px;
    gap: 32px;
    align-items: flex-end;
  `)}
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    gap: 16px;
    padding-left: 24px;
  `)}

  ${ftablet(css`
    padding-left: 0;
  `)}

  ${fmobile(css`
    padding-left: 12px;
  `)}
`

const SubTitle = styled.h6`
  ${textStyles.sh1}
  color: ${colors.black};
  width: fit-content;
  white-space: nowrap;

  ${fresponsive(css`
    width: 200px;
  `)}
`

const Text = styled.p`
  ${textStyles.bodyS}
  color: ${colors.gray800};
  overflow: clip;

  ${fresponsive(css`
    width: 462px;
    height: 95px;
  `)}

  ${ftablet(css`
    ${textStyles.bodyR}
    width: 378px;
    height: 184px;
  `)}

  ${fmobile(css`
    ${textStyles.bodyS}
    width: 315px;
    height: 150px;
  `)}
`

const DotsWrapper = styled.div`
  background-color: ${colors.gray100};
  position: relative;
  overflow: clip;

  ${fresponsive(css`
    border-radius: 24px;
    width: 560px;
    height: 375px;
  `)}
`

const StyledDots = styled(Dots)`
  ${fresponsive(css`
    inset: 0;
    background-position: 10px 18px;
  `)}
`

const TabletWidgetWrapper = styled.div`
  position: absolute;

 ${ftablet(css`
    top: -30px;
    left: -96px;
    z-index: 2;
  `)}
`

const Widget1 = styled(Widget)`
  position: absolute;
  transform: scale(0.73);
  transform-origin: top left;

  ${fresponsive(css`
    height: 196px;
    top: 23px;
    left: 23px;
  `)}

  ${ftablet(css`
    position: relative;
    top: unset;
    left: unset;
  `)}
`

const Widget2 = styled(Widget1)`
  top: unset;
  left: unset;
  transform-origin: bottom right;

  ${fresponsive(css`
    bottom: 22px;
    right: 23px;
  `)}
`

const Avatar = styled.img`
  border-radius: 99vw;

  ${fresponsive(css`
    width: 34px;
    height: 34px;
  `)}
`

const Name = styled.span`
  ${textStyles.bodyR}
  color: ${colors.black};
`

const Line = styled.div`
  width: 1px;
  background-color: ${colors.gray300};

  ${fresponsive(css`
    height: 12px;
  `)}
`

const StyledIcon = styled(Icon)`

  path,
  circle {
    fill: ${colors.gray500};
  }

  ${fresponsive(css`
    width: 30px;
    height: 30px;
  `)}
`

const Connector = styled(LineSVG)`
  position: absolute;

  ${fresponsive(css`
    width: 233px;
    height: 45px;
    left: 164px;
    top: 166px;
  `)}
`
