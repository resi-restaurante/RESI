/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useEffect, useState } from 'react';
import { FiMail, FiPhoneCall, FiExternalLink } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { Footer, Header, Button } from '../../components';
import {
  Container,
  ContentRestaurant,
  Title,
  Adress,
  Description,
  RestaurantGrid,
  InformationContainer,
} from './styles';
import DetalhesRestaurante from '../../components/DetalhesRestaurante';

// import RestaurantData from '../../dtos/Restaurant';

function DetailRestaurant() {
  // const [restaurantInfo, setRestaurantInfo] = useState({} as RestaurantData);

  // useEffect(() => {
  //   setRestaurantInfo(props.location.state);
  // }, []);

  return (
    <Container>
      <Header />
      <RestaurantGrid>
        <ContentRestaurant>
          <img src="images/restaurante.jpg" alt="" />

          <div>
            <Title>{/* {restaurantInfo.nome} */} Teste</Title>
            <Adress>
              <p>
                {/* {restaurantInfo.endereco}, {restaurantInfo.cidade} -{' '}
                {restaurantInfo.estado} */}
              </p>
              <a
                href="https://www.google.com/maps/search/restaurant+augusto+aparecida+sp"
                rel="noreferrer"
                target="_blank"
              >
                <FiExternalLink size={15} />
              </a>
            </Adress>
            <Description>{/* {restaurantInfo.descricao} */}</Description>
          </div>
        </ContentRestaurant>
        <InformationContainer>
          <div>
            <FiPhoneCall size={25} />
            <p>{/* {restaurantInfo.telefone} */}</p>
          </div>
          <div>
            <FiMail size={25} />
            <p>{/* {restaurantInfo.email} */}</p>
          </div>
          <div>
            <AiOutlineWhatsApp size={25} />
            <p>{/* {restaurantInfo.telefone} */}</p>
          </div>
        </InformationContainer>
        <Button>Reservar Agora !</Button>
      </RestaurantGrid>
      <DetalhesRestaurante />
      <Footer />
    </Container>
  );
}

export default DetailRestaurant;
