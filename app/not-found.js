// This file handles the not-found errors thrown in all the app (using the notFound()) AND any unmatched URL in the whole application. If you need more specific not-found pages, you can create specific pages for each route. Unlike the layout or the error file, not-found.js does not need to be in a higher level route as a wrapper: it will apply to all routes on nested folders AND the current one.

import NotFoundSection from "@/components/not-found";
import { bricolage, inter, roboto_mono } from "./layout";

export default function NotFound() {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} ${bricolage.variable} `}
      suppressHydrationWarning
    >
      <body>
        <NotFoundSection />
      </body>
    </html>
  );
}
