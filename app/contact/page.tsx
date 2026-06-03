import type { Metadata } from "next";
import { PiEnvelope, PiPhone, PiMapPin, PiClock, PiCheckCircle } from "react-icons/pi";
import { SectionHead, PageHero } from "@/components/site/sections";
import { ContactForm } from "@/components/site/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Stress Relief Family Cleaning Services for quotes, questions, and scheduling support.",
};

const contactItems = [
  {
    icon: PiPhone,
    label: "Call or text us",
    value: "(226) 961-9744",
    sub: "Mon–Sat · 8am – 6pm",
    href: "tel:+12269619744",
  },
  {
    icon: PiEnvelope,
    label: "Email us",
    value: "stressrelieffamilycleaningserv@gmail.com",
    sub: "We reply within 4 hours",
    href: "mailto:stressrelieffamilycleaningserv@gmail.com",
  },
  {
    icon: PiMapPin,
    label: "Service area",
    value: "Across Southern Ontario",
    sub: "Mississauga · Oakville · Toronto · Kitchener · Waterloo · Guelph · London · Windsor · Niagara Falls · St. Catharines · and more",
    href: undefined,
  },
];

const hours = [
  { day: "Monday – Friday", time: "8:00 am – 6:00 pm" },
  { day: "Saturday", time: "9:00 am – 4:00 pm" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero
        eyebrow="Contact us"
        title="We're here to help"
        desc="Reach out for a quote, to ask a question, or to talk through what service is right for your home. We respond fast."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-12">
        <div className="grid gap-6 md:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-2xl bg-card p-7 shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block font-semibold text-foreground transition hover:text-primary"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="mt-1 font-semibold text-foreground">{item.value}</div>
                )}
                <div className="mt-1 text-sm text-muted-foreground">{item.sub}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHead
                eyebrow="Send a message"
                title="Get in touch"
                desc="Fill out the form and we'll get back to you within 4 business hours."
              />
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-card p-7 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <PiClock className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">Business hours</h3>
                </div>
                <div className="mt-5 divide-y divide-border">
                  {hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between py-3 text-sm">
                      <span className="text-foreground">{h.day}</span>
                      <span className={h.time === "Closed" ? "text-muted-foreground" : "font-medium text-foreground"}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Cleaning appointments are available outside of office hours — just mention your preferred time when booking.
                </p>
              </div>

              <div className="rounded-2xl bg-card p-7 shadow-card">
                <h3 className="font-semibold text-foreground">What happens after you reach out</h3>
                <ul className="mt-5 space-y-4">
                  {[
                    "We review your message within 4 business hours.",
                    "We confirm the scope of your clean and provide a transparent quote.",
                    "You choose a date and time — no pressure.",
                    "Our team arrives prepared and ready. You relax.",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {i + 1}
                      </div>
                      <span className="text-sm leading-relaxed text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <div className="flex items-start gap-3">
                  <PiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-foreground">
                    <span className="font-semibold">No commitment required.</span>{" "}
                    Getting a quote is completely free. You only book if you&apos;re happy with what we put together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
