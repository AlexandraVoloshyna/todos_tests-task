import { useDispatch } from "react-redux"
import { toggleTodo, editTodo, deleteTodo} from "../redux/todosSlice"
import { useState } from "react"


function Todo({id, title,completed}) {
  const [isEditing, setIsEditing ] = useState(false)
  const [updatedTitle, setUpdatedTitle ] = useState('')
  const dispatch = useDispatch()

  const handleEdit = ()=>{
    dispatch(editTodo({ id, title: updatedTitle }))
    setUpdatedTitle('')
    setIsEditing(false)
  }
  const handleDelete = () =>{
    dispatch(deleteTodo(id))
  }
  
  return (
    <div className="todo-item">
        <input type="checkbox" 
        checked={completed} 
        onChange={() => dispatch(toggleTodo(id))}  
        />
      {isEditing ? <>
      <input type = 'text'
        placeholder="title" 
        value={updatedTitle}
        onChange={(e)=>setUpdatedTitle(e.target.value)}

      />
      <div className="todo-item_actions">
        <button type="button" className="todo-btn_save" onClick={handleEdit}>save</button>
        <button type="button" className="todo-btn_cancel" onClick={()=>setIsEditing(false)}>cancel</button>
      </div>
      </> 
       : <>
       <div className="todo-item_title">{title}</div>
       <div className="todo-item_actions">
          <button type="button" className="todo-btn_edit" onClick={() => setIsEditing(true)}>edit</button>
          <button type="button" className="todo-btn_delete" onClick={handleDelete}>delete</button>
        </div>
        </>  
        }
    </div>
  )
}

export default Todo