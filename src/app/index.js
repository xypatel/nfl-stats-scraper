const { runQuery } = require('../services/database/prismaClient');
const { saveAllPassingStatsFrom1970ToCurrentYear } = require('../services/database/SavePassingStats');
async function run() {
  saveAllPassingStatsFrom1970ToCurrentYear();
}

run();