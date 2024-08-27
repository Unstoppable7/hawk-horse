import { useEffect } from "react";
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList";
import { useState } from "react"

const useCounterTodoList = (todoList) => {
   const [counterTodoList, setCounterTodoList] = useState(todoList.length);

   useEffect(() => {
      setCounterTodoList(todoList.length);
   }, [todoList]);

   return [counterTodoList, setCounterTodoList];
}

function App() {

   const [todoList, setTodoList] = useState([]);
   const [counterTodoList, setCounterTodoList] = useCounterTodoList(todoList);

   function removeTodoItem(id) {
      const newTodoList = todoList.filter((item) => item.id != id);
      setTodoList(newTodoList);
    }

   function addTodoItem(newItem) {
      setTodoList((previousTodoList) => [...previousTodoList, newItem]);
   }

   return (
      <>
         <h1>Task manager</h1>
         <small>Task Quantity: {counterTodoList}</small>
         <AddTodoForm addTodoItem={addTodoItem} />
         <TodoList todoList={todoList} onRemoveTodo={removeTodoItem}/>
      </>
   )
}

export default App
