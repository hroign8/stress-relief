"use client";

import { useState, type FormHTMLAttributes } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  type FormSubmitEvent = Parameters<NonNullable<FormHTMLAttributes<HTMLFormElement>["onSubmit"]>>[0];

  const onSubmit = async (e: FormSubmitEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    delete (data as Record<string, unknown>).company;
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      toast.success("Message sent! We'll be in touch within 4 hours.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please call or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-12 rounded-2xl bg-card shadow-card">
      {/* Honeypot — hidden from humans; bots that fill it are silently dropped. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
        <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-label="Company" />
      </div>
      <div className="p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label className="text-sm font-medium">First name</Label>
            <Input name="firstName" required autoComplete="given-name" />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Last name</Label>
            <Input name="lastName" required autoComplete="family-name" />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Email</Label>
            <Input type="email" name="email" required autoComplete="email" placeholder="name@email.com" />
          </div>
          <div className="space-y-2">
            <Label className="flex items-baseline gap-1.5 text-sm font-medium">
              Phone
              <span className="text-xs font-normal text-muted-foreground">optional</span>
            </Label>
            <Input type="tel" name="phone" autoComplete="tel" placeholder="(204) 555-0184" />
          </div>
        </div>
        <div className="mt-5 space-y-2">
          <Label className="flex items-baseline gap-1.5 text-sm font-medium">
            What can we help with?
            <span className="text-xs font-normal text-muted-foreground">optional</span>
          </Label>
          <Select name="subject">
            <SelectTrigger>
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="quote">Get a quote</SelectItem>
              <SelectItem value="scheduling">Scheduling question</SelectItem>
              <SelectItem value="existing">Existing booking</SelectItem>
              <SelectItem value="feedback">Feedback</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-5 space-y-2">
          <Label className="text-sm font-medium">Message</Label>
          <Textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us a little about your home and what you're looking for."
          />
        </div>
        <Button
          type="submit"
          size="lg"
          className="mt-6 w-full rounded-full"
          disabled={submitting}
        >
          {submitting ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
