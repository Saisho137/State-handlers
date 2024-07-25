import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../counter/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
        </div>
    );
};

export default Counter;