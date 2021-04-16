import { ButtonLogin, Container } from './styles';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Container>

      <Link to="/">
        <h1>RESI</h1>
      </Link>

      <Link to="/login">
        <ButtonLogin>Login</ButtonLogin>
      </Link>

    </Container>
  );
};

export default Header;
