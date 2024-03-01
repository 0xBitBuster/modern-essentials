import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

function Imprint() {
    return (
        <Layout title="Imprint" noindex={true}>
            <div className="container mx-auto flex flex-col pt-32 md:pt-40 px-4">
                <Link href="/legal/de/imprint" className="text-sm underline italic hover:text-primary">Deutsche Version</Link>
                <h1 className="lg:text-4xl text-2xl font-extrabold lg:leading-tight mb-2">Imprint</h1>
                <p>
                    Information according to §5 TMG <br />
                    <br />
                    <Image src="/address.png" alt="" width={158} height={50} />
                    <span className="font-light">Email: support@modern-essentials.org</span>
                </p>
                <h2 className="text-2xl font-bold mt-10">Liability for content</h2>
                <p>
                    The contents of our pages have been created with the greatest care. However, we cannot assume any liability for the accuracy, completeness and topicality of the content. As a service provider, we are responsible for our own content on these pages in accordance with § 7 Para.1 TMG (German Telemedia Act).
                    responsible under general law. According to §§ 8 to 10 TMG, however, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove
                    or blocking the use of information in accordance with general legislation remain unaffected by this. However, liability in this respect is only possible from the time of knowledge of a specific infringement. As soon as we become aware of any such legal infringements, we will
                    we will remove this content immediately.
                </p>
                <h2 className="text-2xl font-bold mt-10">Liability for links</h2>
                <p>
                    Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages.
                    responsible. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent monitoring of the content of the linked pages is not possible without specific
                    evidence of an infringement. If we become aware of any legal infringements, we will remove such links immediately.
                </p>
                <h2 className="text-2xl font-bold mt-10">Copyright</h2>
                <p>
                    The content and works created by the site operators on these pages are subject to German copyright law. The duplication, processing, distribution and any kind of utilization outside the limits of copyright law require the written consent of the respective author or creator.
                    of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content
                    third parties are marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.
                </p>
                <h2 className="text-2xl font-bold mt-10">Privacy policy</h2>
                <p>
                    The use of our website is generally possible without providing personal data. If personal data (e.g. name, address or e-mail addresses) is collected on our website, this is always done on a voluntary basis as far as possible. This data
                    will not be passed on to third parties without your express consent. We would like to point out that data transmission over the Internet (e.g. when communicating by e-mail) may be subject to security vulnerabilities. Complete protection of data against access by third parties is not possible.
                    possible. We hereby expressly prohibit the use of contact data published within the scope of the imprint obligation by third parties for sending unsolicited advertising and information material. The operators of the pages reserve the right
                    expressly reserve the right to take legal action against unsolicited mailing or e-mailing of spam and other similar advertising materials.
                </p>
                <h2 className="text-2xl font-bold mt-10">Affiliate Links</h2>
                <p>
                    Our site uses so-called "affiliate links". As a participant in various affiliate programs, we earn commissions from qualified purchases made through these links. These commissions allow us to maintain the operation of the website and provide high quality content for our users. Please note that this does not influence your purchasing decisions, and we only recommend products or services that we are confident in.
                </p>
            </div>
        </Layout>
    );
}

export default Imprint;
