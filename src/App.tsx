import "./App.css";
import TodoList from "./features/todo/TodoList";
import AddTodo from "./features/todo/AddTodo";

function App() {
  return (
    <div>
      <header>
        <h1 className="header-title">TODO.</h1>
        <AddTodo />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
