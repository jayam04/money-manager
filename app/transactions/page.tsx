"use client";

import { PageHeading } from "@/components/Headings";
import NewTranscationDialog from "@/components/NewTransactionDialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { format } from 'date-fns'; // Import the format function from date-fns

export default function TransactionsPage() {
    
    var transactions = [
        {
          id: 0,
          description: "burger?",
          wallet: "cash?",
          date: new Date("2023-07-30"),
          amount: 3.67,
        },
      ];
      
      // Function to generate a random description for the items
      function generateRandomDescription() {
        const descriptions = ["coffee", "groceries", "gas", "movie tickets", "dinner", "clothes", "books", "electronics"];
        const randomIndex = Math.floor(Math.random() * descriptions.length);
        return descriptions[randomIndex];
      }
      
      // Function to generate a random wallet type for the items
      function generateRandomWallet() {
        const wallets = ["cash", "credit card", "debit card", "mobile payment"];
        const randomIndex = Math.floor(Math.random() * wallets.length);
        return wallets[randomIndex];
      }
      
      // Function to generate a random amount for the items
      function generateRandomAmount() {
        return Math.random() * 100;
      }
      
      // Add 100 more items
      for (let i = 1; i <= 100; i++) {
        transactions.push({
          id: i,
          description: generateRandomDescription(),
          wallet: generateRandomWallet(),
          date: new Date(), // Use the current date and time for new items
          amount: generateRandomAmount(),
        });
      }
      
      console.log(transactions); // This will display the updated `transactions` dictionary with 101 items
      
  return (
    <>
      <PageHeading heading={"transactions"} />
      <NewTranscationDialog />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>description</TableHead>
            <TableHead>wallet</TableHead>
            <TableHead>date</TableHead>
            <TableHead className="text-right font-mono">amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {transactions.map((transaction) => (
                <TableRow key={transaction.id} className="justify-right">
                    <TableCell>{transaction.id}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.wallet}</TableCell>
                    <TableCell>{format(transaction.date, 'MM/dd/yyyy')}</TableCell>
                    <TableCell className="font-mono text-right">{transaction.amount}</TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
