import { useState, useRef } from 'react';
import { FiCreditCard, FiFileText, FiMail } from 'react-icons/fi';
// import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { Button, Input, Navbar } from '../../components';
import { Footer } from '../../components';
import {
  Container,
  ContentContainer,
  MenuContainer,
  CreditCardContainer,
} from './styles';
import { supabase } from '../../supabase';

function PaymentPage() {
  const formRef = useRef<FormHandles>(null);
  const [paymentSelection, setPaymentSelection] = useState(true);

  const [cardValue, setCardValue] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  const handleSelectPayment = (condition: boolean) => {
    setPaymentSelection(condition);
  };

  const handleSubmit = () => {
    console.log('oi');
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setCardValue({
      ...cardValue,
      [name]: value,
    });
  };
  async function updateStatus() {
    try {
      const status_booking = true;
      const updates = {
        agendamento_id: 4,
        status: status_booking,
      };

      const { error } = await supabase.from('agendamento').upsert(updates, {
        returning: 'minimal',
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Container>
      <Navbar itemVisible />
      <ContentContainer>
        <MenuContainer>
          <div>
            <button type="button" onClick={() => handleSelectPayment(true)}>
              <FiFileText size={40} />
              <h1>Boleto</h1>
            </button>
          </div>
          <div>
            <button type="button" onClick={() => handleSelectPayment(false)}>
              <FiCreditCard size={40} />
              <h1>Cartão</h1>
            </button>
          </div>
        </MenuContainer>
        {paymentSelection && (
          <CreditCardContainer>
            <Form ref={formRef} onSubmit={handleSubmit} className="Formlogin">
              <Input
                icon={FiMail}
                type="number"
                name="cvc"
                placeholder="CVC"
                onChange={handleInputChange}
              />
              <Input
                icon={FiMail}
                type="date"
                name="expiry"
                placeholder="Expire Date"
                onChange={handleInputChange}
              />
              <Input
                icon={FiMail}
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleInputChange}
              />
              <Input
                icon={FiMail}
                type="number"
                name="number"
                placeholder="Card Number"
                onChange={handleInputChange}
              />
              <Link to="/confirmed">
                <Button onClick={() => updateStatus()}>CONFIRMAR</Button>
              </Link>
            </Form>
          </CreditCardContainer>
        )}
      </ContentContainer>
      <Footer />
    </Container>
  );
}

export default PaymentPage;
