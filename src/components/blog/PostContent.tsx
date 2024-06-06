import UniversalLink from "library/Loader/UniversalLink"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles, { trim } from "styles/text"
import type { BlogPost } from "types/aliases"
import Author from "./Author"
import RichText from "./RichComponents"

export default function PostContent({ post }: { post: BlogPost }) {
	const { author, title, mainImage, categories, articleText } = post

	return (
		<Wrapper>
			<Title>{title}</Title>
			{author && (
				<Row>
					<Author data={author} />
				</Row>
			)}
			<ArticleImage
				image={mainImage?.gatsbyImageData}
				alt={mainImage?.description ?? "broken image"}
			/>
			<Categories>
				{categories?.filter(Boolean).map((category) => (
					<Category to={`/blog?category=${category}`} key={category}>
						{category}
					</Category>
				))}
			</Categories>
			<RichText content={articleText} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	${fresponsive(css`
		border-bottom: 1.5px solid ${colors.gray300};
		padding-bottom: 32px;
		gap: 24px;
	`)}
`

const Title = styled.h1`
	${textStyles.h6}

	${fmobile(css`
		${textStyles.sh1}
	`)}
`

const ArticleImage = styled(UniversalImage)`
	aspect-ratio: 680 / 442;
	width: 100%;

	${fresponsive(css`
		border-radius: 24px;
	`)}

	${ftablet(css`
		aspect-ratio: 600 / 442;
	`)}

  ${fmobile(css`
		aspect-ratio: 314 / 186;
	`)}
`

const Categories = styled.div`
	display: flex;
	flex-wrap: wrap;

	${fresponsive(css`
		gap: 8px;
	`)}
`

const Category = styled(UniversalLink)`
	${trim(1.3)}
	display: flex;
	${textStyles.sh4}

	${fresponsive(css`
		padding: 12px 24px;
		border-radius: 10px;
		border: 1.5px solid ${colors.gray200};
		color: ${colors.gray700};
	`)}
`

const Row = styled.div`
	display: flex;
	justify-content: space-between;
`
