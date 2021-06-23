import DetailsRestaurantWithBorder from '../../components/DetailsRestaurantWithBorder';
import { Footer, Header } from '../../components';
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
