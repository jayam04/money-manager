import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableCaption, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
// import { firebaseConfig } from "@/js/firebase/firebaseConfig";


import { transactions } from "@/data/transactions";

export default async function Dashboard() {

  const app = initializeApp({
    apiKey: "AIzaSyCNDZnKFgve9y9WzbsGJtodDqTwH3OBv8Y",
    authDomain: "monymngr.firebaseapp.com",
    databaseURL: "https://monymngr-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "monymngr",
    storageBucket: "monymngr.appspot.com",
    messagingSenderId: "223749319252",
    appId: "1:223749319252:web:582ebcc56c18f28b671bc1",
    measurementId: "G-P51ZM058YE"
});
  const provider = new GoogleAuthProvider();
  await signInWithRedirect(getAuth(app), provider);
  return (
    <div className="flex flex-col justify-between">
      <Avatar>
        <AvatarImage src="jayampatel.png" />
        <AvatarFallback>JP</AvatarFallback>
      </Avatar>

      {/* temporary */}
      <Table>
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Amount</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>{invoice.date}</TableCell>
            <TableCell>{invoice.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
}
