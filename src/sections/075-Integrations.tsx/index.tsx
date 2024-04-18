import Kicker from "components/Kicker"
import { graphql, useStaticQuery } from "gatsby"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles from "styles/text"
import Card from "./Card"

export default function Integrations() {
	const data: Queries.IntegrationsQuery = useStaticQuery(graphql`
    query Integrations {
      allHomeIntegrationsJson {
        nodes {
          logo {
            childImageSharp {
              gatsbyImageData
            }
          }
          text
          tag
        }
      }
    }
  `)

	const cards = data.allHomeIntegrationsJson.nodes.map((item, index) => {
		return (
			<Card key={item.text} logo={item.logo} tag={item.tag}>
				{item.text}
			</Card>
		)
	})

	return (
		<Wrapper>
			<Inner>
				<Kicker gradient icon="integration" iconLeft>
					Integrations
				</Kicker>
				{cards}
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  place-content: center;
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${fresponsive(css`
    padding: 30px 0 100px;
    gap: 53px;
  `)}
`
