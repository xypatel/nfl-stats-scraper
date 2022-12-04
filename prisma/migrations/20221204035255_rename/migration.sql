/*
  Warnings:

  - You are about to drop the column `first_down_percentage` on the `passing_stats` table. All the data in the column will be lost.
  - You are about to drop the column `first_downs` on the `passing_stats` table. All the data in the column will be lost.
  - Added the required column `pass_first_down_percentage` to the `passing_stats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pass_first_downs` to the `passing_stats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "passing_stats" DROP COLUMN "first_down_percentage",
DROP COLUMN "first_downs",
ADD COLUMN     "pass_first_down_percentage" DECIMAL NOT NULL,
ADD COLUMN     "pass_first_downs" DECIMAL NOT NULL;
