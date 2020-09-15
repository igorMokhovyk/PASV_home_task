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

  return (
    <div className="App">
      <Buttons/>
      <hr/>
        {counter.map((el, index) => <ButtonsWithNumbersInArray counterPlus={counterPlus} index={index}
                                                               el = {el} key={Math.random()}/>
        )}
    </div>
  );
}

export default App;
