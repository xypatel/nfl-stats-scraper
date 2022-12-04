const { runQuery } = require('../services/database/prismaClient');
const { saveAllPassingStatsFrom1970ToCurrentYear } = require('../services/database/SavePassingStats');
const { saveAllRushingStatsFrom1970ToCurrentYear } = require('../services/database/SaveRushingStats');
async function run() {
  saveAllRushingStatsFrom1970ToCurrentYear();
}

run();