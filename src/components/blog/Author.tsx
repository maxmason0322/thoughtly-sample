import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles from "styles/text"
import type { Author as AuthorType } from "types/aliases"

export default function Author({ data }: { data: AuthorType }) {
	return (
		<Wrapper>
			<ProfilePhoto
				image={data?.headshot?.gatsbyImageData}
				alt={data?.fullName ?? ""}
			/>
			<Info>
				<div>{data.fullName}</div>
				<div>{data.roleAndCompany}</div>
			</Info>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  ${textStyles.bodyXS};
  color: ${colors.gray800};
  display: flex;
  align-items: center;

  ${fresponsive(css`
    gap: 8px;
  `)}

  ${ftablet(css`
    ${textStyles.bodyS};
    gap: 3px;
  `)}
  
  ${fmobile(css`
    ${textStyles.sh4};
    gap: 8px;
  `)}
`

const ProfilePhoto = styled(UniversalImage)`
  ${fresponsive(css`
    width: 36px;
    height: 36px;
    border-radius: 99vw;
    isolation: isolate;
    overflow: clip;
  `)}

  ${ftablet(css`
    width: 48px;
    height: 48px;
  `)}

  ${fmobile(css`
    width: 48px;
    height: 48px;
  `)}
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
