import { useState, useRef } from 'react';
import { FiCreditCard, FiFileText, FiMail } from 'react-icons/fi';
// import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Input } from '../../components';
import { Header, Footer } from '../../components';
import {
  Container,
  ContentContainer,
  MenuContainer,
  CreditCardContainer,
} from './styles';

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

  return (
    <Container>
      <Header />
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
            </Form>
          </CreditCardContainer>
        )}
      </ContentContainer>
      <Footer />
    </Container>
  );
}

export default PaymentPage;
