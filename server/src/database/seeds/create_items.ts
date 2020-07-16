import Knex from 'knex';


export async function seed(knex: Knex) {
  await knex('items').insert([
       {title: 'Lãmpadas', image: 'lãmpadas.svg' },
       {title: 'Pilhas e baterias', image: 'baterias.svg' },
       {title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
       {title: 'Resíduos Eletrónicos', image: 'eletronicos.svg' },
       {title: 'Resíduos Orgãnicos', image: 'organicos.svg' },
       {title: 'Óleo de Cozinha', image: 'oleo.svg' },
       



   ]);
}