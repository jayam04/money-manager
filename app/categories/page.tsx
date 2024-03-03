import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Categories() {
  return <Table>
    {/* TODO: get better caption */}
    <TableCaption>List of Categories</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Parent</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Concated Name</TableHead>
        <TableHead className="text-right">Amount Total</TableHead>
        <TableHead className="text-right">Amount (Last Month)</TableHead>
      </TableRow>
    </TableHeader>
  </Table>;
}
