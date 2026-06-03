import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  PiShieldCheck, PiLeaf, PiClock, PiCheck,
  PiHeart, PiUsers, PiTrophy, PiSmiley, PiMapPin,
} from "react-icons/pi";
import { SectionHead, PageHero, BottomCTA } from "@/components/site/sections";
import teamImg from "@/assets/team.jpg";
import kitchenImg from "@/assets/kitchen.jpg";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our family-run cleaning service — our story, our values, and the trust we bring to every home we enter.",
};

const values = [
  {
    icon: PiShieldCheck,
    title: "Trust & safety first",
    desc: "Every cleaner is background-checked, reference-verified, and fully bonded before entering any client home.",
  },
  {
    icon: PiLeaf,
    title: "Environmentally responsible",
    desc: "We use eco-certified, non-toxic products that are safe for children, pets, and the planet.",
  },
  {
    icon: PiHeart,
    title: "Care in every detail",
    desc: "We treat your home the way we'd treat our own — noticing the things most people overlook.",
  },
  {
    icon: PiUsers,
    title: "Built on relationships",
    desc: "Recurring clients see the same team each visit, building real familiarity and consistent results.",
  },
  {
    icon: PiTrophy,
    title: "No compromise on quality",
    desc: "Every clean is held to our internal checklist. If something isn't right, we make it right — always.",
  },
  {
    icon: PiSmiley,
    title: "Stress-free experience",
    desc: "From booking to completion, we handle everything. You shouldn't have to think about the details.",
  },
];

const process = [
  {
    n: "01",
    title: "You book online in minutes",
    desc: "Our booking form is fast and straightforward. Share your home details and service preference — we'll handle the rest.",
  },
  {
    n: "02",
    title: "We confirm & customise",
    desc: "Within 4 hours, we confirm your quote, answer any questions, and tailor the scope to your specific home.",
  },
  {
    n: "03",
    title: "Your team arrives prepared",
    desc: "We show up on time with everything needed — supplies, equipment, and a clear plan for your home.",
  },
  {
    n: "04",
    title: "You come home to clean",
    desc: "We complete the clean, lock up if you're away, and send a completion note. You return to a spotless space.",
  },
];

const highlights = [
  { n: "10+", l: "Years of experience" },
  { n: "500+", l: "Happy families served" },
  { n: "100%", l: "Satisfaction guaranteed" },
];

const credentials = [
  { icon: PiShieldCheck, label: "Bonded & Insured" },
  { icon: PiLeaf, label: "Eco-Friendly Products" },
  { icon: PiClock, label: "Flexible Scheduling" },
  { icon: PiCheck, label: "Background-Checked Staff" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero
        eyebrow="Our story"
        title="A family business built on trust and care"
        desc="We bring the same attention and care to your home that we'd bring to our own — with a team that's vetted, trained, and genuinely invested in the result."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-12">
        <div className="grid gap-14 md:grid-cols-2 md:items-center lg:gap-20">
          <div className="relative">
            <Image
              src={teamImg}
              alt="The Stress Relief cleaning team"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-xl shadow-foreground/10"
            />
            <Image
              src={kitchenImg}
              alt="Freshly cleaned kitchen"
              width={400}
              height={300}
              loading="lazy"
              className="absolute -bottom-8 -right-4 hidden w-52 rounded-2xl border-4 border-background object-cover shadow-lg md:block"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              We started this to give families their time back
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Stress Relief Family Cleaning began when our founder — tired of watching busy parents spend precious weekends scrubbing instead of living — decided to build a service that people could genuinely rely on.
              </p>
              <p>
                We&apos;re not a faceless franchise. We&apos;re a family-run operation that hires locally, trains carefully, and stands behind every single clean we deliver.
              </p>
              <p>
                Our cleaners are long-term team members — not gig workers — which means you get experienced professionals who are invested in doing exceptional work, every time.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((h) => (
                <div key={h.l} className="rounded-2xl bg-card p-5 text-center shadow-card">
                  <div className="text-3xl font-bold text-primary">{h.n}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{h.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            eyebrow="Our values"
            title="What we stand for"
            desc="These aren't slogans — they're the principles we hold every team member to, on every job."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl bg-card p-7 shadow-card">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead
          eyebrow="Our process"
          title="How we approach every clean"
          desc="A consistent, thoughtful process is what separates a good clean from one that truly makes a difference."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => (
            <div key={step.n}>
              <div className="mb-4 text-5xl font-black leading-none text-primary/10 select-none">
                {step.n}
              </div>
              <h3 className="font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHead
            eyebrow="Credentials"
            title="Everything in place before we arrive"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {credentials.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-card">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="font-semibold text-foreground">{c.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead
          eyebrow="Where we serve"
          title="Proudly serving Southern Ontario"
          desc="We clean homes across the province — from the GTA to Niagara, Waterloo Region, and beyond."
        />
        <div className="mt-12 flex flex-wrap gap-3">
          {[
            "Mississauga", "Oakville", "Toronto", "Kitchener", "Waterloo",
            "Guelph", "London", "Windsor", "Niagara Falls", "St. Catharines",
          ].map((city) => (
            <div
              key={city}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 shadow-sm"
            >
              <PiMapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span className="text-sm font-medium text-foreground">{city}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Not sure if we cover your area?{" "}
          <Link href="/contact" className="font-medium text-primary hover:underline">
            Get in touch
          </Link>{" "}
          — we&apos;re always expanding.
        </p>
      </section>

      <BottomCTA
        title="Ready to experience the difference?"
        desc="Join hundreds of families who trust us with their homes every week."
      />
    </main>
  );
}
