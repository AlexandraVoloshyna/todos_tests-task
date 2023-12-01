import ListTodos from "./components/ListTodos"
import AddTodoForm from "./components/AddTodoForm"
function App() {
  return (
    <div className="container">
      <AddTodoForm/>
      <ListTodos/>
    </div>
  )
}

export default App
