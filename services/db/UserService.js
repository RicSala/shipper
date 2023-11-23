import { db } from "@/lib/prismadb";

export class UserService {
  static async settingsUpdate(userId, data) {
    db.settings.update({
      where: {
        userId: userId,
      },
      data,
    });
  }

  /** @param {string} email */
  static async getUserByEmail(email) {
    /** @type {import("@prisma/client").User} */
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  }

  static async register(
    name = "",
    email = "",
    /** @type {string}*/
    hashedPassword = undefined,
    /** @type {import("@prisma/client").UserRole}*/
    role = "USER",
  ) {
    /**
     * @type {import("@prisma/client").Prisma.UserCreateInput}
     */
    const createInput = {
      email,
      name,
      hashedPassword,
      confirmPassword: "", //TODO: not sure if we should store this
      role,
      settings: {
        create: {},
      },
    };

    /** @type {import("@prisma/client").User} */
    const user = await db.user.create({
      data: createInput,
    });

    return user;
  }

  static async getUserById(userId) {
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  }

  //
  //
  // ###############
  // PRIVATE METHODS
  // ###############
}
