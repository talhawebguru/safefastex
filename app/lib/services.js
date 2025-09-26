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
      { title: "Train Freight", href: "/services/train-freight" },
      { title: "Air Freight", href: "/services/air-freight" },
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
      { title: "Train Freight", href: "/services/train-freight" },
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
      { title: "Train Freight", href: "/services/train-freight" },
      { title: "Air Freight", href: "/services/air-freight" },
    ],
    cta: {
      heading: "Optimize your ocean strategy",
      subheading: "Engage our sea freight team to balance transit reliability and landed cost.",
      buttonText: "Request Capacity Plan",
      buttonHref: "/request-quote",
    },
  },
  trainFreight: {
    slug: "train-freight",
    title: "Train Freight",
    tagline: "Sustainable long-haul rail & intermodal",
    intro: `Rail freight provides a cost-efficient, lower-emission backbone for bulk, palletized and containerized cargo across strategic inland corridors. We integrate rail, road drayage and terminal operations to create resilient intermodal flows with predictable transit and carbon reduction benefits.`,
    heroImage: "/images/train-freight-hero.jpg",
    benefits: [
      { title: "Lower Emissions", description: "Rail modal shift programs to reduce CO₂ per ton-km versus road only.", icon: "special" },
      { title: "Bulk & Container Flex", description: "Support for boxcars, hopper, tank and intermodal containerized freight.", icon: "capacity" },
      { title: "Network Visibility", description: "Milestone tracking with proactive exception management across nodes.", icon: "tracking" },
      { title: "Integrated Drayage", description: "First/last-mile trucking synchronization for seamless terminal transfers.", icon: "secure" },
    ],
    process: [
      { step: 1, title: "Lane Engineering", text: "Evaluate volumes, schedules and modal breakeven thresholds." },
      { step: 2, title: "Intermodal Planning", text: "Container positioning, rail slot reservation and drayage pairing." },
      { step: 3, title: "In-Transit Coordination", text: "Terminal dwell monitoring, delay mitigation and status reporting." },
      { step: 4, title: "Final Delivery & KPI", text: "Last-mile execution plus performance and emissions analytics." },
    ],
    stats: [
      { label: "Average emission reduction", value: "62%" },
      { label: "Active rail corridors", value: "55" },
      { label: "Intermodal terminals", value: "140+" },
      { label: "On-time intermodal", value: "95%" },
    ],
    faqs: [
      { q: "Is rail slower than road?", a: "Transit can be competitive on long-haul lanes with improved predictability." },
      { q: "Can you bundle drayage?", a: "Yes, integrated first/last-mile is standard in our intermodal model." },
      { q: "Do you handle hazardous cargo?", a: "Select certified corridors allow regulated chemical and hazmat loads." },
      { q: "How do you track rail milestones?", a: "API feeds, terminal events and predictive delay flagging in our portal." },
    ],
    related: [
      { title: "Road Freight", href: "/services/road-freight" },
      { title: "Ship Freight", href: "/services/ship-freight" },
      { title: "Air Freight", href: "/services/air-freight" },
    ],
    cta: {
      heading: "Shift volume to rail",
      subheading: "Unlock cost stability and emissions gains with an intermodal assessment.",
      buttonText: "Schedule Analysis",
      buttonHref: "/request-quote",
    },
  },
};

export function getService(key) {
  return servicesData[key];
}
