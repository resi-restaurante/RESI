import { useRef, useCallback } from 'react';
import { FiMail, FiUser, FiCalendar, FiPhone, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Navbar, Input, Button, Footer } from '../../components';
import { Container, FormContainer, DescriptionContainer } from './styles';
import api from '../../services/api';

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
      await api.post('/users', data);
    },
    [],
  );

  return (
    <Container>
      <Navbar itemVisible />
      <DescriptionContainer>
        <h3>Chega de filas, se cadastre aqui !</h3>
        <p>Informe seus dados para que você possa fazer diversas reservas.</p>
      </DescriptionContainer>
      <FormContainer
        ref={formRef}
        onSubmit={handleSubmit}
        className="Formlogin"
      >
        <div className="inputsContainer">
          <Input name="name" icon={FiUser} placeholder="Digite seu nome" />
          <Input name="birth_date" icon={FiCalendar} placeholder="dd/mm/aa" />
          <Input name="email" icon={FiMail} placeholder="Digite seu email" />
          <Input name="document" icon={FiPhone} placeholder="Digite seu CPF" />
          <Input
            name="cellphone"
            icon={FiPhone}
            placeholder="Digite seu telefone"
            type="password"
          />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Digite sua senha"
            style={{ width: '100%' }}
            type="password"
          />

          <Input
            name="type_plan"
            icon={FiLock}
            placeholder="Confirme sua senha"
            style={{ width: '100%' }}
            type="password"
          />
        </div>
        <footer>
          <Button type="button">Registrar</Button>
        </footer>
      </FormContainer>

      <Footer positionType="relative" />
    </Container>
  );
}
