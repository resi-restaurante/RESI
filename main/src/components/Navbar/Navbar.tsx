import { FiMapPin, FiUser } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import {
  ButtonLogin,
  Container,
  ContainerLabel,
  NavigationButton,
  UserInformationContainer,
} from './styles';

// import { useAuth } from '../../hooks/AuthContext';

import { supabase } from '../../supabase';

interface NavbarProps {
  itemVisible: boolean;
}

export const Navbar = ({ itemVisible }: NavbarProps) => {
  const [username, setUsername] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState('');

  const session = supabase.auth.session();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    getProfileName();
  }, [session]);
  // função
  const user = supabase.auth.user();
  async function getProfileName() {
    const { data } = await supabase
      .from('profiles')
      .select(`username,avatar_url`)
      .eq('id', user?.id)
      .single();
    if (data) {
      setUsername(data.username);
      setAvatarUrl(data.avatar_url);
    }
  }
  return (
    <Container>
      <div>
        <NavigationButton to="/">
          <img src="images/logo.svg" alt="Logo resi" />
        </NavigationButton>
      </div>
      <ContainerLabel>
        <NavigationButton to="/restaurants">
          <FiMapPin size={16} color="#fff" />
          <ButtonLogin>Restaurantes</ButtonLogin>
        </NavigationButton>
        {itemVisible && !user && (
          <NavigationButton to="/login">
            <ButtonLogin>Entrar</ButtonLogin>
          </NavigationButton>
        )}
        {user && (
          <UserInformationContainer to="/profile">
            <FiUser />

            <h4>Olá, </h4>
            <h4 id="userName">{username}</h4>

            <img src={avatar_url} alt="Avatar" />
          </UserInformationContainer>
        )}
      </ContainerLabel>
    </Container>
  );
};
