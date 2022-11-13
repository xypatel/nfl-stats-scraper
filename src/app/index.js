const { connectPgDb, disconnectPgDb } = require('../services/database/connectPgDb');
const { scrapeTeamPassingStats } = require('../services/scrapers/nfl/retrieveTeamPassingStats');

async function run() {
  connectPgDb();
  scrapeTeamPassingStats();
  disconnectPgDb();
}

run();