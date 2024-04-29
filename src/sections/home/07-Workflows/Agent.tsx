import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"
import AutoAnimate from "library/AutoAnimate"
import UniversalImage from "library/UniversalImage"
import { fresponsive } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import useMedia from "library/useMedia"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"

export default function AgentCard({ activeIndex }: { activeIndex: number }) {
	const desktop = useMedia(true, true, false, false)

	const data: Queries.IndustryAgentQuery = useStaticQuery(graphql`
    query IndustryAgent {
      allHomeIndustryJson {
        nodes {
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

	// Todo delete if we don't end up animating the agent card

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
		<Agent>
			<AutoAnimate>
				<Avatar
					key={activeIndex}
					image={data.allHomeIndustryJson.nodes[activeIndex]?.agent?.avatar}
					alt={data.allHomeIndustryJson.nodes[activeIndex]?.agent?.name ?? ""}
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
	)
}

const Card = styled.div`
  background: ${gradients.surface1};

  ${fresponsive(css`
    border: 2px solid ${colors.gray200};
    border-radius: 12px;
    box-shadow: 0 18px 42px 0 rgba(89 89 89 / 4%);
  `)}
`

const Agent = styled(Card)`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;

  ${fresponsive(css`
    width: 170px;
    height: 45px;
    top: -24px;
    left: 50%;
    transform: translateX(-50%);
    padding: 9px;
    gap: 10px;
  `)}
`

const Avatar = styled(UniversalImage)`
  border-radius: 99vw;

  ${fresponsive(css`
    width: 26.6px;
    height: 26.6px;
  `)}
`

const Name = styled.span`
  ${textStyles.bodyS}
  color: ${colors.black};
`

const Line = styled.div`
  background-color: ${colors.gray300};

  ${fresponsive(css`
    width: 1.5px;
    height: 10.3px;
  `)}
`
