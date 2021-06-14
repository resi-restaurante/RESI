import { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiUser, FiCalendar, FiPhone, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Input, Footer, Navbar, Button } from '../../components';
import {
  Container,
  ContainerLogin,
  AdviseContainer,
  FormRow,
  FormContainer,
} from './styles';

interface SignUpFormData {
  name: string;
  date: Date;
  cellphone: number;
  document: number;
  email: string;
  password: string;
  type_plan: number;
}

export default function RegisterPage() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SignUpFormData): Promise<void> => {
      console.log(data);
    },
    [],
  );

  return (
    <Container>
      <Navbar itemVisible />
      <ContainerLogin>
        <FormContainer
          ref={formRef}
          onSubmit={handleSubmit}
          className="Formlogin"
        >
          <FormRow>
            <Input name="name" icon={FiUser} placeholder="Digite seu nome" />
          </FormRow>
          <FormRow>
            <div>
              <Input
                name="birth_date"
                icon={FiCalendar}
                placeholder="dd/mm/aa"
              />
            </div>
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
                name="document"
                icon={FiPhone}
                placeholder="Digite seu CPF"
              />
            </div>
            <div>
              <Input
                name="cellphone"
                icon={FiPhone}
                placeholder="Digite seu telefone"
                type="password"
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
                name="type_plan"
                icon={FiLock}
                placeholder="Confirme sua senha"
                type="password"
              />
            </div>
          </FormRow>

          <Button type="button">Registrar</Button>
        </FormContainer>
        <AdviseContainer>
          <h3>Registre-se agora</h3>
          <h3>para agendar uma mesa !</h3>
          <div>
            <p>Já tem uma conta ?</p>
            <Link to="/register">
              <p id="register-link">Acesse aqui</p>
            </Link>
          </div>
        </AdviseContainer>
      </ContainerLogin>
      <Footer positionType="absolute" />
    </Container>
  );
}
