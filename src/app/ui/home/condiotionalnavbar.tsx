'use client'
import { usePathname } from 'next/navigation'
import NavBar from "@/app/ui/home/navbar"

export default function ConditionalNavBar() {
    const pathname = usePathname()
    if (pathname === '/' || pathname === "/login" || pathname === "/signup") return <NavBar />
    return null
}