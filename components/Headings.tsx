export function PageHeading({ heading }: { heading: String }) {
    return (
        <>
            <h1 className="text-xl font-bold font-mono">{heading}</h1>
            <hr className="mb-2" />
        </>
    );
}
