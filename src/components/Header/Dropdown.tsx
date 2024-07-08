import * as Popover from "@radix-ui/react-popover"
import Link from "components/Buttons/Link"
import Icon from "components/Icon"
import { graphql, useStaticQuery } from "gatsby"
import UniversalLink from "library/Loader/UniversalLink"
import { useScrollLock } from "library/Scroll"
import UniversalImage from "library/UniversalImage"
import { eases } from "library/eases"
import { fresponsive } from "library/fullyResponsive"
import { useBetterThrottle } from "library/useBetterThrottle"
import { useState } from "react"
import styled, { css, keyframes } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"
import links from "utils/links"

const duration = 200

export default function Dropdown({ children }: { children: string }) {
	const [rawOpen, setOpen] = useState(false)
	// throttle the state change to allow the animation to finish
	const open = useBetterThrottle(rawOpen, duration)
	// lock the scroll when the dropdown is open
	useScrollLock("lock", open)

	const image: Queries.DropdownQuery = useStaticQuery(graphql`
		query Dropdown {
			file(relativePath: { eq: "global/DropdownFeature.png" }) {
				childImageSharp{
					gatsbyImageData
				}
			}
		}
		`)

	return (
		<div onMouseLeave={() => setOpen(false)} onMouseEnter={() => setOpen(true)}>
			<Blur style={{ opacity: open ? 1 : 0 }} />
			<Popover.Root open={open} onOpenChange={setOpen}>
				<Anchor>
					<Popover.Trigger asChild>
						<Link type="button" icon="chevDown">
							{children}
						</Link>
					</Popover.Trigger>
				</Anchor>
				<Content align="start">
					<Column>
						<SubLink>
							<Icon name="integration" />
							<Link to={links.agentAccelerator}>About</Link>
						</SubLink>
						<SubLink>
							<Icon name="integration" />
							<Link to={links.agentAccelerator}>Careers</Link>
						</SubLink>
						<SubLink>
							<Icon name="integration" />
							<Link to={links.agentAccelerator}>Contact</Link>
						</SubLink>
					</Column>
					<Column>
						<SubLink>
							<Icon name="integration" />
							<Link to={links.agentAccelerator}>Blog</Link>
						</SubLink>
						<SubLink>
							<Icon name="integration" />
							<Link to={links.agentAccelerator}>News</Link>
						</SubLink>
					</Column>
					<Column>
						<ColumnTitle>Featured</ColumnTitle>
						<Card to={links.agentAccelerator}>
							<UniversalImage
								image={image.file}
								alt="Man on a phone, retro style"
							/>
							<CardTitle>
								Thoughtly announces $2.5M in funding from a16
								<Icon name="chev" />
							</CardTitle>
						</Card>
					</Column>
				</Content>
			</Popover.Root>
		</div>
	)
}

const slideIn = keyframes`
	from {
		translate: 0 100%;
		opacity: 0;
	}
	to {
		translate: 0 0;
		opacity: 1;
	}
`

const slideOut = keyframes`
	from {
		translate: 0 0;
		opacity: 1;
	}
	to {
		translate: 0 100%;
		opacity: 0;
	}
`

const Anchor = styled(Popover.Anchor)`
	${fresponsive(css`
		padding-bottom: 6px;
		margin-bottom: -6px;
		padding-right: 100px;
	`)}
`

const Blur = styled.div`
	position: absolute;
	width: 100%;
	height: 150vh;
	top: 0;
	left: 0;
	background: rgba(219 219 219 / 15%);
	backdrop-filter: blur(7px);
	pointer-events: none;
	z-index: -1;
	transition: opacity ${duration}ms;
`

const Content = styled(Popover.Content)`
	background: ${gradients.surface1};
	display: flex;

	${fresponsive(css`
		border: 1.5px solid ${colors.gray300};
		padding: 20px 24px;
		gap: 36px;
		border-radius: 18px;
	`)}

	&[data-state="open"] {
		animation: ${slideIn} ${duration}ms ${eases.cubic.out};
	}

	&[data-state="closed"] {
		animation: ${slideOut} ${duration}ms ${eases.cubic.in};
	}
`

const Column = styled.div`
	display: flex;
	flex-direction: column;

	${fresponsive(css`
		gap: 12px;
	`)}
`

const SubLink = styled.div`
	display: flex;
	align-items: center;

	${fresponsive(css`
		gap: 4px;

		svg {
			width: 16px;
			height: 16px;
		}
	`)}
`

const ColumnTitle = styled.h1`
	${textStyles.t2};
	color: ${colors.gray500};
	${fresponsive(css`
		margin-left: 6px;
		margin-bottom: -4px;
	`)}
`

const Card = styled(UniversalLink)`
	${fresponsive(css`
		width: 160px;
		height: 126px;
		border-radius: 10px;
		isolation: isolate;
		overflow: clip;
	`)}

	display: grid;
	place-items: end center;

	& > * {
		grid-area: 1 / 1 / 2 / 2;
	}
`

const CardTitle = styled.h2`
	${textStyles.bodyXS};
	color: ${colors.white};

	${fresponsive(css`
		padding: 9px;
		background: rgb(98 98 98 / 50%);
		backdrop-filter: blur(3px);

		svg {
			display: inline-block;
			height: 12px;
			margin-left: 2px;
			translate: 0 20%;
		}
	`)}
`
