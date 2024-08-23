import TodoItem from "./TodoItem";

export default function TodoList({ todoList }) {

   return (
      <ul>
         {
            todoList.map(
               (item) => <TodoItem key={item.id} item={item} />
            )
         }
      </ul>
   );
}