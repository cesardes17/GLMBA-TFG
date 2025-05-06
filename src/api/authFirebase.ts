import { Platform } from 'react-native';
import firebaseConfig from '../config/firebaseWebConfig';

// Tipo común para abstraer ambos SDKs
type AuthModule = {
  signInWithEmailAndPassword: (email: string, password: string) => Promise<any>;
  createUserWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<any>;
};

let auth: AuthModule;
let onAuthStateChanged: (callback: (user: any) => void) => () => void;

if (Platform.OS === 'web') {
  const { initializeApp, getApps } = require('firebase/app');
  const {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged: webOnAuthStateChanged,
  } = require('firebase/auth');

  const app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  const authWeb = getAuth(app);

  auth = {
    signInWithEmailAndPassword: (email, password) =>
      signInWithEmailAndPassword(authWeb, email, password),
    createUserWithEmailAndPassword: (email, password) =>
      createUserWithEmailAndPassword(authWeb, email, password),
  };

  onAuthStateChanged = (cb) => webOnAuthStateChanged(authWeb, cb);
} else {
  const { getApp } = require('@react-native-firebase/app');
  const {
    getAuth,
    onAuthStateChanged: nativeOnAuthStateChanged,
  } = require('@react-native-firebase/auth');

  const authInstance = getAuth(getApp());

  auth = {
    signInWithEmailAndPassword: authInstance.signInWithEmailAndPassword,
    createUserWithEmailAndPassword: authInstance.createUserWithEmailAndPassword,
  };

  onAuthStateChanged = (cb) => nativeOnAuthStateChanged(authInstance, cb);
}

export default auth;
export { onAuthStateChanged };
