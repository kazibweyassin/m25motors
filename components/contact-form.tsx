"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarRange, MessageCircleMore, MessageSquareText } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { getWhatsAppHref } from "@/lib/site";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(8, "Please provide a contact number."),
  email: z.string().email("Please enter a valid email address.").optional().or(z.literal("")),
  vehicle: z.string().min(2, "Please tell us the vehicle make and model."),
  registration: z.string().optional(),
  service: z.string().min(1, "Please select the service you need."),
  description: z.string().min(10, "Please add a few details about the problem."),
  preferredDate: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const defaultValues: ContactFormValues = {
  name: "",
  phone: "",
  email: "",
  vehicle: "",
  registration: "",
  service: "",
  description: "",
  preferredDate: "",
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const onSubmit = (values: ContactFormValues) => {
    const message = [
      "Hi M25 Motors, I would like to ask about a booking.",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : "",
      `Vehicle: ${values.vehicle}`,
      values.registration ? `Registration: ${values.registration}` : "",
      `Service: ${values.service}`,
      `Details: ${values.description}`,
      values.preferredDate ? `Preferred date: ${values.preferredDate}` : "",
    ].filter(Boolean).join("\n");
    const href = getWhatsAppHref(message);
    if (href) window.location.assign(href);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm sm:space-y-6 sm:rounded-[2rem] sm:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-600">
          <MessageSquareText className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-zinc-900">Request a repair or quote</h3>
          <p className="text-sm text-zinc-600">Your details will open as a message for you to review and send.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-700">Customer name</label>
          <input
            id="name"
            {...register("name")}
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-400 focus:bg-white"
          />
          {errors.name ? <p id="name-error" role="alert" className="mt-2 text-sm text-red-600">{errors.name.message}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-zinc-700">Phone number</label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            autoComplete="tel"
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-400 focus:bg-white"
          />
          {errors.phone ? <p id="phone-error" role="alert" className="mt-2 text-sm text-red-600">{errors.phone.message}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-700">Email address</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-400 focus:bg-white"
          />
          {errors.email ? <p id="email-error" role="alert" className="mt-2 text-sm text-red-600">{errors.email.message}</p> : null}
        </div>

        <div>
          <label htmlFor="vehicle" className="mb-2 block text-sm font-medium text-zinc-700">Vehicle make and model</label>
          <input
            id="vehicle"
            {...register("vehicle")}
            required
            aria-invalid={Boolean(errors.vehicle)}
            aria-describedby={errors.vehicle ? "vehicle-error" : undefined}
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-400 focus:bg-white"
          />
          {errors.vehicle ? <p id="vehicle-error" role="alert" className="mt-2 text-sm text-red-600">{errors.vehicle.message}</p> : null}
        </div>

        <div>
          <label htmlFor="registration" className="mb-2 block text-sm font-medium text-zinc-700">Registration number</label>
          <input
            id="registration"
            {...register("registration")}
            autoComplete="off"
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-400 focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-zinc-700">Service required</label>
          <select
            id="service"
            {...register("service")}
            required
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-400 focus:bg-white"
          >
            <option value="">Select a service</option>
            <option value="Vehicle Servicing">Vehicle Servicing</option>
            <option value="Vehicle Diagnostics">Vehicle Diagnostics</option>
            <option value="Brake Repairs">Brake Repairs</option>
            <option value="Engine Repairs">Engine Repairs</option>
            <option value="Clutch & Transmission">Clutch & Transmission</option>
            <option value="MOT Preparation & Repairs">MOT Preparation & Repairs</option>
            <option value="Air Conditioning">Air Conditioning</option>
            <option value="Tyres & Suspension">Tyres & Suspension</option>
            <option value="Electrical Faults">Electrical Faults</option>
          </select>
          {errors.service ? <p id="service-error" role="alert" className="mt-2 text-sm text-red-600">{errors.service.message}</p> : null}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="description" className="mb-2 block text-sm font-medium text-zinc-700">Brief description of the problem</label>
          <textarea
            id="description"
            rows={5}
            {...register("description")}
            required
            aria-invalid={Boolean(errors.description)}
            aria-describedby={errors.description ? "description-error" : undefined}
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition focus:border-zinc-400 focus:bg-white"
          />
          {errors.description ? <p id="description-error" role="alert" className="mt-2 text-sm text-red-600">{errors.description.message}</p> : null}
        </div>

        <div>
          <label htmlFor="preferredDate" className="mb-2 block text-sm font-medium text-zinc-700">Preferred date</label>
          <div className="relative">
            <CalendarRange className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              id="preferredDate"
              type="date"
              {...register("preferredDate")}
              className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-3 pl-11 pr-4 outline-none transition focus:border-zinc-400 focus:bg-white"
            />
          </div>
        </div>

      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#1fbd5b] sm:w-auto"
      >
        <MessageCircleMore className="h-4 w-4" />
        Continue to WhatsApp
      </button>
      <p className="text-xs leading-5 text-zinc-500">
        Continuing opens WhatsApp with the details above. Review the message before sending. See our <Link href="/privacy" className="underline underline-offset-2 hover:text-zinc-900">privacy information</Link>.
      </p>
    </form>
  );
}
