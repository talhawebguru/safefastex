// Structured services data for detailed service pages
export const servicesData = {
  roadFreight: {
    slug: "road-freight",
    title: "Road Freight",
    tagline: "Reliable domestic & cross-border trucking solutions",
    intro: `At SafeFastEx, we specialize in road freight services that connect businesses across the UAE, GCC, and international trade corridors. Whether it's full truckload (FTL), less-than-truckload (LTL), temperature-controlled shipments, or high-value cargo, our advanced logistics network ensures every shipment is delivered on time, secure, and cost-efficient.
With real-time GPS tracking, customs compliance, and a fleet of 850+ active trucks, we move over 120,000 shipments annually across 22 countries. From domestic trucking to cross-border freight forwarding, SafeFastEx is your trusted partner for road transportation logistics.`,
    heroImage: "/images/road-freight-hero.jpg", // placeholder path
    benefits: [
      {
        title: "Flexible Capacity",
        description:
          "FTL & LTL options with load optimization to reduce cost per mile and maximize efficiency.",
        icon: "capacity",
      },
      {
        title: "Real-Time Tracking",
        description:
          "24/7 GPS visibility & automated alerts with milestone tracking for complete shipment transparency.",
        icon: "tracking",
      },
      {
        title: "Secure & Compliant",
        description:
          "Risk-assessed routes & customs support with high-security protocols and documentation assistance.",
        icon: "secure",
      },
      {
        title: "Specialized Handling",
        description:
          "Refrigerated, hazardous, oversized & valuable cargo capabilities with certified handling teams.",
        icon: "special",
      },
    ],
    process: [
      {
        step: 1,
        title: "Request & Assessment",
        text: "Shipment details analysis & optimized routing with constraints evaluation and cost planning.",
      },
      {
        step: 2,
        title: "Planning & Scheduling",
        text: "Load consolidation & transit confirmation with document preparation and timeline coordination.",
      },
      {
        step: 3,
        title: "In-Transit Monitoring",
        text: "Live GPS visibility, exception handling & compliance oversight with proactive management.",
      },
      {
        step: 4,
        title: "Delivery & POD",
        text: "Final-mile delivery with electronic proof of delivery and comprehensive performance reporting.",
      },
    ],
    stats: [
      { label: "Active trucks", value: "850+" },
      { label: "Annual shipments", value: "120K" },
      { label: "Countries covered", value: "22" },
      { label: "On-time delivery", value: "97%" },
    ],
    faqs: [
      {
        q: "Do you handle temperature-controlled road freight?",
        a: "Yes, we operate a dedicated refrigerated fleet with validated cold-chain monitoring and contingency routing for temperature-sensitive cargo.",
      },
      {
        q: "Can I track my shipment in real-time?",
        a: "All road shipments include 24/7 GPS visibility, status events, and exception alerts via our client portal with automated notifications.",
      },
      {
        q: "What is your road freight coverage area?",
        a: "We service major corridors across UAE, GCC, plus cross-border lanes into 22 countries with bonded trucking solutions.",
      },
      {
        q: "Do you support high-value cargo security?",
        a: "Yes, including geofenced routing, dual-driver protocols, escort services, and sealed trailer security measures.",
      },
    ],
    related: [
      { title: "Sea Freight", href: "/services/ship-freight" },
      { title: "Air Freight", href: "/services/air-freight" },
      { title: "Project Cargo", href: "/services/project-cargo" },
    ],
    cta: {
      heading: "Need reliable road freight solutions?",
      subheading:
        "Connect with our road freight specialists for tailored capacity planning and competitive routing solutions.",
      buttonText: "Request a Quote",
      buttonHref: "/request-quote",
    },
  },
  airFreight: {
    slug: "air-freight",
    title: "Air Freight",
    tagline: "Time-critical global air cargo solutions",
    intro: `Our air freight services provide fast, secure, and efficient international cargo transport. From next-flight-out (NFO) and temperature-controlled shipments to high-value secure goods, we deliver global coverage with real-time visibility and compliance. With strategic airline partnerships, multi-hub capacity, and advanced tracking, we ensure your shipments arrive on time and in perfect condition.`,
    heroImage: "/images/air-freight-hero.jpg",
    benefits: [
      {
        title: "Expedited Transit",
        description:
          "Premium and deferred service tiers aligned to urgency and budget.",
        icon: "speed",
      },
      {
        title: "Global Coverage",
        description:
          "Multi-hub network with space protection across major trade lanes.",
        icon: "capacity",
      },
      {
        title: "Temperature Control",
        description:
          "Validated cold-chain processes for pharmaceuticals & perishables.",
        icon: "special",
      },
      {
        title: "Security & Compliance",
        description:
          "Regulated agent standards, chain-of-custody and customs expertise.",
        icon: "secure",
      },
    ],
    process: [
      {
        step: 1,
        title: "Booking & Capacity",
        text: "Route design, carrier allocation and priority classification.",
      },
      {
        step: 2,
        title: "Cargo Acceptance",
        text: "Documentation validation, screening and consolidation at origin hub.",
      },
      {
        step: 3,
        title: "Airline Uplift",
        text: "Departure monitoring, transit milestone tracking and exception alerts.",
      },
      {
        step: 4,
        title: "Customs & Final Mile",
        text: "Arrival clearance, deconsolidation and delivery to consignee.",
      },
    ],
    stats: [
      { label: "Average transit savings", value: "18%" },
      { label: "Global gateways", value: "45" },
      { label: "Temp-control lanes", value: "70+" },
      { label: "Regulated agents", value: "100%" },
    ],
    faqs: [
      {
        q: "Do you offer next-flight-out (NFO) services?",
        a: "Yes, with 24/7 control tower oversight and automated status feeds.",
      },
      {
        q: "Can you handle pharmaceutical and temperature-sensitive cargo?",
        a: "Yes, we provide GDP-compliant processes, calibrated monitoring devices, and validated cold-chain lanes.",
      },
      {
        q: "How do you ensure cargo security?",
        a: "We follow strict screening compliance, use tamper-evident seals, and maintain chain-of-custody logging.",
      },
      {
        q: "Do you provide consolidation options?",
        a: "Yes, we offer scheduled multi-shipper consolidations to optimize load factors and reduce cost.",
      },
      {
        q: "Which destinations do you cover with air freight?",
        a: "We serve 190+ global destinations with direct and consolidated air freight services.",
      },
      {
        q: "Do you offer real-time cargo tracking?",
        a: "Yes, live GPS tracking and milestone updates are provided via our digital platform.",
      },
      {
        q: "What industries benefit most from air freight?",
        a: "Healthcare, electronics, automotive, retail, and perishables rely on our expedited air solutions.",
      },
      {
        q: "Can you manage dangerous goods by air?",
        a: "Yes, our team is IATA-DGR certified to handle hazardous and restricted cargo safely.",
      },
      {
        q: "Do you provide customs clearance for air shipments?",
        a: "Yes, our in-house customs team manages documentation, compliance, and duty optimization.",
      },
      {
        q: "What is the maximum size/weight allowed in air freight?",
        a: "We handle oversized cargo with airline partnerships, including freighter and charter services.",
      },
    ],
    related: [
      { title: "Road Freight", href: "/services/road-freight" },
      { title: "Ship Freight", href: "/services/ship-freight" },
      { title: "Cold Chain Logistics", href: "/services/cold-chain" },
    ],
    cta: {
      heading: "Need urgent international uplift?",
      subheading:
        "Engage our air solutions team for priority capacity and real-time visibility.",
      buttonText: "Start a Shipment",
      buttonHref: "/request-quote",
    },
  },
  shipFreight: {
    slug: "ship-freight",
    title: "Ship Freight",
    tagline: "Global Ocean Freight Solutions for Every Business",
    intro: `Our ship freight services provide secure, scalable, and cost-efficient international shipping across all major sea routes. From full container loads (FCL) to less-than-container loads (LCL), breakbulk, and temperature-controlled reefer cargo, we ensure seamless door-to-port and port-to-door solutions with end-to-end visibility and compliance support.`,
    heroImage: "/images/ship-freight-hero.jpg",
    benefits: [
      {
        title: "Global Coverage",
        description: "Partnerships with top carriers, guaranteed space allocations, and access to 80+ ports worldwide.",
        icon: "capacity",
      },
      {
        title: "Flexible Container Options",
        description: "FCL, LCL, reefer, flat-rack, and open-top solutions for any cargo type.",
        icon: "special",
      },
      {
        title: "Cost Optimization",
        description: "Competitive rates through consolidated shipments and long-term carrier contracts.",
        icon: "tracking",
      },
      {
        title: "Real-Time Tracking",
        description: "Shipment milestones, ETAs, and customs clearance updates via our digital platform.",
        icon: "tracking",
      },
      {
        title: "Specialized Cargo Handling",
        description: "Hazardous materials, oversized loads, and high-value goods with certified expertise.",
        icon: "secure",
      },
    ],
    process: [
      {
        step: 1,
        title: "Booking & Documentation",
        text: "Cargo assessment, route selection, and customs documentation preparation.",
      },
      {
        step: 2,
        title: "Container Stuffing & Pickup",
        text: "Secure container loading at your premises or our partner facilities.",
      },
      {
        step: 3,
        title: "Ocean Transit",
        text: "Carrier allocation, real-time status updates, and exception management.",
      },
      {
        step: 4,
        title: "Customs Clearance & Delivery",
        text: "Import/export compliance, deconsolidation, and final delivery coordination.",
      },
    ],
    stats: [
      { label: "Global Port Coverage", value: "80+" },
      { label: "Annual Shipments", value: "95K+ TEUs" },
      { label: "On-Time Performance", value: "95%" },
      { label: "Carrier Partnerships", value: "40+" },
    ],
    faqs: [
      {
        q: "What types of ship freight services do you offer?",
        a: "We provide FCL, LCL, breakbulk, project cargo, and reefer shipping solutions.",
      },
      {
        q: "Do you handle refrigerated or temperature-sensitive cargo?",
        a: "Yes, we offer reefer containers with real-time temperature monitoring for perishables and pharmaceuticals.",
      },
      {
        q: "How do I choose between FCL and LCL shipping?",
        a: "FCL is ideal for large volumes, while LCL is cost-effective for smaller shipments. Our team helps assess the best option.",
      },
      {
        q: "Can I track my ocean freight shipment online?",
        a: "Yes, you’ll have access to our client portal with real-time milestones, ETAs, and customs clearance updates.",
      },
      {
        q: "Do you provide customs clearance support?",
        a: "Absolutely, we handle export and import documentation, duties, and compliance with international trade laws.",
      },
      {
        q: "What is the average transit time for ship freight?",
        a: "Transit times vary depending on routes, ranging from 7–45 days. We’ll provide an accurate ETA at booking.",
      },
      {
        q: "Do you support oversized or hazardous cargo shipping?",
        a: "Yes, we manage dangerous goods and project cargo with specialized containers, permits, and safety protocols.",
      },
      {
        q: "How competitive are your ship freight rates?",
        a: "Our strong carrier partnerships and consolidation services ensure highly competitive and transparent pricing.",
      },
      {
        q: "Can you provide door-to-door shipping solutions?",
        a: "Yes, we offer multimodal solutions integrating road, rail, and ocean freight for seamless delivery.",
      },
      {
        q: "Which regions do you cover?",
        a: "We cover all major global trade lanes including Asia, Europe, North America, Middle East, and Africa.",
      },
    ],
    related: [
      { title: "Road Freight", href: "/services/road-freight" },
      { title: "Air Freight", href: "/services/air-freight" },
      { title: "Customs Clearance", href: "/services/customs-clearance" },
    ],
    cta: {
      heading: "Optimize your ocean strategy",
      subheading:
        "Engage our sea freight team to balance transit reliability and landed cost.",
      buttonText: "Request Capacity Plan",
      buttonHref: "/request-quote",
    },
  },
  warehousingStorage: {
    slug: "warehousing-storage",
    title: "Warehousing & Storage",
    tagline: "Secure, Scalable Inventory & Distribution Hubs",
    intro: `Our warehousing and storage services in the UAE provide secure, scalable, and strategically located facilities to optimize your inventory, fulfillment speed, and cost control. From multi-temperature pallet storage and bonded warehousing to value-added services like kitting and relabeling, we tailor our solutions to fit your operational model. With advanced WMS technology and 99.8% inventory accuracy, we are the trusted warehousing partner for businesses across Dubai, Sharjah, and Abu Dhabi.`,
    heroImage: "/images/warehousing-hero.jpg",
    benefits: [
      {
        title: "Scalable & Flexible Space",
        description:
          "Flexible ambient, chilled, and frozen capacity that adapts to your seasonal and business demands.",
        icon: "capacity",
      },
      {
        title: "Real-Time Inventory Visibility",
        description:
          "Integrated WMS for real-time stock levels, batch tracking, and expiry date management.",
        icon: "tracking",
      },
      {
        title: "Value-Added Services",
        description:
          "Kitting, relabeling, quality control inspections, and light assembly to support your supply chain.",
        icon: "special",
      },
      {
        title: "Enhanced Security & Compliance",
        description:
          "24/7 CCTV monitoring, controlled access zones, and audit-ready compliance for total peace of mind.",
        icon: "secure",
      },
    ],
    process: [
      {
        step: 1,
        title: "Onboarding & System Integration",
        text: "Slotting design, WMS integration, and establishing key performance indicators (KPIs).",
      },
      {
        step: 2,
        title: "Inbound Receiving & Putaway",
        text: "Validating receipts, scanning inventory, and assigning optimized storage locations.",
      },
      {
        step: 3,
        title: "Order Fulfillment & Dispatch",
        text: "Efficient pick-pack operations, value-added service execution, and dispatch preparation.",
      },
      {
        step: 4,
        title: "Reporting & Optimization",
        text: "Regular cycle counts, performance reporting, and continuous improvement strategies.",
      },
    ],
    stats: [
      { label: "Inventory Accuracy", value: "99.8%" },
      { label: "Global Facilities", value: "60+" },
      { label: "Avg. Order Cycle Time", value: "<4h" },
      { label: "Temperature Zones", value: "3" },
    ],
    faqs: [
      {
        q: "What types of warehousing do you offer?",
        a: "We offer ambient, temperature-controlled (chilled and frozen), and bonded warehousing solutions in UAE.",
      },
      {
        q: "Can you handle e-commerce fulfillment?",
        a: "Yes, our facilities are equipped for B2C and B2B e-commerce fulfillment, including pick-pack and dispatch.",
      },
      {
        q: "Is your Warehouse Management System (WMS) integrated?",
        a: "Yes, our WMS provides real-time inventory data and can be integrated with your ERP or e-commerce platform.",
      },
      {
        q: "Do you offer value-added services (VAS)?",
        a: "We provide a range of VAS, including kitting, bundling, relabeling, and quality control checks.",
      },
      {
        q: "Are your warehouses secure?",
        a: "Our facilities feature 24/7 CCTV, access control, and fire suppression systems to ensure maximum security.",
      },
      {
        q: "Do you provide bonded warehousing in Dubai or Sharjah?",
        a: "Yes, we operate customs-bonded warehouses that allow for deferred duty and tax payments.",
      },
      {
        q: "Can you manage both palletized and non-palletized goods?",
        a: "Yes, we handle all types of goods, with flexible racking and floor space for palletized and bulk items.",
      },
      {
        q: "What is the benefit of using your distribution hubs?",
        a: "Our strategically located hubs reduce transit times, lower transportation costs, and improve delivery speed.",
      },
      {
        q: "How do you ensure inventory accuracy?",
        a: "We use a robust WMS, regular cycle counting, and strict receiving/dispatch processes to maintain 99.8% accuracy.",
      },
      {
        q: "What industries do you serve with your warehousing solutions?",
        a: "We serve retail, FMCG, electronics, automotive, pharmaceuticals, and industrial sectors.",
      },
    ],
    related: [
      { title: "Road Freight", href: "/services/road-freight" },
      { title: "Customs Clearance", href: "/services/customs-clearance" },
      { title: "Cold Chain Logistics", href: "/services/cold-chain" },
    ],
    cta: {
      heading: "Need Scalable Warehousing in the UAE?",
      subheading:
        "Unlock flexible storage, fulfillment, and value-added services with our state-of-the-art network.",
      buttonText: "Discuss Solutions",
      buttonHref: "/request-quote",
    },
  },
  customsClearance: {
    slug: "customs-clearance",
    title: "Customs Clearance",
    tagline: "Frictionless Cross-Border Compliance & Documentation",
    intro: `Our customs clearance services in the UAE ensure your shipments cross borders without delays. We streamline import and export processes with proactive documentation review, accurate HS code classification, duty optimization, and digital milestone visibility. With a 99.5% clearance accuracy rate, we reduce penalties and administrative overhead, making us a trusted customs broker in Dubai, Abu Dhabi, and Sharjah.`,
    heroImage: "/images/customs-hero.jpg",
    benefits: [
      {
        title: "Proactive Documentation Accuracy",
        description:
          "Pre-clearance file validation to prevent holds, queries, and costly delays at the border.",
        icon: "tracking",
      },
      {
        title: "Duty & Tax Optimization",
        description:
          "Expert HS classification, free trade agreement (FTA) applicability, and cost recovery guidance.",
        icon: "capacity",
      },
      {
        title: "Regulatory Compliance & Advisory",
        description:
          "Full compliance with customs regulations, trade laws, and restricted party screening workflows.",
        icon: "secure",
      },
      {
        title: "Digital & Transparent Visibility",
        description:
          "Event-driven status updates and real-time clearance milestone reporting via our client portal.",
        icon: "special",
      },
    ],
    process: [
      {
        step: 1,
        title: "Document Intake & Verification",
        text: "Gathering and validating commercial invoices, packing lists, certificates of origin, and permits.",
      },
      {
        step: 2,
        title: "HS Classification & Duty Calculation",
        text: "Assigning correct HS codes, validating valuation, and calculating applicable duties and taxes.",
      },
      {
        step: 3,
        title: "Customs Submission & Follow-Up",
        text: "Filing customs entries, monitoring agency responses, and proactively resolving any queries.",
      },
      {
        step: 4,
        title: "Release Confirmation & Recordkeeping",
        text: "Issuing final clearance confirmation and archiving all compliance data for auditing purposes.",
      },
    ],
    stats: [
      { label: "Clearance Accuracy Rate", value: "99.5%" },
      { label: "Average Clearance Time", value: "<6h" },
      { label: "Annual FTA Reviews", value: "3K+" },
      { label: "Audit Exceptions", value: "<1%" },
    ],
    faqs: [
      {
        q: "What is customs clearance?",
        a: "Customs clearance is the process of preparing and submitting documentation to facilitate export or import, ensuring compliance with local laws.",
      },
      {
        q: "Why is customs clearance important in the UAE?",
        a: "Proper customs clearance in the UAE prevents shipment delays, fines, and ensures your goods enter or exit the country legally and efficiently.",
      },
      {
        q: "Can you classify complex products with HS codes?",
        a: "Yes, our experts handle HS classification for all goods, including multi-component and regulatory-sensitive products.",
      },
      {
        q: "Do you assist with duty recovery and optimization?",
        a: "We evaluate eligibility for FTAs, duty drawbacks, and re-export relief to minimize your costs.",
      },
      {
        q: "Is restricted party screening included in your service?",
        a: "Yes, we use automated systems to screen against restricted party lists as part of our compliance workflow.",
      },
      {
        q: "Do you handle temporary imports and exports?",
        a: "Yes, we manage temporary import/export processes, including ATA Carnets and re-export documentation.",
      },
      {
        q: "What documents are required for customs clearance in Dubai?",
        a: "Typically, you need a commercial invoice, packing list, bill of lading/air waybill, and certificate of origin.",
      },
      {
        q: "How long does customs clearance take?",
        a: "With pre-submitted and accurate documentation, we achieve an average clearance time of less than 6 hours.",
      },
      {
        q: "Can you act as my customs broker in the UAE?",
        a: "Yes, SafeFastEx is a licensed customs broker in the UAE, handling all interactions with customs authorities on your behalf.",
      },
      {
        q: "Do you handle clearance for all freight types?",
        a: "Yes, we provide customs clearance for air, sea, and road freight shipments of all sizes and types.",
      },
    ],
    related: [
      { title: "Air Freight", href: "/services/air-freight" },
      { title: "Ship Freight", href: "/services/ship-freight" },
      { title: "Road Freight", href: "/services/road-freight" },
    ],
    cta: {
      heading: "Need Faster Customs Clearance in the UAE?",
      subheading:
        "Reduce border delays and duty costs with our expert compliance specialists.",
      buttonText: "Start Consultation",
      buttonHref: "/request-quote",
    },
  },
  coldChain: {
    slug: "cold-chain",
    title: "Cold Chain Logistics",
    tagline: "Validated Temperature-Controlled Pharma & Perishables",
    intro: `SafeFastEx provides specialized cold chain logistics to protect product integrity for temperature-sensitive cargo. Using GDP-aligned procedures, calibrated IoT monitoring devices, and advanced thermal packaging, we maintain precise temperature ranges for pharmaceuticals, medical supplies, and perishable goods. With a 98% excursion prevention rate and 24/7 control tower monitoring, we are the trusted cold chain partner for businesses in the UAE and beyond.`,
    heroImage: "/images/cold-chain-hero.jpg",
    benefits: [
      {
        title: "End-to-End Temperature Control",
        description:
          "Pre-conditioned packaging, validated shipping lanes, and real-time temperature and humidity telemetry.",
        icon: "special",
      },
      {
        title: "Pharmaceutical & GDP Compliance",
        description:
          "Strict adherence to Good Distribution Practices (GDP), GxP standards, and quality documentation support.",
        icon: "secure",
      },
      {
        title: "Multi-Temperature Capability",
        description:
          "Expert management of frozen (-20°C), chilled (2-8°C), and controlled ambient (15-25°C) temperature ranges.",
        icon: "capacity",
      },
      {
        title: "Proactive Exception Response",
        description:
          "Automated alerts and 24/7 intervention protocols to prevent temperature excursions before they happen.",
        icon: "tracking",
      },
    ],
    process: [
      {
        step: 1,
        title: "Thermal Lane Risk Assessment",
        text: "We risk-assess origin/destination infrastructure, transit durations, and climate conditions.",
      },
      {
        step: 2,
        title: "Packaging & Preparation",
        text: "Thermal packaging selection, pre-conditioning, and loading validation with calibrated data loggers.",
      },
      {
        step: 3,
        title: "In-Transit Monitoring & Control",
        text: "Live temperature, humidity, and location telemetry with automated alert thresholds and control tower oversight.",
      },
      {
        step: 4,
        title: "Delivery, QA & Reporting",
        text: "Arrival temperature verification, data logger analysis, and comprehensive quality reporting for auditing.",
      },
    ],
    stats: [
      { label: "Temperature Excursion Prevention", value: "98%" },
      { label: "Validated Pharma Lanes", value: "120+" },
      { label: "Daily Temp Data Points", value: "35K" },
      { label: "Quality Deviations", value: "<0.5%" },
    ],
    faqs: [
      {
        q: "What is cold chain logistics?",
        a: "Cold chain logistics is the management of temperature-sensitive products (like pharmaceuticals and perishables) to maintain their quality and integrity during transport and storage.",
      },
      {
        q: "What temperature ranges can you manage?",
        a: "We manage frozen (-20°C), chilled (2-8°C), and controlled room temperature (CRT, 15-25°C) ranges with precision.",
      },
      {
        q: "Do you provide temperature data loggers?",
        a: "Yes, we provide calibrated single-use and multi-use IoT data loggers for real-time temperature and humidity tracking.",
      },
      {
        q: "How do you handle temperature excursions?",
        a: "Our 24/7 control tower receives automated alerts and initiates pre-defined SOPs to intervene and protect the product.",
      },
      {
        q: "Are your cold chain services GDP compliant?",
        a: "Yes, our processes are fully aligned with Good Distribution Practices (GDP) for the pharmaceutical industry.",
      },
      {
        q: "Do you offer validated shipping lanes?",
        a: "We have over 120 validated lanes for pharma shipments, ensuring consistent temperature control from end to end.",
      },
      {
        q: "Can you provide thermal packaging solutions?",
        a: "Yes, we design and provide qualified thermal packaging solutions based on product requirements and transit duration.",
      },
      {
        q: "What industries use your cold chain services?",
        a: "We primarily serve the pharmaceutical, life sciences, biotech, and high-value food and beverage industries.",
      },
      {
        q: "Is your staff trained for cold chain handling?",
        a: "Yes, our staff undergoes rigorous training on GDP standards and cold chain handling protocols.",
      },
      {
        q: "How do I get a quote for a cold chain shipment?",
        a: "Contact our cold chain specialists with your product details, temperature requirements, and route to get a tailored solution and quote.",
      },
    ],
    related: [
      { title: "Air Freight", href: "/services/air-freight" },
      { title: "Road Freight", href: "/services/road-freight" },
      { title: "Warehousing & Storage", href: "/services/warehousing-storage" },
    ],
    cta: {
      heading: "Protect Your Temperature-Sensitive Cargo",
      subheading:
        "Improve product integrity and compliance across your entire cold supply chain with our validated solutions.",
      buttonText: "Assess a Lane",
      buttonHref: "/request-quote",
    },
  },
  projectCargo: {
    slug: "project-cargo",
    title: "Project Cargo",
    tagline: "Tailored Logistics for Heavy Lift & Oversized Cargo",
    intro: `Our Project Cargo services are designed for industries that require specialized handling of heavy, oversized, or complex shipments. From power plants and construction machinery to oil & gas equipment, we combine engineering expertise, route planning, and multimodal transport solutions to ensure safe and timely delivery anywhere in the world.`,
    heroImage: "/images/project-cargo-hero.jpg",
    benefits: [
      {
        title: "End-to-End Project Management",
        description: "From feasibility studies to execution, we manage every stage of project logistics.",
        icon: "tracking",
      },
      {
        title: "Specialized Transport Solutions",
        description: "Heavy-lift vessels, barges, flat-racks, and multi-axle trailers for oversized cargo.",
        icon: "special",
      },
      {
        title: "Route & Site Surveys",
        description: "Engineering assessments, road studies, and lifting simulations to ensure feasibility.",
        icon: "capacity",
      },
      {
        title: "Global Network Access",
        description: "Strong partnerships with carriers, port authorities, and local operators worldwide.",
        icon: "capacity",
      },
      {
        title: "Compliance & Safety First",
        description: "Adherence to international standards, permits, and HSSE (Health, Safety, Security, Environment) protocols.",
        icon: "secure",
      },
    ],
    process: [
      {
        step: 1,
        title: "Project Assessment & Planning",
        text: "Cargo evaluation, feasibility study, and logistics blueprint design.",
      },
      {
        step: 2,
        title: "Engineering & Route Survey",
        text: "Road assessments, lifting/rigging plans, and multimodal coordination.",
      },
      {
        step: 3,
        title: "Execution & Transport",
        text: "Heavy-lift equipment, specialized carriers, and customs documentation handling.",
      },
      {
        step: 4,
        title: "Delivery & Installation Support",
        text: "On-site coordination, unloading, and integration with client operations.",
      },
    ],
    stats: [
      { label: "Projects Executed", value: "600+" },
      { label: "Maximum Lift Capacity", value: "350+ tons per unit" },
      { label: "Countries Served", value: "30+" },
      { label: "Industries Supported", value: "Energy, Oil & Gas, Mining, Construction, Infrastructure" },
    ],
    faqs: [
      {
        q: "What is project cargo in logistics?",
        a: "Project cargo refers to transporting oversized, heavy, or complex shipments such as machinery, energy equipment, or industrial components.",
      },
      {
        q: "Do you handle out-of-gauge (OOG) shipments?",
        a: "Yes, we specialize in out-of-gauge cargo using flat-rack containers, breakbulk vessels, and specialized trailers.",
      },
      {
        q: "Can you arrange multimodal project logistics?",
        a: "Absolutely, we integrate road, rail, air, and ocean freight to deliver tailored multimodal project solutions.",
      },
      {
        q: "What industries use project cargo services?",
        a: "We serve power, oil & gas, mining, renewable energy, infrastructure, and large-scale construction industries.",
      },
      {
        q: "Do you conduct route surveys before transport?",
        a: "Yes, we perform engineering route studies, lifting simulations, and risk assessments before every project.",
      },
      {
        q: "How do you ensure safety during heavy-lift transport?",
        a: "We follow international HSSE standards, use certified rigging gear, and employ experienced heavy-lift operators.",
      },
      {
        q: "Do you assist with permits and customs clearance?",
        a: "Yes, we handle all documentation, permits, and customs compliance to avoid delays.",
      },
      {
        q: "Can you transport project cargo internationally?",
        a: "Yes, we provide global project logistics with access to major ports, airports, and inland connections.",
      },
      {
        q: "What’s the difference between breakbulk and project cargo?",
        a: "Breakbulk refers to general non-containerized cargo, while project cargo requires tailored solutions for oversized and complex shipments.",
      },
      {
        q: "How can I get a quote for project cargo services?",
        a: "Simply provide shipment details, dimensions, and destination, and our team will prepare a tailored project logistics plan and cost estimate.",
      },
    ],
    related: [
      { title: "Road Freight", href: "/services/road-freight" },
      { title: "Ship Freight", href: "/services/ship-freight" },
      { title: "Customs Clearance", href: "/services/customs-clearance" },
    ],
    cta: {
      heading: "Need engineered cargo support?",
      subheading:
        "Mitigate risk and keep complex moves on schedule with our project team.",
      buttonText: "Plan a Project",
      buttonHref: "/request-quote",
    },
  },
  doorToDoor: {
    slug: "door-to-door",
    title: "Door-to-Door Delivery",
    tagline: "Seamless Pickup to Final-Mile Handoff",
    intro: `Simplify your logistics with our fully managed door-to-door delivery services. We coordinate origin pickup, multimodal transport, customs clearance, and last-mile delivery through a single control tower and a unified tracking interface. From a small parcel to a full container, we ensure your shipment reaches its destination in the UAE or anywhere across 190+ countries with complete transparency and reliability.`,
    heroImage: "/images/door-to-door-hero.jpg",
    benefits: [
      {
        title: "Single Point of Coordination",
        description:
          "A dedicated manager and unified communication across all transport milestones, eliminating complexity.",
        icon: "tracking",
      },
      {
        title: "Global Multimodal Flexibility",
        description:
          "Seamless integration of air, sea, road, and courier services to fit any shipment profile and budget.",
        icon: "capacity",
      },
      {
        title: "Integrated Customs & Compliance",
        description:
          "Hassle-free customs documentation handling and clearance orchestration for smooth border crossing.",
        icon: "secure",
      },
      {
        title: "End-to-End Digital Visibility",
        description:
          "Real-time event tracking, predictive ETAs, and performance KPIs through a single, unified portal.",
        icon: "special",
      },
    ],
    process: [
      {
        step: 1,
        title: "Origin Pickup & Consolidation",
        text: "Scheduled shipment collection, packaging verification, and consolidation at our origin facility.",
      },
      {
        step: 2,
        title: "Multimodal Linehaul Execution",
        text: "Primary mode of transport (air, sea, or road) with active monitoring and status updates.",
      },
      {
        step: 3,
        title: "Customs Clearance & Handover",
        text: "Proactive customs entry, deconsolidation, and scheduling for last-mile delivery.",
      },
      {
        step: 4,
        title: "Final Delivery & Proof of Delivery (POD)",
        text: "Recipient delivery confirmation, electronic POD capture, and a final service review.",
      },
    ],
    stats: [
      { label: "On-Time Final Mile Delivery", value: "96%" },
      { label: "Global Destinations Covered", value: "190+" },
      { label: "Average Touchpoints Reduced", value: "38%" },
      { label: "Client Retention Rate", value: "94%" },
    ],
    faqs: [
      {
        q: "What is door-to-door delivery?",
        a: "Door-to-door delivery is a service where we manage the entire shipment process, from pickup at the origin to delivery at the final destination.",
      },
      {
        q: "Do you handle both domestic and international door-to-door services?",
        a: "Yes, we provide door-to-door services within the UAE and to over 190 countries worldwide.",
      },
      {
        q: "Is customs clearance included in the door-to-door service?",
        a: "Yes, our service includes managing all customs documentation and clearance procedures for you.",
      },
      {
        q: "Can I track my door-to-door shipment?",
        a: "Absolutely. You get end-to-end visibility through our unified tracking portal with real-time updates.",
      },
      {
        q: "What shipping modes do you use for door-to-door?",
        a: "We use a flexible combination of air, sea, and road freight to create the most efficient route for your shipment.",
      },
      {
        q: "Do you handle returns or reverse logistics?",
        a: "Yes, we can integrate reverse logistics and returns management into your door-to-door solution.",
      },
      {
        q: "Is this service suitable for e-commerce businesses?",
        a: "Yes, it's ideal for e-commerce, as it simplifies fulfillment and provides a seamless delivery experience for your customers.",
      },
      {
        q: "Are customs duties and taxes included in the price?",
        a: "We offer options for both DDP (Delivered Duty Paid) and DAP (Delivered at Place) based on your preference.",
      },
      {
        q: "Can you consolidate multiple small shipments?",
        a: "Yes, we can consolidate multiple SKUs or small packages at the origin to optimize cost and handling.",
      },
      {
        q: "How do I get a quote for door-to-door delivery?",
        a: "Simply provide the origin and destination addresses, along with shipment details, to receive a comprehensive quote.",
      },
    ],
    related: [
      { title: "Air Freight", href: "/services/air-freight" },
      { title: "Road Freight", href: "/services/road-freight" },
      { title: "Warehousing & Storage", href: "/services/warehousing-storage" },
    ],
    cta: {
      heading: "Need End-to-End Shipping Simplicity?",
      subheading:
        "Let us orchestrate every milestone from pickup through final delivery, so you can focus on your business.",
      buttonText: "Simplify My Shipping",
      buttonHref: "/request-quote",
    },
  },
};

export function getService(key) {
  return servicesData[key];
}
