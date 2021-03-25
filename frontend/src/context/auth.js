import React, { useContext, createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'firebase';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStoragedData() {
      const storageUser = await AsyncStorage.getItem('@RNAuth:user');
      const storageToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storageUser && storageToken) {
        api.defaults.headers.Authorization = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
      }
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  async function signIn(email, password) {
    setLoading(true);

    try {
      const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
      
      setUser(response.user.providerData[0]);

      api.defaults.headers.Authorization = `Bearer ${JSON.stringify(
        response.user.toJSON().stsTokenManager.accessToken
      )}`;

      await AsyncStorage.setItem(
        '@RNAuth:user',
        JSON.stringify(response.user.providerData[0])
      );
      await AsyncStorage.setItem(
        '@RNAuth:token',
        JSON.stringify(response.user.toJSON().stsTokenManager.accessToken)
      );
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
