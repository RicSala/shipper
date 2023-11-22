import AvatarGroup from "@/components/avatar-group";
import CtaWithSocial from "@/components/cta-with-social";
import Pricing from "@/components/landing-sections/pricing";
import Testimonials1 from "@/components/landing-sections/testimonials";
import CoolButton from "@/components/magic/cool-button";
import CoolText from "@/components/magic/cool-text";
import { config } from "@/shipper.config";

import ContactForm from "@/components/landing-sections/contact-form";
import { Faq } from "@/components/landing-sections/faq";
import Hero from "@/components/landing-sections/hero";
import Hero2 from "@/components/landing-sections/hero2";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Stretcher from "@/components/utils/strecher";

import Container from "@/components/container";
import DoodleArrow29 from "@/components/doodles/arrow-29";
import LogoCloud from "@/components/landing-sections/logo-cloud";
import MediaText from "@/components/landing-sections/media-text";
import { Pricing2 } from "@/components/landing-sections/pricing2";
import Laurels from "@/components/social-proof/laurels";
import tailwindConfig from "@/tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig";
import Toasty from "@/components/toasty/Toasty";

const twConfig = resolveConfig(tailwindConfig);
const theme = twConfig.theme;

const colors = [
  "bg-primary",
  "bg-primary-focus",
  "bg-primary-content",
  "bg-secondary",
  "bg-secondary-focus",
  "bg-secondary-content",
  "bg-accent",
  "bg-accent-focus",
  "bg-accent-content",
  "bg-neutral",
  "bg-neutral-focus",
  "bg-neutral-content",
  "bg-base-100",
  "bg-base-200",
  "bg-base-300",
  "bg-base-content",
  "bg-info",
];

export default async function Home() {
  return (
    // For spacing..
    // gap-4 sm:gap-8 md:gap-16
    // py-4 sm:py-8 md:py-16
    // https://github.com/saadeghi/daisyui/blob/master/src/theming/themes.js
    <main className="gap flex min-h-screen flex-col items-center justify-between">
      <Hero2 />
      <div className="md:-my-48">
        <LogoCloud />
      </div>
      <Pricing2 />
      <div className="flex flex-col gap-3">
        <MediaText textFirst />
        <MediaText textFirst={false} />
      </div>
      <Testimonials1 />
      <Faq />

      <ContactForm />

      <div>
        <h2 className="border-b-0">Doodles</h2>
        <div className="gap relative flex flex-row flex-wrap items-center justify-center">
          {/* animate-[bounce_2s_ease-in-out_infinite] */}
          <div className="relative h-20 w-20">
            <DoodleArrow29 className={"rotate absolute h-20 w-20 "} />
          </div>
        </div>
      </div>

      <div>
        <h2 className="border-b-0">Colors</h2>
        <div className="flex flex-wrap gap-5">
          {colors.map((color) => (
            <div
              key={color}
              className={`${color} flex h-20 w-40 items-center justify-center rounded-full border border-neutral text-gray-400`}
            >
              {color.substring(3)}
            </div>
          ))}
        </div>
      </div>

      <Input />

      <CoolButton className="h-16 w-60">Cool Button 😎</CoolButton>

      <div>
        this should{" "}
        <remark className="highlight">
          be highlight asd asdfasdfasfd erasdfasd
        </remark>{" "}
        fasdfasdfñalsjdflñasjd fñlasjdfñlajsf
      </div>

      <CoolText>This is a pretty Awesome text!</CoolText>

      <h1 className="font-normal">{config.general.appName}</h1>
      <Laurels laurelsClasses="fill-base-content/50" />

      <AvatarGroup className={"h-8 w-8 text-xs"} />

      <CtaWithSocial
        accentText={"30% de descuento"}
        buttonLabel={"Comprar"}
        primaryText={"a las primeras 200 compras"}
      />

      <Stretcher className="bg-base-200 py-4 sm:py-8 md:py-16">
        <Pricing />
      </Stretcher>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <select className="select select-bordered w-full max-w-xs">
        <option disabled>Pick your favorite Simpson</option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
      <Toasty />
      <Stretcher className="bg-base-200">
        <Container className={"container"}>
          <Hero className={"py-5"} />
        </Container>
      </Stretcher>
    </main>
  );
}
