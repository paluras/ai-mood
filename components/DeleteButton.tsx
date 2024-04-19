'use client'

import { deleteEntry } from "@/utils/api"
import { useRouter } from "next/navigation"


const DeleteButton = ({ id }: any) => {
    const router = useRouter()
    const handleClick = async () => {
        await deleteEntry(id)


        router.push('/journal')
    }





    return (
        <button onClick={handleClick} >Delete</button>
    )
}

export default DeleteButton