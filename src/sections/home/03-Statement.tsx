import gsap from "gsap"
import SplitText from "gsap/SplitText"
import Background from "images/home/statement-background.png"
import { fresponsive } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useRef } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"

gsap.registerPlugin(SplitText)

export default function Statement() {
	const wrapperRef = useRef<HTMLElement | null>(null)

	useAnimation(
		() => {
			const nonGradient = new SplitText(".non-gradient", {
				type: "words",
				wordsClass: "word",
			})
			// const gradient = new SplitText(".gradient", {
			// 	type: "words",
			// 	wordsClass: "word",
			// })

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: wrapperRef.current,
					start: "top top",
					pin: true,
					scrub: true,
				},
			})

			tl.to(nonGradient.words, {
				backgroundColor: colors.js.black,
				stagger: 1,
			})
			tl.from(".gradient", {
				backgroundImage: `linear-gradient(39deg, ${colors.js.gray400} 4.74%, ${colors.js.gray400} 94.17%)`,
				stagger: 1,
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
						</span>{" "}
						<span className="gradient">
							Welcome to the future of customer interaction.
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
`

const Title = styled.h3`
  ${textStyles.quoteXL};

  .gradient {
    ${transparentText}
    background-image: ${gradients.greenBlue};
    
    /* .word {
			${transparentText}
      color: ${colors.gray400};
			background-color: ${colors.gray400};
    } */
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
`
