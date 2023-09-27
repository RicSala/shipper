// This file handles the not-found errors thrown in all the app (using the notFound()) AND any unmatched URL in the whole application. If you need more specific not-found pages, you can create specific pages for each route (For example, )

import NotFoundSection from "@/components/not-found";

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
