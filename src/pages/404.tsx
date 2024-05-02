import Primary from "components/Buttons/Primary"
import Seo from "components/Seo"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useRef } from "react"
import styled, { css } from "styled-components"
import { Dots } from "styles/background"
import colors, { gradients } from "styles/colors"
import textStyles, { transparentText } from "styles/text"
import links from "utils/links"

gsap.registerPlugin(SplitText)

export default function FourOhFour() {
	const titleRef = useRef<HTMLDivElement>(null)

	useAnimation(() => {
		const split = new SplitText(titleRef.current, {
			type: "chars, lines",
		})
		const dots = split.chars.splice(-3)
		for (let i = 0; i < dots.length; i++) {
			gsap.timeline({ delay: i * 0.15, repeat: -1, yoyo: true }).to(
				dots[i] ?? null,
				{
					yPercent: -25,
					ease: "power2.out",
					yoyoEase: "power2.in",
					duration: 0.3,
				},
				1.5,
			)
		}
	}, [])

	return (
		<Wrapper>
			<Inner>
				<Dots />
				<Content>
					<Text>Oops! 404 Error!</Text>
					<TitleSpan ref={titleRef}>Page not found...</TitleSpan>
				</Content>
				<Buttons>
					<Primary icon="chev" to={links.home}>
						Back to Homepage
					</Primary>
					<Primary to={links.login} variant="secondary">
						Or give thoughtly a try!
					</Primary>
				</Buttons>
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  background: ${colors.white};

  ${fresponsive(css`
    padding: 150px 157px 120px;
  `)}

  ${ftablet(css`
    padding: 160px 69px 56px;
  `)}

	${fmobile(css`
    padding: 120px 8px 109px;
  `)}
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  background-color: ${colors.gray100};

  ${fresponsive(css`
    width: 1126px;
    height: 694px;
    border-radius: 60px;
    gap: 24px;
    padding-top: 161px;
  `)}

  ${ftablet(css`
    width: 886px;
    height: 1174px;
    gap: 36px;
    padding-top: 342px;
  `)}

	${fmobile(css`
    width: 358px;
    height: 671px;
    padding-top: 144px;
    border-radius: 36px;
  `)}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${fresponsive(css`
    gap: 6px;
  `)}

  ${ftablet(css`
    gap: 0;
  `)}
`

const Text = styled.p`
  ${textStyles.sh4};
  ${transparentText};
  background-image: ${gradients.greenBlue};

  ${ftablet(css`
    ${textStyles.sh2};
  `)}
`

const TitleSpan = styled.div`
  ${textStyles.h2};
  color: ${colors.black};
  z-index: 1;

  ${fresponsive(css`
    width: 552px;
  `)}

  ${ftablet(css`
    ${textStyles.h1};
    width: 717px;
  `)}

	${fmobile(css`
    ${textStyles.h4};
    width: 316px;
  `)}
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;

  ${fresponsive(css`
    gap: 12px;
  `)}

  ${ftablet(css`
    gap: 18px;
    width: 468px;
    height: 58px;
  `)}

	${fmobile(css`
    flex-direction: column;
    gap: 12px;
  `)}
`

export function Head() {
	return (
		<Seo
			title="404: Not Found"
			description="This page could not be found."
			pathname="/404"
		/>
	)
}
