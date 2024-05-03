import legalStyles from "components/Legal/LegalStyles"
import gsap from "gsap"
import getMedia from "library/getMedia"
import useAnimation from "library/useAnimation"
import { getResponsivePixels } from "library/viewportUtils"
import { useRef } from "react"

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
					<legalStyles.Subtitle>
						Last Updated September 24, 2023
					</legalStyles.Subtitle>
				</legalStyles.Top>
				<legalStyles.Section>
					<legalStyles.Paragraph $noPadding>
						This Privacy Policy describes Our policies and procedures on the
						collection, use and disclosure of Your information when You use the
						Service and tells You about Your privacy rights and how the law
						protects You.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						We use Your Personal data to provide and improve the Service. By
						using the Service, You agree to the collection and use of
						information in accordance with this Privacy Policy. This Privacy
						Policy has been created with the help of the Free Privacy Policy
						Generator.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Interpretation and Definitions
					</legalStyles.SectionHeader>
					<legalStyles.SectionSubheader>
						Interpretation
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						The words of which the initial letter is capitalized have meanings
						defined under the following conditions. The following definitions
						shall have the same meaning regardless of whether they appear in
						singular or in plural.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Definitions
					</legalStyles.SectionSubheader>
					<legalStyles.OList $noPadding>
						<legalStyles.ListItem>
							For the purposes of this Privacy Policy:
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Account means a unique account created for You to access our
							Service or parts of our Service.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Affiliate means an entity that controls, is controlled by or is
							under common control with a party, where "control" means ownership
							of 50% or more of the shares, equity interest or other securities
							entitled to vote for election of directors or other managing
							authority.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Company (referred to as either "the Company", "We", "Us" or "Our"
							in this Agreement) refers to Thoughtly, Inc.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Cookies are small files that are placed on Your computer, mobile
							device or any other device by a website, containing the details of
							Your browsing history on that website among its many uses.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Country refers to: Delaware, United States
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Device means any device that can access the Service such as a
							computer, a cellphone or a digital tablet.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Personal Data is any information that relates to an identified or
							identifiable individual.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Service refers to the Website.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Service Provider means any natural or legal person who processes
							the data on behalf of the Company. It refers to third-party
							companies or individuals employed by the Company to facilitate the
							Service, to provide the Service on behalf of the Company, to
							perform services related to the Service or to assist the Company
							in analyzing how the Service is used.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Third-party Social Media Service refers to any website or any
							social network website through which a User can log in or create
							an account to use the Service.
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Usage Data refers to data collected automatically, either
							generated by the use of the Service or from the Service
							infrastructure itself (for example, the duration of a page visit).
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Website refers to thought.ly, accessible from https://thought.ly/
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							You means the individual accessing or using the Service, or the
							company, or other legal entity on behalf of which such individual
							is accessing or using the Service, as applicable.
						</legalStyles.ListItem>
					</legalStyles.OList>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Information from Third-Party Social Media Services
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						The Company allows You to create an account and log in to use the
						Service through the following Third-party Social Media Services:
					</legalStyles.Paragraph>
					<legalStyles.UList $noPadding={false}>
						<legalStyles.ListItem>Google</legalStyles.ListItem>
						<legalStyles.ListItem>Facebook</legalStyles.ListItem>
						<legalStyles.ListItem>Instagram</legalStyles.ListItem>
						<legalStyles.ListItem>Twitter</legalStyles.ListItem>
						<legalStyles.ListItem>LinkedIn</legalStyles.ListItem>
					</legalStyles.UList>
					<legalStyles.Paragraph $noPadding>
						If You decide to register through or otherwise grant us access to a
						Third-Party Social Media Service, We may collect Personal data that
						is already associated with Your Third-Party Social Media Service's
						account, such as Your name, Your email address, Your activities or
						Your contact list associated with that account.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						You may also have the option of sharing additional information with
						the Company through Your Third-Party Social Media Service's account.
						If You choose to provide such information and Personal Data, during
						registration or otherwise, You are giving the Company permission to
						use, share, and store it in a manner consistent with this Privacy
						Policy.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Tracking Technologies and Cookies
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						We use Cookies and similar tracking technologies to track the
						activity on Our Service and store certain information. Tracking
						technologies used are beacons, tags, and scripts to collect and
						track information and to improve and analyze Our Service. The
						technologies We use may include:
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Cookies or Browser Cookies.
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						A cookie is a small file placed on Your Device. You can instruct
						Your browser to refuse all Cookies or to indicate when a Cookie is
						being sent. However, if You do not accept Cookies, You may not be
						able to use some parts of our Service. Unless you have adjusted Your
						browser setting so that it will refuse Cookies, our Service may use
						Cookies. Web Beacons. Certain sections of our Service and our emails
						may contain small electronic files known as web beacons (also
						referred to as clear gifs, pixel tags, and single-pixel gifs) that
						permit the Company, for example, to count users who have visited
						those pages or opened an email and for other related website
						statistics (for example, recording the popularity of a certain
						section and verifying system and server integrity).
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies
						remain on Your personal computer or mobile device when You go
						offline, while Session Cookies are deleted as soon as You close Your
						web browser. Learn more about cookies on the Free Privacy Policy
						website article.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						We use both Session and Persistent Cookies for the purposes set out
						below:
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Necessary / Essential Cookies
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						Type: Session Cookies
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						Administered by: Us
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						Purpose: These Cookies are essential to provide You with services
						available through the Website and to enable You to use some of its
						features. They help to authenticate users and prevent fraudulent use
						of user accounts. Without these Cookies, the services that You have
						asked for cannot be provided, and We only use these Cookies to
						provide You with those services.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Cookies Policy / Notice Acceptance Cookies
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						Type: Persistent Cookies
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						Administered by: Us
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						Purpose: These Cookies identify if users have accepted the use of
						cookies on the Website.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Functionality Cookies
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						Type: Persistent Cookies
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						Administered by: Us
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						Purpose: These Cookies allow us to remember choices You make when
						You use the Website, such as remembering your login details or
						language preference. The purpose of these Cookies is to provide You
						with a more personal experience and to avoid You having to re-enter
						your preferences every time You use the Website.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						For more information about the cookies we use and your choices
						regarding cookies, please visit our Cookies Policy or the Cookies
						section of our Privacy Policy.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Use of Your Personal Data
					</legalStyles.SectionHeader>
					<legalStyles.SectionSubheader>
						The Company may use Personal Data for the following purposes:
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						To manage Your Account: to manage Your registration as a user of the
						Service. The Personal Data You provide can give You access to
						different functionalities of the Service that are available to You
						as a registered user.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						For the performance of a contract: the development, compliance and
						undertaking of the purchase contract for the products, items or
						services You have purchased or of any other contract with Us through
						the Service.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						To contact You: To contact You by email, telephone calls, SMS, or
						other equivalent forms of electronic communication, such as a mobile
						application's push notifications regarding updates or informative
						communications related to the functionalities, products or
						contracted services, including the security updates, when necessary
						or reasonable for their implementation. To provide You with news,
						special offers and general information about other goods, services
						and events which we offer that are similar to those that you have
						already purchased or enquired about unless You have opted not to
						receive such information. To manage Your requests: To attend and
						manage Your requests to Us.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						For business transfers: We may use Your information to evaluate or
						conduct a merger, divestiture, restructuring, reorganization,
						dissolution, or other sale or transfer of some or all of Our assets,
						whether as a going concern or as part of bankruptcy, liquidation, or
						similar proceeding, in which Personal Data held by Us about our
						Service users is among the assets transferred. For other purposes:
						We may use Your information for other purposes, such as data
						analysis, identifying usage trends, determining the effectiveness of
						our promotional campaigns and to evaluate and improve our Service,
						products, services, marketing and your experience.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						We may share Your personal information in the following situations:
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						With Service Providers: We may share Your personal information with
						Service Providers to monitor and analyze the use of our Service, to
						contact you.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						For business transfers: We may share or transfer Your personal
						information in connection with, or during negotiations of, any
						merger, sale of Company assets, financing, or acquisition of all or
						a portion of Our business to another company.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						With Affiliates: We may share Your information with Our affiliates,
						in which case we will require those affiliates to honor this Privacy
						Policy. Affiliates include Our parent company and any other
						subsidiaries, joint venture partners or other companies that We
						control or that are under common control with Us.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						With business partners: We may share Your information with Our
						business partners to offer You certain products, services or
						promotions.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						With business partners: We may share Your information with Our
						business partners to offer You certain products, services or
						promotions. With other users: when You share personal information or
						otherwise interact in the public areas with other users, such
						information may be viewed by all users and may be publicly
						distributed outside. If You interact with other users or register
						through a Third-Party Social Media Service, Your contacts on the
						Third-Party Social Media Service may see Your name, profile,
						pictures and description of Your activity. Similarly, other users
						will be able to view descriptions of Your activity, communicate with
						You and view Your profile.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						With Your consent: We may disclose Your personal information for any
						other purpose with Your consent.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Selling of Data
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						We value your privacy and trust. The Company does not sell your
						Personal Data to third parties. Any data sharing that occurs is
						solely for the purposes described in this Privacy Policy, such as to
						provide and improve our services, and is not conducted with the
						objective of profiting from the sale of your personal information.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Retention of Your Personal Data
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						The Company will retain Your Personal Data only for as long as is
						necessary for the purposes set out in this Privacy Policy. We will
						retain and use Your Personal Data to the extent necessary to comply
						with our legal obligations (for example, if we are required to
						retain your data to comply with applicable laws), resolve disputes,
						and enforce our legal agreements and policies.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						The Company will also retain Usage Data for internal analysis
						purposes. Usage Data is generally retained for a shorter period of
						time, except when this data is used to strengthen the security or to
						improve the functionality of Our Service, or We are legally
						obligated to retain this data for longer time periods.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>Cookie Policy</legalStyles.SectionHeader>
					<legalStyles.SectionSubheader>
						Use of Cookies:
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						The Company uses cookies and similar tracking technologies to track
						the activity on Our Service and store certain information. Cookies
						are files with a small amount of data which may include an anonymous
						unique identifier. Cookies are sent to your browser from a website
						and stored on your device. Tracking technologies also used are
						beacons, tags, and scripts to collect and track information and to
						improve and analyze Our Service.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Types of Cookies We Use:
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						Session Cookies: We use Session Cookies to operate our Service.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						Preference Cookies: We use Preference Cookies to remember your
						preferences and various settings.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						Security Cookies: We use Security Cookies for security purposes.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						Advertising Cookies: These cookies are used to serve you with
						advertisements that may be relevant to you and your interests.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Managing Cookies:
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						You can instruct your browser to refuse all cookies or to indicate
						when a cookie is being sent. However, if you do not accept cookies,
						you may not be able to use some portions of our Service.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Third-Party Cookies:
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding>
						Some cookies might come from third-party services or advertisers and
						are used for analytics, advertising, and user interaction. We
						recommend you review the privacy policies of these third parties to
						understand how they use cookies.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Transfer of Your Personal Data
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						Your information, including Personal Data, is processed at the
						Company's operating offices and in any other places where the
						parties involved in the processing are located. It means that this
						information may be transferred to — and maintained on — computers
						located outside of Your state, province, country or other
						governmental jurisdiction where the data protection laws may differ
						than those from Your jurisdiction.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						Your consent to this Privacy Policy followed by Your submission of
						such information represents Your agreement to that transfer.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						The Company will take all steps reasonably necessary to ensure that
						Your data is treated securely and in accordance with this Privacy
						Policy and no transfer of Your Personal Data will take place to an
						organization or a country unless there are adequate controls in
						place including the security of Your data and other personal
						information.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Delete Your Personal Data
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						You have the right to delete or request that We assist in deleting
						the Personal Data that We have collected about You.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						Our Service may give You the ability to delete certain information
						about You from within the Service.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding={false}>
						You may update, amend, or delete Your information at any time by
						signing in to Your Account, if you have one, and visiting the
						account settings section that allows you to manage Your personal
						information. You may also contact Us to request access to, correct,
						or delete any personal information that You have provided to Us.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						Please note, however, that We may need to retain certain information
						when we have a legal obligation or lawful basis to do so. When you
						visit or log in to our website, cookies and similar technologies may
						be used by our online data partners or vendors to associate these
						activities with other personal information they or others have about
						you, including by association with your email or home address. We
						(or service providers on our behalf) may then send communications
						and marketing to these email or home addresses. You may opt out of
						receiving this advertising by visiting
						https://app.retention.com/optout
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Disclosure of Your Personal Data
					</legalStyles.SectionHeader>
					<legalStyles.SectionSubheader>
						Business Transactions
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						If the Company is involved in a merger, acquisition or asset sale,
						Your Personal Data may be transferred. We will provide notice before
						Your Personal Data is transferred and becomes subject to a different
						Privacy Policy.
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Law enforcement
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						Under certain circumstances, the Company may be required to disclose
						Your Personal Data if required to do so by law or in response to
						valid requests by public authorities (e.g. a court or a government
						agency).
					</legalStyles.Paragraph>
					<legalStyles.SectionSubheader>
						Other legal requirements
					</legalStyles.SectionSubheader>
					<legalStyles.Paragraph $noPadding={false}>
						The Company may disclose Your Personal Data in the good faith belief
						that such action is necessary to:
					</legalStyles.Paragraph>
					<legalStyles.OList $noPadding>
						<legalStyles.ListItem>
							Comply with a legal obligation
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Protect and defend the rights or property of the Company
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Prevent or investigate possible wrongdoing in connection with the
							Service
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Protect the personal safety of Users of the Service or the public
						</legalStyles.ListItem>
						<legalStyles.ListItem>
							Protect against legal liability
						</legalStyles.ListItem>
					</legalStyles.OList>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Security of Your Personal Data
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding>
						The security of Your Personal Data is important to Us, but remember
						that no method of transmission over the Internet, or method of
						electronic storage is 100% secure. While We strive to use
						commercially acceptable means to protect Your Personal Data, We
						cannot guarantee its absolute security.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Children's Privacy
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						Our Service does not address anyone under the age of 13. We do not
						knowingly collect personally identifiable information from anyone
						under the age of 13. If You are a parent or guardian and You are
						aware that Your child has provided Us with Personal Data, please
						contact Us. If We become aware that We have collected Personal Data
						from anyone under the age of 13 without verification of parental
						consent, We take steps to remove that information from Our servers.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						If We need to rely on consent as a legal basis for processing Your
						information and Your country requires consent from a parent, We may
						require Your parent's consent before We collect and use that
						information.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Links to Other Websites
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						Our Service may contain links to other websites that are not
						operated by Us. If You click on a third party link, You will be
						directed to that third party's site. We strongly advise You to
						review the Privacy Policy of every site You visit.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						We have no control over and assume no responsibility for the
						content, privacy policies or practices of any third party sites or
						services.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>
						Changes to this Privacy Policy
					</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						We will let You know via email and/or a prominent notice on Our
						Service, prior to the change becoming effective and update the "Last
						updated" date at the top of this Privacy Policy.
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						You are advised to review this Privacy Policy periodically for any
						changes. Changes to this Privacy Policy are effective when they are
						posted on this page.
					</legalStyles.Paragraph>
				</legalStyles.Section>
				<legalStyles.Section>
					<legalStyles.SectionHeader>Contact Us</legalStyles.SectionHeader>
					<legalStyles.Paragraph $noPadding={false}>
						If you have any questions about this Privacy Policy, You can contact
						us:
					</legalStyles.Paragraph>
					<legalStyles.Paragraph $noPadding>
						By email: support@thought.ly
					</legalStyles.Paragraph>
				</legalStyles.Section>
			</legalStyles.Inner>
		</legalStyles.Wrapper>
	)
}
