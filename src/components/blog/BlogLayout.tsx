import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePinType } from "library/Scroll"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useParamState } from "library/useParamState"
import { getResponsivePixels } from "library/viewportUtils"
import { type ReactNode, useRef } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles, { transparentText } from "styles/text"

import Kicker from "components/Kicker"
import { desktopBreakpoint } from "styles/media"
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
			<BlogInner>
				<Header>
					<Kicker icon="phone" iconLeft iconColor={colors.green400}>
						Blog
					</Kicker>
					<h1>
						Thoughts by <span>Thoughtly</span>
					</h1>
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
			</BlogInner>
		</BlogWrapper>
	)
}

const BlogWrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;

  ${ftablet(css`
    width: 884px;
  `)}

  ${fmobile(css`
    width: 318px;
  `)}
`

const BlogInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${desktopBreakpoint}px;
  background-color: ${colors.white};

  ${fresponsive(css`
    padding: 134px 110px 0;
  `)}
`

const Header = styled.div`
  ${textStyles.h5};
  background-color: ${colors.gray100};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  span {
    ${transparentText}
    background-image: ${gradients.greenBlue};
  }

  ${fresponsive(css`
    border-radius: 24px;
    gap: 10px;
    padding: 32px 48px 46px;
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

const Description = styled.div`
  ${textStyles.bodyS};
  color: ${colors.gray700};

  ${fresponsive(css`
    width: 350px;
    text-align: left;
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
