import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.svg";

export function Logo({ className = "h-12 w-auto" }: { readonly className?: string }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="Stress Relief Family Cleaning Service — home"
    >
      <Image
        src={logo}
        alt="Stress Relief Family Cleaning Service"
        className={className}
        priority
      />
    </Link>
  );
}
