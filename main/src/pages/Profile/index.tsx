/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { FiHome, FiCalendar, FiSearch } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FiUser } from 'react-icons/fi';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { Box, useToast } from '@chakra-ui/react';
import { getValidationErrors } from '../../utils';
import {
  Container,
  CardUserInformationContainer,
  SelectionMenu,
  ContentContainer,
  SectionButton,
  ListContainer,
  ScrollView,
  ContainerPage,
} from './styles';
import {
  CardListAppointment,
  CardListCompanys,
  InputWithOutForm,
  Input,
  Footer,
  Button,
  Navbar,
} from '../../components';

// import { useAuth } from '../../hooks/AuthContext';
import { useAuth } from '../../contexts/Auth';
import { supabase } from '../../supabase';
import PersonalAvatar from '../../components/PersonalAvatar';

interface SignUpFormData {
  name: string;
}
export default function ProfilePage() {
  const toast = useToast();
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
      toast({
        title: 'Profile updated.',
        position: 'top',
        variant: 'subtle',
        description: '',
        status: 'success',
        duration: 3000,
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="green.500">
            Perfil atualizado
          </Box>
        ),
      });
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
      <Navbar itemVisible />
      <ContainerPage>
        <CardUserInformationContainer>
          <h1>Seu Perfil</h1>
          <div>
            <h3>Olá, {username} !</h3>
          </div>
          <div>
            <PersonalAvatar
              url={avatar_url}
              onUpload={(url: string | any) => {
                setAvatarUrl(url);
                updateProfile({ username, avatar_url: url });
              }}
            />

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
              <Input
                name="email"
                id="user-email"
                type="text"
                icon={FiUser}
                value={user?.email}
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

          <div>
            <Button onClick={() => signOut()}>SAIR</Button>
          </div>
        </CardUserInformationContainer>

        <SectionButton>
          <Link to="/registerrestaurant">
            <Button>Cadastrar Restaurante</Button>
          </Link>
        </SectionButton>
      </ContainerPage>
      <SelectionMenu>
        <ContentContainer
          onPressContent={showSchedule}
          onClick={() => handleDisableContainer('schedule')}
        >
          <FiCalendar size={20} color="#e53935" />
          <h3>Agendamentos</h3>
        </ContentContainer>
        <ContentContainer
          onPressContent={showCompanys}
          onClick={() => handleDisableContainer('companys')}
        >
          <FiHome size={20} color="#e53935" />
          <h3>Companhias</h3>
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
              restaurantName="Bom Gosto"
              date="10/12/2021"
            />
          </ScrollView>
        </ListContainer>
      )}
      {showCompanys && (
        <ListContainer>
          <ScrollView>
            <Link to="/mycompany/2">
              <Button>Santa Refeição</Button>
            </Link>
          </ScrollView>
        </ListContainer>
      )}
      <Footer />
    </Container>
  );
}
