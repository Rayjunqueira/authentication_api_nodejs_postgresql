const dotenv = require('dotenv').config();
const app = require('./app');

const sequelize  = require('./database/config');

async function connection() {
    const port = process.env.PORT;
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(port);
        console.log(`Listening on port ${port}`)
    } catch (error) {
        console.log(error);
    }
}

connection();