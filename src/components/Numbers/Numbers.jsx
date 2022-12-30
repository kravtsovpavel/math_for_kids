import './Numbers.css';
import { useState } from 'react';

function Numbers() {
    const [count, setCount] = useState(0);

    const onClickPlus = () => {
        setCount(+count + 1)
    }
    
    const onClickMinus = () => {
        setCount(+count - 1)
    }

    return(
    <div className='numbers'>
        <h2 className='title'>Числа</h2>
        <input className='input' type="number" onChange={e => setCount(e.target.value)} />
        <div className='result'>{count}</div>
        <div className='buttons'>
            <button className="minus" onClick={onClickMinus} >- 1</button>
            <button className="plus" onClick={onClickPlus}>+ 1</button>
        </div>
    </div>
    )
}

export default Numbers;