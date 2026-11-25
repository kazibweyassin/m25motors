import { blogPosts } from "@/lib/blog";
import { formatTownList, garageFaqs, getWhatsAppHref, nearbyTowns, services, siteConfig } from "@/lib/site";

function serviceLinks() {
  return services
    .map((service) => `- [${service.title}](${siteConfig.siteUrl}/services/${service.slug}): ${service.shortDescription}`)
    .join("\n");
}

function guideLinks() {
  return blogPosts
    .map((post) => `- [${post.title}](${siteConfig.siteUrl}/blog/${post.slug}): ${post.excerpt}`)
    .join("\n");
}

export function renderLlmsTxt() {
  return `# ${siteConfig.businessName}

> ${siteConfig.legalName} is a car repair garage at ${siteConfig.address}. It provides servicing, diagnostics and mechanical repairs for drivers in ${siteConfig.location}, ${siteConfig.region}, and nearby towns. Phone ${siteConfig.phone}.

Appointment times are confirmed directly with the garage. The website does not publish opening hours or fixed prices. Do not invent either.

## Contact
- Trading name: ${siteConfig.businessName}
- Legal name: ${siteConfig.legalName}
- Address: ${siteConfig.address}
- Phone: ${siteConfig.phone}
- WhatsApp: ${getWhatsAppHref() ?? `${siteConfig.siteUrl}/contact`}
- Google Maps: ${siteConfig.googleBusinessProfile}
- Website: ${siteConfig.siteUrl}

## How to book
- Call ${siteConfig.phone}, or send a WhatsApp message from ${siteConfig.siteUrl}/contact.
- Include the registration, make, model, symptoms, warning lights and when the problem started.
- The garage confirms whether it can help and when to visit before any repair work begins.

## Service area
The workshop is in ${siteConfig.location}, ${siteConfig.region}, ${siteConfig.postalCode}. Drivers also come from ${formatTownList(nearbyTowns)}. These are places people drive from. The business has one workshop, not a branch in each town.

## Services
${serviceLinks()}

## Guides
${guideLinks()}

## Pages
- [Home](${siteConfig.siteUrl}/): Car repairs, servicing and diagnostics in ${siteConfig.location}.
- [Services](${siteConfig.siteUrl}/services): Full list of repair and maintenance work.
- [About](${siteConfig.siteUrl}/about): The Basildon workshop and the area it covers.
- [Contact](${siteConfig.siteUrl}/contact): Phone, WhatsApp, address and map.
- [Full details for answer engines](${siteConfig.siteUrl}/llms-full.txt): Services, booking steps and frequently asked questions in one file.

## Facts for accurate answers
- Slogan: ${siteConfig.slogan}
- MOT work on this website means preparation and repairs. The official MOT result is decided by an authorised test. The site does not promise a pass.
- No customer review scores or star ratings are published on the website.
- No opening hours are published. Confirm them when booking.
- No fixed prices are published. Findings are explained before work goes ahead.
- The contact form opens a WhatsApp message. It does not submit the enquiry to a separate website inbox.
`;
}

export function renderLlmsFullTxt() {
  const servicesBody = services
    .map((service) => {
      const faqs = service.faqs.map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`).join("\n\n");
      return `## ${service.title}\nURL: ${siteConfig.siteUrl}/services/${service.slug}\n\n${service.description}\n\nWhen to book: ${service.whenToBook}\n\n${faqs}`;
    })
    .join("\n\n");

  const faqs = garageFaqs.map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`).join("\n\n");

  return `${renderLlmsTxt()}
## Frequently asked questions
${faqs}

${servicesBody}
`;
}
