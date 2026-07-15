import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "bonusbank";
const description = "Заробіток кожного місяця з реферальними пропозиціями ПУМБ та А-Банк.";

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host");
  const protocol = incomingHeaders.get("x-forwarded-proto") ?? (host?.includes("localhost") ? "http" : "https");
  const origin = host ? `${protocol}://${host}` : "https://nova-guide-mobile.artemshabalinman.chatgpt.site";
  const imageUrl = new URL("/og.png", origin).toString();

  return {
    title,
    description,
    icons: { icon: "/favicon.svg" },
    openGraph: {
      type: "website",
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: "bonusbank — ПУМБ 2 000 ₴, А-Банк 500 ₴" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [imageUrl] },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#f7f6f0",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
