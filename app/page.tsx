import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  PiShieldCheck, PiStarFill, PiLeaf, PiUsers, PiClock, PiCheckCircle,
  PiArrowsCounterClockwise, PiBroom, PiDoorOpen, PiHouse, PiCaretRight,
  PiCalendarCheck, PiPhone,
} from "react-icons/pi";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-living-room.jpg";
import { SectionHead } from "@/components/site/sections";
import { QuoteForm } from "@/components/site/quote-form";

export const metadata: Metadata = {
  title: {
    absolute: "Stress Relief Family Cleaning Services | Professional Home Cleaning",
  },
  description:
    "Family-owned, professional cleaning services designed to give you back your time. Recurring, one-time, and deep cleans with a 100% satisfaction guarantee.",
};

const PLAN_TO_SERVICE: Record<string, string> = {
  deep: "deep",
  recurring: "recurring",
  extra: "movein",
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;
  const serviceDefault = plan ? PLAN_TO_SERVICE[plan] : undefined;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <TrustBar />
      <HowItWorks />
      <ServicesPreview />
      <WhyChooseUs />
      <PullQuote />
      <QuoteForm serviceDefault={serviceDefault} />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-muted/40 to-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32 md:items-center lg:gap-16">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <PiShieldCheck className="h-3.5 w-3.5" />
            Bonded, insured &amp; background-checked
          </div>
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            A cleaner home.
            <br />
            <span className="text-primary">A calmer you.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Stress Relief Family Cleaning delivers spotless, professional home
            cleaning so you can spend less time scrubbing and more time on what
            truly matters.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="#quote">Book a clean</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <Link href="/services">See our services</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-1.5">
              {["1", "2", "3", "4", "5"].map((s) => (
                <PiStarFill key={s} className="h-4 w-4 text-primary" />
              ))}
              <span className="ml-1 font-semibold text-foreground">4.9</span>
              <span className="text-muted-foreground">· 500+ reviews</span>
            </div>
            <div className="text-muted-foreground">|</div>
            <div className="text-muted-foreground">No contracts required</div>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl shadow-foreground/10">
            <Image
              src={heroImg}
              alt="Bright, clean living room"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="mt-6 rounded-2xl bg-card p-4 shadow-lg md:absolute md:-bottom-6 md:-left-6 md:mt-0 md:w-72">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <PiShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">100% Satisfaction Guarantee</div>
                <div className="text-xs text-muted-foreground">
                  Not happy? We return and re-clean at no charge.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { value: "10+", label: "Years in business" },
    { value: "500+", label: "Families served" },
    { value: "4.9★", label: "Average rating" },
    { value: "100%", label: "Satisfaction guaranteed" },
  ];

  return (
    <div className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: PiCalendarCheck,
      title: "Request your clean",
      desc: "Fill out our quick booking form with your home details, service type, and preferred schedule. It takes under two minutes.",
    },
    {
      n: "02",
      icon: PiPhone,
      title: "We confirm within 4 hours",
      desc: "We review your request, provide a transparent quote with no hidden fees, and lock in your appointment.",
    },
    {
      n: "03",
      icon: PiBroom,
      title: "We clean. You relax.",
      desc: "Our vetted, trained team arrives fully equipped with eco-friendly supplies and follows your personalised checklist.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHead
        eyebrow="How it works"
        title="Three easy steps to a spotless home"
        desc="We make booking simple so you can focus on what matters — coming home to a space that feels brand new."
      />
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.n} className="relative">
              <div className="mb-5 text-6xl font-black leading-none text-primary/10 select-none">
                {step.n}
              </div>
              <div className="relative mb-4">
                {i < steps.length - 1 && (
                  <div className="absolute left-16 right-0 top-6 hidden h-px bg-border md:block" />
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ServicesPreview() {
  const services = [
    {
      icon: PiArrowsCounterClockwise,
      title: "Recurring Cleaning",
      desc: "Weekly, bi-weekly, or monthly — a consistent trusted team keeps your home always guest-ready.",
    },
    {
      icon: PiBroom,
      title: "Deep Cleaning",
      desc: "A thorough top-to-bottom detail for first visits, seasonal refreshes, or a fresh start.",
    },
    {
      icon: PiDoorOpen,
      title: "Move In / Move Out",
      desc: "Full interior detail so the home you're leaving or arriving in is spotless for the next chapter.",
    },
    {
      icon: PiHouse,
      title: "Special Occasions",
      desc: "Pre-event prep and post-party cleanup so you can host with zero stress.",
    },
  ];

  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Our services"
          title="A clean for every need"
          desc="From weekly maintenance to one-time deep cleans — every service is performed by vetted professionals who treat your home like their own."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.title}
                href="/services"
                className="group rounded-2xl bg-card p-7 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-primary">
                  Learn more <PiCaretRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" className="rounded-full px-8" asChild>
            <Link href="/services">View all services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    {
      icon: PiShieldCheck,
      title: "Bonded & Insured",
      desc: "Full liability insurance and bonding protects your home and gives you complete peace of mind on every visit.",
    },
    {
      icon: PiLeaf,
      title: "Eco-Friendly Products",
      desc: "We use safe, environmentally responsible cleaning products — gentle on your family, pets, and the planet.",
    },
    {
      icon: PiUsers,
      title: "Background-Checked Staff",
      desc: "Every cleaner is vetted, reference-checked, and trained to our exacting standards before entering your home.",
    },
    {
      icon: PiClock,
      title: "Flexible Scheduling",
      desc: "Morning, afternoon, or weekend slots — we work around your schedule, not the other way around.",
    },
    {
      icon: PiCheckCircle,
      title: "Satisfaction Guarantee",
      desc: "Not happy with the result? We return within 24 hours to make it right — always at no extra charge.",
    },
    {
      icon: PiStarFill,
      title: "Consistent Team",
      desc: "You'll see the same familiar faces each visit, building real trust and better results over time.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHead
        eyebrow="Why families choose us"
        title="The standard every clean is held to"
        desc="We don't just clean — we earn your trust on every visit through consistent, careful, professional service."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r) => {
          const Icon = r.icon;
          return (
            <div key={r.title} className="rounded-2xl bg-card p-7 shadow-card">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PullQuote() {
  return (
    <section className="bg-primary py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="text-6xl font-black leading-none text-white/15 select-none">&ldquo;</div>
        <blockquote className="mt-2 text-xl font-medium leading-relaxed text-primary-foreground md:text-2xl">
          Coming home after their first clean was the most relaxing moment
          I&apos;ve had in months. Truly stress-relieving.
        </blockquote>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="flex gap-1">
            {["1", "2", "3", "4", "5"].map((s) => (
              <PiStarFill key={s} className="h-4 w-4 text-white" />
            ))}
          </div>
          <span className="text-sm text-primary-foreground/80">
            — Sarah M., bi-weekly client
          </span>
        </div>
        <div className="mt-8">
          <Button
            className="rounded-full bg-white px-8 text-primary hover:bg-white/90"
            size="lg"
            asChild
          >
            <Link href="/testimonials">Read more reviews</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
