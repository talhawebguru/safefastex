// Structured services data for detailed service pages
export const servicesData = {
  roadFreight: {
    slug: "road-freight",
    title: "Road Freight",
    tagline: "Reliable domestic & cross-border trucking solutions",
    intro: `We provide flexible, dependable and cost-effective road freight services across regional and international corridors. From full truckloads (FTL) to less-than-truckload (LTL), temperature-controlled and high-value cargo, our network and tracking systems ensure your goods move efficiently and safely.`,
    heroImage: "/images/road-freight-hero.jpg", // placeholder path
    benefits: [
      {
        title: "Flexible Capacity",
        description: "Scalable FTL and LTL options with optimized load planning to reduce cost per mile.",
        icon: "capacity",
      },
      {
        title: "Real-Time Tracking",
        description: "Live GPS tracking portal, automated alerts, and milestone visibility for every shipment.",
        icon: "tracking",
      },
      {
        title: "Secure & Compliant",
        description: "High-security protocols, route risk assessments, and customs documentation support.",
        icon: "secure",
      },
      {
        title: "Specialized Handling",
        description: "Refrigerated, hazardous, oversized, and high-value cargo capabilities with certified teams.",
        icon: "special",
      },
    ],
    process: [
      {
        step: 1,
        title: "Request & Assessment",
        text: "We gather shipment details, analyze constraints, and propose optimized routing." ,
      },
      {
        step: 2,
        title: "Planning & Scheduling",
        text: "Loads are consolidated, documents prepared, and transit timelines confirmed.",
      },
      {
        step: 3,
        title: "In-Transit Monitoring",
        text: "Live GPS visibility, proactive exception management, and compliance oversight.",
      },
      {
        step: 4,
        title: "Delivery & POD",
        text: "Final-mile coordination, electronic proof of delivery, and performance reporting.",
      },
    ],
    stats: [
      { label: "On-time delivery", value: "97%" },
      { label: "Active trucks", value: "850+" },
      { label: "Annual shipments", value: "120K" },
      { label: "Countries covered", value: "22" },
    ],
    faqs: [
      {
        q: "Do you handle temperature-controlled road freight?",
        a: "Yes, we operate a dedicated fleet with validated cold-chain monitoring and contingency routing." ,
      },
      {
        q: "Can I track my shipment live?",
        a: "All road moves include GPS visibility, status events, and exception alerts via our client portal.",
      },
      {
        q: "What is your transit coverage?",
        a: "We service major corridors nationally plus cross-border lanes into 22 countries with bonded solutions.",
      },
      {
        q: "Do you support high-value cargo security?",
        a: "Yes, including geofenced routing, dual-driver, escort services, and sealed trailer protocols.",
      },
    ],
    related: [
      { title: "Ship Freight", href: "/services/ship-freight" },
      { title: "Air Freight", href: "/services/air-freight" },
      { title: "Project Cargo", href: "/services/project-cargo" },
    ],
    cta: {
      heading: "Need a dependable overland partner?",
      subheading: "Talk to our road freight specialists today for a tailored capacity and routing plan.",
      buttonText: "Request a Quote",
      buttonHref: "/request-quote",
    },
  },
  airFreight: {
    slug: "air-freight",
    title: "Air Freight",
    tagline: "Time-critical global air cargo solutions",
    intro: `Our air freight services prioritize speed, reliability and end-to-end visibility. Whether you need next-flight-out (NFO), consolidated freight, temperature-controlled handling or secure high-value transport, we orchestrate capacity across strategic hubs and carrier partnerships to keep your supply chain agile.`,
    heroImage: "/images/air-freight-hero.jpg",
    benefits: [
      {
        title: "Expedited Transit",
        description: "Premium and deferred service tiers aligned to urgency and budget.",
        icon: "speed",
      },
      {
        title: "Global Coverage",
        description: "Multi-hub network with space protection across major trade lanes.",
        icon: "capacity",
      },
      {
        title: "Temperature Control",
        description: "Validated cold-chain processes for pharmaceuticals & perishables.",
        icon: "special",
      },
      {
        title: "Security & Compliance",
        description: "Regulated agent standards, chain-of-custody and customs expertise.",
        icon: "secure",
      },
    ],
    process: [
      { step: 1, title: "Booking & Capacity", text: "Route design, carrier allocation and priority classification." },
      { step: 2, title: "Cargo Acceptance", text: "Documentation validation, screening and consolidation at origin hub." },
      { step: 3, title: "Airline Uplift", text: "Departure monitoring, transit milestone tracking and exception alerts." },
      { step: 4, title: "Customs & Final Mile", text: "Arrival clearance, deconsolidation and delivery to consignee." },
    ],
    stats: [
      { label: "Average transit savings", value: "18%" },
      { label: "Global gateways", value: "45" },
      { label: "Temp-control lanes", value: "70+" },
      { label: "Regulated agents", value: "100%" },
    ],
    faqs: [
      { q: "Do you offer next-flight-out services?", a: "Yes, with 24/7 control tower oversight and automated status feeds." },
      { q: "Can you handle pharma shipments?", a: "We maintain GDP-aligned handling with calibrated monitoring devices." },
      { q: "How is cargo security managed?", a: "Screening compliance, tamper-evident seals, and chain-of-custody logging." },
      { q: "Are there consolidation options?", a: "Yes, we optimize load factors through scheduled multi-shipper consolidations." },
    ],
    related: [
      { title: "Road Freight", href: "/services/road-freight" },
      { title: "Ship Freight", href: "/services/ship-freight" },
      { title: "Cold Chain Logistics", href: "/services/cold-chain" },
    ],
    cta: {
      heading: "Need urgent international uplift?",
      subheading: "Engage our air solutions team for priority capacity and real-time visibility.",
      buttonText: "Start a Shipment",
      buttonHref: "/request-quote",
    },
  },
  shipFreight: {
    slug: "ship-freight",
    title: "Ship Freight",
    tagline: "Scalable global ocean freight & consolidation",
    intro: `We deliver end-to-end ocean logistics across major trade lanes with space protection, schedule integrity and multi-carrier flexibility. From full container load (FCL) to less-than-container (LCL) consolidation, project / oversized moves and reefer cargo, our optimization and documentation workflows reduce landed cost and risk.`,
    heroImage: "/images/ship-freight-hero.jpg",
    benefits: [
      { title: "Capacity Assurance", description: "Carrier diversification and allocation management to mitigate rollovers.", icon: "capacity" },
      { title: "Cost Optimization", description: "Consolidation, routing alternatives and container utilization analytics.", icon: "tracking" },
      { title: "Project & OOG Handling", description: "Heavy-lift engineering, breakbulk and out-of-gauge coordination.", icon: "special" },
      { title: "Customs & Compliance", description: "Trade advisory, HS classification and origin documentation support.", icon: "secure" },
    ],
    process: [
      { step: 1, title: "Routing & Rate Design", text: "Sailing schedule evaluation, carrier mix and consolidation strategy." },
      { step: 2, title: "Documentation & Booking", text: "Bill of lading, compliance checks and container allocation." },
      { step: 3, title: "Port Operations", text: "Container gating, loading confirmation and milestone visibility." },
      { step: 4, title: "Arrival & Delivery", text: "Customs clearance, deconsolidation and onward distribution." },
    ],
    stats: [
      { label: "Average container utilization", value: "92%" },
      { label: "Global ports covered", value: "180+" },
      { label: "Annual TEUs", value: "45K" },
      { label: "LCL consolidation hubs", value: "35" },
    ],
    faqs: [
      { q: "Do you provide LCL consolidation?", a: "Yes, with fixed weekly schedules across major export origins." },
      { q: "Can you handle oversized cargo?", a: "We coordinate flat rack, open top, breakbulk and heavy-lift solutions." },
      { q: "How do you mitigate rollover risk?", a: "Carrier diversity, forecast alignment and proactive allocation management." },
      { q: "Is customs advisory included?", a: "Yes, including documentation review and compliance monitoring." },
    ],
    related: [
      { title: "Road Freight", href: "/services/road-freight" },
      { title: "Air Freight", href: "/services/air-freight" },
      { title: "Customs Clearance", href: "/services/customs-clearance" },
    ],
    cta: {
      heading: "Optimize your ocean strategy",
      subheading: "Engage our sea freight team to balance transit reliability and landed cost.",
      buttonText: "Request Capacity Plan",
      buttonHref: "/request-quote",
    },
  },
  warehousingStorage: {
    slug: "warehousing-storage",
    title: "Warehousing & Storage",
    tagline: "Secure, scalable inventory and distribution hubs",
    intro: `Our warehousing solutions provide multi-temperature, secure and strategically located facilities to optimize inventory turns, fulfillment speed and cost control. From pallet storage to value-added services we tailor space and workflows around your operational model.`,
    heroImage: "/images/warehousing-hero.jpg",
    benefits: [
      { title: "Scalable Space", description: "Flexible ambient, chilled and frozen capacity aligned to demand.", icon: "capacity" },
      { title: "Inventory Visibility", description: "Real-time stock, batch and expiry tracking via integrated WMS.", icon: "tracking" },
      { title: "Value-Added Services", description: "Kitting, relabeling, QC inspection and light assembly options.", icon: "special" },
      { title: "Enhanced Security", description: "CCTV, controlled access zones and audit-ready compliance.", icon: "secure" },
    ],
    process: [
      { step: 1, title: "Onboarding & Layout", text: "Slotting design, system integration and KPI baselining." },
      { step: 2, title: "Inbound & Putaway", text: "Receipt validation, scanning and optimized location assignment." },
      { step: 3, title: "Order Fulfillment", text: "Pick-pack, VAS execution and dispatch preparation." },
      { step: 4, title: "Performance & Optimization", text: "Cycle counts, reporting and continuous improvement loops." },
    ],
    stats: [
      { label: "Accuracy rate", value: "99.8%" },
      { label: "Global facilities", value: "60+" },
      { label: "Avg. order cycle", value: "<4h" },
      { label: "Temp zones", value: "3" },
    ],
    faqs: [
      { q: "Do you support bonded storage?", a: "Yes, select facilities are customs bonded with deferred duty options." },
      { q: "Can you handle relabeling?", a: "Yes, plus kitting, light assembly and QC inspection." },
      { q: "Is WMS data accessible?", a: "Clients access real-time dashboards and API data feeds." },
      { q: "Do you manage cold storage?", a: "Yes, multi-temperature zones including frozen, chilled and ambient." },
    ],
    related: [
      { title: "Road Freight", href: "/services/road-freight" },
      { title: "Customs Clearance", href: "/services/customs-clearance" },
      { title: "Cold Chain Logistics", href: "/services/cold-chain" },
    ],
    cta: {
      heading: "Need scalable warehousing?",
      subheading: "Unlock flexible storage, fulfillment and value-added services with our network.",
      buttonText: "Discuss Solutions",
      buttonHref: "/request-quote",
    },
  },
  customsClearance: {
    slug: "customs-clearance",
    title: "Customs Clearance",
    tagline: "Frictionless cross-border compliance & documentation",
    intro: `We streamline import and export clearance with proactive documentation review, HS classification support, duty optimization and digital milestone visibility—reducing delays, penalties and administrative overhead for your global shipments.`,
    heroImage: "/images/customs-hero.jpg",
    benefits: [
      { title: "Documentation Accuracy", description: "Pre-clearance file validation to prevent holds and queries.", icon: "tracking" },
      { title: "Duty Optimization", description: "Classification review, FTA applicability and cost recovery guidance.", icon: "capacity" },
      { title: "Regulatory Compliance", description: "Customs, trade and restricted party screening workflows.", icon: "secure" },
      { title: "Digital Visibility", description: "Event-driven status updates and clearance milestone reporting.", icon: "special" },
    ],
    process: [
      { step: 1, title: "Document Intake", text: "Gather invoices, packing lists, certificates and permits." },
      { step: 2, title: "Classification & Review", text: "Assign HS codes, validate valuation and origin data." },
      { step: 3, title: "Submission & Follow-up", text: "File entries, monitor agency response and resolve queries." },
      { step: 4, title: "Release & Recordkeeping", text: "Issue clearance confirmation and archive compliance data." },
    ],
    stats: [
      { label: "Clearance accuracy", value: "99.5%" },
      { label: "Avg. clearance time", value: "<6h" },
      { label: "FTA reviews", value: "3K+" },
      { label: "Audit exceptions", value: "<1%" },
    ],
    faqs: [
      { q: "Can you classify complex products?", a: "Yes, including multi-component and regulatory-sensitive goods." },
      { q: "Do you assist with duty recovery?", a: "We evaluate FTA, drawback and re-export relief eligibility." },
      { q: "Is restricted party screening included?", a: "Yes, automated lists screening is integrated into workflows." },
      { q: "Do you handle temporary imports?", a: "Yes, including ATA Carnets and re-export documentation." },
    ],
    related: [
      { title: "Air Freight", href: "/services/air-freight" },
      { title: "Ship Freight", href: "/services/ship-freight" },
      { title: "Road Freight", href: "/services/road-freight" },
    ],
    cta: {
      heading: "Need faster clearance?",
      subheading: "Reduce border delays and duty cost with our compliance specialists.",
      buttonText: "Start Consultation",
      buttonHref: "/request-quote",
    },
  },
  coldChain: {
    slug: "cold-chain",
    title: "Cold Chain Logistics",
    tagline: "Validated temperature-controlled pharma & perishables",
    intro: `We protect product integrity across the entire cold chain lifecycle using GDP-aligned procedures, calibrated monitoring devices, thermal packaging and exception management to maintain required temperature ranges for sensitive cargo.`,
    heroImage: "/images/cold-chain-hero.jpg",
    benefits: [
      { title: "End-to-End Control", description: "Pre-conditioned packaging, lane validation and real-time telemetry.", icon: "special" },
      { title: "Regulatory Alignment", description: "GDP, GxP and quality documentation support.", icon: "secure" },
      { title: "Multi-Temp Capability", description: "Frozen, chilled and controlled ambient range management.", icon: "capacity" },
      { title: "Exception Response", description: "Automated alerts and intervention protocols for excursions.", icon: "tracking" },
    ],
    process: [
      { step: 1, title: "Lane Design", text: "Risk assess origin/destination infrastructure and transit durations." },
      { step: 2, title: "Packaging & Prep", text: "Thermal solution selection, pre-conditioning and loading validation." },
      { step: 3, title: "In-Transit Monitoring", text: "Live temperature & location telemetry with alert thresholds." },
      { step: 4, title: "Receipt & QA", text: "Arrival temperature check, data logging and quality reporting." },
    ],
    stats: [
      { label: "Excursion prevention", value: "98%" },
      { label: "Validated lanes", value: "120+" },
      { label: "Temp data points/day", value: "35K" },
      { label: "Quality deviations", value: "<0.5%" },
    ],
    faqs: [
      { q: "Do you supply data loggers?", a: "Yes, calibrated IoT and disposable devices are available." },
      { q: "Can you manage CRT & 2-8°C?", a: "Yes, plus frozen and deep-frozen ranges with proper packaging." },
      { q: "How are alerts handled?", a: "24/7 control tower intervention based on predefined SOP triggers." },
      { q: "Do you audit packaging?", a: "Yes, performance validation and lane requalification are standard." },
    ],
    related: [
      { title: "Air Freight", href: "/services/air-freight" },
      { title: "Road Freight", href: "/services/road-freight" },
      { title: "Warehousing & Storage", href: "/services/warehousing-storage" },
    ],
    cta: {
      heading: "Protect your temperature cargo",
      subheading: "Improve integrity and compliance across your cold supply chain.",
      buttonText: "Assess a Lane",
      buttonHref: "/request-quote",
    },
  },
  projectCargo: {
    slug: "project-cargo",
    title: "Project Cargo",
    tagline: "Engineering-led oversized & heavy-lift logistics",
    intro: `We manage complex, out-of-gauge and heavy-lift cargo from feasibility through execution—coordinating multimodal routing, permitting, rigging and site delivery under strict safety and schedule controls.`,
    heroImage: "/images/project-cargo-hero.jpg",
    benefits: [
      { title: "Route Engineering", description: "Pre-move surveys, clearance studies and load distribution analysis.", icon: "tracking" },
      { title: "Heavy-Lift Handling", description: "Specialized cranes, SPMTs and rigging supervision.", icon: "special" },
      { title: "Multimodal Integration", description: "Barge, rail, road and breakbulk sequencing.", icon: "capacity" },
      { title: "Risk & Compliance", description: "Permits, escorts, HSE oversight and contingency planning.", icon: "secure" },
    ],
    process: [
      { step: 1, title: "Feasibility & Survey", text: "Dimensional validation, route and infrastructure assessment." },
      { step: 2, title: "Planning & Permits", text: "Equipment selection, regulatory approvals and scheduling." },
      { step: 3, title: "Execution & Transport", text: "Modal coordination, load securement and milestone tracking." },
      { step: 4, title: "Delivery & Review", text: "Site placement, demobilization and performance reporting." },
    ],
    stats: [
      { label: "Project success rate", value: "100%" },
      { label: "Max lift executed", value: "480t" },
      { label: "OOG corridors mapped", value: "300+" },
      { label: "Incident rate", value: "0" },
    ],
    faqs: [
      { q: "Do you perform route surveys?", a: "Yes, including bridge load and clearance assessments." },
      { q: "Can you coordinate cranes?", a: "Yes, plus rigging, lifting studies and onsite supervision." },
      { q: "Do you manage permits & escorts?", a: "End-to-end including police, utility and municipal coordination." },
      { q: "Is marine chartering included?", a: "Yes, we arrange breakbulk and barge capacity where required." },
    ],
    related: [
      { title: "Road Freight", href: "/services/road-freight" },
      { title: "Ship Freight", href: "/services/ship-freight" },
      { title: "Customs Clearance", href: "/services/customs-clearance" },
    ],
    cta: {
      heading: "Need engineered cargo support?",
      subheading: "Mitigate risk and keep complex moves on schedule with our project team.",
      buttonText: "Plan a Project",
      buttonHref: "/request-quote",
    },
  },
  doorToDoor: {
    slug: "door-to-door",
    title: "Door-to-Door Delivery",
    tagline: "Seamless pickup to final-mile handoff",
    intro: `We simplify logistics with fully managed door-to-door solutions—coordinating origin pickup, multimodal transport, customs clearance and last-mile delivery through a single control tower and unified tracking interface.`,
    heroImage: "/images/door-to-door-hero.jpg",
    benefits: [
      { title: "Single Point Coordination", description: "Unified communication across all transport milestones.", icon: "tracking" },
      { title: "Mode Flexibility", description: "Air, sea, road and courier integration for any profile.", icon: "capacity" },
      { title: "Customs & Compliance", description: "Documentation handling and clearance orchestration.", icon: "secure" },
      { title: "Visibility & Reporting", description: "Real-time events, ETA prediction and performance KPIs.", icon: "special" },
    ],
    process: [
      { step: 1, title: "Pickup & Consolidation", text: "Shipment collection, packaging verification and staging." },
      { step: 2, title: "Linehaul Execution", text: "Primary mode transport with active monitoring." },
      { step: 3, title: "Customs & Handover", text: "Entry clearance, deconsolidation and last-mile scheduling." },
      { step: 4, title: "Delivery & POD", text: "Recipient confirmation, POD capture and service review." },
    ],
    stats: [
      { label: "On-time final mile", value: "96%" },
      { label: "Global destinations", value: "190+" },
      { label: "Avg. touchpoints reduced", value: "38%" },
      { label: "Client retention", value: "94%" },
    ],
    faqs: [
      { q: "Do you handle returns?", a: "Yes, reverse logistics workflows can be integrated." },
      { q: "Can you support multi-sku consolidation?", a: "Yes, with carton optimization and labeling." },
      { q: "Is tracking unified?", a: "All milestone events feed into a single portal view." },
      { q: "Are customs fees included?", a: "Options for DDP/DAP models based on Incoterms preference." },
    ],
    related: [
      { title: "Air Freight", href: "/services/air-freight" },
      { title: "Road Freight", href: "/services/road-freight" },
      { title: "Warehousing & Storage", href: "/services/warehousing-storage" },
    ],
    cta: {
      heading: "Need end-to-end simplicity?",
      subheading: "Let us orchestrate every milestone from pickup through final delivery.",
      buttonText: "Simplify My Shipping",
      buttonHref: "/request-quote",
    },
  },
};

export function getService(key) {
  return servicesData[key];
}
