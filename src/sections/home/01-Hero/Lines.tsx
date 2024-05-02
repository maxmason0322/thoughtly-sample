import { ReactComponent as ActionSpeakLineSVG } from "images/home/hero/action-speak-line.svg"
import { ReactComponent as ActionSpeakTabletSVG } from "images/home/hero/action-speak-tablet.svg"
import { ReactComponent as Speak1TabletSVG } from "images/home/hero/speak-1-tablet.svg"
import { ReactComponent as Speak2TabletSVG } from "images/home/hero/speak-2-tablet.svg"
import { ReactComponent as Speak3TabletSVG } from "images/home/hero/speak-3-tablet.svg"
import { ReactComponent as Speak4TabletSVG } from "images/home/hero/speak-4-tablet.svg"
import { ReactComponent as SpeakTestLineSVG } from "images/home/hero/speak-abtest-line.svg"
import { ReactComponent as SpeakActionLineSVG } from "images/home/hero/speak-action-line.svg"
import { ReactComponent as SpeakActionTabletSVG } from "images/home/hero/speak-action-tablet.svg"
import { ReactComponent as SpeakLine1SVG } from "images/home/hero/speak-line-1.svg"
import { ReactComponent as SpeakLine2SVG } from "images/home/hero/speak-line-2.svg"
import { ReactComponent as SpeakLine3SVG } from "images/home/hero/speak-line-3.svg"
import { ReactComponent as SpeakLine4SVG } from "images/home/hero/speak-line-4.svg"
import { ReactComponent as SpeakTestTabletSVG } from "images/home/hero/speak-test-tablet.svg"
import { ReactComponent as StartSpeakLineSVG } from "images/home/hero/start-speak-line.svg"
import { ReactComponent as StartSpeakTabletSVG } from "images/home/hero/start-speak-tablet.svg"
import { ReactComponent as TestLine1SVG } from "images/home/hero/test-line-1.svg"
import { ReactComponent as TestSpeakLineSVG } from "images/home/hero/test-speak-line.svg"
import { ReactComponent as TestSpeakTabletSVG } from "images/home/hero/test-speak-tablet.svg"
import { ReactComponent as Test1TabletSVG } from "images/home/hero/test-tablet.svg"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"

export default function Lines() {
	return (
		<>
			<StartSpeakLine />
			<SpeakActionLine />
			<SpeakTestLine />
			<ActionSpeakLine />
			<TestSpeakLine />
			<TestLine />
			<SpeakLine1 />
			<SpeakLine2 />
			<SpeakLine3 />
			<SpeakLine4 />
			<StartSpeakTablet />
			<SpeakActionTablet />
			<SpeakTestTablet />
			<ActionSpeakTablet />
			<TestSpeakTablet />
			<Test1Tablet />
			<Speak1Tablet />
			<Speak2Tablet />
			<Speak3Tablet />
			<Speak4Tablet />
		</>
	)
}

const StartSpeakLine = styled(StartSpeakLineSVG)`
  position: absolute;

  path {
    opacity: 0;
  }

  ${fresponsive(css`
    height: 210px;
    width: 122px;
    right: 419px;
    top: 552px;
  `)}

  ${ftablet(css`
    display: none;
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const SpeakActionLine = styled(SpeakActionLineSVG)`
  position: absolute;

  path {
    opacity: 0;
  }

  ${fresponsive(css`
    width: 132px;
    height: 43px;
    right: 347px;
    top: 960px;
  `)}

  ${ftablet(css`
    display: none;
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const SpeakTestLine = styled(SpeakTestLineSVG)`
  position: absolute;

  ${fresponsive(css`
    width: 546px;
    height: 319px;
    right: 601px;
    top: 959px;
  `)}

  ${ftablet(css`
    display: none;
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const ActionSpeakLine = styled(ActionSpeakLineSVG)`
  position: absolute;

  ${fresponsive(css`
    width: 578px;
    height: 309px;
    right: 349px;
    top: 1296px;
  `)}

  ${ftablet(css`
    display: none;
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const TestSpeakLine = styled(TestSpeakLineSVG)`
  position: absolute;

  ${fresponsive(css`
    width: 152px;
    height: 42px;
    right: 926px;
    top: 1560px;
  `)}

  ${ftablet(css`
    display: none;
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const TestLine = styled(TestLine1SVG)`
  position: absolute;

  ${fresponsive(css`
    width: 200px;
    height: 209px;
    top: 1560px;
    right: 1179px;
  `)}

  ${ftablet(css`
    display: none;
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const SpeakLine1 = styled(SpeakLine1SVG)`
  position: absolute;

  ${fresponsive(css`
    width: 192px;
    height: 68px;
    bottom: 60px;
    right: 1037px;
  `)}

  ${ftablet(css`
    display: none;
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const SpeakLine2 = styled(SpeakLine2SVG)`
  position: absolute;

  ${fresponsive(css`
    width: 192px;
    height: 68px;
    bottom: 60px;
    right: 960px;
  `)}

  ${ftablet(css`
    display: none;
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const SpeakLine3 = styled(SpeakLine3SVG)`
  position: absolute;

  ${fresponsive(css`
    width: 313px;
    height: 70px;
    bottom: 60px;
    right: 763px;
  `)}

  ${ftablet(css`
    display: none;
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const SpeakLine4 = styled(SpeakLine4SVG)`
  position: absolute;

  ${fresponsive(css`
    width: 225px;
    height: 107px;
    bottom: 36px;
    right: 592px;
  `)}

  ${ftablet(css`
    display: none;
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const StartSpeakTablet = styled(StartSpeakTabletSVG)`
  display: none;

  ${ftablet(css`
    display: flex;
    position: absolute;
    width: 84px;
    height: 90px;
    top: 1038px;
    right: 310px;
  `)}
`

const SpeakActionTablet = styled(SpeakActionTabletSVG)`
  display: none;

  ${ftablet(css`
    display: flex;
    position: absolute;
    height: 70px;
    width: 9px;
    top: 1326px;
    right: 238px;
  `)}
`

const SpeakTestTablet = styled(SpeakTestTabletSVG)`
  display: none;

  ${ftablet(css`
    display: flex;
    position: absolute;
    width: 420px;
    height: 250px;
    top: 1326px;
    right: 375px;
  `)}
`

const ActionSpeakTablet = styled(ActionSpeakTabletSVG)`
  display: none;

  ${ftablet(css`
    display: flex;
    position: absolute;
    width: 435px;
    height: 255px;
    top: 1685px;
    right: 236px;
  `)}
`

const TestSpeakTablet = styled(TestSpeakTabletSVG)`
  display: none;

  ${ftablet(css`
    display: flex;
    position: absolute;
    width: 62px;
    height: 95px;
    top: 1850px;
    right: 667px;
  `)}
`

const Test1Tablet = styled(Test1TabletSVG)`
  display: none;

  ${ftablet(css`
    display: flex;
    position: absolute;
    width: 148px;
    height: 221px;
    top: 1845px;
    left: 25px;
  `)}
`

const Speak1Tablet = styled(Speak1TabletSVG)`
  display: none;

  ${ftablet(css`
    display: flex;
    position: absolute;
    width: 166px;
    height: 52px;
    bottom: 24px;
    left: 76px;
  `)}
`

const Speak2Tablet = styled(Speak2TabletSVG)`
  display: none;

  ${ftablet(css`
    display: flex;
    position: absolute;
    width: 166px;
    height: 52px;
    bottom: 24px;
    left: 155px;
  `)}
`

const Speak3Tablet = styled(Speak3TabletSVG)`
  display: none;

  ${ftablet(css`
    display: flex;
    position: absolute;
    width: 121px;
    height: 52px;
    bottom: 24px;
    left: 346px;
  `)}
`

const Speak4Tablet = styled(Speak4TabletSVG)`
  display: none;

  ${ftablet(css`
    display: flex;
    position: absolute;
    width: 166px;
    height: 52px;
    bottom: 24px;
    left: 465px;
  `)}
`
