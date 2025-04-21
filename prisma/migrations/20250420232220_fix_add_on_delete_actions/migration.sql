-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_userId_fkey";

-- DropForeignKey
ALTER TABLE "Column" DROP CONSTRAINT "Column_boardId_fkey";

-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_boardId_fkey";

-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_issueTypeId_fkey";

-- DropForeignKey
ALTER TABLE "IssueType" DROP CONSTRAINT "IssueType_boardId_fkey";

-- AlterTable
ALTER TABLE "Issue" ALTER COLUMN "issueTypeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Column" ADD CONSTRAINT "Column_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_issueTypeId_fkey" FOREIGN KEY ("issueTypeId") REFERENCES "IssueType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IssueType" ADD CONSTRAINT "IssueType_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;
