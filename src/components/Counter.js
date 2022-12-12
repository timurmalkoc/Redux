import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  
  const IncrementHandler = () => {
    dispatch({type: 'increment'});
  };

  const IncreaseHandler = () => {
    dispatch({type: 'increase', amount: 5});
  }

  const DecrementHandler = () => {
    dispatch({type: 'decrement'});
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={IncreaseHandler}>Increase By 5</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
