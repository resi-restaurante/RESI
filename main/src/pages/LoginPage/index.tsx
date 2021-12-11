import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { createBrowserHistory } from 'history';
import { Input, Footer, Navbar, Button } from '../../components';
import {
  Container,
  ContainerLogin,
  AdviseContainer,
  InputFormContainer,
} from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../contexts/Auth';

interface SignInFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const history = createBrowserHistory();

  const handleHistory = () => {
    history.push('/profile');
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const { signIn } = useAuth();

  const formRef = useRef<FormHandles>(null);
  async function handleSubmit(data: SignInFormData) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail obrigatório.'),
        password: Yup.string()
          .min(8, 'Senha deve conter no mínimo 8 dígitos')
          .required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current?.setErrors({});

      signIn({
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }

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
        <Form onSubmit={handleSubmit} ref={formRef} className="Formlogin">
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
          <Button type="submit" onClick={handleHistory}>
            Entrar
          </Button>
        </Form>
      </ContainerLogin>
      <Footer />
    </Container>
  );
}
