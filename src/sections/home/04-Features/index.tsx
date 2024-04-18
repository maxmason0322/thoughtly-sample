import type { IconType } from "components/Icon"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import { fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useRef } from "react"
import styled, { css } from "styled-components"
import { desktopBreakpoint } from "styles/media"
import Card from "./Card"

export default function Features() {
	const wrapperRef = useRef<HTMLElement | null>(null)
	const innerRef = useRef<HTMLDivElement | null>(null)

	const data: Queries.FeaturesQuery = useStaticQuery(graphql`
    query Features {
      allHomeFeaturesJson {
        nodes {
          icon
          title
          text
          background {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      }
    }
  `)

	const cards = data.allHomeFeaturesJson.nodes.map((item, index) => {
		return (
			<Card
				key={item.title}
				icon={item.icon as IconType}
				title={item.title ?? ""}
				text={item.text ?? ""}
				background={item.background?.childImageSharp?.original?.src}
				index={index}
			/>
		)
	})

	useAnimation(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: wrapperRef.current,
					start: "top bottom",
					end: "bottom bottom",
					scrub: true,
				},
			})

			tl.from(innerRef.current, {
				rowGap: 200,
			})
		},
		[],
		{
			scope: wrapperRef,
		},
	)

	return (
		<Wrapper ref={wrapperRef}>
			<Inner ref={innerRef}>{cards}</Inner>
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
  display: grid;
  
  ${fresponsive(css`
    padding: 111px 156px 200px;
    gap: 24px 24px;
    grid-auto-rows: 329px 420px;
    grid-template-columns: 360px 192px 192px 360px;
  `)}

	${ftablet(css`
		grid-auto-rows: 348px 306px 306px 276px;
		grid-template-columns: 432px 93px 339px;
		padding: 85px 68px 202px;
	`)}
`
