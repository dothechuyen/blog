const { Pool } = require('pg');


// ==> Conexão com a Base de Dados:
const pool = new Pool({
    user: 'chuyen',
    host: 'localhost',
    database: 'chuyen',
    password: 'chuyen92351',
    port: 5432,
});

pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};