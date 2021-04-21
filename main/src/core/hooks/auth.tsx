/* prettier-ignore */
/* eslint-disable */
import React, { createContext, useCallback, useContext } from 'react';
import firebase from '../firebase';

interface SignInCredentials {
  uid?: string;
  email: string;
  password?: string;
  name: string;
  typeUser: string;
  cellphone: number;
}

interface SignUpCredentials {
  email: string;
  password: string;
  name: string;
  typeUser: string;
  cellphone: number;
}
interface AuthContextData {
  signIn(credentials: SignInCredentials): void;
  signOut(): void;
  signUp(credentials: SignUpCredentials): void;
  recoverPassword(email: string): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const controller = new AbortController();
  const db = firebase.firestore();
  const user = firebase.auth().currentUser;

  const saveUser = ({
    uid,
    email,
    name,
    typeUser,
    cellphone,
  }: SignInCredentials) => {
    const user = {
      uid,
      email,
      name,
      typeUser,
      cellphone,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection('users')
      .doc(uid)
      .set(user)
      .then(() => {
        // history.push('/nenhum-privilegio');
      })
      .catch(error => {
        console.log('erro: ', error);
      });
  };

  const signIn = useCallback(async ({ email, password }) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        let alertString = 'Erro ao logar. Por favor tente novamente.';

        if (error.code === 'auth/user-not-found') {
          alertString = 'Usuário não existente. Por favor tente novamente.';
        } else if (error.code === 'auth/wrong-password') {
          alertString = 'Senha incorreta. Por favor tente novamente.';
        }
      });

    return () => {
      const timeout = setTimeout(() => controller.abort(), 5000);
      clearTimeout(timeout);
    };
  }, []);

  const signOut = useCallback(() => {
    firebase.auth().signOut();
  }, []);

  const signUp = useCallback(
    ({ email, password, name, typeUser, cellphone }: SignUpCredentials) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user): void => {
          const uid = user?.user?.uid;
          saveUser({ uid, email, name, typeUser, cellphone });
        })
        .catch(error => {
          let alertString = 'Erro ao logar. Por favor tente novamente.';

          if (error.code === 'auth/user-not-found') {
            alertString = 'Usuário não existente. Por favor tente novamente.';
          } else if (error.code === 'auth/wrong-password') {
            alertString = 'Senha incorreta. Por favor tente novamente.';
          }
        });

      return () => {
        const timeout = setTimeout(() => controller.abort(), 5000);
        clearTimeout(timeout);
      };
    },
    [],
  );

  const recoverPassword = useCallback((email: string) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .catch(error => {
        console.log('erro', error);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, signUp, recoverPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
