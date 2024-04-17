import Button from "components/Buttons/Primary"
import Background from "images/home/hero-background.png"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"
import links from "utils/links"

export default function Hero() {
	return (
		<Wrapper>
			<Inner>
				<BackgroundImage src={Background} />
				<TextContent>
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
    bottom: 60px;
    left: 62px;
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
