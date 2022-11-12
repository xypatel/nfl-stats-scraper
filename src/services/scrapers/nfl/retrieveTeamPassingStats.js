const fs = require('fs');
const puppeteer = require('puppeteer');
const { writeToFile } = require('../../../utils/writeToFile');

async function scrapeTeamPassingStats() {
    const nflUrl = 'https://www.nfl.com/stats/team-stats/offense/passing/2022/reg/all';
    const date = new Date();
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto(nflUrl);

    const passingStatsHeaders = await page.$$eval('th', columns => {
        return Array.from(columns, column => column.innerText);
    });

    const passingStats = await page.$$eval('tr', rows => {
        return Array.from(rows, row => {
            const columns = row.querySelectorAll('td');
            return Array.from(columns, column => column.innerText);
        });
    });

    passingStats[0] = passingStatsHeaders;
    console.log(passingStats);

    const passingStatsNewFileName = 'src/data/passingStats' + date.toISOString() + '.json';
    writeToFile(passingStatsNewFileName, JSON.stringify(passingStats));
}

module.exports = { scrapeTeamPassingStats };
