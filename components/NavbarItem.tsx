import Link from "next/link";
import dashboardPNG from "/public/icons/dashboard.png";



export default function NavbarItem({to, name, uniconIconName}: {to: string, name: string, uniconIconName: string}) {
    let classNameforIcon = "uil uil-" + uniconIconName;
    return (
        <div className="w-full justify-center justify-items-center self-end">
            <Link href={to}>
                <div className="bg-[#7dd3fc] w-1/4 text-center text-2xl">
                    <i className={classNameforIcon + ""}></i>
                </div>
            </Link>
        </div>
    )
}