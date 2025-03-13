import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { ListGroup, Button } from "react-bootstrap";

// Define Todo type
interface Todo {
    id: string;
    title: string;
  }
  
  // Define TodoItem component props
  interface TodoItemProps {
    todo: Todo;
  }
  

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();

  return (
    <ListGroup.Item key={todo.id}>
      <Button onClick={() => dispatch(deleteTodo(todo.id))} id="wd-delete-todo-click">
        Delete
      </Button>
      <Button onClick={() => dispatch(setTodo(todo))} id="wd-set-todo-click">
        Edit
      </Button>
      {todo.title}
    </ListGroup.Item>
  );
}