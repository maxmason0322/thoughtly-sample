import * as Form from "@radix-ui/react-form"
import Icon from "components/Icon"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive } from "library/fullyResponsive"
import { useState } from "react"
import styled, { css } from "styled-components"
import colors from "styles/colors"
import textStyles, { trim } from "styles/text"

const portalId = ""
const formId = ""
const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`

const sendEmail = async (email: string) => {
	const response = await fetch(endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			fields: [
				{
					name: "email",
					value: email,
				},
			],
		}),
	})

	if (!response.ok) {
		throw new Error("Submission failed")
	}
}

export default function EmailInput() {
	const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
		"idle",
	)

	return (
		<Wrapper
			data-portal-id={portalId}
			data-form-id={formId}
			onSubmit={(e) => {
				e.preventDefault()
				setState("success")

				// const formData = new FormData(e.currentTarget)
				// const email = formData.get("email")

				// if (typeof email === "string") {
				// 	setState("loading")
				// 	sendEmail(email)
				// 		.then(() => {
				// 			return setState("success")
				// 		})
				// 		.catch((error) => {
				// 			setState("error")
				// 			console.error(error)
				// 		})
				// }
			}}
		>
			{/* <Logo /> */}
			<Title>
				{state === "success"
					? "Thanks for subscribing to thoughts by Thoughly!"
					: "Get Thoughtly Stories right to your inbox."}
			</Title>
			<Row>
				<Field name="email">
					<Input placeholder="Your Email" type="email" required />
					<Message match="valueMissing">Invalid Email</Message>
					<Message match="typeMismatch">Invalid Email</Message>
					{/* forbid dotless domains */}
					<Message match={(v) => !/@.*\./.test(v)}>Invalid Email</Message>
					<ErrorIcon name="x" />
					{state === "success" ? (
						<Success>
							<StyledIcon name="checkTwo" />
						</Success>
					) : (
						<Submit ariaLabel="submit email" type="submit">
							<StyledIcon name="arrowOne" />
						</Submit>
					)}
				</Field>
			</Row>
		</Wrapper>
	)
}

const Wrapper = styled(Form.Root)`
  background-color: ${colors.gray100};

  ${fresponsive(css`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px;
    gap: 16px;
    border-radius: 15px;
  `)}

  ${fmobile(css`
    margin-left: 0;
    margin-right: 0;
    gap: 22px;
  `)}
`

const Title = styled.div`
  ${trim(1.2)};
  ${textStyles.sh3}

  ${fresponsive(css`
    margin-left: 6px;
    width: 163px;
  `)}

  ${fmobile(css`
    width: 213px;
  `)}
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
const Success = styled.div`
  position: absolute;

  ${fresponsive(css`
    top: 14px;
    right: 16px;
  `)}
`

const StyledIcon = styled(Icon)`
  ${fresponsive(css`
    width: 12px;
    height: 12px;
  `)}
`

const ErrorIcon = styled(Icon)`
  ${fresponsive(css`
    width: 16px;
    height: 16px;
    position: absolute;
    top: 16px;
    right: 16px;
    display: none;
  `)}
`

const Submit = styled(UniversalLink)`
  position: absolute;
  z-index: 2;

  ${fresponsive(css`
    display: grid;
    place-items: center;
    border-radius: 50%;
    top: 18px;
    right: 16px;
    flex-shrink: 0;
  `)}
`

const Field = styled(Form.Field)`
  position: relative;
  width: 100%;

  &[data-invalid] {
    ${ErrorIcon} {
      display: block;
    }

    ${Submit}, ${Success} {
      display: none;
    }
  }

  ${fmobile(css`
    width: 100%;
  `)}
`

const Input = styled(Form.Control)`
  ${trim(1.2)};
  ${textStyles.sh4}
  width: 100%;
  background-color: ${colors.white};

  ${fresponsive(css`
    height: 48px;
    padding: 16px;
    border-radius: 10px;
  `)}

  &::placeholder {
    color: ${colors.gray600};
  }

  &:focus {
    outline: none;
  }
`

const Message = styled(Form.Message)`
  color: #f76161;
  ${textStyles.t3}

  ${fresponsive(css`
    margin-left: 16px;
    margin-top: 0;
  `)}
`
