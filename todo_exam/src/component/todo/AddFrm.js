import { useState } from "react";
import "./addFrm.css";
const AddFrm = (props) => {
  const addTodo = props.addTodo;
  const [todoTitle, setTodoTitle] = useState("");
  const regist = () => {
    //const input = document.querySelector(".input"); //input값 가져오기
    //const todoTitle = input.value;  =>e.currentTarget이거하면 이게 필요없어짐
    if (todoTitle !== "") {
      addTodo(todoTitle);
      //input.value = "";
      setTodoTitle("");
    }
  };
  /*function changeTitle(e) 매개변수부분에 이번트 객체 ==>> this랑 같은역활*/
  const changeTitle = (e) => {
    //e.currentTarget : 해당이벤트를 발생시킨 엘리먼트
    const inputValue = e.currentTarget.value;
    //console.log(inputValue);
    setTodoTitle(inputValue);
  };
  const enterCheck = (e) => {
    if (e.keyCode === 13) {
      regist(); //엔터쳤을때 입력값 들어가게 함수 실행
    }
  };
  return (
    <div className="todo-frm">
      <input
        type="text"
        className="input"
        value={todoTitle}
        onChange={
          changeTitle
        } /*여기  onChange는 value값이 바뀌기만해도 변화감지*/
        onKeyUp={enterCheck}
      ></input>
      <button className="btn" onClick={regist}>
        등록하기
      </button>
    </div>
  );
};
export default AddFrm;
