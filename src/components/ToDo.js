import React, { useState } from 'react';
import { UNCOMPLETE, COMPLETE, DEL, EDIT } from '../actions';
import { useDispatch } from '../context';

export default ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [editToDo, setEditToDo] = useState(text);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: EDIT, payload: { id, text: editToDo, isCompleted } });
    setEdit(false);
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setEditToDo(value);
  };
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
      <button onClick={() => setEdit(true)}>edit</button>
      {edit && (
        <form onSubmit={onSubmit}>
          <input type="text" value={editToDo} onChange={onChange} />
          <button type="button" onClick={() => setEdit(false)}>
            X
          </button>
        </form>
      )}
    </li>
  );
};
