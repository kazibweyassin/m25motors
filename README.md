# M25 Motors website

Next.js site for M25 Motors, with service information, a WhatsApp enquiry flow, and local search metadata.

## Contact and booking

The enquiry form prepares a message in the visitor’s browser and opens WhatsApp. The visitor reviews and sends the message from WhatsApp; the website does not submit the form to an email API. The published phone and WhatsApp number are configured in `lib/site.ts`.

The public email address is intentionally blank until M25 Motors confirms a monitored mailbox. The street address, opening hours, and Google Business Profile are also blank and should only be added after confirmation.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```bash
npm run lint
npx tsc --noEmit
```

## Build and run

```bash
npm run build
npm run start
```

## Before publishing updates

- Confirm the service area, contact details, and every service claim in `lib/site.ts`.
- Replace stock photography with approved M25 Motors photos when available.
- Keep `public/llms.txt`, metadata, sitemap, and structured data aligned with verified business facts.
