import knex from 'knex';

export default knex({
    client: 'mysql',
    connection: {
        server: '127.0.0.1',
        user: 'root',
        password: 'mysql',
        database: 'graphql',
        port: '3306'
    },
    migrations: {
        tableName: 'migrations'
    }
});