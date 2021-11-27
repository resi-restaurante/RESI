import { useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Input, Footer, Navbar, Button } from '../../components';
import {
  Container,
  ContainerLogin,
  AdviseContainer,
  FormRow,
  FormContainer,
} from './styles';

import { useAuth } from '../../contexts/Auth';
import { getValidationErrors } from '../../utils';

interface SignUpFormData {
  email: string;
  password: string;
  password_confirmation?: string;
}

export default function RegisterUsers() {
  const { signUp } = useAuth();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      history.push('/profile');
      try {
        console.log(data);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),

          password: Yup.string().min(
            6,
            'Senha deve conter no mínimo 6 dígitos',
          ),
          password_confirmation: Yup.string()
            .required('Deve ser inserido valor válido')
            .oneOf([Yup.ref('password'), undefined], 'Confirmação incorreta.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signUp({
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
    [signUp],
  );

  return (
    <Container>
      <Navbar itemVisible={false} />
      <ContainerLogin>
        <FormContainer
          ref={formRef}
          onSubmit={handleSubmit}
          className="Formlogin"
        >
          <FormRow>
            <div>
              <Input
                name="email"
                icon={FiMail}
                placeholder="Digite seu email"
              />
            </div>
          </FormRow>

          <FormRow>
            <div>
              <Input
                name="password"
                icon={FiLock}
                placeholder="Digite sua senha"
                type="password"
              />
            </div>
            <div>
              <Input
                name="password_confirmation"
                icon={FiLock}
                placeholder="Confirme sua senha"
                type="password"
              />
            </div>
          </FormRow>

          <Button>Registrar</Button>
        </FormContainer>
        <AdviseContainer>
          <h3>Registre-se agora</h3>
          <h3>para agendar uma mesa !</h3>
          <div>
            <p>Já tem uma conta ?</p>
            <Link to="/login">
              <p id="register-link">Acesse aqui</p>
            </Link>
          </div>
        </AdviseContainer>
      </ContainerLogin>
      <Footer />
    </Container>
  );
}
