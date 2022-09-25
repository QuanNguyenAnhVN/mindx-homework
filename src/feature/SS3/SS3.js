import { React, useState } from "react";
import "./SS3.css";
import TodoList from "./TodoList";

export default function SS3() {
    const [todos, setTodos] = useState([
        {
            id: "1",
            content: "Survive",
            status: "Done",
        },
    ]);

    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (input !== "") {
            const newTodo = {
                content: input,
                status: "Not Done",
            };
            const allTodo = [...todos,newTodo,]
            setTodos(allTodo);
        }
    };

    return (
        <section>
            <div className="main-function">
                <h1 style={{ color: "Red" }}>Season 3 Coding HomeWork</h1>
                <div className="inputTodolist">
                    <input
                        type="text"
                        placeholder="Write something..."
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit" className="btn" onClick={handleAdd}>
                        Add
                    </button>
                </div>
                <div className="list-main">
                    <ol>
                        {todos.map((item, index) => {
                            return (
                                <li key={index}>
                                    <TodoList item={item} />
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
}
