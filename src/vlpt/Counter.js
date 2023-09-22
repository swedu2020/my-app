import React, {useReducer, useState} from "react";
import {countIncrement, countDecrement} from './actions/counterAction';
import { reducer_counter } from "./reducers/counterReducer";

function Counter(){
    // const [number, setNumber] = useState(0);
    const [number, dispatch] = useReducer(reducer_counter, 0);

    const onIncrease = () => {
        // setNumber(number + 1);
        dispatch(countIncrement());
    }
    const onDecrease = () => {
        // setNumber(number - 1);
        dispatch(countDecrement());
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onDecrease}>-1</button>
            <button onClick={onIncrease}>+1</button>
        </div>
    );
}
export default Counter;