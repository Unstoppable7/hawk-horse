export default function TodoItem({ item, dispatchTodoList}) {
   return (
      <>
         <li>
            {item.title}{item.description ? `: ${item.description}` : ''} {item.expiration ? `- ${item.expiration}` : ''}
         </li>
         <button type="button" onClick={() => dispatchTodoList({type: 'DELETE_TODO', payload: item.id})}>Remove</button>
      </>

   );
}