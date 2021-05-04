import { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Container, ContainerCard, RecoverPasswordText } from './styles';
import { Header } from '../../components/Header';
import Input from '../../components/Input';

export default function ForgotPassword() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    console.log('Roi');
  }, []);

  return (
    <Container>
      <Header />
      <ContainerCard>
        <Form ref={formRef} onSubmit={handleSubmit} className="Formlogin">
          <div className="formCard">
            <RecoverPasswordText>Recuperar senha</RecoverPasswordText>
            <p>
              Será enviado as instruções para recuperação de senha para o seu
              email.
            </p>
            <Input
              name="email"
              icon={FiMail}
              placeholder="Digite seu email"
              style={{ width: '100%' }}
            />
            <footer>
              <Link to="/login">
                <p>Voltar</p>
              </Link>
              <button type="button">Enviar</button>
            </footer>
          </div>
        </Form>
      </ContainerCard>
    </Container>
  );
}
