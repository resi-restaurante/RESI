import { FiTrash, FiEye } from 'react-icons/fi';
import {
  Container,
  RestaurantTitleContainer,
  ContentContainer,
  IconMenu,
} from './styles';

interface PropsRestaurantList {
  id: string;
  restaurantName: string;
  date: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const CardListAppointment = ({
  id,
  restaurantName,
  date,
}: PropsRestaurantList) => {
  return (
    <Container>
      <ContentContainer>
        <RestaurantTitleContainer>
          <h1>{id}</h1>
          <p>{restaurantName}</p>
          <h1>{date}</h1>
        </RestaurantTitleContainer>
      </ContentContainer>
      <IconMenu>
        <FiEye size={20} />
        <FiTrash size={20} />
      </IconMenu>
    </Container>
  );
};
