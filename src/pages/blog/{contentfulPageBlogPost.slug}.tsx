import Button from "components/Buttons/Primary"
import Icon from "components/Icon"
import Seo from "components/Seo"
import PostContent from "components/blog/PostContent"
import Share from "components/blog/Share"
import SmallCard from "components/blog/SmallCard"
import type { PageProps } from "gatsby"
import { graphql } from "gatsby"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { ReactComponent as ArrowIconSVG } from "images/blog/blogArrow.svg"
import UniversalLink from "library/Loader/UniversalLink"
import { usePinType } from "library/Scroll"
import { DesktopTabletOnly } from "library/breakpointUtils"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { getResponsivePixels } from "library/viewportUtils"
import { useRef } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles from "styles/text"
import links from "utils/links"

export default function BlogPostPage({
	data: {
		contentfulPageBlogPost: post,
		allContentfulPageBlogPost: { nodes: recentArticles },
	},
}: PageProps<Queries.BlogPostQuery>) {
	const pin = useRef<HTMLDivElement>(null)
	const pinType = usePinType()

	useAnimation(() => {
		ScrollTrigger.create({
			trigger: pin.current,
			start: () => `top top+=${getResponsivePixels(120)}`,
			end: () =>
				// the height of the parent less the height of the pin
				`+=${
					(pin.current?.parentElement?.offsetHeight ?? 0) -
					(pin.current?.offsetHeight ?? 0)
				}`,
			pin: true,
			pinType,
		})
	}, [pinType])

	const relatedArticles = post?.relatedArticles?.filter(Boolean)

	return (
		<Wrapper>
			<Inner>
				<Heading>
					<Link to={links.blog}>Blog</Link>
					<StyledIcon name="chev" />
					<Light>{post?.title}</Light>
					<Link to={links.blog}>Back to Home</Link>
				</Heading>
				<Content>
					<div />
					{post ? <PostContent post={post} /> : "Post not found."}
					<DesktopTabletOnly>
						<Socials ref={pin}>
							<Share title={post?.title} />
						</Socials>
					</DesktopTabletOnly>
				</Content>
				<Related>
					<RelatedHeading>Recent Articles</RelatedHeading>
					{(relatedArticles ?? recentArticles).map((article) => (
						<SmallCard key={article.slug} data={article} />
					))}
				</Related>
				<Button icon="chev" to={links.blog} variant="secondary">
					See All Articles
				</Button>
			</Inner>
		</Wrapper>
	)
}

export function Head({ data }: PageProps<Queries.BlogPostQuery>) {
	return (
		<Seo
			title={data.contentfulPageBlogPost?.title}
			description={data.contentfulPageBlogPost?.articleTextPreview}
			image={data.contentfulPageBlogPost?.mainImage?.file?.url ?? ""}
			pathname={`blog/${data.contentfulPageBlogPost?.slug ?? ""}`}
		/>
	)
}

const StyledIcon = styled(Icon)`
  ${fresponsive(css`
    width: 12px;
    height: 12px;
  `)}
`

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  background-color: ${colors.white};
`

const Inner = styled.div`
  width: 100%;
  max-width: ${desktopBreakpoint}px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${fresponsive(css`
    padding: 164px 156px 102px;
    gap: 48px;
  `)}
`

const Link = styled(UniversalLink)`
  ${textStyles.sh4}
  color: ${colors.gray800};

  &:last-of-type {
    color: ${colors.green400};
  }
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${fresponsive(css`
    gap: 14px;
    padding: 0 10px 20px;
    border-bottom: 1.5px solid ${colors.gray300};
  `)}
`

const Light = styled.div`
  ${textStyles.sh4}
  color: ${colors.gray600};
  margin-right: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`

const Content = styled.div`
  display: grid;
  width: 100%;
  
  ${fresponsive(css`
    grid-template-columns: 1fr 680px 1fr;
    margin-bottom: 70px;
  `)}

  ${ftablet(css`
    margin-top: 20px;
    margin-bottom: 127px;
  `)}

  ${fmobile(css`
    grid-template-columns: 0 318px 0;
    margin-bottom: 64px;
  `)}
`

const Socials = styled.div`
  ${fresponsive(css`
    display: grid;
    place-items: start end;
    gap: 16px;
  `)}
  ${ftablet(css`
    padding-right: 22px;
  `)}
`

const Related = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  margin: 0 auto;

  ${fresponsive(css`
    gap: 48px 24px;
  `)}

  ${ftablet(css`
    width: 884px;
    gap: 80px 22px;
  `)}

  ${fmobile(css`
    grid-template-columns: 1fr;
    width: 318px;
    gap: 36px;
  `)}
`

const RelatedHeading = styled.div`
  grid-column: span 3;
  text-align: center;
  ${textStyles.h6};
  color: ${colors.gray700};

  ${fmobile(css`
    grid-column: span 1;
    ${textStyles.h6};
    text-align: left;
    margin-bottom: -6px;
  `)}
`

export const query = graphql`
  query BlogPost($id: String) {
    contentfulPageBlogPost(id: { eq: $id }) {
      title
      slug
      articleTextPreview
      author {
        id
        headshot {
          gatsbyImageData
          createdAt
        }
        fullName
        roleAndCompany
      }
      mainImage {
        file {
          url
        }
        gatsbyImageData
        description
      }
      categories
      articleText {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 1000)
            __typename
          }
          ... on ContentfulComponentQuote {
            contentful_id
            quote
            quotee
            __typename
          }
        }
      }
      # relatedArticles {
      #   title
      #   slug
      #   mainImage {
      #     gatsbyImageData
      #     description
      #   }
      #   articleTextPreview
      #   overridePublishedDate(formatString: "MMMM Do, YYYY")
      #   createdAt(formatString: "MMMM Do, YYYY")
      #   author {
      #     id
      #     photo {
      #       gatsbyImageData
      #       createdAt
      #     }
      #     fullName
      #     roleAndCompany
      #   }
      # }
    }
    # get the three most recent blog posts that are not the current post
    allContentfulPageBlogPost(
      filter: { id: { nin: [$id, "e1d582e5-f8d2-52c5-a1eb-a758ee4a4f72"] } }
      sort: { createdAt: DESC }
      limit: 3
    ) {
      nodes {
        slug
        id
        createdAt(formatString: "MMMM Do, YYYY")
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
