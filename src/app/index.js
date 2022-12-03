const { runQuery } = require('../services/database/prismaClient');
async function run() {
  runQuery();
}

run();