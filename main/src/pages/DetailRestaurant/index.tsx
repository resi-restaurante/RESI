/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useRef, useState } from 'react';
import { FiMail, FiPhoneCall, FiExternalLink } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BiFoodMenu } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import * as Yup from 'yup';
import { createBrowserHistory } from 'history';
import {
  Footer,
  Button,
  Navbar,
  SelectInput,
  Input,
  InputWithOutForm,
} from '../../components';
import {
  Container,
  ContentRestaurant,
  Title,
  Adress,
  Description,
  RestaurantGrid,
  InformationContainer,
  ContainerCarrossel,
  Table,
  DatePickerCalendar,
  DatePickerTime,
  TableSection,
} from './styles';

import { supabase } from '../../supabase';
import RestaurantData from '../../hooks/dtos/Restaurant';
import TableItem from '../../components/TableItem';
import { getValidationErrors } from '../../utils';
import Radio from '../../components/Radio';

interface SignUpFormData {
  dateReservation: string;
  time: string;
  tableNumber: number;
}
interface TableData {
  qtd_cadeiras: number;
  mesa_id: number;
  descricao_mesa: string;
}
interface BookingData {
  agendamento_id: string;
  status: boolean;
}
function DetailRestaurant() {
  const [data_reserva, setData_reserva] = useState('');
  const [horario_entrada, setHorario_entrada] = useState<string>('');
  const [mesaId, setMesaId] = useState<number | any>();

  const history = createBrowserHistory();

  const handleHistory = () => {
    history.push('/payment');
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  const formRef = useRef<FormHandles>(null);

  const [restaurante, setRestaurante] = useState<any[] | null>();
  const [mesa, setMesa] = useState<any[]>();

  useEffect(() => {
    Tables();
  }, []);
  useEffect(() => {
    getBooking();
  }, []);

  const { id }: { id?: number | string | null } = useParams();

  useEffect(() => {
    async function getRestaurant() {
      const { data } = await supabase
        .from('restaurants')
        .select('*')
        .in('restaurante_id', [id]);

      if (data) {
        setRestaurante(data);
      }
    }
    getRestaurant();
  });

  async function Tables() {
    const { data } = await supabase
      .from('mesas')
      .select('*')
      .in('restaurante_id', [id]);
    // console.log(data);
    if (data) {
      setMesa(data);
    }
  }
  async function RegisterBooking() {
    try {
      const VerificationCode = Math.random().toString(36).substring(7);
      const status_booking = false;
      const user = supabase.auth.user();
      const { data, error, status } = await supabase
        .from('agendamento')
        .insert([
          {
            profiles_id: user?.id,
            codigo_verificacao: VerificationCode,
            status: status_booking,
            data_reserva,
            horario_entrada,
            restaurante_id: id,
            mesaId,
          },
        ])
        .single();
      if (error && status !== 406) {
        console.log(error);
      }
      if (data) {
        setData_reserva(data.data_reserva);
        setHorario_entrada(data.horario_entrada);
        setMesaId(data.mesaId);
      }
    } catch (error) {
      alert(error);
    }
  }
  const [booking, setBooking] = useState<any[] | null>();
  // const [status, setStatus] = useState<boolean | any[]>(false);

  async function getBooking() {
    const { data } = await supabase
      .from('agendamento')
      .select(`agendamento_id,status`)
      .in('agendamento_id', [3]);

    if (data) {
      setBooking(data);
    }
  }
  const status = booking?.map((bookingData: BookingData) => bookingData.status);

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    handleHistory();
    try {
      console.log(data);
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        dateReservation: Yup.date().required('Data obrigatória'),
        time: Yup.string().required('Horário obrigatório'),
        tableNumber: Yup.string().required('Escolha uma mesa'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  SwiperCore.use([Pagination, Navigation]);
  return (
    <Container>
      <Navbar itemVisible />
      {restaurante?.map((restaurant: RestaurantData) => (
        <>
          <RestaurantGrid key={restaurant.restaurante_id}>
            <Title>{restaurant.nome}</Title>
            <ContainerCarrossel>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop
                pagination={{
                  clickable: true,
                }}
                navigation
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://vinicolaaraucaria.com.br/wp-content/uploads/2020/06/interna_restaurante-1-1400x700.jpg "
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://pesweb.azureedge.net/spimg/restaurantphotos/5-star-hotel-porto-restaurant-details-new.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=70&w=775&h=530&mode=crop"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://backoffice.vilavitaparc.com/sites/default/files/styles/heroimg/public/2021-01/atlantico-restaurant.jpg?itok=y9QvugOZ"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://backoffice.vilavitaparc.com/sites/default/files/styles/heroimg/public/restaurants/Bela%20Vita-web.jpg?itok=UsBgiPcA"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </ContainerCarrossel>
            <ContentRestaurant>
              <div>
                <Adress>
                  <p>
                    <FiMapPin size={16} color="#e53935" />
                    <strong> Endereço: </strong>
                    {restaurant.rua_avenida},{restaurant.numero_endereco}{' '}
                    {restaurant.cidade}- {restaurant.estado}
                  </p>

                  <Description>
                    <BiFoodMenu size={16} color="#e53935" />
                    {restaurant.descricao}
                  </Description>
                </Adress>
              </div>
            </ContentRestaurant>
            <InformationContainer>
              <div>
                <strong>
                  Horário de Abertura: {restaurant.horario_abertura}:00 <br />
                  Horário de Fechamento: {restaurant.horario_fechamento}:00
                </strong>
              </div>
              <div>
                <AiOutlineWhatsApp size={25} />
                <p>{restaurant.telefone}</p>
              </div>
            </InformationContainer>
          </RestaurantGrid>
        </>
      ))}

      <div>
        <Table>
          <h1>Faça já sua Reserva !!</h1>
          <h2>Escolha o dia:</h2>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <DatePickerCalendar>
              <InputWithOutForm
                name="dat_nascimento"
                id="dat_nascimento"
                type="date"
                placeholder="Data de nascimento"
                value={data_reserva}
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                onChange={e => setData_reserva(e.target.value)}
              />
            </DatePickerCalendar>
            <DatePickerTime>
              <h3>Horário de entrada:</h3>
              <InputWithOutForm
                name="horario_entrada"
                id="horario_entrada"
                type="time"
                placeholder="horário de entrada"
                value={horario_entrada}
                onChange={e => setHorario_entrada(e.target.value)}
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
            <TableSection>
              {mesa?.map((table: TableData) => (
                <TableItem
                  key={table.mesa_id}
                  chairs={table.qtd_cadeiras}
                  numberTable={table.mesa_id}
                  description={table.descricao_mesa}
                  valueProp={table.mesa_id.toString()}
                  checkedProp={table.mesa_id.toString()}
                  onChange={e => setMesaId(e.target.value)}
                  selectedRadio={mesaId}
                  classNameTable={false ? 'full-table' : 'empty-table'}
                />
              ))}
            </TableSection>
            <button
              className="reserv"
              type="submit"
              onClick={() => RegisterBooking()}
            >
              Reservar
            </button>
          </Form>
        </Table>
      </div>

      <Footer />
    </Container>
  );
}

export default DetailRestaurant;
