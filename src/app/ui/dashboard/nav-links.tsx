'use client';

import DashboardSvg from "@/app/ui/dashboard/dashboardsvg"
import TransactionsSvg from "@/app/ui/dashboard/transactionssvg"
import BudgetSvg from "@/app/ui/dashboard/budgetsvg"
import DebtTrackerSvg from "@/app/ui/dashboard/debt-trackersvg"
import ReportsSvg from "@/app/ui/dashboard/reportssvg"
import SettingsSvg from "@/app/ui/dashboard/settingssvg"
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from 'next/navigation';
const links = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: DashboardSvg
    },
    {
        name: "Transactions",
        href: "/dashboard/transactions",
        icon: TransactionsSvg
    },
    {
        name: "Budget",
        href: "/dashboard/budgets",
        icon: BudgetSvg
    },
    {
        name: "Debt-tracker",
        href: "/dashboard/debt-tracker",
        icon: DebtTrackerSvg
    },
    {
        name: "Reports",
        href: "/dashboard/reports",
        icon: ReportsSvg
    },
    {
        name: "Settings",
        href: "/dashboard/settings",
        icon: SettingsSvg
    },
]
export default function NavLinks() {

    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-sky-100 text-blue-600': pathname === link.href,
                            }
                        )}
                    >
                        <div className="w-6 h-6 relative">
                            <LinkIcon />
                        </div>

                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    )
}