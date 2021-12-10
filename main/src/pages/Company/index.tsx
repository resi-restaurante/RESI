/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { FiHome, FiCalendar, FiSearch, FiCoffee, FiZap } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FiUser } from 'react-icons/fi';
import * as Yup from 'yup';
import { Link, useHistory, useParams } from 'react-router-dom';

import { getValidationErrors } from '../../utils';
import {
  Container,
  CardRestaurantInformationContainer,
  SelectionMenu,
  ContentContainer,
  ListContainer,
  ScrollView,
  ContainerPage,
  SectionTable,
  TablesItems,
} from './styles';
import {
  CardListAppointment,
  CardListCompanys,
  InputWithOutForm,
  Input,
  Footer,
  Button,
  Navbar,
  TextArea,
} from '../../components';

import Modal from '../../components/Modal';

import { useAuth } from '../../contexts/Auth';
import { supabase } from '../../supabase';
import TableItem from '../../components/TableItem';

interface SignUpFormData {
  name: string;
  description: string;
  price: string;
}
interface TableFormData {
  qtd_cadeiras: number;
  mesa_id: number;
  descricao_mesa: string;
}
export default function ProfileRestaurant() {
  const { user } = useAuth();
  const [showSchedule, setShowSchedule] = useState(true);
  const [showCompanys, setShowCompanys] = useState(false);

  const [loading, setLoading] = useState(true);

  const [nome, setNome] = useState('');
  const [mesa, setMesa] = useState<any[]>();
  const [mesaId, setMesaId] = useState<number | any>();
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

  const [qtd_cadeiras, setQtd_cadeiras] = useState('');
  const [descricao_mesa, setDescricao_mesa] = useState<any>();

  const handleDisableContainer = (containerType: string) => {
    if (containerType === 'schedule') {
      setShowSchedule(true);
      setShowCompanys(false);
    } else {
      setShowSchedule(false);
      setShowCompanys(true);
    }
  };

  const { signOut } = useAuth();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const session = supabase.auth.session();
  useEffect(() => {
    getRestaurant();
  }, [session]);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    getTables();
  }, [session]);

  async function getTables() {
    const { data } = await supabase
      .from('mesas')
      .select('*')
      .in('restaurante_id', [id]);
    // console.log(data);
    if (data) {
      setMesa(data);
    }
  }
  const { id }: { id?: number | string | null } = useParams();
  async function getRestaurant() {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from('restaurants')
        .select(`nome,descricao,preco`)
        .eq('restaurante_id', [id])
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setNome(data.nome);
        setDescricao(data.descricao);
        setPreco(data.preco);
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }
  // Funções Update
  async function registerNewTables({
    descricao_mesa,
    qtd_cadeiras,
  }: {
    descricao_mesa: string;
    qtd_cadeiras: string;
  }) {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from('mesas')
        .insert([
          {
            descricao_mesa,
            qtd_cadeiras,
            restaurante_id: 2,
          },
        ])
        .single();

      if (error && status !== 406) {
        console.log(error);
      }
      if (data) {
        console.log(data);

        setQtd_cadeiras(data.qtd_cadeiras);
        setDescricao_mesa(data.descricao_mesa);
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }
  async function updateProfile({
    nome,
    descricao,
    preco,
  }: {
    nome: string | null;
    descricao: string;
    preco: string;
  }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user?.id,
        nome,
        descricao,
        preco,
      };

      const { error } = await supabase.from('restaurants').upsert(updates, {
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

  const handleSubmit = async (data: SignUpFormData) => {
    history.push('/profile');
    try {
      // console.log(data);
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
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
  };
  const handleSubmitTable = async (data: TableFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        description_Table: Yup.string().required('Nome obrigatório'),
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
  };
  return (
    <Container>
      <Navbar itemVisible />
      <ContainerPage>
        <CardRestaurantInformationContainer>
          <h1>Seu Perfil</h1>
          <div>
            <h3>Bem vindo, {nome} !</h3>
          </div>
          <div className="InputsSection">
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                name="name"
                id="username"
                type="text"
                value={nome || ''}
                onChange={e => setNome(e.target.value)}
                icon={FiUser}
                placeholder="Nome de seu restaurante"
              />
              <TextArea
                name="description"
                id="description"
                type="text"
                value={descricao || ''}
                onChange={e => setDescricao(e.target.value)}
                icon={FiUser}
                placeholder="Descricao de seu restaurante"
              />
              <Input
                name="price"
                id="price"
                type="text"
                value={preco || ''}
                onChange={e => setPreco(e.target.value)}
                icon={FiUser}
                placeholder="Taxa de reserva de seu restaurante"
              />
            </Form>
          </div>
          <div>
            <Button
              onClick={() => updateProfile({ nome, descricao, preco })}
              disabled={loading}
            >
              {' '}
              {loading || 'Update'}
            </Button>
          </div>

          <div>
            <Button onClick={() => signOut()}>SAIR</Button>
          </div>
        </CardRestaurantInformationContainer>

        <SectionTable>
          <h2>Cadastro de mesas:</h2>
          <Form ref={formRef} onSubmit={handleSubmitTable}>
            <TextArea
              name="descricao_mesa"
              type="text"
              value={descricao_mesa || ''}
              onChange={e => setDescricao_mesa(e.target.value)}
              icon={FiCoffee}
              placeholder="descricao do local da mesa"
            />
            <Input
              name="qtd_cadeiras"
              type="number"
              value={qtd_cadeiras || ''}
              onChange={e => setQtd_cadeiras(e.target.value)}
              icon={FiZap}
              placeholder="Quantidade de cadeiras"
            />
          </Form>
          <Button
            onClick={() => registerNewTables({ descricao_mesa, qtd_cadeiras })}
            disabled={loading}
          >
            {' '}
            {loading || 'Cadastrar Mesa'}
          </Button>

          <TablesItems>
            {mesa?.map((table: TableFormData) => (
              <TableItem
                key={table.mesa_id}
                chairs={table.qtd_cadeiras}
                numberTable={table.mesa_id}
                description={table.descricao_mesa}
                valueProp={table.mesa_id.toString()}
                checkedProp={table.mesa_id.toString()}
                onChange={e => setMesaId(e.target.value)}
                selectedRadio={mesaId}
                classNameTable="empty-table"
              />
            ))}
          </TablesItems>
        </SectionTable>
      </ContainerPage>
      <SelectionMenu>
        <ContentContainer
          onPressContent={showSchedule}
          onClick={() => handleDisableContainer('schedule')}
        >
          <FiCalendar size={20} color="#e53935" />
          <h3>Agendamentos</h3>
        </ContentContainer>
      </SelectionMenu>

      {showSchedule && (
        <ListContainer>
          <header>
            <h1>Pesquise aqui por seus agendamentos</h1>
            <InputWithOutForm icon={FiSearch} />
          </header>
          <ScrollView>
            <CardListAppointment
              id="1A2VQ"
              restaurantName="Casa da Eshiha"
              date="01/07/2022"
            />
          </ScrollView>
        </ListContainer>
      )}
      {showCompanys && (
        <ListContainer>
          <header>
            <h1>Pesquise aqui por sua companhia</h1>
            <InputWithOutForm icon={FiSearch} />
          </header>
          <ScrollView>
            <CardListCompanys id="1A2VQ" restaurantName="Casa da Eshiha" />
          </ScrollView>
        </ListContainer>
      )}
      <Footer />
    </Container>
  );
}
