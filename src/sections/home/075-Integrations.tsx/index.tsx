import InfiniteSideScroll from "components/InfiniteSideScroll"
import Kicker from "components/Kicker"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { fresponsive } from "library/fullyResponsive"
import useMedia from "library/useMedia"
import { getResponsivePixels } from "library/viewportUtils"
import styled, { css } from "styled-components"
import { desktopBreakpoint } from "styles/media"
import Card from "./Card"

gsap.registerPlugin(ScrollToPlugin)

export default function Integrations() {
	const doubleTrack = useMedia(false, false, true, true)

	const data: Queries.IntegrationsQuery = useStaticQuery(graphql`
    query Integrations {
      allHomeIntegrationsJson {
        nodes {
          logo {
            childImageSharp {
              gatsbyImageData
            }
          }
          text
          tag
        }
      }
    }
  `)

	const cards = data.allHomeIntegrationsJson.nodes.map((item, index) => {
		return (
			<Card
				key={(item?.text ?? "") + Math.random()}
				logo={item.logo}
				tag={item.tag}
			>
				{item.text}
			</Card>
		)
	})

	return (
		<Wrapper>
			<Inner>
				<Kicker gradient icon="integration" iconLeft>
					Integrations
				</Kicker>
				<Tracks>
					<InfiniteSideScroll trackGap={getResponsivePixels(24)}>
						{cards}
					</InfiniteSideScroll>
					{doubleTrack && (
						<InfiniteSideScroll key={2} trackGap={getResponsivePixels(24)}>
							{cards}
						</InfiniteSideScroll>
					)}
				</Tracks>
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  place-content: center;
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  transform: scale(1);

  ${fresponsive(css`
    padding: 30px 0 100px;
    gap: 53px;
  `)}
`

const Tracks = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    gap: 24px;
  `)}
`
