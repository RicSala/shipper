"use client";

import { UiContext } from "@/providers/ui/ui-provider";
import { LogOut, Menu } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import MenuItem from "../menu-item";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Logo from "./logo";
import { clientMenuItems } from "./menu-items";

export default function Sidebar({ currentUser, className }) {
  const {
    setLoginModalOpen,
    sidebarOpen,
    setSidebarOpen,
    setArtistRegisterOpen,
  } = useContext(UiContext);

  const router = useRouter();

  const notifications = !currentUser?.artist?.isComplete;
  // && other conditions

  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen} className="">
      <SheetTrigger asChild className="">
        <div className="btn btn-circle btn-ghost btn-sm relative">
          <Menu
            className="cursor-pointer"
            onClick={() => {
              setSidebarOpen(true);
            }}
          />
          {
            //notifications ? (
            //<div className="text-2x absolute -right-0 -top-0 flex h-4 w-4 items-center justify-center rounded-full bg-error text-white/70">
            // <p>1</p>
            //</div>
            //) : null
          }
        </div>
      </SheetTrigger>
      <SheetContent className={"flex flex-col justify-start bg-base-100"}>
        <div className="my-2 flex flex-col">
          <SheetHeader>
            <SheetTitle asChild>
              <Logo />
            </SheetTitle>
            <SheetDescription className="hidden sm:block">
              Descubre nuevos tatuadores. Guarda inspiración. Contacta con
              ellos. Bienvenidx a TATTUO
            </SheetDescription>
          </SheetHeader>

          <Separator className="my-1" />
          {clientMenuItems.map((el) => (
            <MenuItem
              label={el.label}
              onClick={() => {
                router.push(el.url);
                setSidebarOpen(false);
              }}
              onMouseEnter={() => {
                router.prefetch(el.url);
              }}
              key={el.label}
            />
          ))}
          <Separator className="my-1" />
        </div>
        <SheetFooter className={"mt-auto"}>
          <div className="h-full w-full text-center">
            {currentUser ? (
              <Button
                variant="ghost"
                className="flex flex-row justify-center gap-2"
                onClick={() => {
                  signOut();
                  router.refresh();
                }}
              >
                <LogOut />
                <p>Salir de mi cuenta</p>
              </Button>
            ) : (
              <div className="flex flex-col justify-between">
                <Separator />
                <div className="flex flex-col items-center space-y-3">
                  <p>
                    Para poder guardar tus favoritos y contactar con los
                    artistas
                  </p>
                  <Button
                    onClick={() => {
                      setLoginModalOpen(true);
                    }}
                  >
                    Entrar
                  </Button>
                </div>
              </div>
            )}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
