// firestore.ts
import { getApp } from "./app";
import { Firestore, getFirestore } from "firebase/firestore";
import logger from "../logger";

let db: Firestore;

export function getDB() {
  if (!db) {
    const app = getApp(); // Get the initialized Firebase app instance
    db = getFirestore(app); // Initialize Firestore with the app instance
    logger.info(
      "Firestore initialized! ::",
      db.app.name,
      db.app.options.projectId,
      db.app.options.databaseURL,
      db.app.options.storageBucket
    );
  }
  return db;
}

export async function getTransactions(userId: string) {
  const db = getDB();
}
