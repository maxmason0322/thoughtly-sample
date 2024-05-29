import InfiniteSideScroll from "components/InfiniteSideScroll"
import Kicker from "components/Kicker"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { fresponsive } from "library/fullyResponsive"
import useMedia from "library/useMedia"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import Card from "./Card"

gsap.registerPlugin(ScrollToPlugin)

export default function Integrations() {
	const doubleTrack = useMedia(false, false, true, true)
	const offsetLeft = useMedia(0, 0, 140, 140)

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

	const halfOfElements = (arr: JSX.Element[], secondHalf?: boolean) => {
		if (secondHalf) {
			return arr.slice(Math.ceil(arr.length / 2))
		}
		return arr.slice(0, Math.ceil(arr.length / 2))
	}

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
		<Wrapper id="integrations" data-anchor-offset="350">
			<Inner>
				<Kicker
					gradient
					icon="integration"
					iconColor={colors.green400}
					iconLeft
				>
					Integrations
				</Kicker>
				<Tracks>
					<InfiniteSideScroll offsetLeft={offsetLeft} trackGap={24}>
						{doubleTrack ? halfOfElements(cards) : cards}
					</InfiniteSideScroll>
					{doubleTrack && (
						<InfiniteSideScroll key={2} trackGap={24} reversed>
							{halfOfElements(cards, true)}
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
  background-color: ${colors.beige200};
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
