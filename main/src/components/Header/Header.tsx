import { FiUser } from 'react-icons/fi';
import {
  ButtonLogin,
  Container,
  ContainerLabel,
  NavigationButton,
} from './styles';

export function Header() {
  return (
    <Container>
      <div>
        <NavigationButton to="/">
          <img src="images/logo.svg" alt="Logo resi" />
        </NavigationButton>
      </div>
      <ContainerLabel>
        <NavigationButton to="/login">
          <FiUser size={16} color="#fff" />
          <ButtonLogin>Entrar</ButtonLogin>
        </NavigationButton>
      </ContainerLabel>
    </Container>
  );
}