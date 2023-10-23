// This file handles the not-found errors thrown in all the app (using the notFound()) AND any unmatched URL in the whole application. If you need more specific not-found pages, you can create specific pages for each route (For example, )

import NotFoundSection from "@/components/not-found";
import { Bricolage_Grotesque, Inter, Roboto_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

export default function NotFound() {
  return (
    <NotFoundSection
      title="Este post (aún) no existe"
      description="Pero puedes seguir leyendo otros posts en nuestro blog!"
      redirectUrl="/blog"
      buttonText="Volver a blog"
    />
  );
}
