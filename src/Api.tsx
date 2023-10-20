import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://work-in.an.tec.br/api/v1';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const register = async (dados: any) => {
  try {
    const resposta = await api.post('/register', dados);
    return resposta.data;
  } catch (error: any) {
    throw new Error('Erro ao criar o item: ' + error.message);
  }
};

export const listarItens = async () => {
  try {
    const resposta = await api.get('/endpoint');
    return resposta.data;
  } catch (error: any) {
    throw new Error('Erro ao listar os itens: ' + error.message);
  }
};

export const atualizarItem = async (id: any, dados: AxiosRequestConfig<{ id: any }> | undefined) => {
  try {
    const resposta = await api.put(`/profile/${id}`, dados);
    return resposta.data;
  } catch (error: any) {
    throw new Error('Erro ao atualizar o item: ' + error.message);
  }
};

export const deletarItem = async (id: any) => {
  try {
    const resposta = await api.delete(`/profile/${id}`);
    return resposta.data;
  } catch (error: any) {
    throw new Error('Erro ao deletar o item: ' + error.message);
  }
};

const kaduData = {
    name: 'Carlos Eduardo Nogueira',
    email: 'kadutec15@gmail.com',
    phone: '5585997742197',
    description: 'Desenvolvedor de Software aprendendo a fazer software',
    password: '12345678',
    password_confirmation: '12345678',
    birthdate: '2001-04-05',
    portfolio_url: '',
    linkedin_url: 'https://www.linkedin.com/in/carlos-eduardo-nogueira-5762a1251/',
    github_username: 'kadutec',
    addresses: [
      {
        line_1: 'Rua senador machado, 180',
        line_2: 'Apt 1603A',
        city: 'Fortaleza',
        state: 'CE',
        country: 'BR',
        zip_code: '60175170',
      },
    ],
  }

  register(kaduData)
  .then((response) => {
    console.log('Registro bem-sucedido:', response);
  })
  .catch((error) => {
    console.error('Erro no registro:', error.message);
  });



  const resumeData = {
    title: 'Currículo Carlos Eduardo Desenvolvedor de Software Jr',
    languages: [
      {
        name: 'Inglês',
        writing_level: 'B1',
        speaking_level: 'B1',
        listening_level: 'B1',
        reading_level: 'B1',
      },
    ],
    education: [
      {
        institution: 'Estácio',
        field: 'Análise e desenvolvimento de sistemas',
        degree: 'Ensino superior',
        start_time: '2023-02-01',
        end_time: '',
        complete: false,
        institution_url: 'https://estacio.br/',
        description: 'Faculdade EAD, cursando no momento',
      },
    ],
    experiences: [
      {
        contract_type: 'Estágio',
        title: 'Webmaster',
        organization_name: 'the Brooklyn Brothers',
        description: 'Desenvolvimento front end, trabalhando com desenvolvimento saas, usando a plataforma da adobe aem',
        start_time: '2023-06-01',
        end_time: '2023-09-01', 
        current: false,
        organization_url: 'https://www.thebrooklynbrothers.com/',
      },
      {
        contract_type: 'Trabalho voluntário',
        title: 'Front end developer',
        organization_name: 'Papyrus',
        description: 'Desenvolvimento front end utilizando a biblioteca react, é um trabalho voluntário...',
        start_time: '2023-09-01',
        end_time: '2023-10-01', 
        current: true,
        organization_url: 'não há ainda',
      },
      
    ],
    skills: [
      {
        name: 'Desenvolvimento Web',
        description: 'Proficiente em desenvolvimento front-end e back-end, mas com foco preferenciamente em front-end',
        level: 'beginner',
      },
    ],
    certifications: [
      {
        name: 'Certificado de Desenvolvedor Front-end',
        description: 'Certificação em desenvolvimento Front-end',
        organization: 'Dev samurai',
        expire: false, 
        start_time: '2022-06-12',
        end_time: '2022-12-23',
        identifier: 'não há', 
        credential_url: 'não há',
      },
    ],
  };
  
  export async function createResume() {
    try {
      const response = await axios.post(`${BASE_URL}/resumes`, resumeData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer , tirei a autorização verdadeira...',
        },
      });
  
      if (response.status === 201) {
        console.log('Currículo enviado com sucesso:', response.data);
      } else {
        console.error('Falha ao enviar o currículo. Status:', response.status);
      }
    } catch (error: any) {
      console.error('Erro ao enviar o currículo:', error.message);
    }
  }

  createResume();
  
  
  
  
