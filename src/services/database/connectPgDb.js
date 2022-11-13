const { Client } = require("pg")
const dotenv = require("dotenv")

dotenv.config()
const client = new Client();

const connectPgDb = async () => {
    try {
        await client.connect();
    } catch (error) {
        console.log(error);
    }
}

const disconnectPgDb = async () => {
    try {
        await client.end();
    } catch (error) {
        console.log(error);
    }
}

const createStatsDb = async () => {
    try {
        const dbname = 'stats';
        await client.query(`DROP DATABASE IF EXISTS ${dbname};`);
        await client.query(`CREATE DATABASE ${dbname};`);
        await client.end();
    } catch (error) {
        console.log(error);
    }
}
 

module.exports = { connectPgDb, disconnectPgDb, createStatsDb };