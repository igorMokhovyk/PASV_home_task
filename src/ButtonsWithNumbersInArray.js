import React from "react";


function ButtonsWithNumbersInArray(props) {
    const counterBut = props.el

    const plusBut = () => {
        props.counterPlusNumber(props.index)
    }

    const minusBut = () => {
        props.counterMinusNumber(props.index)
    }

    const resetBut = () => {
        props.counterresetButton(props.index)
    }

    return (
        <div>
            {counterBut}
            <button className='btn btn-dark' onClick={plusBut}>+</button>
            <button className='btn btn-dark' onClick={minusBut}>-</button>
            <button className='btn btn-danger' onClick={resetBut}>Reset</button>
        </div>
    );
}

export default ButtonsWithNumbersInArray;