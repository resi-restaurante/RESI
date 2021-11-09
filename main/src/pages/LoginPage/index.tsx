import { useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
// import { useAuth } from '../../hooks/AuthContext';
import { Input, Footer, Navbar, Button } from '../../components';
import {
  Container,
  ContainerLogin,
  AdviseContainer,
  InputFormContainer,
} from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
//
import { useAuth } from '../../contexts/Auth';

interface SignInFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const [error, setError] = useState(null);

  const { signIn } = useAuth();
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      history.push('/profile');
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório.')
            .email('Digite um e-mail válida'),
          password: Yup.string().min(
            6,
            'Senha deve conter no mínimo 6 dígitos',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

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
    },
    [signIn],
  );
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

          <Button>Entrar</Button>
        </Form>
      </ContainerLogin>
      <Footer />
    </Container>
  );
}
