import React from 'react';
import { UNCOMPLETE, COMPLETE, DEL } from '../actions';
import { useDispatch } from '../context';

export default ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{text}</span>
      <button onClick={() => dispatch({ type: DEL, payload: id })}>X</button>
      <button
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })
        }
      >
        {isCompleted ? 'U' : 'V'}
      </button>
    </li>
  );
};
