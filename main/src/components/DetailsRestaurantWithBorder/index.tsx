import DatePicker from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import 'react-multi-date-picker/styles/colors/red.css';
import 'react-multi-date-picker/styles/layouts/mobile.css';
import ButtonTable from '../ButtonTable';

import {
  Container,
  ContentRestaurant,
  Description,
  Price,
  Tables,
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
        <p>Por mês</p>

        {/* <Photos>
          <img src="images/restaurante.jpg" alt="" />
          <img src="images/restaurante.jpg" alt="" />
        </Photos> */}
        <Tables>
          <h2>Faça já sua Reserva !!</h2>
          <h2>Escolha o dia</h2>
          <DatePicker
            type="input-icon"
            format="DD/MM/YYYY"
            className="red rmdp-mobile"
            inputClass="custom-input"
            weekDays={['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
          <h2>Escolha sua mesa</h2>
          <section>
            <ButtonTable />
            <ButtonTable />
            <ButtonTable />
            <ButtonTable />
            <ButtonTable />
          </section>
          <h2>Horário de entrada</h2>
          <DatePicker
            disableDayPicker
            inputClass="custom-input"
            format="HH:mm"
            plugins={[<TimePicker hideSeconds />]}
          />
          <h2>Horário de saida</h2>
          <DatePicker
            disableDayPicker
            inputClass="custom-input"
            format="HH:mm"
            plugins={[<TimePicker hideSeconds />]}
          />
        </Tables>
      </ContentRestaurant>
    </Container>
  );
}

export default DetailsRestaurantWithBorder;
