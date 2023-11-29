import Image from 'next/image'
import Pagination from './components/Pagination'
import LatestIssues from './LatestIssues'
import IssueSummary from './IssueSummary'
import prisma from '@/prisma/client'
import { IssueChart } from './IssueChart'
import { Flex, Grid } from '@radix-ui/themes'

export default async function Home({ searchParams }: { searchParams: { page: string } }) {
  const openCount = await prisma.issue.count({
    where: { status: 'OPEN' }
  })
  const inProgressCount = await prisma.issue.count({
    where: { status: 'IN_PROGRESS' }
  })
  const closedCount = await prisma.issue.count({
    where: { status: 'CLOSED' }
  })
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary open={openCount} inProgress={inProgressCount} closed={closedCount} />
        <IssueChart open={openCount} inProgress={inProgressCount} closed={closedCount} />
      </Flex>
      <LatestIssues />

    </Grid>
  )
}
