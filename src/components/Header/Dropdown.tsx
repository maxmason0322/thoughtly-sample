import * as Popover from "@radix-ui/react-popover"
import Link from "components/Buttons/Link"
import Icon from "components/Icon"
import { fresponsive } from "library/fullyResponsive"
import { useState } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import links from "utils/links"

export default function Dropdown({ children }: { children: string }) {
	const [open, setOpen] = useState(true)

	return (
		<>
			<Blur />
			<Popover.Root open={open} onOpenChange={setOpen}>
				{open ? "yes" : "no"}
				<Popover.Anchor />
				<Popover.Trigger>
					<Link type="button" icon="chevDown">
						{children}
					</Link>
				</Popover.Trigger>
				<Content>
					<Column>
						<SubLink>
							<Icon name="integration" />
							<Link to={links.agentAccelerator}>About</Link>
						</SubLink>
						<SubLink>
							<Icon name="integration" />
							<Link to={links.agentAccelerator}>About</Link>
						</SubLink>
						<SubLink>
							<Icon name="integration" />
							<Link to={links.agentAccelerator}>About</Link>
						</SubLink>
					</Column>
					<Column>
						<SubLink>
							<Icon name="integration" />
							<Link to={links.agentAccelerator}>About</Link>
						</SubLink>
						<SubLink>
							<Icon name="integration" />
							<Link to={links.agentAccelerator}>About</Link>
						</SubLink>
					</Column>
				</Content>
			</Popover.Root>
		</>
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

const Wrapper = styled.div`
  position: relative;
`

const Blur = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 150vh;
  top: 0;
  left: 0;
  background: rgba(219 219 219 / 15%);
  backdrop-filter: blur(7px);
  pointer-events: none;
  border: 1px solid red;
`

const Content = styled(Popover.Content)`
  background: ${gradients.surface1};
  
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
