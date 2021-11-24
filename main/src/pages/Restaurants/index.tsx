import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { ContainerRestaurant, Footer, Navbar } from '../../components';
import { Container, HeaderContainer, City, Input } from './styles';
// import api from '../../services/api';
// eslint-disable-next-line import/extensions

import { supabase } from '../../supabase';
import RestaurantData from '../../hooks/dtos/Restaurant';

function Restaurants() {
  // const [restaurants, setRestaurants] = useState([{} as RestaurantData]);

  // useEffect(() => {
  //   api.get('establishments?city=Aparecida&state=SP').then((response: any) => {
  //     setRestaurants(response.data);
  //   });
  // }, []);

  const [restaurante, setRestaurante] = useState<any[] | null>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    fecthDados();
  }, []);

  async function fecthDados() {
    const { data } = await supabase.from('restaurants').select('*');

    if (data) {
      setRestaurante(data);
    }
  }
  // const history = useHistory();
  // const handleGoToRestaurant = (data: RestaurantData) => {
  //   history.push(`/detailsrestaurants/${data.restaurante_id}`);
  // };

  return (
    <Container>
      <Navbar itemVisible />
      <HeaderContainer>
        <City>Guaratinguetá, SP</City>
        <Input placeholder="Digite o nome do restaurante" icon={FiSearch} />
        <span>
          <h4>{restaurante?.length} restaurantes encontrados</h4>
          <div />
        </span>
      </HeaderContainer>

      {restaurante?.map((restaurant: RestaurantData) => (
        <Link to={`/detailsrestaurants/${restaurant.restaurante_id}`}>
          <ContainerRestaurant
            key={restaurant.restaurante_id}
            restaurantName={restaurant.nome}
            reservePrice={restaurant.preco}
            restaurantDescription={restaurant.descricao}
          />
        </Link>
      ))}
      {/* {restaurants.map((restaurant: RestaurantData) => (
        <Button onClick={() => handleGoToRestaurant(restaurant)}>
          <ContainerRestaurant
            restaurantName={restaurant.nome}
            reservePrice="39.90"
          />
        </Button>
      ))} */}
      <Footer />
    </Container>
  );
}

export default Restaurants;
