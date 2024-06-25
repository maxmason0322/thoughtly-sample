import Kicker from "components/Kicker"
import { graphql, useStaticQuery } from "gatsby"
import UniversalImage from "library/UniversalImage"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"
import { Green } from "../01-Hero"

export default function Features() {
	const imageQuery = useStaticQuery(graphql`
    query FeaturesImageQuery {
      featuredImage: file(relativePath:  {
         eq: "platform/features/Features.png"
      }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

	return (
		<Wrapper>
			<Inner>
				<Heading>
					<FeatureImage image={imageQuery.featuredImage} alt="Features" />
					<Right>
						<Kicker>Customizable AI Phone Agents</Kicker>
						<Title>
							<Blue>Features</Blue> from the <Green>Future.</Green>
						</Title>
					</Right>
				</Heading>
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  position: relative;
  place-items: center;
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;
  position: relative;
`

const Heading = styled.div`
  display: flex;
  flex-direction: row;
`

const FeatureImage = styled(UniversalImage)`
  ${fresponsive(css`
    width: 360px;
    height: 400px;
  `)}
`

const Right = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    gap: 16px;
  `)}
`

const Title = styled.p`
  ${textStyles.h3}

  ${fresponsive(css`
    width: 606px;
  `)}
`

export const Blue = styled.span`
	${transparentText};
	background-image: ${gradients.blueBlue};
  display: inline-block;

  ${fresponsive(css`
    padding-right: 8px;
    margin-right: -8px;
  `)}
`
