import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prismadb";
import { getServerSession } from "next-auth";

export async function getCurrentUser() {
  try {
    // @ts-ignore
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      include: {},
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(), // sanitizing the date
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
