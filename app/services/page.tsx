import type { Metadata } from "next";
import { type IconType } from "react-icons";
import {
  PiArrowsCounterClockwise, PiBroom, PiDoorOpen,
  PiHardHat, PiBuildings, PiConfetti,
} from "react-icons/pi";
import { SectionHead, PageHero, BottomCTA } from "@/components/site/sections";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional cleaning services for recurring, deep clean, move-in/move-out, post-construction, commercial, and special occasions.",
};

const services: {
  icon: IconType;
  title: string;
  desc: string;
  points: string[];
}[] = [
  {
    icon: PiArrowsCounterClockwise,
    title: "Recurring Cleaning",
    desc: "Weekly, bi-weekly, or monthly — a consistent trusted team keeps your home always fresh and guest-ready without you lifting a finger.",
    points: [
      "Kitchens & all bathrooms",
      "Dusting & vacuuming throughout",
      "All floors mopped or swept",
      "Counters, sinks & fixtures polished",
      "Trash emptied & replaced",
    ],
  },
  {
    icon: PiBroom,
    title: "Deep Cleaning",
    desc: "A thorough top-to-bottom detail perfect for first-time visits, seasonal refreshes, or reclaiming your home after a busy stretch.",
    points: [
      "Everything in a standard clean",
      "Baseboards, vents & door frames",
      "Appliance exteriors scrubbed",
      "Inside microwave & oven",
      "Inside cabinets on request",
    ],
  },
  {
    icon: PiDoorOpen,
    title: "Move In / Move Out",
    desc: "Full interior detail that leaves the home spotless — whether you're handing over keys or welcoming a fresh start.",
    points: [
      "Complete interior detail",
      "Inside oven, fridge & dishwasher",
      "All cabinets & drawers cleaned",
      "Windows & window sills",
      "Light switch plates & outlets",
    ],
  },
  {
    icon: PiHardHat,
    title: "Post-Construction",
    desc: "Dust, debris, and residue removal after renovations so you can finally enjoy the new space you worked so hard for.",
    points: [
      "Fine construction dust removal",
      "Window glass & frames detailed",
      "All surfaces wiped down",
      "Floor scrub & polish",
      "Air vent & ceiling fan cleaning",
    ],
  },
  {
    icon: PiBuildings,
    title: "Office & Commercial",
    desc: "Reliable, after-hours cleaning for offices, studios, and small commercial spaces with custom checklists to match your needs.",
    points: [
      "After-hours & weekend available",
      "Restrooms & break rooms",
      "Desk & surface sanitation",
      "Restocking supplies on request",
      "Custom recurring checklists",
    ],
  },
  {
    icon: PiConfetti,
    title: "Special Occasions",
    desc: "Pre-event polish and post-party cleanup — so you can focus on hosting and leave the mess to us.",
    points: [
      "Pre-event deep polish",
      "Kitchen & bathroom prep",
      "Post-party full cleanup",
      "Same-week availability",
      "Flexible timing around your event",
    ],
  },
];

const standardIncludes = [
  "All bedrooms dusted and vacuumed",
  "Kitchen surfaces, counters & sink",
  "All bathrooms scrubbed & sanitised",
  "Floors mopped or vacuumed",
  "Mirrors and glass surfaces wiped",
  "Trash emptied in all rooms",
  "Beds made (linens provided by client)",
  "Cobwebs removed",
  "Eco-friendly products throughout",
  "Your home locked up safely when we leave",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero
        eyebrow="Our services"
        title="Cleaning options designed for every schedule"
        desc="Choose the service that fits your life. Every clean is performed by trained, vetted professionals who care about the details."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-12">
        <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl bg-card p-7 shadow-card"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            eyebrow="Every clean, every time"
            title="What's always included as standard"
            desc="Regardless of the service you choose, this is the baseline every visit is held to."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="grid gap-3 sm:grid-cols-2">
              {standardIncludes.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-card px-5 py-4 shadow-card">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-sm leading-relaxed text-foreground">
              <span className="font-semibold text-primary">Need something specific?</span>{" "}
              Every clean can be customised. Just mention your preferences in the booking form — whether it&apos;s inside the fridge, extra attention to a playroom, or avoiding certain products due to allergies.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <SectionHead
          eyebrow="Common questions"
          title="Frequently asked about our services"
        />
        <div className="mt-12 divide-y divide-border">
          {[
            {
              q: "Do I need to provide cleaning supplies?",
              a: "No — we bring everything. Our team arrives with professional-grade, eco-friendly products and all the equipment needed. If you have a preferred product you'd like us to use, just let us know.",
            },
            {
              q: "Do I need to be home during the clean?",
              a: "Not at all. Many clients give us a key or door code. We're fully bonded and insured, and we'll lock up securely when we leave. You'll receive a completion notification when we're done.",
            },
            {
              q: "What if I have pets?",
              a: "We love animals! Just let us know in the booking form so we can prepare accordingly — including which rooms to avoid or which doors to keep closed.",
            },
            {
              q: "How long does a clean take?",
              a: "It depends on the size of your home and the service type. A standard 3-bedroom clean typically takes 2–3 hours. Deep cleans run longer. We'll give you a time estimate with your quote.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="py-6">
              <h3 className="font-semibold text-foreground">{q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <BottomCTA
        title="Ready to book your clean?"
        desc="Get a free, no-obligation quote within 4 hours. No contracts, no surprises."
      />
    </main>
  );
}
