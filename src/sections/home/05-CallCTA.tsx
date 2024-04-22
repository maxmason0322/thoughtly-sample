import Circle from "components/Buttons/Circle"
import MouseFollower from "components/MouseFollower"
import gsap from "gsap"
import DotSVG from "images/global/icons/Dot.svg"
import ConstantMarquee from "library/ConstantMarquee"
import UniversalLink from "library/Loader/UniversalLink"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import { desktopBreakpoint } from "styles/media"
import textStyles from "styles/text"
import { transparentText } from "styles/text"

export default function CallCTA() {
	const handleMouseEnter = () => {
		gsap.to(".phoneNumber", {
			duration: 0.25,
			backgroundImage: gradients.greenGreen,
		})
	}

	const handleMouseLeave = () => {
		gsap.to(".phoneNumber", {
			duration: 0.25,
			backgroundImage: gradients.grayGray,
		})
	}

	return (
		<Wrapper>
			<Inner>
				<Top>
					<Heading>
						The <TextSpan>future</TextSpan> is here–call it.
					</Heading>
					<Text>
						The proof is in the pudding–experience how Thoughtly is transforming
						customer interaction with one call.
					</Text>
				</Top>
				<Bottom>
					<MarqueeWrapper>
						<MouseFollower />
						<MarqueeBorder>
							<BackgroundBorder />
							<ConstantMarquee timing={10}>
								<MarqueeSpan>
									<PhoneNumber
										onMouseEnter={handleMouseEnter}
										onMouseLeave={handleMouseLeave}
										className="phoneNumber"
										to="tel:+18557170250"
									>
										+1 (855) 717-0250
									</PhoneNumber>
									<Circle />
								</MarqueeSpan>
							</ConstantMarquee>
						</MarqueeBorder>
					</MarqueeWrapper>
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

const MarqueeWrapper = styled.div`
    position: relative;
    ${fresponsive(css`
        width: 1320px;
        height: 382px;
        border-radius: 60px;
    `)}
`

const TextSpan = styled.span`
    ${transparentText};
    background-image: ${gradients.greenBlue};
`

const PhoneNumber = styled(UniversalLink)`
    ${textStyles.h2};
    ${transparentText};
    background-image: ${gradients.grayGray};

    ${fresponsive(css`
        padding: 0 54px;
    `)}
`

const MarqueeBorder = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${colors.gray100};
    overflow: hidden;
    ${fresponsive(css`
        width: 1320px;
        height: 382px;
        border-radius: 60px;
    `)}
`

const BackgroundBorder = styled.div`
    position: absolute;
    background-image: url(${DotSVG});
    background-repeat: repeat;
    background-size: 100% 100%;
    background-position: center center;

    ${fresponsive(css`
        inset: 15px;
        background-size: 23px 23px;
    `)}
`

const MarqueeSpan = styled.span`
    display: flex;
    align-items: center;
`
