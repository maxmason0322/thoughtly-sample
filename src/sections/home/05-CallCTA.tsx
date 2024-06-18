import Circle from "components/Buttons/Circle"
import MouseFollower from "components/MouseFollower"
import gsap from "gsap"
import ConstantMarquee from "library/ConstantMarquee"
import UniversalLink, {
	type UniversalLinkRef,
} from "library/Loader/UniversalLink"
import { ScreenContext } from "library/ScreenContext"
import useCanHover from "library/canHover"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import { useContext, useRef } from "react"
import styled, { css } from "styled-components"
import { Dots } from "styles/background"
import colors, { gradients } from "styles/colors"
import {
	desktopBreakpoint,
	mobileBreakpoint,
	tabletBreakpoint,
} from "styles/media"
import textStyles from "styles/text"
import { transparentText } from "styles/text"
import links from "utils/links"

export default function CallCTA() {
	const { mobile } = useContext(ScreenContext)
	const phoneRef = useRef<UniversalLinkRef>(null)
	const canHover = useCanHover()

	const handleMouseEnter = () => {
		if (!canHover) return

		gsap.to(phoneRef.current?.querySelectorAll(".phoneNumber") ?? [], {
			duration: 0.25,
			backgroundImage: gradients.greenGreen,
		})
	}

	const handleMouseLeave = () => {
		gsap.to(phoneRef.current?.querySelectorAll(".phoneNumber") ?? [], {
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
						{canHover && <MouseFollower />}
						<MarqueeBorder
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							to={links.phone}
							forwardRef={phoneRef}
						>
							<Dots />
							<Marquee timing={mobile ? 7 : 10}>
								<MarqueeSpan>
									<PhoneNumber className="phoneNumber">
										+1 (855) 717-0250
									</PhoneNumber>
									<Circle />
								</MarqueeSpan>
							</Marquee>
							{mobile && (
								<Marquee timing={mobile ? 7 : 10} reversed>
									<MarqueeSpan>
										<PhoneNumber className="phoneNumber">
											+1 (855) 717-0250
										</PhoneNumber>
										<Circle />
									</MarqueeSpan>
								</Marquee>
							)}
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
	background-color: ${colors.beige200};
`

const Inner = styled.div`
	width: 100%;
	max-width: ${desktopBreakpoint}px;
	display: flex;
	flex-direction: column;
	align-items: center;

	${ftablet(css`
		max-width: ${tabletBreakpoint}px;
	`)}

	${fmobile(css`
		max-width: ${mobileBreakpoint}px;
	`)}
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

	${ftablet(css`
		width: 888px;
	`)}

  ${fmobile(css`
		width: 320px;
		padding: 60px 27px 48px;
		margin-top: 91px;
	`)}
`

const Heading = styled.h1`
	${textStyles.h5};
	color: ${colors.black};

	${fmobile(css`
		width: 350px;
		text-align: center;
	`)}
`

const Text = styled.p`
	${textStyles.bodyL};
	color: ${colors.gray700};
	text-align: center;

	${fresponsive(css`
		width: 395px;
	`)}

	${fmobile(css`
		width: 300px;
	`)}
`

const Bottom = styled.div`
	${fresponsive(css`
		padding: 0 61px 122px;
	`)}

	${ftablet(css`
		padding: 0 21px 122px;
	`)}

    ${fmobile(css`
		padding: 0 9px 68px;
	`)}
`

const MarqueeWrapper = styled.div`
	position: relative;
	${fresponsive(css`
		width: 1320px;
		height: 382px;
		border-radius: 60px;
	`)}

	${ftablet(css`
		width: 982px;
		height: 382px;
	`)}

    ${fmobile(css`
		width: 358px;
		height: 191px;
		border-radius: 36px;
	`)}
`

const TextSpan = styled.span`
	${transparentText};
	background-image: ${gradients.greenBlue};
`

const PhoneNumber = styled.div`
	${textStyles.h2};
	${transparentText};
	background-image: ${gradients.grayGray};

	${fresponsive(css`
		padding: 10px 54px;
		margin: -10px auto;
	`)}

	${fmobile(css`
		padding: 0 21.6px;
		${textStyles.h6};
	`)}
`

const MarqueeBorder = styled(UniversalLink)`
	display: flex;
	align-items: center;
	position: relative;
	background-color: ${colors.gray100};
	overflow: hidden;
	${fresponsive(css`
		width: 1320px;
		height: 398px;
		border-radius: 60px;
	`)}

	${ftablet(css`
		width: 982px;
	`)}

  ${fmobile(css`
		width: 358px;
		height: 191px;
		border-radius: 36px;
		flex-direction: column;
		justify-content: center;
	`)}
`

const MarqueeSpan = styled.span`
	display: flex;
	align-items: center;
`

const Marquee = styled(ConstantMarquee)`
	${ftablet(css`
		transform: translateZ(0);
	`)}

	${fmobile(css`
		height: 70px;
		display: flex;
		align-items: center;
	`)}
`
