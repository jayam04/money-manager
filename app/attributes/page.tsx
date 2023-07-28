import { PageHeading } from "@/components/Headings"

export default function Credits() {
    return (
        <div className="font-mono">
            <PageHeading heading={"about us"} />
            <p>used shadcnui. find it here <a href="https://ui.shadcn.com" className="text-blue-400 hover:text-purple-400">ui.shadcn.com</a></p>
            <hr />
        </div>
    );
}
