'use client'

import { useState } from "react"
// here we cannot pass non-serializable props
// eg. onChange

const NewTodoForm = () =>{
    const [state, updateState] = useState('');
    return (
        <div>
            <form action="">
                <input type="text" />
            </form>
        </div>
    )
}
export default NewTodoForm