const puppeteer = require('puppeteer');

async function scrapeTeamPassingStats(year) {
    const nflUrl = 'https://www.nfl.com/stats/team-stats/offense/passing/' + year + '/reg/all';
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
    
    browser.close();
    return passingStats;
}

module.exports = { scrapeTeamPassingStats };