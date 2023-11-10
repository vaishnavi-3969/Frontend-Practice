import { newTodo } from '@/utils/actions'

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input type="text" name="todo" className="border border-black" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default NewTodoForm

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
