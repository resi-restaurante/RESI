import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import ContainerRestaurant from '../../components/ContainerRestaurant';
import { Footer, Navbar } from '../../components';
import { Container, HeaderContainer, City, Input } from './styles';

function Restaurants() {
  return (
    <Container>
      <Navbar itemVisible />
      <HeaderContainer>
        <City>Aparecida, SP</City>
        <Input placeholder="Digite o nome do restaurante" icon={FiSearch} />
        <span>
          <h4>5 restaurantes encontrados</h4>
          <div />
        </span>
      </HeaderContainer>
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

      <Footer />
    </Container>
  );
}

export default Restaurants;
