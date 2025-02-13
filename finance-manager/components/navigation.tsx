"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import {useMedia} from 'react-use'
import { usePathname, useRouter } from "next/navigation";
import { NavButton } from "./navButton";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";


const routes = [
    {
        href: '/',
        label: 'Overview'
    },
    {
        href: '/transactions',
        label: 'Transactions'
    },
    {
        href: '/accounts',
        label: 'Accounts'
    },
    {
        href: '/categories',
        label: 'Categories'
    },
    {
        href: '/settings',
        label: 'Settings'
    }
]

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const router = useRouter()
    const isMobile = useMedia('(max-width: 1024px)', false)

    const onClick = (href: string) => {
        router.push(href)
        setIsOpen(false)
    }

    if(isMobile){
        return (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                        <Menu className="size-6 bg-white/10 text-white" />
                </SheetTrigger>
                
                <SheetContent side='left' className="px-2">
                <SheetTitle>Navigation</SheetTitle>
                    <nav className="flex flex-col gap-y-2 pt-6">
                        {routes.map((route) => (<Button variant={route.href === pathname ? 'secondary' : 'ghost'} key={route.href} onClick={() => onClick(route.href)} className="w-full justify-start">
                            {route.label}
                        </Button>))}
                    </nav>
                </SheetContent>
            </Sheet>
        )
    }

    return (<nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
        {routes.map((route) => (<NavButton key={route.href} href={route.href} label={route.label} isActive={pathname === route.href}/>))}
    </nav>)
}