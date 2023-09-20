"use client"

import Link from "next/link"
import * as React from "react"

import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"


export function NavMenu({
}) {
    return (
        <NavigationMenu>
            <NavigationMenuList>

                <Link href="/tatuadores" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Encuentra Tatuador
                    </NavigationMenuLink>
                </Link>

                <Link href="/tatuajes" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Descubre Tatuajes
                    </NavigationMenuLink>
                </Link>


                <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Consejos
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-base-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="text-sm leading-snug line-clamp-2 text-base-content/70">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
