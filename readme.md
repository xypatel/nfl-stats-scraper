# NFL Stats Scraper 

`npm start`

## Dependencies 
[Puppeteer](https://pptr.dev/)
[Prisma](https://www.prisma.io/)
## Docker
`docker compose -f docker-compose-pg-only.yml up --detach`

`docker compose -f docker-compose-pg-only.yml down`

## Prisma 
To update prisma schema after changes are made to table 
1. `npx prisma db pull`
2. `npx prism generate`

Visualize Schema
`npx prisma studio`