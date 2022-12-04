const { runQuery } = require('../services/database/prismaClient');
const { saveAllPassingStatsFrom1970 } = require('../services/database/SavePassingStats');
async function run() {
  saveAllPassingStatsFrom1970();
}

run();