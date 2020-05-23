import React from 'react';
import Add from './Add';
import List from './List';
import ToDo from './ToDo';
import { useState } from '../context';

function App() {
  const { toDos, completed } = useState();
  return (
    <>
      <Add />
      <List name={'To Do'}>
        {toDos.map((toDo) => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            isCompleted={false}
          />
        ))}
      </List>
      <List name={completed.length !== 0 ? 'Completed' : ''}>
        {completed.map((toDo) => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            isCompleted={true}
          />
        ))}
      </List>
    </>
  );
}

export default App;
