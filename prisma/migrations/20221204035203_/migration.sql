/*
  Warnings:

  - You are about to drop the `passingStats` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "passingStats";

-- CreateTable
CREATE TABLE "passing_stats" (
    "id" SERIAL NOT NULL,
    "date_scraped" TIMESTAMP(6) DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'UTC'::text),
    "team" VARCHAR(25) NOT NULL,
    "attempts" DECIMAL NOT NULL,
    "completions" DECIMAL NOT NULL,
    "touchdowns" DECIMAL NOT NULL,
    "interceptions" DECIMAL NOT NULL,
    "pass_rating" DECIMAL NOT NULL,
    "longest_pass" VARCHAR NOT NULL,
    "sacks" DECIMAL NOT NULL,
    "sack_yards_lost" DECIMAL NOT NULL,
    "completion_percentage" DECIMAL NOT NULL,
    "pass_yards" DECIMAL NOT NULL,
    "pass_yards_per_attempt" DECIMAL NOT NULL,
    "first_downs" DECIMAL NOT NULL,
    "first_down_percentage" DECIMAL NOT NULL,
    "passes_over_20_yards" DECIMAL NOT NULL,
    "passes_over_40_yards" DECIMAL NOT NULL,
    "year" INTEGER,

    CONSTRAINT "passing_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rushing_stats" (
    "id" SERIAL NOT NULL,
    "date_scraped" TIMESTAMP(6) DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'UTC'::text),
    "team" VARCHAR(25) NOT NULL,
    "attempts" DECIMAL NOT NULL,
    "rush_yards" DECIMAL NOT NULL,
    "rush_yards_per_attempt" DECIMAL NOT NULL,
    "touchdowns" DECIMAL NOT NULL,
    "rush_over_20_yards" DECIMAL NOT NULL,
    "rush_over_40_yards" DECIMAL NOT NULL,
    "longest_rush" VARCHAR NOT NULL,
    "rush_first_downs" DECIMAL NOT NULL,
    "rush_first_down_percentage" DECIMAL NOT NULL,
    "rush_fumbles" DECIMAL NOT NULL,
    "year" INTEGER,

    CONSTRAINT "rushing_stats_pkey" PRIMARY KEY ("id")
);
