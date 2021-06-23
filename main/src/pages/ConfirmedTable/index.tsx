import { BsCheckCircle } from 'react-icons/bs';
import { Button, Footer, Header } from '../../components';
import { Code, Container, ContainerConfirmed } from './styles';

function ConfirmedTable() {
  return (
    <Container>
      <Header />
      <ContainerConfirmed>
        <BsCheckCircle size={50} color="green" />
        <h1>Sucesso !!</h1>

        <p>Parabéns! Você reservou sua mesa.</p>
        {/* <p>Dia: 26/06/2021</p>
        <p>Horário: 19:00</p> */}
        <h2>Código</h2>
        <Code>3YZ6</Code>
        <Button>Voltar para a home</Button>
      </ContainerConfirmed>
      <Footer />
    </Container>
  );
}

export default ConfirmedTable;
