import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { ContainerRestaurant, Footer, Navbar } from '../../components';
import { Container, HeaderContainer, City, Input, Button } from './styles';
// import api from '../../services/api';
// eslint-disable-next-line import/extensions

import { supabase } from '../../supabase';

interface RestaurantData {
  restaurante_id: string;
  nome: string;
  descricao: string;
  endereco: string;
  cidade: string;
  estado: string;
  telefone: number;
  email: string;
  documento: number;
}
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function fecthDados() {
    const { data } = await supabase.from('restaurants').select('*');

    if (data) {
      setRestaurante(data);
    }
  }
  const history = useHistory();
  const handleGoToRestaurant = (data: RestaurantData) => {
    history.push(`/detailsrestaurants/${data.restaurante_id}`);
  };

  return (
    <Container>
      <Navbar itemVisible />
      <HeaderContainer>
        <City>Aparecida, SP</City>
        <Input placeholder="Digite o nome do restaurante" icon={FiSearch} />
        <span>
          <h4>{restaurante?.length} restaurantes encontrados</h4>
          <div />
        </span>
      </HeaderContainer>

      {restaurante?.map((restaurant: RestaurantData) => (
        <Button onClick={() => handleGoToRestaurant(restaurant)}>
          <ContainerRestaurant
            restaurantName={restaurant.nome}
            reservePrice="39.90"
            restaurantDescription={restaurant.descricao}
          />
        </Button>
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
