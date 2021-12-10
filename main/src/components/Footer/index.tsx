/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-irregular-whitespace */
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import {
  Column,
  Container,
  ContentTop,
  Description,
  Icons,
  Links,
  Row,
  Wrapper,
} from './styles';

function Footer() {
  return (
    <Container>
      <ContentTop>
        <Link to="/contact">
          ​ <img src="images/logo.svg" alt="" />​
        </Link>
        <Icons>
          <FaFacebook size={35} color="#fff" />
          <FaInstagram size={35} color="#fff" />
          <FaTwitter size={35} color="#fff" />
          <FaLinkedin size={35} color="#fff" />
          <FaYoutube size={35} color="#fff" />
        </Icons>
      </ContentTop>
      <Wrapper>
        <Row>
          <Column>
            <h4>RESI</h4>
            <Links>Home</Links>
            <Link to="/contact">
              <Links>Contato</Links>
            </Link>
            <Links href="#">Sobre</Links>
            <Links href="#">Como Funciona</Links>
          </Column>

          <Column>
            <h4>Ajuda</h4>
            <Links href="#">FAQ</Links>
            <Links href="#">Pagamentos</Links>
            <Links href="#">Preços</Links>
          </Column>
          <Column>
            <h4>Extras</h4>
            <Links href="#">Privacidade</Links>
            <Links href="#">Termos de Uso</Links>
            <Links href="#">Direitos Autorais</Links>
            <Links href="#">Marca</Links>
          </Column>
        </Row>
      </Wrapper>
      <Description> © RESI 2021 | Todos os direitos reservados</Description>
    </Container>
  );
}

export default Footer;
