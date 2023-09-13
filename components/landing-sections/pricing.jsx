import { config } from "@/shipper.config"
import { CheckoutButton } from "./check-out-button";
import { getStripeInstance } from "@/lib/stripe";

const Pricing = async () => {

    const stripe = await getStripeInstance()
    const productList = await stripe.products.list({
        expand: ['data.default_price']
    })
    // filter prices whose product property is in the array "productIds"
    const plans = productList.data.filter(product => config.productIds.includes(product.id))
    // console.log(plans)
    // console.log(plans[0].features)
    // console.log(plans[0].default_price.unit_amount)

    return (
        <section className="overflow-hidden bg-base-200" id="pricing">
            <div className="max-w-5xl px-8 py-24 mx-auto">
                <div className="flex flex-col w-full mb-20 text-center">
                    <p className="mb-8 font-medium text-primary">Pricing</p>
                    <h2 className="text-3xl font-bold tracking-tight lg:text-5xl">
                        Save hours of repetitive code and ship faster!
                    </h2>
                </div>

                <div className="relative flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch">
                    {plans.map((plan) => (
                        <div key={plan.id} className="relative w-full max-w-lg">
                            {plan.metadata.featured?.toLowerCase() === 'true' && (
                                <div className="absolute top-0 z-20 -translate-x-1/2 -translate-y-1/2 left-1/2">
                                    <span
                                        className={`badge text-xs text-primary-content font-semibold border-0 bg-primary`}
                                    >
                                        POPULAR
                                    </span>
                                </div>
                            )}

                            {/* {plan.featured && (
                                <div
                                    className={`absolute -inset-[1px] rounded-[9px] bg-primary z-10`}
                                ></div>
                            )} */}

                            <div className="relative z-10 flex flex-col h-full gap-5 p-8 rounded-lg lg:gap-8 bg-base-100">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-lg font-bold lg:text-xl">{plan.name}</p>
                                        {plan.description && (
                                            <p className="mt-2 text-base-content/80">
                                                {plan.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    {plan.priceAnchor && (
                                        <div className="flex flex-col justify-end mb-[4px] text-lg ">
                                            <p className="relative">
                                                <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                                                <span className="text-base-content/80">
                                                    {/* {plan.default_price} */}
                                                </span>
                                            </p>
                                        </div>
                                    )}
                                    <p className={`text-5xl tracking-tight font-extrabold`}>
                                        {(plan.default_price.unit_amount / 100).toFixed(2)}
                                    </p>
                                    <div className="flex flex-col justify-end mb-[4px]">
                                        <p className="text-xs font-semibold uppercase text-base-content/60">
                                            EUROS/MES
                                        </p>
                                    </div>
                                </div>
                                {plan.features && (
                                    <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="w-[18px] h-[18px] opacity-80 shrink-0"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>

                                                <span>{feature.name} </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <div className="space-y-2">
                                    <CheckoutButton priceId={plan.default_price.id} />

                                    <p className="relative flex items-center justify-center gap-2 text-sm font-medium text-center text-base-content/80">
                                        Pay once. Access forever.
                                    </p>
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;