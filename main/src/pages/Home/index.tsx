import { Header } from '../../components/Header';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <h1>Pagina Inicial</h1>
      <img src="images/mesa.png" alt="" />
    </Container>
  );
}

export default Home;
