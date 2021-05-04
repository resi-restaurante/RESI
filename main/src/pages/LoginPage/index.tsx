import { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../components/Input';

import { Container, ContainerLogin } from './styles';

export default function LoginPage() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    console.log('Roi');
  }, []);

  return (
    <Container>
      <ContainerLogin>
        <Form ref={formRef} onSubmit={handleSubmit} className="Formlogin">
          <Link to="/">
            <img src="images/logo.svg" alt="" />
          </Link>

          <div className="inputForm">
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
          </div>

          <main>
            <Link to="/forgotpassword" id="forgetPassaword">
              <p>Esqueci minha senha</p>
            </Link>

            <button type="button">login</button>
          </main>

          <footer>
            <Link to="/register">
              <p>Não tem uma conta ? Cadastre-se !</p>
              <FiArrowRight size={20} />
            </Link>
          </footer>
        </Form>
      </ContainerLogin>
    </Container>
  );
}
