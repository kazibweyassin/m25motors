export const GOOGLE_PROFILE_PLACEHOLDER = "[PROFILE URL]";

export const siteConfig = {
  businessName: "M25 Motors",
  location: "London",
  // Add a street address only after the business confirms it.
  address: "",
  phone: "+44 7803 080701",
  // Leave blank until the business confirms this mailbox is monitored.
  email: "",
  whatsapp: "+44 7803 080701",
  openingHours: "",
  googleBusinessProfile: "",
  siteUrl: "https://m25motors.co.uk",
  serviceArea: "London and surrounding areas",
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  whenToBook: string;
  ctaLabel: string;
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "vehicle-servicing",
    title: "Vehicle Servicing",
    shortDescription: "Routine maintenance that keeps your vehicle reliable, efficient and road-ready.",
    description:
      "Our servicing work covers key checks, fluid inspections, filter replacement, and vehicle health reviews to help keep your car running smoothly between repairs. We tailor maintenance recommendations to the condition of the vehicle and the guidance set out by the manufacturer.",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
    whenToBook: "Book a vehicle service if your car is due for routine maintenance, has a warning light, or if you want a thorough inspection before longer journeys.",
    ctaLabel: "Request a service quote",
    faqs: [
      {
        question: "What does a routine service include?",
        answer:
          "A routine service is tailored to the vehicle and typically includes checks on essential fluid levels, filters, key components, and general vehicle health. We will explain any findings before proceeding.",
      },
      {
        question: "Can I book a service without a fault?",
        answer:
          "Yes. Many drivers arrange maintenance before a long trip or at a scheduled interval so the vehicle remains reliable and any developing issues are caught early.",
      },
    ],
  },
  {
    slug: "diagnostics",
    title: "Vehicle Diagnostics",
    shortDescription: "Fault finding for warning lights, electrical issues and drivability problems.",
    description:
      "Diagnostic enquiries focus on warning lights, electrical faults and drivability issues. Share the symptoms and vehicle details so the garage can discuss how the fault should be assessed before a repair path is considered.",
    image:
      "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1200&auto=format&fit=crop",
    whenToBook: "Book diagnostics if a warning light is on, the vehicle is running poorly, or an electrical fault is affecting performance.",
    ctaLabel: "Book a diagnostic check",
    faqs: [
      {
        question: "Do you diagnose without inspecting the vehicle?",
        answer:
          "No. Fault codes provide guidance, but a proper inspection is still needed before recommending repair work. We use diagnostics as one part of the overall assessment.",
      },
      {
        question: "Will I know the cause before the repair?",
        answer:
          "Yes. We explain the findings, the likely cause, and the repair options clearly before moving ahead with any work.",
      },
    ],
  },
  {
    slug: "brake-repairs",
    title: "Brake Repairs",
    shortDescription: "Brake inspections, repairs and replacements to keep stopping performance dependable.",
    description:
      "Brake problems should be taken seriously. We inspect the condition of pads, discs, callipers, fluid and associated components to identify wear, noise, vibration, or poor stopping performance before recommending the appropriate repair work.",
    image:
      "https://images.unsplash.com/photo-1568644305664-5c7c2f88fa65?q=80&w=1200&auto=format&fit=crop",
    whenToBook: "Contact the garage if the brakes are squealing, pulling, vibrating, or if the vehicle requires a brake inspection.",
    ctaLabel: "Book a brake inspection",
    faqs: [
      {
        question: "How do I know if my brakes need attention?",
        answer:
          "Common signs include squealing, grinding, reduced braking efficiency, or the vehicle pulling to one side. A brake inspection gives a clear picture of the condition.",
      },
      {
        question: "Can a brake issue be repaired without replacing everything?",
        answer:
          "Sometimes, yes. We carry out the work required based on the vehicle's condition and explain what is needed before proceeding.",
      },
    ],
  },
  {
    slug: "engine-repairs",
    title: "Engine Repairs",
    shortDescription: "Mechanical diagnosis and repair work for engine performance and reliability issues.",
    description:
      "Engine issues can range from fluid leaks and performance concerns to overheating and abnormal noise. We assess the fault, explain the likely cause, and recommend the right repair path based on what the vehicle needs.",
    image:
      "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?q=80&w=1200&auto=format&fit=crop",
    whenToBook: "Book an engine inspection if the car is misfiring, overheating, using oil, or showing signs of reduced performance.",
    ctaLabel: "Request an engine assessment",
    faqs: [
      {
        question: "What kind of engine problems do you handle?",
        answer:
          "We assess a wide range of engine concerns, including performance issues, leaks, noise, overheating, and general reliability problems needing diagnosis and repair.",
      },
      {
        question: "Do you always recommend full engine replacement?",
        answer:
          "No. We assess the exact fault and discuss the most appropriate repair or component replacement based on the inspection findings.",
      },
    ],
  },
  {
    slug: "clutch-and-transmission",
    title: "Clutch & Transmission",
    shortDescription: "Clutch replacements and gearbox-related diagnostics for drivability issues.",
    description:
      "Transmission and clutch complaints often show up as slipping, difficult gear changes, rattling, or a loss of drive. We diagnose the cause before giving a clear recommendation and carrying out any required work.",
    image:
      "https://images.unsplash.com/photo-1711199694531-e982a79ea381?auto=format&fit=crop&w=1200&q=80",
    whenToBook: "Contact the garage if the clutch slips, the gear changes feel rough, or the vehicle is struggling to pull away.",
    ctaLabel: "Arrange a clutch inspection",
    faqs: [
      {
        question: "What are common clutch warning signs?",
        answer:
          "Common signs include slipping, a high biting point, juddering when pulling away, and unusual noises while changing gear.",
      },
      {
        question: "Can you diagnose gearbox issues before replacing parts?",
        answer:
          "Yes. We use inspection and diagnostic checks to confirm the likely issue before recommending repair work or component replacement.",
      },
    ],
  },
  {
    slug: "mot-preparation-and-repairs",
    title: "MOT Preparation & Repairs",
    shortDescription: "Checks and repair work designed to help your vehicle pass its MOT and stay roadworthy.",
    description:
      "MOT preparation helps identify issues before the official test. We can advise on the faults most likely to affect a pass, carry out the necessary repairs, and help ensure the vehicle is ready for inspection.",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    whenToBook: "Book in advance if your MOT is due or if you want to resolve existing faults before the test date.",
    ctaLabel: "Book MOT preparation",
    faqs: [
      {
        question: "Do you guarantee a pass?",
        answer:
          "No. We can prepare the vehicle and explain what needs attention, but the final MOT outcome is determined by the official inspection.",
      },
      {
        question: "How early should I book?",
        answer:
          "As soon as you know the test date or if a vehicle has recurring faults, it is helpful to book a check well in advance.",
      },
    ],
  },
  {
    slug: "air-conditioning",
    title: "Air Conditioning",
    shortDescription: "Aircon diagnostics, recharge and system checks for comfort and efficiency.",
    description:
      "Air conditioning issues can be caused by low refrigerant, leaks, or failing components. We inspect the system and advise on the most effective repair or recharge based on the inspection results.",
    image:
      "https://images.unsplash.com/photo-1542399204-b8dd4af5113d?auto=format&fit=crop&w=1200&q=80",
    whenToBook: "Book if the cabin air is not cooling properly, there is a weak airflow, or the system is not performing as expected.",
    ctaLabel: "Request AC service",
    faqs: [
      {
        question: "How do I know if my air con needs attention?",
        answer:
          "Weak cooling, warm air, noisy operation, or a musty smell can all indicate an issue within the system.",
      },
      {
        question: "Do you test before recharging the system?",
        answer:
          "Yes. We check the system condition and explain whether a recharge, leak check, or component repair is needed.",
      },
    ],
  },
  {
    slug: "tyres-and-suspension",
    title: "Tyres & Suspension",
    shortDescription: "Tyre and suspension checks for grip, comfort and vehicle safety.",
    description:
      "Tyre condition and suspension wear affect road holding, comfort and handling. We inspect tyres, wheel alignment concerns, and suspension components to recommend the right next steps based on the vehicle and its condition.",
    image:
      "https://images.unsplash.com/photo-1664263763412-e22fb3c8af93?auto=format&fit=crop&w=1200&q=80",
    whenToBook: "Book a tyre or suspension inspection if you notice uneven wear, vibration, steering pull, or poor ride comfort.",
    ctaLabel: "Book a tyre check",
    faqs: [
      {
        question: "How often should tyres be inspected?",
        answer:
          "Tyres should be checked regularly for tread condition, damage and pressure, particularly before longer journeys or seasonal changes.",
      },
      {
        question: "Can suspension issues affect steering?",
        answer:
          "Yes. Worn components can affect ride quality, steering feel and tyre wear, so a proper inspection helps identify the cause early.",
      },
    ],
  },
  {
    slug: "electrical-faults",
    title: "Electrical Faults",
    shortDescription: "Fault finding and repair work for lighting, charging, power and wiring issues.",
    description:
      "Electrical faults can affect infotainment, lighting, charging, starting, and other vehicle systems. We diagnose the source of the issue carefully and explain the repair options before work begins.",
    image:
      "https://images.unsplash.com/photo-1632733711679-529326f6db12?auto=format&fit=crop&w=1200&q=80",
    whenToBook: "Contact the garage if a warning light is on, the battery is draining, or there are intermittent electrical faults.",
    ctaLabel: "Request an electrical diagnosis",
    faqs: [
      {
        question: "Do you fix battery and charging faults?",
        answer:
          "Yes. We inspect the system to confirm whether the issue is related to the battery, alternator, wiring, or another component.",
      },
      {
        question: "Can recurring faults be traced without guesswork?",
        answer:
          "We work methodically to isolate electrical issues using the correct checks and diagnostics before recommending a repair.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getPhoneHref() {
  const phoneDigits = siteConfig.phone.replace(/\D/g, "");
  return phoneDigits ? `tel:${phoneDigits}` : undefined;
}

export function getWhatsAppHref(message = "Hi M25 Motors, I would like to book a repair or service. Please let me know your availability.") {
  const phoneDigits = (siteConfig.whatsapp || siteConfig.phone).replace(/\D/g, "");
  return phoneDigits ? `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}` : undefined;
}

export function hasGoogleProfile(value: string) {
  return Boolean(value && value !== GOOGLE_PROFILE_PLACEHOLDER);
}

export function getBookingHref() {
  return getWhatsAppHref() || "/contact";
}

export function getServiceBookingHref(serviceName: string) {
  const message = `Hi M25 Motors, I would like to ask about ${serviceName}. Please let me know your availability.`;
  return getWhatsAppHref(message) || "/contact";
}

export function getGoogleMapsHref() {
  return hasGoogleProfile(siteConfig.googleBusinessProfile)
    ? siteConfig.googleBusinessProfile
    : siteConfig.address
      ? `https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`
      : undefined;
}
