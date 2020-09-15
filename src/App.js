import React, {useState} from 'react';
import Buttons from "./Buttons";
import './App.css';
import ButtonsWithNumbersInArray from "./ButtonsWithNumbersInArray";

function App() {

    const [counter, setCounter] = useState([1, 1, 1, 1, 1]);

    const counterPlus = (index) => {
        const newArr = counter.map((el, i) => {
            if(index === i){
                return el + 1;
            }

            return el
        })

        setCounter(newArr)
    }

    const counterMinus = (index) => {
        const newArr2 = counter.map((el, i) => {
            if(index === i){
                return el - 1;
            }

            return el
        })

        setCounter(newArr2)
    }

    const counterReset = (index) => {
        const newArr3 = counter.map((el, i) => {
            if(index === i){
                return 0;
            }
        })

        setCounter(newArr3)
    }

  return (
    <div className="App">
      <Buttons/>
      <hr/>
        {counter.map((el, index) => <ButtonsWithNumbersInArray counterReset={counterReset} counterPlus={counterPlus}
                                                               counterMinus={counterMinus}  index={index}
                                                               el = {el} key={Math.random()}/>
        )}
    </div>
  );
}

export default App;
