import Selector from "components/Buttons/Selector"
import Icon, { type IconType } from "components/Icon"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import Hipaa from "images/global/hipaa.png"
import Soc2 from "images/global/soc-2.png"
import Background from "images/home/industry-background.png"
import AutoAnimate from "library/AutoAnimate"
import UniversalImage from "library/UniversalImage"
import { fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import useMedia from "library/useMedia"
import { useState } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"
import ProgressGroup from "./ProgressGroup"

export default function Industry() {
	const [activeIndex, setActiveIndex] = useState(0)
	const desktop = useMedia(true, true, false, false)

	const data: Queries.IndustryQuery = useStaticQuery(graphql`
    query Industry {
      allHomeIndustryJson {
        nodes {
          title
          text
          hipaa
          soc2
          assertiveness
          humorLevel
          icon
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          agent {
            name
            country
            avatar {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

	const tabs = data.allHomeIndustryJson.nodes.map((item, index) => {
		return (
			<Selector
				key={item.title}
				type="button"
				active={activeIndex === index}
				onClick={() => setActiveIndex(index)}
			>
				{item.title}
			</Selector>
		)
	})

	const widgets = data.allHomeIndustryJson.nodes.map((item, index) => {
		return <Widget key={item.title} className="widget" id={`widget-${index}`} />
	})

	const widgets2 = data.allHomeIndustryJson.nodes.map((item, index) => {
		return (
			<Widget2 key={item.title} className="widget-2" id={`widget-2-${index}`} />
		)
	})

	useAnimation(
		() => {
			const tl = gsap.timeline()

			tl.to(
				".widget",
				{
					xPercent: -120,
				},
				0,
			)
			tl.to(
				".widget-2",
				{
					xPercent: 120,
				},
				0,
			)
			tl.to(
				[`#widget-${activeIndex}`, `#widget-2-${activeIndex}`],
				{
					xPercent: 0,
				},
				1,
			)
		},
		[activeIndex],
		{
			kill: true,
		},
	)

	return (
		<Wrapper>
			<Inner>
				<Top>
					<Title>
						The future of customer <span>interaction.</span>
					</Title>
					<Buttons>{tabs}</Buttons>
				</Top>
				<Bottom>
					<Left>
						<Assertiveness>
							<ProgressGroup
								progress={
									data.allHomeIndustryJson.nodes[activeIndex]?.assertiveness
								}
								title="Assertiveness"
								text="Use softer suggestions"
							/>
							<ProgressGroup
								progress={
									data.allHomeIndustryJson.nodes[activeIndex]?.humorLevel
								}
								title="Humor Level"
								text="Balanced humor and professionalism"
							/>
						</Assertiveness>
						<Agent>
							<AutoAnimate>
								<Avatar
									key={activeIndex}
									image={
										data.allHomeIndustryJson.nodes[activeIndex]?.agent?.avatar
									}
									alt={
										data.allHomeIndustryJson.nodes[activeIndex]?.agent?.name ??
										""
									}
								/>
							</AutoAnimate>
							<AutoAnimate>
								<Name key={activeIndex}>
									{data.allHomeIndustryJson.nodes[activeIndex]?.agent?.country}
								</Name>
							</AutoAnimate>
							<Line />
							<AutoAnimate>
								<Name key={activeIndex}>
									{data.allHomeIndustryJson.nodes[activeIndex]?.agent?.name}
								</Name>
							</AutoAnimate>
						</Agent>
						<AutoAnimate
							duration={1.25}
							toParameters={{
								scale: 0.9,
								opacity: 0,
								yPercent: 0,
								duration: 0.5,
							}}
							fromParameters={{
								scale: 0.9,
								opacity: 0,
								yPercent: 0,
								duration: 0.5,
								delay: 0.75,
							}}
						>
							<Image
								key={activeIndex}
								image={data.allHomeIndustryJson.nodes[activeIndex]?.image}
								alt={data.allHomeIndustryJson.nodes[activeIndex]?.title ?? ""}
							/>
						</AutoAnimate>
						{!desktop && <Widget />}
						{desktop && (
							<LogosWrapper>
								<AutoAnimate
									alignment="center"
									fromParameters={{ yPercent: 110 }}
									toParameters={{ yPercent: -110 }}
								>
									<Logos
										key={data.allHomeIndustryJson.nodes[activeIndex]?.title}
									>
										{data.allHomeIndustryJson.nodes[activeIndex]?.hipaa && (
											<Logo src={Hipaa} alt="Hipaa Compliant" />
										)}

										{data.allHomeIndustryJson.nodes[activeIndex]?.soc2 && (
											<Logo src={Soc2} alt="Soc 2 Compliant" />
										)}
									</Logos>
								</AutoAnimate>
							</LogosWrapper>
						)}
					</Left>
					<Right>
						<TextContent>
							<AutoAnimate>
								<StyledIcon
									key={activeIndex}
									name={
										data.allHomeIndustryJson.nodes[activeIndex]
											?.icon as IconType
									}
								/>
							</AutoAnimate>
							<AutoAnimate>
								<SubTitle
									key={data.allHomeIndustryJson.nodes[activeIndex]?.title}
								>
									{data.allHomeIndustryJson.nodes[activeIndex]?.title}
								</SubTitle>
							</AutoAnimate>
							<AutoAnimate>
								<Text key={data.allHomeIndustryJson.nodes[activeIndex]?.title}>
									{data.allHomeIndustryJson.nodes[activeIndex]?.text}
								</Text>
							</AutoAnimate>
						</TextContent>
						{!desktop && (
							<LogosWrapper>
								<AutoAnimate
									alignment="center"
									fromParameters={{ yPercent: 110 }}
									toParameters={{ yPercent: -110 }}
								>
									<Logos
										key={data.allHomeIndustryJson.nodes[activeIndex]?.title}
									>
										{data.allHomeIndustryJson.nodes[activeIndex]?.hipaa && (
											<Logo src={Hipaa} alt="Hipaa Compliant" />
										)}

										{data.allHomeIndustryJson.nodes[activeIndex]?.soc2 && (
											<Logo src={Soc2} alt="Soc 2 Compliant" />
										)}
									</Logos>
								</AutoAnimate>
							</LogosWrapper>
						)}
						{desktop && (
							<WidgetWrapper>
								{widgets}
								{widgets2}
							</WidgetWrapper>
						)}
					</Right>
				</Bottom>
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  overflow: clip;
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    height: 1015px;
    padding: 36px 156px 171px;
    gap: 47px;
  `)}

  ${ftablet(css`
    height: 1172px;
    padding: 85px 68px 121px;
    gap: 30px;
  `)}
`

const Top = styled.div`
  display: flex;

  ${fresponsive(css`
    gap: 63px;
  `)}

  ${ftablet(css`
    flex-direction: column;
    gap: 48px;
  `)}
`

const Title = styled.h2`
  ${textStyles.h4}
  color: ${colors.black};

  span {
    ${transparentText}
    background-image: ${gradients.greenBlue};
  }

  ${fresponsive(css`
    width: 395px;
  `)}

  ${ftablet(css`
    ${textStyles.h3}
    width: 95%;
  `)}
`

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${fresponsive(css`
    gap: 18px;
    width: 552px;
  `)}

  ${ftablet(css`
    width: 650px;
  `)}
`

const Bottom = styled.div`
  display: flex;
  align-items: flex-start;

  ${fresponsive(css`
    gap: 24px;
  `)}

  ${ftablet(css`
    flex-direction: row-reverse;
    gap: 52px;
  `)}
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;

  ${fresponsive(css`
    gap: 24px;
  `)}
`

const Image = styled(UniversalImage)`
  background-color: ${colors.gray800};

  ${fresponsive(css`
    width: 528px;
    height: 375px;
    border-radius: 24px;
  `)}

  ${ftablet(css`
    width: 480px;
    height: 494px;
  `)}
`

const Card = styled.div`
  background: ${gradients.surface1};

  ${fresponsive(css`
    border: 2px solid ${colors.gray200};
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 18px 42px 0 rgba(89 89 89 / 4%);
  `)}
`

const Assertiveness = styled(Card)`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    width: 240px;
    height: 190px;
    top: 139px;
    left: -72px;
    gap: 24px;
  `)}

  ${ftablet(css`
    top: 262px;
    left: unset;
    right: -24px;
  `)}
`

const Agent = styled(Card)`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;

  ${fresponsive(css`
    width: 240px;
    height: 58px;
    top: 342px;
    left: -72px;
    padding: 12px 24px;
    gap: 10px;
  `)}

  ${ftablet(css`
    top: 464px;
    right: -24px;
    left: unset;
  `)}
`

const LogosWrapper = styled(Card)`
  ${fresponsive(css`
    border-radius: 24px;
  `)}
`

const Logos = styled.div`
  display: flex;
  width: max-content;

  ${fresponsive(css`
    gap: 24px;
  `)}
`

const Right = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    gap: 48px;
  `)}

  ${ftablet(css`
    padding-top: 47px;
    gap: 32px;
    align-items: flex-start;
  `)}
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    gap: 16px;
    padding-left: 24px;
  `)}

  ${ftablet(css`
    padding-left: 0;
  `)}
`

const SubTitle = styled.h6`
  ${textStyles.sh1}
  color: ${colors.black};
  width: fit-content;
  white-space: nowrap;

  ${fresponsive(css`
    width: 200px;
  `)}
`

const Text = styled.p`
  ${textStyles.bodyS}
  color: ${colors.gray800};
  overflow: clip;

  ${fresponsive(css`
    width: 462px;
    height: 95px;
  `)}

  ${ftablet(css`
    ${textStyles.bodyR}
    width: 378px;
    height: 184px;
  `)}
`

const WidgetWrapper = styled.div`
  background-color: ${colors.gray100};
  position: relative;
  background-image: url(${Background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  overflow: clip;

  ${fresponsive(css`
    border-radius: 24px;
    width: 576px;
    height: 375px;
  `)}
`

const Widget = styled(Card)`
  position: absolute;

  ${fresponsive(css`
    width: 288px;
    height: 133px;
    top: 24px;
    left: 24px;
  `)}

  ${ftablet(css`
    top: -30px;
    left: -96px;
    z-index: 2;
  `)}
`

const Widget2 = styled(Widget)`
  top: unset;
  left: unset;

  ${fresponsive(css`
    bottom: 24px;
    right: 24px;
  `)}
`

const Logo = styled.img`
  ${fresponsive(css`
    width: 42px;
    height: 42px;
  `)}
`

const Avatar = styled(UniversalImage)`
  border-radius: 99vw;

  ${fresponsive(css`
    width: 34px;
    height: 34px;
  `)}
`

const Name = styled.span`
  ${textStyles.bodyR}
  color: ${colors.black};
`

const Line = styled.div`
  width: 1px;
  background-color: ${colors.gray300};

  ${fresponsive(css`
    height: 12px;
  `)}
`

const StyledIcon = styled(Icon)`
  display: none;

  path,
  circle {
    fill: ${colors.gray500};
  }

  ${ftablet(css`
    display: flex;
    width: 30px;
    height: 30px;
  `)}
`
