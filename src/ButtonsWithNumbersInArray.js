import React, {useState} from "react";


function ButtonsWithNumbersInArray(props) {
    const counter = props.el

    const buttonPlusHandler = () => {
        props.counterPlus(props.index);
    }


    return(
        <div>
            <button onClick={buttonPlusHandler}>Minus</button>
            {counter}
            <button onClick={buttonPlusHandler}>Plus</button>
        </div>
    );
}

export default ButtonsWithNumbersInArray;