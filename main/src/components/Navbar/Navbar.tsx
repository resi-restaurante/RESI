import { FiUser } from 'react-icons/fi';
import {
  ButtonLogin,
  Container,
  ContainerLabel,
  NavigationButton,
  UserInformationContainer,
} from './styles';

import { useAuth } from '../../hooks/AuthContext';

interface NavbarProps {
  itemVisible: boolean;
}

export const Navbar = ({ itemVisible }: NavbarProps) => {
  const { user } = useAuth();
  return (
    <Container>
      <div>
        <NavigationButton to="/">
          <img src="images/logo.svg" alt="Logo resi" />
        </NavigationButton>
      </div>
      <ContainerLabel>
        {itemVisible && !user && (
          <NavigationButton to="/login">
            <ButtonLogin>Entrar</ButtonLogin>
          </NavigationButton>
        )}
        {user && (
          <UserInformationContainer to="/profile">
            <FiUser />
            <h4>Olá, </h4>
            <h4 id="userName">{user.nome}</h4>
          </UserInformationContainer>
        )}
      </ContainerLabel>
    </Container>
  );
};
