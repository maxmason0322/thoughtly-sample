import UniversalLink, {
	type UniversalLinkProps,
} from "library/Loader/UniversalLink"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import textStyles from "styles/text"

type Props = UniversalLinkProps

export default function DemoButton({ ...props }: Props) {
	return (
		<Wrapper {...props}>
			<Inner>Call for a Live Demo</Inner>
		</Wrapper>
	)
}

const Wrapper = styled(UniversalLink)`
  width: fit-content;
  display: flex;
  position: relative;

  ${fresponsive(css`
    height: 41px;
  `)}
`

const Inner = styled.div`
  display: flex;
  width: fit-content;
  position: relative;
  align-items: center;
  justify-content: center;
  ${textStyles.sh3};
  color: #000;
  height: 100%;

  ${fresponsive(css`
    border-radius: 10px;
    padding: 12px 18px;
    border: 1.5px solid #E4E4E4;
    box-shadow: 0 18px 42px 0 rgba(89 89 89 / 4%);
    background: linear-gradient(210deg, #FFF 2.03%, #F7F7F7 255.34%);
  `)}
`
