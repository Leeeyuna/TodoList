import { useState } from "react";

import Header from "./component/common/Header";
import AddFrm from "./component/todo/AddFrm";
import TodoList from "./component/todo/TodoList";

function App() {
  let todoNo = 1;
  const [todoList, setTodoList] = useState([
    {
      todoNo: todoNo++,
      todoTitle: "javascript 복습하기",
      isDone: 1,
      isLike: 0,
    },
    {
      todoNo: todoNo++,
      todoTitle: "react 복습하기",
      isDone: 0,
      isLike: 0,
    },
    {
      todoNo: todoNo++,
      todoTitle: "이력서 쓰기",
      isDone: 0,
      isLike: 1,
    },
  ]);

  const changeLike = (todo) => {
    const changeStatus = todo.isLike === 0 ? 1 : 0;
    todo.isLike = changeStatus;
    const newArr = [...todoList];
    setTodoList(newArr);
  };
  const todoDone = (todo) => {
    todo.isDone = 1;
    setTodoList([...todoList]);
  };
  const addTodo = (todoTitle) => {
    const todo = {
      todoNo: todoNo++,
      todoTitle: todoTitle,
      isDone: 0,
      isLike: 0,
    };
    const newArr = [...todoList];
    newArr.push(todo);
    setTodoList(newArr); //변화된 배열 화면에
  };
  const deleteTodo = (todoNo, index) => {
    console.log(todoNo);
    console.log(index);
    //const newArr = [...todoList];
    //newArr에사 번호랑 인덱스 사용해서 해당하는 객테를 삭제
    //splice를 이용한 배열 중간의 데이터 수정 삭제
    //수정 : 배열.splice(수정할 인덱스번호,1,수정할데이터);
    //삭제 : 배열.splice(삭제하고싶은 인덱스번호,1);
    //중간데이터 삽입: 배열.splice(삽입하고싶은 인덱스번호,1,삽입할 데이터);
    //newArr.splice(index, 1);

    const newArr = todoList.filter((todo) => {
      return todo.todoNo !== todoNo; // 트루면 newArr배열에 포함(저장)됨! 같으면 포함 false니까 배열에 포함안됨!!즉 삭제되는 개념!!여기서는 인덱스가 필요없음
    });

    setTodoList(newArr);
  };

  return (
    <div className="wrap">
      <Header />
      <AddFrm addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        changeLike={changeLike}
        todoDone={todoDone}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
