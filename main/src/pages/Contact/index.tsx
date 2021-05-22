import { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiMail, FiUser, FiEdit } from 'react-icons/fi';
import { Container, Title } from './styles';
import { Header } from '../../components/Header';
import { TextArea, InputWithBorder, Button } from '../../components';

const ContactPage = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    console.log('Roi');
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div className="form-container">
          <Title>Tem alguma dúvida ? Mande um recado pra gente.</Title>
          <div className="input-container">
            <Form ref={formRef} onSubmit={handleSubmit} className="Formlogin">
              <div>
                <p className="input-title">Nome:</p>
                <InputWithBorder
                  name="name"
                  placeholder="Digite seu nome"
                  icon={FiUser}
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <p className="input-title">Email:</p>
                <InputWithBorder
                  name="email"
                  placeholder="Digite seu email"
                  icon={FiMail}
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <p className="input-title">Recado:</p>
                <TextArea
                  name="message"
                  icon={FiEdit}
                  style={{ width: '100%' }}
                />
              </div>
              <Button loading={false}>
                <h1>enviar</h1>
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
