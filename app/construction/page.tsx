'use client'

import Link from "next/link";

export default function ConstructionPage() {
    return (
        <div>
            <h1>Construction Page</h1>
            <p>{`Here are some helpful link that can help work done, until website isn't fully built`}</p>
            <Link href="helpers/1">Helpers/1</Link>
        </div>
    )
}