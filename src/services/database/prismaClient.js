const prismaClient = require('@prisma/client');
const { scrapeTeamPassingStats } = require('../scrapers/nfl/scrapeTeamPassingStats');

const prisma = new prismaClient.PrismaClient();
async function getPassingStats() {
    const allPassingStats = await prisma.passing_stats.findMany({
        where: { year: 1996 },
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
                    Team: passingStats[i][0],
                    Att: passingStats[i][1],
                    Cmp: passingStats[i][2],
                    Cmp_perc: passingStats[i][3],
                    Yds_per_Att: passingStats[i][4],
                    Pass_Yds: passingStats[i][5],
                    TD: passingStats[i][6],
                    INT: passingStats[i][7],
                    Rate: passingStats[i][8],
                    first: passingStats[i][9],
                    first_perc: passingStats[i][10],
                    over_20: passingStats[i][11],
                    over_40: passingStats[i][12],
                    Lng: passingStats[i][13],
                    Sck: passingStats[i][14],
                    SckY: passingStats[i][15],
                    year: year
                }
            })
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
