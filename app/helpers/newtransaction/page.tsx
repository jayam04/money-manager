"use client";

import { allTransactions, transactions } from "@/app/transactions/getData";
import { getApp } from "@/lib/firebase/app";
import { firebaseConfig } from "@/lib/firebase/constants";
import { getDB } from "@/lib/firebase/firestore";
import logger from "@/lib/logger";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc, writeBatch } from "firebase/firestore";

export default function NewTransaction() {
  submitForm();
  return (
    <div>
      <h1>New Transaction</h1>
      {/* Form to create a new transaction. Includes a dropdown menu for the type of transaction, a text input for the amount, and a button to submit the transaction. The form should validate the amount and type before submitting. If the form is invalid, the user should be notified. If the form is valid, the user should */}
      {/* be notified that the transaction was successfully submitted. */}

      <form>
        <label>Type:</label>
        <select>
          <option value="deposit">Deposit</option>
          <option value="withdrawal">Withdrawal</option>
        </select>
        <label>Amount:</label>
        <input type="number" />
        <button type="submit">Submit</button>
        <p>Transaction submitted successfully!</p>
      </form>
    </div>
  );
}

async function submitForm() {
  // Validate the form
  const transactionsMap: { [key: string]: Transaction } =
    allTransactions.reduce(function (
      map: { [key: string]: Transaction },
      obj: Transaction
    ) {
      map[obj.id] = obj;
      return map;
    },
    {});
  // If the form is valid, submit the transaction
  // Connect to firebase firestore
  const userId = "guest"; // TODO: Replace with the current user's id

  // Add the transaction to the database
  const db = getDB();
  const batch = writeBatch(db);
  // for (const transaction of allTransactions) {
  //   batch.set(
  //     doc(db, userId, "transactions", "1709231400", transaction.id),
  //     transaction
  //   );
  // }
  // batch.set(
  //   doc(db, userId, "transactions"),
  //   { "1709231400": transactionsMap },
  //   { merge: true }
  // );
  // get current unix time
  const currentUnixTime = Date.now();
  await batch.commit();
  const timeTaken = Date.now() - currentUnixTime;
  logger.info(`Time taken to commit ${timeTaken}ms`);
  const docRef = doc(db, userId, "transactions");
  await setDoc(docRef, { "1709231401": transactionsMap }, { merge: true });
  // If the form is invalid, display an error message

  // read data
  const docSnap = await getDoc(doc(db, userId, "transactions"));

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}
