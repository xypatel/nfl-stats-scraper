const prismaClient = require('@prisma/client');
const { scrapeTeamPassingStats } = require('../scrapers/nfl/retrieveTeamPassingStats');

const prisma = new prismaClient.PrismaClient();
async function getPassingStats() {
    const allPassingStats = await prisma.passingStats.findMany();
    console.log("Prisma find many from Postgres DB");
    console.log(allPassingStats);
}
async function testPut() {
    await prisma.passingStats.create({
        data: {
            Team: 'test',
            Att: 0,
            Cmp: 0,
            Cmp_perc: 0,
            Yds_per_Att: 0,
            Pass_Yds: 0,
            TD: 0,
            INT: 0,
            Rate: 0,
            first: 0,
            first_perc: 0,
            over_20: 0,
            over_40: 0,
            Lng: 0,
            Sck: 0,
            SckY: 0,
        }
    })
}

async function putPassingStats(){
    passingStats = await scrapeTeamPassingStats();
    for (let i = 1; i < passingStats.length; i++) {
        await prisma.passingStats.create({
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
            }
        })
      }
}

async function runQuery() {
    getPassingStats()
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
