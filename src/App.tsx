import React from "react";
import "./App.css";
import Layout from "components/Layout";
import TodoBox from "components/TodoBox";
import { useState } from "react";
import { Todo } from "interfaces/Todo";

const App = () => {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 0, title: "Javascript 공부하기", text: "자바스크립트를 공부해 봅시다", isDone: false },
        { id: 1, title: "React 공부하기", text: "리액트를 공부해 봅시다", isDone: false },
        { id: 2, title: "Typescript 공부하기", text: "타입스크립트를 공부해 봅시다", isDone: true },
    ]);

    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    // 추가버튼
    const addButtonHandler = () => {
        const newTodos: Todo = {
            id: todos[todos.length - 1].id + 1,
            text: text,
            title: title,
            isDone: false,
        };
        setTodos([...todos, newTodos]);
        setTitle("");
        setText("");
    };

    // 삭제버튼
    const RemoveButtonHandler = (id: number) => {
        const deleteTodos = todos.filter((todo) => todo.id !== id);
        setTodos(deleteTodos);
    };

    // 완료버튼
    const ClearButtonHandler = (id: number) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isDone: !todo.isDone, // isDone 값을 반대로 변경
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    return (
        <Layout>
            <div>
                <div className="add-container">
                    <div className="add-context-container">
                        <div>
                            제목 : &nbsp;
                            <input value={title} onChange={titleChangeHandler} />
                        </div>
                        <div>
                            내용 : &nbsp;
                            <input value={text} onChange={textChangeHandler} />
                        </div>
                    </div>
                    <button onClick={addButtonHandler}>추가하기</button>
                </div>

                <div>
                    <h1>Working...🔥</h1>
                </div>
                <div className="app-style">
                    <TodoBox
                        todos={todos.filter((todo) => !todo.isDone)}
                        RemoveButtonHandler={RemoveButtonHandler}
                        ClearButtonHandler={ClearButtonHandler}
                    />
                </div>
                <div>
                    <h1>Done..⭐️</h1>
                </div>
                <div className="app-style">
                    <TodoBox
                        todos={todos.filter((todo) => todo.isDone)}
                        RemoveButtonHandler={RemoveButtonHandler}
                        ClearButtonHandler={ClearButtonHandler}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default App;
