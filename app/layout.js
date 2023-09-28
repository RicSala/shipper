import Feedback from "@/components/feedback";
import { LoginModal } from "@/components/modals/login-form";
import SupportButton from "@/components/support-button";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/providers/ui/theme-provider";
import { UiProvider } from "@/providers/ui/ui-provider";
import { config } from "@/shipper.config";
import { Bricolage_Grotesque, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata = {
  title: {
    default: config.strings.metas.title,
    template: "%s",

    // To be used in CHILDREN to ignores title.template set by parents
    absolute: "",
  },
  // TODO: Can the above be done with the description too?
  description: config.strings.metas.title,

  // TODO: to check: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Seb" }, { name: "Josh", url: "https://nextjs.org" }],
  colorScheme: "light",
  creator: "Jiachi Liu",
  publisher: "Sebastian Markbåge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${roboto_mono.variable} ${bricolage.variable} `}
    >
      <body>
        <ThemeProvider
          // attribute="class"
          defaultTheme="cupcake"
          enableSystem={false}
          disableTransitionOnChange
        >
          <UiProvider>
            <SupportButton />
            <Feedback />
            <LoginModal />
            {children}
          </UiProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
