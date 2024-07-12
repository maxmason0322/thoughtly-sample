import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useRef } from "react"
import styled, { css } from "styled-components"
import { distributeByPosition } from "utils/gsapDistribute"

export default function ImageGrid() {
	const gridRef = useRef<HTMLDivElement>(null)

	const images: Queries.platformGridImagesQuery = useStaticQuery(graphql`
		query platformGridImages {
			grid: allFile(
				filter: { relativeDirectory: { eq: "platform/benefits" } }
				sort: { relativePath: ASC }
			) {
				nodes {
					id
					name
					childImageSharp {
						gatsbyImageData(placeholder: NONE)
					}
				}
		}
		}
	`)

	const allGridWidgets = images.grid.nodes.map((widget) => (
		<GridItem
			$gridArea={widget.name}
			className="parallax-elements"
			key={widget.name}
		>
			<GridImage
				image={widget.childImageSharp?.gatsbyImageData}
				alt={widget.name}
			/>
		</GridItem>
	))

	useAnimation(
		() => {
			if (!gridRef.current) return

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: gridRef.current,
					start: "top bottom",
					end: "top center",
					scrub: true,
				},
			})

			tl.from(
				".parallax-elements",
				{
					x: 200,
					y: 200,
					opacity: 0,
					stagger: distributeByPosition(
						{
							amount: 1,
							from: "start",
						},
						gsap,
					),
					ease: "power1.inOut",
					duration: 2,
				},
				0,
			)
		},
		[],
		{ scope: gridRef },
	)

	return <Grid ref={gridRef}>{allGridWidgets}</Grid>
}

const Grid = styled.div`
	display: grid;
	position: relative;
	height: 100%;
	width: auto;

	${fresponsive(css`
		top: -12px;
		grid-template:
			"widget1 widget1 . . . . . ." 69px
			"widget1 widget1 . . . widget2 . ." 95px
			"widget1 widget1 . widget3 . widget2 . ." 61px
			"widget1 widget1 . widget3 . widget2 . widget4" 127px
			". . . widget3 . widget2 . widget4" 24px
			". widget5 . widget3 . widget2 . widget4" 65px
			". widget5 . widget3 . . . widget4" 24px
			". widget5 . widget3 . widget6 . widget4" 45px
			/ 91px 288px 24px 288px 24px 288px 24px 410px;
	`)}

	${ftablet(css`
		top: -32px;
		scale: 0.9;
		height: 50%;
	`)}

	${fmobile(css`
		top: -15px;
		left: -70px;
		scale: 0.45;
		height: 40%;
	`)}
`

const GridItem = styled.div<{ $gridArea: string }>`
	grid-area: ${({ $gridArea }) => $gridArea};
`

const GridImage = styled(UniversalImage)``
