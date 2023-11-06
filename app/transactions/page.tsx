"use client";

import { PageHeading } from "@/components/Headings";
import NewTranscationDialog from "@/components/NewTransactionDialog";
import NewTransactionSidebar from "@/components/NewTransactionSidebar";
import { Button } from "@/components/ui/button";
import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";

import { Timestamp, doc, getDoc } from "firebase/firestore";

import { transactions, accounts } from "@/data/transactions";
import { db } from "@/js/firebase/firebase";
import { useEffect, useState } from "react";
import { Transaction } from "@/js/types";
import { format } from "date-fns";

export default function TransactionsPage() {
   const [newTransactionSidebar, setNewTransactionSidebar] = useState(false);
   const [fTransactions, setFTransactions] = useState<Record<string, Transaction>>({});
   const fetchData = async () => {
      try {
         const docRef = doc(
            db,
            "lx0jFJVRtPeFlwl4dkYKsO0EtFb2",
            "transactions"
         );
         const docSnap = await getDoc(docRef);
         if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setFTransactions(docSnap.data());
         }
      } catch (error) {
         console.error("Error fetching data:", error);
      }
   };
   useEffect(() => {
      
      fetchData();
   }, []);

   const closeAddTransaction = () => {
      setNewTransactionSidebar(false);
   };

   return (
      <>
         <PageHeading heading={"transactions"} />
         <Button
            onClick={() => setNewTransactionSidebar(!newTransactionSidebar)}
            className="mb-1"
         >
            new transaction
         </Button>
         <Button variant="ghost" onClick={fetchData}>refresh</Button>
         <div className="flex flex-row">
            <div className={newTransactionSidebar ? "w-3/5" : ""}>
               <Table>
                  <TableHeader>
                     <TableRow>
                        {/* <TableHead className="w-[100px]">id</TableHead> */}
                        <TableHead className="w-1/4">description</TableHead>
                        {/* <TableHead>wallet</TableHead> */}
                        <TableHead className="w-1/6">date</TableHead>
                        <TableHead className="w-1/6">category</TableHead>
                        <TableHead className="w-1/6">type</TableHead>
                        <TableHead className="w-1/4 text-right font-mono">
                           amount
                        </TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {Object.keys(fTransactions).map((key) => {
                        const transaction = fTransactions[key];
                        return (
                           <TableRow
                              key={transaction.id}
                              className="justify-right"
                           >
                              {/* <TableCell>{transaction.id}</TableCell> */}
                              <TableCell>{transaction.description}</TableCell>
                              {/* <TableCell>{transaction.wallet}</TableCell> */}
                              {/* <TableCell>{format(transaction.date, 'MM/dd/yyyy')}</TableCell> */}
                              <TableCell>{format(transaction.date.toDate(), "MMM d, yyyy")}</TableCell>
                              <TableCell>
                                 {transaction.category}
                                 {/* {transaction.subcategory} */}
                              </TableCell>
                              <TableCell>{transaction.type}</TableCell>
                              {/* <TableCell className="font-mono text-right">{transaction.amount}</TableCell> */}
                              <TableCell>
                                 {transaction.accounts ? (
                                    Object.entries(transaction.accounts).map(
                                       ([key, value]) => (
                                          <div
                                             key={key}
                                             className="flex flex-row"
                                          >
                                             <p className="font-mono w-24 text-right pr-2">
                                                {value}{" "}
                                                {accounts[key]["currencies"]}
                                             </p>
                                             <p>{accounts[key]["name"]}</p>
                                          </div>
                                       )
                                    )
                                 ) : (
                                    <p className="font-mono text-red-600">
                                       {`Wait! I can't find account. Would you like to edit transaction? `}
                                       {transaction.id}
                                    </p>
                                 )}
                              </TableCell>
                           </TableRow>
                        );
                     })}
                  </TableBody>
               </Table>
            </div>
            {newTransactionSidebar ? (
               <NewTransactionSidebar
                  closeButtonFunction={closeAddTransaction}
               />
            ) : (
               <></>
            )}
         </div>
      </>
   );
}
