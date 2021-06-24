import React from 'react';
import { Container } from './styles';

type Propsbutton = {
  numberTable: string;
};

export const ButtonTable: React.FC<Propsbutton> = ({ numberTable }) => {
  return (
    <Container>
      <button type="button">{numberTable}</button>
    </Container>
  );
};
