/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
import { Form } from '@unform/web';
import { useRef, useCallback, useState, useEffect } from 'react';
import { FiMail, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { createBrowserHistory } from 'history';
import { Button, Footer, Input, Navbar, TextArea } from '../../components';

import { Container, ResgisterForm } from './styles';

import NewSelect from '../../components/NewSelect';
import { supabase } from '../../supabase';
import RestauntsImg from '../../components/RestaurantsImg';
import { getValidationErrors, cpfMask, cellphoneMask } from '../../utils';

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
  horario_abertura: string;
  horario_fechamento: string;
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
  const [horario_abertura, setHorarioAbertura] = useState('');
  const [horario_fechamento, setHorarioFechamento] = useState('');
  const [images_url, setImages_url] = useState<string | null>(null);

  const session = supabase.auth.session();
  useEffect(() => {
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
        throw error;
      }
      if (data) {
        // console.log(data);
        setImages_url(data.images_url);
      }
    } catch (error) {
      // alert(error);
    } finally {
      setLoading(false);
    }
  }
  async function UploadImages({ images_url }: { images_url: string | null }) {
    try {
      setLoading(true);
      const updates = {
        images_url,
      };

      const { error } = await supabase.from('restaurant').upsert(updates, {
        returning: 'minimal',
      });
      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }
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
            horario_abertura,
            horario_fechamento,
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
        setHorarioAbertura(data.horario_abertura);
        setHorarioFechamento(data.horario_fechamento);
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

  const history = createBrowserHistory();

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      history.push('/profile');
      console.log(data);
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required('Nome Obrigatório'),
        descricao: Yup.string().required('Descrição Obrigatória'),
        estado: Yup.string().required('Estado Obrigatório'),
        cidade: Yup.string().required('Cidade Obrigatório'),
        rua_avenida: Yup.string().required('Rua/Avenida Obrigatória'),
        numero_endereco: Yup.string().required(
          'Numero de endereço obrigatório',
        ),
        telefone: Yup.string().required('Telefone Obrigatório'),
        cnpj: Yup.string().required('CNPJ Obrigatório'),
        preco: Yup.string().required('Preço  Obrigatório'),
        images_url: Yup.string().required('Imagens Obrigatório'),
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
            name="nome"
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
            name="descricao"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />
          <Input
            name="cnpj"
            type="number"
            value={cpfMask(cnpj)}
            onChange={e => setCnpj(e.target.value)}
            icon={FiMail}
            placeholder="Digite o CNPJ de seu restauarnte"
            style={{ width: '100%' }}
          />
          <NewSelect name="country" label="Choose your country">
            {' '}
            {selectOptions.map(option => (
              <option
                onChange={() => setEstado(option.value)}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </NewSelect>

          <Input
            name="cidade"
            icon={FiMail}
            value={cidade}
            onChange={e => setCidade(e.target.value)}
            placeholder="Digite sua cidade"
            style={{ width: '100%' }}
          />

          <Input
            name="rua_avenida"
            icon={FiMail}
            value={rua_avenida}
            onChange={e => setRua_avenida(e.target.value)}
            placeholder="Digite sua rua/avenida"
            style={{ width: '100%' }}
          />
          <Input
            name="numero_endereco"
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
            value={cellphoneMask(telefone)}
            onChange={e => setTelefone(e.target.value)}
            icon={FiMail}
            placeholder="Digite o telefone de seu restaurante"
            style={{ width: '100%' }}
          />
          <Input
            name="preco"
            type="number"
            value={preco}
            onChange={e => setPreco(e.target.value)}
            icon={FiMail}
            placeholder="Digite o Preço de reserva"
            style={{ width: '100%' }}
          />
          <Input
            name="horaraio_abertura"
            type="number"
            value={horario_abertura}
            onChange={e => setHorarioAbertura(e.target.value)}
            icon={FiMail}
            placeholder="Horario de abertura"
            style={{ width: '100%' }}
          />
          <Input
            name="horario_fechamento"
            type="number"
            value={horario_fechamento}
            onChange={e => setHorarioFechamento(e.target.value)}
            icon={FiMail}
            placeholder="Horario de fechamento"
            style={{ width: '100%' }}
          />
          <p>Escolha as imagens de seu restaurante</p>
          <RestauntsImg
            size={20}
            url={images_url}
            onUpload={(url: string | any) => {
              setImages_url(url);
              UploadImages({ images_url: url });
            }}
          />
          <Button onClick={() => RegisterDatasRestaurants()} disabled={loading}>
            {loading || ' Cadastrar'}
          </Button>
          {/* <ImageInput name="ImgRestaurant" /> */}
        </Form>
      </ResgisterForm>
      <Footer />
    </Container>
  );
}
