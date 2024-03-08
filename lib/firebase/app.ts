import { FirebaseApp, initializeApp } from "firebase/app";
import { firebaseConfig } from "@/lib/firebase/constants";
import logger from "@/lib/logger";

let app: FirebaseApp;

export function getApp() {
  if (!app) {
    app = initializeApp(firebaseConfig);
    logger.info("Firebase initialized!");
  }
  return app;
}
