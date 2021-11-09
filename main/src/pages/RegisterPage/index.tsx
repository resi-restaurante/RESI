import { useState } from 'react';
import { useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiUser, FiPhone, FiLock, FiFileText } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import DatePicker from 'react-multi-date-picker';
import { Input, Footer, Navbar, Button } from '../../components';
import {
  Container,
  ContainerLogin,
  AdviseContainer,
  FormRow,
  FormContainer,
} from './styles';
// import api from '../../services/api';
import { getValidationErrors, cpfMask, cellphoneMask } from '../../utils';

import { useAuth } from '../../contexts/Auth';

interface SignUpFormData {
  name: string;
  date: string;
  cellphone: string;
  document: string;
  email: string;
  password: string;
  password_confirmation?: string;
  type_plan: number;
}

export default function RegisterPage() {
  const [formatedDocument, setFormatedDocument] = useState('');
  const [formatedCellphone, setFormattedCellphone] = useState('');

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
          name: Yup.string().required('Nome obrigatório'),
          birth_date: Yup.date().required('Data de aniversário obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          document: Yup.string().required('Documento obrigatório'),
          cellphone: Yup.string().required('Número de telefone obrigatório'),
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
            <Input name="name" icon={FiUser} placeholder="Digite seu nome" />
          </FormRow>
          <FormRow>
            <div>
              <DatePicker name="birth_date" type="input-icon" />
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
                icon={FiFileText}
                placeholder="Digite seu CPF"
                value={cpfMask(formatedDocument)}
                onChange={e => setFormatedDocument(e.target.value)}
              />
            </div>
            <div>
              <Input
                name="cellphone"
                icon={FiPhone}
                placeholder="Digite seu telefone"
                value={cellphoneMask(formatedCellphone)}
                onChange={e => setFormattedCellphone(e.target.value)}
                max="12"
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
          {/* <button type="submit">Registrar</button> */}
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
