import { getStripeInstance } from '@/lib/stripe';
import { config } from '@/shipper.config';
import { CheckoutButton } from './check-out-button';

const Pricing = async () => {
  const stripe = await getStripeInstance();
  const productList = await stripe.products.list({
    expand: ['data.default_price'],
  });
  // filter prices whose product property is in the array "productIds"
  const plans = productList.data.filter((product) =>
    config.productIds.includes(product.id)
  );
  // console.log(plans)
  // console.log(plans[0].features)
  // console.log(plans[0].default_price.unit_amount)

  return (
    <section className='w-full overflow-hidden' id='pricing'>
      <div className='mx-auto max-w-5xl px-8'>
        <div className='mb-20 flex w-full flex-col text-center'>
          <p className='mb-8 font-medium text-primary'>Pricing</p>
          <h2 className='font-bricolage text-3xl font-bold tracking-tight lg:text-5xl'>
            Save hours of repetitive code and ship faster!
          </h2>
        </div>
        <div className='relative flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch'>
          {plans.map((plan) => (
            <div key={plan.id} className='relative w-full max-w-lg'>
              {plan.metadata.featured?.toLowerCase() === 'true' && (
                <div className='absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
                  <span
                    className={`badge border-0 bg-primary text-xs font-semibold text-primary-content`}
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
              <div className='relative z-10 flex h-full flex-col gap-5 rounded-lg bg-base-100 p-8 lg:gap-8'>
                <div className='flex items-center justify-between gap-4'>
                  <div>
                    <p className='text-lg font-bold lg:text-xl'>{plan.name}</p>
                    {plan.description && (
                      <p className='mt-2 text-base-content/80'>
                        {plan.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className='flex gap-2'>
                  {plan.priceAnchor && (
                    <div className='mb-[4px] flex flex-col justify-end text-lg '>
                      <p className='relative'>
                        <span className='absolute inset-x-0 top-[53%] h-[1.5px] bg-base-content'></span>
                        <span className='text-base-content/80'>
                          {/* {plan.default_price} */}
                        </span>
                      </p>
                    </div>
                  )}
                  <p className={`text-5xl font-extrabold tracking-tight`}>
                    {(plan.default_price.unit_amount / 100).toFixed(2)}
                  </p>
                  <div className='mb-[4px] flex flex-col justify-end'>
                    <p className='text-xs font-semibold uppercase text-base-content/60'>
                      EUROS/MES
                    </p>
                  </div>
                </div>
                {plan.features && (
                  <ul className='flex-1 space-y-2.5 text-base leading-relaxed'>
                    {plan.features.map((feature, i) => (
                      <li key={i} className='flex items-center gap-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          className='h-[18px] w-[18px] shrink-0 opacity-80'
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span>{feature.name} </span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className='space-y-2'>
                  <CheckoutButton priceId={plan.default_price.id} />
                  <p className='relative flex items-center justify-center gap-2 text-center text-sm font-medium text-base-content/80'>
                    Pay once. Access forever.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
