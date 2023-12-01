import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todosSlice'

function AddTodoForm() {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = (e) =>{
    e.preventDefault() 
    dispatch(addTodo({id: title, title, completed: false}))
    setTitle(" ")

  } 

  return (
    <div className="form-container">
     <form className="form" onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder='enter title'
      value={title}
      onChange={ e=> setTitle(e.target.value)}
      />
        <button type="submit" className='add-todo_btn'>submit todo</button>
     </form>
    </div>
  )
}

export default AddTodoForm