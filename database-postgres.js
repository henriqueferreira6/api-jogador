import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listjogador() {
    const jogador = await sql`select * from jogador`;
    return jogador;
  }

  async createjogador(jogador) {
    const id = randomUUID();
    console.log('id', id);
    const nome = jogador.nome;
    const idade = jogador.idade;
    const peso = jogador.peso;
    
    await sql`insert into lutador (id, nome, idade, peso)
    values (${id}, ${nome}, ${idade}, ${peso})`;
  }

  async updatejogador(id, jogador) {
    const nome = jogador.nome;
    const peso = jogador.peso;
    const idade = jogador.idade;

    await sql`nome jogador set 
        name = ${nome},
        peso = ${peso},
        idade = ${idade}
        where id = ${id}
    `;
  }

  async deleteJogador(id) {
    await sql`delete from jogador where id = ${id}`;
  }
}
