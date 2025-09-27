import NameBanner from "../components/about/NameBanner";

export const metadata = {
  title: "Environmental Policy | SafeFastEx",
  description: "Learn about SafeFastEx environmental sustainability commitments in logistics operations and supply chain practices.",
  alternates: { canonical: "/environmental-policy" },
};

export default function EnvironmentalPolicyPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Environmental Policy" }
  ];

  return (
    <main>
      <NameBanner
        title="Environmental Policy"
        backgroundImage="/images/nameBanner.jpg"
        breadcrumbs={breadcrumbs}
      />
      <section className="py-12 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none">
            <h2 className="font-spaceGrotesk uppercase tracking-tight text-3xl lg:text-4xl text-gray-900 mb-6">Our Commitment</h2>
            <p className="text-gray-700 leading-relaxed mb-6">SafeFastEx is committed to minimizing environmental impact through responsible logistics, modal optimization, fuel efficiency programs and data-driven sustainability initiatives.</p>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">Carbon Reduction</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
              <li>Route engineering to reduce empty mileage and idling.</li>
              <li>Fuel-efficient vehicle specifications and maintenance.</li>
              <li>Support for lower-emission modes where feasible.</li>
              <li>Optimization of container utilization and consolidation.</li>
            </ul>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">Resource Conservation</h3>
            <p className="text-gray-700 mb-4">We implement warehouse energy efficiency, LED lighting conversion, waste segregation and packaging right-sizing.</p>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">Compliance & Reporting</h3>
            <p className="text-gray-700 mb-4">We align with applicable environmental regulations and are advancing toward emissions accounting transparency in reporting frameworks.</p>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">Continuous Improvement</h3>
            <p className="text-gray-700 mb-4">We collaborate with customers and partners to pilot cleaner technologies, alternative fuels and digital planning tools that reduce carbon intensity.</p>

            <h3 className="font-semibold text-xl text-gray-900 mt-10 mb-3">Contact</h3>
            <p className="text-gray-700 mb-4">For environmental inquiries email <a href="mailto:operations@safefastex.com" className="text-[#39C0C8] underline">operations@safefastex.com</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
