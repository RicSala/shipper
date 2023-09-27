import { config } from "@/shipper.config";
import Link from "next/link";
import { Button } from "./ui/button";

export default function NotFoundSection({
  title = "Esta página no existe 🤔",
  description = `Lo sentimos, no hemos podido encontrar la página que buscas. Pero
  seguro que encuentras muchas otras cosas interesantes en ${config.general.appName}`,
  buttonText = `Volver a ${config.general.appName}`,
  redirectUrl = "/",
}) {
  return (
    <section class="bg-base-100">
      <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl font-extrabold tracking-tight text-base-content lg:text-9xl">
            404
          </h1>
          <p class="mb-4 text-3xl font-bold tracking-tight text-base-content md:text-4xl">
            {title}
          </p>
          <p class="mb-4 text-lg font-light text-base-muted-content">
            {description}
          </p>
          <Link href={redirectUrl}>
            <Button>{buttonText}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
