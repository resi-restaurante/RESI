import { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { createBrowserHistory } from 'history';
import { Box, useToast } from '@chakra-ui/react';
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
  const toast = useToast();
  const history = createBrowserHistory();
  const handleHistory = () => {
    history.push('/dataset');
  };
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        console.log(data);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),

          password: Yup.string().min(
            8,
            'Senha deve conter no mínimo 8 dígitos',
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
        toast({
          title: 'Email enviado',
          position: 'top',
          variant: 'subtle',
          description: '',
          status: 'success',
          duration: 3000,
          isClosable: true,
          render: () => (
            <Box color="white" p={3} bg="green.500">
              Email enviado
            </Box>
          ),
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

          <Button onClick={handleHistory}>Registrar</Button>
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
