# NFL Stats Scraper 

- `npm start`

## Dependencies 
- [Puppeteer](https://pptr.dev/)
- [Prisma](https://www.prisma.io/)
## Docker
1. `cd docker`
- `docker compose -f docker-compose-pg-only.yml up --detach`
- `docker compose -f docker-compose-pg-only.yml down`

## Prisma 
To update prisma schema after changes are made to table 
1. `npx prisma db pull`
2. `npx prism generate`

To update table after changes are made to prisma schema 
- `npx prisma migrate dev --name init`

Visualize Schema
- `npx prisma studio`
## Code Analysis
[SonarCloud](https://sonarcloud.io/project/overview?id=xypatel_nfl-stats-scraper)