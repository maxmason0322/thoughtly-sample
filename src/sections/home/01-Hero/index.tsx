import Button from "components/Buttons/Primary"
import { CalendlyModalContext } from "components/Providers/CalendlyModalProvider"
import Unmask from "components/Unmask"
import gsap from "gsap"
import DrawSVGPlugin from "gsap/DrawSVGPlugin"
import ScrollSmoother from "gsap/ScrollSmoother"
import Background from "images/home/hero/hero-background.png"
import loader from "library/Loader"
import { ScreenContext } from "library/ScreenContext"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import getMedia from "library/getMedia"
import useAnimation from "library/useAnimation"
import { getResponsivePixels } from "library/viewportUtils"
import { useContext, useRef } from "react"
import styled, { css } from "styled-components"
import { Dots } from "styles/background"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"
import links from "utils/links"
import Lines from "./Lines"
import Widgets from "./Widgets"

gsap.registerPlugin(DrawSVGPlugin)

export default function Hero() {
	const { mobile, tablet } = useContext(ScreenContext)
	const wrapperRef = useRef<HTMLElement | null>(null)
	const { setModalOpen } = useContext(CalendlyModalContext)

	useAnimation(
		() => {
			if (mobile || tablet) return

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: wrapperRef.current,
					start: "top top",
					end: "bottom 50%",
					scrub: true,
				},
				defaults: {
					ease: "none",
				},
			})

			tl.set(
				["#start-speak-line", "#speak-action-line"],
				{
					autoAlpha: 1,
				},
				0,
			)
			tl.to(
				".icons-widget",
				{
					x: () => getResponsivePixels(getMedia(80, 80, 20, 40)),
					yPercent: 100,
					duration: 1.5,
				},
				0,
			)
			tl.fromTo(
				".avatar-widget",
				{
					yPercent: 0,
					autoAlpha: 1,
				},
				{
					yPercent: () => getMedia(300, 300, 0, 0),
					autoAlpha: 0,
					duration: 1.5,
				},
				0,
			)
			tl.fromTo(
				".call-widget",
				{
					y: 0,
					autoAlpha: 1,
				},
				{
					y: () => getResponsivePixels(getMedia(-100, -100, 0, 0)),
					autoAlpha: 0,
				},
				0,
			)
			tl.from(
				"#start-speak-line",
				{
					drawSVG: 0,
				},
				0,
			)
			tl.fromTo(
				".speak-1-widget",
				{
					y: () => getResponsivePixels(50),
					autoAlpha: 0,
				},
				{
					y: 0,
					autoAlpha: 1,
				},
			)
			tl.from("#speak-action-line", {
				drawSVG: 0,
			})
			tl.from(
				"#speak-test-line",
				{
					drawSVG: 0,
					duration: 2,
				},
				"<",
			)
			tl.from(
				".action-widget",
				{
					y: () => getResponsivePixels(50),
					autoAlpha: 0,
				},
				"<+=0.5",
			)
			tl.from(
				".test-widget",
				{
					y: () => getResponsivePixels(50),
					autoAlpha: 0,
				},
				">",
			)
			tl.from(
				"#action-speak-line",
				{
					drawSVG: 0,
					duration: 1.5,
				},
				"<",
			)
			tl.from(
				"#test-speak-line",
				{
					drawSVG: 0,
				},
				"<+=1",
			)
			tl.from(".speak-2-widget", {
				y: () => getResponsivePixels(50),
				autoAlpha: 0,
			})
			tl.from(
				"#test-line-1",
				{
					drawSVG: 0,
				},
				"<",
			)
			tl.from(
				["#speak-line-1", "#speak-line-2", "#speak-line-3", "#speak-line-4"],
				{
					drawSVG: 0,
				},
				"<+=0.5",
			)
		},
		[mobile, tablet],
		{
			scope: wrapperRef,
			recreateOnResize: true,
		},
	)

	const initTimeline = () => {
		const tl = gsap.timeline({
			delay: 0.25,
			onStart: () => {
				ScrollSmoother.get()?.paused(true)
			},
			onComplete: () => {
				ScrollSmoother.get()?.paused(false)
			},
		})

		tl.set([".call-widget", ".avatar-widget", ".icons-widget"], {
			display: "flex",
		})

		tl.fromTo(
			[".icons-widget", ".call-widget", ".speak-1-widget"],
			{
				autoAlpha: 0,
				y: () => getMedia(200, 200, 0, 0),
			},
			{
				autoAlpha: 1,
				y: 0,
				ease: "power4.out",
				duration: 2,
			},
			0,
		)

		tl.fromTo(
			[".avatar-widget", ".start-widget", ".home-hero-bg"],
			{
				autoAlpha: 0,
				y: () => getMedia(300, 300, 0, 0),
			},
			{
				autoAlpha: 1,
				y: 0,
				ease: "power4.out",
				duration: 2,
			},
			0,
		)
	}

	loader.useEventListener("anyEnd", initTimeline)

	return (
		<Wrapper ref={wrapperRef}>
			<Inner>
				<BackgroundImage className="home-hero-bg" src={Background} />
				<BackgroundTablet>
					<StyledDots />
				</BackgroundTablet>
				<TextContent>
					{/* <Unmask parameters={{ delay: 0.25, ease: "power4.out", duration: 2 }}>
						<Kicker icon="chev">
							🚀&nbsp;&nbsp;&nbsp;Seed round led by Afore & others
						</Kicker>
					</Unmask> */}
					<Unmask parameters={{ delay: 0.25, ease: "power4.out", duration: 2 }}>
						<Title>Your phone calls, answered beautifully.</Title>
					</Unmask>
					<Unmask parameters={{ delay: 0.25, ease: "power4.out", duration: 2 }}>
						<Text>
							Businesses trust Thoughtly’s human-like AI agents to answer
							millions of phone calls, instantly. Spend less time on the phone
							and more time growing your business.
						</Text>
					</Unmask>
					<Buttons>
						<Unmask
							parameters={{ delay: 0.25, ease: "power4.out", duration: 2 }}
						>
							<Button to={links.login} outline>
								Build your own Thoughtly
							</Button>
						</Unmask>
						<Unmask
							parameters={{ delay: 0.45, ease: "power4.out", duration: 2 }}
						>
							<Button
								type="button"
								onClick={() => setModalOpen(true)}
								variant="secondary"
								icon="calendar"
							>
								Book a Demo
							</Button>
						</Unmask>
					</Buttons>
				</TextContent>
				<Callout1>
					<Unmask>
						<span>Inbound and outbound phone calls</span>
					</Unmask>
					<Unmask>
						<h1>From "Hello" to handled in a few clicks.</h1>
					</Unmask>
					<Unmask>
						<p>
							Anything you can teach your human agents to say on the phone, your
							Thoughtly agents can do the same. Speak with precision and
							empathy, just like your top performers.
						</p>
					</Unmask>
				</Callout1>
				<Callout2>
					<Unmask>
						<span>A data-driven approach</span>
					</Unmask>
					<Unmask>
						<h1>Analytics that&nbsp;tell your customer's&nbsp;story</h1>
					</Unmask>
					<Unmask>
						<p>
							Empower your decision-making with comprehensive analytics,
							detailed reports, and A/B testing. Thoughtly provides real-time
							data visualization and performance metrics, enabling you to
							optimize communication strategies, understand customer behavior,
							and drive conversions more effectively.
						</p>
					</Unmask>
				</Callout2>
				<Widgets />
				<Lines />
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  background-color: ${colors.white};
  position: relative;
  z-index: 3;
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;
  position: relative;

  ${fresponsive(css`
    height: 1926px;
    padding: 144px 156px 60px;
  `)}

  ${ftablet(css`
    height: 2211px;
    padding: 190px 68px 24px;
  `)}

	${fmobile(css`
    height: 2253px;
    padding: 110px 0;
  `)}
`

const BackgroundImage = styled.img`
  position: absolute;
  z-index: 0;
  opacity: 0;

  ${fresponsive(css`
    width: 1318px;
    height: 1460px;
    top: 408px;
    right: 62px;
  `)}

  ${ftablet(css`
    display: none;
  `)}

	${fmobile(css`
    display: none;
  `)}
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;

  ${fresponsive(css`
    gap: 24px;
  `)}

  ${fmobile(css`
    align-items: center;
  `)}
`

const Title = styled.h1`
  ${textStyles.h3}
  color: ${colors.black};

  ${fresponsive(css`
    width: 620px;
  `)}

  ${ftablet(css`
    ${textStyles.h2}
    width: 800px;
  `)}

	${fmobile(css`
    ${textStyles.h6}
    width: 300px;
    text-align: center;
  `)}
`

const Text = styled.p`
  ${textStyles.bodyL}
  color: ${colors.gray700};

  ${fresponsive(css`
    width: 380px;
  `)}

  ${ftablet(css`
    ${textStyles.bodyXL}
    width: 456px;
  `)}

	${fmobile(css`
    ${textStyles.bodyR}
    width: 318px;
    text-align: center;
  `)}
`

const Buttons = styled.div`
  display: flex;
  align-items: center;

  ${fresponsive(css`
    gap: 18px;
    padding: 3px;
    margin: -3px;
  `)}

  ${fmobile(css`
    flex-direction: column;
    gap: 12px;
  `)}
`

const Callout = styled.div`
  display: flex;
  flex-direction: column;

  span {
    ${textStyles.sh4}
    ${transparentText}
    background-image: ${gradients.greenBlue};
  }

  h1 {
    ${textStyles.h6}
    color: ${colors.black};
  }

  p {
    ${textStyles.bodyS}
    color: ${colors.gray800}
  }

  ${fresponsive(css`
    gap: 14px;
  `)}

  ${fmobile(css`
    gap: 8px;

    h1 {
      ${textStyles.sh1}
    }
  `)}
`

const Callout1 = styled(Callout)`
  position: absolute;

  ${fresponsive(css`
    left: 156px;
    top: 826px;

    h1 {
      width: 450px;
    }

    p {
      width: 360px;
    }
  `)}

  ${ftablet(css`
    left: 87px;
    top: 1097px;
    width: 290px;

    h1,
    p {
      width: 100%;
    }
  `)}

	${fmobile(css`
    left: 33px;
    top: 977px;
    width: 247px;

    h1 {
      width: 100%;
    }

    p {
      width: 225px;
    }
  `)}
`

const Callout2 = styled(Callout)`
  position: absolute;

  ${fresponsive(css`
    right: 229px;
    bottom: 247px;

    h1 {
      width: 420px;
    }

    p {
      width: 411px;
    }
  `)}

  ${ftablet(css`
    right: 70px;
    bottom: 130px;
    width: 330px;

    h1,
    p {
      width: 100%;
    }
  `)}

	${fmobile(css`
    top: 1471px;
    left: 33px;
    width: 247px;

    h1 {
      width: 100%;
    }

    p {
      width: 284px;
    }
  `)}
`

const BackgroundTablet = styled.div`
  position: absolute;
  display: none;
  z-index: 0;
  background-color: ${colors.gray100};
  overflow: clip;

  ${ftablet(css`
    display: flex;
    width: 982px;
    height: 1271px;
    bottom: 24px;
    left: 21px;
    border-radius: 48px;
  `)}

  ${fmobile(css`
    height: 1389px;
    width: 358px;
    display: flex;
    left: 9px;
    bottom: 82px;
    border-radius: 36px;
  `)}
`

const StyledDots = styled(Dots)`
  ${ftablet(css`
    inset: 0 0 16px;
  `)}
`
