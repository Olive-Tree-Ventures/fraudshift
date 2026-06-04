import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  })
};

const Privacy = () => (
  <>
    <SEO
      title="Privacy Policy | Fraud Shift"
      description="Fraud Shift privacy policy -how we collect, use, and protect your personal information."
      path="/privacy"
    />

    {/* Hero */}
    <section className="pt-32 pb-16 md:pt-44 md:pb-24 dark-section-deep">
      <div className="container-narrow">
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
          Legal
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-4xl md:text-5xl font-extrabold max-w-3xl mb-6">
          Privacy Policy
        </motion.h1>
        <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-primary-foreground/60 text-sm">
          Effective date: May 15th, 2026
        </motion.p>
      </div>
    </section>

    {/* Content */}
    <section className="bg-background">
      <div className="container-narrow section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl space-y-10 text-muted-foreground leading-relaxed"
        >
          {/* Intro */}
          <div className="space-y-4">
            <p>
              <span className="font-semibold text-foreground">Fraud Shift</span>, a business unit of Olive Tree Ventures, values individual privacy and we want to give visitors to our website (www.fraudshift.com) the opportunity to know what information we collect about them and how it is treated by us.
            </p>
            <p>This Privacy Policy (this "Policy"), effective as of May 15th, 2026, explains:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm pl-2">
              <li>Which information about you we collect.</li>
              <li>Purposes of using your personal information and legal basis.</li>
              <li>Retention of your personal information.</li>
              <li>Disclosures of personal information.</li>
              <li>Personal information storage location and which are your access rights.</li>
              <li>Transfer of your Personal Data to other countries.</li>
              <li>Links to Third-Party Websites.</li>
              <li>Updates to this Privacy Policy.</li>
              <li>Additional Disclosures for California Residents.</li>
              <li>Additional Disclosures for European Economic Area and the United Kingdom Residents.</li>
              <li>Contact us.</li>
            </ol>
          </div>

          <hr className="border-border" />

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">1. Information about you we collect.</h2>
            <div className="space-y-3">
              <p><span className="font-semibold text-foreground">A. Information collected automatically when you visit our site:</span></p>
              <p>
                When navigating our website and accessing or using our Services, Fraud Shift will collect and store Cookies. "Cookies" are text files placed in your computer's browser to store certain preferences and information, which may enhance your browsing experience on Fraud Shift's website. Cookies may be used to personalize your website experience. Fraud Shift does not use Cookies to track or collect personal identification information from website users. If you desire, instructions for your browser will allow you to make certain settings on your computer to warn you before a Cookie is stored, block all Cookies, or erase Cookies from your hard drive. If you would like more information, please visit our cookie policy page.
              </p>
              <p><span className="font-semibold text-foreground">B. Information collected when you volunteer to identify yourself and provide requested information:</span></p>
              <p>
                You may choose to write to us, or fill out certain forms or online data requests, which provide your name, telephone number, e-mail address, job, request, and related information.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">2. Purposes of using your personal information and legal basis.</h2>
            <p>Fraud Shift uses the information collected from you to:</p>
            <ul className="space-y-1 pl-2">
              {[
                "Respond to your inquiries.",
                "Consider your request or application.",
                "Send you appropriate information regarding news, events, job openings, and related information you subscribed to.",
                "For direct marketing purposes, including to send you newsletters, alerts, and information we think may interest you. Fraud Shift may also use such data for market and consumer studies regarding product types, demographics, and consumer preferences.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2"><span className="text-accent shrink-0">•</span>{item}</li>
              ))}
            </ul>
            <p>We are entitled to use your personal information based on:</p>
            <ul className="space-y-1 pl-2">
              {[
                "Our legitimate interest such as for research and development, to market and promote our services, to protect our legal rights and interests, to the extent that your interests or your fundamental rights are not overridden.",
                "Your consent to do so for a specific purpose.",
                "To process your data to comply with a legal obligation.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2"><span className="text-accent shrink-0">•</span>{item}</li>
              ))}
            </ul>
          </div>

          <hr className="border-border" />

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">3. Retention of your personal information.</h2>
            <p>
              Fraud Shift will retain your personal information for as long as necessary to fulfill the purposes for which it was collected or as necessary to comply with our legal obligations, resolve disputes, and maintain appropriate business records. Once the purpose has been fulfilled, your personal information will be retained and blocked due to the possibility of legal and governmental requirements and until their statute of limitations have run out.
            </p>
          </div>

          <hr className="border-border" />

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">4. Disclosures of personal information.</h2>
            <p>
              Fraud Shift may share your personal information with Olive Tree Ventures and its business units. In addition, Fraud Shift reserves the right to disclose information where required by law or to comply with valid legal process (such as a search warrant, subpoena, or court order) as well as to protect Fraud Shift's rights or property, including without limitation in the event of a transfer of control of Fraud Shift or substantially all of its assets, or during emergencies when safety is at risk.
            </p>
          </div>

          <hr className="border-border" />

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">5. Where is your personal information stored and which are your access rights.</h2>
            <p><span className="font-semibold text-foreground">A. Storage of the Information:</span> All of the information collected by Fraud Shift through the Website is stored on secured servers, to protect against unauthorized use and access.</p>
            <p>
              <span className="font-semibold text-foreground">B. Your access rights:</span> You can exercise your rights of access, rectification, erasure, restriction, opposition, personal information portability, and/or withdrawal of consent regarding your personal information which is stored in our server by email to the following address:{" "}
              <a href="mailto:privacy@fraudshift.com" className="text-accent hover:underline">privacy@fraudshift.com</a>
            </p>
          </div>

          <hr className="border-border" />

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">6. Transfer of your Personal Data to other countries.</h2>
            <p>
              In some cases, our third-party service providers are located outside the European Economic Area and/or the United States, meaning your Personal Information may be processed or stored in other countries. In certain circumstances, our service providers may be required to disclose information to government authorities, regulators, courts, or law enforcement in those countries. When your Personal Data is transferred internationally to third parties located in territories that may not offer an equivalent level of protection to privacy as that applicable within your country of residence, we ensure that the transfer of your Personal Data is carried out in accordance with applicable privacy laws and that appropriate technical and organizational security measures are taken. We will take all the necessary steps to verify that your Personal Data receives an adequate or substantially equal level of protection, including by entering into Data Transfer Agreements ("DTAs") pursuant to applicable law.
            </p>
          </div>

          <hr className="border-border" />

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">7. Links to Third-Party Websites.</h2>
            <p>
              We may display advertisements from third parties and other content on our website that may link you to third parties' websites. We cannot control nor hold responsible for such content and the third party's privacy policies. If you click and access a third-party advertisement or link, please understand that you are leaving Fraud Shift's website, and any Personal Data you provided will not be covered by this Privacy Policy. Please refer to the third party's Privacy Policy to find out how they collect and process your Personal Data.
            </p>
          </div>

          <hr className="border-border" />

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">8. Updates to this Privacy Policy.</h2>
            <p>
              We may from time to time make changes to this Privacy Policy. We encourage you to review it regularly to learn how we are protecting your privacy. We will post any changes to this policy on this page. Each version of this policy is identified at the bottom of the page by its effective date.
            </p>
          </div>

          <hr className="border-border" />

          {/* Section 9 */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">9. Additional Disclosures for California Residents.</h2>
            <p>
              If you are a California resident, the California Consumer Privacy Rights Act 2018 (CCPA) requires us to provide you with certain information regarding the personal information collected by Fraud Shift that relates to or is reasonably capable of being associated with you as an individual. The below disclosures supplement the information provided in our general Privacy Policy and describe our information collection practices going back 12 months prior to the date of any Consumer Request submitted in accordance with this supplemental privacy policy.
            </p>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">A. Disclosures Required by CCPA</h3>
              <div className="space-y-3">
                <p className="font-medium text-foreground text-sm">a. Categories of Personal Information we Collect</p>
                <p>We may collect Personal Information about you, including, but not limited to:</p>
                <ul className="space-y-2 pl-2">
                  {[
                    { label: "Identifying Information", desc: "such as your name, address, e-mail address, phone numbers." },
                    { label: "Internet Activity", desc: "internet or other electronic network activity information, including but not limited to browsing history, search history, interaction with an internet website, application, or advertisement." },
                    { label: "Employment Related Information", desc: "such as your CV as well as current and past employment information." },
                    { label: "Educational Information", desc: "such as grades, schools, and years attended." },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2"><span className="text-accent shrink-0">•</span><span><span className="font-semibold text-foreground">{item.label}</span> -{item.desc}</span></li>
                  ))}
                </ul>
                <p className="font-medium text-foreground text-sm">b. Sale of Personal Information</p>
                <p>We do not sell any of your Personal Information.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">B. Consumer Rights for California Residents</h3>
              <div className="space-y-4">
                {[
                  { label: "a. No Sale of Information:", text: "As we do not sell any of your Personal Information, the right to opt-out from the sale of personal information does not apply to information collected by us." },
                  { label: "b. Right to Know/Access Specific Pieces of Information:", text: "With respect to the Personal Information we have collected from you in any 12 months prior to you making a consumer request, you have the right to information about the categories of Personal Information we collected, and, for each category, the commercial purposes of such collection, the categories of sources for such Personal Information, and the categories of parties such information has been shared with if any. In addition, you have the right to access specific pieces of Personal Information collected about you. You may exercise this right no more than twice in any given 12-month period." },
                  { label: "c. Right to Request Deletion of Information:", text: "You have the right to require us to permanently delete certain Personal Information that we collected from you. However, this right is subject to a variety of restrictions and exceptions -for example, we may have to keep your Personal Data that is necessary for legal and legitimate business purposes, to resolve potential disputes, to make or defend legal claims, to conduct audits, and/or to enforce any agreements." },
                  { label: "d. How to Exercise your Rights:", text: "You must make a verified request indicating what type of right you wish to exercise that allows us to make sure that you are the person authorized to make such a request. Please contact us by e-mail at privacy@fraudshift.com. We will get back to you within 10 days to confirm receipt and inform you about the next steps. If we are able to verify your request, we typically provide the requested information within 45 days from receipt." },
                  { label: "e. No Discrimination:", text: "We will not discriminate against you for exercising any rights you may have as a consumer under CCPA." },
                  { label: "f. Other California Privacy Rights:", text: "California's \"Shine the Light\" law permits users who are California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. We do not disclose personal information to third parties for their direct marketing purposes." },
                  { label: "g. Children's Privacy:", text: "Our website is not intended for, nor targeted to, children under 13, and we do not knowingly request or collect personal information from any person under 13 years of age." },
                ].map((item, i) => (
                  <p key={i}><span className="font-semibold text-foreground">{item.label}</span> {item.text}</p>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Section 10 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">10. Additional Disclosures for European Economic Area and the United Kingdom Residents.</h2>
            <p>
              Under the current General Data Protection Regulation (GDPR) and the Privacy Shield Framework, you are given certain rights in relation to your Personal Data. Under the GDPR, if you are a resident from the EEA or the UK, you have the following rights:
            </p>
            <ul className="space-y-2 pl-2">
              {[
                { label: "Right of access:", text: "you have the right to be informed and request access to the Personal Data we have collected and processed about you." },
                { label: "Right to rectification:", text: "you have the right to request the rectification of inaccurate Personal Data concerning you, which must be duly amended or updated without undue delay." },
                { label: "Right to erasure:", text: "you have the right to request we delete your Personal Data." },
                { label: "Right to restriction of processing:", text: "you have the right to request us to prevent the processing of your Personal Data, either all or some of your Personal Data, temporarily or permanently." },
                { label: "Right to data portability:", text: "you have the right to request a copy of your Personal Data in electronic format and the right to transmit those data to another controller." },
                { label: "Right to object:", text: "you have the right, at any time, to object to our processing of your Personal Data on grounds relating to your particular situation, and the right to object to your Personal Data being processed for direct marketing purposes." },
                { label: "Right not to be subject to automated decision making:", text: "you have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you." },
              ].map((item, i) => (
                <li key={i} className="flex gap-2"><span className="text-accent shrink-0">•</span><span><span className="font-semibold text-foreground">{item.label}</span> {item.text}</span></li>
              ))}
            </ul>
            <p>
              To exercise any of the aforementioned rights, or to opt out of our marketing emails, please email us at{" "}
              <a href="mailto:privacy@fraudshift.com" className="text-accent hover:underline">privacy@fraudshift.com</a>.
            </p>
          </div>

          <hr className="border-border" />

          {/* Section 11 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">11. Contact Us.</h2>
            <p>
              If you have questions or concerns regarding the way in which your personal data is being processed or this Policy, please email us at{" "}
              <a href="mailto:privacy@fraudshift.com" className="text-accent hover:underline">privacy@fraudshift.com</a>.
            </p>
          </div>

          <p className="text-xs text-muted-foreground/60 pt-4">Effective date: May 15th, 2026</p>
        </motion.div>
      </div>
    </section>
  </>
);

export default Privacy;
