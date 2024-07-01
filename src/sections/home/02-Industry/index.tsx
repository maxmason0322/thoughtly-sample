import Selector from "components/Buttons/Selector"
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
import { ScreenContext } from "library/ScreenContext"
import { DesktopTabletOnly, MobileOnly } from "library/breakpointUtils"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { getResponsivePixels } from "library/viewportUtils"
import { useCallback, useContext, useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"
import IndustryCard from "./IndustryCard"
import Pagination from "./Pagination"

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
	const scrollUpdate = useRef(false)
	const userHasScrolled = useRef(false)
	const trackRef = useRef<HTMLDivElement>(null)
	const [activeIndex, setActiveIndex] = useState(0)
	const { tablet, fullWidth, desktop } = useContext(ScreenContext)
	const cardWidth = getResponsivePixels(333)

	const cardTitles = data.map((item) => item.title)

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

	/**
	 * Move the card track in response to the pagination buttons.
	 */
	useEffect(() => {
		if (tablet || fullWidth || desktop) return
		if (scrollUpdate.current) return

		const trackEl = trackRef.current
		if (!trackEl) return

		const offset = activeIndex * cardWidth
		trackEl.scrollLeft = offset
	}, [tablet, fullWidth, desktop, activeIndex, cardWidth])

	/**
	 * Handle a scroll event on the card track.
	 */
	const handleScroll = useCallback(() => {
		if (!trackRef.current) return

		const scrollLeft = trackRef.current.scrollLeft
		const newIndex = Math.round(scrollLeft / cardWidth)

		if (newIndex !== activeIndex) {
			setActiveIndex(newIndex)
			scrollUpdate.current = true
		}
	}, [activeIndex, cardWidth])

	/**
	 * Mount and unmount scroll event listener on the card track.
	 */
	useEffect(() => {
		const trackEl = trackRef.current
		if (!trackEl) return

		trackEl.addEventListener("scroll", handleScroll)

		return () => {
			trackEl.removeEventListener("scroll", handleScroll)
		}
	}, [handleScroll])

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

	useAnimation(() => {
		if (tablet || fullWidth || desktop) return
		if (!trackRef.current) return

		/**
		 * scale the cards when scrolling from left to right
		 */
		const shared = { ease: "power3.inOut", scale: 0.9 }
		for (const child of trackRef.current.children) {
			gsap.from(child, {
				...shared,
				scrollTrigger: {
					trigger: child,
					start: "left right",
					end: "center center",
					scrub: true,
					scroller: trackRef.current,
					horizontal: true,
				},
			})
			gsap.fromTo(
				child,
				{ scale: 1 },
				{
					...shared,
					scrollTrigger: {
						trigger: child,
						start: "center center",
						end: "right left",
						scrub: true,
						scroller: trackRef.current,
						horizontal: true,
					},
				},
			)
		}

		/**
		 * bounce effect prompting the user to scroll
		 */
		const tl = gsap
			.timeline({
				scrollTrigger: {
					trigger: trackRef.current,
					start: "top center",
				},
				onComplete: () => {
					if (userHasScrolled.current) return
					if (!userHasScrolled.current) {
						gsap.delayedCall(3, () => {
							tl.restart(true)
						})
					}
				},
			})
			.to(trackRef.current, {
				xPercent: -2,
				scale: 0.98,
				ease: "power3.out",
				duration: 0.3,
			})
			.to(trackRef.current, {
				xPercent: 0,
				scale: 1,
				ease: "bounce.out",
				duration: 0.6,
			})
	}, [tablet, fullWidth, desktop])

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
				<DesktopTabletOnly>
					<IndustryCard data={data} activeIndex={activeIndex} />
				</DesktopTabletOnly>

				<MobileOnly>
					<Track ref={trackRef}>
						{data.map((item, index) => (
							<IndustryCard key={item.title} data={data} activeIndex={index} />
						))}
					</Track>
					<Pagination
						keys={cardTitles}
						activeIndex={activeIndex}
						setActiveIndex={setActiveIndex}
						scrollUpdate={scrollUpdate}
					/>
				</MobileOnly>
			</Inner>
		</Wrapper>
	)
}

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
		padding: 85px 27px 0;
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

const Card = styled(IndustryCard)``

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
		width: 336px;
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

const Track = styled.div`
	display: flex;
	overflow-x: scroll;
	height: fit-content;
	scroll-behavior: smooth;
	flex-wrap: nowrap;
	-webkit-overflow-scrolling: touch;
	
	& > * {
		flex-shrink: 0;
	}

	&::-webkit-scrollbar {
		display: none;
	}

	${fresponsive(css`
		gap: 12px;
		padding-right: 1425px;
		padding-left: 27px;
		margin-left: -27px;
	`)}
`
