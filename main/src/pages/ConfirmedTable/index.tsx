/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { Button, Footer, Navbar } from '../../components';
import { supabase } from '../../supabase';
import { Code, Container, ContainerConfirmed } from './styles';

interface BookingData {
  agendamento_id: string;
  data_reserva: string;
  horario_entrada: string;
  codigo_verificacao: string;
}
function ConfirmedTable() {
  const [codeBooking, setCodeBooking] = useState<any[] | null>();

  useEffect(() => {
    getBooking();
  }, []);
  async function getBooking() {
    const { data } = await supabase
      .from('agendamento')
      .select(
        `agendamento_id, data_reserva, horario_entrada,codigo_verificacao`,
      )
      .in('agendamento_id', [1]);

    if (data) {
      setCodeBooking(data);
    }
  }
  return (
    <Container>
      <Navbar itemVisible />
      <ContainerConfirmed>
        <BsCheckCircle size={50} color="green" />
        <h1>Sucesso !!</h1>
        <p>Parabéns! Você reservou sua mesa.</p>

        {codeBooking?.map((booking: BookingData) => (
          <div key={booking.agendamento_id}>
            <h2>Código </h2>
            <Code>{booking.codigo_verificacao}</Code>
            <p>Dia: {booking.data_reserva}</p>
            <p>Horário: {booking.horario_entrada}</p>
          </div>
        ))}

        <Button>Voltar para a home</Button>
      </ContainerConfirmed>
      <Footer />
    </Container>
  );
}

export default ConfirmedTable;
