import { newTodo } from "@/utils/actions"

const NewToDoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input name='content' className="border border-black" type="text" />
        <button className="border border-black" type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default NewToDoForm

// =============================
// 'use client'

// import { useState } from "react"
// // here we cannot pass non-serializable props
// // eg. onChange

// const NewTodoForm = () =>{
//     const [state, updateState] = useState('');
//     return (
//         <div>
//             <form action="">
//                 <input type="text" />
//             </form>
//         </div>
//     )
// }
// export default NewTodoForm
