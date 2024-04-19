
import { revalidate } from '@/app/api/journal/route'
import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import Question from '@/components/Question'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'

const getEntries = async () => {
    const user = await getUserByClerkID()
    const entries = await prisma.jurnalEntry.findMany({
        where: {
            userId: user.id,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    revalidate
    return entries
}



const JournalPage = async () => {
    const entries = await getEntries()

    return (
        <div className='p-10'>
            <h2 className='text-4xl mb-8'>Journal</h2>
            <div className='flex flex-wrap gap-3 mb-3'>
                <NewEntryCard />
                <Question />
            </div>
            <div className='grid grid-cols-fill-300 gap-4 '>
                {entries.map(entry => (
                    <>

                        <Link key={entry.id} href={`/journal/${entry.id}`}>
                            <EntryCard entry={entry} />
                        </Link>
                    </>
                ))}
            </div>
        </div>

    )
}

export default JournalPage