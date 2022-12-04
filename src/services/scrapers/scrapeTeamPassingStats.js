const puppeteer = require('puppeteer');

async function scrapeTeamPassingStats(year) {
    const nflUrl = 'https://www.nfl.com/stats/team-stats/offense/passing/' + year + '/reg/all';
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(60000);
    await page.goto(nflUrl);

    const passingStats = await page.$$eval('tr', rows => {
        return Array.from(rows, row => {
            const columns = row.querySelectorAll('td');
            return Array.from(columns, column => column.innerText);
        });
    });
    console.log(year + ' Passing Stats Scraped');
    browser.close();
    return passingStats;
}

module.exports = { scrapeTeamPassingStats };