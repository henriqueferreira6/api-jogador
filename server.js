
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/jogador', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createjogador(body);
    return reply.status(201).send();
})

// READE
server.get('/jogador', async () => {
    const jogador = await databasePostgres.listjogador();
    return jogador;
});

// UPDATE
server.put('/jogador/:id', async (request, reply) => {
    const jogadorID = request.params.id;
    const body = request.body;
    await databasePostgres.updatejogador(jogadorID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/jogador/:id', async (request, reply) => {
    const jogadorID = request.params.id;
    await databasePostgres.deletejogador(jogadorID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
