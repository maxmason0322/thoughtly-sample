import legalStyles from "components/Legal/LegalStyles"
import Seo from "components/Seo"
import gsap from "gsap"
import getMedia from "library/getMedia"
import useAnimation from "library/useAnimation"
import { getResponsivePixels } from "library/viewportUtils"
import { useRef } from "react"
import links from "utils/links"

export default function Terms() {
	const wrapperRef = useRef<HTMLElement | null>(null)
	useAnimation(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: wrapperRef.current,
					start: "bottom bottom",
					scrub: true,
				},
			})
			tl.set(wrapperRef.current, {
				transformOrigin: "center bottom",
			})
			tl.to(wrapperRef.current, {
				borderBottomLeftRadius: () =>
					getResponsivePixels(getMedia(140, 140, 140, 48)),
				borderBottomRightRadius: () =>
					getResponsivePixels(getMedia(140, 140, 140, 48)),
				scale: () => getMedia(0.75, 0.75, 0.75, 0.9),
				y: () => getResponsivePixels(-20),
			})
		},
		[],
		{
			scope: wrapperRef,
		},
	)

	return (
		<legalStyles.Wrapper ref={wrapperRef}>
			<legalStyles.Inner>
				<legalStyles.Top>
					<legalStyles.Title>Terms and Conditions</legalStyles.Title>
					<legalStyles.Subtitle>Last updated May 20, 2024</legalStyles.Subtitle>
				</legalStyles.Top>
				<legalStyles.Section>
					<legalStyles.Paragraph $noPadding={false}>
						These Terms of Service ("Terms") govern your use of the Services
						(defined below) provided by Thoughtly, Inc. ("Thoughtly," "Company,"
						"we," "us," or "our"). These Terms are a binding legal agreement
						between you or the entity you represent ("Customer" or "you"). If
						you (the person accepting these Terms) are accepting these Terms on
						behalf of your employer or another entity, you agree that: (i) you
						have full legal authority to bind your employer or such entity to
						these Terms, and (ii) you agree to these Terms on behalf of your
						employer or such entity.{" "}
						<legalStyles.BoldText>
							If you are accepting these Terms using an email address from your
							employer or another entity, then: (i) you will be deemed to
							represent that party, (ii) your acceptance of these Terms will
							bind your employer or that entity to these terms, and (iii) the
							word "you" or "Customer" in these Terms will refer to your
							employer or that entity.
						</legalStyles.BoldText>
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						In these Terms, a “user” is you or anyone who accesses, browses, or
						in any way uses the Services. You must agree to these Terms before
						you can use the Services. IF YOU DO NOT AGREE WITH ALL OF THESE
						TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND
						YOU MUST DISCONTINUE USE IMMEDIATELY.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						We operate the website{" "}
						<legalStyles.Link to={links.home}>
							https://thought.ly
						</legalStyles.Link>{" "}
						(the "Site"), as well as any other related products and services
						that refer or link to these Terms (collectively, the "Services").
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						By accessing or using the Services
					</legalStyles.SectionSubheader>
					<legalStyles.UList $noPadding={false}>
						<legalStyles.ListItem>
							You acknowledge that you have read, understood, and accept these
							Terms and any additional documents or policies referred to in or
							incorporated into these Terms, whether you are a visitor to our
							Site or a user of the Services;
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							You represent and warrant that you are at least eighteen (18)
							years of age and have the right, authority, and capacity to enter
							into these Terms, either on behalf of yourself or the entity that
							you represent; and
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							If these Terms have materially changed since you last access or
							used the Services, you acknowledge and agree that your continued
							access or use of the Services constitutes your acceptance of the
							changed Terms.
						</legalStyles.ListItem>
					</legalStyles.UList>
					<legalStyles.Paragraph $noPadding={false}>
						Please note that we may revise and update these Terms from time to
						time in our sole discretion. If we make a change to the Terms, we
						will post the revised Terms on our Site. You acknowledge and agree
						that your continued access or use of the Site or Services
						constitutes your acceptance of the revised Terms.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						PLEASE NOTE: CERTAIN SERVICES MAY BE MADE AVAILABLE ON A
						SUBSCRIPTION BASIS. IF YOU SUBSCRIBE TO THE SERVICES FOR A
						SUBSCRIPTION TERM, THEN YOUR SUBSCRIPTION AND THESE TERMS WILL BE
						AUTOMATICALLY RENEWED FOR SUCCESSIVE BILLING PERIODS AT OUR
						THEN-CURRENT PRICING FOR SUCH SERVICES UNLESS YOU OPT OUT OF THE
						AUTO-RENEWAL IN ACCORDANCE WITH SECTION 4 BELOW.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						PLEASE NOTE: THAT SECTION 18 OF THIS AGREEMENT CONTAINS AN
						ARBITRATION AGREEMENT THAT REQUIRES MOST DISPUTES BETWEEN US TO BE
						RESOLVED ON AN INDIVIDUAL, NON-CLASS ACTION BASIS THROUGH BINDING
						AND FINAL ARBITRATION INSTEAD OF IN COURT. SEE SECTION 18 FOR MORE
						INFORMATION REGARDING THIS ARBITRATION CLAUSE AND HOW TO OPT OUT.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>1. OUR SERVICES</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						The Services are controlled or operated (or both) from the United
						States and are not intended to subject us to any non-U.S.
						jurisdiction or law. The Services may not be appropriate or
						available for use in some non-U.S. jurisdictions. Any use of the
						Services is at your own risk, and you must comply with all
						applicable laws, rules and regulations in doing so. We may limit the
						Services’ availability at any time, in whole or in part, to any
						person, geographic area or jurisdiction that we choose.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>Access.</legalStyles.BoldText> During the
						applicable initial or renewal term for your subscription to the
						Services (“Subscription Term”) identified in the applicable
						check-out webpage to purchase the Services or other ordering
						document agreed to by the parties (“Order”), you may access and use,
						and may allow authorized users to access and use the Services
						subject to and in accordance with Section 8 below. It is a condition
						of your use of the Services that the information you provide is
						correct, current, and complete. You are responsible for making all
						arrangements necessary for you to have access to the Services. You
						are responsible for ensuring your access to the Services, and that
						access may involve third-party fees (such as Internet service
						provider or airtime charges) and obtaining and maintaining all
						equipment necessary to access the Services.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>Account Registration.</legalStyles.BoldText>{" "}
						To access the Services in all cases, you must register for an
						account in accordance with this Section below. To access a Free
						Trial, Free Tier or a Paid Plan, you must purchase the Services
						under an Order with us.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						You can invite your employees, agents, or other third parties
						authorized by you to access or use the Services (“Authorized
						User(s)”) to your account and must designate at least one Authorized
						User to be an Administrator, who will manage and control the
						account. (For purposes of these Terms, an "Administrator” means an
						Authorized User designated by you to manage and control your and
						Authorized Users’ accounts.) If a user joins an existing account
						created by another person or organization, that person or
						organization is the customer and the user is an Authorized User. You
						are responsible for (and shall ensure) your Administrators’ and
						Authorized Users’, if applicable, compliance with these Terms.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						You may not impersonate someone else to create an account, create or
						use an account for anyone other than yourself, permit anyone else to
						use your account, or provide personal information for purposes of
						account registration other than your own. In order to ensure we can
						protect and properly administer the Services and our community of
						users, we have the right to disable or close any user account at any
						time and for any reason or for no reason. You understand and agree
						that we may require you to provide information that may be used to
						confirm your identity and help ensure the security of your account.
						If your account canceled, terminated or suspended, you and, if
						applicable, your authorized users, will lose the ability to access
						and use such account(s) and any of Customer Data (defined below)
						that you have uploaded or stored using the Services. We may
						immediately delete Customer Data at the time of cancellation,
						termination or suspension of such account(s), and we will not be
						liable to you or any third party in connection with such deletion of
						Customer Data or your loss of access and use of such account(s).
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>Account Security.</legalStyles.BoldText> All
						registration details and other information provided by you is
						subject to our Privacy Policy. You are responsible for maintaining
						accurate account information at all times, including a valid email
						address and billing information and updating such information as
						necessary. Once you have an account, you are responsible for all
						activities that occur in connection with your account. You will
						treat as confidential your account access credentials and will not
						to disclose it to any third-party. You agree to immediately notify
						us if you have any reason to believe that your account credentials
						have been compromised or if there is any unauthorized use of your
						account or password, or any other breach of security. We ask that
						you use particular caution when accessing your profile from a public
						or shared computer, or when using your account in a public space,
						such as a park or cafe or public library, so that others are not
						able to view or record your access credentials or other personal
						information. We will not be liable and you may be liable for losses,
						damages, liability, expenses, and lawyers’ fees incurred by us or a
						third party arising from someone else using your account due to your
						conduct regardless of whether you have notified us of such
						unauthorized use.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						<legalStyles.BoldText>White Label.</legalStyles.BoldText> If your
						product plan includes white-labeling, we grant you a white label
						license to incorporate the permitted functionality of the Services
						within your services offering without attribution to Thoughtly
						solely for your direct business activities, subject to your complete
						and ongoing compliance with these Terms, including without
						limitation, all payment obligations. This white label license is
						worldwide, revocable, non-exclusive, transferable solely to your
						users as authorized sublicensees within the scope of this license,
						provided you must require (and are liable for) your sublicensees to
						compliance with all applicable terms and conditions of these Terms.
						You are solely responsible for the provision of your products and
						services to users, and will indemnify and hold harmless Thoughtly
						from any related claims, liabilities or damages.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						2. YOUR RESPONSIBILITIES
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						By sending us submissions and/or posting Customer Data through any
						part of the Services or making Customer Data through the Services by
						linking your account through the Services to any of your social
						networking accounts, you: confirm that you have read and agree to
						these Terms, including without limitation Section 6 and Section 9
						below; to the extent permissible by applicable law, waive any and
						all moral rights to any such submission and/or contribution;
						represent and warrant that any such Customer Data are original
						submission and/or contributions, you have the necessary rights and
						licenses to submit such submissions and/or contributions and that
						you have full authorization to grant us the above-mentioned rights
						in relation to your submissions and/or contributions; and further
						you agree that your Customer Data and/or contributions do not
						constitute confidential information. You are responsible for your
						Customer Data and submissions and/or contributions and you expressly
						agree to reimburse us for any and all losses to Customer Data
						because of your breach of (a) these Terms, (b) any third party’s
						intellectual property rights, or (c) applicable law. Although we
						have no obligation to monitor any contributions, we shall have the
						right to remove or edit any Customer Data or Contributions at any
						time in our sole discretion. If we remove or edit any such Customer
						Data or contributions, we may also suspend your account and report
						to law enforcement authorities.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						3. YOUR REPRESENTATIONS AND WARRANTIES
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						By using the Services, you represent and warrant that: (1) all
						Customer Data (defined below) that you submit will be true,
						accurate, current, and complete; (2) you will maintain the accuracy
						of such information and promptly update your Customer Data as
						necessary; (3) you will not access the Services through automated or
						non-human means, whether through a bot, script or otherwise; (4) you
						have the right to upload the Customer Data in and through the
						Services and that such use does not violate or infringe on any
						rights of any third party; (5) your use of the Services will not
						violate any applicable law or regulation; (6) you are aware of your
						obligations with respect to compliance with laws relating to call
						recording, telemarketing, spam and privacy; and (7) you will not
						rely on us for advice or for compliance with such laws.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						If you provide any Customer Data or information that is unlawful,
						untrue, inaccurate, not current, incomplete, or that breaches these
						Terms, we have the right to suspend or terminate your account and
						refuse any and all current or future use of the Services (or any
						portion thereof).
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						Without limiting the above, if any Customer Data violates these
						Terms or any applicable laws, we may, in our sole discretion, ask
						you to remove or edit the Customer Data so it is no longer in
						violation, or we may, but are not obligated to, remove the Customer
						Data or take action as needed to resolve the issue.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						4. PLANS; AUTOMATIC RENEWAL REGISTRATION
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>Free Tier; Paid Plans.</legalStyles.BoldText>{" "}
						We may make the Services available to you for free subject to
						certain monthly usage limitations ("Free Tier"). We also offer paid
						access to the Services under various different paid plans as further
						specified in the Order (each, a "Paid Plan").
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>
							Automatic Renewal; Cancellation.
						</legalStyles.BoldText>{" "}
						Unless otherwise stated on an Order, each Subscription Term will
						automatically renew, unless you cancel or downgrade your
						subscription prior to the end of the then-current billing cycle. You
						authorize us to charge your credit card on file or invoice you for
						each renewal until you cancel your subscription. You can cancel your
						subscription at any time by contacting us using the contact
						information provided below. Your cancellation will take effect at
						the end of the current billing cycle for Paid Services.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>Downgrades.</legalStyles.BoldText> If you fail
						to pay Fees (defined below) for the Services displayed on the Order,
						plus any applicable Taxes when they are due, we may downgrade you to
						a Free Tier plan upon reasonable notice. If you are downgraded, you
						may lose access to certain features or functionality, but these
						Terms will continue to apply.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						<legalStyles.BoldText>Price Changes.</legalStyles.BoldText> We may
						increases or modify our pricing for Paid Plans at any time without
						notice, in our sole discretion, and the new pricing will go into
						effect upon the start of the next billing cycle for your Paid Plan
						subscription. If you do not terminate your Paid Plan subscription
						before renewal, you authorize us to collect payment for the
						increased or modified pricing.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						5. PURCHASES AND PAYMENT
					</legalStyles.SectionHeader>
					<legalStyles.SectionSubheader>Fees</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						You will pay us the fees for the Services as displayed on the Order
						(“Fees”) in the manner specified by us, plus any applicable Taxes in
						accordance with this Section. You agree and understand that if you
						do not pay us the Fees due for the Services within the agreed time
						period, then we reserve the right to suspend your access and use of
						the Services until such Fees are paid as provided in this Section.
						If you reasonably and in good faith believe that we have billed you
						incorrectly, and reasonably and in good faith dispute the Fees
						billed to you, then you must contact us no later than thirty (30)
						days after the invoice date on the invoice in which the error or
						problem appeared, in order to receive an adjustment or credit (if
						applicable). All Fees are non-refundable and non-creditable, except
						as expressly set forth in these Terms.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>Taxes</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						All Fees and other amounts payable by you under these Terms are
						exclusive of all government-imposed taxes, levies, or duties,
						including value-added, sales, use, or withholding taxes, except for
						taxes based on our net income and similar assessments (“Taxes”). You
						are responsible for all sales, use and excise Taxes, and any other
						similar Taxes, duties and charges of any kind imposed by any
						federal, state or local governmental or regulatory authority on any
						amounts payable by you hereunder, other than any Taxes imposed on
						our income.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>Payment</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						Unless otherwise provided in an applicable Order, you will pay all
						Fees due at the time of purchase. You will make all payments
						hereunder in U.S. dollars. You will make payments to the account
						specified in the applicable Order or such other account as we may
						specify in writing from time to time. If you are paying Fees using a
						credit card or any digital payment method supported by us, you
						authorize us to charge your account for the Services using that
						payment method. You must keep all information in its billing account
						current to ensure that all Fees are charged to the appropriate
						account and are timely paid. If you notify us to stop using a
						previously designated payment method and fail to designate an
						alternative, we may immediately suspend use and access to the
						Services. Any notice from you changing its billing account will not
						affect charges we submit to your billing account before we
						reasonably can act on your request. We may use a third-party
						intermediary to manage credit card processing, and this intermediary
						is not permitted to use your credit card information except in
						connection with your authorized purchases. Notice (including email)
						from our third-party credit card processor declining your credit
						card or otherwise relating to your account will be deemed valid
						notice from us.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Late Payment
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding>
						If you fail to make any payment when due then, in addition to all
						other remedies that may be available, we may charge interest on the
						past due amount at the rate of 1.5% per month calculated daily and
						compounded monthly or, if lower, the highest rate permitted under
						applicable law. If such failure continues for five (5) days
						following written notice thereof, we may suspend performance of the
						Services until all past due amounts and interest thereon have been
						paid, without incurring any obligation or liability to you by reason
						of such suspension.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						6. PROHIBITED ACTIVITIES
					</legalStyles.SectionHeader>
					<legalStyles.SectionSubheader>
						As a user of the Services, you agree not to (and will not allow any
						third party to):
					</legalStyles.SectionSubheader>
					<legalStyles.OList $noPadding={false}>
						<legalStyles.ListItem>
							Modify, copy, display, republish or create derivative works based
							on the Services or Thoughtly Materials.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Act as a reseller or distributor of, or a service bureau for the
							Services or otherwise use, exploit, make available or encumber the
							Services to or for the benefit of any third party.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Access or use the Services without the prior written consent of us
							if you are or become a direct competitor to us or our affiliates.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Access the Services in order to build a competitive product or
							service, or copy any ideas, features, functions or graphics of the
							Services.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Share access, use, or information about the Services with a direct
							competitor of us.{" "}
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Systematically retrieve data or other content from the Services to
							create or compile, directly or indirectly, a collection,
							compilation, database, or directory without written permission
							from us.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Incorporate or merge the Thoughtly Materials into another software
							product, or otherwise access or use the Thoughtly Materials and/or
							Documentation (defined below) to create, modify or enhance any
							software or competing service.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Combine or use the Services with any third party hardware,
							networks, code, data, or services that infringes any third party
							right.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Trick, defraud, or mislead us and other users, especially in any
							attempt to learn sensitive account information such as user
							passwords.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Circumvent, disable, or otherwise interfere with security-related
							features of the Services, including features that prevent or
							restrict the use or copying of any Content or enforce limitations
							on the use of the Services and/or the Content contained therein.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Disparage, tarnish, or otherwise harm, in our opinion, us and/or
							the Services.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Take any action that imposes, or may impose, in our sole
							discretion an unreasonable or disproportionately large load on our
							infrastructure.{" "}
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Use the Services or any Output to post or send infringing,
							obscene, threatening, libelous, or otherwise unlawful material.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Use the Services or any Output in violation of applicable laws.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Upload to the Services or use the Services or any Output to send
							or store viruses, worms, time bombs, Trojan horses or other
							harmful or malicious code, files, scripts, agents or programs.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Use any information obtained from the Services in order to harass,
							abuse, or harm another person.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Make improper use of our support services or submit false reports
							of abuse or misconduct.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Engage in unauthorized framing of or linking to the Services.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Engage in any automated use of the system, such as using scripts
							to send comments or messages, or using any data mining, robots, or
							similar data gathering and extraction tools.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Delete the copyright or other proprietary rights notice from any
							Content.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Attempt to impersonate another user or person or use the username
							of another user.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Upload or transmit (or attempt to upload or to transmit) any
							material that acts as a passive or active information collection
							or transmission mechanism, including without limitation, clear
							graphics interchange formats ("gifs"), 1×1 pixels, web bugs,
							cookies, or other similar devices (sometimes referred to as
							"spyware" or "passive collection mechanisms" or "pcms").
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Intentionally or unintentionally interfere with, disrupt the
							integrity or performance of the Services or the data contained
							therein, or create an undue burden on the Services or the networks
							or services connected to the Services.{" "}
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Harass, annoy, intimidate, or threaten any of our employees or
							agents engaged in providing any portion of the Services to you.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Attempt to bypass any measures of the Services designed to prevent
							or restrict access to the Services, or any portion of the
							Services.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Copy or adapt the Services software, including but not limited to
							Flash, PHP, HTML, JavaScript, or other code.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Except as may be the result of standard search engine or Internet
							browser usage, use, launch, develop, or distribute any automated
							system, including without limitation, any spider, robot, cheat
							utility, scraper, or offline reader that accesses the Services, or
							use or launch any unauthorized script or other software.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Use a buying agent or purchasing agent to make purchases on the
							Services.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Make any unauthorized use of the Services, including collecting
							usernames and/or email addresses of users by electronic or other
							means for the purpose of sending unsolicited email, or creating
							user accounts by automated means or under false pretenses.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Sell or otherwise transfer your profile or account.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Use the Services or any Output to create, promote, or distribute
							content that is illegal, harmful, or violates copyright laws.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Manipulate or attempt to manipulate the AI agent in a way that is
							against the intended use of the Services.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Use the Services for fraudulent activities, including but not
							limited to phishing, scams, and financial fraud.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Use the Services or any Output to send spam or otherwise
							duplicative or unsolicited messages in violation of applicable
							laws.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Without the express prior written consent of Thoughtly, conduct
							any benchmarking or comparative study or analysis involving the
							Services for any reason or purpose except, to the limited extent
							absolutely necessary, to determine the suitability of the Services
							to interoperate with your internal systems.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Claim endorsement from Thoughtly without explicit permission.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Use or attempt to use tools to circumvent any security feature of
							the Thoughtly Services.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Create or propagate content that promotes hate, discrimination, or
							violence against individuals or groups based on race, ethnicity,
							nationality, religion, gender, gender identity, sexual
							orientation, disability, or any other identifiable
							characteristics.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Use the Services or any Output to run automated queries to web
							sites.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Remove or alter any trademark, logo, copyright or other
							proprietary notices, legends, symbols or labels in the Services;
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Attempt to gain or permit an unauthorized third party unauthorized
							access to the Services or its related systems or networks by you
							or an unauthorized third party.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Permit any third party to do any of the foregoing.
						</legalStyles.ListItem>
					</legalStyles.OList>
					<legalStyles.Paragraph $noPadding>
						In addition, you agree that you shall (a) only permit access to the
						Services by yourself and, if applicable your authorized users; and
						(b) not access or use the Services from an embargoed nation or any
						other country/region that becomes an embargoed nation, in violation
						of applicable export compliance laws.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						7. THOUGHTLY RIGHTS
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						We reserve the right to suspend your access to the Services in the
						event (a) we believe your use of the Services represents an imminent
						threat to our users or network, (b) of your breach or violation of
						any laws or regulations applicable to your use of the Services or
						your breach of these Terms, or (c) if so directed by a court or
						competent authority. In such cases, we will (i) suspend such the
						Services only to the extent reasonably necessary to prevent harm to
						our users or network; (ii) use our best efforts to promptly contact
						you and give you the opportunity to change the configuration of its
						server(s) accordingly and/or work with you to resolve the issues
						causing the suspension of such the Services; and (iii) reinstate any
						suspended the Services promptly after the issue is abated. Without
						limiting the foregoing, we reserve the right to manage bandwidth or
						route traffic across the Internet in a commercially optimal way,
						provided such actions do not compromise our obligations regarding
						the Customer Data.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						We have the right to (i) remove or limit distribution of Customer
						Data that we deem reasonably necessary or appropriate if we conclude
						that any Customer Data violates these Terms, infringes any
						intellectual property right or other right of any person or entity,
						threatens the personal safety of any individual or could create
						liability for us; (ii) take appropriate legal action, including
						without limitation, referral to law enforcement, for any illegal use
						of the Services; and (iii) terminate or suspend your access to all
						or part of the Services for any violation of these Terms.
						Notwithstanding the foregoing, we are not obligated to review
						Customer Data before it is posted via the Services, and we cannot
						ensure prompt removal of objectionable Customer Data after it has
						been posted. Accordingly, we assume no liability for any action or
						inaction regarding transmissions, communications or content provided
						by any Authorized User or third party. We disclaim all liability or
						responsibility for exercise or nonexercise of our rights under this
						Section.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						We have the right to (i) use or act upon any suggestions, ideas,
						enhancement requests, feedback, recommendations or other information
						provided by you relating to the Services; (ii) utilize all other
						information provided by you (including Customer Data) relating to
						the Services to the extent necessary to comply with any legal
						requirements or contractual obligations; and (iii) utilize
						anonymized and/or aggregated data to protect and improve the
						Services, provided that you and your authorized users’ identity may
						not be derived from such data. The foregoing shall in no way limit
						our confidentiality obligations set forth in these Terms.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						8. INTELLECTUAL PROPERTY RIGHTS
					</legalStyles.SectionHeader>
					<legalStyles.SectionSubheader>
						Our Intellectual Property
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						Except as expressly stated, these Terms do not grant any rights,
						implied or otherwise, to any intellectual property. We own the
						Services and all of our trademarks, logos, branding, and any other
						Content that we create in connection with the Services (“Company
						Content”), including proprietary rights of every kind and nature
						however denominated throughout the world, registered or
						unregistered, associated with such Company Content and the Services
						(collectively, “Thoughtly IP”). Except as expressly and
						unambiguously provided herein, we do not grant you any express or
						implied rights, and all rights in and to the Thoughtly IP are
						retained by us.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						We hereby grant to you during the Term a non-exclusive,
						non-transferable, non-sublicensable, worldwide and irrevocable
						(subject to our right to terminate these Terms) license to access
						and use the Services subject to any usage capacity or other
						limitations set forth in the Order (“Usage Limits”) solely for: (i)
						in the case of a Paid Plan, your internal business purposes to
						enable its products and services with artificial intelligence
						capabilities in accordance with these Terms; (ii) in the case of a
						Free Trial or access to the Free Tier, your internal, non-commercial
						evaluation purposes to determine whether you desire to seek paid
						access to the Services in accordance with these Terms.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						9. CUSTOMER DATA
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						We do not assert any ownership over your Customer Data. You retain
						full ownership of all of your Customer Data and any intellectual
						property rights or other proprietary rights associated with your
						Customer Data. You are responsible for ensuring all calls, video,
						audio, or transcription data, images, comments, clips or other
						content or information submitted or uploaded to the Services by or
						otherwise collected by us on behalf of you or your authorized users
						("Customer Data") and any other content or information provided to
						us or uploaded, posted, recorded, or transmitted to the Services
						complies with these Terms and all applicable laws, including, but
						not limited to, laws requiring you to obtain the consent of a third
						party to collect, record or use the Customer Data and to provide
						appropriate notices of third-party rights. Under no circumstances
						will we be liable in any way for any (a) Customer Data that is
						transmitted or viewed while using the Services, (b) errors or
						omissions in Customer Data, or (c) any loss or damage of any kind
						incurred as a result of the use of, access to, or denial of access
						to Customer Data. You expressly agree to exonerate us from any and
						all responsibility and to refrain from any legal action against us
						regarding your Customer Data.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						Subject to these Terms, you hereby grants to us a non-exclusive,
						worldwide, royalty-free right, during the Term, to process the
						Customer Data solely (a) to the extent necessary to provide the
						services contemplated by the Services, (b) to provide, protect, and
						update the Services, (c) to enforce these Terms and exercise its
						rights hereunder, (d) as required by law, and (e) as otherwise
						instructed by you.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						As between the parties, you own the Customer Data, but you
						acknowledge that we are in the business of improving and making
						enhancements to the Services, partially through learnings generated
						by training Customer Data. Accordingly, you hereby grants to us a
						non-exclusive, perpetual, irrevocable, transferable, worldwide and
						royalty-free license to use, reproduce, modify and otherwise exploit
						the Customer Data for the following purposes: to operate, train,
						modify, maintain, support, update, enhance, exploit, and otherwise
						use and improve the Services, Thoughtly IP and all of our current or
						future products, services and technology. We have the right to grant
						and authorize sublicenses (through multiple tiers) to the foregoing
						licenses in this Section in our sole discretion. We remain liable
						for ensuring sublicensees comply with the scope of the licenses in
						this Section.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						We have the right, in our sole and absolute discretion, (1) to edit,
						redact, or otherwise change any Customer Data; (2) to re-categorize
						any Customer Data to place them in more appropriate locations on the
						Services; and (3) to pre-screen or delete any Customer Data at any
						time and for any reason, without notice. We have no obligation to
						monitor your Customer Data.{" "}
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						You will not and will ensure your authorized users do not upload,
						post, record, or transmit any harmful, offensive, unlawful, or
						otherwise objectionable content to us or the Services, including:
					</legalStyles.Paragraph>
					<legalStyles.UList $noPadding={false}>
						<legalStyles.ListItem>
							Your Customer Data is not false, inaccurate, or misleading.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Your Customer Data is not unsolicited or unauthorized advertising,
							promotional materials, pyramid schemes, chain letters, spam, mass
							mailings, or other forms of solicitation.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Your Customer Data is not hateful, defamatory, vulgar,
							discriminatory, obscene, lewd, lascivious, filthy, violent,
							harassing, libelous, slanderous, or otherwise objectionable (as
							determined by us).
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Your Customer Data does not ridicule, mock, disparage, intimidate,
							or abuse anyone.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Your Customer Data is not used to harass or threaten (in the legal
							sense of those terms) any other person and to promote violence
							against a specific person or class of people.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Your Customer Data does not violate any applicable law,
							regulation, or rule.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Your Customer Data does not violate the privacy or publicity
							rights of any third party, or could give rise to any civil or
							criminal liability under applicable laws or regulations.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Your Customer Data does not violate any applicable law concerning
							child pornography, or otherwise intended to protect the health or
							well-being of minors.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Your Customer Data does not include any offensive comments that
							are connected to race, national origin, gender, sexual preference,
							or physical handicap.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Your Customer Data does not contain pornography or sexually
							explicit material.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Your Customer Data does not include or promote sexually explicit
							or extremely violent content.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Your Customer Data does is not harmful to minors.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Your Customer Data does not promote suicide or self-harm, and does
							not promote or provide instructional information about illegal
							activities or promotes physical harm or injury to any group or
							individual.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Your Customer Data is not likely to deceive or mislead any person.
						</legalStyles.ListItem>
					</legalStyles.UList>
					<legalStyles.Paragraph $noPadding={false}>
						You further acknowledge and agree that (i) you have the written
						consent, release, and/or permission of each and every identifiable
						individual person in your Customer Data to use the name or likeness
						of each and every such identifiable individual person to enable
						inclusion and use of your Customer Data contemplated by the Services
						and these Terms; (ii) the creation, distribution, transmission,
						public display, or performance, and the accessing, downloading, or
						copying of your Customer Data do not and will not infringe the
						proprietary rights, including but not limited to the copyright,
						patent, trademark, trade secret, or moral rights of any third party;
						(iii) your Customer Data does not otherwise violate, or link to
						material that violates, any provision of these Terms or our Privacy
						Policy, or any applicable law or regulation; (iv) you are the
						creator and owner of or have the necessary licenses, rights,
						consents, releases, and permissions to use and to authorize us, the
						Services, and other users of the Services to receive, use and access
						your Customer Data in any manner contemplated by the Services and
						these Terms; and (v) you have the written consent, release, and/or
						permission of each and every identifiable individual person in your
						Customer Data contemplated by the Services and these Terms.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						You are solely responsible for all data that you transmit or that
						relates to any activity you have undertaken using the Services. You
						agree that we shall have no liability to you for any loss or
						corruption of any such data, and you hereby waive any right of
						action against us arising from any such loss or corruption of such
						data.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						10. GUIDELINES FOR REVIEWS
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						We may provide you areas on the Services to leave reviews or
						ratings. When posting a review, you must comply with the following
						criteria: (1) you should have firsthand experience with the
						person/entity being reviewed; (2) your reviews should not contain
						offensive profanity, or abusive, racist, offensive, or hateful
						language; (3) your reviews should not contain discriminatory
						references based on religion, race, gender, national origin, age,
						marital status, sexual orientation, or disability; (4) your reviews
						should not contain references to illegal activity; (5) you should
						not be affiliated with competitors if posting negative reviews; (6)
						you should not make any conclusions as to the legality of conduct;
						(7) you may not post any false or misleading statements; and (8) you
						may not organize a campaign encouraging others to post reviews,
						whether positive or negative.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						We may accept, reject, or remove reviews in our sole discretion. We
						have absolutely no obligation to screen reviews or to delete
						reviews, even if anyone considers reviews objectionable or
						inaccurate. Reviews are not endorsed by us, and do not necessarily
						represent our opinions or the views of any of our affiliates or
						partners. We do not assume liability for any review or for any
						claims, liabilities, or losses resulting from any review. By posting
						a review, you hereby grant to us a perpetual, non-exclusive,
						worldwide, royalty-free, fully paid, assignable, and sublicensable
						right and license to reproduce, modify, translate, transmit by any
						means, display, perform, and/or distribute all content relating to
						review.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						11. THIRD-PARTY WEBSITES AND CONTENT
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						The Service may contain or may interact with or otherwise be
						associated with third party platforms, services, plug-ins,
						applications, ads, tools and/or other content, and/or links to
						third-party websites or other services that are not owned,
						controlled or operated by us ("Third-Party Websites") including
						services operated by advertisers, licensors, licensees, and certain
						other third parties who may have business relationships with
						("Third-Party Content"). We may also host our Content, apps and
						tools on Third-Party Websites. We are not responsible for the
						content of any Third-Party Websites, and we are not responsible for
						any Third-Party Websites accessed through the Services or any
						Third-Party Content posted on, available through, or installed from
						the Services. Inclusion of, linking to, or permitting the use or
						installation of any Third-Party Websites or any Third-Party Content
						does not imply approval or endorsement thereof by us. Your use of a
						Third-Party Websites linked from the Services is at your own risk
						and will be governed by such third party's terms and policies. You
						should review the applicable terms and policies, including privacy
						and data gathering practices, of any website to which you navigate
						from the Services or relating to any applications you use or install
						from the Services.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						References on the Services to any names, marks, products, or
						services of third parties, or links to Third-Party Websites or
						information are not an endorsement, sponsorship, or recommendation
						of the third party, its information, products, or services. We are
						not responsible for the quality or delivery of the products or
						services offered, accessed, obtained by or advertised at such
						Third-Party Websites.{" "}
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						Some Third-Party Websites may impose fees for access to their
						resources through our Services and/or your account and you are
						responsible for all such fees.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						Finally, we will under no circumstances be liable for any direct,
						indirect, incidental or special loss or other damage, whether
						arising from negligence, breach of contract, defamation,
						infringement of copyright or other intellectual property rights,
						caused by the exhibition, distribution or exploitation of any
						information or content contained within these Third-Party Websites.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						You hereby grant us an irrevocable perpetual license to use,
						reproduce, edit, create derivative works from, distribute, display,
						copy, transmit or otherwise use in any way, commercially or
						otherwise, any material that you post to any social networking site
						or other Third-Party Websites in connection with us or our Services.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Third-Party Apps
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding>
						The Services may contain features designed to interoperate with any
						third-party applications, integrations, websites, products, or
						services that are linked in or that interact or interoperate with
						the Services, including any applications built by third parties
						using our developer tools that is made available by you or your
						Authorized Users (“Third-Party App”). To use such features, you or
						your users may be required to obtain access to such Third-Party App
						from their providers, and grant us access to your or your users’
						account(s) on such Third-Party Apps. If you use a Third-Party App
						with the Services, you grant us permission to allow the Third-Party
						App and its provider to access Customer Data. By enabling a
						Third-Party App that uses or accesses Customer Data, you authorize
						the transfer of that data to the Third-Party App and, if applicable,
						will ensure that such data transfer complies with all applicable
						laws. Any acquisition by you of Third-Party Apps, and any exchange
						of Customer Data between you and any Third-Party App provider,
						product or service, is solely between you and the applicable
						Third-Party App provider. We do not warrant or support Third-Party
						App. We are not responsible for any disclosure, modification or
						deletion of Customer Data resulting from access by any Third-Party
						App or its provider. You are solely responsible for ensuring that it
						has all necessary licenses and rights to use the Third-Party App for
						the purposes contemplated herein. You understand and agree that
						Third-Party Apps are subject to their own terms and privacy
						policies. You are responsible for reviewing those terms and policies
						before using or enabling any Third-Party Apps. We are not
						responsible for Third-Party Apps and does not warrant or support
						them.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						12. SERVICES MANAGEMENT
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						The Services may contain (or you may be sent via the Site) links to
						other websites ("Third-Party Websites") as well as articles,
						photographs, text, graphics, pictures, designs, music, sound, video,
						information, applications, software, and other content or items
						belonging to or originating from third parties ("Third-Party
						Content"). Such Third-Party Websites and Third-Party Content are not
						investigated, monitored, or checked for accuracy, appropriateness,
						or completeness by us, and we are not responsible for any
						Third-Party Websites accessed through the Services or any
						Third-Party Content posted on, available through, or installed from
						the Services, including the content, accuracy, offensiveness,
						opinions, reliability, privacy practices, or other policies of or
						contained in the Third-Party Websites or the Third-Party Content.
						Inclusion of, linking to, or permitting the use or installation of
						any Third-Party Websites or any Third-Party Content does not imply
						approval or endorsement thereof by us. If you decide to leave the
						Services and access the Third-Party Websites or to use or install
						any Third-Party Content, you do so at your own risk, and you should
						be aware these Terms no longer govern. You should review the
						applicable terms and policies, including privacy and data gathering
						practices, of any website to which you navigate from the Services or
						relating to any applications you use or install from the Services.
						Any purchases you make through Third-Party Websites will be through
						other websites and from other companies, and we take no
						responsibility whatsoever in relation to such purchases which are
						exclusively between you and the applicable third party. You agree
						and acknowledge that we do not endorse the products or services
						offered on Third-Party Websites and you shall hold us blameless from
						any harm caused by your purchase of such products or services.
						Additionally, you shall hold us blameless from any losses sustained
						by you or harm caused to you relating to or resulting in any way
						from any Third-Party Content or any contact with Third-Party
						Websites.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						13. PRIVACY POLICY
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						You understand that by using the Services you consent and agree to
						the collection and use of certain information about you and your use
						of the Services in accordance with our Privacy Policy, available
						https://thought.ly/privacy, which is incorporated by reference into
						and forms a part of these Terms. If you object to your information
						being used in this way, please do not use the Services
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						Please be advised the Services are hosted in the United States. If
						you access the Services from any other region of the world with laws
						or other requirements governing personal data collection, use, or
						disclosure that differ from applicable laws in the United States,
						then through your continued use of the Services, you are
						transferring your data to the United States, and you expressly
						consent to have your data transferred to and processed in the United
						States.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						14. EXCLUDED DATA
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						You will not provide us with any Customer Data that is subject to
						heightened security requirements by law or regulation or contract
						(examples include but are not limited to the Gramm–Leach–Bliley Act
						(GLBA), Family Educational Rights and Privacy Act (FERPA), the
						Child’s Online Privacy Protection Act (COPPA), the standards
						promulgated by the PCI Security Standards Council (PCI-DSS), and
						their international equivalents (collectively, “Excluded Data”)).
						Thoughtly shall have no responsibility or liability for the Excluded
						Data.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						15. TERM AND TERMINATION
					</legalStyles.SectionHeader>
					<legalStyles.SectionSubheader>Term</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						These Terms shall remain in full force and effect while you use the
						Services.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Suspension or Termination by Thoughtly
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						We may suspend your access to the Services or terminate these Terms
						and your access to the Services: (a) to the extent required by law,
						(b) to prevent risk of harm to us, the Services, or our users, or
						(c) for any violations of these Terms and our policies. If
						practicable, we may, in our sole discretion, contact you and give
						you the opportunity to resolve the issue prior to such suspension or
						termination. If we terminate or suspend your account for any reason,
						you are prohibited from registering and creating a new account under
						your name, a fake or borrowed name, or the name of any third party,
						even if you may be acting on behalf of the third party. In addition
						to terminating or suspending your account, we reserve the right to
						take appropriate legal action, including without limitation pursuing
						civil, criminal, and injunctive redress.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>Survival</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding>
						Terms that are intended by their nature to survive termination will
						survive, including confidentiality obligations, limitations of
						liability, and disclaimers.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						16. NO GUARANTEE OF SERVICE
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						Although we hope to make the Services available at all times in the
						future, there may be times when we need to disable the Services
						either temporarily or permanently. We cannot guarantee the Services
						will be available at all times. We may experience hardware,
						software, or other problems or need to perform maintenance related
						to the Services, resulting in interruptions, delays, or errors. We
						reserve the right to change, modify, interrupt, suspend,
						discontinue, or remove the contents of the Services at any time or
						for any reason at our sole discretion without notice or liability.
						However, we have no obligation to update any information on our
						Services. We will not be liable to you or any third party at any
						time for any period of time for any modification, price change,
						suspension, or discontinuance of the Services.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						You agree that we have no liability whatsoever for any loss, damage,
						or inconvenience caused by your inability to access or use the
						Services during any downtime or discontinuance of the Services.
						Nothing in these Terms will be construed to obligate us to maintain
						and support the Services or to supply any corrections, updates, or
						releases in connection therewith.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						17. GOVERNING LAW
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						These Terms shall be governed by the laws of the State of New York,
						without respect to its conflict of laws principles. You agree to
						submit to the personal jurisdiction in the federal courts of the
						United States or the courts of the State of New York, in each case
						located in the city of New York.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						18. DISPUTE RESOLUTION
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						Please read the following arbitration agreement in this Section
						("Arbitration Agreement") carefully. It requires you to arbitrate
						disputes with us and limits the manner in which you can seek relief
						from us.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Agreement to Arbitrate
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						This Section 19 is referred to in these Terms as the "Arbitration
						Agreement." You agree that any and all disputes or claims that have
						arisen or may arise between you and Thoughtly, whether arising out
						of or relating to these Terms (including any alleged breach
						thereof), the Services, any advertising, any aspect of the
						relationship or transactions between us, shall be resolved
						exclusively through final and binding arbitration, rather than a
						court, in accordance with the terms of this Arbitration Agreement,
						except that you may assert individual claims in small claims court,
						if your claims qualify. Further, this Arbitration Agreement does not
						preclude you from bringing issues to the attention of federal,
						state, or local agencies, and such agencies can, if the law allows,
						seek relief against us on your behalf. You agree that, by entering
						into these Terms, you and Thoughtly are each waiving the right to a
						trial by jury or to participate in a class action. Your rights will
						be determined by a neutral arbitrator, not a judge or jury. The
						Federal Arbitration Act governs the interpretation and enforcement
						of this Arbitration Agreement.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Pre-Arbitration Dispute Resolution
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						We always interested in resolving disputes amicably and efficiently,
						and most of your concerns can be resolved quickly and to your
						satisfaction by emailing customer support at support@thought.ly. If
						such efforts prove unsuccessful, a party who intends to seek
						arbitration must first send to the other, by certified mail, a
						written notice of dispute ("Notice"). The Notice to Thoughtly should
						be sent to the address: 041 E 11th St, New York, NY 10003, with copy
						to support@thought.ly ("Notice Address"). The Notice must (i)
						describe the nature and basis of the claim or dispute and (ii) set
						forth the specific relief sought. If you and Thoughtly do not
						resolve the claim within sixty (60) calendar days after the Notice
						is received, you or Thoughtly may commence an arbitration
						proceeding. During the arbitration, the amount of any settlement
						offer made by Thoughtly or you shall not be disclosed to the
						arbitrator until after the arbitrator determines the amount, if any,
						to which you or Thoughtly is entitled.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Prohibition of Class and Representative Actions and
						Non-Individualized Relief
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						YOU AND THOUGHTLY AGREE THAT EACH OF US MAY BRING CLAIMS AGAINST THE
						OTHER ONLY ON AN INDIVIDUAL BASIS AND NOT AS A PLAINTIFF OR CLASS
						MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE ACTION OR
						PROCEEDING. UNLESS BOTH YOU AND THOUGHTLY AGREE OTHERWISE, THE
						ARBITRATOR MAY NOT CONSOLIDATE OR JOIN MORE THAN ONE PERSON'S OR
						PARTY'S CLAIMS AND MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A
						CONSOLIDATED, REPRESENTATIVE, OR CLASS PROCEEDING. ALSO, THE
						ARBITRATOR MAY AWARD RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND
						DECLARATORY RELIEF) ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING
						RELIEF AND ONLY TO THE EXTENT NECESSARY TO PROVIDE RELIEF
						NECESSITATED BY THAT PARTY'S INDIVIDUAL CLAIM(S), EXCEPT THAT YOU
						MAY PURSUE A CLAIM FOR AND THE ARBITRATOR MAY AWARD PUBLIC
						INJUNCTIVE RELIEF UNDER APPLICABLE LAW TO THE EXTENT REQUIRED FOR
						THE ENFORCEABILITY OF THIS PROVISION.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Waiver of Jury Trial
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						YOU AND THOUGHTLY HEREBY WAIVE ANY CONSTITUTIONAL AND STATUTORY
						RIGHTS TO SUE IN COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A
						JURY. You and Thoughtly are instead electing that all claims and
						disputes shall be resolved by arbitration under this Arbitration
						Agreement, except as specified in this Section above. An arbitrator
						can award on an individual basis the same damages and relief as a
						court and must follow this Arbitration Agreement as a court would.
						However, there is no judge or jury in arbitration, and court review
						of an arbitration award is subject to very limited review.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Arbitration Procedures
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						Arbitration will be conducted by a neutral arbitrator in accordance
						with the American Arbitration Association's ("AAA") rules and
						procedures, including the AAA's Consumer Arbitration Rules
						(collectively, the "AAA Rules"), as modified by this Arbitration
						Agreement. For information on the AAA, please visit its website,
						https://www.adr.org. Information about the AAA Rules and fees for
						consumer disputes can be found at the AAA's consumer arbitration
						page, https://www.adr.org/consumer_arbitration . If there is any
						inconsistency between any term of the AAA Rules and any term of this
						Arbitration Agreement, the applicable terms of this Arbitration
						Agreement will control unless the arbitrator determines that the
						application of the inconsistent Arbitration Agreement terms would
						not result in a fundamentally fair arbitration. The arbitrator must
						also follow the provisions of these Terms as a court would. All
						issues are for the arbitrator to decide, including, but not limited
						to, issues relating to the scope, enforceability, and arbitrability
						of this Arbitration Agreement. Although arbitration proceedings are
						usually simpler and more streamlined than trials and other judicial
						proceedings, the arbitrator can award the same damages and relief on
						an individual basis that a court can award to an individual under
						the Terms and applicable law. Decisions by the arbitrator are
						enforceable in court and may be overturned by a court only for very
						limited reasons. Unless Thoughtly and you agree otherwise, any
						arbitration hearings will take place in a reasonably convenient
						location for both parties with due consideration of their ability to
						travel and other pertinent circumstances. If the parties are unable
						to agree on a location, the determination shall be made by AAA. If
						your claim is for $10,000 or less, Thoughtly agrees that you may
						choose whether the arbitration will be conducted solely on the basis
						of documents submitted to the arbitrator, through a telephonic
						hearing, or by an in-person hearing as established by the AAA Rules.
						If your claim exceeds $10,000, the right to a hearing will be
						determined by the AAA Rules. Regardless of the manner in which the
						arbitration is conducted, the arbitrator shall issue a reasoned
						written decision sufficient to explain the essential findings and
						conclusions on which the award is based.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Costs of Arbitration
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						Payment of all filing, administration, and arbitrator fees
						(collectively, the "Arbitration Fees") will be governed by the AAA
						Rules, unless otherwise provided in this Arbitration Agreement. If
						the value of the relief sought is $75,000 or less, at your request,
						Thoughtly may elect to pay all Arbitration Fees. If the value of
						relief sought is more than $75,000 and you are able to demonstrate
						to the arbitrator that you are economically unable to pay your
						portion of the Arbitration Fees or if the arbitrator otherwise
						determines for any reason that you should not be required to pay
						your portion of the Arbitration Fees, Thoughtly may elect to pay
						your portion of such fees. In addition, if you demonstrate to the
						arbitrator that the costs of arbitration will be prohibitive as
						compared to the costs of litigation, Thoughtly may elect to pay as
						much of the Arbitration Fees as the arbitrator deems necessary to
						prevent the arbitration from being cost-prohibitive. Any payment of
						attorneys' fees will be governed by the AAA Rules.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Confidentiality
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						All aspects of the arbitration proceeding, and any ruling, decision,
						or award by the arbitrator, will be strictly confidential for the
						benefit of all parties.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Severability
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						If a court or the arbitrator decides that any term or provision of
						this Arbitration Agreement (other than the subsection titled
						"Prohibition of Class and Representative Actions and
						Non-Individualized Relief" above) is invalid or unenforceable, the
						parties agree to replace such term or provision with a term or
						provision that is valid and enforceable and that comes closest to
						expressing the intention of the invalid or unenforceable term or
						provision, and this Arbitration Agreement shall be enforceable as so
						modified. If a court or the arbitrator decides that any of the
						provisions of subsection above titled "Prohibition of Class and
						Representative Actions and Non-Individualized Relief" are invalid or
						unenforceable, then the entirety of this Arbitration Agreement shall
						be null and void, unless such provisions are deemed to be invalid or
						unenforceable solely with respect to claims for public injunctive
						relief. The remainder of the Terms will continue to apply.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Future Changes to Arbitration Agreement
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding>
						Notwithstanding any provision in these Terms to the contrary,
						Thoughtly agrees that if it makes any future change to this
						Arbitration Agreement (other than a change to the Notice Address)
						while you are a user of the Services, you may reject any such change
						by sending us written notice within thirty (30) calendar days of the
						change to the Notice Address provided above. By rejecting any future
						change, you are agreeing that you will arbitrate any dispute between
						us in accordance with the language of this Arbitration Agreement as
						of the date you first accepted these Terms (or accepted any
						subsequent changes to these Terms).
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>19. DISCLAIMER</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
						AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
						THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
						EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
						THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
						MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
						NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
						ACCURACY OR COMPLETENESS OF THE SERVICES, OUTPUT OR THE SERVICES
						CONTENT OR CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO
						THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR
						ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS,
						(2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
						RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY
						UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND
						ALL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF
						TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN
						HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE
						SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN
						ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND
						INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED,
						OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT,
						ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR
						SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES,
						ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION
						FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A
						PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION
						BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
						AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR
						IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
						CAUTION WHERE APPROPRIATE.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						20. LIMITATIONS OF LIABILITY
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
						TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
						EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
						PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM
						YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE
						POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE
						CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE
						WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL
						TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE
						SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN
						US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON
						IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN
						DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE
						DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE
						ADDITIONAL RIGHTS.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						IF YOU ARE A RESIDENT OF A JURISDICTION THAT REQUIRES A SPECIFIC
						STATEMENT REGARDING RELEASE, THEN THE FOLLOWING APPLIES. FOR
						EXAMPLE, (1) CALIFORNIA RESIDENTS MUST, AS A CONDITION OF THIS
						AGREEMENT, WAIVE THE APPLICABILITY OF CALIFORNIA CIVIL CODE SECTION
						1542, WHICH STATES, "A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS
						THAT THE CREDITOR OR RELEASING PARTY DOES NOT KNOW OR SUSPECT TO
						EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE AND
						THAT, IF KNOWN BY HIM OR HER, WOULD HAVE MATERIALLY AFFECTED HIS OR
						HER SETTLEMENT WITH THE DEBTOR OR RELEASED PARTY" AND (2) NEW JERSEY
						RESIDENTS MUST, AS A CONDITION OF THIS AGREEMENT, WAIVE THE
						APPLICABILITY OF THE TRUTH IN CONSUMER CONTRACT, WARRANTY, AND
						NOTICE ACT (X) SECTION 15, WHICH STATES, AMONG OTHER THINGS, THAT
						“NO SELLERS…SHALL IN THE COURSE OF HIS BUSINESS OFFER TO ANY
						CONSUMER OR PROSPECTIVE CONSUMER OR ENTER INTO ANY WRITTEN CONSUMER
						CONTRACT OR GIVE OR DISPLAY ANY WRITTEN CONSUMER WARRANTY, NOTICE OR
						SIGN…WHICH INCLUDES ANY PROVISION THAT VIOLATES ANY CLEARLY
						ESTABLISHED LEGAL RIGHT OF A CONSUMER OR RESPONSIBILITY OF A
						SELLER…” AND (Y) SECTION 16, WHICH STATES, AMONG OTHER THINGS, THAT
						“…NO CONSUMER CONTRACT, NOTICE OR SIGN SHALL STATE THAT ANY OF ITS
						PROVISIONS IS OR MAY BE VOID, UNENFORCEABLE OR INAPPLICABLE IN SOME
						JURISDICTIONS WITHOUT SPECIFYING WHICH PROVISIONS ARE OR ARE NOT
						VOID, UNENFORCEABLE OR INAPPLICABLE WITHIN THE STATE OF NEW
						JERSEY…”. YOU HEREBY WAIVE, AS APPLICABLE, THESE SECTIONS OF THE
						CALIFORNIA CIVIL CODE AND NEW JERSEY TRUTH IN CONSUMER CONTRACT,
						WARRANTY, AND NOTICE ACT. YOU HEREBY WAIVE ANY SIMILAR PROVISION IN
						LAW, REGULATION, OR CODE THAT HAS THE SAME INTENT OR EFFECT AS THE
						AFOREMENTIONED PROVISIONS.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						21. BETA SERVICES
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						You may choose to use services or features identified as “alpha,”
						“beta,” “preview,” “early access,” or “evaluation,” or words or
						phrases with similar meanings (“Beta Services”) in your sole
						discretion. Notwithstanding anything to the contrary in these Terms
						or otherwise: (a) Beta Services may not be supported and may be
						changed or terminated at any time without notice; (b) Beta Services
						may not be as reliable or available as the Services; (c) Beta
						Services have not been subjected to the same security requirements,
						measures, and auditing as the Services; (d) Beta Services constitute
						Thoughtly’s Confidential Information; and (e) BETA SERVICES ARE
						PROVIDED “AS IS” WITHOUT ANY WARRANTY, INDEMNITY OR SUPPORT AND
						THOUGHTLY’S LIABILITY FOR BETA SERVICES WILL NOT EXCEED FIFTY
						DOLLARS (US $50).
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						22. Compliance and Acknowledgment of Applicable Telemarketing,
						Dialing and Recording Laws
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						We may monitor, but are not obligated to and bear no responsibility
						for, uploading of information, databases or audio messages. You
						agree that you shall comply with and abide by all applicable federal
						and state laws, rules and regulations governing the use of automated
						or prerecorded/artificial calls or texts including but not limited
						to the Telephone Consumer Protection Act (“TCPA”), the Telemarketing
						Sales Rule and accompanying Do-Not-Call regulations, wiretap and
						recording laws, and, without limitation, any and all current or
						future equivalent state telemarketing laws regulating the use of
						prerecorded or automated calls/texts, state do-not-call regulations,
						and state telemarketer registration requirements, state wiretap and
						recording laws, and any other relevant laws.
					</legalStyles.Paragraph>
					<legalStyles.UList $noPadding={false}>
						<legalStyles.ListItem>
							You will provide accurate, correct, and truthful Caller ID
							information.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							You will provide all disclosures required by law.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							You agree and acknowledge that compliance with such laws is your
							sole responsibility.
						</legalStyles.ListItem>
					</legalStyles.UList>
					<legalStyles.SectionSubheader>
						TCPA Disclaimer
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						The TCPA imposes stringent regulations on the use of telephone
						equipment, including but not limited to artificial or prerecorded
						voice messages and automatic telephone dialing systems. To align
						with these regulations:
					</legalStyles.Paragraph>
					<legalStyles.BoldText>Prior Express Consent</legalStyles.BoldText>
					<legalStyles.Paragraph $noPadding={false}>
						You acknowledge and understand that recipient consent is required
						for certain types of communications. Ensure that you have obtained
						prior express consent from all recipients before making calls using
						AI-generated text-to-speech technology, especially when contacting
						mobile phones or delivering prerecorded messages. Consent must be
						clear and unambiguous, indicating the recipient agrees to receive
						such calls from your organization. You understand that there may be
						different “levels” of consent for different communications.
					</legalStyles.Paragraph>
					<legalStyles.BoldText>
						Established Business Relationship (EBR)
					</legalStyles.BoldText>
					<legalStyles.Paragraph $noPadding={false}>
						While calls to individuals with whom you have an established
						business relationship may be exempt from certain restrictions, it is
						essential to verify that such exemptions apply under the current
						regulations and to respect any revocation of consent.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						Without limiting the foregoing, if you do not have either consent or
						a business relationship with a recipient as required by applicable
						law or legally valid exemption from, or legally valid exception to,
						such laws, Subscriber shall not make that communication.
					</legalStyles.Paragraph>
					<legalStyles.BoldText>
						Residential and Special Service Numbers
					</legalStyles.BoldText>
					<legalStyles.Paragraph $noPadding={false}>
						You will exercise caution when making AI-generated calls to
						residential lines or numbers assigned to emergency services,
						healthcare facilities, elderly homes, and services where the
						recipient incurs charges for the call. Such calls require prior
						express consent, with limited exceptions.
					</legalStyles.Paragraph>
					<legalStyles.BoldText>
						Identification and Contact Information
					</legalStyles.BoldText>
					<legalStyles.Paragraph $noPadding={false}>
						You will ensure that any calls include a clear and concise
						identification of the business, individual, or entity initiating the
						call at the outset of the message, along with contact information,
						allowing recipients to inquire or opt-out.
					</legalStyles.Paragraph>
					<legalStyles.BoldText>
						National Do Not Call Registry Compliance
					</legalStyles.BoldText>
					<legalStyles.Paragraph $noPadding={false}>
						You will confirm that numbers dialed are not listed on the national
						Do Not Call Registry, unless an exemption applies. Regularly check
						the registry to update your contact lists accordingly.
					</legalStyles.Paragraph>
					<legalStyles.BoldText>Limitation of Liability</legalStyles.BoldText>
					<legalStyles.Paragraph $noPadding={false}>
						Thoughtly utilizes AI-generated text-to-speech technology as a tool
						for communication purposes. While we strive to ensure our services
						are compliant with all applicable regulations, the responsibility
						for adhering to the TCPA and any other relevant laws rests solely
						with the user. Thoughtly is not liable for any violations of rules
						or regulations resulting from the use of our technology. Users must
						ensure that their use of Thoughtly's services complies with all
						legal requirements, including obtaining necessary consents and
						adhering to all applicable laws. The liability for any breaches of
						such laws falls on you as the individual or entity choosing to
						initiate or record the calls.
					</legalStyles.Paragraph>
					<legalStyles.BoldText>Records</legalStyles.BoldText>
					<legalStyles.Paragraph $noPadding>
						You (i) have and maintain personally or via a third-party the
						records to prove that you had the necessary consent, business
						relationship or legally valid exemption from, or legally valid
						exception to, such laws at the time of the call or other
						communication and (ii) will provide certified copies of such records
						to us promptly upon our request.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						23. COPYRIGHT INFRINGEMENT AND DIGITAL MILLENNIUM COPYRIGHT ACT
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						We respect the intellectual property rights of others, and we ask
						our users to do the same. In accordance with the Digital Millennium
						Copyright Act (DMCA) and other applicable law, in appropriate
						circumstances and in our sole discretion, we may terminate the
						rights of any user to use the Services (or any part thereof) who
						infringes the intellectual property rights of others. If you believe
						that your work has been copied in a way that constitutes copyright
						infringement, or if you are aware of someone so infringing on your
						rights, please provide the following information to the “Copyright
						Agent”:
					</legalStyles.Paragraph>
					<legalStyles.UList $noPadding>
						<legalStyles.ListItem>
							An electronic or physical signature of the person authorized to
							act on behalf of the owner of the copyright interest.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							A description of the copyrighted work that you claim has been
							infringed upon.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							A description of where the material that you claim is infringing
							is located on the Services.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Your address, telephone number, and email address.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							A statement that you have a good faith belief that the disputed
							use is not authorized by the copyright owner, its agent, and/or
							the law.{" "}
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							A statement by you, made under penalty of perjury, that the above
							information in your notice is accurate, and that you are the
							copyright owner or authorized to act on the copyright owner’s
							behalf.{" "}
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							All notices of copyright infringement claims should go to our
							Copyright Agent at [copyright@Company.org]
						</legalStyles.ListItem>
					</legalStyles.UList>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						24. ARTIFICIAL INTELLIGENCE TOOLS
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						The Services may leverage third party large language models and
						artificial intelligence algorithms and platforms (“Third-Party
						Models”) to generate suggested software code made through the
						Services (collectively, the “Output”) in response to your prompts
						(“Prompts”). We do not make any representations with respect to
						Third-Party Models or any Output provided in connection therewith.
						Such Third-Party Models are not under the control of Thoughtly and
						do not form part of the Services or related services. We are not
						responsible for any Third-Party Models or Output generated thereby
						and you use such Third-Party Models and Output at your own risk.
						Without limiting the foregoing, you acknowledge and agree to
						OpenAI’s Terms of Use (currently accessible at
						https://openai.com/policies/terms-of-use) and its Privacy Policy
						(currently accessible at
						https://openai.com/policies/privacy-policy), Google’s AI Studio
						Terms (currently accessible at https://ai.google.dev/terms) and
						Privacy Policy (currently accessible at
						https://policies.google.com/privacy), and Meta AI Terms (currently
						accessible at
						https://www.facebook.com/policies/other-policies/ais-terms) and
						Privacy Policy (currently accessible at
						https://www.facebook.com/privacy/policy/) and hereby consent and
						authorize us to share any your content with one or more Third-Party
						Model providers to the extent required to complete your request.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Ownership of Output
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						As between Thoughtly and you, each of the Prompts and Output are
						considered “Customer Data” for the purposes of these Terms. You are
						the owner of Customer Data, and we hereby assign to you all right,
						title and interest it may have, if any, in and to any Output. You
						acknowledge and agree that such Prompts may be provided to
						Third-Party Models in connection with your use of the Services under
						the Terms, or policies governing the Third-Party Models.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Responsible Use of AI Output
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						You are responsible for reviewing any Output prior to its use and
						exercising its own business and legal judgment as to its suitability
						for use. You acknowledge and agree that, notwithstanding the
						automated suggestions provided by the Services, you remain solely
						responsible for the content, legality, accuracy, and completeness of
						the Outputs, and any use thereof. You will evaluate the fitness of
						any Output as appropriate for your specific use case.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						THOUGHTLY MAKES NO WARRANTY OR GUARANTEE THAT THE OUTPUT WILL
						PROVIDE ACCURATE, TAILORED OR INFORMATIVE RESULTS OR BE FIT FOR THE
						PARTICULAR PURPOSE OR USE CASE. THOUGHTLY DOES NOT REPRESENT OR
						WARRANT THAT THE PROMPTS OR OUTPUT ARE PROTECTABLE BY ANY
						INTELLECTUAL PROPERTY RIGHTS, OR THAT THE OUTPUT DOES NOT
						INCORPORATE, INFRINGE OR MISAPPROPRIATE THE INTELLECTUAL PROPERTY OR
						PROPRIETARY RIGHTS OF ANY THIRD PARTY. YOU ACKNOWLEDGE THAT THE
						SERVICES LEVERAGE THIRD-PARTY MODELS AND THAT THOUGHTLY IS NOT
						LIABLE, AND YOU AGREE NOT TO SEEK TO HOLD THOUGHTLY LIABLE, FOR
						THIRD-PARTY MODELS OR ANY OUTPUT THEREOF.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						25. DEVELOPER MATERIALS
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						In connection with the Services, we may make available and you may
						have access to (i) client software provided as part of the Services,
						such as mobile or desktop applications or browser extensions
						(“Software”), and (ii) application programming interfaces, tools,
						libraries, scripts, sample source code and similar developer
						materials made available by us specifically for use with the
						Services (“Thoughtly Developer Materials”).
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						For any Thoughtly Developer Materials that we make available to you,
						we hereby grants you a non-exclusive, limited, revocable,
						non-transferable, non-sublicensable right to access and use the
						Software and Thoughtly Developer Materials, in the form made
						available by or for us, solely to the extent necessary to use the
						Services and for your internal business purposes and in accordance
						with our relevant documentation for the Thoughtly Developer
						Materials. To the extent a component of the Software contains any
						open source software, the open source license for that software will
						govern with respect to that component. You agree that you have
						reviewed and accepted all applicable third party terms and you take
						sole responsibility for determining, obtaining and complying with
						all such third party terms. we will have no responsibility for and
						makes no representations and warranties regarding any Third Party
						Materials or your use of Third Party Materials, and any third party
						terms or your compliance with such third party terms. The foregoing
						rights are and remain subject to and conditioned on your compliance
						with these Terms including all payment obligations. All Thoughtly
						Developer Materials are confidential and proprietary to us. You may
						not and are not authorized to distribute or disclose Thoughtly
						Developer Materials to any third party or use them for any purpose
						other than as expressly permitted by these Terms.{" "}
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						Unless otherwise authorized by us in writing, if you develop any
						applications, services or modules using all or any portion of the
						Thoughtly Developer Materials (collectively, “Developed
						Applications”), you may use your Developed Applications with
						third-party software or hardware, but only if you remove from your
						Developed Application all elements of the Thoughtly Developer
						Materials (including any elements based on the Thoughtly Developer
						Materials), and your Developed Application (a) does not disclose,
						make available, incorporate or embody any part of the Thoughtly
						Developer Materials and (b) do not incorporate or embody any part of
						the Services or other Thoughtly intellectual property.{" "}
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						For any Thoughtly Developer Materials that we make available to you,
						Thoughtly hereby grants you a non-exclusive, limited, revocable,
						non-transferable, non-sublicensable right to access and use the
						Thoughtly Developer Materials, in the form made available by or for
						Thoughtly, solely for your internal business purposes of enabling
						your application to receive data from the Thoughtly API, and in
						accordance with the relevant Documentation for the Thoughtly
						Developer Materials. All Thoughtly Developer Materials are
						confidential and proprietary to Thoughtly. You may not and are not
						authorized to distribute or disclose Thoughtly Developer Materials
						to any third party or use them for any purpose other than as
						expressly permitted by these Terms.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						26. INDEMNIFICATION
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						You agree to defend, indemnify, and hold us harmless, including our
						subsidiaries, affiliates, and all of our respective officers,
						agents, partners, and employees, from and against any loss, damage,
						liability, claim, or demand, including reasonable attorneys’ fees
						and expenses, made by any third party due to or arising out of: (1)
						your Customer Data; (2) use of the Services or Output that violates
						these Terms or applicable laws, rules or regulations; (3) breach of
						these Terms; (4) any breach of your representations and warranties
						set forth in these Terms; (5) your violation of the rights of a
						third party, including but not limited to intellectual property
						rights; (6) any overt harmful act toward any other user of the
						Services with whom you connected via the Services; or (7) the use or
						display of any Customer Data. Notwithstanding the foregoing, we
						reserve the right, at your expense, to assume the exclusive defense
						and control of any matter for which you are required to indemnify
						us, and you agree to cooperate, at your expense, with our defense of
						such claims. We will use reasonable efforts to notify you of any
						such claim, action, or proceeding which is subject to this
						indemnification upon becoming aware of it.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						27. CONFIDENTIALITY
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						We may disclose to you confidential information relating to our
						business or current or future products and services (“Confidential
						Information”). You may not disclose Confidential Information to any
						third party, other than to your employees or contractors with a need
						to know such information for you to fulfill your obligations under
						this Agreement. You will not make use of any Confidential
						Information other than in the performance of rights or obligations
						under these Terms. You will use at least the same degree of care to
						avoid disclosure of Confidential Information as you uses with
						respect to your own confidential information. This Section shall not
						limit any prior confidentiality agreement between the parties.
						Confidential Information does not include information: (a) generally
						available to or known to the public, (b) previously known to you,
						(c) independently developed by you outside the scope of these Terms,
						or (d) lawfully disclosed by a third party.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						28. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						Visiting the Services, sending us emails, and completing online
						forms constitute electronic communications. You consent to receive
						electronic communications, and you agree that all agreements,
						notices, disclosures, and other communications we provide to you
						electronically, via email and on the Services, satisfy any legal
						requirement that such communication be in writing. YOU HEREBY AGREE
						TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER
						RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND
						RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE
						SERVICES. You hereby waive any rights or requirements under any
						statutes, regulations, rules, ordinances, or other laws in any
						jurisdiction which require an original signature or delivery or
						retention of non-electronic records, or to payments or the granting
						of credits by any means other than electronic means.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						29. MISCELLANEOUS
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						These Terms and any policies or operating rules posted by us on the
						Services or in respect to the Services constitute the entire
						agreement and understanding between you and us and supersede all
						prior and contemporaneous understandings, agreements,
						representations and warranties, both written and oral, with respect
						to the Services. Our failure to exercise or enforce any right or
						provision of these Terms shall not operate as a waiver of such right
						or provision. These Terms operate to the fullest extent permissible
						by law. We may assign any or all of our rights and obligations to
						others at any time. The Terms, and any rights or obligations
						hereunder, are not assignable, transferable, or sublicensable by you
						except with our prior written consent, but may be assigned or
						transferred by us without restriction. Any attempted assignment by
						you shall violate these Terms and be void. We shall not be
						responsible or liable for any loss, damage, delay, or failure to act
						caused by any cause beyond our reasonable control. If any provision
						or part of a provision of these Terms is determined to be unlawful,
						void, or unenforceable, that provision or part of the provision is
						deemed severable from these Terms and does not affect the validity
						and enforceability of any remaining provisions. If any provision of
						these Terms is held by a court of competent jurisdiction to be
						invalid, illegal, or unenforceable for any reason, such provision
						shall be modified to reflect the parties’ intention or eliminated to
						the minimum extent such that the remaining provisions of the Terms
						will continue in full force and effect There is no joint venture,
						partnership, employment or agency relationship created between you
						and us as a result of these Terms or use of the Services. You agree
						that these Terms will not be construed against us by virtue of
						having drafted them. You hereby waive any and all defenses you may
						have based on the electronic form of these Terms and the lack of
						signing by the parties hereto to execute these Terms. The section
						titles in the Terms are for convenience only and have no legal or
						contractual effect.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>30. PUBLICITY</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						You agree that we may identify you as a customer and advertise or
						publicize our provision of the Services to you, including on our
						website or in our promotional materials. You grant us a
						non-exclusive, worldwide, right and license to use your company name
						and logo in marketing, sales, financial, and public relations
						materials and other communications for purposes of identifying you
						as a customer. You further agree to allow us to use your name, logo
						and examples and visuals of how you are using the Services in the
						public domain, in corporate, promotional and marketing materials and
						content, and in the normal course of business.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>31. CONTACT US</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						In order to resolve a complaint regarding the Services or to receive
						further information regarding use of the Services, please contact us
						at:
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						Thoughtly, Inc.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						United States
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						<legalStyles.Link to={links.contact}>
							support@thought.ly
						</legalStyles.Link>
					</legalStyles.Paragraph>
				</legalStyles.Section>
			</legalStyles.Inner>
		</legalStyles.Wrapper>
	)
}

export function Head() {
	return (
		<Seo
			title="Thoughtly | Terms and Conditions"
			description="Thoughtly helps teams build and deploy AI voice agents in minutes, not months."
			pathname="/terms"
		/>
	)
}
