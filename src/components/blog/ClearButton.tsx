import Icon from "components/Icon"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive } from "library/fullyResponsive"
import { useParamState } from "library/useParamState"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

export default function ClearButton() {
	const [category, setCategory] = useParamState("category")
	const [query, setQuery] = useParamState("query")
	const [showAll, setShowAll] = useParamState("showAll")
	return (
		<>
			{Boolean(category) || Boolean(query) || Boolean(showAll) ? (
				<Wrapper
					type="button"
					onClick={() => {
						setCategory(null)
						setQuery(null)
						setShowAll(null)
					}}
				>
					<ClearIcon name="x" />
					Clear Filters / Search
				</Wrapper>
			) : null}
		</>
	)
}

const Wrapper = styled(UniversalLink)`
  ${textStyles.sh4}
  color: ${colors.gray800};

  ${fresponsive(css`
    display: flex;
    gap: 10px;
    align-items: center;
    white-space: nowrap;
    flex-shrink: 0;
  `)}

  ${fmobile(css`
    padding-top: 20px;
  `)}
`

const ClearIcon = styled(Icon)`
  path {
    stroke: ${colors.black};
  }

  ${fresponsive(css`
    width: 16px;
    height: 16px;
  `)}
`
