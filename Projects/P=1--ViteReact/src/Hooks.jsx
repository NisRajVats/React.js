import {useState} from 'react';
function Hooks() {

    let [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if(count > 0)
        {
            setCount(count - 1);
        }
    }
    const reset = () => {
        setCount(0);
    }

    return (
    <>
        <h1>What is Need of HOOKS!</h1>
        <button onClick={increment}>Increment {count}</button>
        <button onClick={decrement}>decrement{count}</button>
        <button onClick={reset}>Reset{count}</button>
    </>
    );
}

// Hooks updates the state and re-renders the component.

export default Hooks;
