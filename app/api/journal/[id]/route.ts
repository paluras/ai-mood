import { analyze } from "@/utils/ai"
import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { revalidatePath } from "next/cache"
import { NextResponse, NextRequest } from "next/server"

export const revalidate = 0

export const PUT = async (req: Request, { params }: any) => {
    const { content } = await req.json()
    const user = await getUserByClerkID()
    const updatedEntry = await prisma.jurnalEntry.update({
        where: {
            userId_id: {
                userId: user.id,
                id: params.id
            }
        },
        data: {
            content
        },

    })
    const analysis = await analyze(updatedEntry.content)
    if (!analysis) return
    const update = await prisma.analysis.upsert({
        where: {
            entryId: updatedEntry.id,
        },
        create: {
            userId: user.id,
            entryId: updatedEntry.id,
            ...analysis
        },
        update: analysis

    })


    return NextResponse.json({ data: { ...updatedEntry, analysis: update } })
}

export const DELETE = async (request: NextRequest, { params }: any) => {
    const user = await getUserByClerkID()

    await prisma.jurnalEntry
        .delete({
            where: {
                userId_id: {
                    id: params.id,
                    userId: user.id,
                },
            },
        })

    return NextResponse.json({ data: { id: params.id } })
}