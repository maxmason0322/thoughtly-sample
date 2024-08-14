import * as Form from "@radix-ui/react-form"
import gsap from "gsap"
import { ScreenContext } from "library/ScreenContext"
import useCanHover from "library/canHover"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useContext, useRef, useState } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles, { trim } from "styles/text"
import Primary, { Border } from "./Buttons/Primary"

const endpoint = "fns.thought.ly/lead/email?email="

export default function EmailInput({ customWidth }: { customWidth?: number }) {
	const borderRef = useRef<HTMLDivElement | null>(null)
	const [isFocused, setIsFocused] = useState(false)
	const [placeholder, setPlaceholder] = useState("What is your work email?")
	const { mobile } = useContext(ScreenContext)
	const canHover = useCanHover()

	const handleFocus = () => {
		setPlaceholder("your@email.com")
		setIsFocused(true)
	}

	const handleBlur = () => {
		setPlaceholder("What is your work email?")
		setIsFocused(false)
	}

	useAnimation(() => {
		if (!isFocused) return

		gsap.to(borderRef.current, {
			width: "95%",
			height: "90%",
			duration: 0.15,
		})
	}, [isFocused])

	return (
		<Wrapper
			$customWidth={customWidth}
			onSubmit={(e) => {
				e.preventDefault()

				const formData = new FormData(e.currentTarget)
				const email = formData.get("email")

				const urlParams = new URLSearchParams(window.location.search)
				const queryParams = urlParams.toString()

				// add referrer to query params
				if (document.referrer) {
					urlParams.append(
						"referrer",
						document.referrer
							.replace(/^(https?:\/\/)?(www\.)?/, "")
							.replace(/\/$/, ""),
					)
				}

				if (typeof email === "string") {
					const url = `https://${endpoint}${encodeURIComponent(email)}&${queryParams}`
					window.open(url, "_blank")
				}
			}}
		>
			<Row>
				{canHover && <StyledBorder ref={borderRef} />}
				<Field name="email">
					<Input
						placeholder={
							mobile || (customWidth && customWidth < 400)
								? "What is your email?"
								: placeholder
						}
						type="email"
						required
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					<Message match="valueMissing">Invalid Email</Message>
					<Message match="typeMismatch">Invalid Email</Message>
					<Message match={(v) => !/@.*\./.test(v)}>Invalid Email</Message>
					<Submit icon="chev" ariaLabel="submit email" type="submit">
						Get Started
					</Submit>
				</Field>
			</Row>
		</Wrapper>
	)
}

const StyledBorder = styled(Border)`
	width: 95%;
	transition:
		width 0.35s,
		height 0.35s;

	${fresponsive(css`
		border-radius: 19px;
	`)}
`

const Wrapper = styled(Form.Root)<{ $customWidth?: number }>`
	border: 1.5px solid ${colors.gray300};

	${({ $customWidth }) =>
		fresponsive(css`
			border-radius: 16px;
			width: ${$customWidth ? `${$customWidth}px` : "366px"};
		`)}

	${({ $customWidth }) =>
		ftablet(css`
			width: ${$customWidth ? `${$customWidth}px` : "450px"};
		`)}

	${({ $customWidth }) =>
		fmobile(css`
			width: ${$customWidth ? `${$customWidth}px` : "322px"};
			margin-left: 0;
			margin-right: 0;
			gap: 22px;
		`)}

  &:hover {
		${Border} {
			width: calc(100% + 14px);
			height: calc(100% + 12px);
		}
	}
`

const Row = styled.div`
	position: relative;

	${fresponsive(css`
		gap: 16px;
		display: flex;
		align-items: start;
		width: 100%;
	`)}
`

const Submit = styled(Primary)`
	color: ${colors.black};
	position: absolute;
	z-index: 2;

	${fresponsive(css`
		border-radius: 50%;
		right: 3px;
		flex-shrink: 0;
	`)}
`

const Field = styled(Form.Field)`
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;
	width: 100%;

	${fmobile(css`
		width: 100%;
	`)}
`

const Input = styled(Form.Control)`
	${trim(1.2)};
	${textStyles.sh3}
	width: 100%;
	background-color: ${colors.white};

	${fresponsive(css`
		height: 55.5px;
		padding: 16px;
		border-radius: 15px;
	`)}

	${ftablet(css`
		${textStyles.sh2}
		height: 63px;
	`)}

	&::placeholder {
		color: ${colors.gray600};
	}

	&:focus {
		outline: none;
	}
`

const Message = styled(Form.Message)`
	position: absolute;
	color: #f76161;
	${textStyles.t2}

	${fresponsive(css`
		margin-left: 16px;
		margin-top: 88px;
	`)}
`
