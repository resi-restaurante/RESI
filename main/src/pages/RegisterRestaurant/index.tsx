import { Form } from '@unform/web';
import { useRef, useCallback } from 'react';
import { FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Button, Footer, Input, Navbar, TextArea } from '../../components';

import { Container, ResgisterForm } from './styles';
import { getValidationErrors } from '../../utils';
import NewSelect from '../../components/NewSelect';
import ImageInput from '../../components/FileInput';

interface FormData {
  email: string;
}

export default function RegisterRestaurant() {
  const selectOptions = [
    { value: 'brazil', label: 'São Paulo' },
    { value: 'usa', label: 'Rio de Janeiro' },
    { value: 'argentina', label: 'Minas gerais' },
  ];
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
      <Navbar itemVisible />

      <h1>Cadastre seu Restaunte !!</h1>
      <ResgisterForm>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="nameRestaurant"
            icon={FiMail}
            placeholder="Digite o nome do seu restaurante"
            style={{ width: '100%' }}
          />
          <TextArea
            placeholder="Descrição do seu Restaurante"
            icon={FiMail}
            name="sobre"
          />
          <Input
            name="CNPJ"
            type="number"
            icon={FiMail}
            placeholder="Digite o CNPJ de seu restauarnte"
            style={{ width: '100%' }}
          />
          <NewSelect name="country" label="Choose your country">
            {' '}
            {selectOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </NewSelect>

          <Input
            name="Cidade"
            icon={FiMail}
            placeholder="Digite sua cidade"
            style={{ width: '100%' }}
          />
          <Input
            name="Bairro"
            icon={FiMail}
            placeholder="Digite seu bairro"
            style={{ width: '100%' }}
          />
          <Input
            name="Rua/Avenida"
            icon={FiMail}
            placeholder="Digite sua rua/avenida"
            style={{ width: '100%' }}
          />
          <Input
            name="numberRestaurant"
            type="number"
            icon={FiMail}
            placeholder="Numero"
            style={{ width: '100%' }}
          />
          <Input
            name="telefone"
            type="number"
            icon={FiMail}
            placeholder="Digite o telefone de seu restaurante"
            style={{ width: '100%' }}
          />
          <p>Escolha as imagens de seu restaurante</p>
          <ImageInput name="ImgRestaurant" />

          <Button>Cadastrar</Button>
        </Form>
      </ResgisterForm>
      <Footer />
    </Container>
  );
}
