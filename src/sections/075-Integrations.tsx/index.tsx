import Kicker from "components/Kicker"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useMedia from "library/useMedia"
import { getResponsivePixels } from "library/viewportUtils"
import { useCallback, useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles from "styles/text"
import Card from "./Card"

gsap.registerPlugin(ScrollToPlugin)

export default function Integrations() {
	const [scrollOffset, setScrollOffset] = useState(0)
	const [trackEl, setTrackEl] = useState<HTMLDivElement | null>(null)
	const [trackInnerEl, setTrackInnerEl] = useState<HTMLDivElement | null>(null)
	const activeIndex = useRef(0)

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
			<Card key={item.text} logo={item.logo} tag={item.tag}>
				{item.text}
			</Card>
		)
	})

	const cardsLength = cards.length
	const awardWidth = useMedia(
		getResponsivePixels(331),
		getResponsivePixels(331),
		getResponsivePixels(331),
		getResponsivePixels(274),
	)
	const trackGap = useMedia(
		getResponsivePixels(24),
		getResponsivePixels(24),
		getResponsivePixels(24),
		getResponsivePixels(50),
	)

	const restart = useCallback(() => {
		gsap.set(trackEl, {
			scrollTo: {
				x: scrollOffset,
			},
		})
	}, [trackEl, scrollOffset])

	useEffect(() => {
		const offset =
			(trackInnerEl?.clientWidth ?? 0) / 2 - (trackEl?.clientWidth ?? 0) / 2
		setScrollOffset(offset)
		restart()
	}, [restart, trackEl, trackInnerEl])

	const animate = () => {
		gsap.to(trackEl, {
			scrollTo: {
				x: activeIndex.current * (awardWidth + trackGap) + scrollOffset,
			},
			duration: 0.25,
		})
	}

	const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
		if (!e.target) return
		const { scrollLeft } = e.target as HTMLDivElement

		const index = (scrollLeft - scrollOffset) / (awardWidth + trackGap)
		const actualIndex = index < 0 ? Math.round(index) : Math.floor(index)

		activeIndex.current = actualIndex
		if (activeIndex.current >= cardsLength) {
			activeIndex.current = 0
			restart()
		} else if (activeIndex.current <= -cardsLength) {
			activeIndex.current = 0
			restart()
		}
	}

	return (
		<Wrapper>
			<Inner>
				<Kicker gradient icon="integration" iconLeft>
					Integrations
				</Kicker>
				<Gradient2 />
				<Track ref={(ref) => setTrackEl(ref)} onScroll={handleScroll}>
					<TrackInner ref={(ref) => setTrackInnerEl(ref)}>
						{cards}
						{cards}
						{cards}
					</TrackInner>
				</Track>
				<Gradient />
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

  ${fresponsive(css`
    padding: 30px 0 100px;
    gap: 53px;
  `)}
`

const Track = styled.div`
  overflow-x: scroll;
  display: flex;
  position: relative;
  scrollbar-width: none;
  transform: scale(1);

  &::-webkit-scrollbar {
    display: none;
  }

  ${fresponsive(css`
    width: 1440px;
  `)}

  ${ftablet(css`
    width: 1024px;
  `)}

  ${fmobile(css`
    width: 375px;
  `)}
`

const TrackInner = styled.div`
  position: relative;
  display: flex;
  width: fit-content;

  ${fresponsive(css`
    gap: 24px;
    padding: 0 24px;
  `)}

  ${fmobile(css`
    gap: 50px;
    padding: 0 50px;
  `)}
`

const Gradient = styled.div`
  background: linear-gradient(to left, #FFF 18.67%, rgba(255 255 255 / 0%) 100%);
  position: absolute;
  z-index: 3;
  top: 50%;
  transform: translateY(-50%);

  ${fresponsive(css`
    width: 120px;
    height: 239px;
    right: -18px; 
  `)}
`

const Gradient2 = styled(Gradient)`
  background: linear-gradient(to right, #FFF 18.67%, rgba(255 255 255 / 0%) 100%);
  right: unset;

  ${fresponsive(css`
    left: -18px;
  `)}
`
