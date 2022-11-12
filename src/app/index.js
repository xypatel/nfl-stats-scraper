const { scrapeTeamPassingStats } = require('../services/scrapers/nfl/retrieveTeamPassingStats');

async function run() {
  scrapeTeamPassingStats();
}

run();