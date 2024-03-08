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
import { getTransactionsMain } from "@/lib/app/db";

export default async function Dashboard() {

  let total: { [key: string]: number } = {};

  // TODO: fetch transactions
  const transactions= await getTransactionsMain();
  console.log("Transactions: ", transactions)
  return (
    <Table>
      {/* TODO: get better caption, yeah we are going to have caption */}
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[128px]">Transaction ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead>Account</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead>Notes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.values(transactions).map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell>{invoice.categoryID}</TableCell>
            <TableCell>Cash</TableCell>
            <TableCell className="text-right">
              {
              invoice.amounts.map((amount: Amount, index: number) => {
                {
                  let currencyID = amount.currencyID;
                  if (currencyID in total) {
                    total[currencyID] += amount.amount;
                  }
                  else {
                    total[currencyID] = amount.amount;
                  }
                }
                return <p key={index}>{amount.currencyID} {amount.amount}</p>;
              })}
            </TableCell>
            <TableCell>
              {invoice.amounts.map((amount: Amount, index:number) => (
                <p key={index}>{amount.accountID}</p>
              ))}
            </TableCell>
            <TableCell>#testing</TableCell>
            <TableCell>Same for every transaction</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">
            {Object.entries(total).map(([key, value]) => (
              <p key={key}>{key} {value}</p>
            ))}
          </TableCell>
          <TableCell colSpan={3}></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
