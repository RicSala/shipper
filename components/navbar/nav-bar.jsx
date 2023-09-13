'use client'

import Logo from "./logo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Sidebar from "./sidebar";
import { ModeToggle } from "../mode-toggle";
import { useRouter } from "next/navigation";
import { NavMenu } from "./nav-menu";
import Container from "../container";
// import UserMenu from "./UserMenu";


function NavBar({
    currentUser,
}) {

    const router = useRouter()
    const userTheme = currentUser?.settings?.darkMode || 'light'

    const getAvatarFallbackText = (user) => {
        if (user?.name) {
            return user.name.split(" ").slice(0, 2).map((name) => name[0]).join("");
        }
        if (user?.email) {
            return user.email.split("@")[0][0].toUpperCase();
        }
        return null;
    }


    // Create a navBar component that will be used in the layout.js file
    return (
        // <Container>
        <div>

            <div className="fixed z-40 w-full shadow-sm bg-background text-foreground">
                <div className="py-1 sm:py-4 border-b-[1px] border-border">
                    <Container>
                        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                            <div className="flex flex-row items-center justify-between gap-5">
                                <Logo />

                                <div className="hidden sm:flex">
                                    <NavMenu currentUser={currentUser} />
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-2">
                                {
                                    currentUser ?
                                        <Avatar className="cursor-pointer"
                                            onClick={() => {
                                                router.push('/artist/profile')
                                            }}
                                        >
                                            <AvatarImage src={currentUser?.image || undefined} />
                                            <AvatarFallback>
                                                {getAvatarFallbackText(currentUser)}
                                            </AvatarFallback>
                                        </Avatar>
                                        :
                                        null
                                }
                                <ModeToggle userTheme={userTheme} />
                                <Sidebar className="" currentUser={currentUser} />

                            </div>
                        </div>
                    </Container>
                </div>
                {/* <Categories /> */}
            </div >
        </div >
        // </Container>
    )


}

export default NavBar;