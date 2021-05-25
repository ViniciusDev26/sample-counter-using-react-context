import { useContext } from "react";
import CounterContext from "../../contexts/CounterContext";

const DisplayCounter = () => {
    const {counter} = useContext(CounterContext);

    return (
        <h1>{counter}</h1>
    );
}

export default DisplayCounter;