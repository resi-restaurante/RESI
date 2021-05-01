/* prettier-ignore */
/* eslint-disable */
import React, { createContext, useCallback, useContext, useState } from 'react';
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

interface searchStabelishments {
  city: string;
}

interface PropertyContextData {
  createEstablishments(credentials: stabelishmentsCredentials): void;
  listEstablishments(credentials: searchStabelishments): void;
}

const EstablishmentContext = createContext<PropertyContextData>({} as PropertyContextData);

const StablishimentProvider: React.FC = ({ children }) => {
  const controller = new AbortController();
  const db = firebase.firestore();
  const user = firebase.auth().currentUser;

  const [ filteredEstablishments, setFilteredEstablishments ] = useState([] as any);

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

  const listEstablishments = useCallback(async ({ city }) => {

    const locality = {
      city
    }

    await db.collection('establishments')
    .where('city','==',city)
    .get()
    .then((querySnapshot) => {
      setFilteredEstablishments(querySnapshot.docs.map((doc) => doc.data()))
    })
    .catch((error) => {
      console.log("erro: ", error);
    });

    return filteredEstablishments
  },[])

  return (
    <EstablishmentContext.Provider value={{ createEstablishments, listEstablishments }}>
      {children}
    </EstablishmentContext.Provider>
  );
};

function useEstablishments(): PropertyContextData {
  const context = useContext(EstablishmentContext);

  if (!context) {
    throw new Error('useEstablishments must be used within an StablishimentProvider');
  }

  return context;
}

export { StablishimentProvider, useEstablishments };
