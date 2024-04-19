import Seo from "components/Seo"
import type { PageProps } from "gatsby"
import { graphql } from "gatsby"
import UniversalLink from "library/Loader/UniversalLink"

import WidgetsAndVideo from "sections/home/08-WidgetsAndVideo"
import styled from "styled-components"
import { Filler } from "./404"

export default function IndexPage({
	data,
}: PageProps<Queries.SitePluginsHomeQuery>) {
	const { edges: pluginList } = data.allSitePlugin

	return (
		<>
			<Container />
			<WidgetsAndVideo />
		</>
	)
}

export function Head() {
	return <Seo title="Home" description="This is the homepage!" pathname="/" />
}

export const query = graphql`
  query SitePluginsHome {
    allSitePlugin {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

const Container = styled.div`
  position: relative;
  height: 100vh;
`
