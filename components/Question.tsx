'use client'

import { askQuestion } from "@/utils/api"
import { useState } from "react"

const Question = () => {

    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [res, setRes] = useState()

    const onChange = (e: any) => {
        setValue(e.target.value)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        const answer = await askQuestion(value)
        setRes(answer)
        console.log(res);

        setValue('')
        setLoading(false)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input disabled={loading} className="p-2 border border-black/20 my-1 rounded"
                    onChange={onChange}
                    value={value} type="text" placeholder="Ask a question" />
                <button disabled={loading} className="p-2 border border-blue-200 rounded hover:scale-105 transition  ml-3">Ask</button>
            </form>
            {loading && <div>...Loading</div>}
            {res && <div >{res}</div>}

        </div>
    )
}

export default Question