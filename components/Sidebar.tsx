import Link from "next/link";

export function Sidebar() {
    return(
        <div className="w-full flex flex-col">
            <Link href="/">home</Link>
            <Link href="/transactions">transactions</Link>
            <Link href="/attributes">about</Link>
        </div>
    )
}