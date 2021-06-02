import {
  Container,
  ContentRestaurant,
  Description,
  Price,
  Photos,
} from './styles';

function DetailsRestaurantWithBorder() {
  return (
    <Container>
      <ContentRestaurant>
        <img src="images/restaurante.jpg" alt="" />
        <h1>Restaurante Santa Fé</h1>
        <Description>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </Description>
        <Price>R$39,90</Price>
        <Photos>
          <img src="images/restaurante.jpg" alt="" />
          <img src="images/restaurante.jpg" alt="" />
        </Photos>
      </ContentRestaurant>
    </Container>
  );
}

export default DetailsRestaurantWithBorder;
