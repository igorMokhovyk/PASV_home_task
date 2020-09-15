import React from "react";


function Buttons(props) {

    const clickBut = props.click






    return (
        <div>
            <hr/>
            <button className='btn btn-dark' onClick={props.plus3}>+3</button>
            <button className='btn btn-dark' onClick={props.plus2}>+2</button>
            <button className='btn btn-dark' onClick={props.plus1}>+1</button>
            {clickBut}
            <button className='btn btn-dark' onClick={props.minus1}>-1</button>
            <button className='btn btn-dark' onClick={props.minus2}>-2</button>
            <button className='btn btn-dark' onClick={props.minus3}>-3</button>
            <button className='btn btn-danger' onClick={props.reset}>Reset</button>
        </div>
    )
}

export default Buttons;
