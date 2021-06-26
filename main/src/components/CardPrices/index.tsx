import { MdAssignmentTurnedIn } from 'react-icons/md';
import {
  Benefits,
  Container,
  Options,
  Plan,
  SectionTitle,
  Subscription,
} from './styles';

function CardPrices() {
  return (
    <Container>
      <SectionTitle>
        <h2>O Melhor Plano</h2>
        <p>
          Assine já seu plano e aumente o faturamento de seu restaurante com
          nosso sistema de reservas{' '}
        </p>
      </SectionTitle>
      <Options>
        <Plan>
          <Subscription>
            <h2>Preço</h2>
            <p>R$30,00 Ao Mês</p>
          </Subscription>
          <MdAssignmentTurnedIn size={60} />
          <Benefits>
            <li>Acesso na lista premium de seu restaurante</li>
            <li>Dinheiro na sua conta</li>
            <li>Reservas de forma simples e prática</li>
          </Benefits>
        </Plan>
      </Options>
    </Container>
  );
}

export default CardPrices;
