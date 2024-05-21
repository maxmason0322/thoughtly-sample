import { ReactComponent as AudioSVG } from "images/home/hero/audio.svg"
import Background from "images/home/hero/call-widget-background.webp"
import { ReactComponent as PhoneSVG } from "images/home/hero/phone.svg"
import UniversalLink from "library/Loader/UniversalLink"
import { fresponsive } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import colors, { gradients } from "styles/colors"
import textStyles from "styles/text"
import links from "utils/links"

export default function CallWidget({ className = "" }: { className?: string }) {
	return (
		<Wrapper className={className}>
			<Image />
			<Content>
				<Phone />
				<PhoneNumber to={links.phone}>
					<span>+1 (855) 717-0250</span>
					<span>+1 (855) 717-0250</span>
				</PhoneNumber>
				<Text>Incoming Call</Text>
				<Audio />
			</Content>
		</Wrapper>
	)
}

const Image = styled.div`
  background-image: url(${Background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  transition: background-size 0.5s;

  ${fresponsive(css`
    width: 111px;
    height: 173px;
    border-radius: 12px;
  `)}
`

const PhoneNumber = styled(UniversalLink)`
  ${textStyles.sh2}
  color: ${colors.black};
  overflow: clip;
  text-align: center;
  position: relative;

  span {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    transition: transform 0.5s;

    &:last-of-type {
      transform: translateY(100%);
      color: ${colors.green400};
    }
  }

  ${fresponsive(css`
    height: 22px;
    width: 150px;
    margin-bottom: 6px;
  `)}
`

const Wrapper = styled.div`
  background: ${gradients.surface1};
  display: flex;
  align-items: center;

  &:hover {
    ${Image} {
      background-size: 150% 150%;
    }

    ${PhoneNumber} {
      span {
        &:first-of-type {
          transform: translateY(-100%);
        }

        &:last-of-type {
          transform: translateY(0%);
        }
      }
    }
  }

  ${fresponsive(css`
    padding: 12px;
    gap: 9px;
    border: 1.5px solid ${colors.gray300};
    width: 311px;
    height: 197px;
    border-radius: 18px;
    box-shadow: 0 -1px 6px 0 rgba(38 38 38 / 6%) inset,
      0 18px 32px 0 rgba(89 89 89 / 4%);
  `)}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Text = styled.span`
  ${textStyles.t2}
  color: #c3c3c3;

  ${fresponsive(css`
    margin-bottom: 23px;
  `)}
`

const Audio = styled(AudioSVG)`
  height: auto;

  ${fresponsive(css`
    width: 164px;
  `)}
`

const Phone = styled(PhoneSVG)`
  height: auto;

  ${fresponsive(css`
    width: 34px;
    margin-bottom: 6px;
  `)}
`
