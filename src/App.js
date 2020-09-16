import React, {useState} from 'react';
import Buttons from "./Buttons";
import './App.css';
import ButtonsWithNumbersInArray from "./ButtonsWithNumbersInArray";


function App() {


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

    const [counter, setCounter] = useState([0, 0, 0, 0, 0]);

    const [word, setWord] = useState('');


    const buttonPlus = (index) => {
        const newArr = counter.map((el, i) => {
            if (index === i) {
                return el + 1;
            }
            return el;

        })
        setCounter(newArr);
        setWord(word + 'You used "+"')
    }


    const buttonMinus = (index) => {
        const newArr2 = counter.map((el, i) => {
            if (index === i) {
                return el - 1;
            }
            return el;
        })
        setCounter(newArr2);
        setWord(word + 'You used "-"')
    }

    const buttonReset = (index) => {
        const newArr3 = counter.map((el, i) => {
            if (index === i) {
                return 0;
            }
            return el;
        })
        setCounter(newArr3);
        setWord('')
    }


    return (


        <div className="App">

            <Buttons click={click} plus1={plus1} plus2={plus2} plus3={plus3} minus1={minus1} minus2={minus2}
                     minus3={minus3} reset={reset}/>
            <hr/>
            <br/>

            {counter.map((el, index) => <ButtonsWithNumbersInArray word={word} buttonReset={buttonReset}
                                                                   buttonMinus={buttonMinus} index={index}
                                                                   buttonPlus={buttonPlus} el={el}
                                                                   key={Math.random()}/>)}


        </div>
    );
}

export default App;
