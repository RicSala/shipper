import ProductHuntLogo from "../icons/product-hunt";

export default function LogoCloud({}) {
  return (
    <section className="flex flex-col gap-5 md:gap-5">
      <h2 className="text-center text-xl font-bold text-base-content xl:text-left">
        Nos has visto en
      </h2>

      <div className="flex flex-wrap gap-2 md:gap-5">
        <ProductHuntLogo className={"mx-auto w-28 fill-neutral/40 md:w-32"} />
        <ProductHuntLogo className={"mx-auto w-28 fill-neutral/40 md:w-32"} />
        <ProductHuntLogo className={"mx-auto w-28 fill-neutral/40 md:w-32"} />
        <ProductHuntLogo className={"mx-auto w-28 fill-neutral/40 md:w-32"} />
        <ProductHuntLogo className={"mx-auto w-28 fill-neutral/40 md:w-32"} />
      </div>
    </section>
  );
}
