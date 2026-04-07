import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-col-reverse w-full h-screen border border-indigo-500 md:grid md:grid-cols-12 md:gap-2">
            <div className="w-full md:col-span-2">
                <SideNav></SideNav>
            </div>
            <div className="w-full h-full md:col-span-10">
                {children}
            </div>
        </div>
    )
}