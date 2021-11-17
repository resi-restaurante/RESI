/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { FiHome, FiCalendar, FiSearch } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FiUser } from 'react-icons/fi';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { getValidationErrors } from '../../utils';
import {
  Container,
  RedContainer,
  CardUserInformationContainer,
  SelectionMenu,
  ContentContainer,
  ListContainer,
  ScrollView,
} from './styles';
import {
  Header,
  CardListAppointment,
  CardListCompanys,
  InputWithOutForm,
  Input,
  Footer,
  Button,
} from '../../components';
import profileAvatar from '../../assets/images/profile.jpg';
import Modal from '../../components/Modal';
// import { useAuth } from '../../hooks/AuthContext';
import { useAuth } from '../../contexts/Auth';
import { supabase } from '../../supabase';
import PersonalAvatar from '../../components/PersonalAvatar';

interface SignUpFormData {
  name: string;
}
export default function ProfilePage() {
  const { user } = useAuth();
  const [showSchedule, setShowSchedule] = useState(true);
  const [showCompanys, setShowCompanys] = useState(false);

  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState(null);
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
    getProfile();
  }, [session]);
  // função
  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, avatar_url`)
        .eq('id', user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setUsername(data.username);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }
  // Funções Update
  async function updateProfile({
    username,
    avatar_url,
  }: {
    username: string | null;
    avatar_url: any;
  }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user?.id,
        username,
        avatar_url,
        updated_at: new Date(),
      };

      const { error } = await supabase.from('profiles').upsert(updates, {
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
      console.log(data);
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
  return (
    <Container>
      <Header />
      <RedContainer>
        <CardUserInformationContainer>
          <div>
            <h3>Olá,{user?.id} !</h3>
            <input id="user-email" type="text" value={user?.email} disabled />
          </div>

          <div>
            <PersonalAvatar
              url={avatar_url}
              onUpload={(url: string | any) => {
                setAvatarUrl(url);
                updateProfile({ username, avatar_url: url });
              }}
            />

            <h1>Seu Perfil</h1>
            <h3>{username}</h3>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                name="name"
                id="username"
                type="text"
                value={username || ''}
                onChange={e => setUsername(e.target.value)}
                icon={FiUser}
                placeholder="Digite seu nome"
              />
            </Form>
          </div>
          <div>
            <Button
              onClick={() => updateProfile({ username, avatar_url })}
              disabled={loading}
            >
              {' '}
              {loading || 'Update'}
            </Button>
          </div>
          {/* </Form> */}
          <div>
            <Button onClick={() => signOut()}>SAIR</Button>
          </div>
        </CardUserInformationContainer>
        <SelectionMenu>
          <ContentContainer
            onPressContent={showSchedule}
            onClick={() => handleDisableContainer('schedule')}
          >
            <FiCalendar size={20} />
            <h3>Agendamentos</h3>
            <Modal />
          </ContentContainer>
          <ContentContainer
            onPressContent={showCompanys}
            onClick={() => handleDisableContainer('companys')}
          >
            <FiHome size={20} />
            <h3>Companhias</h3>
          </ContentContainer>
        </SelectionMenu>
      </RedContainer>
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
            <CardListAppointment
              id="1A2VQ"
              restaurantName="Casa da Eshiha"
              date="01/07/2022"
            />
            <CardListAppointment
              id="1A2VQ"
              restaurantName="Casa da Eshiha"
              date="01/07/2022"
            />
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
            <CardListCompanys id="1A2VQ" restaurantName="Casa da Eshiha" />
            <CardListCompanys id="1A2VQ" restaurantName="Casa da Eshiha" />
            <CardListCompanys id="1A2VQ" restaurantName="Casa da Eshiha" />
            <CardListCompanys id="1A2VQ" restaurantName="Casa da Eshiha" />
            <CardListCompanys id="1A2VQ" restaurantName="Casa da Eshiha" />
            <CardListCompanys id="1A2VQ" restaurantName="Casa da Eshiha" />
          </ScrollView>
        </ListContainer>
      )}
      <Footer />
    </Container>
  );
}
