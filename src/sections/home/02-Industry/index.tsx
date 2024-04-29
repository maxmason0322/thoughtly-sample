import Selector from "components/Buttons/Selector"
import Icon, { type IconType } from "components/Icon"
import Widget from "components/Widget"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import DrawSVGPlugin from "gsap/DrawSVGPlugin"
import { ReactComponent as LineSVG } from "images/home/industries-line.svg"
import AutoAnimate from "library/AutoAnimate"
import { ScreenContext } from "library/ScreenContext"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useContext, useState } from "react"
import styled, { css } from "styled-components"
import { Dots } from "styles/background"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"
import ProgressGroup from "./ProgressGroup"

gsap.registerPlugin(DrawSVGPlugin)

export default function Industry() {
	const [activeIndex, setActiveIndex] = useState(0)
	const { fullWidth, desktop, tablet, mobile } = useContext(ScreenContext)

	const data: Queries.IndustryQuery = useStaticQuery(graphql`
    query Industry {
      allHomeIndustryJson {
        nodes {
          title
          text
          files {
            name
            icon
          }
          widgetOne {
            text
          }
          widgetTwo {
            text
            bottomConnectors
          }
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
		return (
			<Widget1
				key={item.title}
				className="widget"
				id={`widget-${index}`}
				title="Start"
				icon="play"
				iconColor={colors.green400}
				bottomConnectors={[""]}
			>
				{item.widgetOne?.text && <p>"{item.widgetOne.text}"</p>}
			</Widget1>
		)
	})

	const widgets2 = data.allHomeIndustryJson.nodes.map((item, index) => {
		const bottomConnectors = item.widgetTwo?.bottomConnectors?.map((item) =>
			item?.replace("\\n", "\n"),
		)

		return (
			<Widget2
				key={item.title}
				className="widget-2"
				id={`widget-2-${index}`}
				title="Speak"
				icon="speak"
				iconColor="#0085E5"
				topConnectors={[""]}
				bottomConnectors={bottomConnectors}
			>
				{item.widgetTwo?.text && <p>"{item.widgetTwo.text}"</p>}
			</Widget2>
		)
	})

	const files = data.allHomeIndustryJson.nodes[activeIndex]?.files?.map(
		(item) => {
			if (!item) return null
			return (
				<File key={item.name}>
					{item.icon && <FileIcon name={item.icon as IconType} />}
					<FileName>{item.name}</FileName>
					<Trash name="trash" />
				</File>
			)
		},
	)

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
			tl.from(
				"#industries-line",
				{
					drawSVG: "0",
				},
				1.5,
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
		<Wrapper id="industries">
			<Inner>
				<Top>
					<Title>
						The future of customer <span>interaction.</span>
					</Title>
					{!mobile && <Buttons>{tabs}</Buttons>}
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
						{!mobile && (
							<Agent>
								<AutoAnimate>
									<Avatar
										key={activeIndex}
										image={
											data.allHomeIndustryJson.nodes[activeIndex]?.agent?.avatar
										}
										alt={
											data.allHomeIndustryJson.nodes[activeIndex]?.agent
												?.name ?? ""
										}
									/>
								</AutoAnimate>
								<AutoAnimate>
									<Name key={activeIndex}>
										{
											data.allHomeIndustryJson.nodes[activeIndex]?.agent
												?.country
										}
									</Name>
								</AutoAnimate>
								<Line />
								<AutoAnimate>
									<Name key={activeIndex}>
										{data.allHomeIndustryJson.nodes[activeIndex]?.agent?.name}
									</Name>
								</AutoAnimate>
							</Agent>
						)}
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
						{tablet && <Widget />}
						{(fullWidth || desktop || mobile) && (
							<LogosWrapper>
								<FilesInner>
									<PositionWrapper>
										<AutoAnimate
											alignment="center"
											fromParameters={{ yPercent: 110 }}
											toParameters={{ yPercent: -110 }}
										>
											<Logos key={activeIndex}>{files}</Logos>
										</AutoAnimate>
									</PositionWrapper>
								</FilesInner>
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
						{tablet && (
							<LogosWrapper>
								<FilesInner>
									<PositionWrapper>
										<AutoAnimate
											alignment="center"
											fromParameters={{ yPercent: 110 }}
											toParameters={{ yPercent: -110 }}
										>
											<Logos key={activeIndex}>{files}</Logos>
										</AutoAnimate>
									</PositionWrapper>
								</FilesInner>
							</LogosWrapper>
						)}
						{(fullWidth || desktop) && (
							<DotsWrapper>
								<StyledDots />
								<Connector />
								{widgets}
								{widgets2}
							</DotsWrapper>
						)}
					</Right>
				</Bottom>
				{mobile && <Buttons>{tabs}</Buttons>}
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

  ${fmobile(css`
    height: auto;
    padding: 85px 29px 117px;
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

  ${fmobile(css`
    ${textStyles.h6}
    width: 100%;
  `)}
`

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;

  button {
    flex-shrink: 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }

	${fresponsive(css`
		gap: 18px;
		width: 552px;
	`)}

  ${ftablet(css`
    width: 650px;
  `)}

  ${fmobile(css`
    width: 315px;
    height: 60px;
    padding: 0 8px;
    align-items: center;
    overflow-x: scroll;
    flex-wrap: nowrap;
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

  ${fmobile(css`
    flex-direction: column;
    gap: 56px;
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

  ${fmobile(css`
    width: 314px;
    height: 278px;
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

  ${fmobile(css`
    right: -23px;
    bottom: -80px;
    left: unset;
    top: unset;
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
    width: 243px;
    height: 134px;
    padding: 20px;
	`)}

  ${fmobile(css`
    position: absolute;
    top: -29px;
    left: -13px;
    z-index: 2;
  `)}
`

const FilesInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  ${fresponsive(css`
    border-radius: 14px;
    border: 1.5px dashed ${colors.gray600};
  `)}
`

const PositionWrapper = styled.div`
  position: absolute;

  ${fresponsive(css`
    top: 20px;
    left: -61px;
  `)}
`

const Logos = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    gap: 3px;
  `)}
`

const File = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.white};

  ${fresponsive(css`
    padding: 7.5px;
    border-radius: 8px;
    border: 1.5px solid #e4e4e4;
    width: 210px;
  `)}
`

const FileName = styled.span`
  ${textStyles.bodyS}
  color: ${colors.black};
`

const FileIcon = styled(Icon)`
  ${fresponsive(css`
    width: 18px;
    height: 18px;
    margin-right: 6px;
  `)}
`

const Trash = styled(Icon)`
  margin-left: auto;

  path {
    fill: #D9D9D9;
  }

  ${fresponsive(css`
    width: 12px;
    height: 12px;
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

  ${fmobile(css`
    padding-left: 12px;
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

  ${fmobile(css`
    ${textStyles.bodyS}
    width: 315px;
    height: 150px;
  `)}
`

const DotsWrapper = styled.div`
  background-color: ${colors.gray100};
  position: relative;
  overflow: clip;

  ${fresponsive(css`
    border-radius: 24px;
    width: 560px;
    height: 375px;
  `)}
`

const StyledDots = styled(Dots)`
  ${fresponsive(css`
    inset: 0;
    background-position: 10px 18px;
  `)}
`

const Widget1 = styled(Widget)`
  position: absolute;
  transform: scale(0.73);
  transform-origin: top left;

  ${fresponsive(css`
    height: 196px;
    top: 23px;
    left: 23px;
  `)}

  ${ftablet(css`
    top: -30px;
    left: -96px;
    z-index: 2;
  `)}
`

const Widget2 = styled(Widget1)`
  top: unset;
  left: unset;
  transform-origin: bottom right;

  ${fresponsive(css`
    bottom: 22px;
    right: 23px;
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

  ${fmobile(css`
    display: flex;
    width: 30px;
    height: 30px;
  `)}
`

const Connector = styled(LineSVG)`
  position: absolute;

  ${fresponsive(css`
    width: 233px;
    height: 45px;
    left: 164px;
    top: 166px;
  `)}
`
