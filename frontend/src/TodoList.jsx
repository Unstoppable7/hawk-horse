import TodoItem from "./TodoItem";

export default function TodoList({ todoList, dispatchTodoList }) {

   return (
      <ul>
         {
            todoList.map(
               (item) => <TodoItem key={item.id} item={item} dispatchTodoList={dispatchTodoList}/>
            )
         }
      </ul>
   );
}