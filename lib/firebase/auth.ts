import { Auth, getAuth } from "firebase/auth";
import { getApp } from "./app";
import logger from "../logger";

let auth: Auth;

export function getFirebaseAuth() {
  if (!auth) {
    const app = getApp();
    auth = getAuth(app);

    logger.info("Firebase auth initialized!");
  }

  return auth;
}
