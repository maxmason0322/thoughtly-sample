import Button from "components/Buttons/Primary"
import { loadPage } from "library/Loader/TransitionUtils"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles, { trim, clampText } from "styles/text"
import type { BlogCard } from "types/aliases"
import Author from "./Author"

export default function LargeCard({ data }: { data: BlogCard }) {
	const { author, mainImage, title, articleTextPreview, slug } = data

	return (
		<Wrapper
			role="presentation"
			onClick={() => {
				loadPage(`/blog/${slug}`).catch(console.error)
			}}
		>
			<Image
				image={mainImage?.gatsbyImageData}
				alt={mainImage?.description ?? ""}
			/>
			<Title>{title}</Title>
			<Details>
				<Description>{articleTextPreview}</Description>
				{author && <Author data={author} />}
			</Details>
			<CustomWidthButton icon="chev" to={`/blog/${slug}`} variant="secondary">
				Continue Reading
			</CustomWidthButton>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  display: grid;
  cursor: pointer;
  width: 100%;
  
  ${fresponsive(css`
    gap: 26px;
    margin-bottom: 60px;
  `)}

  ${ftablet(css`
    margin-bottom: 48px;
    gap: 20px;
  `)}

  ${fmobile(css`
    margin-bottom: 50px;
    margin-top: 20px;
  `)}
`

const Image = styled(UniversalImage)`
  ${fresponsive(css`
    width: 100%;
    aspect-ratio: 768 / 440;
    border-radius: 16px;
  `)}
  ${ftablet(css`
    aspect-ratio: 585 / 440;
  `)}
  ${fmobile(css`
    aspect-ratio: 318 / 270;
  `)}
`

const Title = styled.div`
  ${clampText(2)}
  ${textStyles.h6};

  ${fresponsive(css`
    padding-bottom: 4px;
  `)}
`

const Details = styled.div`
  ${fresponsive(css`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px 8px;
  `)}

  ${ftablet(css`
    gap: 28px 10px;
    margin-bottom: 10px;
  `)}

  ${fmobile(css`
    gap: 28px 10px;
    margin-bottom: 10px;
  `)}
`

const Description = styled.div`
  ${trim(1.25)}
  ${clampText(2)}
  ${textStyles.bodyS};
  color: ${colors.gray700};
  grid-column: span 2;

  ${fresponsive(css`
    padding-bottom: 2px;
  `)}

  ${ftablet(css`
    ${textStyles.bodyR};
    ${trim(1.2)};
    margin-top: 10px;
  `)}
  ${fmobile(css`
    ${textStyles.bodyR};
    ${trim(1.2)};
    margin-top: 10px;
  `)}
`

const CustomWidthButton = styled(Button)`
  ${ftablet(css`
    width: 249px;
  `)}
  ${fmobile(css`
    width: 100%;
  `)}
`
