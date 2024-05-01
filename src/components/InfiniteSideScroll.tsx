import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import { type ReactNode, useCallback, useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"

gsap.registerPlugin(ScrollToPlugin)

export default function InfiniteSideScroll({
	children,
	trackGap,
	offsetLeft = 0,
}: {
	children: ReactNode[]
	trackGap: number
	offsetLeft?: number
}) {
	const [scrollOffset, setScrollOffset] = useState(0)
	const [trackEl, setTrackEl] = useState<HTMLDivElement | null>(null)
	const [trackInnerEl, setTrackInnerEl] = useState<HTMLDivElement | null>(null)
	const activeIndex = useRef(0)
	const [childWidth, setChildWidth] = useState(0)

	useEffect(() => {
		if (!trackInnerEl) return
		const child = trackInnerEl.children[0]?.getBoundingClientRect()
		setChildWidth(child?.width ?? 0)
	}, [trackInnerEl])

	const cardsLength = children.length

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

	const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
		if (!e.target) return
		const { scrollLeft } = e.target as HTMLDivElement

		const index = (scrollLeft - scrollOffset) / (childWidth + trackGap)
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
		<Track
			ref={(ref) => setTrackEl(ref)}
			onScroll={handleScroll}
			offsetLeft={offsetLeft}
		>
			<Gradient2 />
			<TrackInner ref={(ref) => setTrackInnerEl(ref)} $gap={trackGap}>
				{children}
				{children}
				{children}
			</TrackInner>
			<Gradient />
		</Track>
	)
}

const Track = styled.div<{ offsetLeft: number }>`
  overflow-x: scroll;
  display: flex;
  position: relative;
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  scrollbar-width: none;
  transform: translateZ(0.01);

  &::-webkit-scrollbar {
    display: none;
  }

  ${({ offsetLeft }) =>
		fresponsive(css`
      padding: 50px 0 50px ${offsetLeft}px;
      margin: -50px 0;
      width: 1440px;
    `)}

  ${ftablet(css`
    width: 1024px;
  `)}

  ${fmobile(css`
    width: 375px;
  `)}
`

const TrackInner = styled.div<{ $gap: number }>`
  position: relative;
  display: flex;
  width: fit-content;

  ${({ $gap }) =>
		fresponsive(css`
      gap: ${$gap}px;
      padding: 0 ${$gap}px;
    `)}
`

const Gradient = styled.div`
  background: linear-gradient(
    to left,
    #fff 18.67%,
    rgba(255 255 255 / 0%) 100%
  );
  position: fixed;
  z-index: 3;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;

  ${fresponsive(css`
    width: 120px;
    right: -18px;
  `)}

  ${fmobile(css`
    width: 60px;
  `)}
`

const Gradient2 = styled(Gradient)`
  background: linear-gradient(
    to right,
    #fff 18.67%,
    rgba(255 255 255 / 0%) 100%
  );
  right: unset;

  ${fresponsive(css`
    left: -18px;
  `)}
`
