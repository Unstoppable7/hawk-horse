import TodoItem from "./TodoItem";

export default function TodoList({ todoList, onRemoveTodo }) {

   return (
      <ul>
         {
            todoList.map(
               (item) => <TodoItem key={item.id} item={item} onRemoveTodo={onRemoveTodo}/>
            )
         }
      </ul>
   );
}