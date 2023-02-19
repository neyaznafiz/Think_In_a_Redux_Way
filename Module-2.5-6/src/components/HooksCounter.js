import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

function HooksCounter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increment(value));
  };

  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">
        {count}
      </div>
      <div className="flex space-x-3">
        <button
          onClick={() => incrementHandler(5)}
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
        >
          Increment
        </button>
        <button
          onClick={() => decrementHandler(2)}
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default HooksCounter;
