import Link from "next/link";

export function Sidebar() {
    return(
        <div className="w-full flex flex-col">
            <h1 className="font-mono text-3xl font-bold">monymngr</h1>
            <hr className="mr-16"/>
            <Link href="/">home</Link>
            <Link href="/transactions">transactions</Link>
            <Link href="/attributes">about</Link>
        </div>
    )
}