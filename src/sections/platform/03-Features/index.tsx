import Kicker from "components/Kicker"
import Unmask from "components/Unmask"
import { graphql, useStaticQuery } from "gatsby"
import { ScreenContext } from "library/ScreenContext"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useMedia from "library/useMedia"
import { useContext } from "react"
import styled, { css } from "styled-components"
import { Dots } from "styles/background"
import colors, { gradients } from "styles/colors"
import {
	desktopBreakpoint,
	mobileBreakpoint,
	tabletBreakpoint,
} from "styles/media"
import textStyles, { transparentText } from "styles/text"
import { Green } from "../01-Hero"
import Card from "../01-Hero/Card"
import FeaturesDetails, { RightFeatureCopy } from "./FeaturesDetails"

export default function Features() {
	const { mobile, fullWidth } = useContext(ScreenContext)

	const imageQuery = useStaticQuery(graphql`
    query PlatformFeatures {
      featuredImage: file(relativePath:  {
         eq: "platform/features/Features.png"
      }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      featuredImageMobile: file(relativePath:  {
         eq: "platform/features/FeaturesMobile.png"
      }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      corner: file(relativePath: {
        eq: "platform/features/Corner.png"
      }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `)

	const data = [
		{
			key: 0,
			left: useMedia(62, 62, 22, 0),
			top: useMedia(458, 458, 581, 0),
			rotate: 0,
		},
		{
			key: 1,
			left: useMedia(655, 655, 470, 0),
			top: useMedia(105, 105, 220, 0),
			rotate: 180,
		},
		{
			key: 2,
			left: useMedia(1318, 1318, 942, 0),
			top: useMedia(376, 376, 500, 0),
			rotate: 180,
		},
		{
			key: 3,
			left: useMedia(62, 62, 22, 0),
			top: useMedia(805.5, 805.5, 1079, 0),
			rotate: 90,
		},
		{
			key: 4,
			left: useMedia(1318, 1318, 942, 0),
			top: useMedia(856, 856, 1051, 0),
			rotate: -90,
		},
		{
			key: 5,
			left: useMedia(62, 62, 22, 0),
			top: useMedia(1191.5, 1191.5, 1496, 0),
			rotate: 0,
		},
		{
			key: 6,
			left: useMedia(1318, 1318, 942, 0),
			top: useMedia(1178.5, 1178.5, 1524, 0),
			rotate: 180,
		},
		{
			key: 7,
			left: useMedia(62, 62, 22, 0),
			top: useMedia(1531.5, 1531.5, 1986, 0),
			rotate: 90,
		},
		{
			key: 8,
			left: useMedia(1318, 1318, 942, 0),
			top: useMedia(1535.5, 1535.5, 1958, 0),
			rotate: -90,
		},
		{
			key: 9,
			left: useMedia(62, 62, 22, 0),
			top: useMedia(1855, 1855, 2399, 0),
			rotate: 0,
		},
		{
			key: 10,
			left: useMedia(1318, 1318, 942, 0),
			top: useMedia(1848, 1848, 2427, 0),
			rotate: 180,
		},
		{
			key: 11,
			left: useMedia(62, 62, 22, 0),
			top: useMedia(2212.5, 2212.5, 2897, 0),
			rotate: 90,
		},
		{
			key: 12,
			left: useMedia(1318, 1318, 942, 0),
			top: useMedia(2187.5, 2187.5, 2869, 0),
			rotate: -90,
		},
		{
			key: 13,
			left: useMedia(655, 655, 474, 0),
			top: useMedia(2549.5, 2549.5, 3278, 0),
			rotate: -90,
		},
	]

	const unmaskParams = { delay: 0.35, duration: 0.6 }

	return (
		<Wrapper>
			<Inner>
				<DotsWrapper>
					<Dots />
				</DotsWrapper>
				{!mobile &&
					data.map((corner) => (
						<Corner
							key={corner.key}
							image={imageQuery.corner}
							alt="corner"
							$left={corner.left}
							$top={corner.top}
							$rotate={corner.rotate}
							$fullwidth={fullWidth}
						/>
					))}
				<Heading>
					<CardWrapper>
						<Card
							image={
								mobile
									? imageQuery.featuredImageMobile
									: imageQuery.featuredImage
							}
						/>
					</CardWrapper>
					<Right>
						<Unmask parameters={unmaskParams}>
							<StyledKicker>Customizable AI Phone Agents</StyledKicker>
						</Unmask>
						<Unmask parameters={unmaskParams}>
							<Title>
								<Blue>Features</Blue> from the <Green>Future.</Green>
							</Title>
						</Unmask>
					</Right>
					{!mobile && <EmptyCopy />}
				</Heading>
				<Bottom>
					<FeaturesDetails />
				</Bottom>
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  position: relative;
  place-items: center;

  ${fresponsive(css`
    margin: 80px 0 165px;
  `)}

	${ftablet(css`
		margin: 0 0 125px;
	`)}

	${fmobile(css`
		margin: 150px 0 90px;
	`)}
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;
  position: relative;
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    gap: 250px;
  `)}

	${ftablet(css`
		max-width: ${tabletBreakpoint}px;
	`)}

	${fmobile(css`
		max-width: ${mobileBreakpoint}px;
		padding-bottom: 75px;
		align-items: center;
		gap: 80px;
	`)}
`

const DotsWrapper = styled.div`
  position: absolute;
  
  ${fresponsive(css`
  	height: 95.9%;
  	max-width: ${desktopBreakpoint}px;
    width: 1316px;
		left: 50%;
		transform: translateX(-50%);
    top: 105px;
  `)}

	${ftablet(css`
		max-width: ${tabletBreakpoint}px;
		width: 980px;
		top: 220px;
		height: 93%;
	`)}

	${fmobile(css`
		max-width: ${mobileBreakpoint}px;
		width: 358px;
	`)}

  > * {
    ${fresponsive(css`
      border-radius: 60px;
    `)}

		${fmobile(css`
			border-radius: 36px;
		`)}
  }
`

const Corner = styled(UniversalImage)<{
	$left: number
	$top: number
	$rotate: number
	$fullwidth: boolean
}>`
  position: absolute;
  z-index: 1;

  ${({ $left, $top, $rotate }) =>
		fresponsive(css`
    left: ${$left}px;
    top: ${$top}px;
    transform: rotate(${$rotate}deg);
  `)}

  img {
    ${fresponsive(css`
      width: 60px;
      height: 60px;
    `)}
  }
`

const Heading = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

	${fmobile(css`
		flex-direction: column;
	`)}

  > * {
    z-index: 1;
  }
`

const CardWrapper = styled.div`
  position: absolute;

  ${fresponsive(css`
    left: 161px;

    div {
      width: 360px;
      height: auto;
      border-radius: 18px;

      > * {
        border-radius: 12px;
      }
    }
  `)}

	${ftablet(css`
		left: 68px;
	`)}

	${fmobile(css`
		left: 50%;
		transform: translateX(-50%);

		div {
			width: 314px;
		}
	`)}
`

const Right = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    gap: 16px;
    top: 27px;
    left: 545px;
  `)}

	${ftablet(css`
		gap: 22px;
		left: 452px;
	`)}

	${fmobile(css`
		gap: 12px;
		top: -285px;
		left: unset;
		align-items: center;
	`)}
`

const StyledKicker = styled(Kicker)`
  color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
`

const Title = styled.p`
	${fresponsive(css`
		${textStyles.h3};
    width: 606px;
  `)}

	${ftablet(css`
		${textStyles.h2};
		width: 504px;
	`)}

	${fmobile(css`
		${textStyles.h4};
		width: 314px;
		text-align: center;
	`)}
`

export const Blue = styled.span`
	${transparentText};
	background-image: ${gradients.blueBlueDark};
  display: inline-block;

  ${fresponsive(css`
    padding-right: 8px;
    margin-right: -8px;
  `)}
`

const EmptyCopy = styled(RightFeatureCopy)`
  position: absolute;
  z-index: 0;

  ${fresponsive(css`
    left: 715px;
    height: 334px;
		top: 42px;
  `)}

	${ftablet(css`
		left: 530px;
		height: 500px;
	`)}
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    left: 188px;
    gap: 32px;
  `)}

	${fmobile(css`
		width: 314px;
	`)}

  > :nth-child(even) {
    flex-direction: row-reverse;

		${fmobile(css`
			flex-direction: column;
		`)}
  }
`
