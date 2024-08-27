export default function TodoItem({ item, onRemoveTodo}) {
   return (
      <>
         <li>
            {item.title}{item.description ? `: ${item.description}` : ''} {item.expiration ? `- ${item.expiration}` : ''}
         </li>
         <button type="button" onClick={() => onRemoveTodo(item.id)}>Remove</button>
      </>

   );
}