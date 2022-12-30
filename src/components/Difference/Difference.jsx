import './Difference.css';
import { useState } from 'react';

function Difference() {
    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const [result, setResult] = useState(false);

    const difference = +numberOne - +numberTwo;

    return (
    <div className='difference'>
        <h2 className='title'>Вычитание</h2>
        <div className='inputs'>
            <input className='input' type="number" onChange={e => setNumberOne(e.target.value)} />
            <input className='input' type="number" onChange={e => setNumberTwo(e.target.value)} />
        </div>
        <div className='result'>
            {numberOne}-{numberTwo}<button className='button' onClick={() => setResult(!result)}>=</button>{result && (<div className='answer'>{difference}</div>)} 
        </div>
    </div>
    )
}

export default Difference;