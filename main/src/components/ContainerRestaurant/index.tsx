import { Container, RestaurantTitle, FoodPlate } from './styles';

function ContainerRestaurant() {
  return (
    <Container>
      <img src="images/restaurante.jpg" alt="" />
      <RestaurantTitle>Restaurante Santa Fé</RestaurantTitle>
      <p>Mais informações...</p>
      <FoodPlate>R$39,00</FoodPlate>
    </Container>
  );
}

export default ContainerRestaurant;
