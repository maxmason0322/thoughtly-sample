import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import UniversalImage from "library/UniversalImage"
import { fresponsive } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { getResponsivePixels } from "library/viewportUtils"
import { useEffect, useMemo, useRef } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"

export default function AvatarWidget({
	className = "",
}: {
	className: string
}) {
	const wrapperRef = useRef<HTMLDivElement | null>(null)

	const images: Queries.AvatarsQuery = useStaticQuery(graphql`
    query Avatars {
      avatars: allFile(
        filter: { relativeDirectory: { eq: "global/avatars" } }
        sort: { relativePath: ASC }
      ) {
        nodes {
          id
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

	const avatars = useMemo(
		() =>
			[...images.avatars.nodes, ...images.avatars.nodes].map(
				(item, index, arr) => {
					return (
						<Avatar
							$zIndex={arr.length - index}
							className="avatar"
							image={item}
							key={item.id + Math.random()}
							alt="avatar"
						/>
					)
				},
			),
		[images],
	)

	const timeline = useAnimation(
		() => {
			const tl = gsap.timeline({
				onUpdate: () => {
					if (Math.ceil(tl.duration() / 2) + 2 === Math.ceil(tl.time())) {
						tl.pause()
						tl.play(3)
					}
				},
			})

			tl.fromTo(
				".avatar",
				{
					y: () => getResponsivePixels(-60),
					x: () => getResponsivePixels(-60),
				},
				{
					y: 0,
					x: 0,
					stagger: 2,
				},
			)
			tl.to(
				".avatar",
				{
					scale: 1.5,
					x: () => getResponsivePixels(30),
					y: () => getResponsivePixels(30),
					stagger: 2,
				},
				2,
			)
			tl.to(
				".avatar",
				{
					scale: 2,
					x: () => getResponsivePixels(150),
					y: () => getResponsivePixels(150),
					stagger: 2,
				},
				4,
			)

			return tl
		},
		[],
		{ scope: wrapperRef },
	)

	useEffect(() => {
		if (!timeline) return
		timeline.play()
	}, [timeline])

	return (
		<Wrapper ref={wrapperRef} className={className}>
			{avatars}
		</Wrapper>
	)
}

const Wrapper = styled.div`
  background: ${gradients.surface1};
  overflow: clip;
  opacity: 0;

  ${fresponsive(css`
    border: 1.5px solid ${colors.gray300};
    width: 123px;
    height: 122px;
    border-radius: 18px;
    box-shadow:
      0 -1px 6px 0 rgba(38 38 38 / 6%) inset,
      0 18px 32px 0 rgba(89 89 89 / 4%);
  `)}
`

const Avatar = styled(UniversalImage)<{ $zIndex: number }>`
  position: absolute;
  border-radius: 99vw;
  z-index: ${({ $zIndex }) => $zIndex};

  ${fresponsive(css`
    width: 48px;
    height: 48px;
    top: 12px;
    left: 12px;
  `)}
`
