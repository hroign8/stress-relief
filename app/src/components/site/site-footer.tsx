import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PiPhone, PiEnvelopeSimple, PiClock } from "react-icons/pi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { Logo } from "./logo";
import { NAV } from "./nav";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61589405505224&sk=about", icon: FaFacebookF, color: "#1877F2" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/stressreliefcleaning_service?igsh=b3NqeXI1aWR2bnpq&utm_source=qr",
    icon: FaInstagram,
    color: "#E1306C",
  },
  { label: "TikTok", href: "#", icon: FaTiktok, color: "#010101" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo className="h-16 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Family-owned professional cleaning that brings peace of mind to busy homes.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-opacity hover:opacity-80"
                    style={{ backgroundColor: s.color }}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="tel:+12269619744" className="flex items-center gap-3 transition-colors hover:text-foreground">
                  <PiPhone className="h-4 w-4 shrink-0 text-primary" />
                  (226) 961-9744
                </a>
              </li>
              <li>
                <a href="mailto:stressrelieffamilycleaningserv@gmail.com" className="flex items-center gap-3 transition-colors hover:text-foreground">
                  <PiEnvelopeSimple className="h-4 w-4 shrink-0 text-primary" />
                  stressrelieffamilycleaningserv@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PiClock className="h-4 w-4 shrink-0 text-primary" />
                Mon–Sat, 8:00am – 6:00pm
              </li>
            </ul>
            <Button size="sm" className="mt-6 rounded-full px-6" asChild>
              <Link href="/#quote">Request a Quote</Link>
            </Button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Stress Relief Family Cleaning Services. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Bonded, insured &amp; background-checked.
          </p>
        </div>
      </div>
    </footer>
  );
}
