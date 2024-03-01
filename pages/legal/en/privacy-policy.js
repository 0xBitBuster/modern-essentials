import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

function PrivacyPolicy() {
    return (
        <Layout title="Privacy Policy" noindex={true}>
            <div className="container mx-auto flex flex-col pt-32 md:pt-40 px-4">
                <Link href="/legal/de/privacy-policy" className="text-sm underline italic hover:text-primary">Deutsche Version</Link>
                <h1 className="lg:text-4xl text-2xl font-extrabold lg:leading-tight mb-2">Privacy Policy</h1>
                <p>
                    This privacy policy is intended to inform users of this website about the type, scope and purpose of the collection and use of personal data by the website operator in accordance with the Federal Data Protection Act and the Telemedia Act. <br />
                    <br />
                    We take data protection very seriously and treat your personal data confidentially and in accordance with legal regulations. <br />
                    <br />
                    Please bear in mind that data transmission on the Internet can always be subject to security vulnerabilities. Complete protection against access by third parties is not possible.
                </p>
                <h2 className="text-2xl font-bold mt-10">I. Responsible Person</h2>
                <p>
                    The controller within the meaning of the General Data Protection Regulation (GDPR) and other national data protection laws of the member states as well as other data protection regulations is: <br />
                    <br />
                    <Image src="/address.png" alt="" width={158} height={50} />
                    <span className="font-light">Email: support@modern-essentials.org</span>
                </p>
                <h2 className="text-2xl font-bold mt-10">II. General information on data processing</h2>
                <h3 className="text-xl font-bold">a. What data is processed for what purpose?</h3>
                <p>
                    Each time you access content on the website, data is temporarily stored that may allow you to be identified. The following data is collected: <br />
                    <br />
                    - Date and time of access <br />
                    - IP-Address <br />
                    - Website from which the website was accessed <br />
                    - Websites that are accessed via the website <br />
                    - Visited page on our website <br />
                    - Message as to whether the website was successfully accessed <br />
                    - Amount of data transferred <br />
                    - Information about the browser type and version used <br />
                    - Operating system <br />
                    <br />
                    The temporary storage of the data is necessary for the course of a website visit in order to enable the website to be delivered. Further storage in log files takes place to ensure the functionality of the website and the security of the information technology systems.
                    information technology systems. Our legitimate interest in data processing also lies in these purposes.
                </p>
                <h3 className="text-xl font-bold mt-4">b. On what legal basis is this data processed?</h3>
                <p>The data is processed on the basis of Art. 6 para. 1 letter f GDPR.</p>
                <h3 className="text-xl font-bold mt-4">c. Are there other recipients of the personal data in addition to the controller??</h3>
                <p>The website is hosted by Vercel Inc. The hoster receives the above-mentioned data as a processor.</p>
                <h3 className="text-xl font-bold mt-4">d. How long the data is stored?</h3>
                <p>
                    The data is deleted as soon as it is no longer required to achieve the purpose for which it was collected. In the case of the provision of the website, this is the case when the respective session has ended. The log files are stored directly and only accessible to administrators.
                    accessible only to administrators. After that, they are only indirectly available via the reconstruction of backup tapes and are permanently deleted after four weeks.
                </p>
                <h2 className="text-2xl font-bold mt-10">III. Rights of data subjects</h2>
                <p>
                    If your personal data is processed, you are a data subject within the meaning of the GDPR and you have the following rights vis-a-vis the controller:<br />
                    <br />
                    - Right to information <br />
                    - Right to object <br />
                    - Right to rectification <br />
                    - Right to erasure <br />
                    - Right to restriction of processing <br />
                    - Right to complain <br />
                    - Right to data portability <br />
                    <br />
                    To exercise your rights or for further questions about data protection, you can contact us at support@modern-essentials.org.
                </p>
                <h2 className="text-2xl font-bold mt-10">IV. Use of cookies</h2>
                <p>
                    Our website uses so-called &quot;cookies&quot;. Cookies are small text files that are stored on your computer and saved by your browser. They are used to make our website more user-friendly and effective for you. <br />
                    <br />
                    You can prevent the use of cookies by setting your Internet browser so that it does not accept cookies. However, you can also specify in your browser whether you wish to be informed about the setting of cookies and only allow cookies in individual cases
                    individual cases, whether you exclude the acceptance of cookies for certain cases or in general. You can also activate the automatic deletion of cookies when you close your browser. How you do this depends on your browser.
                </p>
                <h2 className="text-2xl font-bold mt-10">V. General information on data protection</h2>
                <p>
                In the course of the further development of the website, changes to this privacy policy may also become necessary. We therefore recommend that you read the data protection declaration again from time to time. <br />
                    <br />
                    We would like to point out that operators of third-party websites linked from the portal may collect and analyze the data of visitors to these websites. <br /> <br />
                    As part of our press and public relations work, photos and videos are taken at events and appointments in which you may be recognizable. You can object to the recording and/or publication. Please use the contact details
                    the contact details given above. <br />
                    <br />
                    This website may contain links to external websites or embedded content, including images from third-party providers. Please note that separate privacy policies and terms of use may apply to this external content.
                </p>
            </div>
        </Layout>
    );
}

export default PrivacyPolicy;
