import auth, { onAuthStateChanged } from '../api/authFirebase';

export type AuthUser = {
  uid: string;
  email: string | null;
};

export const loginUser = async (
  email: string,
  password: string
): Promise<AuthUser> => {
  const userCredential = await auth.signInWithEmailAndPassword(email, password);
  const { user } = userCredential;
  return {
    uid: user.uid,
    email: user.email,
  };
};

export const registerUser = async (
  email: string,
  password: string
): Promise<AuthUser> => {
  const userCredential = await auth.createUserWithEmailAndPassword(
    email,
    password
  );
  const { user } = userCredential;
  return {
    uid: user.uid,
    email: user.email,
  };
};

export const subscribeToAuthState = (
  callback: (user: AuthUser | null) => void
) => {
  return onAuthStateChanged((user) => {
    if (user) {
      callback({ uid: user.uid, email: user.email });
    } else {
      callback(null);
    }
  });
};
