import React from 'react';
import Header from './Header';
import { useFns } from './context';

const Screen = ({ user }) => {
  const { logUserIn } = useFns();
  return (
    <div>
      <Header />
      <h1>First screen</h1>
      <button onClick={logUserIn}>Log user in</button>
    </div>
  );
};

export default Screen;
