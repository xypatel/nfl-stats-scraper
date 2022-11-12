const fs = require('fs');
const puppeteer = require('puppeteer');
const { scrapeTeamPassingStats } = require('../services/scrapers/nfl/retrieveTeamPassingStats');

async function run() {
  scrapeTeamPassingStats();
}

run();