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
    const analysisData = [
        { name: 'Summary', value: '' },
        { name: 'Subject', value: '' },
        { name: 'Mood', value: '' },
        { name: 'Negative', value: false }


    ]
    const entry = await getEntry(params.id)
    if (!entry) return
    return (
        <div className="w-full h-full grid grid-cols-3">
            <div className="col-span-2 h-full">
                <Editor entry={entry} />
            </div>
            <div className="border-l border-black/10">
                <div className="bg-blue-300 py-10 px-6">
                    <h2 className="text-3xl">Ai stuff</h2>
                 
                </div>
                <ul>
                        {analysisData.map((item, index) => (
                            <li className="flex items-center justify-between px-4 py-2 border border-black/20 font-bold" key={index}>
                                <span>{item.name}</span>
                                <span>{item.value}</span>
                                </li>
                        ))}
                    </ul>

            </div>
        </div>
    )
}

export default EntryPage