const prismaClient = require('@prisma/client');
const { scrapeTeamPassingStats } = require('../scrapers/ScrapeTeamPassingStats');

const prisma = new prismaClient.PrismaClient();

async function putYearPassingStats(year) {
    passingStats = await scrapeTeamPassingStats(year);
    for (let i = 1; i < passingStats.length; i++) {
        await prisma.passing_stats.create({
            data: {
                team: passingStats[i][0],
                attempts: passingStats[i][1],
                completions: passingStats[i][2],
                completion_percentage: passingStats[i][3],
                pass_yards_per_attempt: passingStats[i][4],
                pass_yards: passingStats[i][5],
                touchdowns: passingStats[i][6],
                interceptions: passingStats[i][7],
                pass_rating: passingStats[i][8],
                pass_first_downs: passingStats[i][9],
                pass_first_down_percentage: passingStats[i][10],
                passes_over_20_yards: passingStats[i][11],
                passes_over_40_yards: passingStats[i][12],
                longest_pass: passingStats[i][13],
                sacks: passingStats[i][14],
                sack_yards_lost: passingStats[i][15],
                year: year
            }
        })
        console.log(year + ' ' + passingStats[i][0] + ' Passing Stats Saved to DB');
    }
}

async function putAllYearsPassingStats() {
    for (let year = 1970; year <= 2022; year++) {
        await putYearPassingStats(year);
        console.log('All Passing Stats from ' + year + ' Saved to DB');
    }
}

async function saveAllPassingStatsFrom1970() {
    putAllYearsPassingStats()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
}

module.exports = { saveAllPassingStatsFrom1970 };