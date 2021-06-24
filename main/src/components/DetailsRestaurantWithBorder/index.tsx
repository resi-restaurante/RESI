import 'react-multi-date-picker/styles/colors/red.css';
import 'react-multi-date-picker/styles/layouts/mobile.css';

import {
  Container,
  ContentRestaurant,
  Title,
  Description,
  Price,
} from './styles';

interface RestaurantInfo {
  name: string;
  description: string;
}

function DetailsRestaurantWithBorder({ name, description }: RestaurantInfo) {
  return (
    <Container>
      <ContentRestaurant>
        <img src="images/restaurante.jpg" alt="" />
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Price>R$39,90</Price>
      </ContentRestaurant>
    </Container>
  );
}

export default DetailsRestaurantWithBorder;
