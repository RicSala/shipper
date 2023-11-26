import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { config } from "@/shipper.config";
import { db } from "@/lib/prismadb";

export const authOptions = {
  // Set any random key in .env.local
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    GoogleProvider({
      // Follow the "Login with Google" tutorial to get your credentials
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.given_name ? profile.given_name : profile.name,
          email: profile.email,
          image: profile.picture,
          createdAt: new Date(),
        };
      },
    }),
    // Follow the "Login with Email" tutorial to set up your email server

    EmailProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: config.email.fromNoReply,
    }),

    // CredentialsProvider({
    //   name: "credentials",
    //   credentials: {
    //     email: { label: "Email", type: "text", placeholder: " " },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     if (!credentials?.email || !credentials?.password) {
    //       throw new Error("Missing credentials");
    //     }

    //     const user = await UserService.getUserByEmail(credentials.email);

    //     if (!user || !user?.hashedPassword) {
    //       throw new Error("Invalid credentials");
    //     }

    //     const isCorrectPassword = await bcrypt.compare(
    //       credentials.password,
    //       user.hashedPassword,
    //     );

    //     if (!isCorrectPassword) {
    //       throw new Error("Invalid credentials");
    //     }

    //     //REVIEW: does this mean we are gonna have the whole user object in the session
    //     return user;
    //   },
    // }),

    // EmailProvider({
    //     server: process.env.EMAIL_SERVER,
    //     from: "ricardo@google.com",
    // }),
  ],
  // New users will be saved in Database (MongoDB Atlas). Each user (model) has some fields like name, email, image, etc.. Learn more about the model type: https://next-auth.js.org/v3/adapters/models
  adapter: PrismaAdapter(db),

  // custom pages
  pages: {
    signIn: "/",
    newUser: "/", // New users will be directed here on first sign in
  },

  //   adapter: MongoDBAdapter(connectMongo),
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  // theme: {
  //     brandColor: config.colors.main,
  //     // Add you own logo below. Recommended size is rectangle (i.e. 200x50px) and show your logo + name.
  //     // It will be used in the login flow to display your logo. If you don't add it, it will look faded.
  //     logo: `https://${config.domainName}/logoAndName.png`,
  // },
  //
  //
  //
  //     // We also have "events"
  //     // what's the difference between callbacks and events?
  //     // callbacks modify the default behavior, events can be used to add on top of the default behavior
  //     // async signIn(message) { /* on successful sign in */ },
  //     // async signOut(message) { /* on signout */ },
  //     // async createUser(message) { /* user created */ },
  //     // async updateUser(message) { /* user updated - e.g. their email was verified */ },
  //     // async linkAccount(message) { /* account (e.g. Twitter) linked to a user */ },
  //     // async session(message) { /* session is active */ },

  //     // https://dev.to/mfts/how-to-send-a-warm-welcome-email-with-resend-next-auth-and-react-email-576f
  //     // events: {
  //     //     async createUser(message) {
  //     //       const params = {
  //     //         user: {
  //     //           name: message.user.name,
  //     //           email: message.user.email,
  //     //         },
  //     //       };
  //     //       await sendWelcomeEmail(params); // <-- send welcome email
  //     //     }
  //     //   },
};
