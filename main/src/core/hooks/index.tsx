import React from 'react';
import { AuthProvider } from './auth';
import { StabilishimentProvider } from './propertys';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <StabilishimentProvider>{children}</StabilishimentProvider>
    </AuthProvider>
  );
};

export default AppProvider;
