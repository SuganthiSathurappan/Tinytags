// console.log('Db connect');
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    HOST: process.env.HOST_NAME,
    PORT: process.env.PORT,
    USER: process.env.USER_NAME,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB_NAME,
    dialect: process.env.DIALECT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}



console.log('Db connect');