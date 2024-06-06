import Primary from "components/Buttons/Primary"
import Kicker from "components/Kicker"
import { graphql, useStaticQuery } from "gatsby"
import UniversalImage from "library/UniversalImage"
import { fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"
import links from "utils/links"

export default function AgentsHero() {
	const imageQuery: Queries.AgentsHeroQuery = useStaticQuery(graphql`
    query AgentsHero {
      mainBackground: file(relativePath: { eq: "agents/HeroAgents.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      # the images are slightly different, so we can't use the global ones
      lisa: file(relativePath: { eq: "agents/lisa.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      james: file(relativePath: { eq: "agents/james.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      maya: file(relativePath: { eq: "agents/maya.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      stacey: file(relativePath: { eq: "agents/stacey.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

	return (
		<Wrapper>
			<Copy>
				<Kicker icon="customers" iconColor={colors.green500} iconLeft>
					Agent Accelerator
				</Kicker>
				<Title>From Setup to Success, without Lifting a Finger.</Title>
				<Subtitle>
					Get expert, full-service setup and customization of your AI agent at
					no additional cost, ensuring premium quality without the premium
					price.
				</Subtitle>
				<Buttons>
					<Primary to={links.todo} outline icon="chev">
						Talk to Sales
					</Primary>
					<Primary to={links.todo} variant="secondary" icon="calendar">
						Book a Demo
					</Primary>
				</Buttons>
			</Copy>
			<Illustration>
				<MainImage
					image={imageQuery.mainBackground}
					alt="four thoughtly agents sit at a table"
				/>
				<Lisa>
					<Avatar image={imageQuery.lisa} alt="Lisa" />
					<Flag>🇦🇺</Flag>
					<Line />
					<Name>Lisa</Name>
				</Lisa>
				<James>
					<Avatar image={imageQuery.james} alt="James" />
					<Flag>🇺🇸</Flag>
					<Line />
					<Name>James</Name>
				</James>
				<Maya>
					<Avatar image={imageQuery.maya} alt="Maya" />
					<Flag>🇩🇪</Flag>
					<Line />
					<Name>Maya</Name>
				</Maya>
				<Stacey>
					<Avatar image={imageQuery.stacey} alt="Stacey" />
					<Flag>🇸🇪</Flag>
					<Line />
					<Name>Stacey</Name>
				</Stacey>
			</Illustration>
		</Wrapper>
	)
}

const MainImage = styled(UniversalImage)`
${fresponsive(css`
  border-radius: 12px;
  isolation: isolate;
  overflow:clip;
  width: 100%;
  height: 100%;
`)}

${ftablet(css`
  img {
    object-position: center 20%;
    }
`)}
`

const Illustration = styled.div`
  ${fresponsive(css`
    width: 408px;
    height: 534px;
    margin-bottom: 16px;
    padding: 24px;
    border-radius: 24px;
    border: 1.5px solid #d8d8d8;
    background: ${gradients.surface1};
    box-shadow: 0 18px 32px 0 rgb(89 89 89 / 4%);
    position: relative;
  `)}

  ${ftablet(css`
    width: 888px;
    height: 520px;
  `)}
`

const Person = styled.div`
  ${textStyles.sh2};
  ${fresponsive(css`
    height: 76px;
    padding: 0 32px;
    position: absolute;
    border-radius: 18px;
    border: 1.5px solid #d8d8d8;
    background: ${gradients.surface1};
    box-shadow:
      0 -1px 6px 0 rgb(38 38 38 / 6%) inset,
      0 18px 32px 0 rgb(89 89 89 / 4%);
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 9px;
  `)}
`

const Line = styled.div`
  ${fresponsive(css`
    width: 2px;
    height: 14px;
    border-radius: 1px;
    background: ${colors.gray300};
  `)}
`

const Lisa = styled(Person)`
  ${fresponsive(css`
    top: -20px;
    left: -32px;
  `)}

  ${ftablet(css`
    top: unset;
    bottom: 61px;
    left: -28px;
    width: 200px;
  `)}
`

const James = styled(Person)`
  ${fresponsive(css`
    top: 73px;
    left: 272px;
  `)}

  ${ftablet(css`
    top: -28px;
    left: unset;
    right: -28px;
    width: 210px;
  `)}
`

const Maya = styled(Person)`
  ${fresponsive(css`
    top: 391px;
    left: -72px;
  `)}

  ${ftablet(css`
    top: unset;
    bottom: -28px;
    left: -28px;
    width: 200px;
  `)}
`

const Stacey = styled(Person)`
  ${fresponsive(css`
    top: 467px;
    left: 218px;
  `)}

  ${ftablet(css`
    top: 60px;
    left: unset;
    right: -28px;
    width: 210px;
  `)}
`

const Avatar = styled(UniversalImage)`
  ${fresponsive(css`
    width: 36px;
    height: 36px;
    margin-right: 5px;
  `)}
`

const Flag = styled.div``
const Name = styled.div``

const Title = styled.h1`
  ${textStyles.h3}
`

const Subtitle = styled.p`
  ${textStyles.bodyL};
  color: ${colors.gray800};

  ${fresponsive(css`
    margin-left: 10px;
    width: 477px;
    min-height: 92px;
  `)}
`

const Buttons = styled.div`
  display: flex;

  ${fresponsive(css`
    gap: 12px;
    padding-left: 6px;
  `)}
`

const Copy = styled.div`
  ${fresponsive(css`
    display: flex;
    flex-direction: column;
    gap: 18px;
  `)}

  ${ftablet(css`
    align-items: center;
    text-align: center;
  `)}
`

const Wrapper = styled.div`
  ${fresponsive(css`
    display: grid;
    grid-template-columns: 1fr auto;
    max-width: 1440px;
    margin: 0 auto;
    padding: 147px 132px 0 155px;
    place-items: end;
    position: relative;
    z-index: 2;
  `)}

  ${ftablet(css`
    grid-template-columns: 1fr;gap:104px;
    padding: 190px 68px 0;
  `)}
`
