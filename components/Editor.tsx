'use client'

import { updateEntry } from "@/utils/api"
import { useState } from "react"
import { useAutosave } from "react-autosave"


interface EntryType {
    entry: {
        id: string,
        content: string,
        createdAt: Date,
        updatedAt: Date,
        userId: string,
        analysis: any

    }

}
const Editor = ({ entry }: EntryType) => {
    console.log(entry, "Log");

    const [value, setValue] = useState(entry.content)
    const [loading, setLoading] = useState(false)
    const [analysis, setAnalysis] = useState(entry.analysis)


    const analysisData = [
        { name: 'Summary', value: analysis.summary },
        { name: 'Subject', value: analysis.subject },
        { name: 'Mood', value: analysis.mood },
        { name: 'Negative', value: analysis.negative ? "True" : "False" }


    ]

    useAutosave({
        data: value,
        onSave: async (_value) => {
            setLoading(true)
            const updated = await updateEntry(entry.id, _value)
            setAnalysis(updated.analysis)
            setLoading(false)
        }
    })
    return (
        <div className="grid h-full grid-cols-2">
            <div className="w-full h-full">
                {loading && <div>Thinking</div>}
                <textarea className="w-full overflow-hidden h-full p-8 text-xl focus-visible:outline-0" value={value} onChange={e => { setValue(e.target.value) }}></textarea>
            </div>
            <div className="border-l border-black/10">
                <div className=" py-10 px-6" style={{ backgroundColor: analysis?.color }}>
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

export default Editor