import { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Input, Footer, Navbar } from '../../components';
import {
  Container,
  ContainerLogin,
  AdviseContainer,
  InputFormContainer,
} from './styles';

export default function LoginPage() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    console.log('Roi');
  }, []);

  return (
    <Container>
      <Navbar itemVisible={false} />
      <ContainerLogin>
        <AdviseContainer>
          <h3>Entre agora</h3>
          <h3>para agendar uma mesa !</h3>
          <div>
            <p>Não tem uma conta ?</p>
            <Link to="/register">
              <p id="register-link">Registre-se aqui !</p>
            </Link>
          </div>
        </AdviseContainer>
        <Form ref={formRef} onSubmit={handleSubmit} className="Formlogin">
          <InputFormContainer>
            <p>Email</p>
            <Input
              name="email"
              icon={FiMail}
              placeholder="Digite seu email"
              style={{ width: '100%' }}
            />
            <p>Senha</p>
            <Input
              name="password"
              icon={FiLock}
              placeholder="Digite sua senha"
              type="password"
            />
          </InputFormContainer>

          <main>
            <Link to="/forgotpassword" id="forgetPassaword">
              <p>Esqueci minha senha</p>
            </Link>
          </main>

          <button type="button">Entrar</button>
        </Form>
      </ContainerLogin>
      <Footer />
    </Container>
  );
}
