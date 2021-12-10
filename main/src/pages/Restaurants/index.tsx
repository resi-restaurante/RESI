/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { ContainerRestaurant, Footer, Navbar } from '../../components';
import { Container, HeaderContainer, City, Input } from './styles';

import { supabase } from '../../supabase';
import RestaurantData from '../../hooks/dtos/Restaurant';

function Restaurants() {
  const [restaurante, setRestaurante] = useState<any[] | null>();

  useEffect(() => {
    fecthDados();
  }, []);

  async function fecthDados() {
    const { data } = await supabase.from('restaurants').select('*');

    if (data) {
      setRestaurante(data);
    }
  }

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

      <Footer />
    </Container>
  );
}

export default Restaurants;
