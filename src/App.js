import React, {useState} from 'react';
import Buttons from "./Buttons";
import './App.css';
import ButtonsWithNumbersInArray from "./ButtonsWithNumbersInArray";


function App() {

    const [counter, setCounter] = useState([0, 0, 0, 0, 0]);

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

    const counterPlusNumber = (index) => {
        const newArr = counter.map((el, i) => {
            if (index === i) {
                return el + 1;
            }
            return el;
        })
        setCounter(newArr)
    }

    const counterMinusNumber = (index) => {
        const newArr2 = counter.map((el, i) => {
            if (index === i) {
                return el - 1;
            }
            return el;
        })
        setCounter(newArr2)
    }


    const counterreserButton = (index) => {
        const newArr3 = counter.map((el, i) => {
            if (index === i) {
                return el - el;
            }
            return el;
        })
        setCounter(newArr3)
    }

    return (
        <div className="App">
            <Buttons click={click} plus1={plus1} plus2={plus2} plus3={plus3} minus1={minus1} minus2={minus2}
                     minus3={minus3} reset={reset}/>
            {counter.map((el, index) => <ButtonsWithNumbersInArray counterresetButton={counterreserButton}
                                                                   counterMinusNumber={counterMinusNumber} index={index}
                                                                   counterPlusNumber={counterPlusNumber} el={el}
                                                                   key={Math.random()}/>)}
        </div>
    );
}

export default App;
