import {PageHeading} from "@/components/Headings";
import NewTranscationDialog from "@/components/NewTransactionDialog";

export default function TransactionsPage() {
    return(
        <>
        <PageHeading heading={"transactions"} />
        <NewTranscationDialog />
        </>
    )
}