import { Link } from 'react-router-dom';
import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <Link to="/contact">
        <img src="images/logo.svg" alt="" />
      </Link>
    </Container>
  );
}

export default Footer;
