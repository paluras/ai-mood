'use client'

import { createNewEntry } from "@/utils/api"
import { useRouter } from "next/navigation"

const NewEntryCard = () => {
  const router = useRouter()
  const handleClick = async () => {
    const data = await createNewEntry()
    router.push(`/journal/${data.id}`)
  }


  return (
    <div
      className="cursor-pointer hover:scale-x-105 transition overflow-hidden rounded-lg bg-blue-200 shadow text-2xl p-2 "
      onClick={handleClick} >
      New Entry
      <div >
      </div>
    </div>
  )
}

export default NewEntryCard