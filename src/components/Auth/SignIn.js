import React, { useState, useEffect } from 'react';
import Login from './Login';
import firebase from 'firebase/app';
import { firebaseApp } from '../../base';

const SignIn = (props) => {
  const [user, setUser] = useState('');

  const authHandler = async (authData) => {
    const { email } = authData.user;
    setUser(email);
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        authHandler({ user });
      }
    });
  });
  const authenticate = () => {
    const authProvider = new firebase.auth['GithubAuthProvider']();
    firebaseApp.auth().signInWithPopup(authProvider).then(authHandler);
  };

  if (!user) {
    return <Login authenticate={authenticate} />;
  }
  return props.children;
};

export default SignIn;
