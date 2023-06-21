import Link from "next/link";
import dashboardPNG from "/public/icons/dashboard.png";



export default function NavbarItem({to, name, uniconIconName}: {to: string, name: string, uniconIconName: string}) {
    let classNameforIcon = "uil uil-" + uniconIconName;
    return (
        <div className="justify-evenly justify-items-stretch self-end content-center">
            <Link href={to}>
                <div className="bg-[#7dd3fc] w-full text-center text-3xl content-center">
                    <i className={classNameforIcon + ""}></i>
                </div>
            </Link>
        </div>
    )
}