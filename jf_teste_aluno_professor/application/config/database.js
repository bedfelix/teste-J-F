module.exports = {
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'teste_jf',
    dialect: 'postgres',
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
};