import React, { createContext, useState } from "react";

interface CounterContextData {
    counter: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const CounterContext = createContext<CounterContextData>({} as CounterContextData);

export const CounterProvider: React.FC = ({children}) => {
    const [counter, setCounter] = useState(0);
    
    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    function reset() {
        setCounter(0);
    }

    return(
        <CounterContext.Provider value={{counter, increment, decrement, reset}}>
            {children}
        </CounterContext.Provider>
    );
}

export default CounterContext;
