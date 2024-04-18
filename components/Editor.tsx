'use client'

import { updateEntry } from "@/utils/api"
import { useState } from "react"
import { useAutosave } from "react-autosave"


interface EntryType{
    entry:{
        id:string,
        content:string,
        createdAt:Date,
        updatedAt:Date,
        userId:string
        
    } 
    
}
const Editor = ({ entry }: EntryType) => {
    console.log(entry, "Log");
    
    const [value, setValue] = useState(entry.content)
    const [loading, setLoading] = useState(false)
    useAutosave({
        data: value,
        onSave: async (_value) => {
            setLoading(true)
            const updated = await updateEntry(entry.id, _value)
            setLoading(false)
        }
    })
    return (
        <div className="w-full h-full">
            {loading && <div>Thinking</div>}
            <textarea className="w-full h-full p-8 text-xl" value={value} onChange={e => { setValue(e.target.value) }}></textarea>
        </div>
    )
}

export default Editor