import DetailsRestaurantWithBorder from '../../components/DetailsRestaurantWithBorder';
import { Footer } from '../../components';
import { Header } from '../../components/Header';
import { Container } from './styles';

function DetailRestaurant() {
  return (
    <Container>
      <Header />

      <DetailsRestaurantWithBorder />

      <Footer />
    </Container>
  );
}

export default DetailRestaurant;
