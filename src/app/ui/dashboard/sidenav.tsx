import { cedarville } from "@/app/ui/fonts"
export default function SideNav() {
    return (
        <div className="w-full h-20 flex flex-row md:flex-col md:h-screen border">
            <div className={`${cedarville.className} antialiased flex flex-row justify-center mx-auto`}>
                <span className="text-5xl font-bold">B</span><span className="hidden md:block">udgefy</span>
            </div>

        </div>
    )
}