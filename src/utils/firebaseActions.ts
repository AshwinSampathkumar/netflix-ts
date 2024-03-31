import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import { USER_DATA } from "../constants";

export const signup = async (
  username: string,
  email: string,
  password: string
) => {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      return await updateProfile(user, {
        displayName: username,
        photoURL: USER_DATA.userAvatar,
      })
        .then(() => {
          const { uid, email, displayName, photoURL }: any = auth.currentUser;
          return {
            error: false,
            data: {
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            },
          };
        })
        .catch((error) => {
          return {
            error: true,
            data: error.message,
          };
        });
    })
    .catch((error) => {
      return {
        error: true,
        data: error.message,
      };
    });
};

export const signin = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return {
        error: false,
        data: userCredential.user,
      };
    })
    .catch((error) => {
      return {
        error: true,
        data: error.message,
      };
    });
};
