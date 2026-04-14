import { cedarville } from "@/app/ui/fonts";

export default function NavBar() {
    return (
        <nav className="flex flex-row w-full h-20 border-b border-[#013E34]">
            <div
                className={`${cedarville.className} antialiased flex flex-row pt-3 ml-3 justify-center `}
            >
                <span className=" text-5xl font-bold">B</span>
                <span className="text-lg hidden lg:block">udgefy</span>
            </div>
        </nav>
    )

}