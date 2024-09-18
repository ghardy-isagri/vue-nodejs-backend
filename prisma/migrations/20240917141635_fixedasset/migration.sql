/*
  Warnings:

  - You are about to drop the `course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `teacher` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "AssetType" AS ENUM ('AUTRES', 'BATIMENTS', 'MATERIELS', 'PARTS', 'PRETS_DEPOTS_CAUTIONS');

-- CreateEnum
CREATE TYPE "AcquisitionType" AS ENUM ('CASH', 'CREDIT', 'LEASE');

-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "course_deptId_fkey";

-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "course_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_deptId_fkey";

-- DropTable
DROP TABLE "course";

-- DropTable
DROP TABLE "department";

-- DropTable
DROP TABLE "student";

-- DropTable
DROP TABLE "teacher";

-- DropEnum
DROP TYPE "TeacherType";

-- CreateTable
CREATE TABLE "FixedAsset" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "accountId" INTEGER NOT NULL,
    "number" INTEGER NOT NULL DEFAULT 1,
    "type" "AssetType" NOT NULL,
    "acquisitionType" "AcquisitionType" NOT NULL DEFAULT 'CASH',
    "acquisitionDate" TIMESTAMP(3) NOT NULL,
    "acquisitionAmount" DOUBLE PRECISION NOT NULL,
    "vatAmount" DOUBLE PRECISION NOT NULL,
    "comments" VARCHAR(500),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FixedAsset_pkey" PRIMARY KEY ("id")
);
