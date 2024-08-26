import { useState } from "react";

export default function AddTodoForm({ addTodoItem }) {

   const [autoIncrementID, setAutoIncrementID] = useState(0);

   function handleAddTodo(event) {
      event.preventDefault();

      const todoTitle = event.target.title.value;
      const todoDescription = event.target.description.value;
      const todoExpirationDate = event.target.expirationDate.value;
      
      const item = {
         id: autoIncrementID,
         title: todoTitle,
         description: todoDescription,
         expiration: todoExpirationDate
      }
      setAutoIncrementID(prevData => prevData + 1);
      addTodoItem(item);
      event.target.reset();
   }

   return (
      <form onSubmit={handleAddTodo}>
         <label htmlFor="title">Title</label>
         <input id="title" type="text" />
         <label htmlFor="description">Description</label>
         <input id="description" type="text" />
         <label htmlFor="expirationDate">Expiration Date</label>
         <input id="expirationDate" type="date" />
         <button>Add</button>
      </form>
   )
}