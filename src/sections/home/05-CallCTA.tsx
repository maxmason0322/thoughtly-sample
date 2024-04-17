import PrimaryButton from "components/Buttons/Primary"
import { ReactComponent as LogoSVG } from "images/global/logo.svg"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles from "styles/text"
import links from "utils/links"
import { transparentText } from "styles/text"
import ConstantMarquee from "library/ConstantMarquee"
import UniversalLink from "library/Loader/UniversalLink"
import Circle from "components/Buttons/Circle"
import DotSVG from "images/global/icons/Dot.svg"
import Demo from "components/Buttons/Demo"
import { useState } from "react"
// import MouseFollower from "components/MouseFollower"

export default function CallCTA() {
	return (
		<Wrapper>
			<Inner>
				<Top>
					<Heading>
						The <TextSpan>future</TextSpan> is here–call it.
					</Heading>
					<Text>
						The proof is in the pudding– experience how Thoughtly is
						transforming customer interaction with one call.
					</Text>
				</Top>
				<Bottom>
					<MarqueeBorder>
						{/* <MouseFollower /> */}
						<Marquee timing={10}>
							<MarqueeSpan>
								<PhoneNumber to={links.todo}>+1 (855) 717-0250</PhoneNumber>
								<Circle />
							</MarqueeSpan>
						</Marquee>
					</MarqueeBorder>
				</Bottom>
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	width: 100%;
    display: grid;
    place-items: center;
`

const Inner = styled.div`
    width: 100%;
    max-width: ${desktopBreakpoint}px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    ${fresponsive(css`
        gap: 36px;
        padding: 96px 0 72px;
        width: 1128px;
        border-top: 1.5px solid ${colors.gray300};
    `)}
`

const Heading = styled.h1`
    ${textStyles.h5};
    color: ${colors.black};
`

const Text = styled.p`
    ${textStyles.bodyL};
    color: ${colors.gray700};
    text-align: center;

    ${fresponsive(css`
        width: 395px;
    `)}
`

const Bottom = styled.div`
    ${fresponsive(css`
        padding: 0 61px 122px;
        border-radius: 60px;
    `)}
`

const Marquee = styled(ConstantMarquee)`
    &:hover {
        a {
            ${transparentText};
            background-image: ${gradients.greenGreen};
        }
    }
`

const TextSpan = styled.span`
    ${transparentText};
    background-image: ${gradients.greenBlue};
`

const PhoneNumber = styled(UniversalLink)`
    ${textStyles.h2};
    color: ${colors.gray900};

    ${fresponsive(css`
        padding: 0 54px;
    `)}
`

const MarqueeBorder = styled.div`
    display: flex;
    align-items: center;
    background-image: url(${DotSVG});
    background-repeat: repeat;
    background-size: 100% 100%;
    background-position: center center;
    background-color: ${colors.gray100};
    overflow: hidden;

    ${fresponsive(css`
        width: 1320px;
        height: 382px;
        border-radius: 60px;
        background-size: 21px 21px;
    `)}
`

const MarqueeSpan = styled.span`
    display: flex;
    align-items: center;
`
