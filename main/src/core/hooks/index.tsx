import React from 'react';
import { AuthProvider } from './auth';
import { StablishimentProvider } from './propertys';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <StablishimentProvider>{children}</StablishimentProvider>
    </AuthProvider>
  );
};

export default AppProvider;
