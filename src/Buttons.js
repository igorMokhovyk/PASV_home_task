import React, {useState} from "react";


function Buttons() {

    const [click, setClick] = useState(0);

    const plus1 = () => {
        setClick(click + 1);
    }
    const plus2 = () => {
        setClick(click + 2);
    }
    const plus3 = () => {
        setClick(click + 3);
    }
    const minus1 = () => {
        setClick(click - 1);
    }
    const minus2 = () => {
        setClick(click - 2);
    }
    const minus3 = () => {
        setClick(click - 3);
    }
    const reset = () => {
        setClick(0)
    }


    return (
        <div>
            <hr/>
            <button className='btn btn-dark' onClick={plus3}>+3</button>
            <button className='btn btn-dark' onClick={plus2}>+2</button>
            <button className='btn btn-dark' onClick={plus1}>+1</button>
            {click}
            <button className='btn btn-dark' onClick={minus1}>-1</button>
            <button className='btn btn-dark' onClick={minus2}>-2</button>
            <button className='btn btn-dark' onClick={minus3}>-3</button>
            <button className='btn btn-danger' onClick={reset}>Reset</button>
        </div>
    )
}

export default Buttons;
