const prismaClient = require('@prisma/client');
const { scrapeTeamRushingStats } = require('../scrapers/ScrapeTeamRushingStats');

const prisma = new prismaClient.PrismaClient();

async function putYearRushingStats(year) {
    rushingStats = await scrapeTeamRushingStats(year);
    for (let i = 1; i < rushingStats.length; i++) {
        await prisma.rushing_stats.create({
            data: {
                team: rushingStats[i][0],
                attempts: rushingStats[i][1],
                rush_yards: rushingStats[i][2],
                rush_yards_per_attempt: rushingStats[i][3],
                touchdowns: rushingStats[i][4],
                rush_over_20_yards: rushingStats[i][5],
                rush_over_40_yards: rushingStats[i][6],
                longest_rush: rushingStats[i][7],
                rush_first_downs: rushingStats[i][8],
                rush_first_down_percentage: rushingStats[i][9],
                rush_fumbles : rushingStats[i][10],
                year: year
            }
        })
        console.log(year + ' ' + rushingStats[i][0] + ' Rushing Stats Saved to DB');
    }
}

async function putAllYearsRushingStats() {
    for (let year = 1970; year <= 2022; year++) {
        await putYearRushingStats(year);
        console.log('All Rushing Stats from ' + year + ' Saved to DB');
    }
}

async function saveAllRushingStatsFrom1970ToCurrentYear() {
    putAllYearsRushingStats()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
}

module.exports = { saveAllRushingStatsFrom1970ToCurrentYear };