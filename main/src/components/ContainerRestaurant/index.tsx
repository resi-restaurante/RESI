import {
  Container,
  RestaurantTitleContainer,
  FoodPlate,
  ContentContainer,
} from './styles';

interface PropsRestaurantList {
  restaurantName: string;
  reservePrice: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function ContainerRestaurant({
  restaurantName,
  reservePrice,
}: PropsRestaurantList) {
  return (
    <Container>
      <img src="images/restaurante.jpg" alt="" />
      <ContentContainer>
        <RestaurantTitleContainer>
          <h1>{restaurantName}</h1>
          <p>
            O restaurante santa fé prioriza a divizão de cores e cartas para
            que...
          </p>
        </RestaurantTitleContainer>
        <footer>
          <p>Mais informações...</p>
          <FoodPlate>{`R$${reservePrice}`}</FoodPlate>
        </footer>
      </ContentContainer>
    </Container>
  );
}

export default ContainerRestaurant;
