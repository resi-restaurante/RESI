/* eslint-disable @typescript-eslint/no-use-before-define */
import { FiUser } from 'react-icons/fi';
import { IoRestaurantOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import {
  ButtonLogin,
  Container,
  ContainerLabel,
  NavigationButton,
  UserInformationContainer,
} from './styles';

import { supabase } from '../../supabase';

interface NavbarProps {
  itemVisible: boolean;
}

export const Navbar = ({ itemVisible }: NavbarProps) => {
  const [username, setUsername] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState('');

  const session = supabase.auth.session();

  useEffect(() => {
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
      console.log(avatar_url);
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
          <IoRestaurantOutline size={18} color="#fff" />
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

            <h4>Olá,{username}</h4>

            {/* <img
              // src="https://kfdvcuepxkjunmtljrlo.supabase.in/storage/v1/object/sign/avatars/default.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2RlZmF1bHQucG5nIiwiaWF0IjoxNjM5MDk3NTY0LCJleHAiOjE5NTQ0NTc1NjR9.LUI30Y3KYS1UxiKj1NfQ4JEIR41OyOH6xfFocZgeK-w"
              src={`${
                process.env.REACT_APP_SUPABASE_URL
              }/storage/v1/object/sign/avatars/${avatar_url.toString()}?token=${
                process.env.REACT_APP_SUPABASE_STORAGE
              }`}
              alt="Avatar"
            /> */}
          </UserInformationContainer>
        )}
      </ContainerLabel>
    </Container>
  );
};
