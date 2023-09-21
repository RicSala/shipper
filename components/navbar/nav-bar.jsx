"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "../container";
import { ModeToggle } from "../mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Logo from "./logo";
import { NavMenu } from "./nav-menu";
import Sidebar from "./sidebar";
import TopBar from "./top-bar";
// import UserMenu from "./UserMenu";

function NavBar({ currentUser }) {
  const router = useRouter();
  const userTheme = currentUser?.settings?.darkMode || "light";

  const getAvatarFallbackText = (user) => {
    if (user?.name) {
      return user.name
        .split(" ")
        .slice(0, 2)
        .map((name) => name[0])
        .join("");
    }
    if (user?.email) {
      return user.email.split("@")[0][0].toUpperCase();
    }
    return null;
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    // add an event listener that updates the state when the scroll position changes
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    }; // end handleScroll
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Create a navBar component that will be used in the layout.js file
  return (
    // <Container>
    <div
      className={`sticky top-0 z-40 w-full ${
        scrolled ? "shadow-sm" : null
      } bg-base-100 transition-shadow`}
    >
      {/* py-1 sm:py-4 sticky top-0  */}
      <TopBar />
      <Container>
        <header className="mx-auto flex max-w-7xl flex-row items-center  justify-between gap-3 md:gap-0">
          <div className="flex flex-row items-center justify-between gap-5">
            <Logo />

            <div className="hidden sm:flex">
              <NavMenu currentUser={currentUser} />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 ">
            {currentUser ? (
              <Avatar
                className="cursor-pointer"
                onClick={() => {
                  router.push("/artist/profile");
                }}
              >
                <AvatarImage src={currentUser?.image || undefined} />
                <AvatarFallback>
                  {getAvatarFallbackText(currentUser)}
                </AvatarFallback>
              </Avatar>
            ) : null}
            <ModeToggle userTheme={userTheme} />
            <Sidebar className="bg-neutral" currentUser={currentUser} />
          </div>
        </header>
      </Container>
      {/* <Categories /> */}
    </div>
    // </Container>
  );
}

export default NavBar;
