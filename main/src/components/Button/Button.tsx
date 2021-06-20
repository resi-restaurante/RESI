import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  ...rest
}) => (
  <Container type="submit" {...rest}>
    <h3>{loading ? 'Carregando ...' : children}</h3>
  </Container>
);
