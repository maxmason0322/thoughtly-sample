import * as Popover from "@radix-ui/react-popover"
import Link from "components/Buttons/Link"
import Icon, { type IconType } from "components/Icon"
import { loadPage } from "library/Loader/TransitionUtils"
import { useScrollLock } from "library/Scroll"
import { eases } from "library/eases"
import { fresponsive } from "library/fullyResponsive"
import { useBetterThrottle } from "library/useBetterThrottle"
import { useParamState } from "library/useParamState"
import { type ReactNode, useState } from "react"
import styled, { css, keyframes } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"
import type { ContentType } from "types/aliases"
import links from "utils/links"

const duration = 200

type Sublink = {
	icon: string
	to: string
	title: string
}

export default function Dropdown({
	children,
	feature,
	sublinks,
	contentTypes,
}: {
	children: string
	feature?: ReactNode
	sublinks?: Sublink[]
	contentTypes?: ContentType[]
}) {
	const [, setContentType] = useParamState("contentType")
	const [rawOpen, setOpen] = useState(false)
	// throttle the state change to allow the animation to finish
	const open = useBetterThrottle(rawOpen, duration)
	// lock the scroll when the dropdown is open
	useScrollLock("lock", open)

	return (
		<div onMouseLeave={() => setOpen(false)} onMouseEnter={() => setOpen(true)}>
			<Blur style={{ opacity: open ? 1 : 0 }} />
			<Popover.Root open={open} onOpenChange={setOpen}>
				<Anchor>
					<Popover.Trigger asChild>
						<Link type="button">
							{children}
							<DropdownIcon
								name="chevDown"
								style={{
									scale: open ? "1 -1" : "1 1",
								}}
								color={colors.gray600}
							/>
						</Link>
					</Popover.Trigger>
				</Anchor>
				<Content
					align="start"
					style={{
						// prevent 'bouncing' when mouse is positioned below
						pointerEvents: open ? "auto" : "none",
					}}
				>
					<Column>
						{sublinks?.map((sublink) => {
							return (
								<SubLink key={sublink.title}>
									<Icon
										name={sublink.icon as IconType}
										color={colors.gray500}
									/>
									<Link to={sublink.to}>{sublink.title}</Link>
								</SubLink>
							)
						})}

						{!sublinks && (
							<>
								<SubLink>
									<Icon name="document" color={colors.gray500} />
									<Link to={links.blog}>Resources</Link>
								</SubLink>
								{contentTypes
									?.filter((contentType) => contentType !== null)
									.map((contentType) => {
										return (
											<SubLink key={contentType?.contentTypeName}>
												<Icon
													name={contentType?.iconName as IconType}
													color={colors.gray500}
												/>
												<Link
													type="button"
													onClick={() => {
														loadPage(links.blog, "fade")
															.finally(() => {
																setContentType(
																	contentType?.contentTypeName ?? "",
																)
															})
															.catch((error: string) => {
																throw new Error(error)
															})
													}}
												>
													{contentType?.contentTypeName}
												</Link>
											</SubLink>
										)
									})}
							</>
						)}
					</Column>
					{feature && (
						<Column>
							<ColumnTitle>Featured</ColumnTitle>
							{feature}
						</Column>
					)}
				</Content>
			</Popover.Root>
		</div>
	)
}

const DropdownIcon = styled(Icon)`
	${fresponsive(css`
		margin-left: 3px;
		transition: scale ${duration}ms;
		width: 12px;

		* {
			fill: #aeadad;
			stroke: #aeadad;
		}
	`)}
`

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
