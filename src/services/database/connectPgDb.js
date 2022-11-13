const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()
 
const connectPgDb = async () => {
    try {
        const client = new Client();
        await client.connect();
        const dbname = 'teamPassingStats';
        await client.query(`DROP DATABASE IF EXISTS ${dbname};`);
        // await client.query(`CREATE DATABASE ${dbname};`);
        await client.end();
    } catch (error) {
        console.log(error);
    }
}
 
connectPgDb();

module.exports = { connectPgDb };