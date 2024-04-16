import PrimaryButton from "components/Buttons/Primary"
import Primary from "components/Buttons/Primary"
import gsap from "gsap"
import {
	registerTransition,
	unregisterTransition,
} from "library/Loader/TransitionUtils"
import { useEffect, useRef } from "react"
import styled from "styled-components"
import { desktopBreakpoint } from "styles/media"
import links from "utils/links"
import Link from "./Buttons/Link"
import Tag from "./Tag"

export default function Header() {
	const text = useRef<HTMLDivElement>(null)

	/**
	 * this is an example of how to include arbitrary elements in a page transition
	 * the element in question is the header in this case
	 *
	 * don't use this pattern for things that occur after the page transition, like animating in content
	 */
	useEffect(() => {
		const up = () => {
			gsap.to(text.current, {
				yPercent: -100,
				duration: 1,
			})
		}

		const down = () => {
			gsap.to(text.current, {
				yPercent: 0,
				duration: 1,
			})
		}

		registerTransition("fade", {
			in: up,
			out: down,
			inDuration: 1,
			outDuration: 1,
		})

		return () => unregisterTransition("fade", [up, down])
	}, [])

	return (
		<Wrapper>
			<Inner>
				<Link tag="Coming Soon" to={links.todo}>
					Industries
				</Link>
				<Link icon="chev" to={links.todo}>
					Features
				</Link>
				<PrimaryButton variant="secondary" to={links.todo}>
					Sign In
				</PrimaryButton>
				<PrimaryButton icon="chev" to={links.todo}>
					Get Started
				</PrimaryButton>
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.header`
	width: 100%;
	display: grid;
	place-items: center;
`

const Inner = styled.div`
	width: 100%;
	max-width: ${desktopBreakpoint}px;
	padding-top: 32px;
`
