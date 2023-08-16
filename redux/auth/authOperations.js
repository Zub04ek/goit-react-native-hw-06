import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/config";

export const authRegisterUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      // console.log("user", user);
    } catch (err) {
      console.log("err", err);
      console.log("err.message", err.message);
    }
  };

export const authLogInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("user", user);
    } catch (err) {
      console.log("err", err);
      console.log("err.message", err.message);
    }
  };

export const authLogOutUser = () => async (dispatch, getState) => {
  try {
  } catch (err) {
    console.log("err", err);
    console.log("err.message", err.message);
  }
};
