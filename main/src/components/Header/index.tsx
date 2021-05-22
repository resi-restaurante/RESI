import { Link } from 'react-router-dom';
import { Nav, ButtonLogin, Container } from './styles';

export function Header() {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <img src="images/logo.svg" alt="" />
        </Link>

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
      </Nav>
    </Container>
  );
}
