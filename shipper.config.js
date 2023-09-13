

export const config = {

    general: {
        appName: "Shipper",

    },

    // ### CUSTOMER SUPPORT
    support: {
        cripsId: "",

        routesWithSupport: ["/"]
    },

    // ### FILE UPLOADS
    uploads: {

    },

    // ### EMAIL
    email: {

        subdomain: "",

        fromNoReply: "Shipper <noreply@ricardosala.com>",

        fromAdmin: "Ricardo at Shipper <ricardo@mg.shipper.com>",

        supportEmail: "ricardo@mg.shipper.com",

        forwardRepliesTo: "ricardo@grouz.io",
    },

    // ### AUTH
    auth: {
        redirectAfterLoginUrl: "/dashboard",
        authMethods: {
            credentials: false,
            google: true,
            email: true,
        }
    },

    // ### STRINGS
    strings: {
        metas: {
            title: "Shipper App",
            description: "Ship faster with Shipper"
        },
        toasts: {
            welcomeToastDescription: "Continua navegando",
            welcomeToastTitle: `Bienvenido a Shipper`,
            linkSentToastDescription: "Te hemos enviado un link para acceder desde tu correo",
            linkSentToastTitle: `Link Enviado · REVISA TU CORREO 📧`,

        }
    },

    // ### PRODUCTS

    productIds: [
        "prod_MgZBvTWR1T7Ape", "prod_Od6Bm9K5Kt1p7E"
    ],

    // ### PLANS
    plans: [
        {
            featured: false,
            name: 'Basic',
            description: 'Basic Plan yo!',
            price: '$10/month',
            stripePriceId: 'price_1NpoWVInQyVRXAJyBgaid9PD',
            features: [
                { name: "this is a test" },
                { name: "this is a test" },
                { name: "this is a test" },
            ]
        },
        {
            name: 'Pro',
            description: 'Pro Plan yo!',
            price: '$49/month',
            stripePriceId: 'price_456',
            features: [
                { name: "this is a test" },
                { name: "this is a test" },
                { name: "this is a test" },
            ]
        },
    ],

}