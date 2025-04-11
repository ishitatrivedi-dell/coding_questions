import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/userSlice';

const Counter = () => {
  const count = useSelector((state) => state.app.counter);
  const dispatch = useDispatch();

  return (
    <div className="text-center mt-6">
      <h2 className="text-xl font-semibold">Counter</h2>
      <h1 className="text-4xl">{count}</h1>
      <div className="space-x-2 mt-4">
        <button onClick={() => dispatch(increment())} className="bg-green-500 px-4 py-2 text-white rounded">+</button>
        <button onClick={() => dispatch(decrement())} className="bg-red-500 px-4 py-2 text-white rounded">-</button>
        <button onClick={() => dispatch(reset())} className="bg-gray-500 px-4 py-2 text-white rounded">Reset</button>
      </div>
    </div>
  );
};

export default Counter;
