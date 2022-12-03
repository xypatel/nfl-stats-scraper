/*
  Warnings:

  - You are about to drop the column `1st` on the `passingStats` table. All the data in the column will be lost.
  - You are about to drop the column `1st%` on the `passingStats` table. All the data in the column will be lost.
  - You are about to drop the column `20+` on the `passingStats` table. All the data in the column will be lost.
  - You are about to drop the column `40+` on the `passingStats` table. All the data in the column will be lost.
  - You are about to drop the column `CmpPerc` on the `passingStats` table. All the data in the column will be lost.
  - You are about to drop the column `PassYds` on the `passingStats` table. All the data in the column will be lost.
  - You are about to drop the column `YdspAtt` on the `passingStats` table. All the data in the column will be lost.
  - Added the required column `Cmp_perc` to the `passingStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Pass_Yds` to the `passingStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Yds_per_Att` to the `passingStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first` to the `passingStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_perc` to the `passingStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `over_20` to the `passingStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `over_40` to the `passingStats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "passingStats" DROP COLUMN "1st",
DROP COLUMN "1st%",
DROP COLUMN "20+",
DROP COLUMN "40+",
DROP COLUMN "CmpPerc",
DROP COLUMN "PassYds",
DROP COLUMN "YdspAtt",
ADD COLUMN     "Cmp_perc" DECIMAL NOT NULL,
ADD COLUMN     "Pass_Yds" DECIMAL NOT NULL,
ADD COLUMN     "Yds_per_Att" DECIMAL NOT NULL,
ADD COLUMN     "first" DECIMAL NOT NULL,
ADD COLUMN     "first_perc" DECIMAL NOT NULL,
ADD COLUMN     "over_20" DECIMAL NOT NULL,
ADD COLUMN     "over_40" DECIMAL NOT NULL;
