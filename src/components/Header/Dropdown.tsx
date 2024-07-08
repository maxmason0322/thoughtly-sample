import * as Popover from "@radix-ui/react-popover"
import Link from "components/Buttons/Link"
import Icon from "components/Icon"
import { useScrollLock } from "library/Scroll"
import { fresponsive } from "library/fullyResponsive"
import { useState } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"
import links from "utils/links"

export default function Dropdown({ children }: { children: string }) {
	const [open, setOpen] = useState(false)
	useScrollLock("lock", open)

	return (
		<div>
			<Blur style={{ opacity: open ? 1 : 0 }} />
			<Popover.Root open={open} onOpenChange={setOpen}>
				<Popover.Anchor>
					<Popover.Trigger asChild>
						<Link type="button" icon="chevDown">
							{children}
						</Link>
					</Popover.Trigger>
				</Popover.Anchor>
				<Content align="start" sideOffset={5}>
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
						<Card>
							<img src="https://picsum.photos/160/126" alt="temp" />
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

	//return (
	// 	<Wrapper>
	// 		<Portal.Root
	// 			asChild
	// 			container={
	// 				isBrowser
	// 					? (document.querySelector("#header") as HTMLElement)
	// 					: undefined
	// 			}
	// 		>
	// 			<Blur ref={blurRef} />
	// 		</Portal.Root>
	// 		<Link
	// 			type="button"
	// 			icon="chevDown"
	// 			onClick={() => setOpen((val) => !val)}
	// 		>
	// 			{children}
	// 		</Link>
	// 		<Content ref={contentRef}>
	// 		</Content>
	// 	</Wrapper>
	// )
}

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
	transition: opacity 1s;
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

const Card = styled.div`
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
		}
	`)}
`
