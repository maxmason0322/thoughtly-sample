import Icon, { type IconType } from "components/Icon"
import Widget from "components/Widget"
import { ReactComponent as LineSVG } from "images/home/industries-line.svg"
import AutoAnimate from "library/AutoAnimate"
import { ScreenContext } from "library/ScreenContext"
import { DesktopOnly, TabletOnly } from "library/breakpointUtils"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import { useContext } from "react"
import styled, { css } from "styled-components"
import { Dots } from "styles/background"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"
import ProgressGroup from "./ProgressGroup"

interface File {
	name: string
	icon: string
}

interface Assertiveness {
	val: number
	text: string
}

interface HumorLevel {
	val: number
	text: string
}

interface Agent {
	name: string
	country: string
	avatar: string
}

interface Data {
	title: string
	text: string
	assertiveness: Assertiveness
	humorLevel: HumorLevel
	files: File[]
	image: string
	icon: string
	agent: Agent
	widgetOne: {
		text: JSX.Element
	}
	widgetTwo: {
		text: JSX.Element
		bottomConnectors: string[]
	}
}

export default function IndustryCard({
	data,
	activeIndex,
}: {
	data: Data[]
	activeIndex: number
}) {
	const widgets = data.map((item, index) => {
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
				{item.widgetOne.text}
			</Widget1>
		)
	})

	const widgets2 = data.map((item, index) => {
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
				{item.widgetTwo?.text}
			</Widget2>
		)
	})

	const files = data[activeIndex]?.files?.map((item) => {
		if (!item) return null
		return (
			<File key={item.name}>
				{item.icon && <FileIcon name={item.icon as IconType} />}
				<FileName>{item.name}</FileName>
				<Trash name="trash" />
			</File>
		)
	})

	const { fullWidth, desktop, mobile } = useContext(ScreenContext)

	return (
		<Bottom className="card">
			<Left>
				<Assertiveness>
					<ProgressGroup
						progress={data[activeIndex]?.assertiveness.val}
						title="Assertiveness"
						index={activeIndex}
						text={data[activeIndex]?.assertiveness.text}
					/>
					<ProgressGroup
						progress={data[activeIndex]?.humorLevel.val}
						title="Humor Level"
						index={activeIndex}
						text={data[activeIndex]?.humorLevel.text}
					/>
				</Assertiveness>

				<Agent>
					<AvatarWrapper>
						<AutoAnimate
							fromParameters={{ yPercent: 110 }}
							toParameters={{ yPercent: -110 }}
						>
							<Avatar
								key={activeIndex}
								src={data[activeIndex]?.agent?.avatar}
								alt={data[activeIndex]?.agent?.name ?? ""}
							/>
						</AutoAnimate>
					</AvatarWrapper>
					<NameWrapper>
						<AutoAnimate>
							<Name key={data[activeIndex]?.agent?.country}>
								{data[activeIndex]?.agent?.country}
							</Name>
						</AutoAnimate>
					</NameWrapper>
					<Line />
					<NameWrapper>
						<AutoAnimate>
							<Name key={data[activeIndex]?.agent?.name}>
								{data[activeIndex]?.agent?.name}
							</Name>
						</AutoAnimate>
					</NameWrapper>
				</Agent>

				<ImageWrapper>
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
							src={data[activeIndex]?.image}
							alt={data[activeIndex]?.title ?? ""}
						/>
					</AutoAnimate>
				</ImageWrapper>

				<TabletOnly>
					<TabletWidgetWrapper>
						<AutoAnimate>
							<Widget1
								key={activeIndex}
								title="Start"
								icon="play"
								iconColor={colors.green400}
							>
								{data[activeIndex]?.widgetOne?.text}
							</Widget1>
						</AutoAnimate>
					</TabletWidgetWrapper>
				</TabletOnly>

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
					<IconTitle>
						<div>
							<AutoAnimate>
								<SubTitle key={data[activeIndex]?.title}>
									{data[activeIndex]?.title}
								</SubTitle>
							</AutoAnimate>
						</div>
					</IconTitle>
					<div>
						<AutoAnimate>
							<Text key={data[activeIndex]?.text}>
								{data[activeIndex]?.text}
							</Text>
						</AutoAnimate>
					</div>
				</TextContent>
				<DesktopWidgetsWrapper>
					<StyledDots />
					<Connector />
					{widgets}
					{widgets2}
				</DesktopWidgetsWrapper>
			</Right>
		</Bottom>
	)
}

const NameWrapper = styled.div`
	${fresponsive(css`
		height: 18px;
	`)}
`

const IconTitle = styled.div`
	display: flex;
	align-items: center;

	${fresponsive(css`
		gap: 15px;
	`)}

	${ftablet(css`
		flex-direction: column;
		align-items: flex-start;
	`)}

  ${fmobile(css`
		flex-direction: column;
		align-items: flex-start;
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
		border-radius: 18px;
		background: ${colors.beige300};
		border: 1.5px solid #d8d8d8;
		flex-direction: column;
		gap: 100px;
		padding: 28px;
		padding-top: 42px;
	`)}
`

const Left = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	position: relative;
	width: 100%;

	${fresponsive(css`
		gap: 24px;
	`)}

	${fmobile(css`
		align-items: center;
	`)}
`

const Image = styled.img`
	background-color: ${colors.gray800};
	object-fit: cover;

	${fresponsive(css`
		width: 528px;
		height: 375px;
		border-radius: 24px;
	`)}

	${ftablet(css`
		width: 460px;
		height: 494px;
	`)}

  ${fmobile(css`
		width: 224px;
		height: 224px;
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
		right: -36px;
		bottom: -110px;
		left: unset;
		top: unset;
		scale: 0.71;
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

  ${fmobile(css`
		position: absolute;
		top: -29px;
		left: -40px;
		z-index: 2;
		scale: 0.71;
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
		display: none;
	`)}
`

const FilesInner = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background-color: ${colors.gray100};

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
		height: 105px;
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
	${textStyles.sh4}
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
		fill: #d9d9d9;
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
		align-items: flex-end;
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
		width: 262px;
	`)}
`

const SubTitle = styled.h1`
	${textStyles.sh1}
	color: ${colors.black};
	width: fit-content;
	white-space: nowrap;

	${fresponsive(css`
		width: 200px;
	`)}

	${fmobile(css`
		${textStyles.sh2};
	`)}
`

const Text = styled.div`
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
		width: 250px;
		height: 169px;
	`)}
`

const DesktopWidgetsWrapper = styled(DesktopOnly)`
	background-color: ${colors.beige300};
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
		background-position: 10px 18px;
	`)}
`

const TabletWidgetWrapper = styled.div`
	position: absolute;

	${ftablet(css`
		top: -30px;
		left: -40px;
		z-index: 2;
	`)}
`

const Widget1 = styled(Widget)`
	position: absolute;
	transform: scale(0.75);
	transform-origin: top left;

	${fresponsive(css`
		height: 196px;
		top: 19px;
		left: 22px;
	`)}

	${ftablet(css`
		position: relative;
		top: unset;
		left: unset;
	`)}
`

const Widget2 = styled(Widget1)`
	top: unset;
	left: unset;
	transform-origin: bottom right;

	${fresponsive(css`
		bottom: 19px;
		right: 22px;
	`)}
`

const Avatar = styled.img`
	border-radius: 99vw;

	${fresponsive(css`
		width: 34px;
		height: 34px;
	`)}
`

const Name = styled.span`
	${textStyles.sh3}
	color: ${colors.black};
`

const Line = styled.div`
	width: 1px;
	background-color: ${colors.gray300};

	${fresponsive(css`
		height: 12px;
	`)}
`

const Connector = styled(LineSVG)`
	position: absolute;

	${fresponsive(css`
		width: 227px;
		height: 50px;
		left: 166px;
		top: 163px;
	`)}
`

const ImageWrapper = styled.div`
	${fresponsive(css`
		height: 375px;
	`)}

	${ftablet(css`
		height: 494px;
	`)}

	${fmobile(css`
		height: 198px;
	`)}
`

const AvatarWrapper = styled.div`
	height: 36px;
`
