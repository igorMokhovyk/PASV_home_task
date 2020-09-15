import React, {useState} from "react";


function ButtonsWithNumbersInArray(props) {
    const counter = props.el

    const buttonPlusHandler = () => {
        props.counterPlus(props.index);
    }

    const buttonMinusHandler = () => {
        props.counterMinus(props.index);
    }

    const buttonReset = () => {
        props.counterReset(props.count);
    }


    return(
        <div>
            <button className='btn btn-dark' onClick={buttonMinusHandler}>Minus</button>
            {counter}
            <button className='btn btn-dark' onClick={buttonPlusHandler}>Plus</button>
            <button onClick={buttonReset}>Reset</button>
        </div>
    );
}

export default ButtonsWithNumbersInArray;