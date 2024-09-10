import Icon, { type IconType } from "components/Icon"
import { graphql, useStaticQuery } from "gatsby"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import { useParamState } from "library/useParamState"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

export default function ContentType() {
	const [contentType, setContentType] = useParamState("contentType")

	const data: Queries.ContentTypeQuery = useStaticQuery(graphql`
    query ContentType {
      allContentfulPageBlogPost {
				items: nodes {
					contentType {
						contentTypeName
						iconName
					}
				}
      }
    }
  `)

	const contentTypeEls = data.allContentfulPageBlogPost.items
		.filter((item) => item.contentType !== null)
		.map((item) => {
			const isSelected = item.contentType?.contentTypeName === contentType
			return (
				<ContentTypeWrapper
					key={item.contentType?.contentTypeName}
					type="button"
					onClick={() =>
						setContentType(item.contentType?.contentTypeName ?? "")
					}
				>
					{item.contentType?.iconName && (
						<ContentTypeIcon
							name={item.contentType?.iconName as IconType}
							color={isSelected ? colors.green500 : colors.gray500}
						/>
					)}
					<Text style={{ color: isSelected ? colors.gray900 : colors.gray700 }}>
						{item.contentType?.contentTypeName}
					</Text>
				</ContentTypeWrapper>
			)
		})

	return (
		<Wrapper>
			<ContentTypeHeader>Content Type</ContentTypeHeader>
			{contentTypeEls}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	${fresponsive(css`
		display: grid;
		gap: 5px;
		grid-row: 1 / -2;
		margin-bottom: 32px;
		padding-left: 22px;
	`)}

	${ftablet(css`
		gap: 10px;
	`)}

  ${fmobile(css`
		grid-template-columns: auto 1fr;
		place-items: start;
		gap: 7px 48px;
		padding-top: 36px;
		padding-bottom: 20px;
		margin-bottom: 48px;
		border-bottom: 1px solid ${colors.gray300};
		padding-left: 0;
	`)}
`

const ContentTypeWrapper = styled(UniversalLink)`
	${textStyles.sh4}
	display: flex;
	align-items: center;

	${fresponsive(css`
		gap: 4px;
	`)}

  ${fmobile(css`
		height: 30px;
	`)}
`

const ContentTypeHeader = styled.div`
	${textStyles.sh2};
	color: ${colors.black};

	${fresponsive(css`
		display: flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 10px;
	`)}

	${ftablet(css`
		margin-bottom: 10px;
	`)}

  ${fmobile(css`
		padding-top: 8px;
		margin-bottom: 0;
		grid-row: 1 / 7;
	`)}
`

const ContentTypeIcon = styled(Icon)`
	${fresponsive(css`
		width: auto;
		height: 16px;
	`)}
`

const Text = styled.div`
	transition: background-color 0.25s;

	${fresponsive(css`
		padding: 8px 10px;
		border-radius: 8px;
	`)}

	&:hover {
		background-color: ${colors.beige300};
	}
`
