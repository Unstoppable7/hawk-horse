import { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import { useRef } from "react";
import { useEffect } from "react";

export default function AddTodoForm({ addTodoItem }) {

   const [autoIncrementID, setAutoIncrementID] = useState(0);
   const [todoTitle, setTodoTitle] = useState('');
   const [todoDescription, setTodoDescription] = useState('');
   const [todoExpirationDate, setTodoExpirationDate] = useState('');
   const focusInputRef = useRef();

   useEffect(() => {
      if (focusInputRef.current) {
         focusInputRef.current.focus();
      }
   }, [])

   function handleAddTodo(event) {
      event.preventDefault();

      const item = {
         id: autoIncrementID,
         title: todoTitle,
         description: todoDescription,
         expiration: todoExpirationDate
      }
      setAutoIncrementID(prevData => prevData + 1);
      addTodoItem(item);

      setTodoTitle('');
      setTodoDescription('');
      setTodoExpirationDate('');
      if (focusInputRef.current) {
         focusInputRef.current.focus();
      }
   }

   function handleTodoTitle(event) {
      setTodoTitle(event.target.value);
   }
   function handleTodoDescription(event) {
      setTodoDescription(event.target.value);
   }
   function handleTodoExpirationDate(event) {
      setTodoExpirationDate(event.target.value);
   }

   return (
      <form onSubmit={handleAddTodo}>
         <InputWithLabel componentID={'todoTitle'} type={'text'} inputValue={todoTitle} onChange={handleTodoTitle} ref={focusInputRef}>
            Title
         </InputWithLabel>
         <InputWithLabel componentID={'todoDescription'} type={'text'} inputValue={todoDescription} onChange={handleTodoDescription}>
            Description
         </InputWithLabel>
         <InputWithLabel componentID={'todoExpirationDate'} type={'date'} inputValue={todoExpirationDate} onChange={handleTodoExpirationDate}>
            Expiration Date
         </InputWithLabel>
         <button>Add</button>
      </form>
   )
}