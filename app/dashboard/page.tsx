import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableCaption, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


import { transactions } from "@/data/transactions";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-between">
      <Avatar>
        <AvatarImage src="jayampatel.png" />
        <AvatarFallback>JP</AvatarFallback>
      </Avatar>

      {/* temporary */}
      <Table>
      <TableBody>
        {transactions.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>{invoice.date}</TableCell>
            <TableCell>{invoice.description}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
}
