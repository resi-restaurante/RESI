/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FiMail, FiPhoneCall, FiExternalLink } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BiFoodMenu } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import * as Yup from 'yup';
import { Footer, Button, Navbar, SelectInput, Input } from '../../components';
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

interface SignUpFormData {
  dateReservation: string;
  time: string;
  tableNumber: number;
}
interface TableData {
  qtd_cadeiras: number;
  mesa_id: number;
  descricao: string;
}
function DetailRestaurant() {
  // const [restaurantInfo, setRestaurantInfo] = useState({} as RestaurantData);

  // useEffect(() => {
  //   setRestaurantInfo(props.location.state);
  // }, []);

  // const [date, setDate] = useState<DateObject | DateObject[]>(new DateObject());
  const [date, setDate] = useState('');
  const [horario_entrada, setHorario_entrada] = useState<string>('');
  const [mesaId, setMesaId] = useState<number | any>();

  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const [restaurante, setRestaurante] = useState<any[] | null>();
  const [mesa, setMesa] = useState<any[]>();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    Dados();
  }, []);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    Tables();
  }, []);

  const { id }: { id?: number | string | null } = useParams();
  async function Dados() {
    const { data } = await supabase
      .from('restaurants')
      .select('*')
      .in('restaurante_id', [id]);

    if (data) {
      setRestaurante(data);
    }
  }
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
  async function RegisterDatasUsers({
    date,
    horario_entrada,
    mesaId,
  }: {
    date: string;
    horario_entrada: string;
    mesaId: number | any;
  }) {
    try {
      const user = supabase.auth.user();

      const registers = {
        id: user?.id,
        date,
        horario_entrada,
        mesaId,
      };

      const { error } = await supabase.from('agendamento').upsert(registers, {
        returning: 'minimal', // Don't return the value after inserting
      });
      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error);
    }
  }
  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    // history.push('/payament');
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
      <Navbar itemVisible={false} />
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
                    {restaurant.rua_avenida}, {restaurant.cidade}-{' '}
                    {restaurant.estado}
                  </p>
                  <a
                    href="https://www.google.com/maps/search/restaurant+augusto+aparecida+sp"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FiExternalLink size={15} />
                  </a>

                  <Description>
                    <BiFoodMenu size={16} color="#e53935" />
                    {restaurant.descricao}
                  </Description>
                </Adress>
              </div>
            </ContentRestaurant>
            <InformationContainer>
              <div>
                <FiMail size={25} />
                <p>{restaurant.email}</p>
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
              <DatePicker
                value={date}
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
              <Input
                name="dat_nascimento"
                id="dat_nascimento"
                type="date"
                placeholder="Data de nascimento"
                value={date}
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                onChange={e => setDate(e.target.value)}
              />
            </div>

            <TableSection>
              {mesa?.map((table: TableData) => (
                <>
                  <TableItem
                    key={table.mesa_id}
                    chairs={table.qtd_cadeiras}
                    numberTable={table.mesa_id}
                    description={table.descricao}
                  />
                </>
              ))}
            </TableSection>

            <button
              className="reserv"
              type="submit"
              onClick={() =>
                RegisterDatasUsers({
                  date,
                  horario_entrada,
                  mesaId,
                })
              }
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
