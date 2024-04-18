import HistoryChart from "@/components/HistoryChart"
import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"



const getData = async () => {
    const user = await getUserByClerkID()
    const analyses = await prisma.analysis.findMany({
        where: {
            userId: user.id,
        },
        orderBy: {
            createdAt: 'asc'
        }
    })

    const sum = analyses.reduce((all, curr) => all + curr.sentimentScore, 0)
    const avg = Math.round(sum / analyses.length)
    return { analyses, avg }
}

const History = async () => {
    const { avg, analyses } = await getData()
    return (
        <div className="h-[500px] w-full">
            <HistoryChart data={analyses} />
        </div>
    )
}

export default History