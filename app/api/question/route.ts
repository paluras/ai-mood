import { qa } from "@/utils/ai"
import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { NextResponse } from "next/server"

export const POST = async (req: any) => {

    const { question } = await req.json()
    const user = await getUserByClerkID()

    const entries = await prisma.jurnalEntry.findMany({
        where: {
            userId: user.id
        },
        select: {
            id: true,
            content: true,
            createdAt: true
        }
    })

    const answear = await qa(question, entries)

    return NextResponse.json({ data: answear })
}