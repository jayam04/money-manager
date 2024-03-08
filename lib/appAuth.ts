import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirebaseAuth } from "./firebase/auth";
import logger from "./logger";
import { DEFAULTUSER, GUESTUSER } from "./constants";

let user: SpendsUser;

onAuthStateChanged(getFirebaseAuth(), (firebaseUser) => {
  if (firebaseUser) {
    logger.info("Getting user");
    const auth = getFirebaseAuth();
    const currentUser = auth.currentUser;
    if (!currentUser) {
      logger.info("No user found!");
      return GUESTUSER;
    }

    let newUser = DEFAULTUSER;
    newUser.id = auth.currentUser.uid;
    if (currentUser.displayName) {
      newUser.name = currentUser.displayName;
      newUser.nameInitials = currentUser.displayName
        .split(" ")
        .map((n) => n[0])
        .join("");
    }
    if (currentUser.email) newUser.email = currentUser.email;
    logger.info("User found! ::", currentUser);

    user = newUser
  } else {
    user = GUESTUSER;
  }

  logger.info("User state changed!");
  logger.info(user);
});

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

export function getUser() {
  if (user) return user;
  else return GUESTUSER;
}
