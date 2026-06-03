import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SectionHead({
  eyebrow,
  title,
  desc,
}: {
  readonly eyebrow: string;
  readonly title: string;
  readonly desc?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{desc}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  desc,
}: {
  readonly eyebrow: string;
  readonly title: string;
  readonly desc?: string;
}) {
  return (
    <section className="bg-linear-to-b from-muted/40 to-background px-6 pb-12 pt-20 text-center lg:pb-16 lg:pt-28">
      <div className="mx-auto max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        {desc && (
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{desc}</p>
        )}
      </div>
    </section>
  );
}

export function BottomCTA({
  title,
  desc,
}: {
  readonly title: string;
  readonly desc?: string;
}) {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          {title}
        </h2>
        {desc && (
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">{desc}</p>
        )}
        <Button
          className="mt-8 rounded-full bg-white px-10 text-primary hover:bg-white/90"
          size="lg"
          asChild
        >
          <Link href="/#quote">Book your clean today</Link>
        </Button>
      </div>
    </section>
  );
}
