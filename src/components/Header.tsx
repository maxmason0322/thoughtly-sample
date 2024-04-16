import PrimaryButton from "components/Buttons/Primary"
import Primary from "components/Buttons/Primary"
import gsap from "gsap"
import { ReactComponent as LogoSVG } from "images/global/logo.svg"
import {
	registerTransition,
	unregisterTransition,
} from "library/Loader/TransitionUtils"
import { fresponsive } from "library/fullyResponsive"
import { useEffect, useRef } from "react"
import styled, { css } from "styled-components"
import { desktopBreakpoint } from "styles/media"
import links from "utils/links"
import Link from "./Buttons/Link"

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
				<Left>
					<StyledLogoSVG />
					<Links>
						<Link to={links.todo}>Industries</Link>
						<Link to={links.todo}>Features</Link>
						<Link to={links.todo}>Integrations</Link>
						<Link to={links.todo}>Pricing</Link>
						<Link to={links.todo}>Support</Link>
					</Links>
				</Left>
				<Right>
					<PrimaryButton variant="secondary" to={links.todo}>
						Sign In
					</PrimaryButton>
					<PrimaryButton icon="chev" to={links.todo}>
						Get Started
					</PrimaryButton>
				</Right>
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
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	${fresponsive(css`
		padding: 32px 156px 0;
	`)}
`

const StyledLogoSVG = styled(LogoSVG)`
	height: auto;
	
	${fresponsive(css`
		width: 138px;
	`)}
`

const Left = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	${fresponsive(css`
		gap: 36px;
	`)}
`

const Right = styled.div`
	display: flex;
	flex-direction: row;

	${fresponsive(css`
		gap: 16px;
	`)}
`

const Links = styled.div`
	display: flex;
	flex-direction: row;

	${fresponsive(css`
		gap: 24px;
	`)}
`
