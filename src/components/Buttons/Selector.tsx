import UniversalLink, {
	type UniversalLinkProps,
} from "library/Loader/UniversalLink"
import { fresponsive } from "library/fullyResponsive"
import type { ReactNode } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

type Props = UniversalLinkProps & {
	children: ReactNode
	active: boolean
}

export default function Selector({ children, active, ...props }: Props) {
	return (
		<Wrapper $active={active} {...props}>
			<Border />
			<Inner>
				{children}
				<Radio>
					<Dot />
				</Radio>
			</Inner>
		</Wrapper>
	)
}

const Border = styled.div`
  position: absolute;
  z-index: -1;
  width: 90%;
  height: 90%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: height 0.25s, width 0.25s;

  ${fresponsive(css`
    border-radius: 14px;
    border: 2px solid ${colors.green400};
  `)}
`

const Inner = styled.div`
  background-color: ${colors.white};
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  ${textStyles.sh3}
  color: ${colors.black};
  
  ${fresponsive(css`
    border-radius: 12px;
    border: 1.5px solid ${colors.gray200};
    padding: 0 24px;
    gap: 24px;
  `)}
`

const Radio = styled.div`
  border-radius: 99vw;
  transition: background-color 0.25s;
  display: grid;
  place-items: center;

  ${fresponsive(css`
    width: 16px;
    height: 16px;
    box-shadow: 0 1px 1.8px 0 rgba(0 0 0 / 2%) inset;
  `)}
`

const Dot = styled.div`
  border-radius: 99vw;
  background-color: ${colors.green400};
  transition: opacity 0.25s;

  ${fresponsive(css`
    height: 8px;
    width: 8px;
    box-shadow: 0 1px 1.8px 0 rgba(0 0 0 / 2%) inset;
  `)}
`

const Wrapper = styled(UniversalLink)<{ $active: boolean }>`
  width: fit-content;
  position: relative;
  cursor: pointer;

  ${Dot} {
    opacity: ${({ $active }) => ($active ? 1 : 0)};
  }

  ${Radio} {
    background-color: ${({ $active }) =>
			$active ? colors.green100 : colors.gray200};
  }

  ${Border} {
    height: ${({ $active }) => ($active ? "calc(100% + 4px)" : "90%")};
    width: ${({ $active }) => ($active ? "calc(100% + 4px)" : "90%")};
  }

  &:hover {
    ${Inner} {
      border-color: ${colors.gray300};
    }
  }

  ${fresponsive(css`
    height: 50px;
  `)}
`
