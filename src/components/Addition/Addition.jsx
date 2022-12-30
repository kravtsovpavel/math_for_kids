import './Addition.css';
import { useState } from 'react';

function Addition() {
    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const [result, setResult] = useState(false);

    const sum = +numberOne + +numberTwo;



    return (
    <div className='addition'>
        <h2 className='title'>Сложение</h2>
        <div className='inputs'>
            <input className='input' type="number" onChange={e => setNumberOne(e.target.value)} />
            <input className='input' type="number" onChange={e => setNumberTwo(e.target.value)} />
        </div>
        <div className='result'>
            {numberOne}+{numberTwo}<button className='button' onClick={() => setResult(!result)}>=</button>{result && (<div className='answer'>{sum}</div>)}
        </div>

    </div>
    )
}

export default Addition;