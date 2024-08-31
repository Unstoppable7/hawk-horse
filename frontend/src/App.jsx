import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList";
import { useState, useEffect, useReducer } from "react"

const useCounterTodoList = (todoList) => {
   const [counterTodoList, setCounterTodoList] = useState(todoList.length);

   useEffect(() => {
      setCounterTodoList(todoList.length);
   }, [todoList]);

   return [counterTodoList, setCounterTodoList];
}

const todoListReducer = (todoList, action) => {
   switch (action.type) {
      case 'ADD_TODO':
         return [...todoList, action.payload];
      case 'DELETE_TODO':
         return todoList.filter((todo) => todo.id != action.payload);
      default:
         throw new Error('Unknown State');
   }
};

function App() {

   // const [todoList, setTodoList] = useState([]);
   const [todoList, dispatchTodoList] = useReducer(todoListReducer,[]);
   const [counterTodoList, setCounterTodoList] = useCounterTodoList(todoList);

   // function removeTodoItem(id) {
   //    const newTodoList = todoList.filter((item) => item.id != id);
   //    setTodoList(newTodoList);
   // }

   // function addTodoItem(newItem) {
   //    setTodoList((previousTodoList) => [...previousTodoList, newItem]);
   // }

   return (
      <>
         <h1>Task manager</h1>
         <small>Task Quantity: {counterTodoList}</small>
         <AddTodoForm dispatchTodoList={dispatchTodoList} />
         <TodoList todoList={todoList} dispatchTodoList={dispatchTodoList} />
      </>
   )
}

export default App
