const { scrapeTeamPassingStats } = require('../services/scrapers/nfl/retrieveTeamPassingStats');
const { runQuery } = require('../services/database/prismaClient');
async function run() {
  // scrapeTeamPassingStats();
  runQuery();
}

run();