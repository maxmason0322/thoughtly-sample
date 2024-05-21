import Primary from "components/Buttons/Primary"
import Seo from "components/Seo"
import BlogLayout from "components/blog/BlogLayout"
import Categories from "components/blog/Categories"
import ClearButton from "components/blog/ClearButton"
import EmailInput from "components/blog/EmailInput"
import LargeCard from "components/blog/LargeCard"
import SmallCard from "components/blog/SmallCard"
import type { PageProps } from "gatsby"
import { graphql } from "gatsby"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { MobileOnly } from "library/breakpointUtils"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import { useParamState } from "library/useParamState"
import { useEffect } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles, { trim } from "styles/text"
import { useSearchResults } from "utils/useSearchResults"

export default function BlogPage({ data }: PageProps<Queries.BlogPageQuery>) {
	const unfilteredCards = data.allContentfulPageBlogPost.nodes
	const featuredCard = data.contentfulPageBlogHub?.featuredBlogPost

	const restOfCards = unfilteredCards.filter(
		(card) => card.id !== featuredCard?.id,
	)
	const smallCards = restOfCards.slice(0, 9)
	const hasMoreCards = restOfCards.length > 9

	const [query] = useParamState("query")
	const [category] = useParamState("category")
	const [showAll, setShowAll] = useParamState("showAll")

	/**
	 * instant scroll to top on any query change
	 */
	// biome-ignore lint/correctness/useExhaustiveDependencies: allowable side effect
	useEffect(() => {
		ScrollSmoother.get()?.scrollTo(0)
	}, [query, category, showAll])

	const searchedCards = useSearchResults(
		query ?? "",
		[...unfilteredCards],
		["articleTextPreview", "author", "slug", "title"],
	)
	const categorizedCards = category
		? searchedCards.filter((card) => card.categories?.includes(category))
		: searchedCards

	if (Boolean(query) || Boolean(category))
		return (
			<BlogLayout>
				{(query || category) && (
					<HeaderWrapper>
						{query && category ? (
							<LightHeader>
								Search results for <span>“{query}”</span> in{" "}
								<span>{category}</span>
							</LightHeader>
						) : category ? (
							<Header>Categories / {category}</Header>
						) : (
							<LightHeader>
								Search results for <span>“{query}”</span>
							</LightHeader>
						)}
						<ClearButton />
					</HeaderWrapper>
				)}
				<CardGroup>
					{categorizedCards.map((card) => (
						<SmallCard key={card.id} data={card} />
					))}
					{categorizedCards.length === 0 && <div>No results found</div>}
				</CardGroup>
			</BlogLayout>
		)

	if (showAll) {
		return (
			<BlogLayout>
				<Header>All Articles</Header>
				<CardGroup>
					{unfilteredCards.map((card) => (
						<SmallCard key={card.id} data={card} />
					))}
				</CardGroup>
			</BlogLayout>
		)
	}

	return (
		<BlogLayout>
			{featuredCard && <LargeCard data={featuredCard} />}
			<MobileOnly>
				<Categories />
			</MobileOnly>
			<Header>Previous Articles</Header>
			<CardGroup>
				{smallCards.map((card) => (
					<SmallCard key={card.id} data={card} />
				))}
			</CardGroup>
			{hasMoreCards && (
				<CustomWidthButton
					type="button"
					onClick={() => {
						setShowAll("true")
					}}
				>
					See More
				</CustomWidthButton>
			)}
			<MobileEmail>
				<EmailInput />
			</MobileEmail>
		</BlogLayout>
	)
}

export function Head() {
	return (
		<Seo
			title="Campfire | Blog"
			description="Campfire is an immersive leadership development program that builds better managers by blending authentic peer connection, actionable content, and scalable technology."
			pathname="/blog"
		/>
	)
}

const Header = styled.div`
  ${textStyles.sh1}
  ${trim(1.2)}
	color: ${colors.gray700};

  ${fresponsive(css`
    margin-bottom: 18px;
  `)}

  ${fmobile(css`
    margin-bottom: 30px;
  `)}
`

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${fresponsive(css`
		padding-top: 12px;
		margin-bottom: 20px;
	`)}
`

const LightHeader = styled(Header)`
	margin-bottom: unset;

	span {
		color: ${colors.gray900};
	}
`

const CardGroup = styled.div`
  ${fresponsive(css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px 24px;
    margin-bottom: 55px;
  `)}
  ${ftablet(css`
    grid-template-columns: 1fr 1fr;
    gap: 35px 25px;
  `)}
  ${fmobile(css`
    grid-template-columns: 1fr;
    gap: 36px;
  `)}
`

const CustomWidthButton = styled(Primary)`
  ${fresponsive(css`
    width: 280px;
  `)}
  ${ftablet(css`
    width: 100%;
  `)}
  ${fmobile(css`
    width: 100%;
  `)}
`

const MobileEmail = styled(MobileOnly)`
  ${fmobile(css`
		border-top: 1px solid ${colors.gray300};
    padding-top: 50px;
    margin-top: 50px;
  `)}
`

export const query = graphql`
  query BlogPage {
    allContentfulPageBlogPost(sort: { createdAt: DESC }) {
      nodes {
        slug
        id
        author {
          id
          headshot {
            gatsbyImageData
            createdAt
          }
          fullName
          roleAndCompany
        }
        title
        mainImage {
          gatsbyImageData
          description
        }
        categories
        articleTextPreview
      }
    }
    contentfulPageBlogHub {
      id
      featuredBlogPost {
        slug
        id
        author {
          id
          headshot {
            gatsbyImageData
            createdAt
          }
          fullName
          roleAndCompany
        }
        title
        mainImage {
          gatsbyImageData
          description
        }
        categories
        articleTextPreview
      }
    }
  }
`
