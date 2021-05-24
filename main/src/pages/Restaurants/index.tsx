import ContainerRestaurant from '../../components/ContainerRestaurant';
import Footer from '../../components/Footer';
import { Header } from '../../components/Header';
import { Container } from './styles';

function Restaurants() {
  return (
    <Container>
      <Header />
      <h1>Aparecida, SP</h1>
      <ContainerRestaurant />
      <Footer />
    </Container>
  );
}

export default Restaurants;
