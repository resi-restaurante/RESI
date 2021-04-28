/* prettier-ignore */
/* eslint-disable */
import React, { createContext, useCallback, useContext } from 'react';
import firebase from '../firebase';

interface stabelishmentsCredentials {
  uid: string;
  companyUid: string;
  typeUser: string;
  cnpj: string;
  name: string;
  description: string;
  city: string;
  state: string;
  road: string;
  cellphone: number;
  email: string;
}

interface PropertyContextData {
  createEstablishments(credentials: stabelishmentsCredentials): void;
}

const EstablishmentContext = createContext<PropertyContextData>({} as PropertyContextData);

const StabilishimentProvider: React.FC = ({ children }) => {
  const controller = new AbortController();
  const db = firebase.firestore();
  const user = firebase.auth().currentUser;

  const createEstablishments = useCallback(async ({
    uid,
    companyUid,
    cnpj,
    name,
    description,
    city,
    state,
    road,
    cellphone,
    email }) => {

    const property = {
      uid,
      companyUid,
      cnpj,
      name,
      description,
      city,
      state,
      road,
      cellphone,
      email,
    }

    await db.collection('establishments')
    .doc(uid)
    .set(property)
    .then(() => {
      // history.push('/nenhum-privilegio');
    })
    .catch(error => {
      console.log('erro: ', error);
    });

    return () => {
      const timeout = setTimeout(() => controller.abort(), 5000);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <EstablishmentContext.Provider value={{ createEstablishments }}>
      {children}
    </EstablishmentContext.Provider>
  );
};

function useEstablishments(): PropertyContextData {
  const context = useContext(EstablishmentContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { StabilishimentProvider, useEstablishments };
