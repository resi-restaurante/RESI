/* eslint-disable react/no-children-prop */
/* eslint-disable jsx-a11y/alt-text */
import DatePicker from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import 'react-multi-date-picker/styles/colors/red.css';
import 'react-multi-date-picker/styles/layouts/mobile.css';
import { Link } from 'react-router-dom';

import {
  Container,
  ContentRestaurant,
  DatePickerCalendar,
  DatePickerTime,
  Tables,
} from './styles';

import { SelectInput } from '..';

// install Swiper modules

function DetalhesRestaurante() {
  return (
    <Container>
      <ContentRestaurant>
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
          <DatePickerTime>
            <h3>Horário de entrada:</h3>
            <DatePicker
              disableDayPicker
              inputClass="custom-input"
              format="HH:mm"
              plugins={[<TimePicker hideSeconds />]}
            />
          </DatePickerTime>
          <h2>Selecione a quantidade de pessoas</h2>
          <SelectInput />
          <h2>Escolha sua mesa</h2>
          <div className="tableChairs">
            <p>Mesas Vazias:</p>
            <span className="empty-table" />
            <p>Mesas Cheias:</p>
            <span className="full-table" />
          </div>

          <Link to="/">
            <button className="reserv" type="button">
              Reservar
            </button>
          </Link>
        </Tables>
      </ContentRestaurant>
    </Container>
  );
}

export default DetalhesRestaurante;
