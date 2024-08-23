import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList";
import { useState } from "react"

function App() {

   const [todoList, setTodoList] = useState([]);

   function addTodoItem(newItem) {
      setTodoList((previousTodoList) => [...previousTodoList, newItem]);
   }

   return (
      <div>
         <h1>Task manager</h1>
         <AddTodoForm addTodoItem={addTodoItem} />
         <TodoList todoList={todoList}/>
      </div>
   )
}

export default App
