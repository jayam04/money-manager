import { ModeToggle } from "./ModeToggle";

export function PageHeading({ heading }: { heading: String }) {
    return (
        <>
            <div className="flex flex-row justify-between">
            <h1 className="text-xl font-display">{heading}</h1>
            <ModeToggle />
            </div>
            <hr className="mb-4" />
        </>
    );
}
