// RESOURCES:
// https://www.youtube.com/watch?v=Psq5N5C-FGo&t=145s&ab_channel=StripeDevelopers
// https://makerkit.dev/blog/tutorials/guide-nextjs-stripe
// https://stripe.com/docs/stripe-cli

// test credit cards: https://stripe.com/docs/testing
// 4242424242424242 any date after today and any three digits

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { createCheckout } from "@/lib/stripe";
import prisma from "@/lib/prismadb";

export async function POST(request) {
  const session = await getServerSession(authOptions);

  // TODO: Why wouldn't we allow people with no session to pay?
  // if (!session) return NextResponse.json({ error: 'Not authorized' }, { status: 401 })

  const id = session?.user?.id;
  const body = await request.json();

  if (!body.priceId) {
    return NextResponse.json({ error: "Need a price ID" }, { status: 400 });
  }

  try {
    let user;
    // TODO: Why wouldn't we allow people with no session to pay?
    if (id) {
      user = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });
    }
    // if (!user) throw new Error('User not found');

    const { coupon, successUrl, cancelUrl } = body;

    const stripeSessionURL = await createCheckout({
      successUrl,
      cancelUrl,
      clientReferenceID: user ? user?.id?.toString() : undefined,
      priceId: body.priceId,
      coupon,
    });

    return NextResponse.json({ url: stripeSessionURL }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error creating checout" },
      { status: 500 },
    );
  }
}
