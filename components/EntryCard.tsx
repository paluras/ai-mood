import { EntryType } from "@/utils/types"
import DeleteButton from "./DeleteButton"


const EntryCard = ({ entry }: EntryType) => {
  console.log(entry.id);

  const date = new Date(entry.createdAt).toDateString()
  const smallEntry = entry.content.slice(0, 100) + "..."

  return (
    <div className="divide-y divide-gray-200 overflow-hidden hover:scale-105 transition rounded-lg bg-white shadow">
      <div className="bg-slate-200	 px-4 py-5 sm:px-6">{date}</div>
      <div className="px-4 py-5 sm:p-6">{smallEntry}</div>
    </div>
  )
}

export default EntryCard