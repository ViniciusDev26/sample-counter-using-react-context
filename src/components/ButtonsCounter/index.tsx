import { useContext } from "react";
import CounterContext from "../../contexts/CounterContext";

import styles from './styles.module.scss';

const ButtonsCounter = () => {
    const {increment, decrement, reset} = useContext(CounterContext);

    return (
        <div className={styles.container} >
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default ButtonsCounter;