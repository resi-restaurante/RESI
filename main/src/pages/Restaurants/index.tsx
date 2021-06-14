import { Link } from 'react-router-dom';
import ContainerRestaurant from '../../components/ContainerRestaurant';

import { Footer } from '../../components';
import { Header } from '../../components/Header';
import { Container } from './styles';

function Restaurants() {
  return (
    <Container>
      <Header />
      <h1>Aparecida, SP</h1>
      <Link to="/detailsrestaurants">
        <ContainerRestaurant
          restaurantName="Restaurante Santa Fé"
          reservePrice="39.90"
        />
      </Link>
      <ContainerRestaurant
        restaurantName="Restaurante da Maria"
        reservePrice="39.90"
      />
      <ContainerRestaurant
        restaurantName="Buteco do Valdir"
        reservePrice="39.90"
      />
      <ContainerRestaurant
        restaurantName="Restaurante Gran Fino"
        reservePrice="39.90"
      />
      <ContainerRestaurant
        restaurantName="Restaurante do Palito"
        reservePrice="39.90"
      />

      <Footer positionType="fixed" />
    </Container>
  );
}

export default Restaurants;
