import { graphql, useStaticQuery } from "gatsby"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useMedia from "library/useMedia"
import { useState } from "react"
import styled, { css } from "styled-components"
import { Dots } from "styles/background"
import colors from "styles/colors"
import {
	desktopBreakpoint,
	mobileBreakpoint,
	tabletBreakpoint,
} from "styles/media"
import textStyles from "styles/text"
import AgentCard from "./Agent"
import WorkflowAnimation from "./WorkflowAnimation"

export default function Workflows() {
	const [activeIndex, setActiveIndex] = useState(3)
	const deskTopTablet = useMedia(true, true, true, false)

	const mobileImage: Queries.MobileWorkFlowImageQuery = useStaticQuery(graphql`
    query MobileWorkFlowImage {
      cards: file(relativePath: { eq: "home/mobileWorkflows.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

	return (
		<Wrapper>
			<Inner>
				<Content>
					<StyledDots />
					<AgentCard activeIndex={activeIndex} />
					<Title>Human-like agents, fully integrated into your business.</Title>
					<Text>
						Build powerful workflows that fully automate your entire sales
						funnel, customer service routines, and more.
					</Text>
					{deskTopTablet ? (
						<WorkflowAnimation setActiveIndex={setActiveIndex} />
					) : (
						<WorkflowImg image={mobileImage.cards} alt="tickets and lines" />
					)}
				</Content>
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  background-color: ${colors.beige200};
`

const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: ${desktopBreakpoint}px;
  ${fresponsive(css`
    padding: 194px 170px 25px;
  `)}

  ${ftablet(css`
    padding: 194px 21px 25px;
    max-width: ${tabletBreakpoint}px;
  `)}

  ${fmobile(css`
    padding: 102px 8px;
    max-width: ${mobileBreakpoint}px;
  `)}
`

const StyledDots = styled(Dots)`
  z-index: 0;
  ${fresponsive(css`
    border-radius: 60px;
  `)}

  ${fmobile(css`
    border-radius: 36px;
  `)}
`

const Content = styled.div`
  position: relative;
  width: 100%;

  /* Todo: replace background image with dot component  */

  display: flex;
  flex-direction: column;
  align-items: center;

  ${fresponsive(css`
    height: 671px;
    padding: 60px 165px;
  `)}

  ${ftablet(css`
    height: 717px;
    padding: 58px 110px;
  `)}

  ${fmobile(css`
    height: 862px;
    padding: 60px 0;
  `)}
`

const Title = styled.h1`
  ${textStyles.h5}
  color: ${colors.black};
  text-align: center;
  z-index: 1;
  ${fresponsive(css`
    margin-bottom: 36px;
  `)}

  ${fmobile(css`
    ${textStyles.h6}
    margin-bottom: 24px;
  `)}
`

const Text = styled.p`
  ${textStyles.bodyR}
  text-align: center;
  z-index: 1;

  ${fresponsive(css`
    width: 346px;
  `)}

  ${ftablet(css`
    width: 346px;
  `)}
`

const WorkflowImg = styled(UniversalImage)`
  position: absolute;

  ${fmobile(css`
    width: 375px;
    height: 556px;
    top: 400px;
  `)}
  img {
    width: 100%;
    height: 100%;
  }
`
