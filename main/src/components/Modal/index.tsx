import React from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import Select from 'react-select';
import { Input } from '../../pages/Restaurants/styles';

import { Container } from './styles';

function ModalExampleModal() {
  const options = [
    { value: '1', label: 'Aparecida' },
    { value: '2', label: 'Cunha' },
    { value: '3', label: 'Guaratinguetá' },
    { value: '4', label: 'Lorena' },
    { value: '5', label: 'São José dos Campos' },
    { value: '6', label: 'Pindamonhangaba' },
    { value: '7', label: 'Taubaté' },
  ];
  const sts = [
    { value: '1', label: 'São Paulo' },
    { value: '2', label: 'Rio de janeiro' },
    { value: '3', label: 'Minas Gerais' },
    { value: '4', label: 'Santa Catarina' },
    { value: '5', label: 'Rio Grande do Sul' },
    { value: '6', label: 'Bahia' },
    { value: '', label: 'Mato Grosso' },
  ];
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Cadastrar Restaurante</Button>}
    >
      <Modal.Header>Resi</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src="/images/restaurante1.jpg" wrapped />
        <Modal.Description>
          <Header>Cadastre os dados de seu restaurante</Header>
          <Container>
            <Input
              name="Restaurante"
              icon={FiLock}
              placeholder="Nome do Restaurante"
              type="text"
            />
            <Input
              name="Descrição"
              icon={FiLock}
              placeholder="Descrição"
              type="text"
            />
            <Select
              options={sts}
              placeholder="Estado"
              theme={theme => ({
                ...theme,
                borderRadius: 3,
                colors: {
                  ...theme.colors,
                  primary25: '#ff6865',
                  primary: '#e53935',
                },
              })}
            />

            <Select
              options={options}
              placeholder="Cidade"
              theme={theme => ({
                ...theme,
                borderRadius: 3,
                colors: {
                  ...theme.colors,
                  primary25: '#ff6865',
                  primary: '#e53935',
                },
              })}
            />

            <Input
              name="Endereco"
              icon={FiLock}
              placeholder="Digite seu Endereço"
              type="text"
            />

            <Input
              name="Telefone"
              icon={FiLock}
              placeholder="Digite seu número de Telefone"
              type="number"
            />
            <Input
              icon={FiMail}
              type="date"
              name="expiry"
              placeholder="Expire Date"
            />
          </Container>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancelar
        </Button>
        <Button
          content="Salvar"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default ModalExampleModal;
