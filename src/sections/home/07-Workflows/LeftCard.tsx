import gsap from "gsap"
import { fresponsive, ftablet } from "library/fullyResponsive"

import { useMemo } from "react"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"

import { graphql, useStaticQuery } from "gatsby"
import { MorphSVGPlugin, TextPlugin } from "gsap/all"

import AutoAnimate from "library/AutoAnimate"

import UniversalImage from "library/UniversalImage"
import { generateGradientBorder } from "utils/generateGradientBorder"

gsap.registerPlugin(MorphSVGPlugin, TextPlugin)

export default function LeftCard({
	leftCardRef,
	rowText,
	leftCardRow,
	activeIconIndex,
}: {
	leftCardRef: React.RefObject<HTMLDivElement>
	rowText: React.RefObject<HTMLParagraphElement>
	leftCardRow: React.RefObject<HTMLDivElement>
	activeIconIndex: number
}) {
	const images: Queries.WorkflowImageQuery = useStaticQuery(graphql`
    query WorkflowImage {
      hubspot: file(relativePath: { eq: "home/hubspot.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      salesforce: file(relativePath: { eq: "home/salesforce.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      airtable: file(relativePath: { eq: "home/airtable.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

	const CompanyIcons = useMemo(
		() => [
			{
				icon: images.hubspot,
				text: "HubSpot",
			},
			{
				icon: images.salesforce,
				text: "Salesforce",
			},
			{
				icon: images.airtable,
				text: "AirTable",
			},
		],
		[images.airtable, images.hubspot, images.salesforce],
	)

	const allIcons = useMemo(
		() =>
			CompanyIcons.map((icon) => {
				return <Icon image={icon.icon} alt={icon.text} key={icon.text} />
			}),
		[CompanyIcons],
	)

	return (
		<LeftCardWrapper ref={leftCardRef}>
			<RightNode />
			<Inner>
				<Row ref={leftCardRow}>
					<Icons>
						<StyledAutoAnimate>{allIcons[activeIconIndex]}</StyledAutoAnimate>
					</Icons>
					<CenterLine />
					<RowText>
						<TextInner ref={rowText} />
					</RowText>
				</Row>
			</Inner>
		</LeftCardWrapper>
	)
}

export const animationCardStyle = css`
  background: ${gradients.surface1};
`

const NodeStyle = css`
  border-radius: 99vw;
  background: ${colors.white};
  z-index: 5;
  ${fresponsive(css`
    border: 1.5px solid ${colors.gray200};
    width: 9px;
    height: 9px;
    top: 118.68px;
  `)}
`

const RightNode = styled.div`
  position: absolute;

  ${NodeStyle}
  ${fresponsive(css`
    left: unset;
    right: -4.7px;
    z-index: 5;
  `)}
`

const Inner = styled.div`
  ${animationCardStyle};

  position: absolute;
  display: grid;
  place-items: center;

  ${fresponsive(css`
    border-radius: 17px;
    width: 280px;
    height: 150px;
  `)}

  ${ftablet(css`
    width: 265px;
    height: 150px;
  `)}
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 0;

  ${fresponsive(css`
    gap: 16px;
    width: fit-content;
    height: 52px;
  `)}
`

const Icons = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  ${fresponsive(css`
    width: 112px;
    height: 48px;
  `)}
`

const RowText = styled.p`
  ${textStyles.sh4};
  color: ${colors.black};
  position: relative;

  ${fresponsive(css`
    width: 50px;
    white-space: nowrap;
  `)}
`

const Icon = styled(UniversalImage).attrs({ objectFit: "contain" })`
  ${fresponsive(css`
    height: 48px;
    width: 112px;

    img {
      object-position: right center;
    }
  `)}
`

const TextInner = styled.span``

const CenterLine = styled.div`
  background: ${colors.gray400};
  ${fresponsive(css`
    width: 1.5px;
    height: 24px;
  `)}
`

const StyledAutoAnimate = styled(AutoAnimate)``

const LeftCardWrapper = styled.div`
  position: absolute;
  ${generateGradientBorder(gradients.surfaceOutline, 1.5)};

  ${RightNode} {
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
  }

  ${fresponsive(css`
    right: calc(100% - 2px);
    top: -2px;
    width: 282px;
    height: 152px;
    box-shadow: 0 18px 32px 0 rgba(89 89 89 / 4%);
    border-radius: 18px;
  `)}

  ${ftablet(css`
    top: 3px;
    width: 267px;
    height: 152px;
  `)}
`
