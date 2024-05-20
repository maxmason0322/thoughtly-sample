import Icon from "components/Icon"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive } from "library/fullyResponsive"
import { useParamState } from "library/useParamState"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

export default function SearchBar() {
	const [category, setCategory] = useParamState("category")
	const [query, setQuery] = useParamState("query")
	const [showAll, setShowAll] = useParamState("showAll")

	return (
		<Wrapper>
			<Row>
				<Input
					name="search"
					value={query ?? ""}
					onChange={(e) => setQuery(e.target.value || null)}
					type="text"
					placeholder="Search the blog..."
				/>
				<SearchIcon name="search" />
			</Row>

			{Boolean(category) || Boolean(query) || Boolean(showAll) ? (
				<ClearButton
					type="button"
					onClick={() => {
						setCategory(null)
						setQuery(null)
						setShowAll(null)
					}}
				>
					{/* <ClearIcon /> */}
					Clear Filters / Categories
				</ClearButton>
			) : null}
		</Wrapper>
	)
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.gray100};

  ${fresponsive(css`
    margin-bottom: 32px;
    padding: 12px;
    border-radius: 12px;
  `)}

  ${fmobile(css`
    flex-direction: column;
    align-items: stretch;
    gap: 26px;
  `)}
`

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

const SearchIcon = styled(Icon)`
  ${fresponsive(css`
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  `)}
`

const Input = styled.input`
  ${textStyles.bodyS}
  ${fresponsive(css`
    height: 20px;
    width: 100%;
  `)}

  &::placeholder {
    color: ${colors.gray800};
  }

  &:focus {
    outline: none;
  }
`

const ClearButton = styled(UniversalLink)`
  ${textStyles.bodyS}
  ${fresponsive(css`
    display: flex;
    gap: 12px;
    align-items: center;

    /* color: ${colors.charcoal500}; */
    white-space: nowrap;
    flex-shrink: 0;
  `)}
  ${fmobile(css`
    padding-top: 20px;

    /* border-top: 1px solid ${colors.charcoal200}; */
  `)}
`

// const ClearIcon = styled(ClearIconSVG)`
//   ${fresponsive(css`
//     width: 16px;
//     height: 16px;
//   `)}
// `
