/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
import {
  Container,
  RestaurantTitleContainer,
  FoodPlate,
  ContentContainer,
} from './styles';

interface PropsRestaurantList {
  restaurantName: string;
  reservePrice: string;
  restaurantDescription: string;
}

export const ContainerRestaurant = ({
  restaurantName,
  reservePrice,
  restaurantDescription,
}: PropsRestaurantList) => {
  return (
    <Container>
      <img src="images/restaurante.jpg" alt="" />
      <ContentContainer>
        <RestaurantTitleContainer>
          <h1>{restaurantName} </h1>
          <p>{restaurantDescription}</p>
        </RestaurantTitleContainer>
        <footer>
          <p>Mais informações...</p>
          <FoodPlate>{`R$${reservePrice}`}</FoodPlate>
        </footer>
      </ContentContainer>
    </Container>
  );
};
