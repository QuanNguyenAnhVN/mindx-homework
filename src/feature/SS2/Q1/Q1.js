import React from 'react';
import { useState } from 'react';
import './Q1.css'
const Q1 = () => {
    const [input, setInput] = useState('');

    const handleInput = (input) => {
        console.log(input);
    }
    return (
        <div>
            <input type="text" placeholder='Enter Number' onChange={() =>handleInput(input)}/>
        </div>
    );

}

export default Q1;
