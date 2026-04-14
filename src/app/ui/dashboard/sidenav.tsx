import { cedarville } from "@/app/ui/fonts";
import NavLinks from "@/app/ui/dashboard/nav-links";
import Profile from "@/app/ui/dashboard/profile";

export default function SideNav() {
  return (
    <div className="w-full h-15 border flex flex-row md:flex-col md:h-screen md:rounded-2xl md:mx-2 bg-[#fffff9]">
      <div
        className={`${cedarville.className} antialiased flex flex-row pt-3 md:w-full md:justify-center md:items-center md:gap-1`}
      >
        <span className="hidden md:block text-5xl font-bold">B</span>
        <span className="text-lg hidden lg:block">udgefy</span>
      </div>
      <div>
        <hr className="hidden md:block md:border-t-2 md:w-[90%] md:mx-auto md:mb-5" />
      </div>
      <NavLinks />
      <div className="md:mt-auto md:mb-5">
        <Profile />
      </div>
    </div>
  );
}
