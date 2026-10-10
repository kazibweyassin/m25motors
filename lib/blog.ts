export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  note?: string;
};

export type BlogPost = {
  kind?: "guide" | "used-car";
  model?: string;
  marketStats?: { period: string; rank: number; transactions: number };
  buyerFit?: string;
  checkFocus?: string;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  readingMinutes: number;
  publishedAt: string;
  updatedAt: string;
  image: string;
  imageAlt: string;
  introduction: string;
  keyPoints: string[];
  sections: BlogSection[];
  questions: { question: string; answer: string }[];
  sources: { title: string; url: string }[];
  relatedServices: { title: string; slug: string }[];
};

const publishedAt = "2026-10-10";

export const blogPosts: BlogPost[] = [
  {
    slug: "car-servicing-schedule-uk",
    title: "Car servicing in the UK: a practical guide to schedules, checks and records",
    excerpt: "How to work out when your car needs a service, what a service may include, and which everyday checks matter between garage visits.",
    description: "A practical UK guide to car servicing intervals, manufacturer schedules, everyday checks and service records, with advice for London drivers from M25 Motors.",
    category: "Servicing",
    readingMinutes: 8,
    publishedAt,
    updatedAt: publishedAt,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1500&q=85",
    imageAlt: "A car being checked during a vehicle service",
    introduction: "There is no single service interval that suits every car. The right schedule depends on the vehicle, its engine, age, mileage and the maintenance plan set by its manufacturer. That matters in London, where short trips, stop-start traffic and long periods of idling can make day-to-day use different from steady motorway driving. This guide explains how to find the schedule that applies to your car and what to ask a garage before work begins.",
    keyPoints: [
      "Use the handbook or the manufacturer’s service system for the interval and tasks that apply to your exact car.",
      "A dashboard reminder is useful, but it does not replace checks of the vehicle’s condition or its service records.",
      "Ask the garage what is included, what has been inspected and get approval before additional repairs are carried out.",
    ],
    sections: [
      {
        heading: "1. Find the service interval for your exact vehicle",
        paragraphs: [
          "Start with the owner’s handbook, service book or the manufacturer’s online vehicle portal. Look for both the time interval and mileage interval: a service is commonly due when either limit is reached. Some cars use a fixed schedule, while others calculate a variable interval from factors such as driving style and operating conditions. The dashboard may show a reminder, but the handbook explains what that reminder means for your model.",
          "Do not assume that a rule of thumb such as ‘every 10,000 miles’ applies to every car. Petrol, diesel, hybrid and electric vehicles can have different maintenance requirements, and even two versions of the same model may use different schedules. If the service history is missing or unclear, give the garage the registration, make, model, year and mileage so it can discuss the correct specification before booking.",
        ],
        note: "Follow the manufacturer’s schedule for the vehicle. This guide is general information and cannot replace the handbook or a vehicle-specific inspection.",
      },
      {
        heading: "2. Consider how the car is actually used",
        paragraphs: [
          "A car that mostly makes short journeys may spend more time warming up, idling and restarting than one that covers long, steady distances. Frequent stop-start driving, heavy loads, dusty conditions and repeated cold starts may be treated as severe use by some manufacturers. The correct response is not to invent a shorter interval: check the handbook for any additional schedule and discuss the car’s use with a technician.",
          "For London drivers, a typical week might include short local trips, queues and occasional longer motorway journeys. Tell the garage how the vehicle is used, especially if it rarely reaches operating temperature, carries heavy loads or has been driven unusually little. That context can help the garage explain which checks are relevant without replacing the manufacturer’s schedule with guesswork.",
        ],
      },
      {
        heading: "3. What may be included in a service?",
        paragraphs: [
          "The work depends on the service level and the manufacturer’s schedule. A service can include inspection of brakes, tyres, steering, suspension, lights, fluid levels and visible leaks. Depending on the vehicle and due items, it may also include engine oil and an oil filter, air or cabin filters, spark plugs, brake fluid or other scheduled maintenance. An electric vehicle has no engine oil change, but it still has vehicle-specific inspections and maintenance needs.",
          "A service is not automatically a repair and it is not a promise that no fault will appear later. Ask for a clear description of the checks and replacement items included in the proposed service. If the inspection finds worn or faulty parts, the garage should explain the finding and discuss the next step with you before extra work is agreed.",
        ],
        note: "Service menus differ between garages. Agree the scope of work in advance and ask for a record of what was completed.",
      },
      {
        heading: "4. Keep an eye on simple safety checks",
        paragraphs: [
          "Routine servicing is only one part of looking after a car. GOV.UK says drivers are responsible for making sure a vehicle remains safe to drive, even if it has a current MOT. It recommends checking key items such as brakes, lights, tyres and fluid levels at the intervals described in the vehicle handbook. If a warning appears or something feels different, do not wait for the next scheduled service to mention it.",
          "Tyre pressure should be set to the vehicle maker’s recommendation, usually shown in the handbook or on a label on the car. Check tyre condition for visible cuts, bulges or uneven wear. A legal tread minimum is not a target for good grip: if a tyre is damaged or its condition concerns you, arrange an inspection rather than relying on tread depth alone.",
        ],
      },
      {
        heading: "5. Keep useful service records",
        paragraphs: [
          "Keep invoices, receipts and digital service records together with the date, mileage and a list of work completed. These records help you understand what has already been changed and make it easier to plan future maintenance. If you buy a used car, compare the paperwork with the service schedule and ask about any gaps instead of assuming that a stamp alone confirms every scheduled item.",
          "When a garage recommends additional work, ask what the inspection found, how urgent it is, what the repair involves and whether the price is an estimate or a quotation. You should understand what has been approved before the work starts. If a safety issue is found, ask for a clear written description and what to do if you cannot arrange the repair immediately.",
        ],
      },
      {
        heading: "6. A service is not an MOT",
        paragraphs: [
          "A service is planned maintenance based on the car’s schedule and condition. An MOT is a regulated inspection against roadworthiness requirements. Passing an MOT does not confirm that the engine, clutch or gearbox is in good health, and it does not mean the vehicle will remain safe indefinitely. The two checks answer different questions, so an MOT should not be used as a substitute for scheduled maintenance.",
          "If your car is due for both, tell the garage and ask how the work will be arranged. A service can identify issues that need attention, but no pre-service inspection can guarantee a future MOT result. For faults or warning lights between services, an inspection or diagnostic assessment may be more appropriate than waiting for the next routine booking.",
        ],
      },
      {
        heading: "7. What to tell a garage when booking",
        paragraphs: [
          "Share the vehicle registration, make and model, current mileage, the last known service date and any dashboard reminders. Mention warning lights, noises, leaks, changes in fuel use or handling, even if they come and go. If you have the handbook or service history, bring it or photograph the relevant pages. Clear details help the garage discuss the right service and arrange a suitable time.",
          "M25 Motors handles vehicle servicing enquiries for drivers in London and surrounding areas. You can read more about the available work on the vehicle servicing page, then send the vehicle details to discuss the next step.",
        ],
      },
    ],
    questions: [
      {
        question: "How often should I service my car in the UK?",
        answer: "Use the time and mileage schedule set by the vehicle manufacturer. The interval varies by make, model, engine and service plan, so check the handbook or ask a garage to confirm the schedule for your exact car.",
      },
      {
        question: "Does a current MOT mean my car has been serviced?",
        answer: "No. An MOT is a roadworthiness inspection and does not replace scheduled maintenance. GOV.UK also explains that an MOT does not cover the condition of the engine, clutch or gearbox.",
      },
      {
        question: "What details should I give when booking a service?",
        answer: "Share the registration, make and model, mileage, last known service date, dashboard reminders and any symptoms or warning lights. Mention how the car is normally driven and ask what the proposed service includes.",
      },
    ],
    sources: [
      { title: "GOV.UK: Check your vehicle is safe to drive", url: "https://www.gov.uk/check-vehicle-safe" },
      { title: "GOV.UK: How the MOT test works", url: "https://www.gov.uk/getting-an-mot/the-mot-test" },
      { title: "The Highway Code: Vehicle maintenance, safety and security", url: "https://www.gov.uk/guidance/the-highway-code/annex-6-vehicle-maintenance-safety-and-security" },
    ],
    relatedServices: [{ title: "Vehicle servicing", slug: "vehicle-servicing" }, { title: "Vehicle diagnostics", slug: "diagnostics" }],
  },
  {
    slug: "mot-preparation-checklist-london",
    title: "MOT preparation checklist for London drivers: what to check before the test",
    excerpt: "A useful pre-MOT checklist for tyres, lights, visibility, brakes and warning lamps—and what a garage check can and cannot tell you.",
    description: "Prepare for an MOT with this practical UK checklist covering tyres, lights, brakes, visibility and warning lamps, with official DVSA links and advice for London drivers.",
    category: "MOT preparation",
    readingMinutes: 9,
    publishedAt,
    updatedAt: publishedAt,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1500&q=85",
    imageAlt: "A car ready for inspection at a garage",
    introduction: "An MOT checks whether a vehicle meets minimum roadworthiness and environmental standards on the day of the test. A few simple checks can help you spot obvious issues beforehand, but they cannot guarantee a pass or replace the official test. Use this guide to prepare your car, understand the limits of a pre-MOT check and decide when to arrange a repair inspection.",
    keyPoints: [
      "Check the MOT due date and review the car’s previous MOT history before you book.",
      "Look at tyres, lights, number plates, windows, wipers and warning lamps; seek help for brake or steering symptoms.",
      "A pre-MOT check can identify concerns, but only the MOT tester can record the official result.",
    ],
    sections: [
      {
        heading: "1. Check the due date and past advisories",
        paragraphs: [
          "Use the GOV.UK MOT service to check the vehicle’s current MOT status, expiry date and recorded test history. Previous results can help you spot repeat advisories, such as tyre wear, suspension play or a recurring lamp issue. An advisory is not the same as a failure, but it is a useful prompt to check whether the condition has changed since the last test.",
          "For most cars, the first MOT is due when the vehicle is three years old, then every year. There are exceptions, so confirm the rules for your vehicle on GOV.UK rather than relying on the registration date from memory. Book early enough to leave time to address any problems that are found.",
        ],
        note: "A valid MOT does not remove the driver’s responsibility to keep the vehicle roadworthy between tests.",
      },
      {
        heading: "2. Inspect tyres and wheels",
        paragraphs: [
          "Check every road tyre for obvious cuts, bulges, exposed cords or other damage. Look across the tread rather than only at the outside edge, because uneven wear can point to a pressure, alignment, braking or suspension problem. Confirm that tyres are correctly inflated for the vehicle using the pressure information in the handbook or on the car.",
          "For cars and light vans, the legal minimum tread depth is 1.6 mm across the central three-quarters of the tyre and around its full circumference. That is a legal limit, not a recommendation to wait until the last moment: have a tyre inspected if its condition concerns you, or if the tread is close to the limit.",
        ],
      },
      {
        heading: "3. Check lights, indicators and number plates",
        paragraphs: [
          "With the vehicle safely parked, check that the headlights, sidelights, indicators, hazard lights, brake lights, rear lights and number plate lamps work. Ask another person to confirm the brake lights if necessary. Look for cracked or badly damaged lamp covers and make sure the number plates are clean, legible and securely fitted.",
          "If a bulb is replaced, use the type and fitting specified for the car. Poorly fitted or unsuitable lamps can cause a problem even when they illuminate. If a warning message remains after a repair, check the handbook or have the system assessed rather than assuming the warning will clear by itself.",
        ],
      },
      {
        heading: "4. Make sure the driver has a clear view",
        paragraphs: [
          "Clean the windscreen, mirrors and windows. Check the driver’s view for chips or cracks, and make sure the wipers sweep the screen effectively without leaving large uncleared areas. Test the washers and top up the correct washer fluid if needed. A wiper blade that is split, loose or leaving a streak may need attention before the test.",
          "Also check that mirrors are present, secure and usable, and remove anything from the dashboard or windscreen that blocks your view. If a chip is in the driver’s field of vision or is growing, ask a glass specialist whether it needs repair or replacement.",
        ],
      },
      {
        heading: "5. Take brake, steering and suspension symptoms seriously",
        paragraphs: [
          "Do not try to diagnose brake performance with a hard stop on a public road. Instead, note whether the car pulls to one side, vibrates under braking, makes a grinding sound or has a pedal that suddenly feels soft, spongy or unusually hard. These symptoms need an inspection; if braking feels unsafe, stop in a safe place and arrange professional assistance rather than continuing to the test centre.",
          "Pay attention to steering that feels loose, heavy or newly off-centre, and to unusual knocking or excessive bouncing over bumps. Such changes are worth reporting before the test. The MOT checks brakes, steering, suspension and related warning lamps according to the current DVSA inspection manual.",
        ],
      },
      {
        heading: "6. Look at warning lamps, horn and seat belts",
        paragraphs: [
          "Read the handbook for any dashboard warning that remains illuminated after the engine starts. The MOT inspection includes specific warning lamps and vehicle systems, and the rules vary by item and vehicle. Do not cover, remove or reset a warning to hide it: the underlying fault may still affect safety or the test result.",
          "Check that the horn works, seat belts latch and retract properly, and seats are secure. These simple checks are easy to overlook when attention is focused on the engine or tyres, but they are among the items covered by the official inspection process.",
        ],
      },
      {
        heading: "7. Know what the MOT does not test",
        paragraphs: [
          "An MOT is not a full mechanical health check. GOV.UK states that the test does not cover the condition of the engine, clutch or gearbox. A car can pass and still need maintenance or repair in those areas, and a pre-MOT inspection cannot promise an official pass. If you have a separate noise, leak, clutch slip or engine warning, book an assessment for that symptom rather than treating the MOT as a diagnosis.",
          "If the test identifies a defect, ask the tester to explain the result and the next steps. Distinguish a recorded advisory from a defect that has caused a failure, and use the official GOV.UK guidance if you are unsure whether the car can be driven. Rules depend on the result and the vehicle’s condition.",
        ],
      },
      {
        heading: "8. When a pre-MOT garage check helps",
        paragraphs: [
          "A pre-MOT check can be useful when the vehicle has visible wear, old advisories, a warning lamp or symptoms that might affect roadworthiness. Tell the garage about the test date, the previous MOT history and any changes you have noticed. Ask which items are being checked and request approval before any repair work is carried out.",
          "M25 Motors provides MOT preparation and repair enquiries for London drivers. Share the registration, mileage and symptoms to discuss whether a preparation check or a specific repair inspection is the sensible next step. The official MOT result is still determined by the authorised test.",
        ],
      },
    ],
    questions: [
      {
        question: "How early can I get my car’s MOT done?",
        answer: "Check the MOT due date and current rules using GOV.UK. Booking ahead helps leave time for repairs if an inspection finds a problem; the exact date that preserves the existing expiry date depends on the current MOT rules.",
      },
      {
        question: "Will a pre-MOT check guarantee a pass?",
        answer: "No. A pre-MOT check may identify concerns, but it is not the official test and cannot guarantee its result. The authorised MOT tester records the vehicle’s result against the current inspection requirements.",
      },
      {
        question: "Does an MOT cover the engine and clutch?",
        answer: "No. GOV.UK says the MOT test does not cover the condition of the engine, clutch or gearbox. Arrange separate maintenance or a fault diagnosis if you have concerns in those areas.",
      },
    ],
    sources: [
      { title: "GOV.UK: Getting an MOT and how the test works", url: "https://www.gov.uk/getting-an-mot/the-mot-test" },
      { title: "DVSA: MOT inspection manual for cars", url: "https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles" },
      { title: "GOV.UK: Check your vehicle is safe to drive", url: "https://www.gov.uk/check-vehicle-safe" },
      { title: "GOV.UK: Car parts checked at an MOT", url: "https://www.gov.uk/government/publications/car-parts-checked-at-an-mot/car-parts-checked-at-an-mot" },
    ],
    relatedServices: [{ title: "MOT preparation and repairs", slug: "mot-preparation-and-repairs" }, { title: "Brake repairs", slug: "brake-repairs" }],
  },
  {
    slug: "brake-warning-signs-car",
    title: "Brake warning signs: when your car needs an inspection",
    excerpt: "Learn what squealing, grinding, vibration, pulling and a changed brake pedal can mean—and when to stop driving and get help.",
    description: "Understand common car brake warning signs, what to do if braking changes and when to arrange a brake inspection in London. Includes DVSA and Highway Code references.",
    category: "Brake safety",
    readingMinutes: 8,
    publishedAt,
    updatedAt: publishedAt,
    image: "https://images.unsplash.com/photo-1568644305664-5c7c2f88fa65?auto=format&fit=crop&w=1500&q=85",
    imageAlt: "Brake components being inspected during car repair work",
    introduction: "Brakes should feel consistent and respond predictably. A new noise, vibration, warning lamp or change in pedal feel does not identify one specific failed part, but it is a reason to take the car seriously and arrange an inspection. This guide covers common signs, what information to note and how to decide whether it is safe to continue driving.",
    keyPoints: [
      "A noise or vibration is a clue, not a diagnosis; several brake, tyre or suspension faults can feel similar.",
      "If braking performance changes or the pedal feels suddenly abnormal, stop somewhere safe and seek professional help.",
      "Do not ignore a brake warning lamp, visible fluid leak or grinding sound, and do not test brakes with risky manoeuvres.",
    ],
    sections: [
      {
        heading: "1. Squealing or grinding noises",
        paragraphs: [
          "A high-pitched squeal may come from brake-pad wear indicators, surface contamination, moisture or another component. A grinding or scraping sound can indicate that parts are contacting in a way that needs urgent attention. The sound alone cannot confirm which part has worn or whether the vehicle is safe to drive, so arrange an inspection rather than relying on a guess.",
          "Notice when the noise happens: only at low speed, after rain, during the first stop, or every time the brake is applied? Tell the garage whether the sound is new, whether it is getting louder and whether the car’s stopping behaviour has also changed. If the noise is accompanied by reduced braking, pulling or a warning, treat it as more urgent.",
        ],
      },
      {
        heading: "2. Vibration or pulling when braking",
        paragraphs: [
          "A steering wheel or brake pedal that vibrates under braking may be associated with brake discs or other components, but tyre, wheel and suspension issues can also affect how a car feels. A car that pulls to one side can have a brake fault, uneven tyre pressures or another problem. Only an inspection can separate these possibilities.",
          "Avoid hard braking to reproduce the symptom on a public road. If the pull is strong, the steering feels difficult to control, or the car does not stop normally, find a safe place to stop and arrange help. For a mild or intermittent symptom, make a note of speed and conditions and book an inspection promptly.",
        ],
      },
      {
        heading: "3. A brake pedal that feels different",
        paragraphs: [
          "A pedal that suddenly feels soft, spongy, unusually hard or travels farther than normal should not be dismissed. The cause can involve hydraulic, assistance or mechanical components, and the same sensation can have different explanations on different vehicles. If the pedal feel changes and braking is reduced or unpredictable, do not continue driving to see if it improves.",
          "A low brake-fluid warning or visible fluid leak also needs prompt professional attention. The Highway Code notes that low brake fluid may result in brake failure. Follow the vehicle handbook for the meaning of the warning, stop safely if required and arrange assistance rather than topping up fluid as a substitute for finding the cause.",
        ],
      },
      {
        heading: "4. Brake warning lights and messages",
        paragraphs: [
          "A red or amber symbol can mean different things depending on the vehicle, and some brake-related lamps share symbols with other systems. Read the owner’s handbook and any dashboard message. If the warning remains on, appears while driving, or comes with a change in braking, arrange an inspection. Do not assume that a warning is harmless because the car still moves.",
          "The DVSA MOT inspection includes the condition and operation of brakes and checks certain brake-related warning lamps, including ABS and brake-fluid warnings where applicable. That test is a snapshot; a warning or symptom can still need attention before the next MOT.",
        ],
      },
      {
        heading: "5. Decide whether to keep driving",
        paragraphs: [
          "If stopping distance has increased, the pedal has changed suddenly, the car pulls sharply, a warning suggests a brake-system fault or fluid is leaking, stop in a safe place and contact a recovery service or garage for guidance. Do not put yourself or others at risk by trying to reach a workshop in a vehicle that may not brake safely.",
          "If the brakes still operate normally but you have a new squeal or mild vibration, arrange a prompt inspection and drive cautiously only if you are confident the car remains safe. There is no reliable remote way to judge brake condition from a description alone. If in doubt, seek professional advice before driving further.",
        ],
        note: "This is general guidance, not a remote diagnosis. Your vehicle handbook and an in-person inspection take priority.",
      },
      {
        heading: "6. What happens during a brake inspection?",
        paragraphs: [
          "A technician can inspect the visible condition of pads, discs, callipers, hoses and related parts, check for leaks and assess the reported symptom. Depending on what is found, further checks may be needed to confirm the cause. Ask the garage to explain the findings, show you the affected parts where practical and outline the repair options before work begins.",
          "Do not assume every brake noise means that every brake component needs replacement. Equally, do not ask for a part to be replaced based only on a noise if the vehicle has not been assessed. A measured inspection helps identify the fault and avoid replacing unrelated components.",
        ],
      },
      {
        heading: "7. Help the garage understand the problem",
        paragraphs: [
          "When you contact the garage, include the vehicle make, model, registration and mileage. Describe the noise or pedal change in plain language, when it happens, whether a warning is showing and whether the car pulls or vibrates. Mention recent brake or tyre work and whether the issue started suddenly. Do not send yourself on a test drive if the car feels unsafe.",
          "M25 Motors handles brake repair enquiries for drivers in London and surrounding areas. Share the symptoms to discuss an inspection and a suitable next step.",
        ],
      },
    ],
    questions: [
      {
        question: "Can I drive with squealing brakes?",
        answer: "A squeal can have several causes and cannot be diagnosed by sound alone. Arrange an inspection. If braking performance has changed, there is grinding, a warning lamp or the pedal feels abnormal, stop safely and seek professional guidance before driving further.",
      },
      {
        question: "What should I do if the brake pedal suddenly feels soft?",
        answer: "If the pedal suddenly feels soft or braking is reduced, stop in a safe place and arrange professional assistance or recovery. Do not continue driving to test whether the feeling goes away.",
      },
      {
        question: "Does an ABS warning mean the brakes have completely failed?",
        answer: "The exact meaning depends on the vehicle and its warning message. Check the handbook and have the system assessed promptly. If braking feels abnormal or unsafe, stop safely and arrange assistance.",
      },
    ],
    sources: [
      { title: "The Highway Code: Vehicle maintenance, safety and security", url: "https://www.gov.uk/guidance/the-highway-code/annex-6-vehicle-maintenance-safety-and-security" },
      { title: "DVSA: MOT inspection manual for cars — brakes", url: "https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles/1-brakes" },
      { title: "GOV.UK: Car parts checked at an MOT", url: "https://www.gov.uk/government/publications/car-parts-checked-at-an-mot/car-parts-checked-at-an-mot" },
    ],
    relatedServices: [{ title: "Brake repairs", slug: "brake-repairs" }, { title: "Tyres and suspension", slug: "tyres-and-suspension" }],
  },
  {
    slug: "engine-warning-light-what-to-do",
    title: "Engine warning light on? What to do before booking a diagnostic check",
    excerpt: "A calm guide to dashboard warning lights, symptoms to record and why a fault code is a starting point—not the whole diagnosis.",
    description: "Learn what to do when an engine management light appears, how to use your vehicle handbook, which symptoms need urgent help and what to share when booking car diagnostics in London.",
    category: "Diagnostics",
    readingMinutes: 8,
    publishedAt,
    updatedAt: publishedAt,
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=1500&q=85",
    imageAlt: "A mechanic inspecting a car with the bonnet open",
    introduction: "An engine management light can come on for many reasons, from a fault that needs prompt attention to an issue that first requires careful diagnosis. The icon and colour are not identical across every make and model, so the handbook and the exact dashboard message matter. This guide explains what information to gather, when to stop and why reading a fault code does not automatically identify the part to replace.",
    keyPoints: [
      "Use the owner’s handbook to interpret the specific symbol and message shown by your vehicle.",
      "Stop safely and seek help if the warning is described as critical or comes with overheating, smoke, severe vibration or loss of power.",
      "A diagnostic code narrows the investigation; confirm the cause with appropriate checks before approving parts.",
    ],
    sections: [
      {
        heading: "1. Identify the exact warning",
        paragraphs: [
          "Dashboard symbols vary between manufacturers and model years. Check the owner’s handbook for the meaning of the exact icon, colour and message on your car. Note whether the lamp is steady, flashing or accompanied by a text warning. Do not rely on a generic chart if your vehicle’s handbook gives different instructions.",
          "Some cars perform a lamp check when the ignition is switched on, so a light that briefly appears during start-up may be part of the normal display sequence. If it stays on after the engine starts or appears while you are driving, consult the handbook and take the message seriously.",
        ],
      },
      {
        heading: "2. Watch for symptoms that change the urgency",
        paragraphs: [
          "Pay attention to overheating, smoke, unusual knocking, strong fuel or burning smells, severe shaking, reduced power, a sudden change in oil pressure warning or a vehicle that is difficult to control. If the handbook says to stop, or the car is behaving dangerously, pull over somewhere safe, switch off if instructed and arrange assistance. Do not keep driving just to see whether the light clears.",
          "A steady warning with no obvious change in how the car drives may allow you to follow the handbook’s next steps and arrange a prompt diagnostic check, but there is no single rule for every vehicle. If the light is flashing, the car is misfiring, or the handbook advises stopping, reduce risk and seek assistance instead of continuing a normal journey.",
        ],
        note: "Warning-light colours and meanings are vehicle-specific. The handbook and dashboard message are the best guide for your exact car.",
      },
      {
        heading: "3. Record when and how the light appeared",
        paragraphs: [
          "Before contacting a garage, note the make, model, registration, mileage, exact warning message and when it appeared. Did it happen at start-up, during acceleration, in traffic or after refuelling? Did it stay on or go away? Was there a change in power, idle, fuel use, temperature or sound? These details can help a technician reproduce the conditions and choose the right checks.",
          "If it is safe to do so, take a photo of the warning and record any text displayed. Avoid using a phone while driving; pull over and park first. Mention whether the car has had recent repairs, a battery change or other work that may help explain the timing.",
        ],
      },
      {
        heading: "4. Why a fault code is not a complete diagnosis",
        paragraphs: [
          "A diagnostic scan can identify a stored code or affected system, but the code does not always prove that a particular component has failed. Wiring, a connector, a related sensor, a mechanical issue or another condition can produce similar evidence. Replacing the first part suggested by a code reader can miss the underlying cause.",
          "A proper diagnostic process uses the code alongside the symptoms, live data where appropriate, inspection and relevant tests. The technician should explain what was checked, what the findings indicate and whether any uncertainty remains before recommending a repair. Ask for the repair plan and cost to be agreed before work goes ahead.",
        ],
      },
      {
        heading: "5. Do not hide or ignore a persistent warning",
        paragraphs: [
          "Disconnecting the battery, clearing a code or covering a warning can remove useful evidence without fixing the fault. A light that goes out temporarily may return when the vehicle detects the condition again. If a warning is persistent or recurs, arrange an assessment and keep a note of when it happens.",
          "The DVSA MOT manual includes inspection rules for the engine malfunction indicator lamp and emissions on relevant vehicles. Whether a particular warning affects a test depends on the vehicle and the inspection rules, so do not assume that switching the lamp off will make a vehicle roadworthy or resolve an MOT issue.",
        ],
      },
      {
        heading: "6. What to expect from a diagnostic appointment",
        paragraphs: [
          "A diagnostic appointment starts with your description of the fault and the vehicle details. The garage may scan the vehicle, inspect components and perform additional tests. Not every fault can be identified from the first scan, and intermittent issues may need more information or further checks. Ask whether the appointment covers diagnosis only or includes any repair work.",
          "Good communication matters: agree what the initial assessment includes, when the garage will contact you with findings and whether it will ask for approval before replacing anything. A diagnosis and a repair are separate steps, and the right repair depends on confirmed findings.",
        ],
      },
      {
        heading: "7. Share the right information when booking",
        paragraphs: [
          "Send the registration, make and model, mileage, dashboard photo and a short description of what changed. Include any symptoms, whether the warning is steady or flashing and what the handbook advises. If the car feels unsafe or is showing a critical warning, arrange recovery or professional assistance instead of driving to an appointment.",
          "M25 Motors handles vehicle diagnostic enquiries for drivers in London and surrounding areas. Share the warning and symptoms to discuss the right next step for your vehicle.",
        ],
      },
    ],
    questions: [
      {
        question: "Can I drive with the engine management light on?",
        answer: "It depends on the exact warning and how the car is behaving. Check the handbook. If it advises stopping, the light is flashing, or the car is overheating, smoking, shaking severely or losing power, stop safely and arrange assistance. Otherwise arrange a prompt diagnostic check and follow the vehicle guidance.",
      },
      {
        question: "Does a diagnostic code tell me which part to replace?",
        answer: "Not always. A code identifies a system or condition to investigate; further checks may be needed to confirm the failed part or underlying cause before a repair is recommended.",
      },
      {
        question: "Will an engine warning light fail an MOT?",
        answer: "MOT rules include checks for the malfunction indicator lamp and emissions on relevant vehicles. The result depends on the vehicle and the current inspection rules, so have a persistent warning diagnosed rather than trying to hide it.",
      },
    ],
    sources: [
      { title: "DVSA: MOT inspection manual for cars — emissions", url: "https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles/8-nuisance" },
      { title: "GOV.UK: How the MOT test works", url: "https://www.gov.uk/getting-an-mot/the-mot-test" },
      { title: "GOV.UK: Check your vehicle is safe to drive", url: "https://www.gov.uk/check-vehicle-safe" },
    ],
    relatedServices: [{ title: "Vehicle diagnostics", slug: "diagnostics" }, { title: "Engine repairs", slug: "engine-repairs" }, { title: "Electrical faults", slug: "electrical-faults" }],
  },
  {
    kind: "used-car",
    model: "Ford Fiesta",
    marketStats: { period: "Q2 2026", rank: 1, transactions: 73570 },
    buyerFit: "Drivers looking for a compact hatchback for town trips and commuting.",
    checkFocus: "Exact year and gearbox, service history, warning lamps and how it behaves on a test drive.",
    slug: "used-ford-fiesta-buying-guide",
    title: "Used Ford Fiesta review: what to check before buying",
    excerpt: "A buyer-focused look at the UK’s most-traded used car in Q2 2026: who it suits, which details vary by year and what to check on a real example.",
    description: "A practical used Ford Fiesta buying guide covering size, engine and gearbox choices, test-drive checks, MOT history and London emissions checks before you buy.",
    category: "Used car review",
    readingMinutes: 7,
    publishedAt,
    updatedAt: publishedAt,
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=1500&q=85",
    imageAlt: "A mechanic inspecting a car with its bonnet open",
    introduction: "The Ford Fiesta led UK used-car transactions in Q2 2026, with 73,570 changes of ownership in SMMT data. That makes it a natural model to consider, but popularity is not a reliability score and does not make every example a good buy. Fiesta specifications changed across generations, so judge the exact car, its history and its condition rather than relying on the badge alone.",
    keyPoints: [
      "A compact hatchback can suit city parking and everyday trips, but check the actual boot and rear-seat space against your needs.",
      "Petrol, diesel, manual and automatic options vary by year and trim; verify the exact specification and service schedule.",
      "Check the MOT and recall history, test the car from cold where possible, and compare mileage with the records.",
    ],
    sections: [
      {
        heading: "Where a Fiesta can fit",
        paragraphs: [
          "The Fiesta is a small hatchback that many buyers consider for commuting, first-car use and day-to-day town driving. Its size may make parking and narrow streets easier than in a larger family car. Before choosing one, sit in the rear seats and try the boot with the pushchair, work kit, shopping or luggage you actually carry; a popular small car is not automatically the right size for every household.",
          "The model name covers many years, trims and mechanical combinations. Equipment, cabin layout, safety technology and engine choice can differ substantially between examples. Compare the particular registration and specification you are viewing, not just an online review of a different year or trim.",
        ],
      },
      {
        heading: "Compare the engine and gearbox carefully",
        paragraphs: [
          "Used Fiestas can be found with different petrol or diesel engines and manual or automatic transmissions, depending on year and version. Each has different maintenance requirements and may suit a different type of journey. Ask for the exact engine, transmission, service schedule and emissions details. Do not assume a newer-looking trim has the same mechanical specification as another car with the same badge.",
          "During a test drive, use every gear and check that the clutch, brakes, steering and controls behave consistently. Listen for new noises over uneven roads, watch for warning lamps and check that the engine starts and idles normally. These are prompts to ask more questions, not a substitute for an inspection by someone qualified to assess the vehicle.",
        ],
      },
      {
        heading: "Read the individual car’s history",
        paragraphs: [
          "Ask for the registration before travelling. GOV.UK recommends checking the vehicle details, MOT status and history, and whether the car has an outstanding safety recall. Compare recorded mileage between MOT entries and with service invoices. Look for advisories that return year after year, especially where they concern tyres, brakes, suspension, leaks or corrosion, and ask the seller what has been done about them.",
          "Check that the V5C details match the car and seller, and compare the vehicle identification number on the car with the paperwork. Ask for service invoices, both keys if advertised, and the owner’s handbook. Gaps in paperwork are a reason to ask further questions and factor uncertainty into your decision.",
        ],
      },
      {
        heading: "Buying a Fiesta in London",
        paragraphs: [
          "Do not infer emissions compliance from the model name, fuel type or year alone. Enter the exact registration into Transport for London’s vehicle checker before buying if you plan to drive in the Ultra Low Emission Zone. Also compare insurance, vehicle tax, parking, tyre size and the manufacturer’s maintenance schedule for the specific car.",
          "A Fiesta can make sense if you want a compact hatch and the example has a clear history, suits your journeys and passes a careful inspection. Walk away or seek independent advice if the seller will not let you check documents, the history conflicts with the car, warning lamps stay on or the test drive raises safety concerns.",
        ],
        note: "SMMT transaction figures show market activity, not a rating of reliability or value. This is a model-family buying guide, not an inspection of a specific car.",
      },
    ],
    questions: [
      { question: "Is a used Ford Fiesta a good first car?", answer: "It can suit some first-time drivers because it is a compact hatchback, but running costs, insurance, condition and exact specification vary. Compare quotes and inspect the individual car before deciding." },
      { question: "Which used Fiesta engine should I buy?", answer: "There is no single answer for every buyer. The available engines and transmissions vary by year; match the exact version to your journeys, check its maintenance schedule and review the car’s service history." },
      { question: "How do I check a Fiesta before buying in London?", answer: "Check the DVLA details, MOT history and recall status, compare the mileage with paperwork, arrange a proper test drive and use TfL’s registration checker to confirm ULEZ status for that exact car." },
    ],
    sources: [
      { title: "SMMT: UK used-car sales data and model transactions", url: "https://www.smmt.co.uk/vehicle-data/used-car-sales/" },
      { title: "GOV.UK: Check a used vehicle you’re buying", url: "https://www.gov.uk/checks-when-buying-a-used-car" },
      { title: "TfL: Check your vehicle for London road charges and emissions", url: "https://tfl.gov.uk/modes/driving/check-your-vehicle/?mini-quote=1" },
    ],
    relatedServices: [],
  },
  {
    kind: "used-car",
    model: "Vauxhall Corsa",
    marketStats: { period: "Q2 2026", rank: 2, transactions: 59247 },
    buyerFit: "Buyers comparing small hatchbacks, including later electric versions.",
    checkFocus: "Powertrain-specific records; for an electric car, battery information and charging equipment.",
    slug: "used-vauxhall-corsa-buying-guide",
    title: "Used Vauxhall Corsa review: a buyer’s guide to the small hatchback",
    excerpt: "The Corsa was the UK’s second most-traded used model in Q2 2026. Compare petrol, diesel and electric versions, then check the exact example before you buy.",
    description: "Considering a used Vauxhall Corsa? Compare space, powertrain and year differences, and learn how to check the MOT history, recalls and London ULEZ status.",
    category: "Used car review",
    readingMinutes: 7,
    publishedAt,
    updatedAt: publishedAt,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1500&q=85",
    imageAlt: "A car undergoing a routine service inspection",
    introduction: "SMMT data recorded 59,247 used Vauxhall Corsa transactions in the UK in Q2 2026, placing it second among models in that quarter. Buyers will find a wide range of ages and specifications under the Corsa name, including combustion and electric versions in later model years. The best choice depends on the car in front of you and the journeys you need it to handle.",
    keyPoints: [
      "Check the model year, generation, engine, gearbox and trim because equipment and maintenance differ across the Corsa range.",
      "For an electric Corsa, check battery condition, charging equipment, range suitability and service records separately from a petrol or diesel car.",
      "Use the registration to check MOT history, recalls and London emissions status before committing.",
    ],
    sections: [
      {
        heading: "What kind of buyer might choose a Corsa?",
        paragraphs: [
          "The Corsa is a small hatchback commonly considered for commuting, errands and as a first or second household car. It can be easier to place in tight streets than a larger car, but practical space changes by generation and body layout. Take the passengers and items you regularly carry and check rear access, seating comfort and boot space in the specific car.",
          "Because the model has been sold over many years, a used-car listing can describe very different equipment and technology. Confirm the registration year and trim from the paperwork, check which safety and comfort features are actually fitted, and avoid relying on photos or a review of a newer version.",
        ],
      },
      {
        heading: "Petrol, diesel or electric?",
        paragraphs: [
          "Corsa powertrains vary by model year. If comparing petrol or diesel examples, check the exact engine, service schedule and gearbox, and consider whether the car’s use matches that version. For a battery-electric Corsa, ask for the vehicle’s battery and charging information, confirm that the included cables are present, and check that the real-world range and charging options work for your regular routes.",
          "With any automatic or manual version, pay attention to how it engages and changes gear on a test drive. Check warning messages and make sure the advertised equipment works. Do not treat a fault code or a seller’s verbal explanation as confirmation that a fault has been repaired; ask for invoices or a follow-up inspection if something is unclear.",
        ],
      },
      {
        heading: "Checks before you agree to buy",
        paragraphs: [
          "Ask for the registration and check the DVLA vehicle details, MOT status and history, and any safety recall. Compare mileage entries with service documents and look for repeated advisories or failures that have not been explained. Check that the V5C and vehicle identification number match the car, and confirm that the seller’s name and details make sense.",
          "On a test drive, check the brakes, steering, tyres, suspension over rough surfaces, visibility and all dashboard messages. Make sure heating, air conditioning, windows, lights, parking sensors and infotainment operate as advertised. These checks do not replace an independent inspection when you are uncertain about the car’s condition.",
        ],
      },
      {
        heading: "Is a Corsa a sensible London used car?",
        paragraphs: [
          "A compact hatch can be convenient for urban parking, but London use brings charges and access rules that depend on the exact vehicle. Check the registration through TfL’s vehicle checker before buying; the model badge and fuel type are not enough to confirm ULEZ compliance. Compare insurance, tax, any charging costs for an electric version and the service history when working out your budget.",
          "The Corsa may suit you if its size, equipment and running costs match your needs. Choose the individual car with the clearest history and best-supported condition rather than assuming a particular trim or engine is always the right answer. If the seller resists basic checks or the paperwork does not line up, pause the purchase.",
        ],
        note: "SMMT transaction figures indicate popularity only. Model-year and powertrain differences mean this guide cannot rate every Corsa example.",
      },
    ],
    questions: [
      { question: "Is a used Vauxhall Corsa available as an electric car?", answer: "Some later Corsa model years are available as battery-electric versions. Check the exact car’s year, specification, battery information and charging equipment; do not apply petrol or diesel assumptions to an electric example." },
      { question: "Is the Corsa suitable for city driving?", answer: "Its small-hatchback format may suit some city drivers, but parking, passenger space, emissions status and running costs depend on the particular car and your circumstances. Check the exact registration with TfL before buying for London use." },
      { question: "What is the most important Corsa check?", answer: "Start with the exact vehicle identity and paperwork, MOT history and recalls, then inspect and test drive the specific example. No single checklist can confirm the condition of every year and powertrain." },
    ],
    sources: [
      { title: "SMMT: UK used-car sales data and model transactions", url: "https://www.smmt.co.uk/vehicle-data/used-car-sales/" },
      { title: "GOV.UK: Check a used vehicle you’re buying", url: "https://www.gov.uk/checks-when-buying-a-used-car" },
      { title: "TfL: Check your vehicle for London road charges and emissions", url: "https://tfl.gov.uk/modes/driving/check-your-vehicle/?mini-quote=1" },
    ],
    relatedServices: [],
  },
  {
    kind: "used-car",
    model: "Volkswagen Golf",
    marketStats: { period: "Q2 2026", rank: 3, transactions: 55786 },
    buyerFit: "Drivers who want a medium-sized hatchback, with estate versions available in some generations.",
    checkFocus: "Exact generation, body style, engine, gearbox, maintenance records and all advertised equipment.",
    slug: "used-volkswagen-golf-buying-guide",
    title: "Used Volkswagen Golf review: what to look for before you buy",
    excerpt: "A practical guide to the UK’s third most-traded used model in Q2 2026, from choosing the right size and powertrain to checking one specific car.",
    description: "Read this used Volkswagen Golf buying guide before you buy: understand year and powertrain differences, check its records and assess London running requirements.",
    category: "Used car review",
    readingMinutes: 7,
    publishedAt,
    updatedAt: publishedAt,
    image: "https://images.unsplash.com/photo-1568644305664-5c7c2f88fa65?auto=format&fit=crop&w=1500&q=85",
    imageAlt: "Brake components being checked as part of a used-car inspection",
    introduction: "The Volkswagen Golf ranked third in SMMT’s UK used-car model transactions for Q2 2026, with 55,786 transactions. Its long-running name covers multiple generations, body styles, engine options and equipment packages. This guide helps you ask better questions about a specific example; it is not a claim that every Golf has the same strengths, running costs or condition.",
    keyPoints: [
      "Compare the exact generation, body style, engine, gearbox and trim; Golf specifications have changed over time.",
      "Match diesel, petrol, hybrid or performance variants to your real journeys and maintenance budget.",
      "Review the paperwork, MOT and recall records, and test the car’s systems instead of buying on reputation alone.",
    ],
    sections: [
      {
        heading: "Who should consider a used Golf?",
        paragraphs: [
          "The Golf is a family hatchback that many buyers compare with other medium-sized cars. It may offer a useful middle ground between a smaller city hatch and a larger SUV, but cabin and boot space differ by generation and body style. If you need extra luggage capacity, check whether the specific car is a hatchback or estate and measure it against the items you carry.",
          "Trims can vary in screen layout, driver assistance, lighting, seats and convenience equipment. Test every feature you expect to use. If shopping by price, compare similar years, mileage, engine and service records; a lower advertised price may reflect differences in age, specification, history or condition.",
        ],
      },
      {
        heading: "Choose an engine and gearbox for your use",
        paragraphs: [
          "Golf examples can have petrol or diesel engines, and some later model years include electrified versions. The available gearboxes and equipment depend on year and trim. Consider the kind of journeys you make, the service schedule and any local emissions charges. A diesel that suits regular longer journeys may not be the right match for every driver’s short-trip routine; confirm suitability from vehicle-specific guidance rather than a general rule.",
          "On a test drive, check how the engine starts, idles and responds, whether the gearbox behaves consistently, and whether any warning messages appear. Listen for new noises over rough surfaces and test the brakes, steering, climate controls and electrical equipment. An unusual sound or message needs investigation; this guide cannot diagnose it remotely.",
        ],
      },
      {
        heading: "Inspect history, paperwork and condition",
        paragraphs: [
          "Before viewing, check the vehicle’s identity, MOT history and recall status using the official services. Compare mileage records and service invoices, and ask for an explanation where dates or odometer readings do not form a clear timeline. Check that the V5C and the vehicle identification number match. A current MOT is useful information, but it is not a full mechanical inspection.",
          "Look at tyre wear, warning lamps, fluid leaks, brake feel and suspension behaviour. Ask what work is due next according to the manufacturer’s schedule and request records for major scheduled items where relevant. If the car has a complicated history, a specialist inspection before purchase may be money well spent.",
        ],
      },
      {
        heading: "Check the full cost of a Golf in London",
        paragraphs: [
          "For London use, verify the exact vehicle registration with TfL’s checker to see whether emissions standards or road charges apply to your intended trips. Do not assume that a particular Golf generation or a petrol/diesel badge alone confirms its status. Compare insurance quotes, vehicle tax, fuel or charging costs, tyres and scheduled maintenance before deciding what you can afford.",
          "A Golf is worth considering when its size, equipment and driving needs fit your household and the individual car has evidence to support its condition. Popularity can make comparisons easier, but it does not replace checks of that vehicle. Walk away if the seller will not provide the registration, records or a reasonable chance to inspect and test drive it.",
        ],
        note: "SMMT rankings count used transactions, not reliability or owner satisfaction. This guide covers the model family; the exact year and example must be assessed separately.",
      },
    ],
    questions: [
      { question: "Is a used Volkswagen Golf a good family car?", answer: "It can suit some households as a medium-sized hatchback, but rear space, boot capacity and equipment vary by generation and body style. Check the exact car with your family’s normal passengers and luggage." },
      { question: "Should I buy a petrol or diesel Golf?", answer: "Choose based on the exact engine, your journey pattern, maintenance requirements and emissions rules for your location. Check the manufacturer guidance and TfL’s vehicle checker for a car you plan to use in London." },
      { question: "Does a Golf with a current MOT need checking before I buy it?", answer: "Yes. An MOT history is one part of your research. GOV.UK also recommends checking vehicle details and recalls, and an MOT does not replace a condition inspection or a review of service records." },
    ],
    sources: [
      { title: "SMMT: UK used-car sales data and model transactions", url: "https://www.smmt.co.uk/vehicle-data/used-car-sales/" },
      { title: "GOV.UK: Check a used vehicle you’re buying", url: "https://www.gov.uk/checks-when-buying-a-used-car" },
      { title: "TfL: Check your vehicle for London road charges and emissions", url: "https://tfl.gov.uk/modes/driving/check-your-vehicle/?mini-quote=1" },
    ],
    relatedServices: [],
  },
  {
    kind: "used-car",
    model: "Ford Focus",
    marketStats: { period: "Q2 2026", rank: 4, transactions: 52283 },
    buyerFit: "Households comparing practical hatchback and estate options across multiple generations.",
    checkFocus: "Body style and engine, recorded mileage, repeated MOT advisories and test-drive behaviour.",
    slug: "used-ford-focus-buying-guide",
    title: "Used Ford Focus review: a practical pre-purchase guide",
    excerpt: "The Focus remains one of the UK’s most-traded used models. Compare hatchback and estate options, powertrains and the condition of the exact car.",
    description: "A used Ford Focus buyer’s guide: compare body styles and engine choices, review service and MOT history, and check a specific Focus before buying.",
    category: "Used car review",
    readingMinutes: 7,
    publishedAt,
    updatedAt: publishedAt,
    image: "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&w=1500&q=85",
    imageAlt: "A car engine being inspected before purchase",
    introduction: "SMMT recorded 52,283 UK used Ford Focus transactions in Q2 2026, ranking it fourth among models for the quarter. The Focus has been offered across many generations and body styles, including hatchback and estate versions. That choice is useful, but it means reviews and maintenance advice must be matched carefully to the year, engine and gearbox of the car you are considering.",
    keyPoints: [
      "Choose between the actual hatchback or estate and make sure the cabin and boot fit your passengers and luggage.",
      "Check the exact engine and transmission code, service schedule and emissions class rather than relying on the model name.",
      "A consistent MOT and maintenance record is more useful than popularity alone; investigate recurring advisories and unexplained gaps.",
    ],
    sections: [
      {
        heading: "Hatchback or estate: start with how you use the car",
        paragraphs: [
          "The Focus is often shortlisted by drivers who want a practical family car without moving to a large SUV. Some versions are hatchbacks and some generations offer an estate, with different luggage capacity and rear access. Bring a buggy, sports equipment or work kit to check the car you are viewing. Check rear-seat access and comfort if adults or child seats will use it regularly.",
          "Trim and equipment vary, so test the items that matter to you: parking aids, lights, climate controls, infotainment, cruise control and driver-assistance features. Make sure any feature named in the advert is present and functioning on that specific vehicle.",
        ],
      },
      {
        heading: "Look beyond the Focus badge",
        paragraphs: [
          "The model range includes different engines and gearboxes across years. Ask for the vehicle’s exact engine, fuel, gearbox and service schedule. Consider how you drive: annual mileage, journey length and motorway use. Check emissions standards by registration if you will drive in London.",
          "During a test drive, check for consistent starting, idling and acceleration; listen over uneven road surfaces; and pay attention to braking, steering and gearbox operation. Try the vehicle in more than one road condition where possible and observe any warning lights. Stop the test if the car feels unsafe and ask for a qualified assessment.",
        ],
      },
      {
        heading: "Make the records tell a clear story",
        paragraphs: [
          "Check the registration against DVLA information, review MOT history and recalls, and compare each recorded mileage with the seller’s paperwork. Ask for dated service invoices and what is due next under the manufacturer’s schedule. Repeated advisories, long unexplained gaps or a mismatch between the documents and the car deserve a clear answer before you buy.",
          "Inspect the exterior in good light and look for uneven panel gaps, paint differences, tyre wear, warning lamps and evidence of leaks. Check the V5C and vehicle identification number, ask who is selling the car and make sure you understand the terms of sale. If you are not comfortable assessing mechanical condition, consider arranging an independent inspection.",
        ],
      },
      {
        heading: "What makes a Focus a good buy for you?",
        paragraphs: [
          "The right Focus is the one whose body style, engine, equipment and condition fit your own use and budget. Compare the total cost: purchase price, tax, insurance, fuel, maintenance and tyres. For London journeys, use TfL’s number-plate checker for ULEZ and other road charges rather than relying on generic claims in a listing.",
          "SMMT sales volume tells you that many cars changed hands; it cannot tell you whether the particular car is well maintained. Prefer evidence over assumptions. If the history is clear, the test drive is reassuring and any concerns have been independently checked, you can compare that example on its own merits.",
        ],
        note: "This is a model-family buying guide, not a verdict on every Focus generation or a physical inspection of a vehicle.",
      },
    ],
    questions: [
      { question: "Is a used Ford Focus available as an estate?", answer: "Some Focus generations were offered in estate form. Confirm the body style and exact dimensions of the car you are viewing, then check that its load space works for your needs." },
      { question: "Which used Ford Focus is best?", answer: "The best fit depends on the year, engine, gearbox, equipment, condition and your journeys. Compare specific cars with their own service records and MOT history rather than choosing by model reputation alone." },
      { question: "What should I check on a Focus test drive?", answer: "Check starting, idling, gears, brakes, steering, suspension noises, warning lamps and the operation of advertised equipment. Stop if it feels unsafe and seek an independent mechanical inspection if you are unsure." },
    ],
    sources: [
      { title: "SMMT: UK used-car sales data and model transactions", url: "https://www.smmt.co.uk/vehicle-data/used-car-sales/" },
      { title: "GOV.UK: Check a used vehicle you’re buying", url: "https://www.gov.uk/checks-when-buying-a-used-car" },
      { title: "TfL: Check your vehicle for London road charges and emissions", url: "https://tfl.gov.uk/modes/driving/check-your-vehicle/?mini-quote=1" },
    ],
    relatedServices: [],
  },
  {
    kind: "used-car",
    model: "Volkswagen Polo",
    marketStats: { period: "Q2 2026", rank: 5, transactions: 38972 },
    buyerFit: "Drivers who need a smaller hatchback and do not require large-car passenger or luggage space.",
    checkFocus: "Rear-seat and boot fit, year-specific equipment, service records and London emissions status.",
    slug: "used-volkswagen-polo-buying-guide",
    title: "Used Volkswagen Polo review: is this small hatch right for you?",
    excerpt: "A buyer’s guide to the fifth most-traded UK used model in Q2 2026, including space, specification differences and the checks to make before buying.",
    description: "Considering a used Volkswagen Polo? Compare size, engine and trim differences, then check service records, MOT history, recalls and ULEZ status before purchase.",
    category: "Used car review",
    readingMinutes: 7,
    publishedAt,
    updatedAt: publishedAt,
    image: "https://images.unsplash.com/photo-1664263763412-e22fb3c8af93?auto=format&fit=crop&w=1500&q=85",
    imageAlt: "A tyre checked during a used-car inspection",
    introduction: "The Volkswagen Polo was fifth in SMMT’s UK used-car model transaction table for Q2 2026, with 38,972 transactions. It is a small hatchback, but the size, equipment and powertrain of a used Polo depend on its generation and trim. Use this guide to assess whether the car matches your needs and what evidence to ask for before you buy.",
    keyPoints: [
      "Check rear-seat space and the boot yourself; a small hatch may be practical for some buyers but tight for others.",
      "Engine, gearbox, safety equipment and infotainment vary by year and trim, so verify the exact car against its paperwork.",
      "Review MOT history, mileage, service documents and outstanding recalls before arranging a test drive.",
    ],
    sections: [
      {
        heading: "Is the Polo the right size?",
        paragraphs: [
          "A Polo is a small hatchback that may suit a solo driver, couple or household looking for a compact second car. It can be useful where parking space is limited, but the exact cabin and boot size varies by generation. Try the rear seats with the people or child seats that will use them, and check that the boot takes your everyday bags before deciding.",
          "Compare the Polo with other small hatchbacks at a similar price, year and mileage. A newer trim may offer different infotainment and safety features, while an older, higher-spec car may have equipment the newer basic version does not. Check the exact vehicle, not only the badge or trim name in the advert.",
        ],
      },
      {
        heading: "Check the version and maintenance schedule",
        paragraphs: [
          "Polo engines and gearboxes differ by year, and the available features change across generations. Ask the seller for the registration, engine and gearbox details, then verify what schedule applies to that exact car. Check that maintenance invoices correspond with the mileage and that scheduled items are documented rather than relying on a simple verbal assurance.",
          "On a test drive, use every gear, check that the clutch or automatic transmission responds consistently and listen for new noises on different road surfaces. Check the brakes, steering, tyres, dashboard messages and advertised electrical equipment. If something is intermittent, ask the seller to demonstrate the feature or have it assessed before purchase.",
        ],
      },
      {
        heading: "Documents and inspection checks",
        paragraphs: [
          "GOV.UK recommends checking that vehicle details match DVLA information, reviewing MOT history and checking for safety recalls. Compare recorded mileage with service invoices, check that the V5C and vehicle identification details align, and ask about repeated advisories or significant gaps in the history.",
          "Look for uneven tyre wear, visible damage, warning lamps and signs that features do not work. A current MOT does not confirm every mechanical part is healthy. If you cannot confidently assess the car, arrange an independent inspection from a suitably qualified professional before you commit.",
        ],
      },
      {
        heading: "Consider London costs before buying",
        paragraphs: [
          "Check the exact registration with TfL’s vehicle checker before you buy a Polo you plan to use in London. Emissions compliance and road charges depend on the particular vehicle, not only its model name or a broad estimate of its age. Check insurance quotes, vehicle tax, parking, fuel and servicing costs for the exact version as well.",
          "A Polo may be a good fit if its size and running costs suit your daily use and the example has a believable history. Do not let a popular model or a short viewing rush your decision. Ask questions, drive the car, check the paperwork and walk away if something important does not add up.",
        ],
        note: "Popularity data is not a reliability rating. Different model years, engines and maintenance histories can lead to very different ownership experiences.",
      },
    ],
    questions: [
      { question: "Is the Volkswagen Polo a good car for London?", answer: "Its compact hatchback format may suit some London drivers, but emissions status, road charges, parking and running costs depend on the individual vehicle and where you drive. Check the exact registration with TfL." },
      { question: "Is a Polo bigger than a city car?", answer: "Space and dimensions vary by generation and comparison model. Check the exact vehicle and test the seats and boot with your passengers and usual luggage before buying." },
      { question: "What is the safest way to choose between used Polos?", answer: "Compare similar years and versions, inspect the vehicle history and service documents, test drive each example and arrange an independent inspection if anything is unclear." },
    ],
    sources: [
      { title: "SMMT: UK used-car sales data and model transactions", url: "https://www.smmt.co.uk/vehicle-data/used-car-sales/" },
      { title: "GOV.UK: Check a used vehicle you’re buying", url: "https://www.gov.uk/checks-when-buying-a-used-car" },
      { title: "TfL: Check your vehicle for London road charges and emissions", url: "https://tfl.gov.uk/modes/driving/check-your-vehicle/?mini-quote=1" },
    ],
    relatedServices: [],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsForService(serviceSlug: string) {
  return blogPosts.filter((post) => post.relatedServices.some((service) => service.slug === serviceSlug));
}
