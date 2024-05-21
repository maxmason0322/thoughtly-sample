import UniversalLink from "library/Loader/UniversalLink"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import textStyles, { clampText, trim } from "styles/text"
import type { BlogCard } from "types/aliases"
import Author from "./Author"

export default function SmallCard({ data }: { data: BlogCard }) {
	const { slug, author, mainImage, title } = data

	return (
		<Wrapper to={`/blog/${slug}`}>
			<Image
				image={mainImage?.gatsbyImageData}
				alt={mainImage?.description ?? ""}
			/>
			<Title>{title}</Title>
			{author && <Author data={author} />}
		</Wrapper>
	)
}

const Wrapper = styled(UniversalLink)`
  ${fresponsive(css`
    display: grid;
    gap: 12px;
  `)}
`

const Image = styled(UniversalImage)`
  width: 100%;
  
  ${fresponsive(css`
    aspect-ratio: 372 / 215;
    border-radius: 18px;
  `)}
  
  ${fmobile(css`
    width: 318px;
    height: 205px;
  `)}
`

const Title = styled.div`
  ${trim(1.2)}
  ${clampText(2)}
  ${textStyles.sh1};

  ${fresponsive(css`
    padding: 4px 0;
    margin: -4px 0;
  `)}
`
