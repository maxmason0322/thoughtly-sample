import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePinType } from "library/Scroll"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useParamState } from "library/useParamState"
import { getResponsivePixels } from "library/viewportUtils"
import { type ReactNode, useRef } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

import Categories from "./Categories"
import EmailInput from "./EmailInput"
import SearchBar from "./SearchBar"

export default function BlogLayout({ children }: { children: ReactNode }) {
	const pin = useRef<HTMLDivElement>(null)
	const pinType = usePinType()

	const [query] = useParamState("query")
	const [category] = useParamState("category")
	const [showAll] = useParamState("showAll")

	useAnimation(
		() => {
			ScrollTrigger.create({
				trigger: pin.current,
				start: () => `top top+=${getResponsivePixels(120)}`,
				end: () =>
					// the height of the parent less the height of the pin
					`+=${
						(pin.current?.parentElement?.offsetHeight ?? 0) -
						(pin.current?.offsetHeight ?? 0)
					}`,
				pin: true,
				pinType,
			})
		},
		[pinType],
		{
			extraDeps: [query, category, showAll],
		},
	)

	return (
		<BlogWrapper>
			<Header>
				What’s new at Campfire
				<Description>
					Product announcements, customer stories, and best practices for
					accounting and finance teams.
				</Description>
			</Header>
			<SearchBar />
			<Columns>
				<Left>
					<div ref={pin}>
						<Categories />
						<EmailInput />
					</div>
				</Left>
				<Right>{children}</Right>
			</Columns>
		</BlogWrapper>
	)
}

const BlogWrapper = styled.div`
  ${fresponsive(css`
    width: 1220px;
    margin-bottom: 108px;
  `)}

  ${ftablet(css`
    width: 884px;
  `)}

  ${fmobile(css`
    width: 318px;
  `)}
`

const Header = styled.div`
  ${textStyles.h5};
  /* border-bottom: 1px solid ${colors.charcoal200}; */
  ${fresponsive(css`
    display: flex;
    gap: 16px;
    align-items: center;
    margin-top: 172px;
    margin-bottom: 8px;
    padding-bottom: 20px;
  `)}
  ${ftablet(css`
    margin-bottom: 25px;
  `)}
  ${fmobile(css`
    flex-direction: column;
    gap: 25px;
    margin-top: 130px;
    margin-bottom: 25px;
    align-items: start;
  `)}
`

const Circle = styled.div`
  ${fresponsive(css`
    width: 30px;
    height: 30px;
    position: relative;
  `)}
  ${fmobile(css`
    display: none;
  `)}
`

const Description = styled.div`
  ${textStyles.bodyS};
  ${fresponsive(css`
    width: 350px;
    text-align: right;
    margin-left: auto;

    /* color: ${colors.charcoal500}; */
  `)}
  ${ftablet(css`
    width: 254px;
  `)}
  ${fmobile(css`
    text-align: left;
    width: 288px;
    margin-left: 0;
  `)}
`

const Columns = styled.div`
  ${fresponsive(css`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    gap: 40px;
  `)}
  ${ftablet(css`
    margin-top: 42px;
    gap: 30px;
  `)}
  ${fmobile(css`
    margin-top: 30px;
  `)}
`

const Left = styled.div`
  /* border-right: 1px solid ${colors.charcoal200}; */
 
  ${fmobile(css`
    display: none;
  `)}
`

const Right = styled.div`
  ${fresponsive(css`
    width: 884px;
  `)}
  ${ftablet(css`
    width: 585px;
  `)}
  ${fmobile(css`
    width: 318px;
  `)}
`
