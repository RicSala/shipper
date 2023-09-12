

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

        fromNoReply: "Shipper <noreply@...>",

        fromAdmin: "Ricardo at Shipper <ricardo@mg.shipper.com>",

        supportEmail: "ricardo@mg.shipper.com",

        forwardRepliesTo: "ricardo@grouz.io",
    },

    // ### AUTH
    auth: {
        redirectAfterLoginUrl: "/dashboard"
    },

    // ### STRINGS
    strings: {
        metas: {
            title: "Shipper App",
            description: "Ship faster with Shipper"
        },
        toasts: {
            welcomeToastMessage: "Continua navegando"
        }
    }

}