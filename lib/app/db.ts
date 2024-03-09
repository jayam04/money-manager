import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { getDB } from "../firebase/firestore";
import { getDocumentIdForTimestamp } from "./db.helper";
import { getUser } from "./auth";
import logger from "../logger";
import * as sampleData from "@/app/transactions/(archive)/getDataExample"

let transactions: { [key: string]: Transaction } = {};
let categories: { [key: string]: Category } = {};
let accounts: { [key: string]: Account } = {};
let currencies: { [key: string]: Currency } = {};

export function uploadTransaction(transactions: Transaction[]) {
    const user = getUser();
    const firestore = getDB();

    let transactionsByDocId: { [key: string]: { [key: string]: Transaction } } =
        {};

    transactions.forEach((transaction) => {
        const docId = getDocumentIdForTimestamp(transaction.date);
        if (!transactionsByDocId[docId]) {
            transactionsByDocId[docId] = {};
        }
        transactionsByDocId[docId][transaction.id] = transaction;
    });

    const batch = writeBatch(firestore);
    Object.keys(transactionsByDocId).forEach((docId) => {
        const docRef = doc(firestore, user.id, docId);
        batch.set(docRef, transactionsByDocId[docId]);
    });

    batch.commit();
}

export async function getTransactionsMain(getAllTransactions: Boolean = true) {
    const user = getUser();
    const firestore = getDB();

    let transactions: Transaction[] = [];

    if (getAllTransactions) {
        const querySnapshot = await getDocs(collection(firestore, user.id));
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            for (const key in data) {
                transactions.push({...data[key], "id": `${doc.id}/${key}`});
            }
        });
    }

    logger.info(`Got ${transactions.length} transactions`);
    return transactions
}

export function getCategoriesNoSync() {
    // TODO: remove tmp data
    for (let i = 0; i < sampleData.categories.length; i++) {
        categories[sampleData.categories[i].id] = sampleData.categories[i];
    }


    return categories;
}
