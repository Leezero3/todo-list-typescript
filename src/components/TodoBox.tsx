import { Todo } from "interfaces/Todo";
import React from "react";

type TodoBoxProps = {
    todos: Todo[];
    RemoveButtonHandler: Function;
    ClearButtonHandler: Function;
};

const TodoBox: React.FC<TodoBoxProps> = ({ todos, RemoveButtonHandler, ClearButtonHandler }) => {
    return (
        <div className="app-style">
            {todos.map(function (item) {
                return (
                    <div key={item.id} className="square-style">
                        <div>{item.text}</div>
                        <br />
                        <div>{item.title}</div>
                        <button onClick={() => RemoveButtonHandler(item.id)}>삭제</button>
                        <button onClick={() => ClearButtonHandler(item.id)}>{item.isDone ? "취소" : "완료"}</button>
                    </div>
                );
            })}
        </div>
    );
};

export default TodoBox;
