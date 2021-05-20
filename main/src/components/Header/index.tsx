import { Link } from 'react-router-dom';
import { ButtonLogin, Container } from './styles';

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src="images/logo.svg" alt="" />
      </Link>
      <Link to="/login">
        <ButtonLogin>Login</ButtonLogin>
      </Link>
      <Link to="/restaurants">
        <ButtonLogin>Estabelecimentos</ButtonLogin>
      </Link>
    </Container>
  );
}
