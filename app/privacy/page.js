import NameBanner from "../components/about/NameBanner";

export const metadata = {
  title: "Privacy Policy | SafeFastEx",
  description: "Learn how SafeFastEx collects, uses and protects personal and shipment data across its logistics platforms.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy" }
  ];

  return (
    <main>
      <NameBanner
        title="Privacy Policy"
        backgroundImage="/images/nameBanner.jpg"
        breadcrumbs={breadcrumbs}
      />
      <section className="py-12 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none">
            <h2 className="font-spaceGrotesk uppercase tracking-tight text-3xl lg:text-4xl text-gray-900 mb-6">1. Scope</h2>
            <p className="text-gray-700 leading-relaxed mb-6">This Privacy Policy covers how SafeFastEx handles personal data from clients, vendors, site visitors and logistics contacts.</p>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">2. Data We Collect</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
              <li>Identification: name, company, email, phone.</li>
              <li>Operational: shipment references, routing, commodity details.</li>
              <li>Technical: browser, device, IP, usage analytics.</li>
              <li>Compliance: licenses, customs IDs where required.</li>
            </ul>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">3. Purpose of Processing</h3>
            <p className="text-gray-700 mb-4">We process data for service execution, compliance assurance, platform optimization and customer support.</p>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">4. Legal Basis</h3>
            <p className="text-gray-700 mb-4">Depending on jurisdiction: contract performance, legitimate interest, consent or legal obligation.</p>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">5. Data Sharing</h3>
            <p className="text-gray-700 mb-4">We share only with carriers, customs authorities, technology vendors and regulatory bodies necessary for service delivery.</p>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">6. Retention</h3>
            <p className="text-gray-700 mb-4">Records retained according to legal, compliance and contractual requirements then securely anonymized or deleted.</p>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">7. Security</h3>
            <p className="text-gray-700 mb-4">Access controls, encryption in transit, monitoring and incident response protocols protect stored data.</p>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">8. Your Rights</h3>
            <p className="text-gray-700 mb-4">Access, correction, restriction, deletion and portability requests can be submitted to <a href="mailto:operations@safefastex.com" className="text-[#39C0C8] underline">operations@safefastex.com</a>.</p>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">9. Updates</h3>
            <p className="text-gray-700 mb-4">Policy revisions will be posted with a revised effective date.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
