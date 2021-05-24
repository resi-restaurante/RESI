import { Container, RestaurantTitle, FoodPlate } from './styles';

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
      <RestaurantTitle>{restaurantName}</RestaurantTitle>
      <p>Mais informações...</p>
      <FoodPlate>{`R$${reservePrice}`}</FoodPlate>
    </Container>
  );
}

export default ContainerRestaurant;
