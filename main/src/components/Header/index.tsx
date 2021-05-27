import { Link } from 'react-router-dom';

import { ButtonLogin, Container, ContainerLabel } from './styles';

export function Header() {
  return (
    <Container>
      <div>
        <Link to="/">
          <img src="images/logo.svg" alt="" />
        </Link>
      </div>
      <ContainerLabel>
        <Link to="/restaurants">
          <p>Estabelecimentos</p>
        </Link>
        <Link to="/contact">
          <p>Contato</p>
        </Link>
        <Link to="/">
          <p>Como Funciona ?</p>
        </Link>
        <Link to="/login">
          <ButtonLogin>Login</ButtonLogin>
        </Link>
      </ContainerLabel>
    </Container>
  );
}
