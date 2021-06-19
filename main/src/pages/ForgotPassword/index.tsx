import { useRef, useCallback } from 'react';
import { FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import {
  Container,
  ContainerCard,
  DescriptionContainer,
  FormContainer,
} from './styles';
import { Navbar, Footer, Button } from '../../components';
import { Input } from '../../components';

export default function ForgotPassword() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    console.log('Roi');
  }, []);

  return (
    <Container>
      <Navbar itemVisible />
      <ContainerCard>
        <DescriptionContainer>
          <h3>Esqueceu a senha ? Sem problema !</h3>
          <p>
            Será enviado as instruções para recuperação de senha para o seu
            email.
          </p>
        </DescriptionContainer>
        <FormContainer ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="email"
            icon={FiMail}
            placeholder="Digite seu email"
            style={{ width: '20%' }}
          />
          <footer>
            <Button type="button">Enviar</Button>
          </footer>
        </FormContainer>
      </ContainerCard>
      <Footer />
    </Container>
  );
}
