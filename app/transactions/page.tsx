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
import { getCategoriesNoSync, getTransactionsMain } from "@/lib/app/db";
import { Timestamp } from "firebase/firestore";
import { accounts, categories } from "./(archive)/getDataExample";
import { getCategoryDisplay } from "@/lib/transforms";

export const dynamic = "force-dynamic";

export default async function Dashboard() {

  let total: { [key: string]: number } = {};

  let localCategories: { [key: string]: Category } = {};
  for (let i = 0; i < categories.length; i++) {
    localCategories[categories[i].id] = categories[i];
  }
  let localAccounts: { [key: string]: Account } = {};
  for (let i = 0; i < accounts.length; i++) {
    localAccounts[accounts[i].id] = accounts[i];
  }

  // TODO: fetch transactions
  const transactions= await getTransactionsMain();
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
            <TableCell>{new Date(invoice.date * 1000).toLocaleDateString("en-US")}</TableCell>
            <TableCell>{getCategoryDisplay(localCategories[invoice.categoryID])}</TableCell>
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
                <p key={index}>{localAccounts[amount.accountID] ? localAccounts[amount.accountID].name : amount.accountID}</p>
              ))}
            </TableCell>
            <TableCell>{invoice.tags}</TableCell>
            <TableCell>{invoice.note}</TableCell>
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
}
