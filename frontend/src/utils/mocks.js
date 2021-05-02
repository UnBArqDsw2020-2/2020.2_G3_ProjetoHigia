export const doctors = [
  {
    id: 1,
    name: 'Fulano',
    specialty: 'Clínico Geral',
  },
  {
    id: 2,
    name: 'Ciclano',
    specialty: 'Dermatologista',
  },
  {
    id: 3,
    name: 'Beltrano',
    specialty: 'Neurologista',
  },
]

export const user = {
  name: 'Lorem Ipsum',
  accessRequestedCRMs: [1, 3],
  age: 35,
  height: 170,
  weight: 70,
  bloodGroup: 'AB+',
  medicament: [
    {
      id: 1,
      name: 'Rivotril  -  50mg',
    },
    {
      id: 2,
      name: 'Roacutan - 100mg',
    },
  ],
  allergy: [
    {
      id: 1,
      name: 'Polén',
    },
    {
      id: 2,
      name: 'Amendoim',
    },
  ],
  comorbidities:[
    {
      id: 1,
      name: 'Diabetes',
    },
  ],
  coments:[
    {
      id: 1,
      name: 'Nao possui comentarios',
    },
  ],
  emergencyContacts: [
    {
      id: 1,
      name: 'Lorem Ipsum Jr.',
      number: '(61) 99999-9999  ',
    },
    {
      id: 2,
      name: 'Lorem Ipsum Jr.',
      number: '(61) 99999-9999  ',
    },
  ],
  folders: [
    {
      id: 1,
      name: 'Exame de Sangue',
      files: [
        {
          id: 1,
          name: 'Exame do dia 20/11/2020',
        },
        {
          id: 2,
          name: 'Exame do dia 15/01/2021',
        },
      ],
    },
    {
      id: 2,
      name: 'Receitas',
      files: [
        {
          id: 1,
          name: 'Receita do Rivotril',
        },
      ],
    },
  ],
};

export const pacient = {
  name: 'Lorem Ipsum',
  age: 35,
  height: 170,
  weight: 70,
  bloodGroup: 'AB+',
  medicament: [
    {
      id: 1,
      name: 'Rivotril  -  50mg',
    },
    {
      id: 2,
      name: 'Roacutan - 100mg',
    },
  ],
  allergy: [
    {
      id: 1,
      name: 'Polén',
    },
    {
      id: 2,
      name: 'Amendoim',
    },
  ],
  emergencyContacts: [
    {
      id: 1,
      name: 'Lorem Ipsum Jr.',
      number: '(61) 99999-9999  ',
    },
    {
      id: 2,
      name: 'Lorem Ipsum Jr.',
      number: '(61) 99999-9999  ',
    },
  ],
  hasFullAccess: false,
  folders: [
    {
      id: 1,
      name: 'Exame de Sangue',
      files: [
        {
          id: 1,
          name: 'Exame do dia 20/11/2020',
        },
        {
          id: 2,
          name: 'Exame do dia 15/01/2021',
        },
      ],
    },
    {
      id: 2,
      name: 'Receitas',
      files: [
        {
          id: 1,
          name: 'Receita do Rivotril',
        },
      ],
    },
  ],
};
