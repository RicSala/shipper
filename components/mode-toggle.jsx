"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle({
    userTheme
}) {
    const { setTheme } = useTheme()

    React.useEffect(() => {
        userTheme === true ? setTheme('dark') : setTheme('cupcake')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userTheme]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="btn btn-ghost btn-circle"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] light" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] dark" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => { setTheme("cupcake") }}>
                    Claro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Oscuro
                </DropdownMenuItem>
                {/* <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem> */}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
