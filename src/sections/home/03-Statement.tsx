import gsap from "gsap"
import { CSSPlugin } from "gsap"
import SplitText from "gsap/SplitText"
import Background from "images/home/statement-background.png"
import BackgroundM from "images/home/statement-backgroundM.png"
import BackgroundT from "images/home/statement-backgroundT.png"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useRef } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"

gsap.registerPlugin(SplitText, CSSPlugin)

export default function Statement() {
	const wrapperRef = useRef<HTMLElement | null>(null)

	useAnimation(
		() => {
			const nonGradient = new SplitText(".non-gradient", {
				type: "words",
				wordsClass: "word",
			})
			const gradient = new SplitText(".gradient", {
				type: "words",
				wordsClass: "gradient-word",
			})

			const gradientColors = [
				"linear-gradient(53deg, #A5CFF9 0%, #8FD5C8 100%)",
				"linear-gradient(53deg,#8FD5C8 0%, #8BD6BF 100%)",
				"linear-gradient(53deg, #8BD6BF 0%, #85D7B2 100%)",
				"linear-gradient(53deg,  #7ADA9A 0%, #76DB91 100%)",
				"linear-gradient(53deg, #7ADA9A 0%, #76DB91 100%)",
				"linear-gradient(53deg,  #76DB91 0%, #66DF6D 100%)",
				"linear-gradient(53deg,  #53E443 0%, #37EB05 100%)",
			]

			for (const el of gradient.words) {
				;(el as HTMLElement).style.background = colors.gray400
			}

			gsap.set(gradient.words, {
				backgroundSize: "100%",
				backgroundClip: "text",
				webkitTextFillColor: "transparent",
			})

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: wrapperRef.current,
					start: "top top",
					pin: true,
					scrub: true,
				},
			})
			const nonGradientArrayLength = Array.from(nonGradient.words).length

			tl.to(nonGradient.words, {
				backgroundColor: colors.js.black,
				stagger: 1,
			})

			Object.values(gradient.words).forEach((el, i, arr) => {
				const animation = gsap.to(el, {
					backgroundSize: "100%",
					backgroundClip: "text",
					webkitTextFillColor: "transparent",
					duration: 0.01,
					onComplete: () => {
						const el = arr[i] as HTMLElement

						el.style.backgroundImage = gradientColors[i] ?? ""
					},
					onReverseComplete: () => {
						const el = arr[i] as HTMLElement

						el.style.background = colors.gray400
						el.style.backgroundClip = "text"
						el.style.backgroundSize = "100%"
						el.style.webkitTextFillColor = "transparent"
					},
				})

				tl.add(animation, nonGradientArrayLength + i)
			})
		},
		[],
		{
			scope: wrapperRef,
		},
	)

	return (
		<Wrapper ref={wrapperRef}>
			<Inner>
				<Content>
					<Title>
						<span className="non-gradient">
							Thoughtly reimagines phone calls with AI that speaks your
							language. Our mission is to make every call your best yet, merging
							tradition with tomorrow&apos;s tech.
						</span>
						<span className="gradient">
							&nbsp; Welcome to the future of customer interaction.
						</span>
					</Title>
				</Content>
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  height: 100vh;

  ${fresponsive(css`
    min-height: 882px;
  `)}
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;

  ${fresponsive(css`
    padding: 92px 60px;
  `)}

  ${ftablet(css`
    padding: 0;
    max-width: 982px;
    width: 982px;
  `)}
  ${fmobile(css`
    padding: 0;
    width: 358px;
  `)}
`

const Content = styled.div`
  background-image: url(${Background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;

  ${fresponsive(css`
    height: 694px;
    padding: 84px 96px;
  `)}

  ${ftablet(css`
    background-image: url(${BackgroundT});
    height: 694px;
    padding: 72px 47px;
  `)}

  ${fmobile(css`
    background-image: url(${BackgroundM});
    height: 448px;
    padding: 65px 47px 0 22px;
  `)}
`

const Title = styled.h3`
  ${textStyles.quoteXL};

  .gradient {
    ${transparentText}
    background-image: ${gradients.greenBlue};
  }

  .non-gradient {
    .word {
      ${transparentText}
      background-color: ${colors.gray400};
    }
  }

  ${fresponsive(css`
    width: 1035px;
  `)}

  ${ftablet(css`
    ${textStyles.quoteXL};
    width: 887px;
  `)}

  ${fmobile(css`
    ${textStyles.sh1};
    width: 289px;
  `)}
`
