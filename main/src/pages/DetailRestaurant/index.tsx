import { useEffect, useState } from 'react';
import DetailsRestaurantWithBorder from '../../components/DetailsRestaurantWithBorder';
import { Footer, Header } from '../../components';
import { Container } from './styles';
import RestaurantData from '../../dtos/Restaurant';

function DetailRestaurant(props: any) {
  const [restaurantInfo, setRestaurantInfo] = useState({} as RestaurantData);

  useEffect(() => {
    setRestaurantInfo(props.location.state);
  }, []);

  return (
    <Container>
      <Header />

      <DetailsRestaurantWithBorder
        name={restaurantInfo.nome}
        description={restaurantInfo.descricao}
      />

      <Footer />
    </Container>
  );
}

export default DetailRestaurant;
