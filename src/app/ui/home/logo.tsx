import { cedarville } from "@/app/ui/fonts";
export default function Logo() {
    return (
        <div
            className={`${cedarville.className} antialiased flex flex-row pt-3  justify-center text-[#013E34] p-4`}
        >
            <span className=" text-5xl font-bold">B</span>
            <span className="text-lg hidden lg:block">udgefy</span>
        </div>
    )
}