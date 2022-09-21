import { React, useState } from 'react'
import './SS3.css'
import TodoList from './TodoList';

export default function SS3() {
    const [input, setInput] = useState([
        {
            id: "1",
            content: "Survive",
            status: "Done"
        }
    ]);

    return (
        <section>
            <div className='main-function'>
                <h1 style={{ color: "Red" }}>Season 3 Coding HomeWork</h1>
                <div className='inputTodolist'>
                    <input type="text" placeholder='Write something...' />
                    <button type='submit' className='btn'>Add</button>
                    {input.map((item, index) => {
                        <div className='list-main'>
                            <TodoList item={item} />
                        </div>
                    })}
                </div>


            </div>
        </section>
    )
}
