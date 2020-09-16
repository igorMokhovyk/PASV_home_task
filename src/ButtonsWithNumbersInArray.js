import React from "react";


function ButtonsWithNumbersInArray(props) {


    const counterNumber = props.el;

    const words = props.word

    const buttonPlusHandler = () => {
        props.buttonPlus(props.index)
    }

    const buttonMinusHandler = () => {
        props.buttonMinus(props.index)
    }

    const buttonResetHandler = () => {
        props.buttonReset(props.index)
    }



    return (
        <div>
            {words}
            <button className='btn btn-light  text-dark' onClick={buttonPlusHandler}>+</button>
            {counterNumber}

            <button className='btn btn-light text-dark shadow-lg' onClick={buttonMinusHandler}>-</button>
            <button className='btn btn-outline-danger shadow shadow-lg text-dark' onClick={buttonResetHandler}>Res</button>

        </div>
    );
}

export default ButtonsWithNumbersInArray;