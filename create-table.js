import { sql } from './db.js'

sql`
  CREATE TABLE lutador (
      id text PRIMARY KEY,
      nome character varying(255),
      peso  character varying(255),
      idade character varying(255)
  );
`.then(() => {
  console.log('tabela criada');
})