const { connectPgDb } = require('../services/database/connectPgDb');
const { scrapeTeamPassingStats } = require('../services/scrapers/nfl/retrieveTeamPassingStats');

async function run() {
  connectPgDb();
  scrapeTeamPassingStats();
}

run();