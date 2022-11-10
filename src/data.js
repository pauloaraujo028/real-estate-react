// import house images
import House1 from "./assets/img/houses/house1.png";
import House2 from "./assets/img/houses/house2.png";
import House3 from "./assets/img/houses/house3.png";
import House4 from "./assets/img/houses/house4.png";
import House5 from "./assets/img/houses/house5.png";
import House6 from "./assets/img/houses/house6.png";
import House7 from "./assets/img/houses/house7.png";
import House8 from "./assets/img/houses/house8.png";
import House9 from "./assets/img/houses/house9.png";
import House10 from "./assets/img/houses/house10.png";
import House11 from "./assets/img/houses/house11.png";
import House12 from "./assets/img/houses/house12.png";
// import house large images
import House1Lg from "./assets/img/houses/house1lg.png";
import House2Lg from "./assets/img/houses/house2lg.png";
import House3Lg from "./assets/img/houses/house3lg.png";
import House4Lg from "./assets/img/houses/house4lg.png";
import House5Lg from "./assets/img/houses/house5lg.png";
import House6Lg from "./assets/img/houses/house6lg.png";
import House7Lg from "./assets/img/houses/house7lg.png";
import House8Lg from "./assets/img/houses/house8lg.png";
import House9Lg from "./assets/img/houses/house9lg.png";
import House10Lg from "./assets/img/houses/house10lg.png";
import House11Lg from "./assets/img/houses/house11lg.png";
import House12Lg from "./assets/img/houses/house12lg.png";

// import apartments images
import Apartment1 from "./assets/img/apartments/a1.png";
import Apartment2 from "./assets/img/apartments/a2.png";
import Apartment3 from "./assets/img/apartments/a3.png";
import Apartment4 from "./assets/img/apartments/a4.png";
import Apartment5 from "./assets/img/apartments/a5.png";
import Apartment6 from "./assets/img/apartments/a6.png";
// import apartments large images
import Apartment1Lg from "./assets/img/apartments/a1lg.png";
import Apartment2Lg from "./assets/img/apartments/a2lg.png";
import Apartment3Lg from "./assets/img/apartments/a3lg.png";
import Apartment4Lg from "./assets/img/apartments/a4lg.png";
import Apartment5Lg from "./assets/img/apartments/a5lg.png";
import Apartment6Lg from "./assets/img/apartments/a6lg.png";

// import agents images
import Agent1 from "./assets/img/agents/agent1.png";
import Agent2 from "./assets/img/agents/agent2.png";
import Agent3 from "./assets/img/agents/agent3.png";
import Agent4 from "./assets/img/agents/agent4.png";
import Agent5 from "./assets/img/agents/agent5.png";
import Agent6 from "./assets/img/agents/agent6.png";
import Agent7 from "./assets/img/agents/agent7.png";
import Agent8 from "./assets/img/agents/agent8.png";
import Agent9 from "./assets/img/agents/agent9.png";
import Agent10 from "./assets/img/agents/agent10.png";
import Agent11 from "./assets/img/agents/agent11.png";
import Agent12 from "./assets/img/agents/agent12.png";

export const housesData = [
  {
    id: 1,
    type: "Casa",
    name: "Casa 1",
    description:
      "Linda casa, recentemente reformado, com 6 quartos, sendo 2 suíte. a casa é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: House1,
    imageLg: House1Lg,
    country: "São Paulo",
    address: "RUA SAO PAULO - 618",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 m²",
    garage: "1",
    year: "2016",
    price: "11.000",
    period: "/mês",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: 2,
    type: "Casa",
    name: "Casa 2",
    description:
      "Linda casa, recentemente reformado, com 6 quartos, sendo 3 suíte. a casa é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: House2,
    imageLg: House2Lg,
    country: "Santos",
    address: "RUA SANTOS - 617",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 m²",
    garage: "2",
    year: "2016",
    price: "14.000",
    period: "/mês",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: 3,
    type: "Casa",
    name: "Casa 3",
    description:
      "Lindo apartamento, recentemente reformado, com 6 quartos, sendo 1 suíte. a casa é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: House3,
    imageLg: House3Lg,
    country: "São Paulo",
    address: "RUA SAO PAULO - 616",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 m²",
    garage: "3",
    year: "2016",
    price: "17.000",
    period: "/mês",
    agent: {
      image: Agent3,
      name: "Amado Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: 4,
    type: "Casa",
    name: "Casa 4",
    description:
      "Lindo apartamento, recentemente reformado, com 6 quartos, sendo 1 suíte. a casa é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: House4,
    imageLg: House4Lg,
    country: "Santos",
    address: "RUA SANTOS - 616",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 m²",
    garage: "2",
    year: "2016",
    price: "20.000",
    period: "/mês",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: 5,
    type: "Casa",
    name: "Casa 5",
    description:
      "Lindo apartamento, recentemente reformado, com 6 quartos, sendo 2 suíte. a casa é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: House5,
    imageLg: House5Lg,
    country: "São Paulo",
    address: "RUA SAO PAULO - 615",
    bedrooms: "5",
    bathrooms: "3",
    surface: "4200 m²",
    garage: "1",
    year: "2015",
    price: "21.000",
    period: "/mês",
    agent: {
      image: Agent5,
      name: "Grover Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: 6,
    type: "Casa",
    name: "Casa 6",
    description:
      "Lindo apartamento, recentemente reformado, com 6 quartos, sendo 3 suíte. a casa é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: House6,
    imageLg: House6Lg,
    country: "Santos",
    address: "RUA SANTOS - 614",
    bedrooms: "6",
    bathrooms: "3",
    surface: "6200 m²",
    garage: "2",
    year: "2014",
    price: "22.000",
    period: "/mês",
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
  {
    id: 7,
    type: "Apartamento",
    name: "Apartamento 1",
    description:
      "Lindo apartamento, recentemente reformado, com 2 quartos, sendo 1 suíte. O apê é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: "Santos",
    address: "RUA SANTOS - 618",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1200 m²",
    garage: "2",
    year: "2012",
    price: "20.000",
    period: "/mês",
    agent: {
      image: Agent7,
      name: "Jawhar Shamil Naser",
      phone: "0123 456 78910",
    },
  },
  {
    id: 8,
    type: "Apartamento",
    name: "Apartamento 2",
    description:
      "Lindo apartamento, recentemente reformado, com 3 quartos, sendo 1 suíte. O apê é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: "São Paulo",
    address: "RUA SAO PAULO - 613",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 m²",
    garage: "1",
    year: "2011",
    price: "30.000",
    period: "/mês",
    agent: {
      image: Agent8,
      name: "Juana Douglass",
      phone: "0123 456 78910",
    },
  },
  {
    id: 9,
    type: "Apartamento",
    name: "Apartamento 3",
    description:
      "Lindo apartamento, recentemente reformado, com 2 quartos, sendo 1 suíte. O apê é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: "São Paulo",
    address: "RUA SAO PAULO - 612",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1100 m²",
    garage: "2",
    year: "2011",
    price: "40.000",
    period: "/mês",
    agent: {
      image: Agent9,
      name: "Jerry Schenck",
      phone: "0123 456 78910",
    },
  },
  {
    id: 10,
    type: "Casa",
    name: "Casa 7",
    description:
      "Lindo apartamento, recentemente reformado, com 5 quartos, sendo 1 suíte. a casa é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: House7,
    imageLg: House7Lg,
    country: "Santos",
    address: "RUA SANTOS - 617",
    bedrooms: "5",
    bathrooms: "3",
    surface: "3200 m²",
    garage: "2",
    year: "2015",
    price: "11.700",
    period: "/mês",
    agent: {
      image: Agent10,
      name: "Vera Levesque",
      phone: "0123 456 78910",
    },
  },
  {
    id: 11,
    type: "Casa",
    name: "Casa 8",
    description:
      "Lindo apartamento, recentemente reformado, com 7 quartos, sendo 3 suíte. a casa é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: House8,
    imageLg: House8Lg,
    country: "Santos",
    address: "RUA SANTOS - 612",
    bedrooms: "7",
    bathrooms: "2",
    surface: "2200 m²",
    garage: "3",
    year: "2019",
    price: "14.500",
    period: "/mês",
    agent: {
      image: Agent11,
      name: "Sofia Gomes",
      phone: "0123 456 78910",
    },
  },
  {
    id: 12,
    type: "Casa",
    name: "Casa 9",
    description:
      "Lindo apartamento, recentemente reformado, com 4 quartos, sendo 1 suíte. a casa é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: House9,
    imageLg: House9Lg,
    country: "São Paulo",
    address: "RUA SAO PAULO - 611",
    bedrooms: "4",
    bathrooms: "4",
    surface: "4600 m²",
    garage: "2",
    year: "2015",
    price: "13.900",
    period: "/mês",
    agent: {
      image: Agent12,
      name: "Raymond Hood",
      phone: "0123 456 78910",
    },
  },
  {
    id: 13,
    type: "Casa",
    name: "Casa 10",
    description:
      "Lindo apartamento, recentemente reformado, com 5 quartos, sendo 2 suíte. a casa é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: House10,
    imageLg: House10Lg,
    country: "Santos",
    address: "RUA SANTOS - 614",
    bedrooms: "5",
    bathrooms: "2",
    surface: "5200 m²",
    garage: "2",
    year: "2014",
    price: "18.000",
    period: "/mês",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: 14,
    type: "Casa",
    name: "Casa 11",
    description:
      "Lindo apartamento, recentemente reformado, com 5 quartos, sendo 1 suíte. a casa é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: House11,
    imageLg: House11Lg,
    country: "São Paulo",
    address: "RUA SAO PAULO - 615",
    bedrooms: "5",
    bathrooms: "2",
    surface: "3200 m²",
    garage: "1",
    year: "2011",
    price: "21.300",
    period: "/mês",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: 15,
    type: "Casa",
    name: "Casa 12",
    description:
      "Lindo apartamento, recentemente reformado, com 4 quartos, sendo 2 suíte. a casa é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: House12,
    imageLg: House12Lg,
    country: "Santos",
    address: "RUA SANTOS - 612",
    bedrooms: "4",
    bathrooms: "3",
    surface: "5200 m²",
    garage: "2",
    year: "2013",
    price: "22.100",
    period: "/mês",
    agent: {
      image: Agent3,
      name: "Amado Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: 16,
    type: "Apartamento",
    name: "Apartamento 16",
    description:
      "Lindo apartamento, recentemente reformado, com 2 quartos, sendo 1 suíte. O apê é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: "Santos",
    address: "RUA SANTOS - 614",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1300 m²",
    garage: "2",
    year: "2011",
    price: "21.000",
    period: "/mês",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: 17,
    type: "Apartamento",
    name: "Apartamento 17",
    description:
      "Lindo apartamento, recentemente reformado, com 3 quartos, sendo 1 suíte. O apê é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: "São Paulo",
    address: "RUA SAO PAULO - 617",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 m²",
    garage: "2",
    year: "2012",
    price: "32.000",
    period: "/mês",
    agent: {
      image: Agent5,
      name: "Grover Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: 18,
    type: "Apartamento",
    name: "Apartamento 18",
    description:
      "Lindo apartamento, recentemente reformado, com 3 quartos, sendo 2 suíte. O apê é super aconchegante, arejado e bate sol da manhã. Está situado em área tranquila, arborizada e segura. Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc); Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova, elevador, jardim na entrada no prédio; Segurança: região nobre e segura, portaria 24 horas, cerca elétrica, portões com fechamento automático.”",
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: "Santos",
    address: "RUA SANTOS - 619",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1200 m²",
    garage: "2",
    year: "2010",
    price: "38.000",
    period: "/mês",
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
];
