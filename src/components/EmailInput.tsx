import * as Form from "@radix-ui/react-form"
import gsap from "gsap"
import { ScreenContext } from "library/ScreenContext"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useContext, useRef, useState } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles, { trim } from "styles/text"
import Primary, { Border } from "./Buttons/Primary"

const endpoint = "api.thought.ly/public/email?email="

const sendEmail = async (email: string) => {
	const response = await fetch(
		`https://api.thought.ly/public/email?email=${encodeURIComponent(email)}`,
	)
	console.log(response)

	if (!response.ok) {
		throw new Error(
			`Submission failed: ${response.status} ${response.statusText}`,
		)
	}
}

export default function EmailInput() {
	const borderRef = useRef<HTMLDivElement | null>(null)
	const [isFocused, setIsfFocused] = useState(false)
	const [placeholder, setPlaceholder] = useState("What is your work email?")
	const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
		"idle",
	)
	const { mobile } = useContext(ScreenContext)

	const handleFocus = () => {
		setPlaceholder("your@email.com")
		setIsfFocused(true)
	}

	const handleBlur = () => {
		setPlaceholder("What is your work email?")
		setIsfFocused(false)
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
			onSubmit={(e) => {
				e.preventDefault()
				setState("success")

				const formData = new FormData(e.currentTarget)
				const email = formData.get("email")

				if (typeof email === "string") {
					setState("loading")
					sendEmail(email)
						.then(() => {
							return setState("success")
						})
						.catch((error) => {
							setState("error")
							console.error(error)
						})
				}
			}}
		>
			<Row>
				<StyledBorder ref={borderRef} />
				<input type="hidden" name="oid" value="00DHp000004AeAU" />
				<Field name="email">
					<Input
						placeholder={mobile ? "What is your email?" : placeholder}
						type="email"
						required
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					<Message match="valueMissing">Invalid Email</Message>
					<Message match="typeMismatch">Invalid Email</Message>
					<Message match={(v) => !/@.*\./.test(v)}>Invalid Email</Message>
					<Submit
						icon="chev"
						ariaLabel="submit email"
						type="submit"
						openInNewTab
					>
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

const Wrapper = styled(Form.Root)`
  border: 1.5px solid ${colors.gray300};

	${fresponsive(css`
		border-radius: 16px;
    width: 366px;
	`)}

  ${ftablet(css`
    width: 465px;
  `)}

	${fmobile(css`
		margin-left: 0;
		margin-right: 0;
		gap: 22px;
	`)}

  &:hover {
    ${Border} {
			width: calc(100% + 12px);
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
	position: absolute;
	z-index: 2;

	${fresponsive(css`
		border-radius: 50%;
		right: 2px;
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
		border-radius: 16px;
	`)}

  ${ftablet(css`
    ${textStyles.sh2}
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
		margin-top: 80px;
	`)}
`
