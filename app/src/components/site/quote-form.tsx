"use client";

import { useState, type FormHTMLAttributes, type ReactNode } from "react";
import { PiShieldCheck } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { SectionHead } from "./sections";

export function QuoteForm({ serviceDefault }: { readonly serviceDefault?: string }) {
  const [submitting, setSubmitting] = useState(false);

  type FormSubmitEvent = Parameters<NonNullable<FormHTMLAttributes<HTMLFormElement>["onSubmit"]>>[0];

  const onSubmit = async (e: FormSubmitEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      toast.success("Quote request sent! We'll get back to you within 4 hours.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="quote" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHead
          eyebrow="Book your clean"
          title="Get your free quote today"
          desc="Tell us about your home and we'll confirm your appointment with a transparent quote — usually within 4 hours."
        />
        <form
          onSubmit={onSubmit}
          className="mt-12 rounded-2xl bg-card shadow-card"
        >
          {/* Honeypot — hidden from humans; bots that fill it are silently dropped. */}
          <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-label="Company" />
          </div>
          <div className="p-8 md:p-10">
            <FormGroup label="Your details">
              <Field label="First name" className="md:col-span-3">
                <Input name="firstName" required autoComplete="given-name" />
              </Field>
              <Field label="Last name" className="md:col-span-3">
                <Input name="lastName" required autoComplete="family-name" />
              </Field>
              <Field label="Email" className="md:col-span-3">
                <Input type="email" name="email" required autoComplete="email" placeholder="name@email.com" />
              </Field>
              <Field label="Phone" className="md:col-span-3">
                <Input type="tel" name="phone" required autoComplete="tel" placeholder="(204) 555-0184" />
              </Field>
            </FormGroup>

            <FormGroup label="Your home" className="mt-9">
              <Field label="Street address" className="md:col-span-4">
                <Input name="address" required autoComplete="street-address" placeholder="House number and street" />
              </Field>
              <Field label="Postal code" className="md:col-span-2">
                <Input name="postal" required autoComplete="postal-code" placeholder="A1A 1A1" />
              </Field>
              <Field label="Type of home" optional className="md:col-span-3">
                <Select name="homeType">
                  <SelectTrigger>
                    <SelectValue placeholder="Select home type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment / Condo</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="house">Detached house</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Service type" optional className="md:col-span-3">
                <Select name="service" defaultValue={serviceDefault}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="onetime">One-time clean</SelectItem>
                    <SelectItem value="recurring">Recurring clean</SelectItem>
                    <SelectItem value="deep">Deep clean</SelectItem>
                    <SelectItem value="movein">Move in / move out</SelectItem>
                    <SelectItem value="postconstruction">Post-construction</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Anything we should know?" optional className="md:col-span-6">
                <Textarea
                  name="message"
                  rows={4}
                  placeholder="Bedrooms and bathrooms, pets, the days that work for you — whatever helps us quote accurately."
                />
              </Field>
            </FormGroup>

            <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <PiShieldCheck className="h-4 w-4 shrink-0 text-primary" />
                Your details stay private — we only use them to prepare your quote.
              </p>
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full px-8 sm:w-auto"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Get my free quote"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function FormGroup({
  label,
  className,
  children,
}: {
  readonly label: string;
  readonly className?: string;
  readonly children: ReactNode;
}) {
  return (
    <div className={className}>
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </h3>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-6">{children}</div>
    </div>
  );
}

function Field({
  label,
  optional,
  className,
  children,
}: {
  readonly label: string;
  readonly optional?: boolean;
  readonly className?: string;
  readonly children: ReactNode;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label className="flex items-baseline gap-1.5 text-sm font-medium">
        {label}
        {optional && (
          <span className="text-xs font-normal text-muted-foreground">optional</span>
        )}
      </Label>
      {children}
    </div>
  );
}
