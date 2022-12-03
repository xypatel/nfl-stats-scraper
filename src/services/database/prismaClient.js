const prismaClient = require('@prisma/client')

const prisma = new prismaClient.PrismaClient();

async function queryDB() {
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

async function runQuery() {
    queryDB()
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
