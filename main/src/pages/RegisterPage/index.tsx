/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { useRef, useCallback } from 'react';
import { FiUser, FiPhone, FiFileText } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { createBrowserHistory } from 'history';
import { Input, Footer, Navbar, Button } from '../../components';
import {
  Container,
  ContainerLogin,
  AdviseContainer,
  FormRow,
  FormContainer,
} from './styles';

import { getValidationErrors, cpfMask, cellphoneMask } from '../../utils';

import { useAuth } from '../../contexts/Auth';
import { supabase } from '../../supabase';

interface SignUpFormData {
  name: string;
  date: string;
  cellphone: string;
  cpf: string;
  type_plan: number;
}

export default function RegisterPage() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);
  const [telefone, setTelefone] = useState<string>('');
  const [documento, setDocumento] = useState('');
  const [dat_nascimento, setDat_nascimento] = useState<string>('');

  const session = supabase.auth.session();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username,dat_nascimento,documento,telefone`)
        .eq('id', user?.id)
        .single();

      if (error && status !== 406) {
        console.log(error);
      }
      if (data) {
        setUsername(data.username);
        setDat_nascimento(data.dat_nascimento);
        setDocumento(data.documento);
        setTelefone(data.telefone);
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  async function RegisterDatasUsers({
    username,
    documento,
    dat_nascimento,
    telefone,
  }: {
    username: string | null;
    documento: string;
    dat_nascimento: string;
    telefone: string;
  }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const registers = {
        id: user?.id,
        username,
        dat_nascimento,
        documento,
        telefone,
        updated_at: new Date(),
      };

      const { error } = await supabase.from('profiles').upsert(registers, {
        returning: 'minimal', // Don't return the value after inserting
      });
      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  const { signUp } = useAuth();
  const history = createBrowserHistory();

  const handleHistory = () => {
    history.push('/profile');
    setTimeout(() => {
      window.location.reload();
    }, 600);
  };
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        handleHistory();
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          birth_date: Yup.date().required('Data de aniversário obrigatório'),

          cpf: Yup.string().required('Documento obrigatório'),
          cellphone: Yup.string().required('Número de telefone obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
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
            <Input
              name="name"
              id="username"
              type="text"
              value={username || ''}
              onChange={e => setUsername(e.target.value)}
              icon={FiUser}
              placeholder="Digite seu nome"
            />
          </FormRow>
          <FormRow>
            <Input
              name="dat_nascimento"
              id="dat_nascimento"
              type="date"
              placeholder="Data de nascimento"
              value={dat_nascimento}
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              onChange={e => setDat_nascimento(e.target.value)}
            />
          </FormRow>
          <FormRow>
            <div>
              <Input
                name="documento"
                type="text"
                id="documento"
                icon={FiFileText}
                placeholder="Digite seu CPF"
                value={cpfMask(documento)}
                onChange={e => setDocumento(e.target.value)}
              />
            </div>
            <div>
              <Input
                name="telefone"
                id="telefone"
                type="text"
                icon={FiPhone}
                placeholder="Digite seu telefone"
                value={cellphoneMask(telefone)}
                onChange={e => setTelefone(e.target.value)}
                max="12"
              />
            </div>
          </FormRow>
          <FormRow />
          <Button
            onClick={() =>
              RegisterDatasUsers({
                username,
                documento,
                dat_nascimento,
                telefone,
              })
            }
          >
            {loading || 'Registrar'}
          </Button>
        </FormContainer>
        <AdviseContainer>
          <h3>Preencha com suas informações</h3>
        </AdviseContainer>
      </ContainerLogin>
      <Footer />
    </Container>
  );
}
