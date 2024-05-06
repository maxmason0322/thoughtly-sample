import type { IconType } from "components/Icon"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import getMedia from "library/getMedia"
import useAnimation from "library/useAnimation"
import useMedia from "library/useMedia"
import { getResponsivePixels } from "library/viewportUtils"
import { useRef } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import Card from "./Card"

export default function Features() {
	const wrapperRef = useRef<HTMLElement | null>(null)
	const innerRef = useRef<HTMLDivElement | null>(null)
	const mobile = useMedia(false, false, false, true)

	const data: Queries.FeaturesQuery = useStaticQuery(graphql`
    query Features {
      allHomeFeaturesJson {
        nodes {
          icon
          title
          text
          link {
            href
            text
          }
          strokeIcon
          background {
            childImageSharp {
              gatsbyImageData
            }
          }
          backgroundTablet {
            childImageSharp {
              gatsbyImageData
            }
          }
          backgroundMobile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

	const cards = data.allHomeFeaturesJson.nodes.map((item, index) => {
		const textWidths = [
			291,
			326,
			getMedia(220, 220, 232, 232),
			getMedia(264, 264, 246, 246),
			getMedia(309, 309, 279, 279),
			getMedia(334, 334, 444, 444),
		]

		return (
			<Card
				key={item.title}
				icon={item.icon as IconType}
				title={item.title ?? ""}
				text={item.text ?? ""}
				background={item.background}
				backgroundTablet={item.backgroundTablet}
				backgroundMobile={item.backgroundMobile}
				index={index}
				textWidths={textWidths[index] ?? 0}
				strokeIcon={item.strokeIcon}
				link={item.link}
			/>
		)
	})

	useAnimation(
		() => {
			if (mobile) return
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: wrapperRef.current,
					start: "top bottom",
					end: "bottom bottom",
					scrub: true,
				},
			})

			/**
			 * we're roughly simulating a row gap here,
			 * but that's bad for performance
			 * so doing it with transforms instead
			 */

			const children = Array.from(innerRef.current?.children ?? [])

			const lastChild = children.at(-1) ?? null
			const midKids = children.slice(2).filter((child) => child !== lastChild)

			tl.from(midKids, {
				y: () => getResponsivePixels(150),
			})
			tl.from(
				lastChild,
				{
					y: () => getResponsivePixels(300),
				},
				0,
			)
		},
		[mobile],
		{
			scope: wrapperRef,
		},
	)

	return (
		<Wrapper id="features" ref={wrapperRef}>
			<Inner ref={innerRef}>{cards}</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  background-color: ${colors.white};
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;
  display: grid;

  ${fresponsive(css`
    padding: 111px 156px 200px;
    gap: 24px 24px;
    grid-auto-rows: 329px 420px 289px;
    grid-template-columns: 360px 168px 168px 360px;
  `)}

  ${ftablet(css`
    grid-auto-rows: 348px 306px 306px 276px;
    grid-template-columns: 432px 93px 339px;
    padding: 0 68px 202px;
  `)}

	${fmobile(css`
    padding: 0 30px 24px;
    grid-template-columns: 315px;
    grid-auto-rows: 360px 360px 360px 360px 360px 420px;
    gap: 12px;
  `)}
`
