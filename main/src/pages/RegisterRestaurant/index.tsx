import { Form } from '@unform/web';
import { useRef, useCallback } from 'react';
import { FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Button, Footer, Header, Input } from '../../components';

import { Container } from './styles';
import { getValidationErrors } from '../../utils';

interface FormData {
  email: string;
}

export default function RegisterRestaurant() {
  const formRef = useRef<FormHandles>(null);
  // const handleSubmit: SubmitHandler<FormData> = data => {
  //   console.log(data);
  // };

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      console.log(data);
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
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

  return (
    <Container>
      <Header />

      <h1>Cadastre seu Restaunte !!</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          icon={FiMail}
          type="email"
          placeholder="Digite seu email"
          style={{ width: '100%' }}
        />
        <Button>Entrar</Button>
      </Form>

      <Footer />
    </Container>
  );
}
