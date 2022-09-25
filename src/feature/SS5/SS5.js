import { React, useState } from 'react';
import './SS5.css'
const SS4 = () => {
    const [count, setCount] = useState(0);
    return (
        <section>
            <div className="main-function">
                <h1 style={{ color: "Red" }}>Season 5 Coding HomeWork</h1>
                <button className='btn' onClick={() => { setCount(count === 2 ? 0 : count + 1) }}> Next</button>
                <div className='trafficLight'>
                    <span>{count === 0 ? <div className='red dot'></div> : <div className='dot'></div>}</span>
                    <span>{count === 1 ? <div className='yellow dot'></div> : <div className='dot'></div>}</span>
                    <span>{count === 2 ? <div className='green dot'></div> : <div className='dot'></div>}</span>
                </div>
            </div>
        </section>
    );
}

export default SS4;
