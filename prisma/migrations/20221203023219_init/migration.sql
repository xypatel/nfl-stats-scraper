-- CreateTable
CREATE TABLE "passingStats" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(6) DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'UTC'::text),
    "Team" VARCHAR(25) NOT NULL,
    "Att" DECIMAL NOT NULL,
    "Cmp" DECIMAL NOT NULL,
    "CmpPerc" DECIMAL NOT NULL,
    "YdspAtt" DECIMAL NOT NULL,
    "PassYds" DECIMAL NOT NULL,
    "TD" DECIMAL NOT NULL,
    "INT" DECIMAL NOT NULL,
    "Rate" DECIMAL NOT NULL,
    "1st" DECIMAL NOT NULL,
    "1st%" DECIMAL NOT NULL,
    "20+" DECIMAL NOT NULL,
    "40+" DECIMAL NOT NULL,
    "Lng" DECIMAL NOT NULL,
    "Sck" DECIMAL NOT NULL,
    "SckY" DECIMAL NOT NULL,

    CONSTRAINT "passingStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "test_pkey" PRIMARY KEY ("id")
);
