import type { Metadata } from "next";
import { PiStarFill } from "react-icons/pi";
import { PageHero, BottomCTA } from "@/components/site/sections";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read testimonials from families who trust Stress Relief Family Cleaning Services for their homes every week.",
};

const reviews = [
  {
    quote:
      "I had a great experience with the cleaning service. My home looked very clean and organized after the service and paid close attention to detail.",
    name: "Senait Emaha",
  },
  {
    quote:
      "Stress Relief Family Cleaning did an amazing job! Huge thanks to Saron and her team for being so professional, friendly, and thorough. They left everything spotless and made the whole experience completely stress-free. The house felt so fresh and clean after they finished. I would definitely recommend them to anyone looking for reliable cleaning services.",
    name: "Danayit Akelom",
  },
  {
    quote:
      "Phenomenal Service! Stress Relief Family Cleaning completely lived up to their name. They were professional, incredibly thorough, and left our place absolutely spotless. Coming home to a clean house genuinely took a huge weight off my shoulders. If you need reliable, top-tier cleaning and some peace of mind, I highly recommend them!",
    name: "Fthawi ft Okbay",
  },
  {
    quote:
      "Stress gone the moment her hands and gadget touched everything ,,,, bling bling ✨ Very professional. Thanks to Saron Bereket.",
    name: "Akrem Mohammed",
  },
];

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"] as const;

function Stars({ count = 5, className = "" }: { readonly count?: number; readonly className?: string }) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {STAR_KEYS.slice(0, count).map((k) => (
        <PiStarFill key={k} className="h-4 w-4 text-primary" />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero
        eyebrow="Client reviews"
        title="Loved by families across the city"
        desc="Real reviews from real clients on Google. We're proud of every one."
      />

      <section className="bg-card border-y border-border py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-12">
            <div>
              <div className="text-5xl font-bold text-primary">5.0</div>
              <Stars className="mt-2 justify-center" />
              <div className="mt-1 text-sm text-muted-foreground">Average rating</div>
            </div>
            <div className="hidden h-16 w-px bg-border sm:block" />
            <div>
              <div className="text-5xl font-bold text-foreground">6</div>
              <div className="mt-2 text-sm text-muted-foreground">Google reviews</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-2xl bg-card p-7 shadow-card"
            >
              <div className="text-5xl font-black leading-none text-primary/15 select-none">&ldquo;</div>
              <Stars className="mt-1" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                {review.quote}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <div className="text-sm font-semibold text-foreground">{review.name}</div>
                <div className="text-xs text-muted-foreground">Google Review</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our guarantee
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Not satisfied? We&apos;ll make it right.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Every clean comes with our 100% satisfaction guarantee. If something isn&apos;t right, contact us within 24 hours and we&apos;ll return to fix it at no extra charge — no questions asked.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl divide-y divide-border rounded-2xl bg-card shadow-card">
            {[
              { q: "Are these reviews real?", a: "Yes — every review shown here comes directly from our Google Business profile, posted by real clients. We never fabricate or edit feedback." },
              { q: "What if my experience is different?", a: "Contact us immediately. We take every piece of feedback seriously and will make it right, every time. Our satisfaction guarantee is unconditional." },
              { q: "Where can I leave a review?", a: "We'd love to hear from you — search 'Stress Relief Family Cleaning' on Google and tap 'Write a review'. It means the world to our team." },
            ].map(({ q, a }) => (
              <div key={q} className="px-7 py-6">
                <h3 className="font-semibold text-foreground">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA
        title="Join hundreds of satisfied families"
        desc="Get your free quote today and experience the difference for yourself."
      />
    </main>
  );
}
