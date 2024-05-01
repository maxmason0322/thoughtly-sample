import Tag from "components/Tag"
import UniversalImage, { type UniversalImageData } from "library/UniversalImage"
import { fmobile, fresponsive } from "library/fullyResponsive"
import type { ReactNode } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"

export default function Card({
	children,
	tag,
	logo,
}: {
	logo?: UniversalImageData
	children?: ReactNode
	tag?: string | null
}) {
	return (
		<Wrapper>
			<Top>
				{logo && <Logo objectFit="contain" image={logo} alt={"logo"} />}
				{tag && <Tag>{tag}</Tag>}
			</Top>
			{children && <Text>{children}</Text>}
		</Wrapper>
	)
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    padding: 24px;
    border-radius: 18px;
    border: 1.5px solid ${colors.gray400};
    gap: 24px;
    width: 331px;
    box-shadow: 0 18px 32px 0 rgba(89 89 89 / 4%);
  `)}

  ${fmobile(css`
    padding: 18px 24px;
    gap: 12px;
    width: 232px;
    height: 106px;
  `)}
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Text = styled.p`
  ${textStyles.bodyXS}
  color: ${colors.gray700};

  ${fresponsive(css`
    width: 220px;
  `)}

  ${fmobile(css`
    width: 184px;
  `)}
`

const Logo = styled(UniversalImage)`
  flex-grow: 0;

  img {
    object-position: left center;
  }

  ${fresponsive(css`
    height: 40px;
  `)}

  ${fmobile(css`
    height: 30px;
  `)}
`
