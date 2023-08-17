import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { authSlice } from "./authSlice";

const { updateUserProfile, authStateChange, authLogout } = authSlice.actions;

export const authRegisterUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;

      await updateProfile(user, { displayName: login });

      const { uid, displayName } = auth.currentUser;

      dispatch(
        updateUserProfile({
          userId: uid,
          userName: displayName,
        })
      );
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
    await signOut(auth);
    dispatch(authLogout());
  } catch (err) {
    console.log("err", err);
    console.log("err.message", err.message);
  }
};

export const authStateChangeUser = () => async (dispatch, getState) => {
  try {
    await onAuthStateChanged(auth, () => {
      const user = auth.currentUser;
      if (user) {
        dispatch(authStateChange({ stateChange: true }));
        dispatch(
          updateUserProfile({
            userId: user.uid,
            userName: user.displayName,
          })
        );
      }
    });
  } catch (err) {
    console.log("err", err);
    console.log("err.message", err.message);
  }
};
