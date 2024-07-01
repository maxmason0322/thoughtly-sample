import Icon from "components/Icon"
import { fmobile, fresponsive } from "library/fullyResponsive"
import { useParamState } from "library/useParamState"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

export default function SearchBar() {
	const [query, setQuery] = useParamState("query")
	const safeQuery = query ?? ""

	return (
		<Wrapper>
			<Row>
				<Input
					name="search"
					value={safeQuery}
					onChange={(e) => setQuery(e.target.value)}
					type="text"
					placeholder="Search the blog..."
				/>
				<SearchIcon name="search" />
			</Row>
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
