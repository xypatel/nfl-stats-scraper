const prismaClient = require('@prisma/client');
const { scrapeTeamPassingStats } = require('../scrapers/scrapeTeamPassingStats');

const prisma = new prismaClient.PrismaClient();
async function getPassingStats() {
    const allPassingStats = await prisma.passing_stats.findMany({
        where: { year: 1970 },
      });
    console.log("Prisma find many from Postgres DB");
    console.log(allPassingStats);
}

async function putPassingStats() {
    for (let year = 1970; year <= 2022; year++) {
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
}

async function runQuery() {
    putPassingStats()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })
}

module.exports = { runQuery };
