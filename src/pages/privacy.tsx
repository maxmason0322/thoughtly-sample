import legalStyles from "components/Legal/LegalStyles"
import Seo from "components/Seo"
import gsap from "gsap"
import getMedia from "library/getMedia"
import useAnimation from "library/useAnimation"
import { getResponsivePixels } from "library/viewportUtils"
import { useRef } from "react"
import links from "utils/links"

export default function Privacy() {
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
					<legalStyles.Title>Privacy Policy</legalStyles.Title>
					<legalStyles.Subtitle>Last Updated May 17, 2024</legalStyles.Subtitle>
				</legalStyles.Top>
				<legalStyles.Section>
					<legalStyles.Paragraph $noPadding={false}>
						Your privacy is important to us. This Privacy Policy (“Policy”)
						applies to services provided by Thoughtly, Inc. (“we”, “us”, or
						“Thoughtly”) and our website (thought.ly, accessible from{" "}
						<legalStyles.Link href={links.homePage}>
							https://thought.ly/
						</legalStyles.Link>
						), product pages, mobile or web applications, or other digital
						products that link to or reference this Policy (collectively, the
						“Services”) and explains what information we collect from the
						individual accessing or using the Services, or the company, or other
						legal entity on behalf of which such individual is accessing or
						using the Services, as applicable (a “user”, “you”, or “your”),
						including information that may be used to personally identify you
						(“Personal Information”) and how we use it. This Policy applies to
						any visitor to or user of our Services. We encourage you to read the
						details below.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						We reserve the right to change this Policy at any time. We will
						notify you of any changes to this Policy by posting a new Policy to
						this page, and/or by sending notice to the primary email address
						specified in your account. You are responsible for ensuring we have
						an up-to-date active and deliverable email address for you, and for
						periodically reviewing this Policy to check for any changes. Changes
						to this Policy are effective when they are posted on this page. You
						acknowledge that your continued use of our Services after we publish
						or send a notice about our changes to this Policy means that the
						collection, use and sharing of your Personal Information is subject
						to the updated Policy.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Scope and Applicability
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						The Policy applies to your information when you visit our website or
						otherwise use the Services. We will only collect and process
						information where we have lawful bases. With respect to the
						information described in this Policy, lawful bases include consent
						(where you have given consent), contract (where processing is
						necessary for the performance of a contract with you (e.g. to
						deliver the Services you have requested)), and, in some instances,
						for “legitimate interests” in the applicable jurisdiction.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						Our Services may provide links or connections to other online
						services, and may include third- party integrations such as apps,
						tools, widgets and plug-ins. These online services and third-party
						features may operate independently from us. The privacy practices of
						the relevant third parties, including details on the information
						they may collect about you, are subject to the privacy disclosures
						of these parties, which we strongly suggest you review. To the
						extent any linked online services or third-party features are not
						owned or controlled by us, we are not responsible for these third
						parties’ information practices.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						What Information Do We Collect?
					</legalStyles.SectionHeader>
					<legalStyles.SectionSubheader>
						Information You Provide to Us
					</legalStyles.SectionSubheader>
					<legalStyles.UList $noPadding={false}>
						<legalStyles.ListItem>
							<legalStyles.BoldText>Account Information:</legalStyles.BoldText>{" "}
							To create an account for the Services or to enable certain
							features, we may require that you provide us with information for
							your account such as name, email, profile picture, password,
							authentication credentials, payment card information, and
							transaction history (collectively, “Account Information”).
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							<legalStyles.BoldText>Customer Content:</legalStyles.BoldText>{" "}
							When you use our Services, we collect Personal Information that is
							included in the input, call recordings, file uploads,
							transcription description data, or other content that you provide
							to our Services (“Customer Content”). Our use of and processing of
							Customer Content is governed by our Terms of Service.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							<legalStyles.BoldText>Payment Information:</legalStyles.BoldText>{" "}
							If you sign up for a paid subscription, we (or our payment
							processors) may need your billing details such as credit card
							information, banking information, and billing address. Your
							payment information, such as your payment method (valid credit
							card number, type, expiration date or other financial
							information), is collected and stored by our third party payment
							processing company (the "Payment Processor"), and use and storage
							of that information is governed by the Payment Processors
							applicable privacy policy. As of the effective date of this
							Privacy Policy listed below, Stripe is the Payment Processor used
							within the Services and its privacy policy is available at{" "}
							<legalStyles.Link href={links.stripe}>
								https://stripe.com/us/privacy
							</legalStyles.Link>{" "}
							or such other URL designated by Stripe. In order to facilitate
							your order transactions, we collect and store your credit card
							type, the last four digits of your credit card number, and
							expiration date, but no other financial information.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							<legalStyles.BoldText>
								Communication Information:
							</legalStyles.BoldText>{" "}
							If you communicate with us, we collect your name, contact
							information, and the contents of any messages you send
							(“Communication Information”).
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							<legalStyles.BoldText>
								Social Media Information:
							</legalStyles.BoldText>{" "}
							We have pages on social media sites like Instagram, Facebook,
							Medium, Twitter, YouTube and LinkedIn. When you interact with our
							social media pages, we will collect Personal Information that you
							elect to provide to us, such as your contact details
							(collectively, “Social Information”). In addition, the companies
							that host our social media pages may provide us with aggregate
							information and analytics about our social media activity.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							<legalStyles.BoldText>
								Other Information You Provide:
							</legalStyles.BoldText>{" "}
							We receive other information from you when you choose to interact
							with us in other ways, such as if you sign up for one of our
							webinars or newsletters, participate in a research study or event,
							when you participate in our events or surveys or provide us with
							information to establish your identity, or otherwise communicate
							with us (collectively, “Other Information You Provide”).
						</legalStyles.ListItem>
					</legalStyles.UList>
					<legalStyles.SectionSubheader>
						Information We Collect Automatically
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						When you visit, use, and interact with the Services, we may receive
						the following information about your visit, use, or interactions
						(“Technical Information”):
					</legalStyles.Paragraph>
					<legalStyles.UList $noPadding={false}>
						<legalStyles.ListItem>
							<legalStyles.BoldText>Log Data:</legalStyles.BoldText> Information
							that your browser automatically sends whenever you use our website
							(“log data”). Log data includes your internet protocol address,
							browser type and settings, the date and time of your request, and
							how you interacted with our website.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							<legalStyles.BoldText>Usage Data:</legalStyles.BoldText> We may
							automatically collect information about your use of the Services,
							such as the types of content that you view or engage with, the
							features you use and the actions you take, as well as your time
							zone, country, the dates and times of access, user agent and
							version, type of computer or mobile device, computer connection,
							IP address, and the like (“Usage Data”).
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							<legalStyles.BoldText>Device Information:</legalStyles.BoldText>{" "}
							Includes name of the device, operating system, and browser you are
							using. Information collected may depend on the type of device you
							use and its settings.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							<legalStyles.BoldText>Analytics:</legalStyles.BoldText> We may use
							a variety of online analytics products that use cookies to help us
							analyze how users use our Services and enhance your experience
							when you use the Services.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							<legalStyles.BoldText>Call Recordings:</legalStyles.BoldText> All
							calls, including any personal information during the calls, which
							interact with the Services are recorded by our system and stored,
							unless this feature is toggled off by you.
						</legalStyles.ListItem>
					</legalStyles.UList>
					<legalStyles.Paragraph $noPadding={false}>
						We use cookies and other tracking technologies to help us collect
						and process Technical Information. Please see the “How Do We Use
						Tracking Technologies” section below for more information.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Information We Receive from Third Parties
					</legalStyles.SectionSubheader>
					<legalStyles.UList $noPadding={false}>
						<legalStyles.ListItem>
							<legalStyles.BoldText>
								Third-Party Integrations:
							</legalStyles.BoldText>{" "}
							Third parties may develop their applications to interoperate with
							us. If you choose to enable an integration, the third-party may
							share some information about you with us to make your experience
							more seamless, such as your name, email, or other content or
							information needed to facilitate the integration. Additionally, if
							you sign up or login to our Services using one of our
							single-sign-on providers (e.g., Google, Apple, etc.), we collect
							authentication information provided to us by the provider to allow
							you to log in.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							<legalStyles.BoldText>
								Marketing Information:
							</legalStyles.BoldText>{" "}
							We may receive marketing or demographic information about you from
							third parties or partners, for example, data about your
							organization or industry or other public information from sources
							like social media or online professional profiles. We may combine
							this information with other data we already have to improve your
							experience with our Services or inform you of Services we think
							may be of interest to you.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							<legalStyles.BoldText>Service Providers,</legalStyles.BoldText>{" "}
							which help us operate our business.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							<legalStyles.BoldText>
								Social Networks and Advertising Providers,
							</legalStyles.BoldText>{" "}
							including information provided by marketers and other websites on
							which we advertise, to help us identify or enrich our
							understanding of prospective customers, and to serve and measure
							advertising.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							<legalStyles.BoldText>
								Joint Marketing, Business Partnership, Referrals, and Rewards
								Partners
							</legalStyles.BoldText>{" "}
							that we engage for joint marketing activities and our referrals
							and rewards programs.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							<legalStyles.BoldText>Other Data Suppliers</legalStyles.BoldText>{" "}
							that provide information about industries, business trends,
							organizations and other matters related to our business.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							<legalStyles.BoldText>
								Publicly-Available Sources,
							</legalStyles.BoldText>{" "}
							including information in the public domain that helps us identify
							potential customers and partners or conduct due diligence and risk
							management for potential and existing customers.
						</legalStyles.ListItem>
					</legalStyles.UList>
					<legalStyles.SectionSubheader>
						Information from Third-Party Social Media Services
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						We may allow you to create an account and log in to use the Services
						through the following third- party social media services
						(“Third-Party Social Media Services)
					</legalStyles.Paragraph>
					<legalStyles.UList $noPadding={false}>
						<legalStyles.ListItem>Google</legalStyles.ListItem>
					</legalStyles.UList>
					<legalStyles.Paragraph $noPadding={false}>
						If you decide to register through or otherwise grant us access to a
						Third-Party Social Media Service, we may collect Personal
						Information that is already associated with your Third-Party Social
						Media Service’s account, such as your name, your email address, your
						activities or your contact list associated with that account.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						You may also have the option of sharing additional information with
						us through your Third-Party Social Media Service’s account. If you
						choose to provide such information and Personal Information, during
						registration or otherwise, you are giving us permission to use,
						share, and store it in a manner consistent with this Policy.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Use of Your Personal Information
					</legalStyles.SectionHeader>
					<legalStyles.SectionSubheader>
						We may use Personal Information for the following purposes:
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>To manage your account:</legalStyles.BoldText>{" "}
						To manage your account registration as a user of the Services, and
						to link or combine user information with other Personal Information.
						The Personal Information you provide can give you access to
						different functionalities of the Services that are available to you
						as a registered user.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>
							For the performance of a contract:
						</legalStyles.BoldText>{" "}
						To deliver and improve the Services and your overall experience, and
						the development, compliance and undertaking of the purchase contract
						for the products, items or services you have purchased or of any
						other contract with us through the Services.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>To contact You:</legalStyles.BoldText> To
						contact you by email, message, telephone calls, SMS, or other
						equivalent forms of electronic communication, such as a mobile
						application's push notifications regarding updates or informative
						communications related to us or the Services, or the
						functionalities, products or contracted services, including the
						security updates, when necessary or reasonable for their
						implementation; to provide you with news, special offers and general
						information about other goods, services and events which we offer
						that are similar to those that you have already purchased or
						enquired about unless you have opted not to receive such
						information; and to send you information including confirmations,
						invoices, technical notices, updates, security alerts, and support
						and administrative messages.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>
							To manage your requests:
						</legalStyles.BoldText>{" "}
						To respond to inquiries, provide customer support and resolve
						disputes, and to attend and manage your requests to us.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>For business transfers:</legalStyles.BoldText>{" "}
						To evaluate or conduct a merger, divestiture, restructuring,
						reorganization, dissolution, or other sale or transfer of some or
						all of our assets, whether as a going concern or as part of
						bankruptcy, liquidation, or similar proceeding, in which Personal
						Information held by us about our Services users is among the assets
						transferred.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>
							For referral arrangements:
						</legalStyles.BoldText>{" "}
						To facilitate and manage referrals from business partners and third
						parties.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>
							For internal reporting and analysis purposes:
						</legalStyles.BoldText>{" "}
						To conduct internal reporting, auditing, and research, including
						focus groups and surveys; to compare and verify information for
						accuracy and update our records, and to analyze how you use the
						Services with tools such as Google Analytics and other tools to help
						us understand traffic patterns and know if there are problems with
						the Services.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>For API transfer:</legalStyles.BoldText> To
						facilitate transfers or API connections between the Services and
						your account, as applicable.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>
							For fulfilling your payment obligations:
						</legalStyles.BoldText>{" "}
						To collect fees and other amounts owed in connection with your
						account.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>
							For identity verification:
						</legalStyles.BoldText>{" "}
						To verify your identity, comply with legal and regulatory
						obligations applicable to us and our financial institution partners,
						determine the availability of Services offerings, and maintain your
						account.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>For security reasons:</legalStyles.BoldText>{" "}
						To maintain the security of the Services, to protect, investigate,
						and deter against fraudulent, unauthorized, or illegal activity, and
						to protect our users, other individuals, and/or our rights and
						property.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>
							For promotional purposes:
						</legalStyles.BoldText>{" "}
						To determine your eligibility for, and administer your participation
						in, certain features of the Services, which may include but not
						limited to surveys, promotions and rewards, and to create targeted
						advertising to promote the Services and engage our users.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>For other purposes:</legalStyles.BoldText> We
						may use your information for other purposes, such as data analysis,
						identifying usage trends, determining the effectiveness of our
						promotional campaigns and to evaluate and improve our Services,
						products, services, marketing and your experience, when required by
						law to respond to legal processes, and at your discretion or
						instruction, or for any other purpose with your consent.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>
							Aggregated or de-identified information:
						</legalStyles.BoldText>{" "}
						We may aggregate or de-identify Personal Information so that it may
						no longer be used to identify you and use such information to
						analyze the effectiveness of our Services, to improve and add
						features to our Services, to conduct research and for other similar
						purposes. In addition, from time to time, we may analyze the general
						behavior and characteristics of users of our Services and share
						aggregated information like general user statistics with third
						parties, publish such aggregated information or make such aggregated
						information generally available. We may collect aggregated
						information through the Services, through cookies, and through other
						means described in this Policy. We will maintain and use
						de-identified information in anonymous or de-identified form and we
						will not attempt to reidentify the information, unless required by
						law.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						As noted above, we may use Customer Content you provide us to
						improve our Services, for example to train the models, please see
						our Terms of Service for more information.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						We may share your Personal Information in the following situations:
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						In addition to the specific situations discussed elsewhere in this
						privacy policy, we disclose personal information in the following
						circumstances:
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>With Service Providers:</legalStyles.BoldText>{" "}
						We may share your Personal Information with service providers to
						monitor and analyze the use of our Services, to contact you, and
						with third parties that perform services to support our core
						business functions and internal operations, which may include
						database administrators, cloud computing services, payment
						processors, advertising services, and application services
						providers.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>For business transfers:</legalStyles.BoldText>{" "}
						We may share or transfer your personal information in connection
						with a change of ownership or control of all or part of our business
						(such as merger, acquisition, reorganization, or bankruptcy), and
						with our corporate Affiliates and subsidiaries, and in connection
						with, or during negotiations of, any merger, sale of our assets,
						financing, or acquisition of all or a portion of our business to
						another company.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>
							For business and corporate purposes:
						</legalStyles.BoldText>{" "}
						We may disclose Personal Information to support our audit,
						compliance, and corporate governance functions.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>With business partners:</legalStyles.BoldText>{" "}
						We may share your information with our business partners to offer
						you certain products, services or promotions, and with third parties
						that we have partnered with, such as to create jointly offer a
						product, service or joint promotion or in connection with
						facilitating referral partnerships.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>With other users:</legalStyles.BoldText> When
						you share personal information or otherwise interact in the public
						areas with other users, such information may be viewed by all users
						and may be publicly distributed outside. If you interact with other
						users or register through a Third-Party Social Media Service, your
						contacts on the Third-Party Social Media Service may see your name,
						profile, pictures and description of your activity. Similarly, other
						users will be able to view descriptions of your activity,
						communicate with you and view your profile.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>With your consent:</legalStyles.BoldText> We
						may disclose your Personal Information for any other purpose with
						your consent or at your direction.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>
							Other users and third parties you share Personal Information with:
						</legalStyles.BoldText>{" "}
						We may disclose your Personal Information with the applicable
						customer to provide Services on their behalf. Our customers are
						independent entities and their processing of information is subject
						to their own policies and terms. Certain features allow you to
						display or share information with other users or third parties. Be
						sure you trust any user or third party with whom you share
						information.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>For security reasons:</legalStyles.BoldText>{" "}
						We may disclose your Personal Information if we have a good-faith
						belief that access, use, preservation, or disclosure of such
						information is reasonably necessary to detect or protect against
						fraud or security issues; to protect against legal liability; to
						protect the personal safety of other users of the Services or the
						public; to protect and defend our rights or property; and to prevent
						or investigate possible wrongdoing in connection with the Services.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						<legalStyles.BoldText>
							In order to fulfill legal obligations:
						</legalStyles.BoldText>{" "}
						We may disclose your Personal Information if required or permitted
						by applicable law or regulation, including laws and regulations of
						the United States and other countries, or in the good faith belief
						that such action is necessary to: (a) comply with a legal obligation
						or in response to a request from law enforcement or other public
						authorities wherever we may do business; (b) protect and defend our
						rights or property; (c) act in urgent circumstances to protect the
						personal safety of users, customers, and our contractors/employees
						or others; or (d) enforce our Terms of Service or otherwise protect
						against any legal liability.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						No Selling of Data
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						We do not sell your Personal Information to third parties. Any data
						sharing that occurs is solely for the purposes described in this
						Policy, such as to provide and improve our Services and is not
						conducted with the objective of profiting from the sale of your
						Personal Information.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Retention of Your Personal Information
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						We retain your Personal Information while your account is in
						existence or as needed to provide the Services to you. This includes
						data you or others provided to us and data generated or inferred
						from your use of the Services. Please note that we may retain
						information that is otherwise deleted in anonymized and aggregated
						form, in archived or backup copies as required pursuant to records
						retention obligations, or otherwise as required by law. We may
						retain an archived copy of your records as required by law or for
						legitimate business purposes.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						How Do We Use Tracking Technologies
					</legalStyles.SectionHeader>
					<legalStyles.SectionSubheader>
						Use of Cookies
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						We use cookies and similar tracking technologies to track the
						activity on our Services and store certain information. Cookies are
						small files that are placed on your computer, mobile device or any
						other device by a website, containing the details of your browsing
						history on that website among its many uses. Cookies are files with
						a small amount of data which may include an anonymous unique
						identifier. Cookies are sent to your browser from a website and
						stored on your device. Tracking technologies also used are beacons,
						tags, and scripts to collect and track information and to improve
						and analyze our Services.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>Session Cookies:</legalStyles.BoldText> We use
						session cookies to operate our Services.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>Preference Cookies:</legalStyles.BoldText> We
						use preference cookies to remember your preferences and various
						settings.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>Security Cookies:</legalStyles.BoldText> We
						use security cookies for security purposes.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>Advertising Cookies:</legalStyles.BoldText>{" "}
						These cookies are used to serve you with advertisements that may be
						relevant to you and your interests.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>Managing Cookies:</legalStyles.BoldText> You
						can instruct your browser to refuse all cookies or to indicate when
						a cookie is being sent. However, if you do not accept cookies, you
						may not be able to use some portions of our Services.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						<legalStyles.BoldText>Third-Party Cookies:</legalStyles.BoldText>{" "}
						Some cookies might come from third-party services or advertisers and
						are used for analytics, advertising, and user interaction. We
						recommend you review the privacy policies of these third parties to
						understand how they use cookies.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Analytics and Interest-Based Advertising
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						We may use analytics services to help us understand how users access
						and use the Services and other aspects of our products and services.
						In addition, we work with agencies, advertisers, ad networks, and
						other technology services to place advertisements on our behalf on
						other websites and services. Our third-party analytics services
						providers and advertising providers may use cookies and other
						tracking technologies to collect and store data Technical
						Information to be used for the purposes outlined in this Privacy
						Policy.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						Our third-party advertising service providers may use web beacons to
						recognize you when you visit the Services and to help determine how
						you found the Services. They may also use cookies, action tags, web
						beacons, and/or GIF tags placed in various places on the Services
						and our online ads to collect information about your visit and your
						interaction with our ads. To limit collection of information from
						mobile devices, including location data, please visit your device’s
						settings to set the “Limit Ad Track”, “Location Based Services,” or
						other similar feature on your device. You can also make choices
						about data collection for certain companies by visiting an industry
						consumer choice platform such as the NAI (
						<legalStyles.Link href={links.NAI}>
							https://optout.networkadvertising.org/
						</legalStyles.Link>
						) or DAA (
						<legalStyles.Link href={links.DAA}>
							https://optout.aboutads.info/
						</legalStyles.Link>
						). If you opt-out of interest-based ads, you will still see ads on
						websites you visit, but those ads will not be based on your browsing
						behavior.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Transfer of Your Personal Data
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						Your information, including Personal Information, is processed at
						our operating offices and in any other places where the parties
						involved in the processing are located. It means that this
						information may be transferred to, and maintained on, computers
						located outside of your state, province, country or other
						governmental jurisdiction where the data protection laws may differ
						than those from your jurisdiction. Your consent to this Policy
						followed by your submission of such information represents your
						agreement to that transfer.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						We will take all steps reasonably necessary to ensure that your data
						is treated securely and in accordance with this Policy and no
						transfer of your Personal Information will take place to an
						organization or a country unless there are adequate controls in
						place including the security of your data and other Personal
						Information.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Managing Your Privacy
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						All users may request to review, update, correct or delete the
						Personal Information furnished by a user in their user account by
						contacting us at{" "}
						<legalStyles.Link href={links.contact}>
							support@thought.ly
						</legalStyles.Link>
						. For your protection, we may only share and update the Personal
						Information associated with the specific email address that you use
						to send us your request, and we may need to verify your identity
						before doing so. We will try to comply with such requests in a
						reasonably timely manner. Please note that we may retain information
						that is otherwise deleted in anonymized and aggregated form, in
						archived or backup copies as required pursuant to records retention
						obligations, or otherwise as required by law. We may retain an
						archived copy of your records as required by law or for legitimate
						business purposes.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						We may use some of the information we collect for marketing
						purposes, including to send you promotional communications about our
						new features, products, events, or other opportunities. If you wish
						to stop receiving these communications or to opt out of use of your
						information for these purposes, please follow the opt-out
						instructions, such as clicking "Unsubscribe" (or similar opt-out
						language) in those communications. For text message communications,
						you can text back “STOP” and we will send you a text message to
						confirm that you have been unsubscribed. You can also contact us at{" "}
						<legalStyles.Link href={links.contact}>
							support@thought.ly
						</legalStyles.Link>
						, to opt out. Despite your indicated email preferences, we may send
						you service related communications, including notices of any updates
						to our terms of service or privacy policy.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Security of Your Personal Information
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						We take reasonable steps to protect your Personal Information
						against unauthorized access, alteration, disclosure, misuse, or
						destruction. Unfortunately, no data transmission or storage system
						can be guaranteed to be 100% secure. The safety and security of your
						Personal Information also depends on you. If you have an account
						with us, you are responsible for keeping your membership details
						confidential. Your account is protected by your account password and
						we urge you to take steps to keep your Personal Information safe by
						not disclosing your password and by logging out of your account
						after each use. We further protect your Personal Information from
						potential security breaches by implementing certain technological
						security measures including encryption, firewalls and secure socket
						layer technology. However, these measures do not guarantee that your
						Personal Information will not be accessed, disclosed, altered or
						destroyed by breach of such firewalls and secure server software. By
						using the Services, you acknowledge that you understand and agree to
						assume these risks.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Children Under 16
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						The Services are not directed to individuals who are under age of
						sixteen (16) and we do not solicit nor knowingly collect Personal
						Information from children under the age of sixteen (16). If you
						believe that we have unknowingly collected any Personal Information
						from someone under the age of sixteen (16), please contact us
						immediately at{" "}
						<legalStyles.Link href={links.contact}>
							support@thought.ly
						</legalStyles.Link>{" "}
						and the information will be deleted.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Links to Third Party Websites
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						We may provide links to other websites. We have no control over
						these websites and they are subject to their own terms of use and
						privacy policies. As such, we do not endorse and are not responsible
						for the availability of, or for any content, advertising, products,
						or other materials on or available from, these third-party websites.
						By using the Services, you agree that we will not be liable for any
						damage or loss caused by your use of or reliance on any content,
						advertising, products, or other materials on or available from these
						third-party websites.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						How We Respond to Do Not Track Signals
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						Your browser settings may allow you to automatically transmit a Do
						Not Track signal to websites and other online services you visit. We
						do not alter our practices when we receive a Do Not Track signal
						from a visitor’s browser because we do not track our visitors to
						provide targeted advertising. To find out more about Do Not Track,
						please visit{" "}
						<legalStyles.Link href={links.homePage}>
							https://thought.ly/
						</legalStyles.Link>
						.
					</legalStyles.Paragraph>
				</legalStyles.Section>

				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Additional U.S. state disclosures
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						You can read more about the Personal Information we collect in
						“Personal information we collect” above, how we use Personal
						Information in “How we use personal information” above, and how we
						retain Personal Information in “Security and Retention” below.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						To the extent provided for by local law and subject to applicable
						exceptions, individuals may have the following privacy rights in
						relation to their Personal Information:
					</legalStyles.Paragraph>
					<legalStyles.UList $noPadding={false}>
						<legalStyles.ListItem>
							The right to know information about our processing of your
							Personal Information, including the specific pieces of Personal
							Information that we have collected from you;
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							The right to request deletion of your Personal Information;
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							The right to correct your Personal Information; and
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							The right to be free from discrimination relating to the exercise
							of any of your privacy rights.
						</legalStyles.ListItem>
					</legalStyles.UList>
					<legalStyles.Paragraph $noPadding={false}>
						We don’t “sell” Personal Information or “share” Personal Information
						for cross-contextual behavioral advertising (as those terms are
						defined under applicable local law). We also don’t process sensitive
						Personal Information for the purposes of inferring characteristics
						about a consumer.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>Exercising your rights:</legalStyles.BoldText>{" "}
						To the extent applicable under local law, you can exercise privacy
						rights described in this section by submitting a request through
						<legalStyles.Link href={links.contact}>
							support@thought.ly
						</legalStyles.Link>
						.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>Verification:</legalStyles.BoldText> In order
						to protect your Personal Information from unauthorized access,
						change, or deletion, we may require you to verify your credentials
						before you can submit a request to know, correct, or delete Personal
						Information. If you do not have an account with us, or if we suspect
						fraudulent or malicious activity, we may ask you to provide
						additional Personal Information and proof of residency for
						verification. If we cannot verify your identity, we will not be able
						to honor your request.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>Authorized agents:</legalStyles.BoldText> You
						may also submit a rights request through an authorized agent. If you
						do so, the agent must present signed written permission to act on
						your behalf and you may also be required to independently verify
						your identity and submit proof of your residency with us. Authorized
						agent requests can be submitted to{" "}
						<legalStyles.Link href={links.contact}>
							support@thought.ly
						</legalStyles.Link>
						.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						<legalStyles.BoldText>Appeals:</legalStyles.BoldText> Depending on
						where you live, you may have the right to appeal a decision we make
						relating to requests to exercise your rights under applicable local
						law. To appeal a decision, please send your request to
						<legalStyles.Link href={links.contact}>
							support@thought.ly
						</legalStyles.Link>
						.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						California Civil Code Section 1798.83 requires certain businesses
						that share customer Personal Information with third parties for the
						third parties’ direct marketing purposes to respond to requests from
						California customers asking about the businesses’ practices related
						to such information- sharing. We currently do not share Personal
						Information with third parties for their direct marketing purposes,
						as contemplated by California Civil Code Section 1798.83, without
						your consent.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						A Note to Nevada Residents
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						If you are a resident of Nevada, you have the right to opt-out of
						the sale of certain Personal Information to third parties who intend
						to license or sell that Personal Information. Please note that we do
						not currently sell your Personal Information as sales are defined in
						Nevada Revised Statutes Chapter 603A.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						A Note to Users Outside the United States
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding>
						We are based in the United States. The Services are controlled and
						operated by us from the United States and are not intended to
						subject us to the laws or jurisdiction of any state, country or
						territory other than that of the laws of the country(ies) where the
						Services are controlled. Your Personal Information may be stored and
						processed in any country where we have facilities or in which we
						engage service providers, and by using the Services you consent to
						the transfer of information to countries outside of your country of
						residence, including the United States, which may have data
						protection rules that are different from those of your country. In
						certain circumstances, courts, law enforcement agencies, regulatory
						agencies or security authorities in those other countries may be
						entitled to access your Personal Information.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Legal basis for processing
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						Our legal basis for processing your Personal Information include:
					</legalStyles.Paragraph>
					<legalStyles.UList $noPadding={false}>
						<legalStyles.ListItem>
							Performance of a contract with you when we provide and maintain
							our Services. When we process Account Information, Content, and
							Technical Information solely to provide our Services to you, this
							information is necessary to be able to provide our Services. If
							you do not provide this information, we may not be able to provide
							our Services to you.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Our legitimate interests in protecting our Services from abuse,
							fraud, or security risks, or in developing, improving, or
							promoting our Services, including when we train our models. This
							may include the processing of Account Information, Content, Social
							Information, and Technical Information.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Your consent when we ask for your consent to process your Personal
							Information for a specific purpose that we communicate to you. You
							have the right to withdraw your consent at any time.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Compliance with our legal obligations when we use your Personal
							Information to comply with applicable law or when we protect our
							or our affiliates’, users’, or third parties’ rights, safety, and
							property.
						</legalStyles.ListItem>
					</legalStyles.UList>
					<legalStyles.Paragraph $noPadding={false}>
						The laws of certain jurisdictions may provide data subjects with
						various rights in connection with the processing of Personal
						Information, including:
					</legalStyles.Paragraph>
					<legalStyles.UList $noPadding={false}>
						<legalStyles.ListItem>
							The right to withdraw any previously provided consent;
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							The right to access certain information about you that we process;
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							The right to have us correct or update any personal information;
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							The right to have certain personal information erased;
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							The right to have us temporarily block our processing of certain
							personal information;
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							The right to have personal information exported into common
							machine-readable format;
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							The right to object to our processing of personal information in
							cases of direct marketing, or when we rely on legitimate interests
							as our lawful basis to process your information; and
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							The right to lodge a complaint with the appropriate data
							protection authority.
						</legalStyles.ListItem>
					</legalStyles.UList>
					<legalStyles.Paragraph $noPadding>
						Where we are deemed a data controller under the laws of certain
						jurisdictions, we will take steps to help ensure that you are able
						to exercise your rights regarding Personal Information about you in
						accordance with applicable law. To do so, you may contact us at{" "}
						<legalStyles.Link href={links.contact}>
							support@thought.ly
						</legalStyles.Link>
						. Please note these rights may be limited in certain circumstances
						as provided by applicable law. We will promptly review all such
						requests in accordance with applicable laws. Depending on where you
						live, you may also have a right to lodge a complaint with a
						supervisory authority or other regulatory agency if you believe that
						we have violated any of the rights concerning Personal Information
						about you. We encourage you to first reach out to us at{" "}
						<legalStyles.Link href={links.contact}>
							support@thought.ly
						</legalStyles.Link>
						, so we have an opportunity to address your concerns directly before
						you do so.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>Contact Us</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						If you have any questions about this Policy, you can contact us at{" "}
						<legalStyles.Link href={links.contact}>
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
			title="Thoughtly | Privacy Policy"
			description="Thoughtly helps teams build and deploy AI voice agents in minutes, not months."
			pathname="/privacy"
		/>
	)
}
