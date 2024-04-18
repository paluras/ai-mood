import Editor from "@/components/Editor"
import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"

const getEntry = async (id: string) => {
    const user = await getUserByClerkID()
    const entry = await prisma.jurnalEntry.findUnique({
        where: {
            userId_id: {
                userId: user.id,
                id
            }
        },
        include: {
            analysis: true,
        }
    })

    return entry
}

interface ParamsObj {
    params: {
        id: string
    }
}

const EntryPage = async ({ params }: ParamsObj) => {

    const entry = await getEntry(params.id)

    if (!entry) return

    return (
        <div className="col-span-2 h-full">
            <Editor entry={entry} />
        </div>

    )
}

export default EntryPage