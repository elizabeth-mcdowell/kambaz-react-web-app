import TodoItem from "./TodoItem.tsx";
import todos from "./todos.json" with { type: "json" };
export default function TodoList() {
 return(
   <>
     <h3>Todo List</h3>
     <ul className="list-group">
       { todos.map(todo => {
           return(<TodoItem todo={todo}/>);   })}
     </ul><hr/>
   </>
);}

