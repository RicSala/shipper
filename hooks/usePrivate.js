import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { config } from "@/shipper.config";

// Use this on all private routes (like user dashboard, accounts). It will redirect the user to the login page if not authenticated
export const usePrivate = ({ callbackUrl = config.auth.redirectAfterLoginUrl }) => {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            signIn(undefined, { callbackUrl });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    return [session, status];
};