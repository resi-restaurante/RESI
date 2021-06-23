import DatePicker from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import 'react-multi-date-picker/styles/colors/red.css';
import 'react-multi-date-picker/styles/layouts/mobile.css';
import { Link } from 'react-router-dom';
import ButtonTable from '../ButtonTable';
import SelectInput from '../SelectInput/Select';

import {
  Container,
  ContentRestaurant,
  Title,
  Description,
  Price,
  DatePickerCalendar,
  DatePickerTime,
  Tables,
} from './styles';

function DetailsRestaurantWithBorder() {
  return (
    <Container>
      <ContentRestaurant>
        <img src="images/restaurante.jpg" alt="" />
        <Title>Restaurante Santa Fé</Title>
        <Description>
          O Restaurante Santa fé é uma empresa do ramo alimentício fundada em
          1991, com bases familiares sólidas passadas por 03 gerações da
          familia, trabalhando com inovações em nossos serviços e sempre à
          disposição para sugestões de melhorias, em busca da satisfação dos
          nossos clientes.
        </Description>
        <Price>R$39,90</Price>

        {/* <Photos>
          <img src="images/restaurante.jpg" alt="" />
          <img src="images/restaurante.jpg" alt="" />
        </Photos> */}
        <Tables>
          <h1>Faça já sua Reserva !!</h1>
          <h2>Escolha o dia:</h2>
          <DatePickerCalendar>
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
          </DatePickerCalendar>
          <h2>Quantidade de pessoas</h2>
          <SelectInput />
          <h2>Escolha sua mesa</h2>
          <section>
            <ButtonTable numberTable="1" />
            <ButtonTable numberTable="2" />
            <ButtonTable numberTable="3" />
            <ButtonTable numberTable="4" />
            <ButtonTable numberTable="5" />
            <ButtonTable numberTable="6" />
            <ButtonTable numberTable="7" />
            <ButtonTable numberTable="8" />
            <ButtonTable numberTable="9" />
          </section>
          <DatePickerTime>
            <h3>Horário de entrada:</h3>
            <DatePicker
              disableDayPicker
              inputClass="custom-input"
              format="HH:mm"
              plugins={[<TimePicker hideSeconds />]}
            />
            <h3>Horário de saida:</h3>
            <DatePicker
              disableDayPicker
              inputClass="custom-input"
              format="HH:mm"
              plugins={[<TimePicker hideSeconds />]}
            />
          </DatePickerTime>
          <Link to="/confirmed">
            <button className="reserv" type="button">
              Reservar
            </button>
          </Link>
        </Tables>
      </ContentRestaurant>
    </Container>
  );
}

export default DetailsRestaurantWithBorder;
