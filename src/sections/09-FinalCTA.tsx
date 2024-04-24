import Primary from "components/Buttons/Primary"
import Kicker from "components/Kicker"
import { ReactComponent as GraphSVG } from "images/global/graph.svg"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import {
	desktopBreakpoint,
	mobileBreakpoint,
	tabletBreakpoint,
} from "styles/media"
import textStyles from "styles/text"
import links from "utils/links"

export default function FinalCTA() {
	return (
		<Wrapper>
			<Inner>
				<Top>
					<Left>
						<Kicker>Scale with Ease</Kicker>
						<Header>Join the communication revolution.</Header>
					</Left>
					<Right>
						<Row>
							<Primary to={links.todo} outline>
								Build your own Thoughtly
							</Primary>
							<Primary to={links.todo} variant="secondary" icon="chev">
								Book a Demo
							</Primary>
						</Row>
						<Content>
							Slash your costs and transform your customer experience. The
							generative AI revolution is here. Don't get left behind.
						</Content>
					</Right>
				</Top>
				<Graph />
			</Inner>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  position: relative;
`

const Inner = styled.div`
  width: 100%;
  height: 1131px;
  max-width: ${desktopBreakpoint}px;

  ${ftablet(css`
    max-width: ${tabletBreakpoint}px;
  `)}

  ${fmobile(css`
    max-width: ${mobileBreakpoint}px;
  `)}
`

const Top = styled.div`
  display: flex;
  flex-direction: row;

  ${fresponsive(css`
    gap: 98px;
  `)}
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;

  ${fresponsive(css`
    gap : 18px;
    width: 647px;
    top: 79px;
    left: 156px;

    /* padding: 79px 97px 0 156px; */
  `)}
`

const Header = styled.h1`
  ${textStyles.h3}
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  
  ${fresponsive(css`
    gap: 32px;
    right: 156px;
    top: 248px;
  `)}
`

const Row = styled.div`
  display: flex;
  flex-direction: row;

  ${fresponsive(css`
    gap: 20px;  
  `)}
`

const Content = styled.p`
  ${textStyles.bodyR}

  ${fresponsive(css`
    width: 374px;
  `)}
`

const Graph = styled(GraphSVG)`
  width: 1578px;
  height: 653px;
`
