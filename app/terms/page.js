import NameBanner from "../components/about/NameBanner";

export const metadata = {
  title: "Terms of Use | SafeFastEx",
  description: "Review the Terms of Use governing access to SafeFastEx logistics and freight services website and platform.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Terms of Use" }
  ];

  return (
    <main>
      <NameBanner
        title="Terms of Use"
        backgroundImage="/images/nameBanner.jpg"
        breadcrumbs={breadcrumbs}
      />
      <section className="py-12 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none">
            <h2 className="font-spaceGrotesk uppercase tracking-tight text-3xl lg:text-4xl text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">By accessing or using the SafeFastEx website, client portal or related services, you agree to be bound by these Terms of Use and any referenced policies. If you do not agree, you must discontinue use.</p>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">2. Services</h3>
            <p className="text-gray-700 mb-4">We provide international and domestic freight forwarding, customs clearance, warehousing, cold chain handling and project logistics solutions. Availability is subject to operational, regulatory and compliance constraints.</p>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">3. User Responsibilities</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
              <li>Provide accurate shipment and compliance data.</li>
              <li>Maintain confidentiality of platform credentials.</li>
              <li>Comply with export control, sanctions and trade laws.</li>
              <li>Refrain from misuse, reverse engineering or security probing.</li>
            </ul>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">4. Prohibited Cargo</h3>
            <p className="text-gray-700 mb-4">Certain dangerous, restricted or controlled items may not be transported without prior approval or may be fully prohibited under governing law.</p>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">5. Intellectual Property</h3>
            <p className="text-gray-700 mb-4">All trademarks, content, platform interfaces and visual elements are owned or licensed by SafeFastEx. No license is granted except as strictly necessary for site usage.</p>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">6. Limitation of Liability</h3>
            <p className="text-gray-700 mb-4">To the fullest extent permitted by law, SafeFastEx is not liable for indirect, incidental or consequential damages arising from platform or service use beyond contractual transport liability regimes.</p>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">7. Amendments</h3>
            <p className="text-gray-700 mb-4">We may update these Terms periodically. Continued use following updates constitutes acceptance.</p>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">8. Contact</h3>
            <p className="text-gray-700 mb-4">For questions about these Terms, contact <a href="mailto:operations@safefastex.com" className="text-[#39C0C8] underline">operations@safefastex.com</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
