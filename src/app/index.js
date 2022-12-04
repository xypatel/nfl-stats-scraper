const { runQuery } = require('../services/database/prismaClient');
const { saveAllPassingStatsFrom1970 } = require('../models/SavePassingStats');
async function run() {
  saveAllPassingStatsFrom1970();
}

run();