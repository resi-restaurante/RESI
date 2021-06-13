import {
  ButtonLogin,
  Container,
  ContainerLabel,
  NavigationButton,
} from './styles';

interface NavbarProps {
  itemVisible: boolean;
}

export const Navbar = ({ itemVisible }: NavbarProps) => {
  return (
    <Container>
      <div>
        <NavigationButton to="/">
          <img src="images/logo.svg" alt="Logo resi" />
        </NavigationButton>
      </div>
      <ContainerLabel>
        {itemVisible && (
          <NavigationButton to="/login">
            <ButtonLogin>Entrar</ButtonLogin>
          </NavigationButton>
        )}
      </ContainerLabel>
    </Container>
  );
};
