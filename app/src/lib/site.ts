// Single source of truth for the public site URL.
// Used by metadata (OG/canonical), the sitemap, and robots.
// Set NEXT_PUBLIC_SITE_URL on the host to the real production domain.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://stressrelieffamilycleaningservices.com"
).replace(/\/$/, "");
