import gsap from "gsap"
import { CSSPlugin } from "gsap"
import SplitText from "gsap/SplitText"
import { usePinType } from "library/Scroll"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import useMedia from "library/useMedia"
import { useRef } from "react"
import styled, { css } from "styled-components"
import { Dots } from "styles/background"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"

gsap.registerPlugin(SplitText, CSSPlugin)

export default function Statement() {
	const wrapperRef = useRef<HTMLElement | null>(null)
	const pinType = usePinType()
	const noPin = useMedia(false, false, true, true)

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
				"linear-gradient(-53deg, #82f6a9 0%, #8BD6BF 100%)",
				"linear-gradient(53deg,#8BD6BF 0%, #52d375 100%)",
				"linear-gradient(53deg, #52d375 0%, #76DB91 100%)",
				"linear-gradient(-53deg,  #76DB91 0%, #7ADA9A 100%)",
				"linear-gradient(53deg, #7ADA9A 0%, #76DB91 100%)",
				"linear-gradient(53deg,  #49d96f 0%, #53E443 100%)",
				"linear-gradient(-53deg,  #53E443 0%, #37EB05 100%)",
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
					start: noPin ? "top 50%" : "top top",
					end: noPin ? "bottom 80%" : "bottom top",
					scrub: true,
					pin: !noPin,
					pinType,
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
		[pinType, noPin],
		{
			scope: wrapperRef,
		},
	)

	return (
		<Outer>
			<Wrapper ref={wrapperRef}>
				<Inner>
					<Content>
						<Dots />
						<Title>
							<span className="non-gradient">
								Thoughtly reimagines phone calls with AI that speaks your
								language. Our mission is to make every call your best yet,
								merging tradition with tomorrow&apos;s tech.
							</span>
							<span className="gradient">
								&nbsp; Welcome to the future of customer interaction.
							</span>
						</Title>
					</Content>
				</Inner>
			</Wrapper>
		</Outer>
	)
}

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: ${colors.beige200};
  will-change: transform;

  ${fresponsive(css`
    min-height: 882px;
  `)}
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;

  ${fresponsive(css`
    padding: 92px 61px;
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
  width: 100%;
  overflow: clip;
  position: relative;
  background-color: ${colors.beige300};

  ${fresponsive(css`
    height: 694px;
    padding: 79px 96px;
    border-radius: 60px;
  `)}

  ${ftablet(css`
    height: 694px;
    padding: 72px 47px;
  `)}

  ${fmobile(css`
    height: 448px;
    padding: 65px 47px 0 22px;
    border-radius: 36px;
  `)}
`

const Title = styled.h2`
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

const Outer = styled.div`
  background-color: ${colors.beige200};
`
