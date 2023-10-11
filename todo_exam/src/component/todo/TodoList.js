import "./todoList.css";

const TodoList = (props) => {
  const todoList = props.todoList;
  const changeLike = props.changeLike;
  const todoDone = props.todoDone;
  const deleteTodo = props.deleteTodo;
  return (
    <div className="todo-list">
      {todoList.map((todo, index) => {
        return (
          <Todo
            key={"todo" + index}
            todo={todo}
            changeLike={changeLike}
            todoDone={todoDone}
            deleteTodo={deleteTodo}
            index={index} //값보내줌!!
          />
        );
      })}
    </div>
  );
};
const Todo = (props) => {
  const todo = props.todo;
  const changeLike = props.changeLike;
  const todoDone = props.todoDone;
  const deleteTodo = props.deleteTodo;
  const index = props.index;
  return (
    <ul>
      <li className="likes">
        <span
          className="material-icons like-icon"
          onClick={() => {
            changeLike(todo);
          }}
        >
          {todo.isLike === 0 ? "favorite_border" : "favorite"}
        </span>
      </li>
      {todo.isDone === 0 ? (
        <li className="text">{todo.todoTitle}</li>
      ) : (
        <li className="text done-text">{todo.todoTitle}</li>
      )}
      <li className="done">
        {todo.isDone === 0 ? (
          <span
            className="material-icons done-icon"
            onClick={() => {
              todoDone(todo);
            }}
          >
            check_circle
          </span>
        ) : (
          ""
        )}

        <span
          className="material-icons remove-icon"
          onClick={() => {
            deleteTodo(todo.todoNo, index);
          }}
        >
          delete_forever
        </span>
      </li>
    </ul>
  );
};

export default TodoList;
