import { useRef, useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FiMail,
  FiUser,
  FiCalendar,
  FiHome,
  FiPhone,
  FiLock,
} from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Switch from 'react-switch';
import Input from '../../components/Input';
import { Container, ContainerLogo } from './styles';

export default function RegisterPage() {
  const formRef = useRef<FormHandles>(null);

  const [typeOfUser, setTypeOfUser] = useState(false);
  const [labelTypeOfUser, setLabelTypeOfUser] = useState('Pessoa física');

  const handleSubmit = useCallback(() => {
    console.log('Roi');
  }, []);

  useEffect(() => {
    if (typeOfUser) {
      setLabelTypeOfUser('Pessoa jurídica');
    } else {
      setLabelTypeOfUser('Pessoa física');
    }
  }, [typeOfUser]);

  return (
    <Container>
      <main>
        <div className="modalRegister">
          <ContainerLogo className="containerLogo">
            <img src="images/logo.svg" alt="Resi" />
          </ContainerLogo>
          <Form ref={formRef} onSubmit={handleSubmit} className="Formlogin">
            <div className="inputsContainer">
              <Input name="name" icon={FiUser} placeholder="Digite seu nome" />
              <Input
                name="email"
                icon={FiMail}
                placeholder="Digite seu email"
              />
              <Input name="email" icon={FiCalendar} placeholder="dd/mm/aa" />
              <Input
                name="city"
                icon={FiHome}
                placeholder="Digite sua cidade"
              />
              <div id="switcher-container">
                <Switch
                  onChange={() => setTypeOfUser(!typeOfUser)}
                  checked={typeOfUser}
                />
                <p>{labelTypeOfUser}</p>
              </div>
              <Input
                name="document"
                icon={FiPhone}
                placeholder="Digite seu CPF"
              />
              <Input
                name="cellphone"
                icon={FiPhone}
                placeholder="Digite seu telefone"
                type="password"
              />
              <Input
                name="password"
                icon={FiLock}
                placeholder="Digite sua senha"
                style={{ width: '100%' }}
                type="password"
              />

              <Input
                name="confirmPassword"
                icon={FiLock}
                placeholder="Confirme sua senha"
                style={{ width: '100%' }}
                type="password"
              />
            </div>
            <footer>
              <Link to="/login">
                <p>Voltar</p>
              </Link>
              <button type="button">Registrar</button>
            </footer>
          </Form>
        </div>
      </main>
    </Container>
  );
}
