import { cedarville } from "@/app/ui/fonts";
export default function SideNav() {
  return (
    <div className="w-full h-20 flex flex-row md:flex-col md:h-screen border rounded-2xl mx-2">
      <div
        className={`${cedarville.className} antialiased flex flex-row md:mx-auto`}
      >
        <span className="text-5xl font-bold">B</span>
        <span className="text-lg hidden lg:block">udgefy</span>
      </div>
    </div>
  );
}
