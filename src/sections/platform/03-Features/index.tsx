import Kicker from "components/Kicker"
import { graphql, useStaticQuery } from "gatsby"
import UniversalImage from "library/UniversalImage"
import { fresponsive } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import styled, { css } from "styled-components"
import { Dots } from "styles/background"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles, { transparentText } from "styles/text"
import { Green } from "../01-Hero"
import Card from "../01-Hero/Card"

export default function Features() {
	const imageQuery = useStaticQuery(graphql`
    query FeaturesImageQuery {
      featuredImage: file(relativePath:  {
         eq: "platform/features/Features.png"
      }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      conversationEditor: file(relativePath:  {
         eq: "platform/features/ConversationEditor.png"
      }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      skills: file(relativePath:  {
         eq: "platform/features/Skills.png"
      }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      training: file(relativePath:  {
         eq: "platform/features/Training.png"
      }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      agentEditor: file(relativePath:  {
         eq: "platform/features/AgentEditor.png"
      }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      conversationInsight: file(relativePath:  {
         eq: "platform/features/ConversationInsight.png"
      }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      agentCoaching: file(relativePath:  {
         eq: "platform/features/AgentCoaching.png"
      }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      corner: file(relativePath: {
        eq: "platform/features/Corner.png"
      }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

	const data = [
		{
			key: 0,
			left: 60,
			top: 458,
			rotate: 0,
		},
		{
			key: 1,
			left: 652,
			top: 105,
			rotate: 180,
		},
		{
			key: 2,
			left: 1318,
			top: 314,
			rotate: 180,
		},
		{
			key: 3,
			left: 60,
			top: 805.5,
			rotate: 90,
		},
		{
			key: 4,
			left: 1318,
			top: 856,
			rotate: -90,
		},
		{
			key: 5,
			left: 60,
			top: 1191.5,
			rotate: 0,
		},
		{
			key: 6,
			left: 1318,
			top: 1178.5,
			rotate: 180,
		},
		{
			key: 7,
			left: 60,
			top: 1531.5,
			rotate: 90,
		},
		{
			key: 8,
			left: 1318,
			top: 1535.5,
			rotate: -90,
		},
		{
			key: 9,
			left: 60,
			top: 1855,
			rotate: 0,
		},
		{
			key: 10,
			left: 1318,
			top: 1848,
			rotate: 180,
		},
		{
			key: 11,
			left: 60,
			top: 2212.5,
			rotate: 90,
		},
		{
			key: 12,
			left: 1318,
			top: 2187.5,
			rotate: -90,
		},
		{
			key: 13,
			left: 653,
			top: 2549.5,
			rotate: -90,
		},
	]

	useAnimation(() => {}, [])

	return (
		<Wrapper>
			<DotsWrapper>
				<Dots />
			</DotsWrapper>
			{data.map((corner) => (
				<Corner
					key={corner.key}
					image={imageQuery.corner}
					alt="corner"
					left={corner.left}
					top={corner.top}
					rotate={corner.rotate}
				/>
			))}
			<Inner>
				<Heading>
					<CardWrapper>
						<Card image={imageQuery.featuredImage} />
					</CardWrapper>
					<Right>
						<StyledKicker>Customizable AI Phone Agents</StyledKicker>
						<Title>
							<Blue>Features</Blue> from the <Green>Future.</Green>
						</Title>
					</Right>
					<EmptyCopy />
				</Heading>
				<Bottom>
					<FeatureWrapper>
						<ConversationEditorCopy>
							<FeatureKicker>Inbound and outbound phone calls</FeatureKicker>
							<FeatureTitle>Conversation Editor</FeatureTitle>
							<FeatureDescription>
								Building AI conversations has never been easier with our
								no-code, drag and drop UI that comes pre-baked with A/B testing.
							</FeatureDescription>
						</ConversationEditorCopy>
						<ConversationEditorImageWrapper>
							<ConversationEditorImage
								image={imageQuery.conversationEditor}
								alt="Conversation Editor"
							/>
						</ConversationEditorImageWrapper>
					</FeatureWrapper>

					<FeatureWrapper>
						<SkillsCopy>
							<FeatureKicker>Thousands of Integrations</FeatureKicker>
							<FeatureTitle>Skills Library</FeatureTitle>
							<FeatureDescription>
								Thoughtly’s AI agents perform tasks out-of-the-box, integrating
								directly with your Calendar, CRM and back office tools to follow
								up on leads, manage claims, schedule appointments, and a lot
								more.
							</FeatureDescription>
						</SkillsCopy>
						<SkillsImageWrapper>
							<SkillsImage image={imageQuery.skills} alt="Skills Library" />
						</SkillsImageWrapper>
					</FeatureWrapper>

					<FeatureWrapper>
						<TrainingCopy>
							<FeatureKicker>As good as your best agent</FeatureKicker>
							<FeatureTitle>One-Time Training</FeatureTitle>
							<FeatureDescription>
								Equip your AI agents with initial call recordings and knowledge
								bases, and they'll remain continuously updated without further
								training.
							</FeatureDescription>
						</TrainingCopy>
						<TrainingImageWrapper>
							<TrainingImage
								image={imageQuery.training}
								alt="One-Time Training"
							/>
						</TrainingImageWrapper>
					</FeatureWrapper>

					<FeatureWrapper>
						<AgentEditorCopy>
							<FeatureKicker>Customizable AI agents</FeatureKicker>
							<FeatureTitle>Agent Editor</FeatureTitle>
							<FeatureDescription>
								Customize your AI agents with human-like voices, personality
								traits such as humor and assertiveness, and control background
								noise to ensure they sound like realistic agents perfectly
								aligned with your brand.
							</FeatureDescription>
						</AgentEditorCopy>
						<AgentEditorImageWrapper>
							<AgentEditorImage
								image={imageQuery.agentEditor}
								alt="Agent Editor"
							/>
						</AgentEditorImageWrapper>
					</FeatureWrapper>

					<FeatureWrapper>
						<ConversationInsightCopy>
							<FeatureKicker>User-friendly reports</FeatureKicker>
							<FeatureTitle>Conversation Insights</FeatureTitle>
							<FeatureDescription>
								Thoughtly provides comprehensive analytics and detailed reports,
								enabling you to monitor your AI agents' performance and optimize
								customer interactions continuously.
							</FeatureDescription>
						</ConversationInsightCopy>
						<ConversationInsightImageWrapper>
							<ConversationInsightImage
								image={imageQuery.conversationInsight}
								alt="Conversation Insights"
							/>
						</ConversationInsightImageWrapper>
					</FeatureWrapper>

					<FeatureWrapper>
						<AgentCoachingCopy>
							<FeatureKicker>Continuous Improvement</FeatureKicker>
							<FeatureTitle>Agent Coaching</FeatureTitle>
							<FeatureDescription className="agent-coaching-description">
								Provide feedback to your AI agents just like you would to human
								agents. Listen to calls, identify areas for improvement, and
								offer guidance. Our AI agents learn and adapt based on your
								coaching, continually improving their performance over time.
							</FeatureDescription>
						</AgentCoachingCopy>
						<AgentCoachingImageWrapper>
							<AgentCoachingImage
								image={imageQuery.agentCoaching}
								alt="Agent Coaching"
							/>
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
    margin: 80px 0;
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
`

const DotsWrapper = styled.div`
  position: absolute;
  height: 95.9%;
  
  ${fresponsive(css`
    width: 1318px;
    left: 60px;
    top: 105px;
  `)}

  > * {
    ${fresponsive(css`
      border-radius: 60px;
    `)}
  }
`

const Corner = styled(UniversalImage)<{
	left: number
	top: number
	rotate: number
}>`
  position: absolute;
  z-index: 1;

  ${(props) =>
		fresponsive(css`
    left: ${props.left}px;
    top: ${props.top}px;
    transform: rotate(${props.rotate}deg);
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
`

const StyledKicker = styled(Kicker)`
  color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
`

const Title = styled.p`
  ${textStyles.h3};

  ${fresponsive(css`
    width: 606px;
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
`

const RightFeatureCopy = styled(FeatureCopy)`
  ${fresponsive(css`
    width: 727px;
    padding-left: 85px;
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;
  `)}
`

const EmptyCopy = styled(RightFeatureCopy)`
  position: absolute;
  z-index: 0;

  ${fresponsive(css`
    left: 712px;
    height: 314px;
  `)}
`

const ConversationEditorCopy = styled(LeftFeatureCopy)`
  ${fresponsive(css`
    height: 288px;
  `)}
`

const SkillsCopy = styled(RightFeatureCopy)`
  ${fresponsive(css`
    height: 263px;
  `)}
`

const TrainingCopy = styled(LeftFeatureCopy)`
  ${fresponsive(css`
    height: 280px;
  `)}
`

const AgentEditorCopy = styled(RightFeatureCopy)`
  ${fresponsive(css`
    height: 253px;
  `)}
`

const ConversationInsightCopy = styled(LeftFeatureCopy)`
  ${fresponsive(css`
    height: 298px;
    width: 700px;
  `)}
`

const AgentCoachingCopy = styled(RightFeatureCopy)`
  ${fresponsive(css`
    height: 364px;
    border-bottom-left-radius: 0;
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
      width: 348px;
    `)}
  }
`

const FeatureKicker = styled.p`
  ${transparentText};
  background-image: ${gradients.greenBlue};
  ${textStyles.sh4};
`

const FeatureTitle = styled.h1`
  ${textStyles.h6};

  ${fresponsive(css`
    width: 466px;
  `)}
`

const FeatureDescription = styled.p`
  ${textStyles.bodyS};

  ${fresponsive(css`
    width: 350px;
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
`

const SkillsImageWrapper = styled(ImageWrapper)`
  ${fresponsive(css`
    left: -55px;
  `)}
`

const TrainingImageWrapper = styled(ImageWrapper)`
  ${fresponsive(css`
    padding-left: 68px;
  `)}
`

const AgentEditorImageWrapper = styled(ImageWrapper)`
  ${fresponsive(css`
    left: -62px;
    top: 23px;
  `)}
`

const ConversationInsightImageWrapper = styled(ImageWrapper)`
  ${fresponsive(css`
    padding-left: 77px;
    top: -3px;
  `)}
`

const AgentCoachingImageWrapper = styled(ImageWrapper)`
  ${fresponsive(css`
    left: -42px;
    top: 17px;
  `)}
`

const ConversationEditorImage = styled(UniversalImage)`
  ${fresponsive(css`
    width: 631px;
    height: 362px;
  `)}
`

const SkillsImage = styled(UniversalImage)`
  ${fresponsive(css`
    width: 578px;
    height: 345px;
  `)}
`

const TrainingImage = styled(UniversalImage)`
  ${fresponsive(css`
    width: 520px;
    height: 251px;
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
`

const AgentCoachingImage = styled(UniversalImage)`
  ${fresponsive(css`
    width: 584px;
    height: 338px;
  `)}
`
