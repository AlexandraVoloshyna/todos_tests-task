import Todo from "./Todo"
import Pagination from "./Pagination"
import { setTodos} from "../redux/todosSlice"
import { useSelector, useDispatch} from "react-redux"
import { useState, useEffect } from "react"

function ListTodos() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=20`);
                const data = await response.json();
                const totalCount = response.headers.get('X-Total-Count');
                 setTotalPages(Math.ceil(totalCount / 20));
                dispatch(setTodos(data))
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData()
       }, [currentPage, dispatch]);
       const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
      };
       
       if(error) return <div> {error}</div>
       if(loading) return <div>loading...</div>


  return (
    <>
    <div className="todos"> 
     {  todos.map(todo => 
        <Todo 
        key={todo.id} 
        id={todo.id} 
        title={todo.title}
        completed={todo.completed}
        />)} 
     </div>
     <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
    </>
  )
}

export default ListTodos