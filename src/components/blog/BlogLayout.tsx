import { useEventListener } from "ahooks"
import { sectionScale } from "components/Footer"
import Kicker from "components/Kicker"
import { graphql, useStaticQuery } from "gatsby"
import ScrollSmoother from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ReactComponent as LogoSVG } from "images/global/logo.svg"
import { usePinType } from "library/Scroll"
import UniversalImage from "library/UniversalImage"
import { MobileOnly } from "library/breakpointUtils"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import createSmoothPin from "library/smoothPin"
import useAnimation from "library/useAnimation"
import { useParamState } from "library/useParamState"
import { getResponsivePixels } from "library/viewportUtils"
import { getBreakpoint } from "library/viewportUtils"
import { type ReactNode, useEffect, useRef } from "react"
import styled, { css } from "styled-components"
import { Dots } from "styles/background"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"
import Categories from "./Categories"
import EmailInput from "./EmailInput"
import SearchBar from "./SearchBar"

export default function BlogLayout({ children }: { children: ReactNode }) {
	const pin = useRef<HTMLDivElement>(null)
	const blogWrapperRef = useRef<HTMLDivElement | null>(null)
	const pinType = usePinType()
	const needsRefresh = useRef(false)

	const [query] = useParamState("query")
	const [category] = useParamState("category")
	const [showAll] = useParamState("showAll")

	const images: Queries.BlogLayoutQuery = useStaticQuery(graphql`
    query BlogLayout {
      widget1: file(relativePath: {eq: "blog/widget-1.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      widget2: file(relativePath: {eq: "blog/widget-2.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

	const trigger = useAnimation(() => {
		if (getBreakpoint() === "mobile") return
		return createSmoothPin({
			trigger: pin.current,
			start: () => `top-=${getResponsivePixels(120)}`,
			end: () =>
				// the height of the parent less the height of the pin
				`+=${
					(pin.current?.parentElement?.offsetHeight ?? 0) -
					(pin.current?.offsetHeight ?? 0)
				}`,
			pinType,
			pinSpacing: false,
			smoothLevel: getResponsivePixels(50),
		})
	}, [pinType])

	const onChange = () => {
		/**
		 * we need to make sure any triggers related to the virtual scroll are updated, without triggering a refresh
		 */
		ScrollSmoother.get()?.scrollTo(0, false)
		ScrollTrigger.update()
		ScrollSmoother.get()?.scrollTo(1, false)
		ScrollTrigger.update()
		needsRefresh.current = true
	}

	const onScroll = () => {
		if (window.scrollY > 1 && needsRefresh.current) {
			trigger?.refresh()
			needsRefresh.current = false
		}
	}

	useEffect(() => {
		const onPageSizeChange = () => {
			needsRefresh.current = true
		}

		const observer = new ResizeObserver(onPageSizeChange)
		observer.observe(document.body)
	}, [])

	// biome-ignore lint/correctness/useExhaustiveDependencies: intentional side effect
	useEffect(onChange, [query, category])
	useEventListener("scroll", onScroll)

	useAnimation(() => {
		sectionScale(blogWrapperRef.current)
	}, [])

	return (
		<BlogWrapper ref={blogWrapperRef}>
			<BlogInner>
				<Header>
					<StyledDots />
					<Widget1 image={images.widget1} alt="widget1" />
					<Widget2 image={images.widget2} alt="widget2" />
					<StyledKicker icon="phone" iconLeft iconColor={colors.green400}>
						Blog
					</StyledKicker>
					<h1>
						<strong>Thoughts</strong>
						<ExtraSmall>BY</ExtraSmall>
						<Logo />
					</h1>
					<Description>
						Best practices, insights, news and customer examples to help you
						deploy AI voice agents effectively.
					</Description>
				</Header>
				<Columns>
					<Left>
						<div ref={pin}>
							<SearchBar />
							<Categories />
							<EmailInput />
						</div>
					</Left>
					<Right>
						<MobileOnly>
							<Line />
							<SearchBar />
						</MobileOnly>
						{children}
					</Right>
				</Columns>
			</BlogInner>
		</BlogWrapper>
	)
}

const Widget1 = styled(UniversalImage)` 
  position: absolute;
  z-index: 2;

  ${fresponsive(css`
    border-radius: 18px;
    width: 288px;
    height: 352px;
    right: 285px;
    top: -136px;
    box-shadow: 0 18px 42px 0 rgba(89 89 89 / 8%);
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const Widget2 = styled(UniversalImage)`
  position: absolute;
  z-index: 2;

  ${fresponsive(css`
    border-radius: 18px;
    width: 221px;
    height: 331px;
    right: 41px;
    top: 71px;
    box-shadow: 0 18px 42px 0 rgba(89 89 89 / 8%);
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const BlogWrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  background-color: ${colors.beige200};
`

const StyledDots = styled(Dots)`
  z-index: 0;
`

const BlogInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${desktopBreakpoint}px;

  ${fresponsive(css`
    padding: 134px 110px 150px;
    gap: 50px;
  `)}

  ${ftablet(css`
    padding: 158px 20px 150px;
  `)}

  ${fmobile(css`
    padding: 112px 8px 100px;
    gap: 32px;
  `)}
`

const StyledKicker = styled(Kicker)`
  position: relative;
  z-index: 2;
`

const Logo = styled(LogoSVG)`
  position: absolute;
  height: auto;

  ${fresponsive(css`
    width: 105px;
    top: 56px;
    left: 34px;
  `)}
`

const ExtraSmall = styled.div`
  position: absolute;
  ${textStyles.t2}

  ${fresponsive(css`
    top: 64px;
    left: 17px;
  `)}
`

const Header = styled.div`
  ${textStyles.h5};
  background-color: ${colors.gray100};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  position: relative;
  overflow: clip;

  ${fresponsive(css`
    border-radius: 24px;
    gap: 10px;
    padding: 32px 48px 46px;
    
    h1 {
      height: 81px;
      font-size: 68.5px;
      position: relative;
      z-index: 2;
    }

    strong {
      ${transparentText}
      background-image: ${gradients.greenBlue};
      padding-right: 3px;
    }
  `)}

  ${ftablet(css`
    gap: 15px;
  `)}

  ${fmobile(css`
    ${textStyles.h6}
    gap: 18px;
    align-items: start;
    padding: 26px 0 41px 30px;
  `)}
`

const Description = styled.div`
  ${textStyles.bodyS};
  color: ${colors.gray700};
  position: relative;
  z-index: 2;

  ${fresponsive(css`
    width: 350px;
    text-align: left;
  `)}

  ${fmobile(css`
    text-align: left;
    width: 288px;
    margin-left: 0;
  `)}

  ${fmobile(css`
    width: 100%;
  `)}
`

const Line = styled.div`
  display: none;
  background-color: ${colors.gray300};

  ${fmobile(css`
    display: flex;
    width: 100%;
    height: 1px;
    margin-bottom: 32px;
  `)}
`

const Columns = styled.div`
  ${fresponsive(css`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding: 0 50px;
    width: 100%;
  `)}

  ${ftablet(css`
    gap: 58px;
  `)}

  ${fmobile(css`
    padding: 0 23px;
  `)}
`

const Left = styled.div` 
  ${fresponsive(css`
    width: 269px;
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const Right = styled.div`
  ${fresponsive(css`
    width: 768px;
  `)}
  ${ftablet(css`
    width: 560px;
  `)}
  ${fmobile(css`
    width: 100%;
  `)}
`
