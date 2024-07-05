import Kicker from "components/Kicker"
import Unmask from "components/Unmask"
import { graphql, useStaticQuery } from "gatsby"
import { ScreenContext } from "library/ScreenContext"
import UniversalImage from "library/UniversalImage"
import { fresponsive, ftablet } from "library/fullyResponsive"
import useMedia from "library/useMedia"
import { useContext } from "react"
import styled, { css } from "styled-components"
import { Dots } from "styles/background"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint, tabletBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"
import { Green } from "./01-Hero"
import Card from "./01-Hero/Card"

export default function Features() {
	const { tablet, fullWidth } = useContext(ScreenContext)

	const imageQuery = useStaticQuery(graphql`
    query FeaturesImageQuery {
      featuredImage: file(relativePath:  {
         eq: "platform/features/Features.png"
      }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      conversationEditor: file(relativePath:  {
         eq: "platform/features/ConversationEditor.png"
      }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      conversationEditorTablet: file(relativePath:  {
         eq: "platform/features/ConversationEditorTablet.png"
      }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      skills: file(relativePath:  {
         eq: "platform/features/Skills.png"
      }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      skillsTablet: file(relativePath:  {
         eq: "platform/features/SkillsTablet.png"
      }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      training: file(relativePath:  {
         eq: "platform/features/Training.png"
      }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      trainingTablet: file(relativePath:  {
         eq: "platform/features/TrainingTablet.png"
      }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      agentEditor: file(relativePath:  {
         eq: "platform/features/AgentEditor.png"
      }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      conversationInsight: file(relativePath:  {
         eq: "platform/features/ConversationInsight.png"
      }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      conversationInsightTablet: file(relativePath:  {
         eq: "platform/features/ConversationInsightTablet.png"
      }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      agentCoaching: file(relativePath:  {
         eq: "platform/features/AgentCoaching.png"
      }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      agentCoachingTablet: file(relativePath:  {
         eq: "platform/features/AgentCoachingTablet.png"
      }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      corner: file(relativePath: {
        eq: "platform/features/Corner.png"
      }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `)

	const data = [
		{
			key: 0,
			left: useMedia(60, 60, 22, 0),
			top: useMedia(458, 458, 581, 0),
			rotate: 0,
		},
		{
			key: 1,
			left: useMedia(652, 652, 470, 0),
			top: useMedia(105, 105, 220, 0),
			rotate: 180,
		},
		{
			key: 2,
			left: useMedia(1318, 1318, 942, 0),
			top: useMedia(314, 314, 500, 0),
			rotate: 180,
		},
		{
			key: 3,
			left: useMedia(60, 60, 22, 0),
			top: useMedia(805.5, 805.5, 1079, 0),
			rotate: 90,
		},
		{
			key: 4,
			left: useMedia(1318, 1318, 942, 0),
			top: useMedia(856, 856, 1051, 0),
			rotate: -90,
		},
		{
			key: 5,
			left: useMedia(60, 60, 22, 0),
			top: useMedia(1191.5, 1191.5, 1496, 0),
			rotate: 0,
		},
		{
			key: 6,
			left: useMedia(1318, 1318, 942, 0),
			top: useMedia(1178.5, 1178.5, 1524, 0),
			rotate: 180,
		},
		{
			key: 7,
			left: useMedia(60, 60, 22, 0),
			top: useMedia(1531.5, 1531.5, 1986, 0),
			rotate: 90,
		},
		{
			key: 8,
			left: useMedia(1318, 1318, 942, 0),
			top: useMedia(1535.5, 1535.5, 1958, 0),
			rotate: -90,
		},
		{
			key: 9,
			left: useMedia(60, 60, 22, 0),
			top: useMedia(1855, 1855, 2399, 0),
			rotate: 0,
		},
		{
			key: 10,
			left: useMedia(1318, 1318, 942, 0),
			top: useMedia(1848, 1848, 2427, 0),
			rotate: 180,
		},
		{
			key: 11,
			left: useMedia(60, 60, 22, 0),
			top: useMedia(2212.5, 2212.5, 2897, 0),
			rotate: 90,
		},
		{
			key: 12,
			left: useMedia(1318, 1318, 942, 0),
			top: useMedia(2187.5, 2187.5, 2869, 0),
			rotate: -90,
		},
		{
			key: 13,
			left: useMedia(653, 653, 474, 0),
			top: useMedia(2549.5, 2549.5, 3278, 0),
			rotate: -90,
		},
	]

	const unmaskParams = { delay: 0.35, duration: 0.6 }

	return (
		<Wrapper>
			<Inner>
				<DotsWrapper>
					<Dots />
				</DotsWrapper>
				{data.map((corner) => (
					<Corner
						key={corner.key}
						image={imageQuery.corner}
						alt="corner"
						$left={corner.left}
						$top={corner.top}
						$rotate={corner.rotate}
						$fullwidth={fullWidth}
					/>
				))}
				<Heading>
					<CardWrapper>
						<Card image={imageQuery.featuredImage} />
					</CardWrapper>
					<Right>
						<Unmask parameters={unmaskParams}>
							<StyledKicker>Customizable AI Phone Agents</StyledKicker>
						</Unmask>
						<Unmask parameters={unmaskParams}>
							<Title>
								<Blue>Features</Blue> from the <Green>Future.</Green>
							</Title>
						</Unmask>
					</Right>
					<EmptyCopy />
				</Heading>
				<Bottom>
					<FeatureWrapper>
						<ConversationEditorCopy>
							<Unmask parameters={unmaskParams}>
								<FeatureKicker>Inbound and outbound phone calls</FeatureKicker>
							</Unmask>
							<Unmask parameters={unmaskParams}>
								<FeatureTitle>Conversation Editor</FeatureTitle>
							</Unmask>
							<Unmask parameters={unmaskParams}>
								<FeatureDescription>
									Building AI conversations has never been easier with our
									no-code, drag and drop UI that comes pre-baked with A/B
									testing.
								</FeatureDescription>
							</Unmask>
						</ConversationEditorCopy>
						<ConversationEditorImageWrapper>
							<Unmask parameters={unmaskParams}>
								<ConversationEditorImage
									image={
										tablet
											? imageQuery.conversationEditorTablet
											: imageQuery.conversationEditor
									}
									alt="Conversation Editor"
								/>
							</Unmask>
						</ConversationEditorImageWrapper>
					</FeatureWrapper>

					<FeatureWrapper>
						<SkillsCopy>
							<Unmask parameters={unmaskParams}>
								<FeatureKicker>Thousands of Integrations</FeatureKicker>
							</Unmask>
							<Unmask parameters={unmaskParams}>
								<FeatureTitle>Skills Library</FeatureTitle>
							</Unmask>
							<Unmask parameters={unmaskParams}>
								<FeatureDescription>
									Thoughtly’s AI agents perform tasks out-of-the-box,
									integrating directly with your Calendar, CRM and back office
									tools to follow up on leads, manage claims, schedule
									appointments, and a lot more.
								</FeatureDescription>
							</Unmask>
						</SkillsCopy>
						<SkillsImageWrapper>
							<Unmask parameters={unmaskParams}>
								<SkillsImage
									image={tablet ? imageQuery.skillsTablet : imageQuery.skills}
									alt="Skills Library"
								/>
							</Unmask>
						</SkillsImageWrapper>
					</FeatureWrapper>

					<FeatureWrapper>
						<TrainingCopy>
							<Unmask parameters={unmaskParams}>
								<FeatureKicker>As good as your best agent</FeatureKicker>
							</Unmask>
							<Unmask parameters={unmaskParams}>
								<FeatureTitle>One-Time Training</FeatureTitle>
							</Unmask>
							<Unmask parameters={unmaskParams}>
								<FeatureDescription>
									Equip your AI agents with initial call recordings and
									knowledge bases, and they'll remain continuously updated
									without further training.
								</FeatureDescription>
							</Unmask>
						</TrainingCopy>
						<TrainingImageWrapper>
							<Unmask parameters={unmaskParams}>
								<TrainingImage
									image={
										tablet ? imageQuery.trainingTablet : imageQuery.training
									}
									alt="One-Time Training"
								/>
							</Unmask>
						</TrainingImageWrapper>
					</FeatureWrapper>

					<FeatureWrapper>
						<AgentEditorCopy>
							<Unmask parameters={unmaskParams}>
								<FeatureKicker>Customizable AI agents</FeatureKicker>
							</Unmask>
							<Unmask parameters={unmaskParams}>
								<FeatureTitle>Agent Editor</FeatureTitle>
							</Unmask>
							<Unmask parameters={unmaskParams}>
								<FeatureDescription>
									Customize your AI agents with human-like voices, personality
									traits such as humor and assertiveness, and control background
									noise to ensure they sound like realistic agents perfectly
									aligned with your brand.
								</FeatureDescription>
							</Unmask>
						</AgentEditorCopy>
						<AgentEditorImageWrapper>
							<Unmask parameters={unmaskParams}>
								<AgentEditorImage
									image={imageQuery.agentEditor}
									alt="Agent Editor"
								/>
							</Unmask>
						</AgentEditorImageWrapper>
					</FeatureWrapper>

					<FeatureWrapper>
						<ConversationInsightCopy>
							<Unmask parameters={unmaskParams}>
								<FeatureKicker>User-friendly reports</FeatureKicker>
							</Unmask>
							<Unmask parameters={unmaskParams}>
								<FeatureTitle>Conversation Insights</FeatureTitle>
							</Unmask>
							<Unmask parameters={unmaskParams}>
								<FeatureDescription>
									Thoughtly provides comprehensive analytics and detailed
									reports, enabling you to monitor your AI agents' performance
									and optimize customer interactions continuously.
								</FeatureDescription>
							</Unmask>
						</ConversationInsightCopy>
						<ConversationInsightImageWrapper>
							<Unmask parameters={unmaskParams}>
								<ConversationInsightImage
									image={
										tablet
											? imageQuery.conversationInsightTablet
											: imageQuery.conversationInsight
									}
									alt="Conversation Insights"
								/>
							</Unmask>
						</ConversationInsightImageWrapper>
					</FeatureWrapper>

					<FeatureWrapper>
						<AgentCoachingCopy>
							<Unmask parameters={unmaskParams}>
								<FeatureKicker>Continuous Improvement</FeatureKicker>
							</Unmask>
							<Unmask parameters={unmaskParams}>
								<FeatureTitle>Agent Coaching</FeatureTitle>
							</Unmask>
							<Unmask parameters={unmaskParams}>
								<FeatureDescription className="agent-coaching-description">
									Provide feedback to your AI agents just like you would to
									human agents. Listen to calls, identify areas for improvement,
									and offer guidance. Our AI agents learn and adapt based on
									your coaching, continually improving their performance over
									time.
								</FeatureDescription>
							</Unmask>
						</AgentCoachingCopy>
						<AgentCoachingImageWrapper>
							<Unmask parameters={unmaskParams}>
								<AgentCoachingImage
									image={
										tablet
											? imageQuery.agentCoachingTablet
											: imageQuery.agentCoaching
									}
									alt="Agent Coaching"
								/>
							</Unmask>
						</AgentCoachingImageWrapper>
					</FeatureWrapper>
				</Bottom>
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  position: relative;
  place-items: center;

  ${fresponsive(css`
    margin: 80px 0 165px;
  `)}

	${ftablet(css`
		margin: 0 0 125px;
	`)}
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;
  position: relative;
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    gap: 250px;
  `)}

	${ftablet(css`
		max-width: ${tabletBreakpoint}px;
	`)}
`

const DotsWrapper = styled.div`
  position: absolute;
  
  ${fresponsive(css`
  	height: 95.9%;
  	max-width: ${desktopBreakpoint}px;
    width: 1316px;
		left: 50%;
		transform: translateX(-50%);
    top: 105px;
  `)}

	${ftablet(css`
		max-width: ${tabletBreakpoint}px;
		width: 980px;
		top: 220px;
		height: 93%;
	`)}

  > * {
    ${fresponsive(css`
      border-radius: 60px;
    `)}
  }
`

const Corner = styled(UniversalImage)<{
	$left: number
	$top: number
	$rotate: number
	$fullwidth: boolean
}>`
  position: absolute;
  z-index: 1;

  ${({ $left, $top, $rotate }) =>
		fresponsive(css`
    left: ${$left}px;
    top: ${$top}px;
    transform: rotate(${$rotate}deg);
  `)}

  img {
    ${fresponsive(css`
      width: 60px;
      height: 60px;
    `)}
  }
`

const Heading = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  > * {
    z-index: 1;
  }
`

const CardWrapper = styled.div`
  position: absolute;

  ${fresponsive(css`
    left: 161px;

    div {
      width: 360px;
      height: auto;
      border-radius: 18px;

      > * {
        border-radius: 12px;
      }
    }
  `)}

	${ftablet(css`
		left: 68px;
	`)}
`

const Right = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    gap: 16px;
    top: 27px;
    left: 545px;
  `)}

	${ftablet(css`
		gap: 22px;
		left: 452px;
	`)}
`

const StyledKicker = styled(Kicker)`
  color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
`

const Title = styled.p`
	${fresponsive(css`
		${textStyles.h3};
    width: 606px;
  `)}

	${ftablet(css`
		${textStyles.h2};
		width: 504px;
	`)}
`

export const Blue = styled.span`
	${transparentText};
	background-image: ${gradients.blueBlue};
  display: inline-block;

  ${fresponsive(css`
    padding-right: 8px;
    margin-right: -8px;
  `)}
`

const FeatureCopy = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.beige200};
  justify-content: center;

  ${fresponsive(css`
    gap: 13px;
  `)}
`

const LeftFeatureCopy = styled(FeatureCopy)`
  ${fresponsive(css`
    width: 708px;
    padding-left: 190px;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
  `)}
	
	${ftablet(css`
		width: 510px;
		padding-left: 68px;
	`)}
`

const RightFeatureCopy = styled(FeatureCopy)`
  ${fresponsive(css`
    width: 727px;
    padding-left: 85px;
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;
  `)}

	${ftablet(css`
		width: 490px;
		padding-left: 66px;
	`)}
`

const EmptyCopy = styled(RightFeatureCopy)`
  position: absolute;
  z-index: 0;

  ${fresponsive(css`
    left: 712px;
    height: 314px;
  `)}

	${ftablet(css`
		left: 530px;
		height: 500px;
	`)}
`

const ConversationEditorCopy = styled(LeftFeatureCopy)`
  ${fresponsive(css`
    height: 288px;
  `)}

	${ftablet(css`
		height: 438px;
	`)}
`

const SkillsCopy = styled(RightFeatureCopy)`
  ${fresponsive(css`
    height: 263px;
  `)}

	${ftablet(css`
		height: 413px;
	`)}
`

const TrainingCopy = styled(LeftFeatureCopy)`
  ${fresponsive(css`
    height: 280px;
  `)}

	${ftablet(css`
		height: 430px;
	`)}
`

const AgentEditorCopy = styled(RightFeatureCopy)`
  ${fresponsive(css`
    height: 253px;
  `)}

	${ftablet(css`
		height: 409px;
	`)}
`

const ConversationInsightCopy = styled(LeftFeatureCopy)`
  ${fresponsive(css`
    height: 298px;
  `)}

	${ftablet(css`
		height: 438px;
	`)}
`

const AgentCoachingCopy = styled(RightFeatureCopy)`
  ${fresponsive(css`
    height: 364px;
    border-bottom-left-radius: 0;
  `)}

	${ftablet(css`
		height: 423px;
	`)}
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    left: 188px;
    gap: 32px;
  `)}

  > :nth-child(even) {
    flex-direction: row-reverse;
  }
`

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;

  .agent-coaching-description {
    ${fresponsive(css`
      width: 355px;
    `)}
  }
`

const FeatureKicker = styled.p`
  ${transparentText};
  background-image: ${gradients.greenBlue};
  ${textStyles.sh4};

	${ftablet(css`
		${textStyles.sh3};	
	`)}
`

const FeatureTitle = styled.h1`
  ${textStyles.h6};

  ${fresponsive(css`
    width: 466px;
  `)}

	${ftablet(css`
		${textStyles.h5};
		width: 402px;
	`)}
`

const FeatureDescription = styled.p`
	${fresponsive(css`
		${textStyles.bodyS};
    width: 350px;
  `)}

	${ftablet(css`
		${textStyles.bodyR};
		width: 352px;
	`)}
`

const ImageWrapper = styled.div`
  position: relative;
`

const ConversationEditorImageWrapper = styled(ImageWrapper)`
  ${fresponsive(css`
    padding-left: 25px;
    top: 25px;
  `)}

	${ftablet(css`
		padding-left: 15px;
		top: 5px;
	`)}
`

const SkillsImageWrapper = styled(ImageWrapper)`
  ${fresponsive(css`
    left: -55px;
  `)}

	${ftablet(css`
		left: -48px;
		top: 13px;
	`)}
`

const TrainingImageWrapper = styled(ImageWrapper)`
  ${fresponsive(css`
    padding-left: 68px;
  `)}

	${ftablet(css`
		padding-left: 25px;
	`)}
`

const AgentEditorImageWrapper = styled(ImageWrapper)`
  ${fresponsive(css`
    left: -62px;
    top: 23px;
  `)}

	${ftablet(css`
		left: -43px;
		top: 26px;
	`)}
`

const ConversationInsightImageWrapper = styled(ImageWrapper)`
  ${fresponsive(css`
    padding-left: 77px;
    top: -3px;
  `)}

	${ftablet(css`
		padding-left: 23px;
		top: 2px;
	`)}
`

const AgentCoachingImageWrapper = styled(ImageWrapper)`
  ${fresponsive(css`
    left: -42px;
    top: 17px;
  `)}

	${ftablet(css`
		left: -20px;
		top: -7px;
	`)}
`

const ConversationEditorImage = styled(UniversalImage)`
  ${fresponsive(css`
    width: 631px;
    height: 362px;
  `)}

	${ftablet(css`
		width: 457px;
		height: 382px;
	`)}
`

const SkillsImage = styled(UniversalImage)`
  ${fresponsive(css`
    width: 578px;
    height: 345px;
  `)}

	${ftablet(css`
		width: 457px;
		height: 339px;
	`)}
`

const TrainingImage = styled(UniversalImage)`
  ${fresponsive(css`
    width: 520px;
    height: 251px;
  `)}

	${ftablet(css`
		width: 430px;
		height: 418px;
	`)}
`

const AgentEditorImage = styled(UniversalImage)`
  ${fresponsive(css`
    width: 477px;
    height: 316px;
  `)}
`

const ConversationInsightImage = styled(UniversalImage)`
  ${fresponsive(css`
    width: 538px;
    height: 304px;
  `)}

	${ftablet(css`
		width: 435px;
		height: 288px;
	`)}
`

const AgentCoachingImage = styled(UniversalImage)`
  ${fresponsive(css`
    width: 584px;
    height: 338px;
  `)}

	${ftablet(css`
		width: 483px;
		height: 413px;
	`)}
`
