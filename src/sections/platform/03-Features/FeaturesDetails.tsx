import Unmask from "components/Unmask"
import { graphql, useStaticQuery } from "gatsby"
import { ScreenContext } from "library/ScreenContext"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useMedia from "library/useMedia"
import { useContext } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles, { transparentText } from "styles/text"

export default function FeaturesDetails() {
	const { mobile } = useContext(ScreenContext)

	const imageQuery = useStaticQuery(graphql`
    query PlatformFeaturesDetails {
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
      conversationEditorMobile: file(relativePath:  {
        eq: "platform/features/ConversationEditorMobile.png"
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
      skillsMobile: file(relativePath:  {
        eq: "platform/features/SkillsMobile.png"
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
      trainingMobile: file(relativePath:  {
        eq: "platform/features/TrainingMobile.png"
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
      agentEditorMobile: file(relativePath:  {
        eq: "platform/features/AgentEditorMobile.png"
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
      conversationInsightMobile: file(relativePath:  {
        eq: "platform/features/ConversationInsightMobile.png"
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
      agentCoachingMobile: file(relativePath:  {
        eq: "platform/features/AgentCoachingMobile.png"
      }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `)

	const unmaskParams = { delay: 0.35, duration: 0.6 }

	return (
		<>
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
							Building AI conversations has never been easier with our no-code,
							drag and drop UI that comes pre-baked with A/B testing.
						</FeatureDescription>
					</Unmask>
				</ConversationEditorCopy>
				<ConversationEditorImageWrapper>
					<Unmask parameters={unmaskParams}>
						<ConversationEditorImage
							image={useMedia(
								imageQuery.conversationEditor,
								imageQuery.conversationEditor,
								imageQuery.conversationEditorTablet,
								imageQuery.conversationEditorMobile,
							)}
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
							Thoughtly’s AI agents perform tasks out-of-the-box, integrating
							directly with your Calendar, CRM and back office tools to follow
							up on leads, manage claims, schedule appointments, and a lot more.
						</FeatureDescription>
					</Unmask>
				</SkillsCopy>
				<SkillsImageWrapper>
					<Unmask parameters={unmaskParams}>
						<SkillsImage
							image={useMedia(
								imageQuery.skills,
								imageQuery.skills,
								imageQuery.skillsTablet,
								imageQuery.skillsMobile,
							)}
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
							Equip your AI agents with initial call recordings and knowledge
							bases, and they'll remain continuously updated without further
							training.
						</FeatureDescription>
					</Unmask>
				</TrainingCopy>
				<TrainingImageWrapper>
					<Unmask parameters={unmaskParams}>
						<TrainingImage
							image={useMedia(
								imageQuery.training,
								imageQuery.training,
								imageQuery.trainingTablet,
								imageQuery.trainingMobile,
							)}
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
							noise to ensure they sound like realistic agents perfectly aligned
							with your brand.
						</FeatureDescription>
					</Unmask>
				</AgentEditorCopy>
				<AgentEditorImageWrapper>
					<Unmask parameters={unmaskParams}>
						<AgentEditorImage
							image={
								mobile ? imageQuery.agentEditorMobile : imageQuery.agentEditor
							}
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
							Thoughtly provides comprehensive analytics and detailed reports,
							enabling you to monitor your AI agents' performance and optimize
							customer interactions continuously.
						</FeatureDescription>
					</Unmask>
				</ConversationInsightCopy>
				<ConversationInsightImageWrapper>
					<Unmask parameters={unmaskParams}>
						<ConversationInsightImage
							image={useMedia(
								imageQuery.conversationInsight,
								imageQuery.conversationInsight,
								imageQuery.conversationInsightTablet,
								imageQuery.conversationInsightMobile,
							)}
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
							Provide feedback to your AI agents just like you would to human
							agents. Listen to calls, identify areas for improvement, and offer
							guidance. Our AI agents learn and adapt based on your coaching,
							continually improving their performance over time.
						</FeatureDescription>
					</Unmask>
				</AgentCoachingCopy>
				<AgentCoachingImageWrapper>
					<Unmask parameters={unmaskParams}>
						<AgentCoachingImage
							image={useMedia(
								imageQuery.agentCoaching,
								imageQuery.agentCoaching,
								imageQuery.agentCoachingTablet,
								imageQuery.agentCoachingMobile,
							)}
							alt="Agent Coaching"
						/>
					</Unmask>
				</AgentCoachingImageWrapper>
			</FeatureWrapper>
		</>
	)
}

const FeatureDescription = styled.p`
	${fresponsive(css`
		${textStyles.bodyS};
    width: 350px;
  `)}

	${ftablet(css`
		${textStyles.bodyR};
		width: 352px;
	`)}

	${fmobile(css`
		${textStyles.bodyR};
		width: 310px;
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

	${fmobile(css`
		background-color: unset;
	`)}
`

const LeftFeatureCopy = styled(FeatureCopy)`
  ${fresponsive(css`
    width: 703px;
    padding-left: 190px;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
  `)}
	
	${ftablet(css`
		width: 510px;
		padding-left: 68px;
	`)}

	${fmobile(css`
		padding-left: unset;
		width: 100%;
	`)}
`

export const RightFeatureCopy = styled(FeatureCopy)`
  ${fresponsive(css`
    width: 725px;
    padding-left: 85px;
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;
  `)}

	${ftablet(css`
		width: 490px;
		padding-left: 66px;
	`)}

	${fmobile(css`
		padding-left: unset;
		width: 100%;
	`)}
`

const ConversationEditorCopy = styled(LeftFeatureCopy)`
  ${fresponsive(css`
    height: 288px;
  `)}

  ${ftablet(css`
    height: 438px;
  `)}

  ${fmobile(css`
    height: auto;
  `)}
`

const SkillsCopy = styled(RightFeatureCopy)`
  ${fresponsive(css`
    height: 263px;
  `)}

  ${ftablet(css`
    height: 413px;
  `)}

  ${fmobile(css`
    height: auto;

    ${FeatureDescription} {
      width: 308px;
    }
  `)}
`

const TrainingCopy = styled(LeftFeatureCopy)`
  ${fresponsive(css`
    height: 280px;
  `)}

  ${ftablet(css`
    height: 430px;
  `)}

	${fmobile(css`
    height: auto;
		padding-top: 30px;

    ${FeatureDescription} {
      width: 308px;
    }
	`)}
`

const AgentEditorCopy = styled(RightFeatureCopy)`
  ${fresponsive(css`
    height: 253px;
  `)}

  ${ftablet(css`
    height: 409px;
  `)}

	${fmobile(css`
    height: auto;
		padding-top: 32px;

		${FeatureDescription} {
			width: 305px;
		}
	`)}
`

const ConversationInsightCopy = styled(LeftFeatureCopy)`
  ${fresponsive(css`
    height: 298px;
  `)}

  ${ftablet(css`
    height: 438px;
  `)}

	${fmobile(css`
    height: auto;
		padding-top: 17px;

		${FeatureDescription} {
			width: 300px;
		}
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

	${fmobile(css`
    height: auto;
		padding-top: 50px;
	`)}
`

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;

	${fmobile(css`
		flex-direction: column;
	`)}

  .agent-coaching-description {
    ${fresponsive(css`
      width: 345px;
    `)}

		${ftablet(css`
			width: 355px;
		`)}

		${fmobile(css`
			width: 303px;
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

	${fmobile(css`
		${textStyles.sh3};
	`)}
`

const FeatureTitle = styled.h1`

	${fresponsive(css`
		${textStyles.h6};
    width: 466px;
  `)}

	${ftablet(css`
		${textStyles.h5};
		width: 402px;
	`)}

	${fmobile(css`
		width: 314px;
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

	${fmobile(css`
		padding-left: unset;
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

	${fmobile(css`
		padding-left: unset;
		left: -4px;
		top: 24px;
	`)}
`

const TrainingImageWrapper = styled(ImageWrapper)`
  ${fresponsive(css`
    padding-left: 74px;
  `)}

	${ftablet(css`
		padding-left: 25px;
	`)}

	${fmobile(css`
		top: 36px;
	`)}
`

const AgentEditorImageWrapper = styled(ImageWrapper)`
  ${fresponsive(css`
    left: -62px;
    top: 30px;
  `)}

	${ftablet(css`
		left: -43px;
		top: 26px;
	`)}

	${fmobile(css`
		padding-left: unset;
		left: 25px;
		top: 25px;
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

	${fmobile(css`
		padding-left: 170px;
		top: 22px;
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

	${fmobile(css`
		padding-left: unset;
		left: 0;
		top: 23px;
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

	${fmobile(css`
		width: 360px;
		height: 380px;
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

	${fmobile(css`
		width: 462px;
		height: 323px;
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

	${fmobile(css`
		width: 490px;
		height: 216px;
	`)}
`

const AgentEditorImage = styled(UniversalImage)`
  ${fresponsive(css`
    width: 477px;
    height: 316px;
  `)}

	${fmobile(css`
		width: 462px;
		height: 291px;
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

	${fmobile(css`
		width: 580.25px;
		height: 308px;
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

	${fmobile(css`
		width: 428px;
		height: 358px;
	`)}
`
