import DetailsRestaurantWithBorder from '../../components/DetailsRestaurantWithBorder';
import Footer from '../../components/Footer';
import { Header } from '../../components/Header';
import { Container } from './styles';

function DetailRestaurant() {
  return (
    <Container>
      <Header />
      <DetailsRestaurantWithBorder />
      <h2>Cardapio do Restaurante</h2>
      <Footer />
    </Container>
  );
}

export default DetailRestaurant;
