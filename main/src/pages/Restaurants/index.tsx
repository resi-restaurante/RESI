import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { Footer, Navbar, ContainerRestaurant } from '../../components';
import { Container, HeaderContainer, City, Input, Button } from './styles';
import api from '../../services/api';
// eslint-disable-next-line import/extensions
import RestaurantData from '../../hooks/dtos/Restaurant';

function Restaurants() {
  const [restaurants, setRestaurants] = useState([{} as RestaurantData]);
  const history = useHistory();

  useEffect(() => {
    api.get('establishments?city=Aparecida&state=SP').then((response: any) => {
      setRestaurants(response.data);
    });
  }, []);

  const handleGoToRestaurant = (data: RestaurantData) => {
    history.push('/detailsrestaurants', data);
  };

  return (
    <Container>
      <Navbar itemVisible />
      <HeaderContainer>
        <City>Aparecida, SP</City>
        <Input placeholder="Digite o nome do restaurante" icon={FiSearch} />
        <span>
          <h4>{restaurants.length} restaurantes encontrados</h4>
          <div />
        </span>
      </HeaderContainer>
      {restaurants.map((restaurant: RestaurantData) => (
        <Button onClick={() => handleGoToRestaurant(restaurant)}>
          <ContainerRestaurant
            restaurantName={restaurant.nome}
            reservePrice="39.90"
          />
        </Button>
      ))}
      <Footer />
    </Container>
  );
}

export default Restaurants;
