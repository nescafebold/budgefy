import Logo from "@/app/ui/home/logo";
import NavLinks from "@/app/ui/home/nav-links";

export default function NavBar() {
    return (
        <nav className="flex flex-row w-full h-20 border-b border-[#013E34] justify-between bg-[#FFFFF5] px-4 my-auto">
            <Logo />
            <NavLinks />

        </nav>
    )

}