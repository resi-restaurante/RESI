import { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiUser, FiCalendar, FiPhone, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { Input, Footer, Navbar, Button } from '../../components';
import {
  Container,
  ContainerLogin,
  AdviseContainer,
  FormRow,
  FormContainer,
} from './styles';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignUpFormData {
  name: string;
  date: string;
  cellphone: string;
  document: string;
  email: string;
  password: string;
  type_plan: string;
}

export default function RegisterPage() {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SignUpFormData): Promise<void> => {
      try {
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
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', {
          ...data,
          cellphone: Number(data.cellphone),
          document: Number(data.document),
          type_plan: Number(data.type_plan),
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
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
                onChange={e => Number(e.target.value)}
                type="number"
              />
            </div>
            <div>
              <Input
                name="cellphone"
                icon={FiPhone}
                placeholder="Digite seu telefone"
                onChange={e => Number(e.target.value)}
                type="number"
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
                onChange={e => Number(e.target.value)}
                type="number"
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
            <Link to="/register">
              <p id="register-link">Acesse aqui</p>
            </Link>
          </div>
        </AdviseContainer>
      </ContainerLogin>
      <Footer />
    </Container>
  );
}
