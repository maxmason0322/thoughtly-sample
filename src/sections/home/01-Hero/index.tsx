import Button from "components/Buttons/Primary"
import Kicker from "components/Kicker"
import { graphql, useStaticQuery } from "gatsby"
import { ReactComponent as ActionSpeakLineSVG } from "images/home/hero/action-speak-line.svg"
import Background from "images/home/hero/hero-background.png"
import { ReactComponent as SpeakTestLineSVG } from "images/home/hero/speak-abtest-line.svg"
import { ReactComponent as SpeakActionLineSVG } from "images/home/hero/speak-action-line.svg"
import { ReactComponent as SpeakLine1SVG } from "images/home/hero/speak-line-1.svg"
import { ReactComponent as SpeakLine2SVG } from "images/home/hero/speak-line-2.svg"
import { ReactComponent as SpeakLine3SVG } from "images/home/hero/speak-line-3.svg"
import { ReactComponent as SpeakLine4SVG } from "images/home/hero/speak-line-4.svg"
import { ReactComponent as StartSpeakLineSVG } from "images/home/hero/start-speak-line.svg"
import { ReactComponent as TestLine1SVG } from "images/home/hero/test-line-1.svg"
import { ReactComponent as TestSpeakLineSVG } from "images/home/hero/test-speak-line.svg"
import UniversalImage from "library/UniversalImage"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"
import links from "utils/links"
import Widget from "./Widget"

export default function Hero() {
	const images = useStaticQuery(graphql`
    query HomeHero {
      abTest: file(relativePath: { eq: "home/hero/anal-graph.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      webhook: file(relativePath: { eq: "home/hero/webhook.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

	return (
		<Wrapper>
			<Inner>
				<BackgroundImage src={Background} />
				<TextContent>
					<Kicker icon="chev">🚀 Seed round led by Afore & others</Kicker>
					<Title>Your phone calls, answered beautifully.</Title>
					<Text>
						Businesses trust Thoughtly’s human-like AI agents to answer millions
						of phone calls, instantly. Spend less time on the phone and more
						time growing your business.
					</Text>
					<Buttons>
						<Button to={links.todo} outline>
							Build your own Thoughtly
						</Button>
						<Button to={links.todo} variant="secondary" icon="phone">
							Book a Demo
						</Button>
					</Buttons>
				</TextContent>
				<Callout1>
					<span>Inbound and outbound phone calls</span>
					<h6>From "Hello" to handled in a few clicks.</h6>
					<p>
						Anything you can teach your human agents to say on the phone, your
						Thoughtly agents can do the same. Speak with precision and empathy,
						just like your top performers.
					</p>
				</Callout1>
				<Callout2>
					<span>A data-driven approach</span>
					<h6>Analytics that tell your customer's story</h6>
					<p>
						Empower your decision-making with comprehensive analytics, detailed
						reports, and A/B testing. Thoughtly provides real-time data
						visualization and performance metrics, enabling you to optimize
						communication strategies, understand customer behavior, and drive
						conversions more effectively.
					</p>
				</Callout2>
				<StartWidget
					title="Start"
					iconColor={colors.green400}
					icon="play"
					bottomConnectors={[""]}
				>
					"Thank you for calling Thoughtly, this is Tessa. Who am I speaking
					with?"
				</StartWidget>
				<SpeakWidget
					title="Speak"
					iconColor="#0085E5"
					icon="speak"
					bottomConnectors={["New Customer", "Existing Customer"]}
					topConnectors={[""]}
				>
					<p>
						Hey <Blue>{"{name}"}</Blue>, thanks for reaching out. Can you tell
						me your email so I can lookup your account?
					</p>
				</SpeakWidget>
				<Speak2Widget
					title="Speak"
					iconColor="#0085E5"
					icon="speak"
					bottomConnectors={[
						"Make\nPayment",
						"Place\nOrder",
						"Book\nAppointment",
						"Something\nElse",
					]}
					topConnectors={[""]}
				>
					<p>
						Got it, thanks for being a customer for{" "}
						<Blue>{"{api.num_years}"}</Blue> incredible years,{" "}
						<Blue>{"{name}"}</Blue>! So, what can I do for you?
					</p>
				</Speak2Widget>
				<ActionWidget
					title="Action"
					icon="integration"
					iconColor="#F48A46"
					topConnectors={[""]}
					bottomConnectors={[""]}
				>
					<ActionImage image={images.webhook} alt="webhook ui" />
				</ActionWidget>
				<ABTestWidget
					title="A/B Test"
					icon="shuffle"
					iconColor="#EED70B"
					topConnectors={[""]}
					bottomConnectors={["1", "2"]}
				>
					<ABTestContent>
						<p>
							Great <Blue>{"{name}"}</Blue>, let's get you in the system and
							I'll route you to the right place!
						</p>
						<ABImage image={images.abTest} alt="analytics graph" />
					</ABTestContent>
				</ABTestWidget>
				<StartSpeakLine />
				<SpeakActionLine />
				<SpeakTestLine />
				<ActionSpeakLine />
				<TestSpeakLine />
				<TestLine />
				<SpeakLine1 />
				<SpeakLine2 />
				<SpeakLine3 />
				<SpeakLine4 />
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
  position: relative;

  ${fresponsive(css`
    height: 1926px;
    padding: 144px 156px 60px;
  `)}
`

const BackgroundImage = styled.img`
  position: absolute;
  z-index: 0;

  ${fresponsive(css`
    width: 1318px;
    height: 1460px;
    top: 408px;
    right: 62px;
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
`

const Title = styled.h1`
  ${textStyles.h3}
  color: ${colors.black};

  ${fresponsive(css`
    width: 620px;
  `)}
`

const Text = styled.p`
  ${textStyles.bodyL}
  color: ${colors.gray700};

  ${fresponsive(css`
    width: 380px;
  `)}
`

const Buttons = styled.div`
  display: flex;
  align-items: center;

  ${fresponsive(css`
    gap: 18px;
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

  h6 {
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
`

const Callout1 = styled(Callout)`
  position: absolute;

  ${fresponsive(css`
    left: 156px;
    top: 826px;

    h6 {
      width: 450px;
    }

    p {
      width: 360px;
    }
  `)}
`

const Callout2 = styled(Callout)`
  position: absolute;

  ${fresponsive(css`
    right: 229px;
    bottom: 247px;

    h6 {
      width: 420px;
    }

    p {
      width: 411px;
    }
  `)}
`

const StartWidget = styled(Widget)`
  position: absolute;

  ${fresponsive(css`
    top: 384px;
    right: 226px;
  `)}
`

const SpeakWidget = styled(Widget)`
  position: absolute;

  ${fresponsive(css`
    top: 762px;
    right: 346px;
    height: 196px;
  `)}
`

const Blue = styled.strong`
  color: #0085E5D9;
`

const Speak2Widget = styled(Widget)`
  position: absolute;

  ${fresponsive(css`
    top: 1603px;
    right: 732px;
    height: 195px;
  `)}
`

const ActionWidget = styled(Widget)`
  position: absolute;

  ${fresponsive(css`
    top: 1004px;
    right: 156px;
  `)}
`

const ABTestWidget = styled(Widget)`
  position: absolute;

  ${fresponsive(css`
    top: 1268px;
    right: 948px;
    height: 290px;
  `)}
`

const ABTestContent = styled.div`
  display: flex;
  flex-direction: column;
`

const ABImage = styled(UniversalImage)`
  ${fresponsive(css`
    width: 326px;
    height: 113px;
  `)}
`

const ActionImage = styled(UniversalImage)`
  ${fresponsive(css`
    width: 327px;
    height: 162px;
  `)}
`

const StartSpeakLine = styled(StartSpeakLineSVG)`
  position: absolute;

  ${fresponsive(css`
    height: 210px;
    width: 122px;
    right: 419px;
    top: 552px;
  `)}
`

const SpeakActionLine = styled(SpeakActionLineSVG)`
  position: absolute;

  ${fresponsive(css`
    width: 132px;
    height: 43px;
    right: 347px;
    top: 960px;
  `)}
`

const SpeakTestLine = styled(SpeakTestLineSVG)`
  position: absolute;

  ${fresponsive(css`
    width: 546px;
    height: 319px;
    right: 601px;
    top: 959px;
  `)}
`

const ActionSpeakLine = styled(ActionSpeakLineSVG)`
  position: absolute;

  ${fresponsive(css`
    width: 578px;
    height: 309px;
    right: 349px;
    top: 1297px;
  `)}
`

const TestSpeakLine = styled(TestSpeakLineSVG)`
  position: absolute;

  ${fresponsive(css`
    width: 152px;
    height: 42px;
    right: 926px;
    top: 1560px;
  `)}
`

const TestLine = styled(TestLine1SVG)`
  position: absolute;

  ${fresponsive(css`
    width: 199px;
    height: 209px;
    top: 1560px;
    right: 1180px;
  `)}
`

const SpeakLine1 = styled(SpeakLine1SVG)`
  position: absolute;
  
  ${fresponsive(css`
    width: 192px;
    height: 68px;
    bottom: 60px;
    right: 1037px;
  `)}
`

const SpeakLine2 = styled(SpeakLine2SVG)`
  position: absolute;

  ${fresponsive(css`
    width: 192px;
    height: 68px;
    bottom: 60px;
    right: 960px;
  `)}
`

const SpeakLine3 = styled(SpeakLine3SVG)`
  position: absolute;

  ${fresponsive(css`
    width: 313px;
    height: 70px;
    bottom: 60px;
    right: 763px;
  `)}
`

const SpeakLine4 = styled(SpeakLine4SVG)`
  position: absolute;

  ${fresponsive(css`
    width: 225px;
    height: 107px;
    bottom: 36px;
    right: 592px;
  `)}
`
