import type { IconType } from "components/Icon"
import { graphql, useStaticQuery } from "gatsby"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles from "styles/text"
import Card from "./Card"

export default function Features() {
	const data: Queries.FeaturesQuery = useStaticQuery(graphql`
    query Features {
      allHomeFeaturesJson {
        nodes {
          icon
          title
          text
        }
      }
    }
  `)

	const cards = data.allHomeFeaturesJson.nodes.map((item, index) => {
		return (
			<Card
				key={item.title}
				icon={item.icon as IconType}
				title={item.title ?? ""}
				text={item.text ?? ""}
				index={index}
			/>
		)
	})

	return (
		<Wrapper>
			<Inner>{cards}</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;
  display: grid;
  
  ${fresponsive(css`
    padding: 111px 156px 200px;
    gap: 24px;
    grid-auto-rows: 329px 420px;
    grid-template-columns: 360px 192px 192px 360px;
  `)}
`
