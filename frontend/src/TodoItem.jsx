export default function TodoItem({ item }) {
   return (
      <li>
         {item.title}: {item.description} {item.expiration ? `- ${item.expiration}` : ''}
      </li>
   );
}