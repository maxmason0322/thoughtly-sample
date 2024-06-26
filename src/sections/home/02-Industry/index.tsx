import Selector from "components/Buttons/Selector"
import Icon, { type IconType } from "components/Icon"
import Widget from "components/Widget"
import GovernmentImg from "data/home-industry/industries/government.png"
import HealthcareImg from "data/home-industry/industries/healthcare.jpg"
import InsuranceImg from "data/home-industry/industries/insurance.png"
import LegalImg from "data/home-industry/industries/legal.png"
import RealEstateImg from "data/home-industry/industries/real-estate.png"
import RetailImg from "data/home-industry/industries/retail.png"
import ServicesImg from "data/home-industry/industries/services.png"
import TravelImg from "data/home-industry/industries/travel.png"
import gsap from "gsap"
import DrawSVGPlugin from "gsap/DrawSVGPlugin"
import Gabriel from "images/global/avatars/gabriel.png"
import James from "images/global/avatars/james.png"
import Lisa from "images/global/avatars/lisa.png"
import Maya from "images/global/avatars/maya.png"
import Micheal from "images/global/avatars/micheal.png"
import Phillip from "images/global/avatars/phillip.png"
import Sanjay from "images/global/avatars/sanjay.png"
import Stacey from "images/global/avatars/stacey.png"
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
	font-weight: 500;
`

const data = [
	{
		title: "Healthcare",
		text: "Our AI voice agents automate complex processes from new patient intake and appointment scheduling to outbound claim status calls. With Thoughtly, you'll reduce your labor costs, free up nurses, and deliver superior member service with AI that understands the nuances of the healthcare industry.",
		assertiveness: {
			val: 20,
			text: "Use softer suggestions",
		},
		humorLevel: {
			val: 25,
			text: "Serious, minimal humor",
		},
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
			name: "James",
			country: "🇺🇸",
			avatar: James,
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
		text: "Selling your customers that dream condo or beach home has never been easier. Our AI agents instantly respond to every inquiry, re-engage with previous leads, and schedule showings at a scale previously unimaginable. With Thoughtly, you'll connect your buyers to the most powerful and human-like conversational technology on the market.",
		assertiveness: {
			val: 70,
			text: "Assertive yet kind",
		},
		humorLevel: {
			val: 60,
			text: "Humor in every response",
		},
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
			name: "Stacey",
			country: "🇬🇧",
			avatar: Stacey,
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
		text: "Delight constituents with our AI voice agents. Whether you are a PAC, campaign, or advocacy group looking to personalize interactions with voters or a Public Transit Authority looking to automate ride status and ride requests to hit speed to answer SLAs, Thoughtly is here to help!",
		assertiveness: {
			val: 20,
			text: "Assertive yet kind",
		},
		humorLevel: {
			val: 30,
			text: "Balanced humor and professionalism ",
		},
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
			name: "Gabriel",
			country: "🇲🇽",
			avatar: Gabriel,
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
		text: "Our AI agents streamline member interactions by assisting your members with filing new claims, checking their claim status, answer coverage and benefit questions, and modifying and updating their policies. With Thoughtly you'll deliver superior member service and make data-driven decisions faster than ever before.",
		assertiveness: {
			val: 30,
			text: "Use softer suggestions",
		},
		humorLevel: {
			val: 10,
			text: "Balanced humor and professionalism ",
		},
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
			name: "Lisa",
			country: "🇺🇸",
			avatar: Lisa,
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
		text: "Elevate your law practice with our AI-driven communication tool. Tailored for legal professionals, our AI Agents screen leads, welcome new clients, pencil in appointments, handle payments, pass along your messages with outbound calls, and do so much more! Boost productivity and client satisfaction.",
		assertiveness: {
			val: 20,
			text: "Assertive yet kind",
		},
		humorLevel: {
			val: 30,
			text: "Serious, minimal humor",
		},
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
			name: "Sanjay",
			country: "🇺🇸",
			avatar: Sanjay,
		},
		widgetOne: {
			text: (
				<p>
					"Hello <Blue>{"{name}"}</Blue>, thank you for calling T&C Legal.
					Please wait while I pull up your account details"
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
		text: "Our AI voice agents intake and qualify new customers, schedule appointments and provide service status updates all on your behalf. With Thoughtly, you'll convert more leads, reduce labor costs and drive more revenue.",
		assertiveness: {
			val: 20,
			text: "Very assertive, direct outcome",
		},
		humorLevel: {
			val: 70,
			text: "Humor in every response",
		},
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
			name: "Micheal",
			country: "🇨🇦",
			avatar: Micheal,
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
					project. Is this a full home or partial renovation?"
				</p>
			),
			bottomConnectors: [
				"full\\nhome",
				"partial\\nrenovation",
				"transfer\\nto billing",
			],
		},
	},
	{
		title: "Retail",
		text: "Our AI agents assist retail accounts by efficiently handling WISMO inquiries, cancellations, modifications, and FAQs, ensuring seamless customer support and satisfaction. They provide timely, accurate responses and manage a variety of customer needs, streamlining operations and enhancing the overall shopping experience.",
		assertiveness: {
			val: 70,
			text: "Very assertive, direct outcome",
		},
		humorLevel: {
			val: 100,
			text: "Humor in every response.",
		},
		files: [
			{
				name: "Inventory.xls",
				icon: "csv",
			},
			{
				name: "Customer Calls.mp3",
				icon: "audio",
			},
			{
				name: "Current Brands.pdf",
				icon: "pdf",
			},
		],
		image: RetailImg,
		icon: "verified",
		agent: {
			name: "Maya",
			country: "🇺🇸",
			avatar: Maya,
		},
		widgetOne: {
			text: (
				<p>
					Hi <Blue>{"{name}"}</Blue>, thank you for calling Island Tee's. Let me
					pull up your order.
				</p>
			),
		},
		widgetTwo: {
			text: (
				<p>
					 have the order you placed on <Blue>{"{api.date}"}</Blue> pulled up.
					What can I help you with?
				</p>
			),
			bottomConnectors: ["order tracking", "returns", "transfer"],
		},
	},
	{
		title: "Travel/Hospitality",
		text: "Our AI agents assist travel and hospitality accounts by efficiently managing reservation confirmations, flight status updates, cancellations, modifications, and FAQs, ensuring seamless customer support and satisfaction. They provide timely, accurate responses to a variety of customer needs, streamlining operations and enhancing the overall travel experience.",
		assertiveness: {
			val: 15,
			text: "Use softer suggestions",
		},
		humorLevel: {
			val: 45,
			text: "Balanced humor and professionalism",
		},
		files: [
			{
				name: "Airline Prices.xls",
				icon: "csv",
			},
			{
				name: "New Attractions.pdf",
				icon: "pdf",
			},
			{
				name: "Available Hotels.pdf",
				icon: "pdf",
			},
		],
		image: TravelImg,
		icon: "verified",
		agent: {
			name: "Phillip",
			country: "🇿🇦",
			avatar: Phillip,
		},
		widgetOne: {
			text: (
				<p>
					Hello, thank you for calling Glacier Hotels. How may I help you today?
				</p>
			),
		},
		widgetTwo: {
			text: (
				<p>
					Thanks, <Blue>{"{name}"}</Blue>. I've pulled up your reservation. It
					looks like you are staying with us from <Blue>{"{api.date}"}</Blue> -{" "}
					<Blue>{"{api.date}"}</Blue>. What can I help you with?
				</p>
			),
			bottomConnectors: [
				"booking\\nconfirmation",
				"property\\nfaqs",
				"transfer",
			],
		},
	},
]

export default function Industry() {
	const [activeIndex, setActiveIndex] = useState(0)
	const { fullWidth, desktop, mobile } = useContext(ScreenContext)

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
								progress={data[activeIndex]?.assertiveness.val}
								title="Assertiveness"
								index={activeIndex}
								text={data[activeIndex]?.assertiveness.text}
							/>
							<ProgressGroup
								progress={data[activeIndex]?.humorLevel.val}
								title="Humor Level"
								index={activeIndex}
								text={data[activeIndex]?.humorLevel.text}
							/>
						</Assertiveness>

						<Agent>
							<AvatarWrapper>
								<AutoAnimate
									fromParameters={{ yPercent: 110 }}
									toParameters={{ yPercent: -110 }}
								>
									<Avatar
										key={activeIndex}
										src={data[activeIndex]?.agent?.avatar}
										alt={data[activeIndex]?.agent?.name ?? ""}
									/>
								</AutoAnimate>
							</AvatarWrapper>
							<NameWrapper>
								<AutoAnimate>
									<Name key={data[activeIndex]?.agent?.country}>
										{data[activeIndex]?.agent?.country}
									</Name>
								</AutoAnimate>
							</NameWrapper>
							<Line />
							<NameWrapper>
								<AutoAnimate>
									<Name key={data[activeIndex]?.agent?.name}>
										{data[activeIndex]?.agent?.name}
									</Name>
								</AutoAnimate>
							</NameWrapper>
						</Agent>

						<ImageWrapper>
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
						</ImageWrapper>

						<TabletOnly>
							<TabletWidgetWrapper>
								<AutoAnimate>
									<Widget1
										key={activeIndex}
										title="Start"
										icon="play"
										iconColor={colors.green400}
									>
										{data[activeIndex]?.widgetOne?.text}
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
						<DesktopWidgetsWrapper>
							<StyledDots />
							<Connector />
							{widgets}
							{widgets2}
						</DesktopWidgetsWrapper>
					</Right>
				</Bottom>

				<MobileOnly>
					<Buttons>{tabs}</Buttons>
				</MobileOnly>
			</Inner>
		</Wrapper>
	)
}

const NameWrapper = styled.div`
	${fresponsive(css`
		height: 18px;
	`)}
`

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
	background-color: ${colors.beige200};
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
		padding: 85px 27px 100px;
		gap: 30px;
	`)}
`

const Top = styled.div`
	display: flex;

	${fresponsive(css`
		gap: 63px;
		align-items: flex-end;
	`)}

	${ftablet(css`
		flex-direction: column;
		align-items: unset;
		gap: 48px;
	`)}

  ${fmobile(css`
		align-items: unset;
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
		width: 550px;
	`)}

	${ftablet(css`
		width: 650px;
	`)}

  ${fmobile(css`
		gap: 8px;
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
		border-radius: 18px;
		background: ${colors.beige300};
		border: 1.5px solid #D8D8D8;
		flex-direction: column;
		gap: 100px;
		padding: 28px;
		padding-top: 42px;
	`)}
`

const Left = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	position: relative;
	width: 100%;

	${fresponsive(css`
		gap: 24px;
	`)}

	${fmobile(css`
		align-items: center;
	`)}
`

const Image = styled.img`
	background-color: ${colors.gray800};
	object-fit: cover;

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
		width: 224px;
		height: 224px;
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
		right: -36px;
		bottom: -110px;
		left: unset;
		top: unset;
		scale: 0.71;
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
		left: -40px;
		z-index: 2;
		scale: 0.71;
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
	background-color: ${colors.gray100};

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
		height: 105px;
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
	${textStyles.sh4}
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
		fill: #d9d9d9;
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
		width: 262px;
	`)}
`

const SubTitle = styled.h1`
	${textStyles.sh1}
	color: ${colors.black};
	width: fit-content;
	white-space: nowrap;

	${fresponsive(css`
		width: 200px;
	`)}

	${fmobile(css`
		${textStyles.sh2};
	`)}
`

const Text = styled.div`
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
		width: 250px;
		height: 169px;
	`)}
`

const DesktopWidgetsWrapper = styled(DesktopOnly)`
	background-color: ${colors.beige300};
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
		background-position: 10px 18px;
	`)}
`

const TabletWidgetWrapper = styled.div`
	position: absolute;

	${ftablet(css`
		top: -30px;
		left: -40px;
		z-index: 2;
	`)}
`

const Widget1 = styled(Widget)`
	position: absolute;
	transform: scale(0.75);
	transform-origin: top left;

	${fresponsive(css`
		height: 196px;
		top: 19px;
		left: 22px;
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
		bottom: 19px;
		right: 22px;
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
	${textStyles.sh3}
	color: ${colors.black};
`

const Line = styled.div`
	width: 1px;
	background-color: ${colors.gray300};

	${fresponsive(css`
		height: 12px;
	`)}
`

const Connector = styled(LineSVG)`
	position: absolute;

	${fresponsive(css`
		width: 227px;
		height: 50px;
		left: 166px;
		top: 163px;
	`)}
`

const ImageWrapper = styled.div`
	${fresponsive(css`
		height: 375px;
	`)}

	${ftablet(css`
		height: 494px;
	`)}

	${fmobile(css`
		height: 198px;
	`)}
`

const AvatarWrapper = styled.div`
	height: 36px;
`
