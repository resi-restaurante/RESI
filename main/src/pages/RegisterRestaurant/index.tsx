/* eslint-disable no-shadow */
import { Form } from '@unform/web';
import { useRef, useCallback, useState, useEffect } from 'react';
import { FiMail, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import { Button, Footer, Input, Navbar, TextArea } from '../../components';

import { Container, ResgisterForm } from './styles';
import { getValidationErrors } from '../../utils';
import NewSelect from '../../components/NewSelect';
import ImageInput from '../../components/FileInput';
import { supabase } from '../../supabase';

interface FormData {
  nome: string;
  descricao: string;
  estado: string;
  cidade: string;
  rua_avenida: string;
  numero_endereco: string;
  telefone: string;
  cnpj: string;
  preco: string;
  images_url: string;
}

export default function RegisterRestaurant() {
  const [loading, setLoading] = useState(true);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [rua_avenida, setRua_avenida] = useState('');
  const [numero_endereco, setNumero_endereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [preco, setPreco] = useState('');
  const [images_url, setImages_url] = useState('');

  const session = supabase.auth.session();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    getRestaurant();
  }, [session]);
  async function getRestaurant() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const { data, error, status } = await supabase
        .from('restaurants')
        .select(`*`)
        .eq('restaurante_id', user?.id)
        .single();

      if (error && status !== 406) {
        console.log(error);
      }
      if (data) {
        console.log(data);
        setNome(data.nome);
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }
  // função

  async function RegisterDatasRestaurants() {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      const { data, error, status } = await supabase
        .from('restaurants')
        .insert([
          {
            nome,
            descricao,
            estado,
            cidade,
            rua_avenida,
            numero_endereco,
            telefone,
            cnpj,
            preco,
            images_url,
            profiles_id: user?.id,
          },
        ])
        .single();
      if (error && status !== 406) {
        console.log(error);
      }
      if (data) {
        setNome(data.nome);
        setDescricao(data.descricao);
        setEstado(data.estado);
        setCidade(data.cidade);
        setRua_avenida(data.rua_avenida);
        setNumero_endereco(data.numero_endereco);
        setTelefone(data.telefone);
        setCnpj(data.cnpj);
        setPreco(data.preco);
        setImages_url(data.images_url);
      }
    } catch (error) {
      alert(error);
    }
  }

  const selectOptions = [
    { value: 'São Paulo', label: 'São Paulo' },
    { value: 'Rio de Janeiro', label: 'Rio de Janeiro' },
    { value: 'Minas Gerais', label: 'Minas gerais' },
  ];
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      history.push('/profile');
      console.log(data);
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required('Nome Obrigatório'),
        descricao: Yup.string().required('Nome Obrigatório'),
        estado: Yup.string().required('Nome Obrigatório'),
        cidade: Yup.string().required('Nome Obrigatório'),
        rua_avenida: Yup.string().required('Nome Obrigatório'),
        numero_endereco: Yup.string().required('obg'),
        telefone: Yup.string().required('Nome Obrigatório'),
        cnpj: Yup.string().required('Nome Obrigatório'),
        preco: Yup.string().required('Nome Obrigatório'),
        images_url: Yup.string().required('Nome Obrigatório'),
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
            type="text"
            icon={FiUser}
            value={nome || ''}
            onChange={e => setNome(e.target.value)}
            placeholder="Digite o nome do seu restaurante"
            style={{ width: '100%' }}
          />
          <TextArea
            placeholder="Descrição do seu Restaurante"
            icon={FiMail}
            name="sobre"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />
          <Input
            name="CNPJ"
            type="number"
            value={cnpj}
            onChange={e => setCnpj(e.target.value)}
            icon={FiMail}
            placeholder="Digite o CNPJ de seu restauarnte"
            style={{ width: '100%' }}
          />
          <NewSelect name="country" label="Choose your country">
            {' '}
            {selectOptions.map(option => (
              <option
                onChange={() => setEstado(option.label)}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </NewSelect>

          <Input
            name="Cidade"
            icon={FiMail}
            value={cidade}
            onChange={e => setCidade(e.target.value)}
            placeholder="Digite sua cidade"
            style={{ width: '100%' }}
          />

          <Input
            name="Rua/Avenida"
            icon={FiMail}
            value={rua_avenida}
            onChange={e => setRua_avenida(e.target.value)}
            placeholder="Digite sua rua/avenida"
            style={{ width: '100%' }}
          />
          <Input
            name="numberRestaurant"
            type="number"
            icon={FiMail}
            value={numero_endereco}
            onChange={e => setNumero_endereco(e.target.value)}
            placeholder="Numero"
            style={{ width: '100%' }}
          />
          <Input
            name="telefone"
            type="number"
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            icon={FiMail}
            placeholder="Digite o telefone de seu restaurante"
            style={{ width: '100%' }}
          />
          <Input
            name="Preço"
            type="number"
            value={preco}
            onChange={e => setPreco(e.target.value)}
            icon={FiMail}
            placeholder="Digite o Preço de reserva"
            style={{ width: '100%' }}
          />
          <p>Escolha as imagens de seu restaurante</p>
          <ImageInput name="ImgRestaurant" />

          <Button onClick={() => RegisterDatasRestaurants()}>
            {loading || ' Cadastrar'}
          </Button>
        </Form>
      </ResgisterForm>
      <Footer />
    </Container>
  );
}
