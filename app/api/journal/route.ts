import { analyze } from "@/utils/ai"
import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const POST = async () => {

    const user = getUserByClerkID()
    const entry = await prisma.jurnalEntry.create({
        data: {
            userId: (await user).id,
            content: "Write about your day"
        }
    })

    const analysis = await analyze(entry.content)

    if (!analysis) return

    await prisma.analysis.create({
        data: {
            userId: (await user).id,
            entryId: entry.id,
            ...analysis
        }
    })

    revalidatePath('/journal')

    return NextResponse.json({ data: entry })
}