const fs = require('fs');
const puppeteer = require('puppeteer');

async function run() {
    nflUrl = 'https://www.nfl.com/stats/team-stats/offense/passing/2022/reg/all';
    const date = new Date();
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto(nflUrl);

    // get passing headers 
      const passingStatsHeaders = await page.$$eval('th', columns => {
        return Array.from(columns, column => column.innerText); 
      });
      
    // get passing stats 
    const passingStats = await page.$$eval('tr', rows => {
        return Array.from(rows, row => {
          const columns = row.querySelectorAll('td');
          return Array.from(columns, column => column.innerText);
        });
      });
      
      passingStats[0] = passingStatsHeaders;
      console.log(passingStats);

      //Save data to JSON fike 
      fs.writeFileSync('src/data/passingStats' + date.toISOString() + '.json', JSON.stringify(passingStats), (err) => {
        if (err) { throw err; } else {
            console.log("File Saved");
        }
      });

}

run();