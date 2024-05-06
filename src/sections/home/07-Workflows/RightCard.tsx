import { fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"

import { ReactComponent as CheckMarkSVG } from "images/home/complete.svg"
import { generateGradientBorder } from "utils/generateGradientBorder"

const tags1 = [
	"Asked Questions",
	"Added Sequence",
	"Opened Email",
	"Created Task",
	"Set Milestones",
]

const tags2 = [
	"Collected Data",
	"Logged Call",
	"Opportunity Won",
	"Contract Sent",
	"Request Signature",
]

const tags3 = [
	"Request Signature",
	"Created Cards",
	"Appended Data",
	"Published to Site",
	"Updated Analytics",
]

export default function RightCard({
	rightCardRef,
}: {
	rightCardRef: React.RefObject<HTMLDivElement>
}) {
	const createTags = (tags: string[], i: number) => {
		return tags.map((tag) => {
			return (
				<Tag className={`tags-${i}`} key={tag}>
					<CheckMarkSVG /> <div>{tag}</div>
				</Tag>
			)
		})
	}

	const taskGroup1 = createTags(tags1, 1)
	const taskGroup2 = createTags(tags2, 2)
	const taskGroup3 = createTags(tags3, 3)

	return (
		<RightCardWrapper ref={rightCardRef}>
			<Inner>
				<LeftNode />
				<TaskGroup>{taskGroup1}</TaskGroup>
				<TaskGroup>{taskGroup2}</TaskGroup>
				<TaskGroup>{taskGroup3}</TaskGroup>
			</Inner>
		</RightCardWrapper>
	)
}

const animationCardStyle = css`
  background: ${gradients.surface1};
`

const NodeStyle = css`
  border-radius: 99vw;
  background: ${colors.white};
  ${fresponsive(css`
    border: 1.5px solid ${colors.gray200};
    width: 9px;
    height: 9px;
    top: 118.68px;
  `)}
`

const LeftNode = styled.div`
  position: absolute;
  z-index: 2;
  ${NodeStyle}
  ${fresponsive(css`
    left: -4.7px;
  `)}
`

const RightCardWrapper = styled.div`
  ${generateGradientBorder(gradients.surfaceOutline, 1.5)};
  position: absolute;

  ${LeftNode} {
    top: 50%;
    transform: translateY(-50%);
  }

  ${fresponsive(css`
    left: 539px;
    top: 122px;
    width: 332px;
    height: 170px;
    min-height: 126px;
    box-shadow: 0 18px 32px 0 rgba(89 89 89 / 4%);
    border-radius: 18px;
  `)}

  ${ftablet(css`
    width: 194px;
    height: 252px;
    left: 444px;
    top: 58px;
  `)}
`

const Inner = styled.div`
  ${animationCardStyle};
  position: relative;

  ${fresponsive(css`
    width: 330px;
    height: 168px;
    border-radius: 18px;
  `)}

  ${ftablet(css`
    width: 194px;
    height: 252px;
  `)}
`

const Tag = styled.div`
  width: fit-content;
  position: relative;
  background: ${colors.gray100};
  color: ${colors.gray800};
  display: flex;
  ${textStyles.sh4};
  opacity: 0;
  ${fresponsive(css`
    gap: 10.42px;
    padding: 11.46px 10.42px 10.42px;
    border-radius: 9.37px;

    svg {
      display: block;
      width: 14px;
      height: 14px;
      transform: scale(0);
    }
  `)}

  ${ftablet(css`
    white-space: nowrap;
  `)}
`

const TaskGroup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  inset: 0;
  ${fresponsive(css`
    padding: 24px;
    gap: 6px;
  `)}
`
