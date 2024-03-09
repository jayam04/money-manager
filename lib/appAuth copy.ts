import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirebaseAuth } from "./firebase/auth";
import logger from "./logger";
import { DEFAULTUSER, GUESTUSER } from "./constants";

let user: SpendsUser;

export function createUser(email: string, password: string) {
  const auth = getFirebaseAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      logger.info("User created!");
      logger.info(userCredential);
      console.log(userCredential);

      // TODO: Initiate db for user
    })
    .catch((error) => {
      logger.error(error);

      // TODO: return error based on it
    });
}

export function getUser(callback: (user: SpendsUser | null) => void) {
  const auth = getFirebaseAuth();

  const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      logger.info("User found!");
      let newUser = DEFAULTUSER;
      newUser.id = firebaseUser.uid;
      if (firebaseUser.displayName) {
        newUser.name = firebaseUser.displayName;
        newUser.nameInitials = firebaseUser.displayName
          .split(" ")
          .map((n) => n[0])
          .join("");
      }
      if (firebaseUser.email) newUser.email = firebaseUser.email;

      user = newUser;
      callback(user);
    } else {
      logger.info("No user found!");
      user = GUESTUSER;
      callback(null);
    }
  });

  return unsubscribe;
}
