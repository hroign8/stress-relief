import type { Metadata } from "next";
import Link from "next/link";
import { SectionHead, PageHero, BottomCTA } from "@/components/site/sections";
import { PiShieldCheck } from "react-icons/pi";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for first-visit deep cleans, regular recurring cleaning, and extra services. No hidden fees, no surprises.",
};

const tiers = [
  {
    name: "First Visit Deep Cleaning",
    plan: "deep",
    price: "320",
    unit: "/ first visit",
    tag: "Where everyone starts",
    featured: false,
    desc: "Every new client starts here. A thorough top-to-bottom reset that brings your home to its best before regular cleaning begins.",
    features: [
      "Kitchen deep cleaning",
      "Bathrooms scrubbed & sanitised",
      "Floors vacuumed & mopped",
      "Dusting throughout",
      "Surface sanitizing",
      "Inside fridge & inside oven",
    ],
  },
  {
    name: "Regular Cleaning",
    plan: "recurring",
    price: "120",
    unit: "/ visit",
    tag: "Best Value",
    featured: true,
    desc: "After your first deep clean, keep your home effortlessly fresh on a schedule that fits your life. Our most popular option.",
    features: [
      "Weekly cleaning",
      "Bi-weekly cleaning",
      "Monthly cleaning",
      "Picks up after your first deep clean",
      "Same trusted team every visit",
      "10% off all extra services",
    ],
  },
  {
    name: "Extra Services",
    plan: "extra",
    price: "180",
    unit: "/ service",
    tag: "Additional cost",
    featured: false,
    desc: "Add-on services for the spaces that need extra attention — booked alongside any clean and quoted per job.",
    features: [
      "Garage cleaning & organization",
      "Basement cleaning",
      "Storage room cleaning",
      "Decluttering & organizing",
      "Move-in / move-out cleaning",
    ],
  },
];

const alwaysIncluded = [
  "Eco-friendly products",
  "All supplies & equipment",
  "Bonded & insured team",
  "Satisfaction guarantee",
  "No lock-in contracts",
  "Flexible scheduling",
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero
        eyebrow="Transparent pricing"
        title="Simple, honest rates"
        desc="Starting prices based on a standard home. Final quotes confirmed after a quick walkthrough — no surprises, ever."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-12">
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {tiers.map((tier) =>
            tier.featured ? (
              <div
                key={tier.name}
                className="relative flex flex-col rounded-2xl bg-primary p-8 shadow-xl shadow-primary/20"
              >
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-primary shadow">
                  {tier.tag}
                </div>
                <h3 className="mt-2 text-xl font-bold text-primary-foreground">{tier.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-primary-foreground">${tier.price}</span>
                  <span className="text-sm text-primary-foreground/70">{tier.unit}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">{tier.desc}</p>
                <ul className="mt-7 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-primary-foreground/90">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-foreground/80" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-8 w-full rounded-full bg-white text-primary hover:bg-white/90"
                  size="lg"
                  asChild
                >
                  <Link href={`/?plan=${tier.plan}#quote`}>Get started</Link>
                </Button>
              </div>
            ) : (
              <div
                key={tier.name}
                className="flex flex-col rounded-2xl bg-card p-8 shadow-card"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {tier.tag}
                </div>
                <h3 className="mt-2 text-xl font-bold text-foreground">{tier.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-foreground">${tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.unit}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tier.desc}</p>
                <ul className="mt-7 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 w-full rounded-full" variant="outline" size="lg" asChild>
                  <Link href={`/?plan=${tier.plan}#quote`}>Get started</Link>
                </Button>
              </div>
            )
          )}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          * Prices are starting estimates for a standard-sized home. Final quote confirmed after a brief walkthrough. Taxes not included.
        </p>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHead
            eyebrow="No hidden extras"
            title="Everything is always included"
            desc="Every service at every price point includes the same standard of care, supplies, and guarantees."
          />
          <div className="mx-auto mt-12 grid max-w-2xl gap-3 sm:grid-cols-2 md:grid-cols-3">
            {alwaysIncluded.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-card px-5 py-4 shadow-card">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <PiShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-foreground">100% Satisfaction Guarantee</div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  If you&apos;re not completely satisfied with your clean, contact us within 24 hours and we&apos;ll return to make it right — at absolutely no extra cost. No arguments, no hassle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <SectionHead
          eyebrow="Pricing FAQ"
          title="Questions about our rates"
        />
        <div className="mt-12 divide-y divide-border">
          {[
            {
              q: "How is my final price determined?",
              a: "Starting prices are based on a standard-sized home. After you submit your booking request, we'll confirm the exact scope and provide a final quote before any work begins. For recurring clients, prices stay locked after the initial walkthrough.",
            },
            {
              q: "Is there a contract for recurring cleans?",
              a: "No contracts, ever. You can pause, reschedule, or cancel your recurring service at any time with 48 hours' notice. We earn your loyalty through results, not paperwork.",
            },
            {
              q: "Do you charge extra for pets or large homes?",
              a: "Homes with pets or additional rooms beyond a standard 3-bedroom layout may be adjusted at the quoting stage. We'll always be upfront about any differences before we start.",
            },
            {
              q: "What payment methods do you accept?",
              a: "We accept all major credit and debit cards, e-transfer, and cash. Payment is collected after the clean is completed to your satisfaction.",
            },
            {
              q: "Can I get a discount for booking multiple services?",
              a: "Yes — regular cleaning clients automatically receive 10% off all extra services like garage, basement, and move-in/move-out cleaning. Bundle several extras into one visit and we'll work out the best rate. Ask us when you book.",
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
        title="Get your free quote today"
        desc="No commitment, no contracts. Just honest pricing and a cleaner home."
      />
    </main>
  );
}
