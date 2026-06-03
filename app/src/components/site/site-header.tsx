"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PiList, PiX } from "react-icons/pi";
import { Logo } from "./logo";
import { NAV } from "./nav";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo className="h-14 w-auto" />
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button size="lg" className="rounded-full px-7" asChild>
            <Link href="/#quote">Request a Quote</Link>
          </Button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <PiX className="h-5 w-5" /> : <PiList className="h-5 w-5" />}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" className="w-full rounded-full" asChild onClick={() => setMenuOpen(false)}>
              <Link href="/#quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
